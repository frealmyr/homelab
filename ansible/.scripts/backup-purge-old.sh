#!/bin/bash
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <path> <days>"
    exit 1
fi

path=$1
days=$2

logfile="/var/lib/homelab/backups/docker-volumes.log"

exec 3>&1 4>&2
trap 'exec 2>&4 1>&3' 0 1 2 3
exec 1>>"$logfile" 2>&1

get_timestamp() {
  date +"%Y-%m-%d-%H:%M:%S"
}

printf "%s - deleting backups older than %s days... \n" "$(get_timestamp)" "$days"

find $path -type f -mtime +$days -print -exec rm -f {} \;
