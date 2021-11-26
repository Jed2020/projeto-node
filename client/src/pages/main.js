import React from 'react';
import Header from '../components/header/header';
import Body from '../components/body/body';
import Register from '../components/register/register';
import Login from '../components/login/login';



function Main() {  
  return (
  <>
    <Header/>
    <Body/>
    <Register/>
    <Login/> 
  </>  
  );
}

export default Main;