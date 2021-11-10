import React, { useState } from "react";
import{
    Button,
    TextField,
} from "@material-ui/core";
import "../form.css";
import Axios from 'axios';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

function Form() {
    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    

    const validate = yup.object().shape({
      cpf: yup.number()
      .required()
      .min(10)
      .max(11)
      .positive().integer(),
      cargo: yup.string()
        .required(),
      senha: yup.string()
        .required()
        .min(6),
      email: yup.string()
        .required()
        .email(),
      nome: yup.string()
        .required(),
    });

    const { register, handleSubmit} = useForm({
      resolver: yupResolver(validate),      
    });
    
    
    const submitReview = () => {
      Axios.post("http://localhost:3001/api/insert", {
        cpf: cpf, nome: nome, cargo: cargo, email: email, senha: senha,
      }).then(() => {
        alert('Cadastro realizado com Sucesso!')
      });
    };   
      
    return (
      <div className="form">
        <h1>Faça seu de Cadastro</h1>
        <form onSubmit={handleSubmit(submitReview)}>
          <TextField
            id="cpf"
            name="cpf"
            label="CPF"
            variant="outlined"
            margin="dense"
            fullWidth            
            {...register('cpf', { required: true })}            
            value={cpf}
            onChange={(event) => {setCpf(event.target.value)}}
          />
          <TextField
            id="nome"
            name="nome"
            label="Nome Completo"
            variant="outlined"
            margin="dense"
            fullWidth
            value={nome}
            onChange={(event) => {setNome(event.target.value)}}
          />
          <TextField
            id="cargo"
            name="cargo"
            label="Cargo na Empresa"
            variant="outlined"
            margin="dense"
            fullWidth          
            value={cargo}
            onChange={(event) => {setCargo(event.target.value)}}
          />
          <TextField
            id="email"
            name="email"
            label="E-mail"
            variant="outlined"
            margin="dense"
            fullWidth      
            value={email}
            onChange={(event) => {setEmail(event.target.value)}}
          />
          <TextField
            id="senha"
            name="senha"
            label="Senha"
            variant="outlined"
            margin="dense"
            fullWidth
            value={senha}
            onChange={(event) => {setSenha(event.target.value)}}
          />
          <Button onClick={submitReview} className="btn-form" variant="contained" color="primary">
            Cadastrar
          </Button>
        </form>
      </div>
    );
  }
  
  export default Form;