var express = require('express');
var router = express.Router();

const userController = require('../controller/UserController');



/* GET users listing. */
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUser);
router.post('/register', userController.createUser);
router.post('/login', userController.loginUser);




module.exports = router;