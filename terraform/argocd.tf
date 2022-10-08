############
## ArgoCD ##
############

resource "kubernetes_namespace" "argocd" {
  metadata {
    name = "argocd"
  }
}

data "google_secret_manager_secret_version" "sso_github" {
  project = "cloudlab-267613"
  secret  = "homelab-sso-github"
}

locals {
  sso_github = jsondecode(data.google_secret_manager_secret_version.sso_github.secret_data)
}

resource "kubernetes_secret_v1" "sso_github" {
  metadata {
    name      = "sso-github"
    namespace = kubernetes_namespace.argocd.metadata[0].name
    labels = {
      "app.kubernetes.io/part-of" = "argocd" # Required for argocd to pick up the secret
    }
  }

  data = {
    client_id     = local.sso_github.client_id
    client_secret = local.sso_github.client_secret
  }

  type = "Opaque"
}

resource "helm_release" "argocd" {
  name       = "argocd"
  repository = "https://argoproj.github.io/argo-helm"
  chart      = "argo-cd"

  namespace = "argocd"

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
                  - node-rpi-0
    dex:
      enabled: true
    server:
      config:
        url: https://argocd.fmlab.no
        admin.enabled: "true"
        exec.enabled: "true"
        dex.config: |
          logger:
            level: debug
            format: json
          connectors:
          - type: github
            id: github
            name: Github
            config:
              clientID: $sso-github:client_id
              clientSecret: $sso-github:client_secret
              orgs:
                - name: fm-homelab
      rbacConfig:
        policy.default: role:readonly
        policy.csv: |
          p, role:org-admin, applications, *, */*, allow
          p, role:org-admin, exec, *, */*, allow
          p, role:org-admin, clusters, get, *, allow
          p, role:org-admin, repositories, get, *, allow
          p, role:org-admin, repositories, create, *, allow
          p, role:org-admin, repositories, update, *, allow
          p, role:org-admin, repositories, delete, *, allow
          g, fm-homelab:Administrators, role:org-admin
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
                  - node-rpi-0
  EOF
  ]
  depends_on = [helm_release.metallb, kubernetes_secret_v1.sso_github]
}

# https://github.com/argoproj/argo-cd/issues/2789
# This means that we cannot override values from a file in git
# For now one need to use git and path for the chart, not ideal but works
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
            repoURL: 'https://github.com/frealmyr/homelab.git'
            targetRevision: main
            helm:
              releaseName: homelab
              valueFiles:
                - ../../k8s/stack.yaml
            path: charts/argo
          project: default
    EOF
  ]
  depends_on = [helm_release.argocd]
}
