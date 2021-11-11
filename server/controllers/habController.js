require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("../config/db");
const mysql = require("mysql");


class habController {

    curriculum(){

        return (req, res) => {

            const id_habilidades = ''
            const experiencia = req.body.experiencia
            const atividades_exercidas = req.body.atividades_exercidas
            const data_inicio = req.body.data_inicio
            const data_final = req.body.data_final
            const id_cpf = JSON.parse(localStorage.getItem("cpf") )          
            
            const sqlInsert =
            "INSERT INTO tbhabilidades (experiencia, atividades_exercidas, data_inicio, data_final, id_cpf) VALUES (?,?,?,?,?)";
            (() => {                 
            db.query(sqlInsert, [id_habilidades, experiencia, atividades_exercidas, data_inicio, data_final, id_cpf], (err, result) => {
                console.log(result);
                console.log(err);
                if (err){
                    return res.status(500).send (err)
                }
                return res.status(201).send({msg: "Cadastro Realizado."})
            });
            });  
        };  
    }
    schooling(){
        return (req, res) => {
            
            const id_escolaridade = ''
            const curso = req.query.curso
            const instituicao = req.query.instituicao
            const conclusao = req.query.conclusao
            const situacao = req.query.situacao
            const id_cpf = localStorage.getItem("cpf")     
        
            const sqlSelect =
            `SELECT * FROM  tbcadastro WHERE cpf = ${mysql.escape(cpf)}`;
            db.query(sqlSelect, [id_escolaridade, curso, instituicao, conclusao, situacao, id_cpf], (err, result) => {
                console.log(result);
                console.log(err);
                if (err){
                    return res.status(500).send (err)
                }
                return res.status(201).send({msg: "Cadastro Realizado."})
            });
        };  
    };  
}

module.exports = habController;
