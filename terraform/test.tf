module "test-external-secrets" {
  source = "./modules/external-secrets"

  gcp_project = var.gcp_project
  environment = "test"

  providers = {
    kubernetes = kubernetes.test # dynamic provider not possible
  }
}

module "test-network" {
  source = "./modules/network"

  ip_address = var.ip_address
  providers = {
    kubernetes = kubernetes.test # dynamic provider not possible
    helm       = helm.test
  }
}
