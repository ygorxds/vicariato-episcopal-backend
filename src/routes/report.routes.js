const express = require('express');
const router = express.Router();
const IdadeController = require('../controllers/report.controller');
const verifyToken = require('../middleware/auth');

router.post('/idade', verifyToken, IdadeController.distribuicaoDeIdade);
router.post('/genero', verifyToken, IdadeController.distribuicaoDeGenero);
router.post('/generoPorIdade', verifyToken, IdadeController.distribuicaoDeGeneroPorIdade);
router.post('/escolaridade', verifyToken, IdadeController.distribuicaoDeEducacao);
router.post('/escolaridadePorMovimento', verifyToken, IdadeController.distribuicaoDeEscolaridadePorMovimento);
router.post('/estadoCivil', verifyToken, IdadeController.distribuicaoDeEstadoCivil);
router.post('/pastoraisDosMescs', verifyToken, IdadeController.distribuicaoDeMescEmOutrosMovimentos);
router.post('/mescsParticipamDeOutrasPastorais', verifyToken, IdadeController.distribuicaoDeMescEmOutrosMovimentosFazOuNao);
router.post('/cadastroAoLongoDoTempo', verifyToken, IdadeController.distribuicaoDeMescAoLongoDoTempo);
router.post('/estados', verifyToken, IdadeController.distribuicaoDeMescPorEstado);
router.post('/municipios', verifyToken, IdadeController.distribuicaoDeMescPorMunicipio);


module.exports = router;