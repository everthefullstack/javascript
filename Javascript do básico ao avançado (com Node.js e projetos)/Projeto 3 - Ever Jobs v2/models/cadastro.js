const sequelize = require('../database/connection');
const Sequelize = require('sequelize');
const Endereco = require('./endereco');
const Formacao = require('./formacao');
const Emprego = require('./emprego');
const Curso = require('./curso');

const Cadastro = sequelize.define(
    'tbcadastro',{
        pkcodcand:{
            type: Sequelize.INTEGER,
            field: 'pkcodcad',
            primaryKey: true
        },
        nomecand: {
            type: Sequelize.STRING(50),
            field: 'nome'
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
        timestamps: true,
        freezeTableName: true
    }
);

Cadastro.hasOne(Endereco, {foreignKey: 'fkcodcad'});
Cadastro.hasOne(Formacao, {foreignKey: 'fkcodcad'});
Cadastro.hasOne(Emprego, {foreignKey: 'fkcodcad'});
Cadastro.hasOne(Curso, {foreignKey: 'fkcodcad'});

module.exports = Cadastro;