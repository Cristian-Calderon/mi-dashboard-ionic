import React from 'react';
import { createRoot } from 'react-dom/client';
import { IonApp, setupIonicReact, IonRouterOutlet } from '@ionic/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';              // ya incluye los imports de Ionic y variables

// Configura internamente Ionic para React
setupIonicReact();

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <IonApp>
      <BrowserRouter>
        <IonRouterOutlet>
          <App />
        </IonRouterOutlet>
      </BrowserRouter>
    </IonApp>
  </React.StrictMode>
);
