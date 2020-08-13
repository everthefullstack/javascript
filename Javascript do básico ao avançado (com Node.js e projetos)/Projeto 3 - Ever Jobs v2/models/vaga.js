const sequelize = require('../database/connection');
const Sequelize = require('sequelize');

const Vaga = sequelize.define(
    'vaga',{
        pkcodjob:{
            type: Sequelize.INTEGER,
            field: 'pkcodvaga',
            primaryKey: true
        },
        nomevaga: {
            type: Sequelize.STRING(50),
            field: 'nomevaga'
        },
        empresa: {
            type: Sequelize.STRING(50),
            field: 'empresa'
        },
        descricaovaga:{
            type: Sequelize.STRING(50),
            field: 'descricaovaga'
        },
        salario: {
            type: Sequelize.NUMBER,
            field: 'salario'
        },
        email: {
            type: Sequelize.STRING(50),
            field: 'email'
        },
        telefone: {
            type: Sequelize.STRING(11),
            field: 'telefone'
        },
        vaganova: {
            type: Sequelize.BOOLEAN,
            field: 'vaganova'
        }
    }, 
    {
        timestamps: true
    }
);

module.exports = Vaga;