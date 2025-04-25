import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';

const NegocioPage: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Negocio</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      {/* Aquí irá el contenido y componentes específicos de la página de Negocio */}
    </IonContent>
  </IonPage>
);

export default NegocioPage;