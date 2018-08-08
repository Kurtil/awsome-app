var express = require('express');
var router = express.Router();
var userService = require('../services/users.service');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(userService.getAllUsers());
});

/* POST user*/
router.post('/', function(req, res, next) {
  userService.addUser(req.body)
  res.send('OK');
});

module.exports = router;
