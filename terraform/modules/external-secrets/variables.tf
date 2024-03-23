variable "gcp_project" {
  description = "The GCP project to deploy the secret manager accessor to"
  type        = string
}

variable "environment" {
  description = "The environment to deploy the secret manager accessor to"
  type        = string
}
