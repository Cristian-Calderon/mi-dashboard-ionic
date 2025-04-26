// src/components/DoughnutChart.tsx
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  percentage: number;
  label: string;
  colors?: string[];
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

  const options: ChartOptions<'doughnut'> = {
    cutout: '70%',
    plugins: {
      tooltip: { enabled: true },
      legend: { display: false },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: '100%', height: '200px', position: 'relative' }}>
      <Doughnut data={data} options={options} />
      {/* NÚMERO EN EL CENTRO */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#0396FF'
      }}>
        {percentage}%
      </div>
    </div>
  );
};

export default DoughnutChart;
