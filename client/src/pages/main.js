import React from 'react';
import Header from '../components/header/header';
import Body from '../components/body/body';
import Register from '../components/register/register';
import Login from '../components/login/login';
import Footer from '../components/footer/footer';



function Main() {  
  return (
  <>
    <Header/>
    <Body/>
    <Register/>
    <Login/> 
    <Footer/>
  </>  
  );
}

export default Main;