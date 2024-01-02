Traefik is my go-to for a simple reverse-proxy that is container native.

  - It grants me the flexibility to use docker labels or dynamic configuration files for hot-reloading changes to the reverse-proxy.
  - I have configured it to create LetsEncrypt certificates using DNS-challenge, so that I can get valid certificates on my closed local network.
  - I have also enabled `strictSNI` and a bunch of security middlewares to get A+ rating.
  - I use it to reverse-proxy external services, such as my Prusa Mini 3d-printer.
