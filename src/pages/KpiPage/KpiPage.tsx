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
    title: 'Incrementar CLICKS en el sitio web',
    description: 'Incrementar el número de clics en un 50% (de 800 a 1200) en los siguientes 30 días, optimizando la estrategia de contenido y llamados a la acción, para aumentar el tráfico general del sitio de cara al nuevo lanzamiento.',
    smart: [
      { letter: 'S', content: 'Incrementar el número de clics en el sitio web en un 50%' },
      { letter: 'M', content: 'De 800 a 1200 clics' },
      { letter: 'A', content: 'optimizando la estrategia de contenido y llamados a la acción' },
      { letter: 'R', content: 'para aumentar el tráfico y preparar el lanzamiento del nuevo producto' },
      { letter: 'T', content: 'en los próximos 30 días' }
    ]
  },
  {
    id: 2,
    title: 'Incrementar VIEWS de productos',
    description: 'Incrementar las visualizaciones de productos en un 20% (de 1,500 a 1,800) en los próximos 12 meses, optimizando la estrategia de marketing digital para impulsar las ventas futuras.',
    smart: [
      { letter: 'S', content: 'Incrementar las visualizaciones de productos en un 20%' },
      { letter: 'M', content: 'De 1,500 a 1,800 views' },
      { letter: 'A', content: 'optimizando la estrategia de marketing digital y campañas promocionales' },
      { letter: 'R', content: 'para impulsar ventas futuras y mejorar el posicionamiento de productos' },
      { letter: 'T', content: 'durante los próximos 12 meses' }
    ]
  },
  {
    id: 3,
    title: 'Incrementar generación de LEADS',
    description: 'Incrementar el número de leads calificados en un 30% (de 1,500 a 2,000) para finales del primer trimestre del próximo año, mediante campañas de marketing digital enfocadas en contenido de valor.',
    smart: [
      { letter: 'S', content: 'Incrementar el número de leads calificados en un 30%' },
      { letter: 'M', content: 'De 1,500 a 2,000 leads' },
      { letter: 'A', content: 'lanzando campañas de marketing digital y estrategias de contenido' },
      { letter: 'R', content: 'para aumentar la base de clientes potenciales y oportunidades de venta' },
      { letter: 'T', content: 'para finales del primer trimestre del próximo año' }
    ]
  }
  ,
  {
    id: 4,
    title: 'Incrementar ingresos por ventas',
    description: 'Incrementar los ingresos por ventas en un 25% (de 500k€ a 625k€) en los próximos 6 meses, mediante la optimización de estrategias de upselling y cross-selling en la tienda online.',
    smart: [
      { letter: 'S', content: 'Incrementar los ingresos por ventas en un 25%' },
      { letter: 'M', content: 'De 500k€ a 625k€' },
      { letter: 'A', content: 'optimizando estrategias de upselling y cross-selling' },
      { letter: 'R', content: 'para maximizar el valor de compra promedio de los clientes' },
      { letter: 'T', content: 'en los próximos 6 meses' }
    ]
  },
  {
    id: 5,
    title: 'Aumentar el tráfico mensual del sitio web',
    description: 'Incrementar el tráfico mensual del sitio web en un 40% (de 300 visitas promedio a 420) en los próximos 6 meses, implementando campañas de SEO y estrategias de contenido orgánico.',
    smart: [
      { letter: 'S', content: 'Incrementar el tráfico mensual del sitio web en un 40%' },
      { letter: 'M', content: 'De 300 a 420 visitas promedio por mes' },
      { letter: 'A', content: 'implementando campañas de SEO y contenido orgánico' },
      { letter: 'R', content: 'para fortalecer la presencia en buscadores y aumentar la captación de leads' },
      { letter: 'T', content: 'durante los próximos 6 meses' }
    ]
  },
  {
    id: 6,
    title: 'Incrementar tasa de conversiones',
    description: 'Incrementar la tasa de conversiones del sitio web del 60% al 75% en los próximos 4 meses, mediante la optimización del embudo de ventas y mejoras en la experiencia de usuario.',
    smart: [
      { letter: 'S', content: 'Incrementar la tasa de conversiones del 60% al 75%' },
      { letter: 'M', content: 'Subir la tasa de conversiones en un 15%' },
      { letter: 'A', content: 'optimizando el embudo de ventas y mejorando la experiencia de usuario' },
      { letter: 'R', content: 'para aumentar la cantidad de clientes finales y ventas cerradas' },
      { letter: 'T', content: 'en un plazo de 4 meses' }
    ]
  },
  {
    id: 7,
    title: 'Alcanzar el 100% de objetivos de adquisición de usuarios',
    description: 'Lograr el 100% del objetivo de adquisición de nuevos usuarios para el trimestre, pasando del 75% actual al 100% en los próximos 30 días, a través de campañas promocionales y mejoras en el proceso de registro.',
    smart: [
      { letter: 'S', content: 'Alcanzar el 100% de adquisición de nuevos usuarios este trimestre' },
      { letter: 'M', content: 'Actualmente al 75%, objetivo: 100%' },
      { letter: 'A', content: 'mediante campañas promocionales y optimización del registro' },
      { letter: 'R', content: 'para expandir la base de usuarios activos de la aplicación' },
      { letter: 'T', content: 'en los próximos 30 días' }
    ]
  },
  {
    id: 8,
    title: 'Mejorar el desempeño interdepartamental',
    description: 'Incrementar el rendimiento general de las áreas clave del negocio en al menos un 20% respecto al mes anterior, midiendo avances mensuales en ventas, marketing, soporte, desarrollo, diseño y operaciones.',
    smart: [
      { letter: 'S', content: 'Mejorar el rendimiento general de las áreas clave en un 20%' },
      { letter: 'M', content: 'Comparando métricas entre el mes actual y el anterior' },
      { letter: 'A', content: 'optimizando procesos internos y mejorando la colaboración entre equipos' },
      { letter: 'R', content: 'para incrementar la eficiencia global y la satisfacción del cliente' },
      { letter: 'T', content: 'en el transcurso del próximo mes' }
    ]
  },
  {
    id: 9,
    title: 'Aumentar la participación de productos digitales de alto valor',
    description: 'Incrementar la participación en ventas de productos digitales de alto valor (como cursos premium y consultorías), elevando su cuota combinada al 60% del total de ingresos en los próximos 2 meses.',
    smart: [
      { letter: 'S', content: 'Incrementar la participación de cursos premium y consultorías al 60% del total' },
      { letter: 'M', content: 'Actualmente representan aproximadamente 50% (16 + 14 de 48)' },
      { letter: 'A', content: 'reforzando campañas dirigidas y destacando su valor en la web' },
      { letter: 'R', content: 'para maximizar ingresos con productos de mayor margen' },
      { letter: 'T', content: 'en los próximos 2 meses' }
    ]
  }];

const technicalSmartGoals: SmartGoal[] = [
  {
    id: 1,
    title: 'Reducir el tiempo de respuesta de la API',
    description: 'Reducir el tiempo medio de respuesta de la API a menos de 200 ms en los próximos 3 meses, mediante optimización de endpoints y uso de caché.',
    smart: [
      { letter: 'S', content: 'Reducir el tiempo medio de respuesta a menos de 200 ms' },
      { letter: 'M', content: 'Medir respuesta promedio en ms' },
      { letter: 'A', content: 'optimizando endpoints críticos y aplicando caching' },
      { letter: 'R', content: 'para mejorar el rendimiento de la aplicación y la experiencia de usuario' },
      { letter: 'T', content: 'en los próximos 3 meses' }
    ]
  },
  // Agregar más aquí...
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
        {technicalSmartGoals.map(item => (
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
