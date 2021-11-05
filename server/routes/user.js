const express = require("express");
const router = express.Router();
const UserController = require('../controllers/userController.js');
const userController = new UserController();




router.get("/", (req, res) => {
    res.status(200).send("servidor rodando")
});

// Rota de cadastro de usuário
router.post("/api/insert", userController.register());

// Rota de login de usuário
router.post("/api/select", userController.login());

module.exports = router;