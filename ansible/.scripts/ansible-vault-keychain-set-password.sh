#!/bin/bash
read -sp "Vault password: " ANSIBLE_VAULT_PASSWORD
echo
security add-generic-password -U -a $USER -s ansible-vault -w "$ANSIBLE_VAULT_PASSWORD"
