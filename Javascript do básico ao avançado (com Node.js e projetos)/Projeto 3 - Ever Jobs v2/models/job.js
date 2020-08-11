const sequelize = require('../database/connection');
const Sequelize = require('sequelize');

const job = sequelize.define(
    'job',{
        id:{
            field: 'pkcodjob',
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        nome: {
            type: Sequelize.STRING(50),
            field: 'nome'
        },
        descricao:{
            type: Sequelize.STRING(50),
            field: 'descricao'
        },
        salario: {
            type: Sequelize.NUMBER,
            field: 'salario'
        },
        companhia: {
            type: Sequelize.STRING(50),
            field: 'companhia'
        },
        email: {
            type: Sequelize.STRING(50),
            field: 'email'
        },
        vagaNova: {
            type: Sequelize.BOOLEAN,
            field: 'vagaNova'
        }
    }, 
    {
        timestamps: false
    }
);

module.exports = job;