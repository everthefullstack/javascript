const Cadastro = require('../models/cadastro');

module.exports = {

    get: (req, res) => {
        res.status(200).send("Funcionando get cadastro");
    },
    post: (req, res) => {
        res.status(200).send("Funcionando post cadastro");
    },
    put: (req, res) => {
        res.status(200).send("Funcionando put cadastro");
    },
    delete: (req, res) => {
        res.status(200).send("Funcionando delete cadastro");
    }
};