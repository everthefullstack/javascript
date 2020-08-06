const express = require('express');
const router = express.Router()
const Job = require('../models/job');

router.post('/add', (req,res) => {

    let {nome,
        descricao,
        salario,
        companhia,
        email,
        vagaNova
    } = req.body;

    Job.create({
        nome,
        descricao,
        salario,
        companhia,
        email,
        vagaNova
    }).then(() => res.send('200'))
    .catch(err => console.log(err));
});

module.exports = router;