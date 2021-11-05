require("dotenv").config();
const jwt = require('jsonwebtoken');
const mysql = require("mysql");
const bcrypt = require('bcrypt');

function verifyJWT(req, result) {
    console.log({req:req.body, result});
    bcrypt.compare(req.body.senha, result[0].senha, (err, success) => {
        if (err) {
            return false
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
            return token
        }
    });
}
module.exports = verifyJWT;