import React from 'react';
import Curriculum from '../components/curriculum/curriculum';
import Schooling from '../components/schooling/schooling';
import Header from '../components/header/headerCurriculum';
import "../components/form.css";

function Page2() {  
  return (
  <>
    <Header/>
    <Curriculum/>
    <Schooling/>
  </>  
  );
}

export default Page2;