// src/pages/KpiPage/KpiPage.tsx
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
  IonLabel,
  IonList
} from '@ionic/react';
import styles from './KpiPage.module.css';

// Definición de la estructura de datos para un objetivo SMART
type SmartElement = {
  letter: string;
  content: string;
};

type SmartGoal = {
  id: number;
  title: string;
  description: string;
  smart: SmartElement[];
};

// Array de objetivos SMART
const smartGoals: SmartGoal[] = [
  {
    id: 1,
    title: 'Aumentar visitas',
    description: 'Aumentar las visitas de nuestro sitio web en un 50% (de 1000 a 1500) en los siguientes 30 días, al duplicar la distribución de contenido y con el fin de prepararnos para el lanzamiento de nuestro nuevo producto',
    smart: [
      { letter: 'S', content: 'Aumentar las visitas de nuestro sitio web en un 50%' },
      { letter: 'M', content: '50% (de 1,000 a 1,500)' },
      { letter: 'A', content: 'duplicando la distribución de contenido' },
      { letter: 'R', content: 'para prepararnos para el lanzamiento de nuestro nuevo producto.' },
      { letter: 'T', content: 'en los siguientes 30 días' }
    ]
  },
  {
    id: 2,
    title: 'Aumentar ventas',
    description: 'Aumentar las ventas en un 20% (de $200,000 a $240,000) en los próximos 12 meses, ofreciendo nuestros nuevos productos a los clientes existentes.',
    smart: [
      { letter: 'S', content: 'Aumentar las ventas en un 20%' },
      { letter: 'M', content: '20% (de $200,000 a $240,000)' },
      { letter: 'A', content: 'ofreciendo nuestros nuevos productos a los clientes existentes' },
      { letter: 'R', content: '(retención de clientes y aumentar ventas)' },
      { letter: 'T', content: 'próximos 12 meses' }
    ]
  },
  {
    id: 3,
    title: 'Ampliar equipo de marketing',
    description: 'Ampliar el equipo de marketing en un 10% (de 100 a 110 empleados) para finales del primer trimestre del próximo año, al contratar 3 empleados cada 3 meses para completar el equipo de creación de contenido.',
    smart: [
      { letter: 'S', content: 'Ampliar el equipo de marketing en un 10%' },
      { letter: 'M', content: '10% (de 100 a 110 empleados)' },
      { letter: 'A', content: 'contratando a 3 empleados cada 3 meses' },
      { letter: 'R', content: 'para completar el equipo de creación de contenido' },
      { letter: 'T', content: 'para finales del primer trimestre del próximo año' }
    ]
  },
  {
    id: 4,
    title: 'Alianzas estratégicas',
    description: 'Crear 10 alianzas estratégicas en el próximo bienio por medio de la organización de foros, y así obtener más exposición de marca y mejorar la red de proveedores.',
    smart: [
      { letter: 'S', content: 'Crear alianzas estratégicas' },
      { letter: 'M', content: '10 alianzas estratégicas' },
      { letter: 'A', content: 'por medio de la organización de foros' },
      { letter: 'R', content: 'obtener más exposición de marca y mejorar la red de proveedores' },
      { letter: 'T', content: 'en 2 años' }
    ]
  },
  {
    id: 5,
    title: 'Leads calificados',
    description: 'Aumentar la cantidad de leads calificados de 300 a 3000 en un período de 6 meses con la creación de 5 nuevas ofertas de contenido.',
    smart: [
      { letter: 'S', content: 'Aumentar la cantidad de leads calificados' },
      { letter: 'M', content: 'de 300 a 3000' },
      { letter: 'A', content: 'con la creación de 5 nuevas ofertas de contenido' },
      { letter: 'R', content: '(aumentar las posibilidades de venta)' },
      { letter: 'T', content: 'en un período de 6 meses' }
    ]
  }
];

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
      <h1 className={styles.sectionTitle}>🚀 KPIs de Negocio</h1> {/* Cambio aquí */}
      <IonAccordionGroup multiple>
        {smartGoals.map(item => (
          <IonAccordion key={item.id} value={item.id.toString()}>
            <IonItem slot="header">
              <IonLabel>{item.id}. {item.title}</IonLabel>
            </IonItem>
            <div slot="content" className="ion-padding">
              <p>{item.description}</p>
              <IonList inset>
                {item.smart.map((el, idx) => (
                  <IonItem key={idx}>
                    <IonLabel><strong>{el.letter}</strong> → {el.content}</IonLabel>
                  </IonItem>
                ))}
              </IonList>
            </div>
          </IonAccordion>
        ))}
      </IonAccordionGroup>

      <h1 className={styles.sectionTitle}>📈 KPIs Técnicos</h1> {/* Cambio aquí */}
      <IonAccordionGroup multiple>
        {smartGoals.map(item => (
          <IonAccordion key={item.id} value={item.id.toString()}>
            <IonItem slot="header">
              <IonLabel>{item.id}. {item.title}</IonLabel>
            </IonItem>
            <div slot="content" className="ion-padding">
              <p>{item.description}</p>
              <IonList inset>
                {item.smart.map((el, idx) => (
                  <IonItem key={idx}>
                    <IonLabel><strong>{el.letter}</strong> → {el.content}</IonLabel>
                  </IonItem>
                ))}
              </IonList>
            </div>
          </IonAccordion>
        ))}
      </IonAccordionGroup>
    </IonContent>
  </IonPage>
);

export default KpiPage;
