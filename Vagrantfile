IMAGE_NAME = "generic/ubuntu2004"
K3S_VERSION = "v1.22.4+k3s1"
HOST_USERNAME = "fredrick"
VM_CPU = "6"
VM_MEM = "8096"

REQUIRED_PLUGINS_LIBVIRT = %w(vagrant-libvirt)
exit unless REQUIRED_PLUGINS_LIBVIRT.all? do |plugin|
  Vagrant.has_plugin?(plugin) || (
    puts "The #{plugin} plugin is required. Please install it with:"
    puts "$ vagrant plugin install #{plugin}"
    false
  )
end

Vagrant.configure("2") do |config|
  config.vm.define "k3s"
  config.vm.box = IMAGE_NAME
  config.vm.hostname = "k3s-blue"

  config.ssh.forward_agent = false
  config.vm.network :public_network,
    :dev => "br0",
    :mode => "virtio",
    :type => "bridge",
    ip: "10.0.0.200",
    auto_config: true
    
  config.vm.provider "libvirt" do |libvirt|
    libvirt.driver = "kvm"
    libvirt.cpus = VM_CPU
    libvirt.memory = VM_MEM
    libvirt.graphics_type = "none"
  end
  
  config.vm.provision "ansible" do |ansible|
    ansible.playbook = "playbooks/k3s-main.yml"
    ansible.extra_vars = {
      k3s_version: "#{K3S_VERSION}",
      host_username: "#{HOST_USERNAME}",
  }
  end
end
