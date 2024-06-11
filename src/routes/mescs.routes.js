const express = require('express');
const router = express.Router();
const MescController = require('../controllers/mesc.controller');
const verifyToken = require('../middleware/auth');

router.get('/listarTodosOsMescs', verifyToken, MescController.buscar);
router.get('/verDadosDoMesc/:id', verifyToken, MescController.buscarPorId);
router.post('/criarMesc', verifyToken, MescController.inserirMesc);
router.put('/editarMesc/:id', verifyToken, MescController.editarMesc);
router.delete('/deletarMesc/:id', verifyToken, MescController.deletarMesc);

module.exports = router;