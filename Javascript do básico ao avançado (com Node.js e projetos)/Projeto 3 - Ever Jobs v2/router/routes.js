const express = require('express');
const router = express.Router();
const controllerIndex = require('../controller/index');
const controllerVaga = require('../controller/vaga');
const controllerCadastro = require('../controller/cadastro');
const controllerEndereco = require('../controller/endereco');
const controllerFormacao = require('../controller/formacao');
const controllerEmprego = require('../controller/emprego');
const controllerCurso = require('../controller/curso');

//rotas para o controller index
router.get('/', controllerIndex.get);

//rotas para o controller vaga
router.get('/vaga', controllerVaga.get);
router.post('/vaga', controllerVaga.post);
router.put('/vaga', controllerVaga.put);
router.delete('/vaga', controllerVaga.delete);

//rotas para o controller cadastro
router.get('/cadastro', controllerCadastro.get);
router.post('/cadastro', controllerCadastro.post);
router.put('/cadastro', controllerCadastro.put);
router.delete('/cadastro', controllerCadastro.delete);

//rotas para o controller endereco
router.get('/endereco', controllerEndereco.get);
router.post('/endereco', controllerEndereco.post);
router.put('/endereco', controllerEndereco.put);
router.delete('/endereco', controllerEndereco.delete);

//rotas para o controller formacao
router.get('/formacao', controllerFormacao.get);
router.post('/formacao', controllerFormacao.post);
router.put('/formacao', controllerFormacao.put);
router.delete('/formacao', controllerFormacao.delete);

//rotas para o controller emprego
router.get('/emprego', controllerEmprego.get);
router.post('/emprego', controllerEmprego.post);
router.put('/emprego', controllerEmprego.put);
router.delete('/emprego', controllerEmprego.delete);

//rotas para o controller curso
router.get('/curso', controllerCurso.get);
router.post('/curso', controllerCurso.post);
router.put('/curso', controllerCurso.put);
router.delete('/curso', controllerCurso.delete);

module.exports = router;