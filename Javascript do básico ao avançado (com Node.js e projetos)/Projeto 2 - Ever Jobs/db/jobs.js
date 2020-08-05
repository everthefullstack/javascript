const { DataTypes, Model } = require('sequelize');
const sequelize = require('./connection');

class Jobs extends Model{}
Jobs.init({
    pkcodjob: {
        type: DataTypes.INTEGER,
        field: 'pkcodjob',
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(50),
        field: 'nome'
    },
    titulo:{
        type: DataTypes.STRING(50),
        field: 'titulo'
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
    sequelize, // We need to pass the connection instance
    modelName: 'Jobs' // We need to choose the model name
});
module.exports = Jobs;