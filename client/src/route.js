import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Main from "./pages/main";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Page4 from "./pages/page4";
import Page5 from "./pages/page5";
import Page6 from "./pages/page6";


function Routes() {  
  return (
    <Router>
      <Switch>
      <Route component={Main} exact path="/">
      </Route>
      <Route component={Page1} exact path="/inicial">
      </Route>
      <Route component={Page2} exact path="/curriculum">
      </Route>
      <Route component={Page3} exact path="/table">
      </Route>
      <Route component={Page4} exact path="/editableCurriculum">
      </Route>
      <Route component={Page5} exact path="/editableSchool">
      </Route>
      <Route component={Page6} exact path="/editableUser">
      </Route>
      </Switch>      
    </Router>
  );
}

export default Routes;