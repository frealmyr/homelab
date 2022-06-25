# Kubernetes Applications

This folder contains applications which is deployed by ArgoCD.

  - Each application stack is part of a ArgoCD `application`
  - Each ArgoCD `application` belong to a argo `appProject`, for categorizing applications in the ArgoCD UI
  - Namespaces can either be shared, such as the `system` namespace. Or they can be individually made for a single application stack, such as the `traefik-system` namespace.

ArgoCD configuration for the application stacks is defined in the `stack.yaml`, which is values for the `../chart/argo` helm chart.

> The argo helm chart is monitored by argocd, and is the first argo application that is installed during the initial bootstrapping of the cluster with Terraform.

## New application flow

  - Create or re-use `appProject` folder
  - Create a new folder for the new application under the `appProject` folder
  - Add helm chart, kustomize or pure manifests to the application folder
  - Add entry in `stack.yaml` for the new application
  - Sync the `Homelab` application in the ArgoCD UI/CLI
  - Sync the new application after ArgoCD have detected the application
