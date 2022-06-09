# Homelab

All homelab host configuration is done via Ansible, Kubernetes provisioning is done seperately using Terraform after Ansible.

> Better documentation coming soon~

I provision my machines with ansible, then i use the `manage-stack.sh` script in `docker/` to manage all of the docker-compose stacks remotely.
