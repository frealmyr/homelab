########################
## Local Path Storage ##
########################

resource "helm_release" "local_path_storage" {
  name       = "local-path-storage"
  repository = "https://charts.containeroo.ch"
  chart      = "local-path-provisioner"

  namespace  = "local-path-storage"
  create_namespace = true

  values = [<<EOF
    storageClass:
      defaultClass: true
    nodePathMap:
      - node: k8s-master
        paths:
          - /media/SSD2/Kubernetes/PersistentVolumes
  EOF
  ]
}
