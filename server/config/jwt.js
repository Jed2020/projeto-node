require("dotenv").config();
const jwt = require('jsonwebtoken');
const mysql = require("mysql");
const bcrypt = require('bcrypt');

async function verifyJWT(req, result) {
    try {
        const match = await bcrypt.compare(req.body.senha, result[0].senha);
        if (match) {        
            return jwt.sign({
                cpf: result[0].CPF,               
            },
            process.env.JWT_KEY,
            {
                expiresIn: "1h"
            });             
        }
    } catch (error) {
        
    }  
}
module.exports = verifyJWT;