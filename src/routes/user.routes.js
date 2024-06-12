const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');
const verifyToken = require('../middleware/auth');

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/me', verifyToken, UserController.me);
router.get('/myData', verifyToken, UserController.userData)
router.delete('/deleteAccount', verifyToken, UserController.deleteUser)
router.put('/update', verifyToken, UserController.updateUser);


module.exports = router;
