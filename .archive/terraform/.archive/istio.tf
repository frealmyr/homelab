###########
## Istio ##
###########

resource "kubernetes_namespace" "istio_system" {
  metadata {
    name = "istio-system"
    labels = {
      cert-manager-tls: "istio-system"
    }
  }
}

resource "helm_release" "istio_base" {
  name       = "istio-base"
  repository = "https://istio-release.storage.googleapis.com/charts"
  chart      = "base"
  namespace  = "istio-system"
  depends_on = [kubernetes_namespace.istio_system, helm_release.metallb]
}

resource "helm_release" "istiod" {
  name       = "istiod"
  repository = "https://istio-release.storage.googleapis.com/charts"
  chart      = "istiod"
  namespace  = "istio-system"
  depends_on = [helm_release.istio_base]
}

resource "helm_release" "istio_gateway_loadbalancer" {
  name       = "ingressgateway"
  repository = "https://istio-release.storage.googleapis.com/charts"
  chart      = "gateway"
  namespace  = "istio-system"

  values = [<<EOF
    labels:
      istio: ingressgateway
    service:
      loadBalancerIP: 10.0.0.100
  EOF
  ]

  depends_on = [helm_release.istiod]
}

###########
## Kiali ##
###########

resource "helm_release" "kiali" {
  name       = "kiali-server"
  repository = "https://kiali.org/helm-charts"
  chart      = "kiali-server"
  namespace  = "istio-system"

  values = [<<EOF
    deployment:
      accessible_namespaces:
      - '**'
    auth:
      strategy: anonymous
    external_services:
      istio:
        url_service_version: http://istio-pilot.istio-system:8080/version
      tracing:
        url: 
        in_cluster_url: http://tracing/jaeger
      grafana:
        url: 
        in_cluster_url: http://grafana.monitoring:3000
      prometheus:
        url: http://prometheus-server.monitoring

  EOF
  ]
  depends_on = [helm_release.istio_gateway_loadbalancer]
}

resource "helm_release" "kiali_istio" {
  name       = "kiali-istio"
  repository = "https://charts.itscontained.io"
  chart      = "raw"
  version    = "0.2.5"
  values = [
    <<-EOF
    resources:
      - apiVersion: networking.istio.io/v1alpha3
        kind: Gateway
        metadata:
          name: kiali-server
          namespace: istio-system
        spec:
          selector:
            istio: ingressgateway
          servers:
            - port:
                number: 80
                name: http
                protocol: HTTP
              hosts:
                - 'kiali.fmlab.no'
            - port:
                number: 443
                name: https
                protocol: HTTPS
              hosts:
                - 'kiali.fmlab.no'
              tls:
                mode: SIMPLE
                credentialName: cert-kiali-server
      - apiVersion: networking.istio.io/v1alpha3
        kind: VirtualService
        metadata:
          name: kiali-server
          namespace: istio-system
        spec:
          hosts:
          - kiali.fmlab.no
          gateways:
          - kiali-server
          http:
          - route:
            - destination:
                host: kiali
                port:
                  number: 20001
      - apiVersion: cert-manager.io/v1
        kind: Certificate
        metadata:
          name: cert-kiali-server
          namespace: istio-system
        spec:
          secretName: cert-kiali-server
          duration: 2160h # 90d
          renewBefore: 360h # 15d
          isCA: false
          privateKey:
            algorithm: RSA
            encoding: PKCS1
            size: 2048
          usages:
            - server auth
            - client auth
          dnsNames:
            - kiali.fmlab.no
          issuerRef:
            name: letsencrypt-staging
            kind: ClusterIssuer
            group: cert-manager.io
    EOF
  ]
  depends_on = [helm_release.kiali]
}

###################
## K8s dashboard ##
###################


resource "helm_release" "dashboard_istio" {
  name       = "kubernetes-dashboard-istio"
  repository = "https://charts.itscontained.io"
  chart      = "raw"
  version    = "0.2.5"
  values = [
    <<-EOF
    resources:
      - apiVersion: networking.istio.io/v1alpha3
        kind: Gateway
        metadata:
          name: kubernetes-dashboard
          namespace: istio-system
        spec:
          selector:
            istio: ingressgateway
          servers:
            - port:
                number: 80
                name: http
                protocol: HTTP
              hosts:
                - 'k3s.fmlab.no'
            - port:
                number: 443
                name: https
                protocol: HTTPS
              hosts:
                - 'k3s.fmlab.no'
              tls:
                mode: SIMPLE
                credentialName: default-kubernetes-dashboard
      - apiVersion: networking.istio.io/v1alpha3
        kind: VirtualService
        metadata:
          name: kubernetes-dashboard
          namespace: default
        spec:
          hosts:
          - k3s.fmlab.no
          gateways:
          - istio-system/kubernetes-dashboard
          http:
          - route:
            - destination:
                host: kubernetes-dashboard
                port:
                  number: 8080
      - apiVersion: cert-manager.io/v1
        kind: Certificate
        metadata:
          name: default-kubernetes-dashboard
          namespace: istio-system
        spec:
          secretName: default-kubernetes-dashboard
          duration: 2160h # 90d
          renewBefore: 360h # 15d
          isCA: false
          privateKey:
            algorithm: RSA
            encoding: PKCS1
            size: 2048
          usages:
            - server auth
            - client auth
          dnsNames:
            - k3s.fmlab.no
          issuerRef:
            name: letsencrypt-staging
            kind: ClusterIssuer
            group: cert-manager.io
    EOF
  ]
  depends_on = [helm_release.istio_gateway_loadbalancer]
}
