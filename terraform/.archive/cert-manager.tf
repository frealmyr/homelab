
##################
## Cert-Manager ##
##################

resource "helm_release" "cert_manager" {
  name       = "cert-manager"
  repository = "https://charts.jetstack.io"
  chart      = "cert-manager"

  namespace  = "cert-manager"
  create_namespace = true

  values = [<<EOF
    installCRDs: true
    prometheus:
      enabled: false
      servicemonitor:
        enabled: false
    clusterResourceNamespace: cert-manager
    extraArgs:
      - --cluster-resource-namespace=cert-manager
  EOF
  ]
  depends_on = [helm_release.metallb]
}

resource "helm_release" "cert_manager_issuer" {
  name       = "cert-manager-issuer"
  repository = "https://charts.itscontained.io"
  chart      = "raw"
  version    = "0.2.5"
  values = [
    <<-EOF
    resources:
      - apiVersion: cert-manager.io/v1
        kind: ClusterIssuer
        metadata:
          name: letsencrypt-staging
          namespace: cert-manager
        spec:
          acme:
            email: yolo@fmlab.no
            server: https://acme-v02.api.letsencrypt.org/directory
            privateKeySecretRef:
              name: letsencrypt-staging
            solvers:
            - http01:
                ingress:
                  ingressTemplate:
                    metadata:
                      annotations:
                        kubernetes.io/ingress.class: traefik
      - apiVersion: cert-manager.io/v1
        kind: ClusterIssuer
        metadata:
          name: letsencrypt-prod
          namespace: cert-manager
        spec:
          acme:
            email: yolo@fmlab.no
            server: https://acme-staging-v02.api.letsencrypt.org/directory
            privateKeySecretRef:
              name: letsencrypt-prod
            solvers:
            - http01:
                ingress:
                  ingressTemplate:
                    metadata:
                      annotations:
                        kubernetes.io/ingress.class: traefik
    EOF
  ]
  depends_on = [helm_release.cert_manager]
}
