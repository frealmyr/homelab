module "external-secrets-mgmt" {
  source = "./modules/external-secrets"

  gcp_project = var.gcp_project
  environment = "mgmt"

  # providers = {
  #   kubernetes = kubernetes.mgmt # dynamic provider not possible
  # }
}

module "network" {
  source = "./modules/network"

  ip_address = var.ip_address
}
