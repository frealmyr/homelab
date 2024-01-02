> A process for automating Docker container base image updates.

Watchtower automatically fetches new docker images and reboots docker containers on a schedule.

Since I have periodical backups of my docker volumes with persistent storage, which is ran a few hours before watchtower does its thing. I'm not concerned with automatically updating my docker containers, and can live the the con of a service potentionally going down after a update.

However, this is a problem I have yet to run into after self-hosting with watchtower enabled for the past 3 years. Which means that I have kept up-to-date with latest security patches without manually updating any images. :)
