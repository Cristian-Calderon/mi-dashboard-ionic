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
  chartSeries: any;
  bgColor?: string;
  textColor?: string;
  icon?: any;
}

const SparkLine: React.FC<SparkLineProps> = ({
  title,
  value,
  chartOptions,
  chartSeries,
  bgColor = '',
  textColor = '',
  icon
}) => {
  const [chartHeight, setChartHeight] = useState<string>('50%');

  const updateChartHeight = () => {
    const width = window.innerWidth;
    if (width < 576) setChartHeight('30%');
    else if (width < 768) setChartHeight('40%');
    else setChartHeight('50%');
  };

  useEffect(() => {
    updateChartHeight();
    window.addEventListener('resize', updateChartHeight);
    return () => window.removeEventListener('resize', updateChartHeight);
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
        className="sparkline-chart"
        options={chartOptions}
        series={chartSeries}
        type={chartOptions.chart?.type as any || 'area'}
        height={chartHeight}
      />
    </div>
  );
};

export default SparkLine;
