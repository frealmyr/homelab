resource "kubernetes_namespace" "external_secrets" {
  metadata {
    name = "external-secrets"
  }
}

resource "kubernetes_secret" "secret_manager_accessor" {
  metadata {
    name      = "secret-manager-accessor"
    namespace = kubernetes_namespace.external_secrets.metadata[0].name
  }
  data = {
    "credentials.json" = base64decode(google_service_account_key.secret_manager_accessor.private_key)
  }
}
