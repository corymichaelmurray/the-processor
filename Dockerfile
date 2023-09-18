FROM node:lts

WORKDIR /app
COPY . /app
RUN yarn 
RUN node deploy-commands.js

ENTRYPOINT ["yarn", "start"]