var express = require('express');
var router = express.Router();
var userService = require('../services/users.service');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(userService.getAllUsers());
});

module.exports = router;
