const Vaga = require('../models/vaga');

module.exports = {

    get: (req, res) => {
        res.status(200).send("Funcionando get vaga");
    },
    post: (req, res) => {
        res.status(200).send("Funcionando post vaga");
    },
    put: (req, res) => {
        res.status(200).send("Funcionando put vaga");
    },
    delete: (req, res) => {
        res.status(200).send("Funcionando delete vaga");
    }
};