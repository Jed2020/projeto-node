import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import Form from './pages/form';
import MyForm from './pages/login';
import "./App.css";

function App() {  
  return (
    <Router>
    <div className="App">
      <Route>
      <Link to="./api/insert">< Form /></Link>
      </Route>
      <Route>
      <Link to="./api/select"><MyForm /></Link>
      </Route>      
    </div>
    </Router>
  );
}

export default App;

