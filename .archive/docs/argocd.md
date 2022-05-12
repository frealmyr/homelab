### Admin credentials

Get admin password from secret: 
```bash
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d
```

Recommend to change the password

https://argocd.fmlab.no/user-info?changePassword=true