const sequelize = require('../database/connection');
const Sequelize = require('sequelize');

const Curso = sequelize.define(
    'tbcurso',{
        pkcodcurso:{
            type: Sequelize.INTEGER,
            field: 'pkcodcurso',
            primaryKey: true
        },
        nome: {
            type: Sequelize.STRING(50),
            field: 'nome'
        },
        inicio: {
            type: Sequelize.DATE,
            field: 'inicio'
        },
        fim: {
            type: Sequelize.DATE,
            field: 'fim'
        },
        credencial: {
            type: Sequelize.STRING(50),
            field: 'credencial'
        }
    }, 
    {
        timestamps: true,
        freezeTableName: true
    }
);

module.exports = Curso;