import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './Keycloak';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <ReactKeycloakProvider
            authClient={keycloak}
            initOptions={{ onLoad: 'login-required', pkceMethod: 'S256' }}
        >
            <App />
        </ReactKeycloakProvider>
    </React.StrictMode>
);
