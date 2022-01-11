##############
## Metal LB ##
##############

resource "helm_release" "metallb" {
  name       = "metallb"
  repository = "https://metallb.github.io/metallb"
  chart      = "metallb"

  namespace  = "metallb-system"
  create_namespace = true

  values = [<<EOF
    configInline:
      address-pools:
      - name: default
        protocol: layer2
        addresses:
        - 10.0.0.100/16
  EOF
  ]
}
