const vagaModel          = require('../models/vaga');
const candidatoModel     = require('../models/candidato');
const enderecoModel      = require('../models/endereco');

const createDb = function(){
    vagaModel.sync();
    candidatoModel.sync();
    enderecoModel.sync();
}

module.exports = createDb;