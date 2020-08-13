const Endereco = require('../models/endereco');

module.exports = {

    get: (req, res) => {
        res.status(200).send("Funcionando get endereco");
    },
    post: (req, res) => {
        res.status(200).send("Funcionando post endereco");
    },
    put: (req, res) => {
        res.status(200).send("Funcionando put endereco");
    },
    delete: (req, res) => {
        res.status(200).send("Funcionando delete endereco");
    }
};