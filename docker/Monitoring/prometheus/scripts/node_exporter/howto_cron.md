# Enable smartmontools dump every 3rd hour
```
echo "0 */3 * * * root /bin/bash /home/fredrick/Homelab/System/prometheus/scripts/node_exporter/smartmon.sh > /tmp/node_exporter/smart_metrics.prom" > /etc/cron.d/smartmon
```
