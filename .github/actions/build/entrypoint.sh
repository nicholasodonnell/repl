#!/bin/sh

# install dependencies
yarn install --pure-lockfile --cwd $GITHUB_WORKSPACE

# build production assets
yarn --cwd $GITHUB_WORKSPACE build
