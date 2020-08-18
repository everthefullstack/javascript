const Emprego = require('../models/emprego');

module.exports = {

    get: (req, res) => {
        res.status(200).send("Funcionando get emprego");
    },
    post: (req, res) => {
        res.status(200).send("Funcionando post emprego");
    },
    put: (req, res) => {
        res.status(200).send("Funcionando put emprego");
    },
    delete: (req, res) => {
        res.status(200).send("Funcionando delete emprego");
    }
};