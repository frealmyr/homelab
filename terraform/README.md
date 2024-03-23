### Terraform is used for kickstarting ArgoCD for my Kubernetes environments.

  - Kubernetes secret as state backend
    - Each cluster gets its own state secret.
    - Makes it easy to run Terraform after recreating VMs, as the state is reset at the same time.
  - Google Secret Manager free tier
    - Up to 6 active secrets for free
      - Possible to store multiple secrets using JSON schema inside a secret.
    - Fetches initial secrets using Terraform
      - external-secrets helm chart deployed from ArgoCD handles additional secrets stored in GCPSM.

### Terraform provisions all clusters with

  - Flannel Network CNI
  - Metallb for LoadBalancers
    - Shared mode, which means multiple LBs can use the same IP on different ports.
  - A Kubernetes secret with crendentials for external-secrets
    - For syncing Google Secret Manager secrets as Kubernetes secrets

### Terraform provisions the management cluster with

  - ArgoCD instance using `helm_release`
  - K8s secrets containing `kubeconfig` for ArgoCD ApplicationSet cluster generator
    - Dynamically fetches all entries in targeted kubeconfig.
  - A initial ArgoCD application which targets the `gitops/` root folder in this repository.
