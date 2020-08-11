const job = require('../models/job');

module.exports = {

    get: (req, res) => {
        res.status(200).send("Funcionando get job");
    },
    post: (req, res) => {
        res.status(200).send("Funcionando post job");
    },
    put: (req, res) => {
        res.status(200).send("Funcionando put job");
    },
    delete: (req, res) => {
        res.status(200).send("Funcionando delete job");
    }
};