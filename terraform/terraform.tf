terraform {
  required_version = ">=1.6.0"

  # State in-cluster, so that it'll be reset when the vms are recreated
  backend "kubernetes" {
    secret_suffix  = "tf-state"
    config_path    = "~/.kube/config_homelab"
    config_context = "mgmt"
  }
}

provider "google" {
  project = "cloudlab-267613"
  region  = "us-west1"
}

provider "kubernetes" {
  config_path    = "~/.kube/config_homelab"
  config_context = "mgmt"
}

provider "kubernetes" {
  alias = "test"

  config_path    = "~/.kube/config_homelab"
  config_context = "test"
}

provider "kubernetes" {
  alias = "prod"

  config_path    = "~/.kube/config_homelab"
  config_context = "prod"
}

provider "helm" {
  kubernetes {
    config_path    = "~/.kube/config_homelab"
    config_context = "mgmt"
  }
}
provider "helm" {
  alias = "test"
  kubernetes {
    config_path    = "~/.kube/config_homelab"
    config_context = "test"
  }
}

provider "helm" {
  alias = "prod"
  kubernetes {
    config_path    = "~/.kube/config_homelab"
    config_context = "prod"
  }
}