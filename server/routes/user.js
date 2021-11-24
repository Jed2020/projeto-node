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

// Rota de tabela de habilidades
router.get("/api/tableCurriculum", habController.tableCurriculum());

// Rota de tabela de escolaridade
router.get("/api/tableSchool", habController.tableSchool());

// Rota de visualização edição tabela de habilidade 
router.get("/api/editableCurriculum", habController.editableCurriculum());

// Rota de update tabela de habilidade 
router.put("/api/editableCurriculum/:id", habController.updateCurriculum());

// Rota de delete tabela de habilidade 
router.delete("/api/editableCurriculum/:id", habController.deleteCurriculum());

// Rota de visualização edição tabela de escolaridade
router.get("/api/editableSchool", habController.editableSchool());

// Rota de update tabela de escolaridade 
router.put("/api/editableSchool/:id", habController.updateSchool());

// Rota de delete tabela de escolaridade 
router.delete("/api/editableSchool/:id", habController.deleteSchool());
module.exports = router;