import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Modal, Button, TextField } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';
import { api } from "../../utils/api";
import Typography from '../body/typography';


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
  iconos: {
    cursor: 'pointer'
  },
  inputMaterial: {
    width: '100%'
  }
}));



export default function EditableCurriculum() {

  const styles = useStyles();
  const [data, setData] = useState([]);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);

  const [idSelecionado, setIdSelecionado] = useState({

    id: '',
    curso: '',
    instituicao: '',
    conclusao: '',
    situacao: '',
    id_cpf: '',
    nome: ''
  })

  const handleChange = e => {
    const { name, value } = e.target;
    setIdSelecionado(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const metodoGet = async () => {
    await api.get("/api/editableSchool")
      .then(response => {
        setData(response.data);
      }).catch(error => {
        console.log(error);
      })
  }


  const metodoPut = async () => {
    await api.put("/api/editableSchool/" + idSelecionado.id, idSelecionado)
      .then(response => {
        var dataNew = data;
        dataNew.forEach(linha => {
          if (idSelecionado.id === linha.id) {
            linha.curso = idSelecionado.curso;
            linha.instituicao = idSelecionado.instituicao;
            linha.conclusao = idSelecionado.conclusao;
            linha.situacao = idSelecionado.situacao;
            linha.id_cpf = idSelecionado.id_cpf;
            linha.nome = idSelecionado.nome;
          }
        });
        setData(dataNew);
        abrirFecharModalEditar();
      }).catch(error => {
        console.log(error);
      })
  }

  const metodoDelete = async () => {
    await api.delete("/api/editableSchool/" + idSelecionado.id)
      .then(response => {
        setData(data.filter(linha => linha.id !== idSelecionado.id));
        abrirFecharModalEliminar();
      }).catch(error => {
        console.log(error);
      })
  }

  const selecionarLinha = (linha, caso) => {
    setIdSelecionado({
      id: linha.id,
      curso: linha.curso,
      instituicao: linha.instituicao,
      conclusao: linha.conclusao.substring(0, 10),
      situacao: linha.situacao,
      id_cpf: linha.id_cpf,
      nome: linha.nome,
    }

    );
    (caso === "Editar") ? abrirFecharModalEditar() : abrirFecharModalEliminar()
  }


  const abrirFecharModalEditar = () => {
    setModalEditar(!modalEditar);
  }

  const abrirFecharModalEliminar = () => {
    setModalEliminar(!modalEliminar);
  }

  useEffect(() => {
    metodoGet();
  }, [])

  const bodyEditar = (
    <div className={styles.modal}>
      <h3>Editar Escolaridade e Idiomas</h3>
      <TextField className={styles.inputMaterial} label="ID" name="id" onChange={handleChange} value={idSelecionado && idSelecionado.id} />
      <br />
      <TextField className={styles.inputMaterial} label="Curso" name="curso" onChange={handleChange} value={idSelecionado && idSelecionado.curso} />
      <br />
      <TextField className={styles.inputMaterial} label="Instituição" name="instituicao" onChange={handleChange} value={idSelecionado && idSelecionado.instituicao} />
      <br />
      <TextField className={styles.inputMaterial} label="Data Conclusão" name="conclusao" onChange={handleChange} value={idSelecionado && idSelecionado.conclusao} />
      <br />
      <TextField className={styles.inputMaterial} label="Situação" name="situacao" onChange={handleChange} value={idSelecionado && idSelecionado.situacao} />
      <br />
      <TextField className={styles.inputMaterial} label="Nome" name="nome" onChange={handleChange} value={idSelecionado && idSelecionado.nome} />
      <br /><br />
      <div align="right">
        <Button color="primary" onClick={() => metodoPut()}>Editar</Button>
        <Button onClick={() => abrirFecharModalEditar()}>Cancelar</Button>
      </div>
    </div>
  )

  const bodyEliminar = (
    <div className={styles.modal}>
      <p>Tem certeza que deseja excluir essa linha? <b>{idSelecionado && idSelecionado.id}</b> ? </p>
      <div align="right">
        <Button color="secondary" onClick={() => metodoDelete()}>Sim</Button>
        <Button onClick={() => abrirFecharModalEliminar()}>Não</Button>

      </div>

    </div>
  )

  return (
    <div className="App">
      <br />
      <Typography 
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Edição e Exclusão de Escolaridade e Idiomas
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Curso</TableCell>
              <TableCell>Instituição</TableCell>
              <TableCell>Data Conclusão</TableCell>
              <TableCell>Situação</TableCell>
              <TableCell>CPF</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Opção</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map(linha => (
              <TableRow key={linha.id}>
                <TableCell>{linha.id}</TableCell>
                <TableCell>{linha.curso}</TableCell>
                <TableCell>{linha.instituicao}</TableCell>
                <TableCell>{linha.conclusao.substring(0, 10)}</TableCell>
                <TableCell>{linha.situacao}</TableCell>
                <TableCell>{linha.id_cpf}</TableCell>
                <TableCell>{linha.nome}</TableCell>
                <TableCell>
                  <Edit className={styles.iconos} onClick={() => selecionarLinha(linha, 'Editar')} />
                  &nbsp;&nbsp;&nbsp;
                  <Delete className={styles.iconos} onClick={() => selecionarLinha(linha, 'Excluir')} />
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
