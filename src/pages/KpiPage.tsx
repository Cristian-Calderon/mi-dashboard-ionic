import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonAccordionGroup,
  IonAccordion,
  IonItem,
  IonLabel
} from '@ionic/react';
import './KpiPage.css';

const KpiPage: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton color="primary" />
        </IonButtons>
        <IonTitle>🎯 KPIs</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent className="ion-padding">
      <h1 className="section-title">🚀 KPIs de Negocio</h1>
      <IonAccordionGroup multiple={true} className="accordion-group">
        {[1,2,3,4,5].map(i => (
          <IonAccordion key={i} value={String(i)}>
            <IonItem slot="header">
              <IonLabel>{i} Accordion</IonLabel>
            </IonItem>
            <div slot="content" className="ion-padding">
              {i} Content
            </div>
          </IonAccordion>
        ))}
      </IonAccordionGroup>

      <h1 className="section-title">📈 KPIs Técnicos</h1>
      <IonAccordionGroup multiple={true} className="accordion-group">
        {[1,2,3,4,5].map(i => (
          <IonAccordion key={i} value={String(i)}>
            <IonItem slot="header">
              <IonLabel>{i} Accordion</IonLabel>
            </IonItem>
            <div slot="content" className="ion-padding">
              {i} Content
            </div>
          </IonAccordion>
        ))}
      </IonAccordionGroup>
    </IonContent>
  </IonPage>
);

export default KpiPage;
