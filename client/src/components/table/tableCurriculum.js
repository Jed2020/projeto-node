import React, { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import Axios from 'axios';
import Typography from '../body/typography';

export default function DataTable() {
  const [rows, setRows] = useState([]);
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'experiencia', headerName: 'Experiencia', width: 200},
    { field: 'atividades_exercidas', headerName: 'Atividades Exercidas', width: 170 },
    { field: 'data_inicio', headerName: 'Data Inicio', width: 150 },
    { field: 'data_final', headerName: 'Data Final', width: 150},
    { field: 'id_cpf', headerName: 'CPF', type: 'number', width: 150},
  ];

  useEffect(() => {
    Axios.get("http://localhost:3001/api/tableCurriculum").then(function(response) {
      response.data.forEach(element => {
        element.data_inicio = new Date(element.data_inicio)
        element.data_final = new Date(element.data_final)
      });

      setRows(response.data);
    });
  }, []);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <Typography 
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Relatório de Habilidades
      </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}