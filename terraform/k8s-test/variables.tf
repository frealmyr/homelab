variable "environment" {
  type    = string
  default = "test"
}

variable "gcp_project" {
  type    = string
  default = "cloudlab-267613"
}

variable "ip_address" {
  description = "The IP address of the instance"
  default     = "192.168.0.121"
}
