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
import SparkLine from '../components/SparkLine';
import DoughnutChart from '../components/DoughnutChart';
import { ApexOptions } from 'apexcharts';
import { navigateOutline, eyeOutline, peopleOutline, cashOutline } from 'ionicons/icons';
import './NegocioPage.css';

import LineChart from '../components/LineChart';



// Datos para los sparklines
const sparkData1 = {
  title: 'CLICKS',
  value: '1234',
  bgColor: 'gradient-blue',
  textColor: 'white',
  icon: navigateOutline,
  chartOptions: {
    chart: { id: 'clicks', type: 'area', sparkline: { enabled: true }, dropShadow: { enabled: true, top: 1, left: 1, blur: 2, opacity: 0.5 } },
    stroke: { curve: 'smooth', width: 3 },
    colors: ['#fff'],
    tooltip: { theme: 'dark', x: { show: false }, y: { title: { formatter: (): string => '' } } }
  } as ApexOptions,
  series: [{ data: [25, 66, 41, 59, 25, 44, 12, 36, 9, 21] }]
};
const sparkData2 = {
  title: 'VIEWS',
  value: '1982',
  bgColor: 'gradient-pink',
  textColor: 'white',
  icon: eyeOutline,
  chartOptions: {
    chart: { id: 'views', type: 'bar', sparkline: { enabled: true }, dropShadow: { enabled: true, top: 1, left: 1, blur: 2, opacity: 0.5 } },
    stroke: { curve: 'smooth', width: 3 },
    colors: ['#fff'],
    tooltip: { theme: 'dark', x: { show: false }, y: { title: { formatter: (): string => '' } } }
  } as ApexOptions,
  series: [{ data: [30, 45, 32, 50, 28, 60, 18, 40, 14, 25] }]
};
const sparkData3 = {
  title: 'LEADS',
  value: '2011',
  bgColor: 'gradient-orange',
  textColor: 'white',
  icon: peopleOutline,
  chartOptions: {
    chart: { id: 'leads', type: 'line', sparkline: { enabled: true }, dropShadow: { enabled: true, top: 1, left: 1, blur: 2, opacity: 0.5 } },
    stroke: { curve: 'straight', width: 3 },
    colors: ['#fff'],
    tooltip: { theme: 'dark', x: { show: false }, y: { title: { formatter: (): string => '' } } }
  } as ApexOptions,
  series: [{ data: [15, 28, 22, 35, 20, 30, 10, 25, 6, 18] }]
};
const sparkData4 = {
  title: 'SALES',
  value: '627k€',
  bgColor: 'gradient-green',
  textColor: 'white',
  icon: cashOutline,
  chartOptions: {
    chart: { id: 'sales', type: 'area', sparkline: { enabled: true }, dropShadow: { enabled: true, top: 1, left: 1, blur: 2, opacity: 0.5 } },
    stroke: { curve: 'smooth', width: 3 },
    colors: ['#fff'],
    tooltip: { theme: 'dark', x: { show: false }, y: { title: { formatter: (): string => '' } } }
  } as ApexOptions,
  series: [{ data: [20, 50, 35, 45, 30, 55, 14, 32, 8, 20] }]
};


// Datos de LineChart: 
// Prepara los datos
const mainChartData = {
  labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
  datasets: [{
    label: 'Visitas',
    data: [120, 190, 300, 500, 200, 300],
    fill: false,
    tension: 0.4
  }]
};
const mainChartOptions = {
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    title: { display: true, text: 'Visitas Mensuales' }
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

    <IonContent className="ion-padding">
      <IonGrid className="dashboard-grid">
        {/* Fila 1: 4 sparklines */}
        <IonRow className="row-1">
          <IonCol size="6" size-lg="3"><div className="box"><SparkLine {...sparkData1} /></div></IonCol>
          <IonCol size="6" size-lg="3"><div className="box"><SparkLine {...sparkData2} /></div></IonCol>
          <IonCol size="6" size-lg="3"><div className="box"><SparkLine {...sparkData3} /></div></IonCol>
          <IonCol size="6" size-lg="3"><div className="box"><SparkLine {...sparkData4} /></div></IonCol>
        </IonRow>
        
        
        
        {/* Fila 2: placeholder para contenido adicional */}
        <IonRow className="row-2">
          <IonCol size="12" size-lg="9">
            <div className="box">
              <LineChart data={mainChartData} options={mainChartOptions} />
            </div>
          </IonCol>
          {/* Columna pequeña puede ser otro gráfico o KPI estático */}
          <IonCol size="12" size-lg="3">
            <div className="box" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <h3 style={{ margin: 0, marginBottom: '0.5rem' }}>Meta Cumplida</h3>
              <DoughnutChart percentage={75} label="Conversiones" />
            </div>
          </IonCol>
        </IonRow>

        {/* Fila 3: placeholder para contenido adicional */}
        <IonRow className="row-3">
          <IonCol size="12" size-lg="6"><div className="box">Columna 1</div></IonCol>
          <IonCol size="12" size-lg="6"><div className="box">Columna 2</div></IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonPage>
);

export default NegocioPage;
