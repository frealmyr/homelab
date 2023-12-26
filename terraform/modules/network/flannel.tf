resource "kubernetes_namespace" "flannel" {
  metadata {
    name = "kube-flannel"
    labels = {
      "pod-security.kubernetes.io/enforce" = "privileged"
    }
  }
}

resource "helm_release" "flannel" {
  name       = "flannel"
  repository = "https://flannel-io.github.io/flannel"
  chart      = "flannel"

  version = "0.24.0"

  namespace = kubernetes_namespace.flannel.metadata[0].name

  values = [<<EOF
    podCidr: "10.244.0.0/16"
    flannel:
      backend: "host-gw"
    EOF
  ]
}
