// src/components/SparkLine.tsx
import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { IonIcon } from '@ionic/react';
import './SparkLine.css';

interface SparkLineProps {
  title: string;
  value: string;
  chartOptions: ApexOptions;
  series: ApexOptions['series'];
  bgColor?: string;
  textColor?: string;
  icon?: any;
}

const SparkLine: React.FC<SparkLineProps> = ({
  title,
  value,
  chartOptions,
  series,
  bgColor = '',
  textColor = '',
  icon
}) => {
  const [chartHeight, setChartHeight] = useState<number>(() => {
    const w = window.innerWidth;
    if (w < 576) return 50;
    if (w < 992) return 80;
    return 120;
  });

  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth;
      if (w < 576) setChartHeight(50);
      else if (w < 992) setChartHeight(80);
      else setChartHeight(120);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div className={`box-sparkline ${bgColor} ${textColor}`}>
      <div className="details">
        <div>
          {icon && <IonIcon icon={icon} />}
          <span>{title}</span>
        </div>
        <span>{value}</span>
      </div>
      <ReactApexChart
        options={chartOptions}
        series={series}
        type={chartOptions.chart?.type as any || 'area'}
        height={chartHeight}
        width="100%"
      />
    </div>
  );
};

export default SparkLine;
