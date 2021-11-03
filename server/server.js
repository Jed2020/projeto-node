require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./config/db");
const bcryptjs = require("bcryptjs");
const jwt = require('jsonwebtoken');



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.status(200).send("servidor rodando")
});

app.post("/api/insert", (req, res) => {

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
});   

app.post("/api/select", (req, res) => {
 
    const cpf = req.body.cpf
    const senha = req.body.senha


    const sqlSelect =
    `SELECT * FROM  tbcadastro WHERE cpf = ${mysql.escape(cpf)}`;
    db.query(sqlSelect, [cpf, senha], (err, result) => {
        console.log(result);
        console.log(err);
        if (err){return res.status(500).send (err)}
        if (result.length < 1) {
            return res.status(401).send({msg: "Falha na autenticação."})
        }
        bcryptjs.compare(req.body.senha, result[0].senha, (err, success) => {
            if (err) {
                return res.status(401).send({msg: "Falha na autenticação."})
            }
            if (success) {
                let token = jwt.sign({
                    cpf: result[0].CPF,
                    senha: result[0].senha
                }, 
                process.env.JWT_KEY,
                {
                    expiresIn: "1h"
                }); 
                return res.status(200).send({
                    msg: "Login Realizado.",
                    token: token
                });
            }
            return res.status(401).send({msg: "Falha na autenticação."})
        });
        
    });  
});   


app.listen(3001, () => {
    console.log("rodando na porta 3001");

}); 