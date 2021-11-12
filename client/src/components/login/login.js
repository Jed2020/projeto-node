import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import{
    Button,
    TextField,
} from "@material-ui/core";
import "../form.css";
import { api } from "../../utils/api";


function MyForm() {
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const history = useHistory();

    const submitReview = () => {
      const data = { cpf: cpf, senha: senha };
      api.post("/api/select",data)
      .then((response) => {         
          localStorage.setItem("cpf", data.cpf);       
          localStorage.setItem("token", response.data.token); 
          api.defaults.headers.Authorization = "Bearer " + response.data.token;  
          history.push('/curriculum');
          alert('Inserido com Sucesso!');       
      })
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