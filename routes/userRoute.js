const express = require('express');
const router = express.Router();

const userController = require('./controller/userController.js')
router.route('/').get(userController.getUsers).post(userController.createUser);
router.route('/:id').get(userController.getAUser).patch(userController.patchUser).delete(userController.deleteUser);

module.exports = router;