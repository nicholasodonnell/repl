# base image
FROM alpine/git:latest

# add entrypoint into the image
ADD entrypoint.sh /entrypoint.sh

# give entrypoint execture permissions
RUN chmod +x /entrypoint.sh

# push to gh-pages branch
ENTRYPOINT ["/entrypoint.sh"]
