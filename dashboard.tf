resource "helm_release" "dashboard" {
  name       = "kubernetes-dashboard"
  repository = "https://kubernetes.github.io/dashboard/"
  chart      = "kubernetes-dashboard"
  namespace  = "default"

  values = [<<EOF
    settings:
      clusterName: "FMLab"
      itemsPerPage: 50
    protocolHttp: true
    extraArgs:
      - --enable-skip-login
      - --enable-insecure-login
    service:
      externalPort: 8080
    rbac:
      clusterReadOnlyRole: true
  EOF
  ]
}

resource "kubernetes_manifest" "dashboard_gateway" {
  manifest = yamldecode(<<EOF
    apiVersion: networking.istio.io/v1alpha3
    kind: Gateway
    metadata:
      name: kubernetes-dashboard
      namespace: default
    spec:
      selector:
        istio: ingressgateway
      servers:
        - port:
            number: 80
            name: http
            protocol: HTTP
          hosts:
            - '*'
  EOF
  )
}

resource "kubernetes_manifest" "dashboard_virtualservice" {
  manifest = yamldecode(<<EOF
    apiVersion: networking.istio.io/v1alpha3
    kind: VirtualService
    metadata:
      name: kubernetes-dashboard
      namespace: default
    spec:
      hosts:
      - k3s.fmlab.no
      gateways:
      - kubernetes-dashboard
      http:
      - route:
        - destination:
            host: kubernetes-dashboard
            port:
              number: 8080
  EOF
  )
}
