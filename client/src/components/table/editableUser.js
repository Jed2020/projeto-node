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

    cpf: '',
    nome: '',
    cargo: '',
    email: ''
  })

  const handleChange = e => {
    const { name, value } = e.target;
    setIdSelecionado(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const metodoGet = async () => {
    await api.get("/api/editableUser")
      .then(response => {
        setData(response.data);
      }).catch(error => {
        console.log(error);
      })
  }


  const metodoPut = async () => {
    await api.put("/api/editableUser/" + idSelecionado.cpf, idSelecionado)
      .then(response => {
        var dataNew = data;
        dataNew.forEach(linha => {
          if (idSelecionado.cpf === linha.cpf) {
            linha.cpf = idSelecionado.cpf;
            linha.nome = idSelecionado.nome;
            linha.cargo = idSelecionado.cargo;
            linha.email = idSelecionado.email;
          }
        });
        setData(dataNew);
        abrirFecharModalEditar();
      }).catch(error => {
        console.log(error);
      })
  }

  const metodoDelete = async () => {
    await api.delete("/api/editableUser/" + idSelecionado.cpf)
      .then(response => {
        setData(data.filter(linha => linha.cpf !== idSelecionado.cpf));
        abrirFecharModalEliminar();
      }).catch(error => {
        console.log(error);
      })
  }

  const selecionarLinha = (linha, caso) => {
    setIdSelecionado({
      cpf: linha.cpf,
      nome: linha.nome,
      cargo: linha.cargo,
      email: linha.email,
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
      <h3>Editar Cadastro</h3>
      <TextField className={styles.inputMaterial} label="Cpf" name="cpf" onChange={handleChange} value={idSelecionado && idSelecionado.cpf} />
      <br />
      <TextField className={styles.inputMaterial} label="Nome" name="nome" onChange={handleChange} value={idSelecionado && idSelecionado.nome} />
      <br />
      <TextField className={styles.inputMaterial} label="Cargo" name="cargo" onChange={handleChange} value={idSelecionado && idSelecionado.cargo} />
      <br />
      <TextField className={styles.inputMaterial} label="Email" name="email" onChange={handleChange} value={idSelecionado && idSelecionado.email} />
      <br /><br />
      <div align="right">
        <Button color="primary" onClick={() => metodoPut()}>Editar</Button>
        <Button onClick={() => abrirFecharModalEditar()}>Cancelar</Button>
      </div>
    </div>
  )

  const bodyEliminar = (
    <div className={styles.modal}>
      <p>Tem certeza que deseja excluir essa linha? <b>{idSelecionado && idSelecionado.cpf}</b> ? </p>
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
        Edição de Cadastro Pessoal
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>CPF</TableCell>
              <TableCell>NOME</TableCell>
              <TableCell>CARGO</TableCell>
              <TableCell>EMAIL</TableCell>
              <TableCell>Opção</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map(linha => (
              <TableRow key={linha.cpf}>
                <TableCell>{linha.cpf}</TableCell>
                <TableCell>{linha.nome}</TableCell>
                <TableCell>{linha.cargo}</TableCell>
                <TableCell>{linha.email}</TableCell>
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
