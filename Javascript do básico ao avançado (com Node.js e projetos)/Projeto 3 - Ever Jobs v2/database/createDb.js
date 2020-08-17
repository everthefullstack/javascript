const connection = require('../database/connection')
const vagaModel = require('../models/vaga');
const candidatoModel = require('../models/candidato');
const enderecoModel = require('../models/endereco');

const createDb = () => {
    connection.authenticate()
        .then(() => {
            console.log('Conexão com o MySQL foi estabelecida com sucesso');
            vagaModel.sync()
            candidatoModel.sync();
            enderecoModel.sync();
        })
        .catch(function (err) {
            console.log('Não foi possível se conectar com o banco de dados MySql');
        })
};

module.exports = createDb;