import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalContext} from './context/globalContext';
import {Auth0Provider} from '@auth0/auth0-react';

ReactDOM.render(
  <Auth0Provider
    domain="dev-a0bvjot6.us.auth0.com"
    clientId="8EWLp5y0KoIrfZ9Era0KPK9LksmxQol5"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <GlobalContext>
      <App />
    </GlobalContext>
  </Auth0Provider>,
  document.getElementById("root")
);
