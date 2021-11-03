import React, { useState } from "react";
import{
    Button,
    TextField,
} from "@material-ui/core";

import "../form.css";
import Axios from 'axios';

function Form() {
    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    const [emailError, setEmailError] = useState(false);

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
            id="nome"
            label="Nome Completo"
            variant="outlined"
            margin="dense"
            fullWidth
            value={nome}
            onChange={(event) => {setNome(event.target.value)}}
          />
          <TextField
            id="cargo"
            label="Cargo na Empresa"
            variant="outlined"
            margin="dense"
            fullWidth
            value={cargo}
            onChange={(event) => {setCargo(event.target.value)}}
          />
          <TextField
            id="email"
            label="E-mail"
            variant="outlined"
            margin="dense"
            fullWidth
            error={emailError}
            helperText={emailError && "Deve conter @."}
            value={email}
            onBlur={(event) => {
              const textoEmail = event.target.value;
  
              if (textoEmail.length === '@') {
                setEmailError(true);
              } else {
                setEmailError(false);
              }
            }}
            onChange={(event) => {
              const textoEmail = event.target.value;
  
              if (textoEmail.length !== '@') {
                setEmailError(false);
              }
  
              setEmail(event.target.value)}
            }
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
            Cadastrar
          </Button>
        </form>  
      </div>
    );
  }
  
  export default Form;