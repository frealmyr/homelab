terraform {
  required_version = ">=1.6.0"

  backend "gcs" {
    bucket = "cloudlab-tf-state"
    prefix = "k8s-test"
  }
}

provider "google" {
  project = "cloudlab-267613"
  region  = "us-west1"
}

provider "kubernetes" {
  config_path    = "~/.kube/config_homelab"
  config_context = "test"
}

provider "kubernetes" {
  alias = "mgmt"

  config_path    = "~/.kube/config_homelab"
  config_context = "mgmt"
}

provider "helm" {
  kubernetes {
    config_path    = "~/.kube/config_homelab"
    config_context = "test"
  }
}
