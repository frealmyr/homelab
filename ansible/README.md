# Ansible

This folder contains ansible playbooks for provisioning my Asrock X300 machine as a Kubernetes cluster.

The playbooks are repeatable. And will for example destroy your Kubernetes cluster before creating a new one if you re-run the `k8s-3-create-cluster.yml` playbook. :D

You can run `ansible-playbook main.yml` to provision all of the playbooks under `playbooks/`, or you can run them individually if you need to debug something.

You can configure as many worker nodes as you want by adding them under `k8s_workers:`, and they will be configured the same as the controller before being enrolled as a worker node.
