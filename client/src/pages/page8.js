import React from 'react';
import School from '../components/school/school';
import Header from '../components/header/navBar';
import BodyCurriculum from '../components/body/bodyCurriculum';
import Footer from '../components/footer/footer';

function Page2() {  
  return (
  <>
    <Header/>
    <BodyCurriculum/>
    <School/>
    <Footer/>
  </>  
  );
}

export default Page2;