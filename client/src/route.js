import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Main from "./pages/main";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Page4 from "./components/table/editableCurriculum";


function Routes() {  
  return (
    <Router>
      <Switch>
      <Route component={Main} exact path="/">
      </Route>
      <Route component={Page2} exact path="/curriculum">
      </Route>
      <Route component={Page3} exact path="/table">
      </Route>
      <Route component={Page4} exact path="/editableCurriculum">
      </Route>
      </Switch>      
    </Router>
  );
}

export default Routes;