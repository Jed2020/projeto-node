import React from 'react';
import TableCurriculum from '../components/table/tableCurriculum';
import TableSchool from '../components/table/tableSchool';
import Header from '../components/header/headerCurriculum';
import "../components/form.css";

function Page3() {  
  return (
  <>
    <Header/>
    <TableCurriculum/>
    <TableSchool/>
  </>  
  );
}

export default Page3;