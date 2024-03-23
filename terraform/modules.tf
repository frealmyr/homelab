data "local_file" "kubeconfig_raw" {
  filename = pathexpand("~/.kube/config_homelab")
}

locals {
  kubeconfig = yamldecode(data.local_file.kubeconfig_raw.content)
}

################
## Management ##
################

module "mgmt-external-secrets" {
  source      = "./modules/external-secrets"
  environment = "mgmt"
}

module "mgmt-network" {
  source     = "./modules/network"
  ip_address = "192.168.0.120"
}

module "mgmt-argocd" {
  source     = "./modules/argocd"
  depends_on = [module.mgmt-network]

  kubeconfig = local.kubeconfig
}

#############
## Testing ##
#############

module "test-external-secrets" {
  source = "./modules/external-secrets"

  environment = "test"

  providers = {
    kubernetes = kubernetes.test # dynamic provider not possible
  }
}

module "test-network" {
  source = "./modules/network"

  ip_address = "192.168.0.121"
  providers = {
    kubernetes = kubernetes.test # dynamic provider not possible
    helm       = helm.test
  }
}

################
## Production ##
################

module "prod-external-secrets" {
  source = "./modules/external-secrets"

  environment = "prod"

  providers = {
    kubernetes = kubernetes.prod # dynamic provider not possible
  }
}

module "prod-network" {
  source = "./modules/network"

  ip_address = "192.168.0.122"
  providers = {
    kubernetes = kubernetes.prod # dynamic provider not possible
    helm       = helm.prod
  }
}
