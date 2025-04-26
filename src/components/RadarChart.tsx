// src/components/RadarChart.tsx
import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const RadarChart: React.FC = () => {
  const data = {
    labels: ['Ventas', 'Marketing', 'Soporte', 'Desarrollo', 'Diseño', 'Operaciones'],
    datasets: [
      {
        label: 'Este mes',
        data: [65, 59, 90, 81, 56, 55],
        backgroundColor: 'rgba(3,150,255,0.2)',
        borderColor: '#0396FF',
        pointBackgroundColor: '#0396FF',
      },
      {
        label: 'Mes pasado',
        data: [50, 40, 70, 60, 80, 45],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: '#FF6384',
        pointBackgroundColor: '#FF6384',
      }
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: { display: false },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: { color: '#ffffff' },
        pointLabels: { color: '#ffffff' }
      }
    },
    plugins: {
      legend: { labels: { color: '#ffffff' } }
    }
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarChart;
