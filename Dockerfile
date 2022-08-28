#FROM node:16
FROM node:latest

WORKDIR /usr/src/app

COPY ./dist ./

EXPOSE 3000
CMD [ "node", "server.js" ]