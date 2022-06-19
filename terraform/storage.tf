########################
## Local Path Storage ##
########################

resource "helm_release" "local_path_storage" {
  name       = "local-path-storage"
  repository = "https://charts.containeroo.ch"
  chart      = "local-path-provisioner"

  namespace        = "local-path-storage"
  create_namespace = true

  values = [<<EOF
    storageClass:
      defaultClass: true
    nodePathMap:
      - node: node-x300
        paths:
          - /home/fredrick/.PersistentVolumes
      - node: node-nuc
        paths:
          - /home/fredrick/.PersistentVolumes
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
}
