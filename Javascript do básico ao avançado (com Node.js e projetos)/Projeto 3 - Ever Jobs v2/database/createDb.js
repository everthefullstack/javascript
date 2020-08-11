const jobModel          = require('../models/job');
const express           = require('express');
const router            = express.Router();

const createDb = function(){
    jobModel.sync();
    router.redirect(200, '../router/routes');
}

module.exports = createDb;