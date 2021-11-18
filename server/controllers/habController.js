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
    school(){

        return (req, res) => {
    
            const curso = req.body.curso
            const instituicao = req.body.instituicao
            const conclusao = req.body.conclusao
            const situacao = req.body.situacao
            const id_cpf = req.body.id_cpf                    
            
            const sqlInsert =
            "INSERT INTO tbescolaridade (curso, instituicao, conclusao, situacao, id_cpf) VALUES (?,?,?,?,?)";
            db.query(sqlInsert, 
                [curso, instituicao, 
                conclusao, situacao, id_cpf], (err, result) => {
                console.log(result);
                console.log(err);
                if (err){
                    return res.status(500).send (err)
                }
                return res.status(201).send({msg: "Cadastro Realizado."})
            });
        };  
    };
    tableCurriculum(){

        return (req, res) => {

            var id = 0
            var experiencia = 0
            var atividades_exercidas = 0
            var data_inicio = 0
            var data_final = 0 
            var id_cpf = 0
            

            const sqlSelect =
            "SELECT id, experiencia, atividades_exercidas, data_inicio, data_final, id_cpf FROM tbhabilidades";   
            db.query(sqlSelect, [id, experiencia, atividades_exercidas, data_inicio, data_final, id_cpf], (err, result) => {
                console.log(result);
                console.log(err);
                if (err){
                    return res.status(500).send(err)
                }
                return res.status(201).send(result)
            });
        };  
    };    
}

module.exports = habController;
