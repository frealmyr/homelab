#!/bin/bash
# Color formatting for terminal output
red=$(tput setaf 1)
green=$(tput setaf 2)
yellow=$(tput setaf 3)
normal=$(tput sgr0)

# Remote compose magic
if host=$(docker context inspect homelab -f '{{ .Endpoints.docker.Host }}'); then
  printf "${green}active context: ${normal}$host\n"
else
  printf "%40s\n""${red}error: ${normal}docker remote context for homelab not found\n"
  exit 1
fi
dc_command="docker-compose --context homelab "

if [ $1 = "start" ]; then
  if [ -z $2 ]; then
    echo "homelab: starting all stacks.."
    for d in */; do # only match directories
      for subd in $d*/; do # only match sub-directories
        printf "\n%40s\n" "homelab: ${green}now starting ${yellow}$subd ${normal}"
        ( cd "$subd" && $dc_command up -d ) # Use a subshell to avoid having to cd back to the root each time.
      done
    done
  else
    for d in $2/; do # only match directories
      for subd in $d*/; do # only match sub-directories
        printf "\n%40s\n" "homelab: ${green}now starting ${yellow}$subd ${normal}"
        ( cd "$subd" && $dc_command up -d ) # Use a subshell to avoid having to cd back to the root each time.
      done
    done
  fi
elif [ $1 = "stop" ]; then
  if [ -z $2 ]; then
    echo "homelab: stopping all stacks.."
    for d in */; do # only match directories
      for subd in $d*/; do # only match sub-directories
        printf "\n%40s\n" "homelab: ${red}now stopping ${yellow}$subd ${normal}"
        ( cd "$subd" && $dc_command down ) # Use a subshell to avoid having to cd back to the root each time.
      done
    done
  else
    for d in $2/; do # only match directories
      for subd in $d*/; do # only match sub-directories
        printf "\n%40s\n" "homelab: ${red}now stopping ${yellow}$subd ${normal}"
        ( cd "$subd" && $dc_command down ) # Use a subshell to avoid having to cd back to the root each time.
      done
    done
  fi
else
  echo "\nRun this script with arguments: "
  printf "%40s\n" "./$0 ${green}start${normal}|${red}stop ${normal}[optional_dir]"
fi
