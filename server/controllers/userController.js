require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("../config/db");
const mysql = require("mysql");
const bcrypt = require('bcrypt');
const verifyJWT = require('../config/jwt');

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
            bcrypt.hash(senha, 10, (errBcrypt, hash) => {
                if (errBcrypt) {return res.status(500).send ({error: bcrypt }) }    
            db.query(sqlInsert, [cpf, nome, cargo, email, hash], (err, result) => {
                if (err){
                    return res.status(500).send (err)
                }
                return res.status(201).send({msg: "Cadastro Realizado."})
            });
            });  
        };  
    }
    login(){
        return (req, res) => {
 
            const cpf = req.body.cpf
            const senha = req.body.senha        
        
            const sqlSelect =
            `SELECT * FROM  tbcadastro WHERE cpf = ${mysql.escape(cpf)}`;
            db.query(sqlSelect, [cpf, senha], (err, result) => {
                if (err){return res.status(500).send (err)}
                if (result.length < 1) {
                    return res.status(401).send({msg: "Falha na autenticação."})
                }
                verifyJWT(req, result).then((token) => {
                    if (!token){               
                        return res.status(401).send({msg: "Falha na autenticação."})
                    } else {
                        return res.status(200).send({
                            msg: "Login Realizado.",
                            token: token
                        });
                    }
                })  
            });    
        };  
    };
    editableUser(){

        return (req, res) => {

            const cpf = 0
            const nome = 0
            const cargo = 0
            const email = 0          

            const sqlSelect =
            "SELECT cpf, nome, cargo, email FROM tbcadastro";   
            db.query(sqlSelect, [cpf, nome, cargo, email], (err, result) => {
                if (err){
                return res.status(500).send(err)
                }
                return res.status(200).send(result)
            });
        };  
    };
    updateUser(){

        return (req, res) => {
            
            const cpf = req.params.cpf
            const nome = req.body.nome
            const cargo = req.body.cargo
            const email = req.body.email
            

            const sqlUpdate =
            "UPDATE tbcadastro SET nome = ?, cargo = ?, email = ? WHERE cpf = ?";   
            db.query(sqlUpdate, [nome, cargo, email, cpf], (err, result) => {
                if (err){
                return res.status(500).send(err)
                }
                return res.status(200).send(result)
            });
        };  
    };
    deleteUser(){

        return (req, res) => {
            
            const cpf = req.params.cpf
           
            const sqlDelete =
            "DELETE FROM tbcadastro WHERE cpf = ?";   
            db.query(sqlDelete, [cpf], (err, result) => {
                if (err){
                return res.status(500).send(err)
                }
                return res.status(200).send(result)
            });
        };  
    }; 
}

module.exports = userController;