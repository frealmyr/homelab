#!/bin/bash

MYSQL_USER=$(openssl rand -base64 6)
MYSQL_PASSWORD=$(openssl rand -base64 32)
MYSQL_DATABASE=$(openssl rand -base64 10)
MYSQL_ROOT_PASSWORD=$(openssl rand -base64 32)
MYSQL_CONN_URI="mysql://${MYSQL_USER}:${MYSQL_PASSWORD}@localhost:3306/${MYSQL_DATABASE}"

kubectl create secret generic kimai-db-credentials \
  --namespace=office \
  --from-literal=MYSQL_USER=$MYSQL_USER \
  --from-literal=MYSQL_PASSWORD=$MYSQL_PASSWORD \
  --from-literal=MYSQL_DATABASE=$MYSQL_DATABASE \
  --from-literal=MYSQL_ROOT_PASSWORD=$MYSQL_ROOT_PASSWORD \
  --from-literal=MYSQL_CONN_URI=$MYSQL_CONN_URI
