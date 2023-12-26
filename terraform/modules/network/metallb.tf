
resource "kubernetes_namespace" "metallb" {
  metadata {
    name = "metallb-system"
    labels = {
      "pod-security.kubernetes.io/enforce" = "privileged"
    }
  }
}

resource "helm_release" "metallb" {
  name       = "metallb"
  repository = "https://metallb.github.io/metallb"
  chart      = "metallb"

  version = "0.13.12"

  namespace = kubernetes_namespace.metallb.metadata[0].name
}

resource "helm_release" "metallb_address_pool" {
  name       = "metallb-address-pool"
  repository = "https://frealmyr.github.io/helm-charts/"
  chart      = "raw"

  version = "0.2.5"

  values = [
    <<-EOF
    resources:
      - apiVersion: metallb.io/v1beta1
        kind: IPAddressPool
        metadata:
          name: default
          namespace: metallb-system
        spec:
          addresses:
            - ${var.ip_address}/32
      - apiVersion: metallb.io/v1beta1
        kind: L2Advertisement
        metadata:
          name: default
          namespace: metallb-system
        spec:
          ipAddressPools:
          - default
    EOF
  ]
  depends_on = [helm_release.metallb]
}
