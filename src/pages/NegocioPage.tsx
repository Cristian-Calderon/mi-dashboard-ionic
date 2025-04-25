import { 
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonGrid, IonRow, IonCol 
} from '@ionic/react';
import React from 'react';
import './NegocioPage.css';  // asegúrate de crear este CSS

const NegocioPage: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>🚀 Negocio</IonTitle>
      </IonToolbar>
    </IonHeader>
    
    <IonContent className="ion-padding">
      <IonGrid className="dashboard-grid">
        {/* Fila 1: 4 cajas */}
        <IonRow className="row-1">
          <IonCol size="6" size-lg="3"><div className="box">Columna 1</div></IonCol>
          <IonCol size="6" size-lg="3"><div className="box">Columna 2</div></IonCol>
          <IonCol size="6" size-lg="3"><div className="box">Columna 3</div></IonCol>
          <IonCol size="6" size-lg="3"><div className="box">Columna 4</div></IonCol>
        </IonRow>
        {/* Fila 2: 1+1 cajas */}
        <IonRow className="row-2">
          <IonCol size="12" size-lg="9"><div className="box">Columna Grande</div></IonCol>
          <IonCol size="12" size-lg="3"><div className="box">Columna Pequeña</div></IonCol>
        </IonRow>
        {/* Fila 3: 2 cajas */}
        <IonRow className="row-3">
          <IonCol size="12" size-lg="6"><div className="box">Columna 1</div></IonCol>
          <IonCol size="12" size-lg="6"><div className="box">Columna 2</div></IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonPage>
);

export default NegocioPage;