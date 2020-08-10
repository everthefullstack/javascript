const Job = require('../models/job');

module.exports = {

    get: (req, res) => {
        res.status(200).send("Funcionando");
    }
};