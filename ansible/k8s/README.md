# 0-checks.yaml

Checks that `gcloud` is configured properly, as I use it to upload `kubeconfigs` to Google Secret Manager. As it will be fetched by Terraform, so that I can avoid manually copy/pasting stuff between local folders. Free Tier ftw :)

# 1-packages.yaml

Adds `containered` and `kubeadm` binaries the proper way for Ubuntu, I have also made it easy to upgrade the binaries using ansible variables.

Also adds `prometheus-exporter` for monitoring the VMs using Prometheus.

# 2-configuration.yaml

Configures the OS on the guest VMs for running Kubernetes, such as:

  - configuring hostname
  - disable swap
  - load modules
  - configuring systemd
  - configuring containered

# 3-firewall.yaml

Not finished this one yet, will limit access to VMs to only approved ports.

# 4-create-cluster.yaml

This is where we create the clusters.

> [!WARNING]
> The cluster is re-created each time we run this playbook.

Keynotes from configuration:

  - Changes the advertised IP address, so that kubeconfig etc. is pointing to the node IP and not localhost.
  - Sets a bunch of reservation options for CPU/Memory, so that non-critical pods are evicted instead of the guest VM freezing up. (ArgoCD application controller is usually yeeted)
  - Allows resevation for all node ports, I payed for all the ports, so I'm going to use them all.
  - Sets pod/svc subnet to `10.244.0.0/16` and `10.122.0.0/16` due to flannel networking configured to `host-gw`.

# 5-kubeconfig.yaml

This is where we create a dedicated `kubeconfig` for usage with Terraform. The user is granted `cluster-admin` for convenience, so no need to copy that default `admin.conf` afterwards.

The `kubeconfig` is then:

  - Stored on the remote VM.
    - For cases where we debug directly on the host.
  - Stored on the local workstation.
    - Stored to a dedicated `config_homelab` kubeconfig, so that we don't touch our corpo kubeconfig.
    - Multiple kubeconfigs are combined into this single kubeconfig.
  - Uploaded to Google Secret Manager.
    - Creates the secret if it does not exist.
    - Nukes the existing version.
    - Uploads the kubeconfig to a new secret version.
    - Uses the free tier, which states 6 free active versions.
    - To be used with Terraform, for interacting with Kubernetes resources.

# 6-reboot.yaml

Reboots the guest VMs to ensure Kubernetes survives a reboot, but also..

> [!WARNING]
> The network CNI plugin will not work properly before rebooting the node, CoreDNS will be in crashLoopBackoff until reboot.