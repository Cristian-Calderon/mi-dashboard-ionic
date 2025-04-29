// src/App.tsx
import React, { useState, useEffect } from 'react';
import {
  IonApp,
  IonSplitPane,
  IonMenu,
  IonContent,
  IonList,
  IonListHeader,
  IonNote,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonLabel,
  IonRouterOutlet
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { rocketOutline, rocketSharp, pulseOutline, pulseSharp, speedometerOutline, speedometerSharp } from 'ionicons/icons';

import NegocioPage from './pages/NegocioPage/NegocioPage';
import TecnicoPage from './pages/TecnicoPage/TecnicoPage';
import KpiPage from './pages/KpiPage/KpiPage';
import './index.css';

const appPages = [
  {
    title: 'Negocio',
    url: '/negocio',
    iosIcon: rocketOutline,
    mdIcon: rocketSharp
  },
  {
    title: 'Técnico',
    url: '/tecnico',
    iosIcon: pulseOutline,
    mdIcon: pulseSharp
  },
  {
    title: 'KPIs',
    url: '/kpi',
    iosIcon: speedometerOutline,
    mdIcon: speedometerSharp
  }
];

const App: React.FC = () => {
  const location = useLocation();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const updateSelectedIndex = () => {
    const path = location.pathname;
    const idx = appPages.findIndex(p => p.url === path);
    if (idx !== -1) {
      setSelectedIndex(idx);
    }
  };

  useEffect(() => {
    updateSelectedIndex();
  }, [location]);

  return (
    <IonApp>
      <IonSplitPane contentId="main-content" style={{ '--side-max-width': '280px' } as any}>
        {/* Side Menu */}
        <IonMenu contentId="main-content" type="overlay">
          <IonContent>
            <IonList id="menu-list">
              <IonListHeader>Dashboard</IonListHeader>
              <IonNote>Data Visualization</IonNote>

              {appPages.map((p, i) => (
                <IonMenuToggle key={i} autoHide={false}>
                  <IonItem
                    routerLink={p.url}
                    routerDirection="root"
                    lines="none"
                    detail={false}
                    onClick={() => setSelectedIndex(i)}
                    className={selectedIndex === i ? 'selected' : ''}
                  >
                    <IonIcon slot="start" ios={p.iosIcon} md={p.mdIcon} />
                    <IonLabel>{p.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              ))}
            </IonList>
          </IonContent>
        </IonMenu>

        {/* Main Content */}
        <IonRouterOutlet id="main-content">
          <Route exact path="/negocio" component={NegocioPage} />
          <Route exact path="/tecnico" component={TecnicoPage} />
          <Route exact path="/kpi" component={KpiPage} />
          <Route exact path="/" render={() => <Redirect to="/negocio" />} />
        </IonRouterOutlet>
      </IonSplitPane>
    </IonApp>
  );
};

export default () => (
  <IonReactRouter>
    <App />
  </IonReactRouter>
);
