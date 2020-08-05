const express = require('express');
const app = express();
const connection = require('./db/connection');
const jobs = require('./db/jobs');

app.listen(3000, function(){
    console.log("O express está rodando")
});

app.get('/',(req, res) => {
    res.send("está funcionando muito bem");
});

connection.authenticate().then(() => {
    console.log("Conectado ao banco de dados");
}).catch(err => {
    console.log("Erro ao conectar ao banco de dados", err);
});

jobs.sync();