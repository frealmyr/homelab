#!/bin/bash

echo "ubuntu: installing vagrant, qemu and libvirt.."
sudo apt install -f ansible vagrant qemu-kvm libvirt-daemon-system qemu-utils libvirt-dev ruby-dev

echo "vagrant: installing vagrant mutate plugin.."
vagrant plugin install vagrant-mutate

echo "vagrant: downloading focal64 virtualbox box image.."
vagrant box add --provider virtualbox ubuntu/focal64

echo "vagrant: converting focal64 image to libvirt provider.."
vagrant mutate ubuntu/focal64 libvirt
vagrant mutate --input-provider=virtualbox ubuntu/focal64 kvm

echo "ubuntu: creating network bridge.."
sudo nmcli conn add type bridge con-name br0 ifname br0 \
  && sudo nmcli conn add type ethernet slave-type bridge con-name bridge-br0 ifname enp2s0 master br0 \
  && sudo nmcli conn up br0 \
  && sudo nmcli conn down Wired\ connection\ 1 \
  && sudo nmcli conn show --active
