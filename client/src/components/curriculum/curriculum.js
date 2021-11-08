import React from "react";
import{
    Button,
} from "@material-ui/core";

import "../form.css";


function Curriculum() {
    
    const submitReview = () => {
        
          alert('Cadastro realizado com Sucesso!')
        
      };
    
  
    return (
      <div className="form">
        <h1>Cadastre suas Habilidades</h1>
        <form onSubmit={(event) => {
          event.preventDefault();
        }}>
          <Button onClick={submitReview} className="btn-form" variant="contained" color="primary">
            Cadastrar
          </Button>
        </form>  
      </div>
    );
  }
  
  export default Curriculum;