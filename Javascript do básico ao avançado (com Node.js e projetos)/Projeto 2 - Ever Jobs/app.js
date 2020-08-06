const express = require('express');
const app = express();
const db = require('./src/db/job');
const bodyParser = require('body-parser')

//configurações
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

//rotas
app.use('/job', require('./src/controllers/job'));

//inicia o servidor
app.listen(3000, function(){
    console.log("O express está rodando na porta 3000!")
    //cria tabelas do banco
    db.sync();
});