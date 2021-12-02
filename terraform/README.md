# Cluster Bootstrapping

This is where the cluster is initially boostrapped using Terraform.

  - Configure networking
    - Adds calico as CNI network plugin.
    - Adds metallb for loadbalancer resources in cluster.
      - For allowing multiple pods to port-forward on nodes.
  - Create GSA credentials for `external-secrets` operator.
    - Allows fetching secrets from Google Cloud Secret Manager.
  - Install ArgoCD
    - Configure Github OAuth login.
    - Enforce sync-waves on applications, slower to sync, but allows dependencies to be in a Healthy state instead of other applications breaking and stopping the synchronization.
    - Add ArgoCD `application` for the `../charts/argo` chart which adds apps-of-apps in the `k8s/` folder.
