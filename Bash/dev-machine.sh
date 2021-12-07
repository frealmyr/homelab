#!/bin/bash
MACHINENAME=$1

# download regolith.iso
if [ ! -f ./regolith.iso ]; then
  wget https://github.com/regolith-linux/regolith-ubuntu-iso-builder/releases/download/release-release-focal-focal_standard-1.6.0/Regolith_1.6.0_focal.iso -O regolith.iso
fi

# create vm
VBoxManage createvm --name $MACHINENAME --ostype "Ubuntu_64" --register --basefolder ~/VMs

# enable hwacc, set cpu/mem, connect network
VBoxManage modifyvm $MACHINENAME --ioapic on --hwvirtex on
VBoxManage modifyvm $MACHINENAME --memory 4096 --vram 128
VBoxManage modifyvm $MACHINENAME --nic1 nat

# create disk and mount iso
VBoxManage createhd --filename ~/VMs/$MACHINENAME/$MACHINENAME_DISK.vdi --size 80000 --format VDI
VBoxManage storagectl $MACHINENAME --name "SATA Controller" --add sata --controller IntelAhci --hostiocache on
VBoxManage storageattach $MACHINENAME --storagectl "SATA Controller" --discard on --port 0 --device 0 --type hdd --medium ~/VMs/$MACHINENAME/$MACHINENAME_DISK.vdi
VBoxManage storagectl $MACHINENAME --name "IDE Controller" --add ide --controller PIIX4
VBoxManage storageattach $MACHINENAME --storagectl "IDE Controller" --port 1 --device 0 --type dvddrive --medium ~/VMs/debian.iso
VBoxManage modifyvm $MACHINENAME --boot1 dvd --boot2 disk --boot3 none --boot4 none

# enable RDP
VBoxManage modifyvm $MACHINENAME --vrde on
VBoxManage modifyvm $MACHINENAME --vrdemulticon on --vrdeport 10001

# start the VM
VBoxHeadless --startvm $MACHINENAME
