import React from 'react';
import {BrowserRouter, Switch ,Route} from 'react-router-dom';
import { Home, ErrorPage } from "./pages/index";

import LoginPage from "./pages/LoginPage";
import TestAuth0 from "./pages/TestAuth0";

import AuthWrapper from "./pages/AuthWrapper";
// CSS
import "./css/style.css";

function App() {

  return (
    <AuthWrapper>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/testauth0" component={TestAuth0} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="*" component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    </AuthWrapper>
  );
}

export default App;
