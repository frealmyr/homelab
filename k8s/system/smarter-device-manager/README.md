# smarter-device-manager

This application is used to grant non-privileged pods access to host devices.

In my homelab i use this to allow Jellyfin VAAPI hardware acceleration by defining the following requests on the pod:

```yaml
resources:
  limits:
    smarter-devices/dri: '1'
  requests:
    smarter-devices/dri: '1'
```

Which will grant Jellyfin access to `/dev/dri/renderD128` on the host machine, by mounting `/dev/dri` as a `hostPath`:

```yaml
    volumeMounts:
      - mountPath: /dev/dri
        name: devdri
securityContext:
  supplementalGroups:
    - 44
    - 109
volumes:
  - hostPath:
      path: /dev/dri
      type: Directory
    name: devdri
```
