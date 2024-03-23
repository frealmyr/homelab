resource "helm_release" "argocd_apps_homelab" {
  name       = "argocd-apps-homelab"
  repository = "https://argoproj.github.io/argo-helm"
  chart      = "argocd-apps"

  version = "1.4.1"

  values = [<<EOF
    applications:
      - name: homelab
        namespace: argocd
        finalizers:
          - resources-finalizer.argocd.argoproj.io
        project: default
        source:
          repoURL: https://github.com/frealmyr/homelab.git
          targetRevision: main
          path: gitops
        destination:
          name: in-cluster
        syncPolicy:
          automated:
            prune: false
            selfHeal: false
  EOF
  ]
  depends_on = [helm_release.argocd]
}
