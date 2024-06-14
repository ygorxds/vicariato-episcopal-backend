const express = require('express');
const router = express.Router();
const CapelaController = require('../controllers/capela.controller');
const verifyToken = require('../middleware/auth');

router.get('/listar', verifyToken, CapelaController.listar);
router.get('/ver/:id', verifyToken, CapelaController.buscarPorId);
router.post('/criar', verifyToken, CapelaController.inserir);
router.put('/editar/:id', verifyToken, CapelaController.atualizar);
router.delete('/deletar/:id', verifyToken, CapelaController.deletar);

module.exports = router;