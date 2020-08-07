const express = require('express');
const router = express.Router()
const Job = require('../models/job');

router.get('/add', (req, res) => {
    res.render('add');
});

router.get('/view/:id', (req, res) => Job.findOne({
    where: {id: req.params.id}
    }).then(job => {
  
        res.render('view', {job});

}).catch(err => console.log(err)));

router.post('/add', (req, res) => {

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
    }).then(() => res.redirect('/'))
    .catch(err => console.log(err));
});

module.exports = router;