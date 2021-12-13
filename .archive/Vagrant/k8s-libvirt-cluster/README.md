Running `provision-host.sh` will ready a Ubuntu 20.04 host OS for libvirt and virtio network bridge.

* Vagrant
  * Creates 3-node k8s cluster
  * Uses libvirt for KVM virtualization
  * Bridged Virtio network adapter
    * Allows hosting from the Host OS and k8s cluster with seperate IP addresses
