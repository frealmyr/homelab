Terraform is used for initial configuratin of my Kubernetes clusters

In Terraform I make use of:

  - Google GCS free tier for terraform state backend
    - Each cluster gets its own state folder
  - Google Secret Manager free tier
    - Up to 6 active secrets for free
    - Fetches secrets uploaded manually
      - Or by ansible-playbooks, such as kubeconfig

Terraform provisions all clusters with:

  - Flannel Network CNI
  - Metallb for LoadBalancers
    - Shared mode, which means multiple LBs can use the same IP on different ports.
  - A Kubernetes secret with crendentials for external-secrets
    - For syncing Google Secret Manager secrets as Kubernetes secrets

Terraform provisions the management cluster with:

  - ArgoCD instance using `helm_release`
  - K8s secrets containing `kubeconfig` for ArgoCD ApplicationSet cluster generator
  - A initial ArgoCD application which targets the `gitops/` root folder in this repository.

