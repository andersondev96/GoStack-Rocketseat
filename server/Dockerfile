FROM node:boron
WORKDIR /postgres
COPY . .
CMD NODE_URLS=http://*:${process.env.APP_API_URL} yarn dev:server
