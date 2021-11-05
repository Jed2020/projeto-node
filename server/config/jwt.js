require("dotenv").config();
const jwt = require('jsonwebtoken');
const mysql = require("mysql");
const bcryptjs = require("bcryptjs");

function verifyJWT(req, res) {
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
    });
}
module.exports = verifyJWT;