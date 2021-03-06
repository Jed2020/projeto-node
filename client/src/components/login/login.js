import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import{
    Button,
    TextField,
    Grid,
} from "@material-ui/core";
import Typography from '../body/typography';
import { api } from "../../utils/api";

function MyForm() {
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const history = useHistory();

    const submitReview = () => {

      const data = { cpf: cpf, senha: senha };
      api.post("/api/select", data)
      .then((response) => {         
          localStorage.setItem("cpf", data.cpf);       
          localStorage.setItem("token", response.data.token); 
          api.defaults.headers.Authorization = "Bearer " + response.data.token;
          history.push('/inicial');
          alert('Login feito com Sucesso!');       
      }).catch(error => {
        alert('Login não realizado, erros nas informações.')
      })
    };
  
    return (
      <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '50vh' }}
      >
      <Typography 
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Faça seu Login
        </Typography>
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
        </Grid>
    );
  }
  
  export default MyForm;