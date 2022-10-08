################
## Calico CNI ##
################

resource "helm_release" "tigera_operator" {
  name       = "tigera-operator"
  repository = "https://docs.projectcalico.org/charts/"
  chart      = "tigera-operator"

  version = "3.24.1"

  namespace        = "tigera-operator"
  create_namespace = true

  values = [<<EOF
    installation:
      cni:
        type: Calico
      calicoNetwork:
        bgp: Enabled
        ipPools:
        - cidr: 10.244.0.0/16
          encapsulation: None
  EOF
  ]
}

##############
## Metal LB ##
##############

resource "kubernetes_namespace" "metallb" {
  metadata {
    name = "metallb-system"
    labels = {
      "pod-security.kubernetes.io/enforce" = "privileged"
      "pod-security.kubernetes.io/audit" = "privileged"
      "pod-security.kubernetes.io/warn" = "privileged"
    }
  }
}

resource "helm_release" "metallb" {
  name       = "metallb"
  repository = "https://metallb.github.io/metallb"
  chart      = "metallb"

  namespace        = kubernetes_namespace.metallb.metadata[0].name

  values = [<<EOF
    controller:
      affinity:
        nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:
            - matchExpressions:
              - key: kubernetes.io/hostname
                operator: In
                values:
                - node-rpi-0
    speaker:
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

  depends_on = [helm_release.tigera_operator]
}

resource "helm_release" "metallb_address_pool" {
  name       = "metallb-address-pool"
  repository = "https://charts.itscontained.io"
  chart      = "raw"
  version    = "0.2.5"
  values = [
    <<-EOF
    resources:
      - apiVersion: metallb.io/v1beta1
        kind: IPAddressPool
        metadata:
          name: default
          namespace: metallb-system
        spec:
          addresses:
            - 10.0.0.4/32
      - apiVersion: metallb.io/v1beta1
        kind: L2Advertisement
        metadata:
          name: default
          namespace: metallb-system
        spec:
          ipAddressPools:
          - default
    EOF
  ]
  depends_on = [helm_release.metallb]
}
