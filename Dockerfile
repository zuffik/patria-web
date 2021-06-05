FROM node:15.14.0-alpine3.13

WORKDIR /app
EXPOSE 3000
CMD ["yarn", "start"]

COPY yarn.lock .
COPY package.json .
RUN yarn --frozen-lockfile
RUN yarn build
