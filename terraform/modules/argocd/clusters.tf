## Fetches the kubeconfig file and creates a secret for each cluster entry in the kubeconfig file
## Secrets is used by ArgoCD to manage the clusters

resource "helm_release" "argocd_cluster_secret" {
  count = length(var.kubeconfig.contexts)

  name       = "argocd-cluster-${var.kubeconfig.clusters[count.index].name}"
  repository = "https://frealmyr.github.io/helm-charts/"
  chart      = "raw"

  version   = "0.2.5"
  namespace = "argocd"

  values = [
    <<-EOF
    resources:
      - apiVersion: v1
        kind: Secret
        metadata:
          name: kubeconfig-${var.kubeconfig.clusters[count.index].name}
          labels:
            argocd.argoproj.io/secret-type: cluster
          annotations:
            environment: ${replace(var.kubeconfig.clusters[count.index].name, "homelab-", "")}
            ip-address: ${replace(replace(var.kubeconfig.clusters[count.index].cluster.server, "https://", ""), ":6443", "")}
        type: Opaque
        stringData:
          name: ${var.kubeconfig.clusters[count.index].name}
          server: ${var.kubeconfig.clusters[count.index].cluster.server}
          config: |
            {
              "tlsClientConfig": {
                "caData": "${var.kubeconfig.clusters[count.index].cluster.certificate-authority-data}",
                "certData": "${var.kubeconfig.users[count.index].user.client-certificate-data}",
                "keyData": "${var.kubeconfig.users[count.index].user.client-key-data}"
              }
            }
    EOF
  ]
  depends_on = [helm_release.argocd]
}
