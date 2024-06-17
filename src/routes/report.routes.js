const express = require('express');
const router = express.Router();
const IdadeController = require('../controllers/report.controller');
const verifyToken = require('../middleware/auth');

router.post('/idade', verifyToken, IdadeController.distribuicaoDeIdade);


module.exports = router;