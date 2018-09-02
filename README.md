# WELCOME TO AWESOME APP

The first goal of this app is to separate app components (front, back, db) is separates docker containers.

To run the app, run the following command at the root of the project
```
// Need docker compose 3.5 like the one installed with Docker version 18.06.0-ce
docker-compose up
// WARNING : docker-compose do not recreate images, even if dockerfiles change. Maybe a bug...
docker-compose up --build
```
This command read the docker-compose.yml file and create 3 containers connected to the same network. The front and the back app files are binded outside the containers so it is possible to develop with your favorite IDE. When saving, apps auto reload thanks to nodemon (back) and vue-cli (front).

The next goals are :
- make the 3 parts interact ( simple CRUD ) -> DONE
- add authentication
- add file down/uploading
- add translation possibilities (Fr/En)
...

These exercices of non easy aspect of web apps will allow full understandings of important concepts!

## Importants notes
This app will run on modern browser ONLY.


