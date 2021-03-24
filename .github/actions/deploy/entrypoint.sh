#!/bin/sh

# set git config
git config --global user.name "${GITHUB_ACTOR}"
git config --global user.email "${GITHUB_ACTOR}@users.noreply.github.com"

# clone gh-pages branch
git clone --branch gh-pages https://$GITHUB_ACTOR:$INPUT_GITHUB_TOKEN@github.com/$GITHUB_REPOSITORY.git /gh-pages

# update gh-pages branch with changes
echo "Synching /public directory"
find /gh-pages -type f ! -name "CNAME" ! -path "*git*" -delete
find /gh-pages -type d -depth -mindepth 1 ! -path "*git*" -delete
mv -f $GITHUB_WORKSPACE/public/* /gh-pages

# set working dir
cd /gh-pages

# push gh-pages branch
git add --all
git commit --allow-empty --message="Publish $GITHUB_SHA"
git push --force https://$GITHUB_ACTOR:$INPUT_GITHUB_TOKEN@github.com/$GITHUB_REPOSITORY.git gh-pages
