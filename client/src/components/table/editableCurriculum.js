import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {makeStyles} from '@material-ui/core/styles';
import {Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Modal, Button, TextField} from '@material-ui/core';
import {Edit, Delete} from '@material-ui/icons';

const baseUrl="http://localhost:3001/api/editableCurriculum";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  iconos:{
    cursor: 'pointer'
  }, 
  inputMaterial:{
    width: '100%'
  }
}));



export default function EditableCurriculum() {

  const styles= useStyles();
  const [data, setData]= useState([]);
  const [modalEditar, setModalEditar]= useState(false);
  const [modalEliminar, setModalEliminar]= useState(false);
  const [idSelecionado, setIdSelecionado]=useState({

    id: '',
    experiencia: '',
    atividades_exercidas: '',
    data_inicio: '',
    data_final: '',
    id_cpf: ''
  })

  const handleChange=e=>{
    const {name, value}=e.target;
    setIdSelecionado(prevState=>({
      ...prevState,
      [name]: value
    }));
  }

  const metodoGet=async()=>{
    await axios.get(baseUrl)
    .then(response=>{
     setData(response.data);
    }).catch(error=>{
      console.log(error);
    })
  }

  
  const metodoPut=async()=>{
    await axios.put(baseUrl+idSelecionado.id, idSelecionado)
    .then(response=>{
      var dataNew= data;
      dataNew.forEach(linha=>{
        if(idSelecionado.id===linha.id){
          linha.experiencia=idSelecionado.experiencia;
          linha.atividades_exercidas=idSelecionado.atividades_exercidas;
          linha.data_inicio=idSelecionado.data_inicio;
          linha.data_final=idSelecionado.data_final;
          linha.id_cpf=idSelecionado.id_cpf;
        }
      });
      setData(dataNew);
      abrirFecharModalEditar();
    }).catch(error=>{
      console.log(error);
    })
  }

  const metodoDelete=async()=>{
    await axios.delete(baseUrl+idSelecionado.id)
    .then(response=>{
      setData(data.filter(linha=>linha.id!==idSelecionado.id));
      abrirFecharModalEliminar();
    }).catch(error=>{
      console.log(error);
    })
  }

  const selecionarLinha=(linha, caso)=>{
    setIdSelecionado(linha);
    (caso==="Editar")?abrirFecharModalEditar():abrirFecharModalEliminar()
  }

  
  const abrirFecharModalEditar=()=>{
    setModalEditar(!modalEditar);
  }

  const abrirFecharModalEliminar=()=>{
    setModalEliminar(!modalEliminar);
  }

  useEffect(async()=>{
    await metodoGet();
  },[])

  
  const bodyEditar=(
    <div className={styles.modal}>
      <h3>Editar Habilidade</h3>
      <TextField className={styles.inputMaterial} label="ID" name="id" onChange={handleChange} value={idSelecionado && idSelecionado.id}/>
      <br />
      <TextField className={styles.inputMaterial} label="Experiência" name="experiencia" onChange={handleChange} value={idSelecionado && idSelecionado.experiencia}/>          
      <br />
      <TextField className={styles.inputMaterial} label="Atividades Exercidas" name="atividades_exercidas" onChange={handleChange} value={idSelecionado && idSelecionado.atividades_exercidas}/>
      <br />
      <TextField className={styles.inputMaterial} label="Data Final" name="data_final" onChange={handleChange} value={idSelecionado && idSelecionado.data_final}/>
      <br />
      <TextField className={styles.inputMaterial} label="CPF" name="id_cpf" onChange={handleChange} value={idSelecionado && idSelecionado.id_cpf}/>
      <br /><br />
      <div align="right">
        <Button color="primary" onClick={()=>metodoPut()}>Editar</Button>
        <Button onClick={()=>abrirFecharModalEditar()}>Cancelar</Button>
      </div>
    </div>
  )

  const bodyEliminar=(
    <div className={styles.modal}>
      <p>Tem certeza que deseja excluir essa linha? <b>{idSelecionado && idSelecionado.id}</b> ? </p>
      <div align="right">
        <Button color="secondary" onClick={()=>metodoDelete()}>Sim</Button>
        <Button onClick={()=>abrirFecharModalEliminar()}>Não</Button>

      </div>

    </div>
  )

  return (
    <div className="App">
      <br />
     <TableContainer>
       <Table>
         <TableHead>
           <TableRow>
             <TableCell>ID</TableCell>
             <TableCell>Experiência</TableCell>
             <TableCell>Atividades Exercidas</TableCell>
             <TableCell>Data Inicial</TableCell>
             <TableCell>Data Final</TableCell>
             <TableCell>CPF</TableCell>
             <TableCell>Opção</TableCell>
           </TableRow>
         </TableHead>

         <TableBody>
           {data.map(linha=>(
             <TableRow key={linha.id}>
               <TableCell>{linha.id}</TableCell>
               <TableCell>{linha.experiencia}</TableCell>
               <TableCell>{linha.atividades_exercidas}</TableCell>
               <TableCell>{linha.data_inicio}</TableCell>
               <TableCell>{linha.data_final}</TableCell>
               <TableCell>{linha.id_cpf}</TableCell>
               <TableCell>
                 <Edit className={styles.iconos} onClick={()=>selecionarLinha(linha, 'Editar')}/>
                 &nbsp;&nbsp;&nbsp;
                 <Delete  className={styles.iconos} onClick={()=>selecionarLinha(linha, 'Excluir')}/>
                 </TableCell>
             </TableRow>
           ))}
         </TableBody>
       </Table>
     </TableContainer>

     <Modal
     open={modalEditar}
     onClose={abrirFecharModalEditar}>
        {bodyEditar}
     </Modal>

     <Modal
     open={modalEliminar}
     onClose={abrirFecharModalEliminar}>
        {bodyEliminar}
     </Modal>
    </div>
  );
}
