import React, { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import Axios from 'axios';
import Typography from '../body/typography';

export default function DataTable() {
  const [rows, setRows] = useState([]);
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'curso', headerName: 'Tipo de Curso', width: 200 },
    { field: 'instituicao', headerName: 'Instituição', width: 170 },
    { field: 'conclusao', headerName: 'Data Conclusão', width: 150 },
    { field: 'situacao', headerName: 'Situação', width: 150},
    { field: 'id_cpf', headerName: 'CPF', type: 'number', width: 150},
  ];

  useEffect(() => {
    Axios.get("http://localhost:3001/api/tableSchool").then(function(response) {
      response.data.forEach(element => {
        element.conclusao = new Date(element.conclusao)
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
        Relatório de Escolaridade e Idiomas
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