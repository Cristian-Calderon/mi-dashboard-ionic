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
    title: 'Incrementar clics en perfiles de héroes',
    description: 'Incrementar el número de clics en perfiles de héroes desde 1,000 hasta 1,250 en los próximos 30 días, mediante recomendaciones personalizadas basadas en el rendimiento reciente del jugador.',
    smart: [
      { letter: 'S', content: 'Incrementar los clics en perfiles de héroes en un 25%' },
      { letter: 'M', content: 'De 1,000 a 1,250 clics totales' },
      { letter: 'A', content: 'mediante recomendaciones personalizadas según rendimiento reciente' },
      { letter: 'R', content: 'para mejorar la exploración de estadísticas y engagement del usuario' },
      { letter: 'T', content: 'en los próximos 30 días' }
    ]
  },
  {
    id: 2,
    title: 'Aumentar visualizaciones de análisis de partidas',
    description: 'Aumentar las vistas de análisis de partidas desde 1,900 hasta 2,400 en los próximos 30 días, destacando los reportes post-juego y facilitando acceso directo desde el perfil del jugador.',
    smart: [
      { letter: 'S', content: 'Aumentar las visualizaciones de análisis de partidas en un 26%' },
      { letter: 'M', content: 'De 1,900 a 2,400 visualizaciones' },
      { letter: 'A', content: 'destacando reportes post-juego y accesos directos' },
      { letter: 'R', content: 'para ayudar al jugador a identificar errores y mejorar su rendimiento' },
      { letter: 'T', content: 'en los próximos 30 días' }
    ]
  },
  {
    id: 3,
    title: 'Incrementar usuarios con cuentas vinculadas',
    description: 'Aumentar el número de perfiles de Dota 2 vinculados a la plataforma de 2,000 a 2,600 en los próximos 45 días, incentivando el registro con análisis exclusivos y comparativas personalizadas.',
    smart: [
      { letter: 'S', content: 'Incrementar usuarios con perfiles vinculados en un 30%' },
      { letter: 'M', content: 'De 2,000 a 2,600 perfiles vinculados' },
      { letter: 'A', content: 'ofreciendo análisis exclusivos y comparativas personalizadas como incentivo' },
      { letter: 'R', content: 'para mejorar la personalización del contenido y engagement del usuario' },
      { letter: 'T', content: 'en los próximos 45 días' }
    ]
  }
  ,
  {
    id: 4,
    title: 'Incrementar ingresos por suscripciones premium',
    description: 'Aumentar los ingresos por suscripciones premium de 600k€ a 750k€ en los próximos 60 días, promoviendo funcionalidades exclusivas como análisis avanzado y comparaciones entre jugadores.',
    smart: [
      { letter: 'S', content: 'Incrementar los ingresos por suscripciones premium en un 25%' },
      { letter: 'M', content: 'De 600k€ a 750k€ en ventas' },
      { letter: 'A', content: 'promocionando funcionalidades avanzadas y análisis personalizados' },
      { letter: 'R', content: 'para mejorar la monetización y fidelización del usuario avanzado' },
      { letter: 'T', content: 'en los próximos 60 días' }
    ]
  },
  {
    id: 5,
    title: 'Incrementar visitas mensuales a la plataforma',
    description: 'Aumentar las visitas mensuales promedio a Dotabuff de 300 a 450 durante los próximos 3 meses, aprovechando los parches de balance y eventos de temporada para impulsar el tráfico orgánico.',
    smart: [
      { letter: 'S', content: 'Aumentar visitas mensuales promedio en un 50%' },
      { letter: 'M', content: 'De 300 a 450 visitas promedio por mes' },
      { letter: 'A', content: 'aprovechando actualizaciones de juego y contenido estacional' },
      { letter: 'R', content: 'para atraer más jugadores y aumentar la visibilidad del contenido' },
      { letter: 'T', content: 'en los próximos 3 meses' }
    ]
  }
  ,
  {
    id: 6,
    title: 'Alcanzar 75% de winrate con el héroe más jugado',
    description: 'Aumentar la tasa de victorias con el héroe más jugado hasta el 75% en las próximas 40 partidas, utilizando análisis post-juego y builds recomendadas por la plataforma.',
    smart: [
      { letter: 'S', content: 'Alcanzar 75% de winrate con el héroe más jugado' },
      { letter: 'M', content: 'Comparando victorias/derrotas en las últimas 40 partidas' },
      { letter: 'A', content: 'siguiendo builds recomendadas y revisando análisis post-juego' },
      { letter: 'R', content: 'para mejorar el desempeño competitivo del jugador' },
      { letter: 'T', content: 'en las próximas 40 partidas jugadas con ese héroe' }
    ]
  }
  ,
  {
    id: 7,
    title: 'Balancear el rendimiento entre Radiant y Dire',
    description: 'Reducir la diferencia de winrate entre Radiant (56%) y Dire (48%) a un margen menor al 5% durante las próximas 20 partidas, identificando patrones de juego con ayuda de los reportes post-partida.',
    smart: [
      { letter: 'S', content: 'Reducir la diferencia de winrate entre Radiant y Dire a menos del 5%' },
      { letter: 'M', content: 'Actualmente: 56% Radiant vs 48% Dire' },
      { letter: 'A', content: 'analizando partidas y ajustando estrategias según el lado del mapa' },
      { letter: 'R', content: 'para mejorar la consistencia del jugador sin importar el bando' },
      { letter: 'T', content: 'en las próximas 20 partidas' }
    ]
  }
  ,
  {
    id: 8,
    title: 'Mejorar el rendimiento integral del jugador',
    description: 'Incrementar al menos un 15% el promedio de indicadores clave como KDA, GPM y participación en kills durante este mes, en comparación con el mes anterior, mediante el análisis de estadísticas detalladas por héroe.',
    smart: [
      { letter: 'S', content: 'Mejorar en un 15% el rendimiento general del jugador' },
      { letter: 'M', content: 'KDA, GPM, XPM, winrate, last hits y participación en kills' },
      { letter: 'A', content: 'usando el radar de rendimiento y los análisis por héroe en Dotabuff' },
      { letter: 'R', content: 'para subir de MMR y fortalecer el desempeño competitivo' },
      { letter: 'T', content: 'durante el presente mes' }
    ]
  }
  ,
  {
    id: 9,
    title: 'Diversificar la experiencia en roles jugados',
    description: 'Equilibrar la distribución de roles jugados para que ningún rol represente más del 30% del total, durante las próximas 50 partidas, con el fin de fomentar versatilidad y conocimiento global del juego.',
    smart: [
      { letter: 'S', content: 'Lograr que ningún rol supere el 30% del total de partidas jugadas' },
      { letter: 'M', content: 'Analizando la distribución de roles en las últimas 50 partidas' },
      { letter: 'A', content: 'alternando intencionalmente entre carry, mid, offlane y supports' },
      { letter: 'R', content: 'para aumentar la versatilidad y comprensión del metajuego' },
      { letter: 'T', content: 'durante las próximas 50 partidas' }
    ]
  }
];

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
