# traefik-host
A simple configuration for running Traefik as a reverse proxy for other docker containers in a home lab.
Also gives the benefit of easy setup and automatic renewal of Let's Encrypt certificates, for both domain and subdomains.

### Prerequisite:
- You have access to a FQDN
- Subdomains have been added to the FQDN DNS and is active
- Docker and docker-compose is installed
- Ports 80, 8080 and 443 are portforwarded in your network, and FQDN DNS points to your public IP
- Ports are available, and not in use by some other software

Note: If you do not have a FQDN, you can remove port 443 from the configuration files and comment out the `[acme]` block from traefik.toml. This will however limit you to using unecrypted traffic over HTTP.

### How to use:
- Clone repository
- Update traefik.toml with your email, domain and subdomain information for Let's Encrypt certification issuing
- Set the correct permissions for the acme.json file
```
chmod 600 acme.json
```
- Create a docker network that will be used for reverse proxy across docker containers:
```
docker network create web
```
- Start the docker container
```
docker-compose up -d
```
- Visit http://your-domain.com:8080 to check if Traefik is running
- Traefik is now ready to be used

### Example usage:
Here is a working docker-compose.yml example from my [simple-portfolio](https://github.com/frealmyr/simple-portfolio) project, which is running Nginx and PHP-FPM:
```
version: "3.2"

networks:
  web:
    external: true    # Traefik reverse proxy network

  internal:
    external: false   # Internal only network for PHP-FPM

services:

  nginx:
    image: nginx:${NGINX_VERSION}
    networks:
      - web
      - internal
    links:
      - php
    volumes:
      - ${PUBLIC_HTML}/:/var/www/html/
      - ./docker/nginx/default.conf:/etc/nginx/conf.d/default.conf
    depends_on:
      - php
    container_name: nginx
    labels:
      - traefik.enable=true               # Enable Traefik for this container
      - traefik.backend=subdomain         # (Optional) Describe the backend for Traefik
      - traefik.frontend.rule=Host:subdomain.yourdomain.com  # The FQDN
      - traefik.docker.network=web        # The network used for Traefik reverse proxy
      - traefik.port=80                   # The port you wish to forward to Traefik

  php:
    build:
      context: './docker/php'
      args:
        PHP_VERSION: ${PHP_VERSION}
    networks:
      - internal
    volumes:
      - ${PUBLIC_HTML}/:/var/www/html/
    container_name: php
    labels:
      - traefik.enable=false        # Disable Traefik, since this is a container for backend stuff

