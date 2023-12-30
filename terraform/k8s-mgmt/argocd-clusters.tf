//
// Creates a secret with kubeconfig for each cluster in argocd namespace
// to be used with matrix generator in argocd for dynamic cluster configuration
//

locals {
  argocd_clusters = [
    "k8s-test",
    "k8s-prod"
  ]
}

data "google_secret_manager_secret_version" "kubeconfig" {
  for_each = toset(local.argocd_clusters)

  secret = each.value
}

resource "helm_release" "argocd_cluster_secret" {
  for_each = {
    for cluster_name, secret_version in data.google_secret_manager_secret_version.kubeconfig : cluster_name => secret_version.secret_data
  }
  name       = "argocd-cluster-${each.key}"
  repository = "https://frealmyr.github.io/helm-charts/"
  chart      = "raw"

  version = "0.2.5"

  namespace = "argocd"

  values = [
    <<-EOF
    resources:
      - apiVersion: v1
        kind: Secret
        metadata:
          name: kubeconfig-${each.key}
          labels:
            argocd.argoproj.io/secret-type: cluster
        type: Opaque
        stringData:
          name: ${yamldecode(each.value).clusters.0.name}
          server: ${yamldecode(each.value).clusters.0.cluster.server}
          config: |
            {
              "tlsClientConfig": {
                "insecure": true,
                "caData": "${yamldecode(each.value).clusters.0.cluster.certificate-authority-data}",
                "certData": "${yamldecode(each.value).users.0.user.client-certificate-data}",
                "keyData": "${yamldecode(each.value).users.0.user.client-key-data}"
              }
            }
    EOF
  ]
  depends_on = [helm_release.argocd]
}
