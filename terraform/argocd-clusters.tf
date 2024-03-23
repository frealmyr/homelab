## Fetches the kubeconfig file and creates a secret for each cluster entry in the kubeconfig file
## Secrets is used by ArgoCD to manage the clusters

data "local_file" "kubeconfig_raw" {
  filename = pathexpand("~/.kube/config_homelab")
}

locals {
  kubeconfig = yamldecode(data.local_file.kubeconfig_raw.content)
}

resource "helm_release" "argocd_cluster_secret" {
  count = length(local.kubeconfig.contexts)

  name       = "argocd-cluster-${local.kubeconfig.clusters[count.index].name}"
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
          name: kubeconfig-${local.kubeconfig.clusters[count.index].name}
          labels:
            argocd.argoproj.io/secret-type: cluster
          annotations:
            environment: ${replace(local.kubeconfig.clusters[count.index].name, "homelab-", "")}
            ip-address: ${local.kubeconfig.clusters[count.index].cluster.server}
        type: Opaque
        stringData:
          name: ${local.kubeconfig.clusters[count.index].name}
          server: ${local.kubeconfig.clusters[count.index].cluster.server}
          config: |
            {
              "tlsClientConfig": {
                "caData": "${local.kubeconfig.clusters[count.index].cluster.certificate-authority-data}",
                "certData": "${local.kubeconfig.users[count.index].user.client-certificate-data}",
                "keyData": "${local.kubeconfig.users[count.index].user.client-key-data}"
              }
            }
    EOF
  ]
  depends_on = [helm_release.argocd]
}
