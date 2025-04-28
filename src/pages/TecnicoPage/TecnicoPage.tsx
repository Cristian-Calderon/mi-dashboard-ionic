// src/pages/TecnicoPage/TecnicoPage.tsx
import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonMenuButton,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';
import styles from './TecnicoPage.module.css';
import AreaChartTecnico from '../../components/AreaChartTecnico';
import BarChartTecnico from '../../components/BarChartTecnico';
import PieChartTecnico from '../../components/PieChartTecnico';
import MiniPieChartTecnico from '../../components/MiniPieChartTecnico';
import ComposedChartTecnico from '../../components/ComposedChartTecnico';
import TinyLineChartTecnico from '../../components/TinyLineChartTecnico';
import RadialBarChartTecnico from '../../components/RadialBarChartTecnico';
import ScatterChartTecnico from '../../components/ScatterChartTecnico';




const TecnicoPage: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton color="primary" />
        </IonButtons>
        <IonTitle>📈 Técnico</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent className="ion-padding">
      <IonGrid className={styles.dashboardGrid}>
        {/* Fila 1: 3 columnas */}
        <IonRow className={styles['row-1']}>
          <IonCol size="12" size-lg="4">
            <div className={styles.box}>
              <AreaChartTecnico />
            </div>
          </IonCol>

          <IonCol size="6" size-lg="4">
            <div className={styles.box}>
              <BarChartTecnico />
            </div>
          </IonCol>
          <IonCol size="6" size-lg="4">
            <div className={styles.box}>
              <PieChartTecnico />
            </div>
          </IonCol>

        </IonRow>

        {/* Fila 2: invertir orden en desktop */}
        <IonRow className={styles['row-2']}>
          <IonCol size="12" size-lg="3" order-lg="2">
            <div className={styles.box}>
              <MiniPieChartTecnico />
            </div>
          </IonCol>

          <IonCol size="12" size-lg="9" order-lg="1">
            <div className={styles.box}>
              <ComposedChartTecnico />
            </div>
          </IonCol>

        </IonRow>

        {/* Fila 3: 3 columnas con proporciones 4.5, 4.5, 3 */}
        <IonRow className={styles['row-3']}>
          <IonCol size="12" size-lg="4.5">
            <div className={styles.box}>
              <TinyLineChartTecnico />
            </div>
          </IonCol>

          <IonCol size="12" size-lg="4.5">
            <div className={styles.box}>
              <RadialBarChartTecnico />
            </div>
          </IonCol>

          <IonCol size="12" size-lg="3">
            <div className={styles.box}>
              <ScatterChartTecnico />
            </div>
          </IonCol>

        </IonRow>
      </IonGrid>
    </IonContent>
  </IonPage>
);

export default TecnicoPage;
