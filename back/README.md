# The Back
The front is an Express app generated from express-generator 4.16.0

The app run with nodemon for auto restart after changes on development.

## To test the Users CRUD

```
// TO CREATE
curl -i -H 'Content-Type:application/json' -d '{"firstName":"Nico","lastName":"Delseny"}' http://localhost:3000/users

// TO READ
curl -i -X GET http://localhost:3000/users/ValidId

// TO READ ALL
curl -i http://localhost:3000/users/

// TO UPDATE
curl -i -H 'Content-Type:application/json' -d '{"firstName":"Jojo"}' -X PUT http://localhost:3000/users/5b95992e745905001f5ca72a

// TO DELETE
curl -i -X DELETE http://localhost:3000/users/aValidId
```

## To debug in Chrome
Copy the followed line in chrome navbar :
```
chrome-devtools://devtools/bundled/js_app.html?experiments=true&v8only=true&ws=127.0.0.1:3001/UUID
```
- change UUID by the uuid of the debug session. (shown in the back container logs while starting
ex : Debugger listening on ws://0.0.0.0:3001/c160c135-f3f9-4cbc-ab6e-27d7d5 )
- If the Chrome browser is older than 66.0.3345.0, use inspector.html instead of js_app.html in the above URL.