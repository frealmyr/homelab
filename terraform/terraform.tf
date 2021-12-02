terraform {
  required_version = ">=1.0.0"

  backend "gcs" {
    bucket = "cloudlab-tf-state"
    prefix = "homelab"
  }
}

provider "google" {
  project = "cloudlab-267613"
  region  = "us-west1"
}

data "google_secret_manager_secret_version" "kubeconfig" {
  project = "cloudlab-267613"
  secret  = "homelab-kubeconfig"
}

locals {
  kubeconfig = yamldecode(data.google_secret_manager_secret_version.kubeconfig.secret_data)
}

provider "kubernetes" {
  host                   = local.kubeconfig.clusters[0].cluster.server
  client_certificate     = base64decode(local.kubeconfig.users[0].user.client-certificate-data)
  client_key             = base64decode(local.kubeconfig.users[0].user.client-key-data)
  cluster_ca_certificate = base64decode(local.kubeconfig.clusters[0].cluster.certificate-authority-data)
}

provider "helm" {
  kubernetes {
    host                   = local.kubeconfig.clusters[0].cluster.server
    client_certificate     = base64decode(local.kubeconfig.users[0].user.client-certificate-data)
    client_key             = base64decode(local.kubeconfig.users[0].user.client-key-data)
    cluster_ca_certificate = base64decode(local.kubeconfig.clusters[0].cluster.certificate-authority-data)
  }
}
