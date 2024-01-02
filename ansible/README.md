# 1-host-setup.yaml

This playbook does a simple `apt upgrade`, and then imports all tasks defined in the `features/` folder.

I do this to reduce the cognitive load by seperating the tasks into a "feature" file, for getting a better overview without resorting to multiple playbooks.

> [!NOTE]
> Also had the initial plan to run these tasks in parallel, however the tasks finishes rather quickly so I left it in sequential mode.

These tasks prepares the host for running docker containers and libvirt VMs, by enabling features such as bridged networking, systemd modules etc.

I also like to live non-dangerously. So I have enabled `unattended-upgrades` for upgrading `apt` and `kernel` on a schedule.

Which I'm not in the slightest concerned about, since all services run under either Docker or LibVirt, and I have regular backups of persistent storage to my Synology NAS.

# 2-docker-services.yaml

This playbook creates groups and _"root"_ folders for my docker containers, and then runs playbooks in a sequence.

Now a fun question, why use ansible for starting docker services and not `docker-compose`?

This is beacuse we need to do a bunch of tasks on the host before we can start a docker container.

Such as:

  - Creating non-root users
  - Creating folders with correct permissions for the user
  - Create `docker network`
  - Add backup scripts to `crontab`
  - Copy configuration files for docker containers
  - Copy secrets to folder with `0600` permissions for the non-root user.
    - I use Ansible Vault for convenience here.

So I have opted to create the docker containers using Ansible, so that I can run a specific playbook for a service, provisioning everything I need before re-creating the docker container without the need to SSH into the host.

# 3-vms.yaml

This playbook prepares the host for running LibVirt VMs, and then creates VMs if they don't exist or re-creates them if the `vars.recreate_nodes` flag is set.

The VM disks are setup like this:

  - Cloud Init user-data configuration
    - Sets hostname
    - Creates super-user which can only be accessed over SSH with `homelab` private key.
    - Adds a bunch of convenience apt packages.
    - Extends the root partition to make full use of the available space on the VM disk.
    - Enables k8s specific systemd cgroups kernel parameters
  - Cloud Init network configuration
    - Sets static IP and basic network adapter configuration

These bullets above are used by `cloud-localds` to create a image which will be mounted as a DVD for configuring Cloud Init during boot.

The VMs are then setup like this:

  - Uses the bridge network adapter `br0` on the host, which makes the VM guests accessible in the same way as the host.
  - This is a headless guest, so no graphics, consoles etc.
  - A new disk is created with the Ubuntu 22.04 LTS base image as the backing store, meaning that the base image will be copied onto the new disk.
  - The Cloud Init configuration disk **must** be mounted after the guest OS disk, and will be ran on the initial boot.
  - The VMs autostart on boot.

When the VMs are up and running, they should be accessible over SSH on my local network.

# 4-k8s.yaml

The playbooks referenced in this file is applyed to the `k8s` hosts, which are the VMs created in `3-vms.yaml`

There is a `README.md` in the `k8s/` folder for a summary for how Kubernetes is configured on the LibVirt VMs.

# 5-reboot.yaml

Reboots the host, duh! Makes sure that everything works properly after rebooting. 