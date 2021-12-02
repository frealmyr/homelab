# Helm Charts

This folder contains helm charts that is used by ArgoCD.

It also makes use of the [helm/chart-releaser-action](https://github.com/helm/chart-releaser-action) Github Action to turn this Github Repository into a Helm Repository using Github Pages.

A [index.yaml](https://github.com/frealmyr/homelab/blob/gh-pages/index.yaml) file is managed by this action on the [gh-pages branch](https://github.com/frealmyr/homelab/tree/gh-pages), which contains a index of Github artifacts stored in this repository [git tag releases](https://github.com/frealmyr/homelab/tags).

This file is hosted by Github pages at https://frealmyr.github.io/homelab/index.yaml
