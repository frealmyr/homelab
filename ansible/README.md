# Ansible

This folder contains ansible playbooks for provisioning the Raspberry Pi cluster in my homelab.

The playbooks are repeatable. And will for instance destroy your Kubernetes cluster before creating a new one if you re-run the `k8s-5-create-cluster.yml` playbook. :D

`main.yml` triggers all playbooks under the `playbooks/` folder, the hostnames and ip addresses for each Raspberry Pi is defined in `hosts.yaml`.

After all of the playbooks are provisioned, you will end up with a three-node Kuberentes cluster.

## Running these playbooks

I use the [Raspberry Pi Imager](https://www.raspberrypi.com/software/) to flash the OS disks for each node.

>I ditched the creating a Rasbian Lite image without this tool, as i needed to disable a service that creates a tty prompt for changing the default pi/raspberry user on boot and then creating a new user. Far simpler to just use the Imager tool to get a updated image with our settings those few times.

#### Prerequisites
  - Raspbian Lite 64-bit installed on each node
    - Username and password is changed using the rPi imager.
    - Enable SSH.
  - Install ansible on local machine
  - Run `ansible-galaxy collection install community.general`

You can then run `ansible-playbook main.yml` to provision all of the playbooks under `playbooks/`, or you can run them individually if you need to debug something.
