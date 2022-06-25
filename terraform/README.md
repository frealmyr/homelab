# Cluster Bootstrapping

This is where the cluster is initially boostrapped using Terraform.

  - Configure networking
    - Adds network plugin to Kubernetes
    - Adds metallb for enabling loadbalacing resources in the cluster
  - Fetch secrets from Google Cloud Secret Manager
    - Uses free-tier (max 6 secret versions)
  - Install ArgoCD
    - Configure Github OAuth login
    - Add ArgoCD `application` for the `../chart/argo` chart which adds apps-of-apps in the `k8s/` folder.
