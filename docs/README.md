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

#### Current hardware:
  - [ASRock X300](https://www.asrock.com/nettop/AMD/DeskMini%20X300%20Series/index.asp)
    - AMD Ryzen 5600G
    - Kingston DDR4 3200MHz 32GB HX432S20IBK2/32
    - Storage:
      - Samsung 850 256GB NVMe
      - Intel 600p 1TB NVMe
      - [IcyBox USB 3.1 (Gen2) RAID enclosure](https://icybox.de/en/product.php?id=176):
        - WD WD80EZAZ HGST SATA 8TB
        - WD WD80EZAZ HGST SATA 8TB
    - Network Interfaces:
      - Realtek RTL8111F Gigabit on motherboard
      - [Realtek RTL8111F Gigabit M.2 adapter](https://www.dfrobot.com/product-2318.html)
