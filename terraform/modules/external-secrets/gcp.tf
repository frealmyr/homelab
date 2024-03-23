data "google_client_config" "gcp" {}

resource "random_string" "suffix" {
  length  = 4
  special = false
  upper   = false
}

resource "google_service_account" "secret_manager_accessor" {
  account_id   = "secret-accessor-${var.environment}-${random_string.suffix.result}"
  display_name = "GSA used for fetching secrets from secret manager"
}

resource "google_service_account_key" "secret_manager_accessor" {
  service_account_id = google_service_account.secret_manager_accessor.name
}

resource "google_project_iam_member" "secret_manager_accessor" {
  project = data.google_client_config.gcp.project
  role    = "roles/secretmanager.secretAccessor"
  member  = "serviceAccount:${google_service_account.secret_manager_accessor.email}"
}
