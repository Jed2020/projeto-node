import React from 'react';
import Curriculum from '../components/curriculum/curriculum';
import School from '../components/school/school';
import Header from '../components/header/headerCurriculum';
import BodyCurriculum from '../components/body/bodyCurriculum';

function Page2() {  
  return (
  <>
    <Header/>
    <BodyCurriculum/>
    <Curriculum/>
    <School/>
  </>  
  );
}

export default Page2;