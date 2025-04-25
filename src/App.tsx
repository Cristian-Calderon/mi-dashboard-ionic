// src/App.tsx
import React from 'react';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { Route, Redirect } from 'react-router-dom';
import NegocioPage from './pages/NegocioPage';
import TecnicoPage from './pages/TecnicoPage';
import KpiPage from './pages/KpiPage';
import { business, build, statsChart } from 'ionicons/icons';

const App: React.FC = () => (
  <IonTabs>
    {/* Donde se renderizan las rutas */}
    <IonRouterOutlet>
      <Route exact path="/negocio" component={NegocioPage} />
      <Route exact path="/tecnico" component={TecnicoPage} />
      <Route exact path="/kpi" component={KpiPage} />
      {/* Redirige la raíz al primer tab */}
      <Route exact path="/" render={() => <Redirect to="/negocio" />} />
    </IonRouterOutlet>

    {/* Tab Bar en el footer */}
    <IonTabBar slot="bottom">
      <IonTabButton tab="negocio" href="/negocio">
        <IonIcon icon={business} />
        <IonLabel>Negocio</IonLabel>
      </IonTabButton>

      <IonTabButton tab="tecnico" href="/tecnico">
        <IonIcon icon={build} />
        <IonLabel>Técnico</IonLabel>
      </IonTabButton>

      <IonTabButton tab="kpi" href="/kpi">
        <IonIcon icon={statsChart} />
        <IonLabel>KPI</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
);

export default App;
