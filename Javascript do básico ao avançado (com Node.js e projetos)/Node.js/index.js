//criando um projeto em Node: ir na pasta do projto, abrir termina, digitar: npm init

//lendo arquivos com node 
//escrevendo arquivos com node
const {readFile, writeFile} = require("fs");
readFile("arquivo.txt", "utf-8", (error, text) => {
    if(error){
        throw error;
    } else {
        console.log(text);
    }
});
writeFile("arquivo.txt", "curso de nodejs", (error) =>{
    if(error){
        throw error;
    } else {
        console.log("Escreveu com sucesso");;
    }
});

//criando uma aplicação com o create server
const {createServer} = require("http");
const server = createServer((request, response) => {

    response.writeHead(200, {"Content-Type":"text/tml"});
    response.write(`
        <h1>Hello world</h1>
        <p>Primeira página com nodejs</p>
    `);
});
server.listen(8000);
console.log("Ouvindo na porta 8000");

//utilizando basicamente o express
const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('primeira rota com express');
});

app.listen(3000, function() {
    console.log("servidor ok");
});