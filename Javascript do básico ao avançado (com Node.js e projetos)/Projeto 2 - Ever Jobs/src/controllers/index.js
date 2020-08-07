const express = require('express');
const router = express.Router();
const Job = require('../models/job');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.get('/', (req, res) => {
  
  let search = req.query.job;
  let query = '%'+search+'%'

  if(!search){
    Job.findAll({
      order:[
        ['createdAt', 'DESC']
      ]
    })
    .then(jobs =>{
      res.render('index', {jobs});
    }).catch(err => console.log(err));
  } else {
    Job.findAll({
      where: {nome: {[Op.like]:query}},
      order:[
        ['createdAt', 'DESC']
      ]
    })
    .then(jobs => {
      res.render('index', {jobs,search});
    }).catch(err => console.log(err));;
  }
});

module.exports = router;