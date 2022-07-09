FROM node:16 AS builder
WORKDIR /home
COPY . .
RUN yarn install
RUN yarn run build

ENTRYPOINT ["node", "./dist/main.js"]