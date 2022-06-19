terraform {
  required_version = ">=1.0.0"

  backend "local" {
    path = ".terraform/state/terraform.tfstate"
  }
}

provider "kubernetes" {
  config_path = ".terraform/kubeconfig"
}

provider "helm" {
  kubernetes {
    config_path = ".terraform/kubeconfig"
  }
}
