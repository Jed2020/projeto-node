require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("../config/db");
const mysql = require("mysql");


class habController {

    curriculum(){

        return (req, res) => {
    
            const experiencia = req.body.experiencia
            const atividades_exercidas = req.body.atividades_exercidas
            const data_inicio = req.body.data_inicio
            const data_final = req.body.data_final
            const id_cpf = req.body.id_cpf                    
            
            const sqlInsert =
            "INSERT INTO tbhabilidades (experiencia, atividades_exercidas, data_inicio, data_final, id_cpf) VALUES (?,?,?,?,?)";
            db.query(sqlInsert, 
                [experiencia, atividades_exercidas, 
                data_inicio, data_final, id_cpf], (err, result) => {
                console.log(result);
                console.log(err);
                if (err){
                    return res.status(500).send (err)
                }
                return res.status(201).send({msg: "Cadastro Realizado."})
            });
        };  
    }
    schooling(){
        return (req, res) => {
            
            const curso = req.query.curso
            const instituicao = req.query.instituicao
            const conclusao = req.query.conclusao
            const situacao = req.query.situacao
            const id_cpf = req.body.id_cpf     
        
            const sqlSelect =
            "INSERT INTO tbescolaridade (curso, instituicao, conclusao, situacao, id_cpf) VALUES (?,?,?,?,?)";
            db.query(sqlSelect, [curso, instituicao, conclusao, 
                situacao, id_cpf], (err, result) => {
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
