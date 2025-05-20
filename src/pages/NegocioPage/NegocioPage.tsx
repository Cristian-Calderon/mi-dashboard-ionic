// src/pages/NegocioPage.tsx
import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButtons,
  IonMenuButton
} from '@ionic/react';
import SparkLine from '../../components/SparkLine';
import DoughnutChart from '../../components/DoughnutChart';
import { ApexOptions } from 'apexcharts';
import { navigateOutline, eyeOutline, peopleOutline, cashOutline } from 'ionicons/icons';
import styles from './NegocioPage.module.css';



import LineChart from '../../components/LineChart';
// grafico pequeno verde
import MiniBarChart from '../../components/MiniBarChart'; // 👈 Importa el nuevo componente

// Ante penultimo
import RadarChart from '../../components/RadarChart';
// ultimo
import PolarAreaChart from '../../components/PolarAreaChart';

import WinrateGauge from '../../components/WinrateGauge';
import RadiantDireBarChart from '../../components/RadiantDireBarChart';


// Datos para los sparklines
const sparkData1 = {
  title: 'HERO CLICKS',
  value: '1000', // valor actual realista alineado al KPI
  bgColor: 'gradient-blue',
  textColor: 'white',
  icon: navigateOutline,
  chartOptions: {
    chart: { id: 'hero_clicks', type: 'area', sparkline: { enabled: true }, dropShadow: { enabled: true, top: 1, left: 1, blur: 2, opacity: 0.5 } },
    stroke: { curve: 'smooth', width: 3 },
    colors: ['#fff'],
    tooltip: { theme: 'dark', x: { show: false }, y: { title: { formatter: (): string => '' } } }
  } as ApexOptions,
  series: [{ data: [80, 100, 90, 105, 110, 120, 140, 160, 180, 200] }]
};

const sparkData2 = {
  title: 'MATCH ANALYSIS VIEWS',
  value: '1900',
  bgColor: 'gradient-pink',
  textColor: 'white',
  icon: eyeOutline,
  chartOptions: {
    chart: { id: 'match_views', type: 'bar', sparkline: { enabled: true }, dropShadow: { enabled: true, top: 1, left: 1, blur: 2, opacity: 0.5 } },
    stroke: { curve: 'smooth', width: 3 },
    colors: ['#fff'],
    tooltip: { theme: 'dark', x: { show: false }, y: { title: { formatter: (): string => '' } } }
  } as ApexOptions,
  series: [{ data: [100, 150, 170, 160, 200, 210, 220, 250, 230, 210] }]
};

const sparkData3 = {
  title: 'NEW LINKED PROFILES',
  value: '2000',
  bgColor: 'gradient-orange',
  textColor: 'white',
  icon: peopleOutline,
  chartOptions: {
    chart: { id: 'linked_profiles', type: 'line', sparkline: { enabled: true }, dropShadow: { enabled: true, top: 1, left: 1, blur: 2, opacity: 0.5 } },
    stroke: { curve: 'straight', width: 3 },
    colors: ['#fff'],
    tooltip: { theme: 'dark', x: { show: false }, y: { title: { formatter: (): string => '' } } }
  } as ApexOptions,
  series: [{ data: [100, 120, 130, 150, 170, 190, 210, 220, 230, 250] }]
};

const sparkData4 = {
  title: 'PREMIUM SUBSCRIPTIONS',
  value: '600k€',
  bgColor: 'gradient-green',
  textColor: 'white',
  icon: cashOutline,
  chartOptions: {
    chart: { id: 'premium_sales', type: 'area', sparkline: { enabled: true }, dropShadow: { enabled: true, top: 1, left: 1, blur: 2, opacity: 0.5 } },
    stroke: { curve: 'smooth', width: 3 },
    colors: ['#fff'],
    tooltip: { theme: 'dark', x: { show: false }, y: { title: { formatter: (): string => '' } } }
  } as ApexOptions,
  series: [{ data: [80, 100, 130, 120, 150, 170, 190, 210, 240, 250] }]
};



// Datos de LineChart: 
// Prepara los datos
const mainChartData = {
  labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
  datasets: [{
    label: 'Visitas',
    data: [120, 190, 300, 500, 200, 300],
    fill: true,                                 // si quieres área rellena
    tension: 0.4,
    borderColor: 'rgba(255,165,0,1)',           // naranja sólido
    backgroundColor: 'rgba(255,165,0,0.2)',     // naranja suave semi-transparente
    pointBackgroundColor: 'rgba(255,165,0,1)',  // color de los puntos
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(255,165,0,1)'
  }]
};

const mainChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  devicePixelRatio: window.devicePixelRatio,
  plugins: {
    legend: {
      labels: { color: '#fff' }
    },
    title: {
      display: true,
      text: 'Visitas Mensuales',
      color: '#fff'
    }
  },
  scales: {
    x: {
      ticks: { color: '#fff' },
      grid: { color: 'rgba(255,255,255,0.1)' }
    },
    y: {
      ticks: { color: '#fff' },
      grid: { color: 'rgba(255,255,255,0.1)' }
    }
  }
};



const NegocioPage: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton color="primary" />
        </IonButtons>
        <IonTitle>🚀 Negocio</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen className="ion-padding-horizontal">
      <IonGrid className={styles.dashboardGrid}>
        {/* Fila 1 */}
        <IonRow className={styles['row-1']}>
          <IonCol size="6" size-lg="3"><div className={styles.box}><SparkLine {...sparkData1} /></div></IonCol>
          <IonCol size="6" size-lg="3"><div className={styles.box}><SparkLine {...sparkData2} /></div></IonCol>
          <IonCol size="6" size-lg="3"><div className={styles.box}><SparkLine {...sparkData3} /></div></IonCol>
          <IonCol size="6" size-lg="3"><div className={styles.box}><SparkLine {...sparkData4} /></div></IonCol>
        </IonRow>

        {/* Fila 2 */}
        <IonRow className={styles['row-2']}>
          <IonCol size="12" size-lg="9">
            <div className={styles.box}>
              <div className={styles.lineChartContainer}>
                <LineChart data={mainChartData} options={mainChartOptions} />
              </div>
            </div>
          </IonCol>
          <IonCol size="12" size-lg="3">
            <div className={styles.box} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <WinrateGauge percentage={75} />
              <RadiantDireBarChart data={[{ name: 'Radiant', value: 56 }, { name: 'Dire', value: 48 }]} />
            </div>
          </IonCol>


        </IonRow>

        {/* Fila 3 */}
        <IonRow className={styles['row-3']}>
          <IonCol size="12" size-lg="6">
            <div className={`${styles.box} ${styles.fullChartBox}`}>
              <RadarChart />
            </div>
          </IonCol>
          <IonCol size="12" size-lg="6">
            <div className={`${styles.box} ${styles.fullChartBox}`}>
              <PolarAreaChart />
            </div>
          </IonCol>
        </IonRow>


      </IonGrid>
    </IonContent>
  </IonPage>
);

export default NegocioPage;