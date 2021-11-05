const express = require("express");
const db = require("../config/db");
const bcryptjs = require("bcryptjs");

class userController {

    register(){

        return (req, res) => {

            const cpf = req.body.cpf
            const nome = req.body.nome
            const cargo = req.body.cargo
            const email = req.body.email
            const senha = req.body.senha
            
            const sqlInsert =
            "INSERT INTO tbcadastro (cpf, nome, cargo, email, senha) VALUES (?,?,?,?,?)";
            bcryptjs.hash(senha, 10, (errBcrypt, hash) => {
                if (errBcrypt) {return res.status(500).send ({error: bcryptjs }) }    
            db.query(sqlInsert, [cpf, nome, cargo, email, hash], (err, result) => {
                console.log(result);
                console.log(err);
                if (err){
                    return res.status(500).send (err)
                }
                return res.status(201).send({msg: "Cadastro Realizado."})
            });
            });  
        };  
    } 
}
module.exports = userController;
