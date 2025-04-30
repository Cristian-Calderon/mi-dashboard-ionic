// src/components/PolarAreaChart.tsx
import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const PolarAreaChart: React.FC = () => {
  const data = {
    labels: ['Carry', 'Mid', 'Offlane', 'Support', 'Hard Support'],
    datasets: [
      {
        data: [22, 18, 14, 25, 21],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };



  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { labels: { color: '#ffffff' } }
    }
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <PolarArea data={data} options={options} />
    </div>
  );
};

export default PolarAreaChart;
