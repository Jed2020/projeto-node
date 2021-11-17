import React, { useState } from "react";
import{
    Button,
    TextField,
} from "@material-ui/core";
import "../form.css";
import Typography from '../body/typography';
import { api } from "../../utils/api";


function Schooling() {

  const [curso, setCurso] = useState('');
  const [instituicao, setInstituicao] = useState('');
  const [conclusao, setConclusao] = useState('');
  const [situacao, setSituacao] = useState('');
    
  const submitReview = () => {

    const cpf = localStorage.getItem("cpf")
    api.post("/api/schooling", {
        curso: curso, 
        instituicao: instituicao, 
        conclusao: conclusao, 
        situacao: situacao,
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
      Cadastre sua Escolaridade
      </Typography>
      <form onSubmit={(event) => {
        event.preventDefault();
      }}>
        <TextField
          id="curso"
          name="curso"
          label="Curso"
          variant="outlined"
          margin="dense"
          fullWidth
          value={curso}
          onChange={(event) => {setCurso(event.target.value)}}
        />
        <TextField
          id="instituicao"
          name="instituicao"
          label="Instituição"
          variant="outlined"
          margin="dense"
          fullWidth
          value={instituicao}
          onChange={(event) => {setInstituicao(event.target.value)}}
        />
        <TextField
          id="conclusao"
          label="Data Conclusão"
          variant="outlined"
          margin="dense"
          fullWidth
          value={conclusao}
          onChange={(event) => {setConclusao(event.target.value)}}
        />
        <TextField
          id="situacao"
          label="Se não conclui, qual a situação"
          variant="outlined"
          margin="dense"
          fullWidth
          value={situacao}
          onChange={(event) => {setSituacao(event.target.value)}}
        />
        <Button onClick={submitReview} className="btn-form" variant="contained" color="primary">
          Cadastrar
        </Button>
      </form>  
    </div>
  );
}
  
export default Schooling;