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
          name: homelab-apps
          namespace: argocd
        spec:
          destination:
            name: ''
            namespace: ''
            server: 'https://kubernetes.default.svc'
          source:
            path: k8s
            repoURL: 'https://github.com/frealmyr/homelab'
            targetRevision: main
            directory:
              recurse: false
          project: default
          syncPolicy:
            automated:
              prune: true
              selfHeal: true
            syncOptions:
              - CreateNamespace=true
    EOF
  ]
  depends_on = [helm_release.argocd]
}
