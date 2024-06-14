const express = require('express');
const router = express.Router();
const ParoquiaController = require('../controllers/paroquia.controller');
const verifyToken = require('../middleware/auth');

router.get('/listar', verifyToken, ParoquiaController.listar);
router.get('/ver/:id', verifyToken, ParoquiaController.buscarPorId);
router.post('/criar', verifyToken, ParoquiaController.inserir);
router.put('/editar/:id', verifyToken, ParoquiaController.atualizar);
router.delete('/deletar/:id', verifyToken, ParoquiaController.deletar);

module.exports = router;