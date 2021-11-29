import React from 'react';
import Curriculum from '../components/curriculum/curriculum';
import Header from '../components/header/navBar';
import BodyCurriculum from '../components/body/bodyCurriculum';
import Footer from '../components/footer/footer';

function Page2() {  
  return (
  <>
    <Header/>
    <BodyCurriculum/>
    <Curriculum/>
    <Footer/>
  </>  
  );
}

export default Page2;