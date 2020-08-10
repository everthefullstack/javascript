const express           = require('express');
const router            = express.Router();
const controllerJob     = require('../controller/job');

router.get('/', controllerJob.get);

module.exports = router;