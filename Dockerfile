FROM node:16 AS builder
WORKDIR /home
COPY . .
RUN yarn install
RUN yarn run nx build nest-api --prod --skip-nx-cache

ENTRYPOINT ["node", "./dist/apps/nest/api/main.js"]