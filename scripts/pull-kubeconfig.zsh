#/bin/zsh

echo "kubeconfig - before merge: "
kubectl config get-contexts
echo ""

# backup kubeconfig
cp ~/.kube/config ~/.kube/config.bak-$(date '+%Y-%m-%d')

# pull kubeconfig from GCP Secret Manager
# gcloud secrets versions access --secret homelab-kubeconfig latest --quiet > /tmp/homelab-kubeconfig
gcloud secrets versions access --secret homelab-kubeconfig latest --quiet > ~/.kube/config

# # merge then replace kubeconfig
# KUBECONFIG=~/.kube/config:/tmp/homelab-kubeconfig kubectl config view --flatten > /tmp/merged-kubeconfig
# mv /tmp/merged-kubeconfig ~/.kube/config

# # cleanup tmp files
# rm /tmp/homelab-kubeconfig

echo "kubeconfig - after merge: "
kubectl config get-contexts
