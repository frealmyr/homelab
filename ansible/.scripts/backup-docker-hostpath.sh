#!/bin/bash

if [ "$#" -ne 3 ]; then
    echo "Usage: $0 <container_name> <service_name> <host_path>"
    exit 1
fi

start_time=$(date +%s) # Record the start time in seconds since epoch

container_name=$1
service_name=$2
host_path=$3

logfile="/var/lib/homelab/backups/docker-volumes.log"

exec 3>&1 4>&2
trap 'exec 2>&4 1>&3' 0 1 2 3
exec 1>>"$logfile" 2>&1

get_timestamp() {
    date +"%Y-%m-%d-%H:%M:%S"
}

printf "%s - starting backup for service %s...\n" "$(get_timestamp)" "$service_name"

while IFS= read -r line; do
    printf "%s - %s\n" "$(get_timestamp)" "$line"
done < <(
    printf "docker stop: "
    docker stop "$container_name"

    tar -czf "/var/lib/homelab/backups/$service_name/${service_name}_backup-$(date +%F).tar.gz" -C "$host_path" .
    echo "created backup: /var/lib/homelab/backups/$service_name/${service_name}_backup-$(date +%F).tar.gz"

    printf "docker start: "
    docker start "$container_name"
)

end_time=$(date +%s) # Record the end time in seconds since epoch
backup_time=$((end_time - start_time)) # Calculate the backup duration

printf "%s - backup for service %s took %d seconds\n" "$(get_timestamp)" "$service_name" "$backup_time"
