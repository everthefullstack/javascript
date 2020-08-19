const sequelize = require('../database/connection');
const Sequelize = require('sequelize');

const Vaga = sequelize.define(
    'tbvaga', {
        pkcodvaga: {
            type: Sequelize.INTEGER,
            field: 'pkcodvaga',
            primaryKey: true
        },
        nome: {
            type: Sequelize.STRING(50),
            field: 'nome'
        },
        empresa: {
            type: Sequelize.STRING(50),
            field: 'empresa'
        },
        descricao: {
            type: Sequelize.STRING(50),
            field: 'descricao'
        },
        salario: {
            type: Sequelize.FLOAT,
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
            type: Sequelize.INTEGER,
            field: 'vagaNova'
        }
    },
    {
        timestamps: true,
        freezeTableName: true
    }
);

module.exports = Vaga;