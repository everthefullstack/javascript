const sequelize = require('../database/connection');
const Sequelize = require('sequelize');
const Endereco = require('./endereco');

const Candidato = sequelize.define(
    'candidato',{
        pkcodcand:{
            type: Sequelize.INTEGER,
            field: 'pkcodcand',
            primaryKey: true
        },
        nomecand: {
            type: Sequelize.STRING(50),
            field: 'nomecand'
        },
        datanasc: {
            type: Sequelize.DATE,
            field: 'datanasc'
        },
        telefone: {
            type: Sequelize.STRING(11),
            field: 'telefone'
        },
        email: {
            type: Sequelize.STRING(50),
            field: 'email'
        }
    }, 
    {
        timestamps: true
    }
);

Candidato.hasOne(Endereco, {foreignKey: 'fkcodcand'});

module.exports = Candidato;