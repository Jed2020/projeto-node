import React, { useState } from "react";
import{
    Button,
    TextField,
} from "@material-ui/core";
import "../form.css";
import Typography from '../body/typography';
import { api } from "../../utils/api";


function Curriculum() {

  const [experiencia, setExperiencia] = useState('');
  const [atividades_exercidas, setAtividades_exercidas] = useState('');
  const [data_inicio, setData_inicio] = useState('');
  const [data_final, setData_final] = useState('');
    
  const submitReview = () => {

    const cpf = localStorage.getItem("cpf") 

    api.post("/api/curriculum", {
      experiencia: experiencia, 
      atividades_exercidas: atividades_exercidas, 
      data_inicio: data_inicio, 
      data_final: data_final, 
      id_cpf: cpf
    }).then(() => {
      alert('Cadastro realizado com Sucesso!')
    });
  };       
  
  return (
    <div className="cadastroLogin">
      <Typography 
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
      <h1>Cadastre suas Habilidades</h1>
      </Typography>
      <form onSubmit={(event) => {
        event.preventDefault();
      }}>
        <TextField
          id="experiencia"
          name="experiencia"
          label="Habilidade\Experiência"
          variant="outlined"
          margin="dense"
          fullWidth
          value={experiencia}
          onChange={(event) => {setExperiencia(event.target.value)}}
        />
        <TextField
          id="atividades_exercidas"
          name="atividades_exercidas"
          label="Descreva Habilidade\Experiência"
          variant="outlined"
          margin="dense"
          fullWidth
          value={atividades_exercidas}
          onChange={(event) => {setAtividades_exercidas(event.target.value)}}
        />
        <TextField
          id="data_inicio"
          label="Data Inicio"
          variant="outlined"
          margin="dense"
          fullWidth
          value={data_inicio}
          onChange={(event) => {setData_inicio(event.target.value)}}
        />
        <TextField
          id="data_final"
          label="Data Final"
          variant="outlined"
          margin="dense"
          fullWidth
          value={data_final}
          onChange={(event) => {setData_final(event.target.value)}}
        />
        <Button onClick={submitReview} className="btn-form" variant="contained" color="primary">
          Cadastrar
        </Button>
      </form>  
    </div>
  );
}
  
  export default Curriculum;