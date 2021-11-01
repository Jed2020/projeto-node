import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PaginaPrincipal from "./pages/paginainicial";


function Routes() {  
  return (
    <Router>
      <Switch>
      <Route component={PaginaPrincipal} exact path="/">
      </Route>
      </Switch>      
    </Router>
  );
}

export default Routes;