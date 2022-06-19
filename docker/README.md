# Docker-compose based homelab

Don't feel like running Kubernetes for your self-hosted applications? Then this might be the solution for you.

 1. Install docker on your server
 2. Create a docker context on your local machine for your server
 3. Run docker and docker-compose commands remotely using ssh

> But why?

 - All configuration can be stored in git and remotely applied to server, no more making changes on the server and forgetting to check them into your repository.
 - Seperate state and configuration
   - Configuration files stored in volumes on host
   - Secrets added with docker-compose
   - No more checking in sensitive files to the repository
 - There are bettery ways to store and backup files than checking in files to git repository occasionally.

> But i have a ton of docker containers!

Might want to look into my `manage-stack.sh` bash script.

By placing each docker-compose "stack" into a folder under a category folder, this script can start/stop categories of docker-compose stacks or manage every stack if no category is provided.

mange every docker-compose stack

```bash
./manage-stack.sh start
./manage-stack.sh stop
```

or target a category of stacks

```bash
./manage-stack.sh start System/
./manage-stack.sh stop System/
```
