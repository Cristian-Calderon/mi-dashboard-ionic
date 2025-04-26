// src/pages/TecnicoPage.tsx
import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonMenuButton,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';
import './TecnicoPage.module.css';

const TecnicoPage: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton color="primary" />
        </IonButtons>
        <IonTitle>📈 Técnico</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent className="ion-padding">
      <IonGrid className="dashboard-grid">
        {/* Fila 1: 3 columnas */}
        <IonRow className="row-1">
          <IonCol size="12" size-lg="4"><div className="box">Columna 1</div></IonCol>
          <IonCol size="6" size-lg="4"><div className="box">Columna 2</div></IonCol>
          <IonCol size="6" size-lg="4"><div className="box">Columna 3</div></IonCol>
        </IonRow>

        {/* Fila 2: invertir orden en desktop */}
        <IonRow className="row-2">
          <IonCol size="12" size-lg="3" order-lg="2"><div className="box">Columna Pequeña</div></IonCol>
          <IonCol size="12" size-lg="9" order-lg="1"><div className="box">Columna Grande</div></IonCol>
        </IonRow>

        {/* Fila 3: 3 columnas con proporciones 4.5, 4.5, 3 */}
        <IonRow className="row-3">
          <IonCol size="12" size-lg="4.5"><div className="box">Columna A</div></IonCol>
          <IonCol size="12" size-lg="4.5"><div className="box">Columna B</div></IonCol>
          <IonCol size="12" size-lg="3"><div className="box">Columna C</div></IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonPage>
);

export default TecnicoPage;
