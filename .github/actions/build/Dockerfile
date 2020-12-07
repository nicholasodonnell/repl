# base image
FROM node:latest

# add entrypoint into the image
ADD entrypoint.sh /entrypoint.sh

# give entrypoint execture permissions
RUN chmod +x /entrypoint.sh

# build production assets
ENTRYPOINT ["/entrypoint.sh"]
