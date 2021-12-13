#!/bin/bash

echo "apt: update & upgrade.."
sudo apt update && sudo apt upgrade -f

echo "apt: installing vagrant, qemu and libvirt.."
sudo apt install -f ansible vagrant qemu-kvm libvirt-daemon-system qemu-utils libvirt-dev ruby-dev

echo "apt: install latest terraform cli.."
sudo apt-get update && sudo apt-get install -y gnupg software-properties-common curl
curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -
sudo apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"
sudo apt-get update && sudo apt-get install -y terraform

echo "nmcli: creating network bridge on enp2s0.."
sudo nmcli conn add type bridge con-name br0 ifname br0 \
  && sudo nmcli conn add type ethernet slave-type bridge con-name bridge-br0 ifname enp2s0 master br0 \
  && sudo nmcli conn up br0 \
  && sudo nmcli conn down Wired\ connection\ 1 \
  && sudo nmcli conn show --active
