################
## Calico CNI ##
################

resource "helm_release" "tigera_operator" {
  name       = "tigera-operator"
  repository = "https://docs.projectcalico.org/charts/"
  chart      = "tigera-operator"

  version = "3.23.1"

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

resource "helm_release" "metallb" {
  name       = "metallb"
  repository = "https://metallb.github.io/metallb"
  chart      = "metallb"

  namespace        = "metallb-system"
  create_namespace = true

  values = [<<EOF
    configInline:
      address-pools:
      - name: default
        protocol: layer2
        addresses:
        - 10.0.0.10/32
    controller:
      affinity:
        nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:
            - matchExpressions:
              - key: kubernetes.io/hostname
                operator: In
                values:
                - node-x300
    speaker:
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

  depends_on = [helm_release.tigera_operator]
}
