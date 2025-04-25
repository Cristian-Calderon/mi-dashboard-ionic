// src/components/DoughnutChart.tsx
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  percentage: number;      // Valor numérico entre 0 y 100
  label: string;           // Nombre del KPI
  colors?: string[];       // Colores para el doughnut
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({
  percentage,
  label,
  colors = ['#0396FF', '#e0e0e0'],
}) => {
  const data = {
    labels: [label, 'Restante'],
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: colors,
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    cutout: '70%',           // Grosor del anillo
    plugins: {
      tooltip: { enabled: true },
      legend: { display: false }
    }
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
