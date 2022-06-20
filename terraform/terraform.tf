terraform {
  required_version = ">=1.0.0"

  backend "gcs" {
    bucket = "cloudlab-tf-state"
    prefix = "homelab"
  }
}

provider "google" {
  project = "cloudlab"
  region  = "us-west1"
}

data "google_secret_manager_secret_version" "kubeconfig" {
  project = "cloudlab-267613"
  secret  = "homelab-kubeconfig"
}

locals {
  kubeconfig = jsondecode(data.google_secret_manager_secret_version.kubeconfig.secret_data)
}

provider "kubernetes" {
  host                   = local.kubeconfig.host
  client_certificate     = base64decode(local.kubeconfig.client_certificate)
  client_key             = base64decode(local.kubeconfig.client_key)
  cluster_ca_certificate = base64decode(local.kubeconfig.cluster_ca_certificate)
}

provider "helm" {
  kubernetes {
    host                   = local.kubeconfig.host
    client_certificate     = base64decode(local.kubeconfig.client_certificate)
    client_key             = base64decode(local.kubeconfig.client_key)
    cluster_ca_certificate = base64decode(local.kubeconfig.cluster_ca_certificate)
  }
}
