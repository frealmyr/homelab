################
## Prometheus ##
################

resource "helm_release" "prometheus" {
  name       = "prometheus"
  repository = "https://prometheus-community.github.io/helm-charts"
  chart      = "prometheus"

  namespace  = "monitoring"
  create_namespace = true

  values = [<<EOF
    alertmanager:
      ingress:
        enabled: true
        annotations:
          kubernetes.io/ingress.class: traefik
          cert-manager.io/cluster-issuer: letsencrypt-staging
          traefik.ingress.kubernetes.io/router.tls: "true"
          traefik.ingress.kubernetes.io/router.entrypoints: websecure
          traefik.ingress.kubernetes.io/router.middlewares: traefik-system-sso@kubernetescrd,traefik-system-security@kubernetescrd
        hosts:
          - alertmanager.fmlab.no
        tls:
          - secretName: alertmanager-certificate
            hosts:
              - alertmanager.fmlab.no
      persistentVolume:
        enabled: true
    server:
      ingress:
        enabled: true
        annotations:
          kubernetes.io/ingress.class: traefik
          cert-manager.io/cluster-issuer: letsencrypt-staging
          traefik.ingress.kubernetes.io/router.tls: "true"
          traefik.ingress.kubernetes.io/router.entrypoints: websecure
          traefik.ingress.kubernetes.io/router.middlewares: traefik-system-sso@kubernetescrd,traefik-system-security@kubernetescrd
        hosts:
          - prometheus.fmlab.no
        tls:
          - secretName: prometheus-server-certificate
            hosts:
              - prometheus.fmlab.no
      persistentVolume:
        enabled: true
  EOF
  ]
  depends_on = [helm_release.local_path_storage]
}
