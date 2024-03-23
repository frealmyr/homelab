module "prod-external-secrets" {
  source = "./modules/external-secrets"

  gcp_project = var.gcp_project
  environment = "prod"

  providers = {
    kubernetes = kubernetes.prod # dynamic provider not possible
  }
}

module "prod-network" {
  source = "./modules/network"

  ip_address = var.ip_address
  providers = {
    kubernetes = kubernetes.prod # dynamic provider not possible
    helm       = helm.prod
  }
}
