resource "helm_release" "kubed" {
  name       = "kubed"
  repository = "https://charts.appscode.com/stable/"
  chart      = "kubed"
  namespace  = "kube-system"

  version = "v0.12.0"

  values = [<<EOF
    config:
      clusterName: homelab
    apiserver:
      enabled: false
  EOF
  ]
}
