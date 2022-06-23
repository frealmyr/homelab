############
## ArgoCD ##
############

resource "helm_release" "argocd" {
  name       = "argocd"
  repository = "https://argoproj.github.io/argo-helm"
  chart      = "argo-cd"

  namespace        = "argocd"
  create_namespace = true

  values = [<<EOF
    metrics:
      enabled: true
      serviceMonitor:
        enabled: false
    controller:
      metrics:
        enabled: true
        serviceMonitor:
          enabled: false
      containerSecurityContext:
        capabilities:
          drop:
            - all
        readOnlyRootFilesystem: true
        runAsNonRoot: true
      affinity:
        nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:
            - matchExpressions:
              - key: kubernetes.io/hostname
                operator: In
                values:
                  - node-x300
    dex:
      enabled: false
    server:
      config:
        url: https://argocd.fmlab.no
      extraArgs:
        - --insecure # Using traefik for TLS termination instead of argocd
      affinity:
        nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:
            - matchExpressions:
              - key: kubernetes.io/hostname
                operator: In
                values:
                  - node-x300
  EOF
  ]
  depends_on = [helm_release.metallb]
}

resource "helm_release" "argocd_app_homelab" {
  name       = "argocd-app-homelab"
  repository = "https://charts.itscontained.io"
  chart      = "raw"
  version    = "0.2.5"
  values = [
    <<-EOF
    resources:
      - apiVersion: argoproj.io/v1alpha1
        kind: Application
        metadata:
          name: homelab
          namespace: argocd
        spec:
          destination:
            name: ''
            namespace: ''
            server: 'https://kubernetes.default.svc'
          source:
            chart: argo
            repoURL: 'https://frealmyr.github.io/homelab'
            targetRevision: ^1.0.0
            helm:
              releaseName: homelab
              valueFiles:
                - stack.yaml
            path: k8s
          project: default
    EOF
  ]
  depends_on = [helm_release.argocd]
}
