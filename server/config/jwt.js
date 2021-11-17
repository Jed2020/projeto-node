require("dotenv").config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

async function verifyJWT(req, result) {
    try {
        console.log(result[0].SENHA)
        console.log(req.body.senha)
        const match = await bcrypt.compare(req.body.senha, result[0].SENHA);
        console.log(match)
        
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