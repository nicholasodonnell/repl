#!/bin/sh

# install dependencies
yarn install --cwd $GITHUB_WORKSPACE --pure-lockfile

# build production assets
yarn --cwd $GITHUB_WORKSPACE build
