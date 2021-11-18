const express = require("express");
const router = express.Router();
const UserController = require('../controllers/userController.js');
const HabController = require('../controllers/habController.js');
const userController = new UserController();
const habController = new HabController();



router.get("/", (req, res) => {
    res.status(200).send("servidor rodando")
});

// Rota de cadastro de usuário
router.post("/api/insert", userController.register());

// Rota de login de usuário
router.post("/api/select", userController.login());

// Rota de cadastro de habilidade
router.post("/api/curriculum", habController.curriculum());

// Rota de cadastro de escolaridade
router.post("/api/school", habController.school());

module.exports = router;