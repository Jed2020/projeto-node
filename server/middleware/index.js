const jwt = require('jsonwebtoken');

module.exports = (res, req, next) => {
    
    try {
        const token = res.headers.authorization.split('')[1];
        const decode = jwt.verify(token, process.env.JWT_KEY);
        req.usuario = decode;
        next();

    } catch (error) {
        return res.status(401).send({msg: "Falha na autenticação."})
        
    }
}