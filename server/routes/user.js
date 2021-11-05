const express = require("express");
const router = express.Router();
const db = require("../config/db");
const bcryptjs = require("bcryptjs");
const jwt = require('jsonwebtoken');
const UserController = require('../controllers/userController.js');
const userController = new UserController();




router.get("/", (req, res) => {
    res.status(200).send("servidor rodando")
});

// Rota de cadastro de usuário
router.post("/api/insert", userController.register());


router.post("/api/select", (req, res) => {
 
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


module.exports = router;