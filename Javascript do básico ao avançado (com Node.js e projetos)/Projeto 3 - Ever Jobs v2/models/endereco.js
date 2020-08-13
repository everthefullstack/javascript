const sequelize = require('../database/connection');
const Sequelize = require('sequelize');

const Endereco = sequelize.define(
    'endereco',{
        pkcodend:{
            type: Sequelize.INTEGER,
            field: 'pkcodend',
            primaryKey: true
        },
        rua: {
            type: Sequelize.STRING(50),
            field: 'rua'
        },
        numero: {
            type: Sequelize.STRING(5),
            field: 'numero'
        },
        complemento: {
            type: Sequelize.STRING(30),
            field: 'complemento'
        },
        cep: {
            type: Sequelize.STRING(8),
            field: 'cep'
        },
        cidade: {
            type: Sequelize.STRING(50),
            field: 'cidade'
        },
        uf: {
            type: Sequelize.STRING(2),
            field: 'uf'
        }
    }, 
    {
        timestamps: true
    }
);

module.exports = Endereco;