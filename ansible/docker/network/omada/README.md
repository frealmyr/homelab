TP-Link Omada is the software controller for my Omada series networking equipment

The Omada controller is used to manage:

  - TP-Link Omada ER605 VPN Router
  - TP-Link Omada SG-2008P PoE Switch
  - TP-Link Omada SG2218 Switch
  - TP-Link EAP245 WiFi AP

I have opted to drop reverse-proxy for this service, as injecting sertificates are a PITA using pure Docker.

I had it working when I ran the controller in K8s with cert-manager, however that also meant that the network controller was unavailable when the K8s cluster was down.. :')