import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Main from "./pages/main";
import Page2 from "./pages/page2";


function Routes() {  
  return (
    <Router>
      <Switch>
      <Route component={Main} exact path="/">
      </Route>
      <Route component={Page2} exact path="/curriculum">
      </Route>
      </Switch>      
    </Router>
  );
}

export default Routes;