const Candidato = require('../models/candidato');

module.exports = {

    get: (req, res) => {
        res.status(200).send("Funcionando get candidato");
    },
    post: (req, res) => {
        res.status(200).send("Funcionando post candidato");
    },
    put: (req, res) => {
        res.status(200).send("Funcionando put candidato");
    },
    delete: (req, res) => {
        res.status(200).send("Funcionando delete candidato");
    }
};