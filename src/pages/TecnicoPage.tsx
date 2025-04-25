import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';

const TecnicoPage: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Técnico</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      {/* Aquí irá el contenido y componentes específicos de la página de Técnico */}
    </IonContent>
  </IonPage>
);

export default TecnicoPage;