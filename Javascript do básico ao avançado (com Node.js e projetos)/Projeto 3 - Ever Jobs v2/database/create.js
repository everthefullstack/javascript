const jobModel = require('../models/job');

const createDb = function(){
    jobModel.sync();
}

module.exports = createDb;