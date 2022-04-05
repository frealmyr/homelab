# Homelab

> Better documentation coming soon~

All homelab host configuration is done via Ansible, Kubernetes provisioning is done seperately using Terraform after Ansible.

### Currently running in homelab

  - Ubuntu 20.04 LTS, connected to TV for HTPC and Moonlight streaming
  - Gameservers using LinuxGSM directly on host, on seperate linux users:
    - Satisfactory
  - Kubeadm provided Kubernetes cluster:
    - Docker/Containerd backend
    - Flannel, MetalLB and Traefik for network
    - [Rancher Local Path Provisioner](https://github.com/rancher/local-path-provisioner) for dynamic hostPath PersistentVolumes
    - ArgoCD deploys everything else:
      - _todo_

### How to setup this homelab

#### Provisioning
Provision the host using ansible. Clone or download the repository, then run `ansible-playbook main.yml` or run each playbook in `ansible/` individually.

This will install and configure the following:

- install packages for using host as HTPC connected to TV
- install asdf for various binaries used in homelab
- install docker
  - add user to docker group
  - use systemd cgrup (k8s requirement)
- install gameservers using LinuxGSM
  - satisfactory
- install k8s using kubeadm
  - add ufw network rules
  - disable swap (required)
  - enable modules
  - configure sysctl-settings
  - initialize k8s cluster
  - save kubeconfig to user
  - untaint master node
  - install flannel CNI plugin
- setup dotfiles using git clone
- generate firefox profiles
- configure firewall
  - enable firewall
  - limit on ssh
  - allow http and https
  - allow CDIR networks to host

### Current hardware

| [ASrock X300](https://www.asrock.com/nettop/AMD/DeskMini%20X300%20Series/index.asp) |           |                           |
|-------------|-----------------------------------------------------------------------------------|---------------------------|
| CPU         | AMD Ryzen 5600G                                                                   | 6c/12t - 4.4GHz - 16MB    |
| Memory      | Kingston DDR4 3200MHz 32GB                                                        | HX432S20IBK2/32           |
| SSD         | Motherboard NVMe slots                                                            |                           |
|             | &nbsp;&nbsp; ↳                                                                    | Samsung 950 1TB           |
|             | &nbsp;&nbsp; ↳                                                                    | Intel 660p 1TB            |
| HDD         | [IcyBox USB 3.1 (Gen2) RAID enclosure](https://icybox.de/en/product.php?id=176)   |                           |
|             | &nbsp;&nbsp; ↳                                                                    | WD WD80EZAZ HGST SATA 8TB |
|             | &nbsp;&nbsp; ↳                                                                    | WD WD80EZAZ HGST SATA 8TB |
| Network 1   | Realtek RTL8111F Gigabit on motherboard                                           |                           |
| Network 2   | [Realtek RTL8111F Gigabit M.2 adapter](https://www.dfrobot.com/product-2318.html) |                           |
