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
    title: 'Reducir errores críticos mensuales',
    description: 'Reducir la cantidad de errores críticos (500, fallos de API) en un 30% durante los próximos 6 meses, reforzando las pruebas automáticas y la monitorización en producción.',
    smart: [
      { letter: 'S', content: 'Reducir los errores críticos mensuales en un 30%' },
      { letter: 'M', content: 'Comparando el promedio de fallos por mes en los últimos 6 meses' },
      { letter: 'A', content: 'implementando pruebas automáticas y monitoreo continuo' },
      { letter: 'R', content: 'para mejorar la estabilidad y disponibilidad de la plataforma' },
      { letter: 'T', content: 'en los próximos 6 meses' }
    ]
  },
  {
    id: 2,
    title: 'Reducir errores por módulo crítico',
    description: 'Disminuir los errores del módulo con mayor incidencia (actualmente API con 120 errores) en un 40% en los próximos 2 meses, mediante optimización y pruebas específicas.',
    smart: [
      { letter: 'S', content: 'Reducir errores en el módulo API en un 40%' },
      { letter: 'M', content: 'De 120 a 72 errores' },
      { letter: 'A', content: 'optimizando código y reforzando tests automatizados' },
      { letter: 'R', content: 'para mejorar la estabilidad general del sistema' },
      { letter: 'T', content: 'en los próximos 2 meses' }
    ]
  },
  {
    id: 3,
    title: 'Incrementar cobertura de tests unitarios',
    description: 'Aumentar la cantidad de tests unitarios ejecutados y disminuir los fallidos en un 50% en los próximos 3 meses, asegurando al menos un 80% de cobertura del código.',
    smart: [
      { letter: 'S', content: 'Reducir tests fallidos en un 50% y alcanzar 80% de cobertura' },
      { letter: 'M', content: 'Reducir fallos de 80 a 40; medir cobertura en porcentaje' },
      { letter: 'A', content: 'mejorando los casos de prueba y cubriendo escenarios críticos' },
      { letter: 'R', content: 'para garantizar estabilidad y prevenir errores en producción' },
      { letter: 'T', content: 'en los próximos 3 meses' }
    ]
  },
  {
    id: 4,
    title: 'Mantener al menos el 95% de los servicios activos',
    description: 'Garantizar que al menos el 95% de los servicios backend estén activos durante los próximos 3 meses, implementando monitoreo proactivo y alertas automatizadas.',
    smart: [
      { letter: 'S', content: 'Mantener el 95% de servicios activos' },
      { letter: 'M', content: 'Actualmente: 80% activo, objetivo: llegar a 95%' },
      { letter: 'A', content: 'implementando monitoreo y alertas automáticas' },
      { letter: 'R', content: 'para garantizar alta disponibilidad y experiencia de usuario' },
      { letter: 'T', content: 'en los próximos 3 meses' }
    ]
  },
  {
    id: 5,
    title: 'Optimizar rendimiento del backend ante alta demanda',
    description: 'Reducir el tiempo medio de respuesta de la API a menos de 180 ms mientras se gestiona un incremento del 20% en las peticiones totales, asegurando la escalabilidad del sistema durante los próximos 3 meses.',
    smart: [
      { letter: 'S', content: 'Reducir tiempo medio de respuesta a <180 ms y aumentar peticiones en un 20%' },
      { letter: 'M', content: 'De 9000 a 10800 peticiones, de 240 ms a <180 ms' },
      { letter: 'A', content: 'mejorando el código backend, aplicando caching y optimizando base de datos' },
      { letter: 'R', content: 'para garantizar que el sistema pueda escalar sin degradar rendimiento' },
      { letter: 'T', content: 'en los próximos 3 meses' }
    ]
  },
  {
    id: 6,
    title: 'Optimizar uso promedio de CPU semanal',
    description: 'Reducir el uso promedio de CPU a menos del 70% en todos los días de la semana, implementando mejoras en la eficiencia del backend durante el próximo mes.',
    smart: [
      { letter: 'S', content: 'Mantener el uso promedio de CPU <70% todos los días' },
      { letter: 'M', content: 'Actualmente entre 30%-80%, objetivo ≤70%' },
      { letter: 'A', content: 'optimizando procesos backend y aplicando mejoras de rendimiento' },
      { letter: 'R', content: 'para evitar saturación del servidor y mejorar la estabilidad' },
      { letter: 'T', content: 'durante el próximo mes' }
    ]
  }

  ,
  {
    id: 7,
    title: 'Mantener velocidad de red estable durante picos de carga',
    description: 'Garantizar que la velocidad de conexión promedio se mantenga por encima de 80 Mbps incluso durante horas pico, monitoreando en tiempo real y aplicando mejoras en la infraestructura durante los próximos 2 meses.',
    smart: [
      { letter: 'S', content: 'Mantener velocidad promedio superior a 80 Mbps durante picos de tráfico' },
      { letter: 'M', content: 'Actualmente promedia entre 50-100 Mbps, objetivo mínimo 80 Mbps' },
      { letter: 'A', content: 'implementando balanceo de carga y monitoreo activo' },
      { letter: 'R', content: 'para asegurar tiempos de respuesta rápidos y experiencia fluida para el usuario' },
      { letter: 'T', content: 'en los próximos 2 meses' }
    ]
  }

  , {
    id: 8,
    title: 'Mantener latencia por debajo de 300 ms bajo alta concurrencia',
    description: 'Reducir la latencia promedio a menos de 300 ms incluso con 1,000 usuarios concurrentes, optimizando backend y escalando infraestructura en los próximos 3 meses.',
    smart: [
      { letter: 'S', content: 'Mantener latencia promedio <300 ms con alta concurrencia' },
      { letter: 'M', content: 'Actualmente llega a 900 ms con 1,000 usuarios; objetivo ≤300 ms' },
      { letter: 'A', content: 'optimizando backend, balanceadores y arquitectura de escalado' },
      { letter: 'R', content: 'para garantizar experiencia rápida incluso en alta demanda' },
      { letter: 'T', content: 'en los próximos 3 meses' }
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
