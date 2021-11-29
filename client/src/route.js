import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Main from "./pages/main";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Page4 from "./pages/page4";
import Page5 from "./pages/page5";
import Page6 from "./pages/page6";
import Page7 from "./pages/page7";
import Page8 from "./pages/page8";
import PageNotFound from "./pages/pageNotFound";

function Routes() {  
  return (
    <Router>
      <Switch>
      <Route component={Main} exact path="/"/>      
      <Route component={Page1} exact path="/inicial"/>      
      <Route component={Page2} exact path="/curriculum"/>
      <Route component={Page3} exact path="/table"/>
      <Route component={Page4} exact path="/editableCurriculum"/>
      <Route component={Page5} exact path="/editableSchool"/>
      <Route component={Page6} exact path="/editableUser"/>]
      <Route component={Page7} exact path="/login"/>]
      <Route component={Page8} exact path="/school"/>]
      <Route path="*" exact component={PageNotFound}/>
      </Switch>      
    </Router>
  );
}

export default Routes;