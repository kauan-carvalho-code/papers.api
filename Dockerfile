ARG NODE_VERSION=21.3.0

FROM node:${NODE_VERSION}-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]
