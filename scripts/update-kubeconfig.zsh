#/bin/zsh

secret_versions=$(gcloud secrets versions list homelab-kubeconfig --filter enabled --format value\(name\))

for version in $secret_versions
do
  gcloud secrets versions destroy $version --secret=homelab-kubeconfig
done

cat ../terraform/.terraform/kubeconfig | gcloud secrets versions add --data-file=- homelab-kubeconfig
