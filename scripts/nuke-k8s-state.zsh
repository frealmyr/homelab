#/bin/zsh

cd ../terraform

terraform state rm \
  helm_release.argocd \
  helm_release.argocd_app_homelab \
  helm_release.metallb \
  helm_release.metallb_address_pool \
  helm_release.tigera_operator \
  kubernetes_namespace.argocd \
  kubernetes_namespace.external_secrets \
  kubernetes_namespace.metallb \
  kubernetes_secret.secret_manager_accessor \
  kubernetes_secret_v1.sso_github
