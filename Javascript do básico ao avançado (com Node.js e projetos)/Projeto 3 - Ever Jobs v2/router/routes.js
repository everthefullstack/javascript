const express           = require('express');
const router            = express.Router();
const controllerJob     = require('../controller/job');
const controllerIndex     = require('../controller/index');

//rotas para o controller index
router.get('/', controllerIndex.get);

//rotas para o controller job
router.get('/job', controllerJob.get);
router.post('/job', controllerJob.post);
router.put('/job', controllerJob.put);
router.delete('/job', controllerJob.delete);

module.exports = router;