const sequelize = require('../database/connection');
const Sequelize = require('sequelize');

const Emprego = sequelize.define(
    'tbemprego',{
        pkcodemp:{
            type: Sequelize.INTEGER,
            field: 'pkcodemp',
            primaryKey: true
        },
        nome: {
            type: Sequelize.STRING(50),
            field: 'nome'
        },
        cargo: {
            type: Sequelize.STRING(30),
            field: 'cargo'
        },
        descricao: {
            type: Sequelize.STRING(150),
            field: 'descricao'
        },
        inicio: {
            type: Sequelize.DATE,
            field: 'inicio'
        },
        fim: {
            type: Sequelize.DATE,
            field: 'fim'
        },
        empresaAtual: {
            type: Sequelize.STRING(50),
            field: 'empresaAtual'
        }
    }, 
    {
        timestamps: true,
        freezeTableName: true
    }
);

module.exports = Emprego;