variable "environment" {
  type    = string
  default = "mgmt"
}

variable "environments" {
  type    = list(string)
  default = ["mgmt", "test", "prod"]
}

variable "gcp_project" {
  type    = string
  default = "cloudlab-267613"
}

variable "ip_address" {
  description = "The IP address of the instance"
  default     = "192.168.0.120"
}
