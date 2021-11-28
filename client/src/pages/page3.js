import React from 'react';
import TableCurriculum from '../components/table/tableCurriculum';
import TableSchool from '../components/table/tableSchool';
import Header from '../components/header/navBar';
import Footer from '../components/footer/footer';

function Page3() {  
  return (
  <>
    <Header/>
    <TableCurriculum/>
    <TableSchool/>
    <Footer/>
  </>  
  );
}

export default Page3;