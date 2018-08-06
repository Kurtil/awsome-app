# The Dockerfile for the back app

FROM node:latest

RUN mkdir -p /app

# Specify workdir to use "." on next commands
WORKDIR /app

RUN npm i -g nodemon

COPY package.json .

# node_modules is moved to parent directory to not be overridden by folder bindings 
RUN npm install && mv ./node_modules /node_modules

# copy the app inside the container
COPY . .

# For logs from nodemon
ENV DEBUG=nodemon,nodemon:*

EXPOSE 3000

# start the back
CMD ["npm", "start"]