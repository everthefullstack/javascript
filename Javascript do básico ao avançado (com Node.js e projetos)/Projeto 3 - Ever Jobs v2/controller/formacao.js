const Formacao = require('../models/formacao');

module.exports = {

    get: (req, res) => {
        res.status(200).send("Funcionando get formação");
    },
    post: (req, res) => {
        res.status(200).send("Funcionando post formação");
    },
    put: (req, res) => {
        res.status(200).send("Funcionando put formação");
    },
    delete: (req, res) => {
        res.status(200).send("Funcionando delete formação");
    }
};