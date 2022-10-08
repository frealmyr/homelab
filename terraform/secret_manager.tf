######################
## External Secrets ##
######################

# Automatically sync secrets from GCP Secret Manager to K8s Secrets
## https://github.com/external-secrets/external-secrets

resource "kubernetes_namespace" "external_secrets" {
  metadata {
    name = "external-secrets"
  }
}

resource "google_service_account" "secret_manager_accessor" {
  account_id   = "secret-manager-accessor"
  display_name = "GSA used for fetching secrets from secret manager"
}

resource "google_service_account_key" "secret_manager_accessor" {
  service_account_id = google_service_account.secret_manager_accessor.name
}

resource "google_project_iam_member" "secret_manager_accessor" {
  project = var.gcp_project
  role    = "roles/secretmanager.secretAccessor"
  member  = "serviceAccount:${google_service_account.secret_manager_accessor.email}"
}

resource "kubernetes_secret" "secret_manager_accessor" {
  metadata {
    name = "secret-manager-accessor"
    namespace = kubernetes_namespace.external_secrets.metadata[0].name
  }
  data = {
    "credentials.json" = base64decode(google_service_account_key.secret_manager_accessor.private_key)
  }
}
