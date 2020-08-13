const express           = require('express');
const router            = express.Router();
const controllerVaga     = require('../controller/vaga');
const controllerCandidato     = require('../controller/candidato');
const controllerEndereco     = require('../controller/endereco');
const controllerIndex     = require('../controller/index');

//rotas para o controller index
router.get('/', controllerIndex.get);

//rotas para o controller vaga
router.get('/vaga', controllerVaga.get);
router.post('/vaga', controllerVaga.post);
router.put('/vaga', controllerVaga.put);
router.delete('/vaga', controllerVaga.delete);

//rotas para o controller candidato
router.get('/candidato', controllerCandidato.get);
router.post('/candidato', controllerCandidato.post);
router.put('/candidato', controllerCandidato.put);
router.delete('/candidato', controllerCandidato.delete);

//rotas para o controller endereco
router.get('/endereco', controllerEndereco.get);
router.post('/endereco', controllerEndereco.post);
router.put('/endereco', controllerEndereco.put);
router.delete('/endereco', controllerEndereco.delete);

module.exports = router;