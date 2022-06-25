# Provision Machines

This folder contains ansible playbooks for provisioning the servers in my homelab.

I've used a bunch of distros, and have ended up on using Ubuntu LTS on my HTPC and Ubuntu Server LTS for all headless servers as it fits my needs the most.

The content of the playbooks are self explaining.

The playbooks are repeatable. And will for instance destroy your Kubernetes cluster before creating a new one if you re-run the `kubernetes.yml` playbook. :D

After all of the playbooks are provisioned, you will end up with a two-node Kuberentes cluster, where one of the nodes have HDDs attached for NAS.

## Using the playbooks

#### Prerequisites

  - Install ansible
  - Run `ansible-galaxy collection install community.general`

You can then run `ansible-playbook main.yml` to provision all of the playbooks under `playbooks/`, or you can run them individually.