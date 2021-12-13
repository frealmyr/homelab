##############
## Metal LB ##
##############

resource "kubernetes_namespace" "metallb_system" {
  metadata {
    name = "metallb-system"
  }
}

resource "helm_release" "metallb" {
  name       = "metallb"
  repository = "https://metallb.github.io/metallb"
  chart      = "metallb"
  namespace  = "metallb-system"

  values = [<<EOF
    configInline:
      address-pools:
      - name: default
        protocol: layer2
        addresses:
        - 10.0.0.200/32
  EOF
  ]

  depends_on = [kubernetes_namespace.metallb_system]
}

###########
## Istio ##
###########

resource "kubernetes_namespace" "istio-system" {
  metadata {
    name = "istio-system"
  }
}

resource "helm_release" "istio_base" {
  name       = "istio-base"
  repository = "https://istio-release.storage.googleapis.com/charts"
  chart      = "base"
  namespace  = "istio-system"
}

resource "helm_release" "istiod" {
  name       = "istiod"
  repository = "https://istio-release.storage.googleapis.com/charts"
  chart      = "istiod"
  namespace  = "istio-system"
}

resource "helm_release" "istio_ingress" {
  name       = "ingressgateway"
  repository = "https://istio-release.storage.googleapis.com/charts"
  chart      = "gateway"
  namespace  = "istio-system"

  values = [<<EOF
    labels:
      istio: ingressgateway
  EOF
  ]

  depends_on = [helm_release.istio_base, helm_release.istiod]
}

###########
## Kiali ##
###########

resource "helm_release" "kiali" {
  name       = "kiali-server"
  repository = "https://kiali.org/helm-charts"
  chart      = "kiali-server"
  namespace  = "istio-system"

  set {
    name  = "auth.strategy"
    value = "anonymous"
  }
}
