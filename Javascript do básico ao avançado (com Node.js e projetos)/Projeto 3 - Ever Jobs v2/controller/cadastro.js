const Cadastro = require('../models/cadastro');
const bcrypt = require('bcrypt');

module.exports = {

    get: (req, res) => {
        res.status(200).send("Funcionando get cadastro");
    },
    post: (req, res) => {
        
        bcrypt.hash(req.body.senha, 10, (errBcrypt, senha) => {
            if(errBcrypt){
                return res.status(500).send("Erro interno no servidor" + errBcrypt)
            }

            let {
                nome,
                datanasc,
                telefone,
                email
            } = req.body;
            
            Cadastro.create({
                nome,
                datanasc,
                telefone,
                email,
                senha
            }).then(() => res.status(200).send("Usuario cadastrado"))
              .catch(err => res.status(500).send("Email já cadastrado na base de dados!"));
        });  
    },

    put: (req, res) => {
        res.status(200).send("Funcionando put cadastro");
    },
    delete: (req, res) => {
        res.status(200).send("Funcionando delete cadastro");
    }
};