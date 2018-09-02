# The Back
The front is an Express app generated from express-generator 4.16.0

The app run with nodemon for auto restart after changes on development.

## To test the Users CRUD

```
// TO CREATE
curl -i -d 'firstName=JohnSon' -X POST http://localhost:3000/users

// TO READ
curl -i -X GET http://localhost:3000/users/ValidId

// TO READ ALL
curl -i http://localhost:3000/users/

// TO UPDATE
curl -i -d 'firstName=Jojo' -X PUT http://localhost:3000/users/aValidId

// TO DELETE
curl -i -X DELETE http://localhost:3000/users/aValidId
```