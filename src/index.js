import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider  } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain='dev-tosusjo4.us.auth0.com'
    clientId='dvg9buS9yisFHBvdVAWnK5YiulrbaHX7'
    redirectUri={window.location.origin}
  >
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Auth0Provider>
);
