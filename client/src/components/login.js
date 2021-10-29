import React, { useState } from "react";
import{
    Button,
    TextField,
} from "@material-ui/core";
import "./form.css";
import Axios from 'axios';

function MyForm() {
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');

    const submitReview = () => {
      Axios.post("http://localhost:3001/api/select", {
        cpf: cpf, senha: senha,
      }).then(() => {
        alert('Inserido com Sucesso!')
      });
    };
  
    return (
      <div className="form">
        <h1>Faça seu de Login</h1>
        <form onSubmit={(event) => {
          event.preventDefault();
        }}>
          <TextField
            id="cpf"
            label="CPF"
            variant="outlined"
            margin="dense"
            fullWidth
            value={cpf}
            onChange={(event) => {setCpf(event.target.value)}}
          />
          <TextField
            id="senha"
            label="Senha"
            variant="outlined"
            margin="dense"
            fullWidth
            value={senha}
            onChange={(event) => {setSenha(event.target.value)}}
          />
          <Button onClick={submitReview} className="btn-form" variant="contained" color="primary">
            Enviar
          </Button>
        </form>  
      </div>
    );
  }
  
  export default MyForm;