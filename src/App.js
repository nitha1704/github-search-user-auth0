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
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/testauth0">
            <TestAuth0 />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthWrapper>
  );
}

export default App;
