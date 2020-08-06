const db = require('../db/connection');

const Job = db.define('job', {
    nome: {
        type: db.Sequelize.STRING,
    },
    descricao:{
        type: db.Sequelize.STRING,
    },
    salario: {
        type: db.Sequelize.NUMBER,
    },
    companhia: {
        type: db.Sequelize.STRING,
    },
    email: {
        type: db.Sequelize.STRING,
    },
    vagaNova: {
        type: db.Sequelize.BOOLEAN,
    }
});

module.exports = Job;