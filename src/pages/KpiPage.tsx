// src/pages/KpiPage.tsx
import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';

const KpiPage: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>KPI</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      {/* Aquí irá el dashboard de KPIs, gráficos y métricas */}
    </IonContent>
  </IonPage>
);

export default KpiPage; 