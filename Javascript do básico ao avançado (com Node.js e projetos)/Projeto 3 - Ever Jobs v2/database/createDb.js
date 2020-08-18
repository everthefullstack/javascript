const connection = require('../database/connection');
const vagaModel = require('../models/vaga');
const cadastroModel = require('../models/cadastro');
const enderecoModel = require('../models/endereco');
const formacaoModel = require('../models/formacao');
const empregoModel = require('../models/emprego');
const cursoModel = require('../models/curso');

const createDb = () => {
    connection.authenticate()
        .then(() => {
            console.log('Conexão com o Banco de dados foi estabelecida com sucesso');
            vagaModel.sync()
            cadastroModel.sync();
            enderecoModel.sync();
            formacaoModel.sync();
            empregoModel.sync();
            cursoModel.sync();
        })
        .catch(function (err) {
            console.log('Não foi possível se conectar com o banco de dados' + err);
        })
};

module.exports = createDb;