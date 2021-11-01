import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Form from './pages/form';
import MyForm from './pages/login';
import "./App.css";

function App() {  
  return (
    <Router>
    <div className="App">
      <Route path ="./api/insert">
      < Form />
      </Route>
      <Route path ="./api/select">
      <MyForm />
      </Route>      
    </div>
    </Router>
  );
}

export default App;

