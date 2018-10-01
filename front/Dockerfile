# The Dockerfile for the front app

FROM node:latest

RUN mkdir -p /app

# Specify workdir to use "." on next commands
WORKDIR /app

# To serve the app from an http server
# RUN npm i -g http-server

COPY package*.json ./

RUN npm install

# copy the app inside the container
COPY . .

EXPOSE 8080

# serve the dist folder
# CMD ["http-server", "./dist"]

# run the app in dev mode
CMD ["npm", "run", "serve"]