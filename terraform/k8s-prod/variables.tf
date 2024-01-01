variable "environment" {
  type    = string
  default = "prod"
}
variable "gcp_project" {
  type    = string
  default = "cloudlab-267613"
}

variable "ip_address" {
  description = "The IP address of the instance"
  default     = "192.168.0.122"
}
