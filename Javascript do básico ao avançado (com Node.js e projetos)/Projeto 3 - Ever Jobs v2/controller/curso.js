const Curso = require('../models/curso');

module.exports = {

    get: (req, res) => {
        res.status(200).send("Funcionando get curso");
    },
    post: (req, res) => {
        res.status(200).send("Funcionando post curso");
    },
    put: (req, res) => {
        res.status(200).send("Funcionando put curso");
    },
    delete: (req, res) => {
        res.status(200).send("Funcionando delete curso");
    }
};