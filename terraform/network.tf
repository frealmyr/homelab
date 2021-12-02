################
## Calico CNI ##
################

resource "helm_release" "tigera_operator" {
  name       = "tigera-operator"
  repository = "https://docs.projectcalico.org/charts/"
  chart      = "tigera-operator"

  version = "3.24.5"

  namespace        = "tigera-operator"
  create_namespace = true

  timeout = 600 # toleration for not-ready kicks in after 300s

  values = [<<EOF
    installation:
      cni:
        type: Calico
      calicoNetwork:
        mtu: 1450
        bgp: Disabled
        ipPools:
        - cidr: 10.244.0.0/16
          encapsulation: VXLAN
    affinity:
      nodeAffinity:
        requiredDuringSchedulingIgnoredDuringExecution:
          nodeSelectorTerms:
          - matchExpressions:
            - key: kubernetes.io/hostname
              operator: In
              values:
              - k8s-controller-0
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

  version = "0.13.7"

  namespace        = kubernetes_namespace.metallb.metadata[0].name

  depends_on = [helm_release.tigera_operator]
}

resource "helm_release" "metallb_address_pool" {
  name       = "metallb-address-pool"
  repository = "https://frealmyr.github.io/homelab"
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
            - 10.8.0.10/32 # private
            - 10.8.0.11/32 # public
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
