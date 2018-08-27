const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/users.controller');

/* GET ALL users */
router.get('/', user_controller.user_readall);

/* GET user */
router.get('/:id', user_controller.user_read);

/* POST user */
router.post('/', user_controller.user_create);

/* PUT user */
router.put('/:id', user_controller.user_update);

/* DELETE */
router.delete('/:id', user_controller.user_delete);

module.exports = router;
