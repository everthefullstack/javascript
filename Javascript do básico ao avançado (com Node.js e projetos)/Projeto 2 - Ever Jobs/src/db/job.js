const { DataTypes, Model } = require('sequelize');
const sequelize = require('./connection');

class Job extends Model{}
Job.init({
    nome: {
        type: DataTypes.STRING(50),
        field: 'nome'
    },
    descricao:{
        type: DataTypes.STRING(50),
        field: 'descricao'
    },
    salario: {
        type: DataTypes.NUMBER,
        field: 'salario'
    },
    companhia: {
        type: DataTypes.STRING(50),
        field: 'companhia'
    },
    email: {
        type: DataTypes.STRING(50),
        field: 'email'
    },
    vagaNova: {
        type: DataTypes.BOOLEAN,
        field: 'vagaNova'
    }
},{
    // Other model options go here
    sequelize // We need to pass the connection instance
});

module.exports = Job;