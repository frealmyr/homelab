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

  type = "Opaque"
  data = {
    client_id     = local.sso_github.argocd_client_id
    client_secret = local.sso_github.argocd_client_secret
  }
}

resource "helm_release" "argocd" {
  name       = "argocd"
  repository = "https://argoproj.github.io/argo-helm"
  chart      = "argo-cd"

  version = "5.27.1"

  namespace = "argocd"

  values = [<<EOF
    applicationSet:
      enabled: false
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
    dex:
      enabled: true
    server:
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
    configs:
      cm:
        create: false # Create a custom one in extraObjects, because I enjoy working syncWaves in apps-of-apps
    extraObjects:
      - apiVersion: v1
        kind: ConfigMap
        metadata:
          name: argocd-cm
          labels:
            app.kubernetes.io/component: server
            app.kubernetes.io/instance: argocd
            app.kubernetes.io/managed-by: Helm
            app.kubernetes.io/part-of: argocd
        data:
          admin.enabled: "true"
          exec.enabled: "true"
          url: https://argocd.fmlab.no
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
          resource.customizations: |
            argoproj.io/Application:
              health.lua: |
                hs = {}
                hs.status = "Progressing"
                hs.message = ""
                if obj.status ~= nil then
                  if obj.status.health ~= nil then
                    hs.status = obj.status.health.status
                    if obj.status.health.message ~= nil then
                      hs.message = obj.status.health.message
                    end
                  end
                end
                return hs
  EOF
  ]
  depends_on = [helm_release.metallb, kubernetes_secret_v1.sso_github]
}

resource "helm_release" "argocd_apps_homelab" {
  name       = "argocd-apps-homelab"
  repository = "https://argoproj.github.io/argo-helm"
  chart      = "argocd-apps"

  version    = "0.0.9"

  values = [<<EOF
    applications:
      - name: homelab
        namespace: argocd
        finalizers:
          - resources-finalizer.argocd.argoproj.io
        project: default
        source:
          repoURL: 'https://github.com/frealmyr/homelab.git'
          targetRevision: main
          path: charts/argo
          helm:
            releaseName: homelab
            valueFiles:
              - ../../k8s/stack.yaml
        destination:
          server: 'https://kubernetes.default.svc'
        syncPolicy:
          automated:
            prune: false
            selfHeal: false
  EOF
  ]
  depends_on = [helm_release.argocd]
}
