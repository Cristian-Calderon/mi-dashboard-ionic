// src/components/MiniBarChart.tsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

interface MiniBarChartProps {
  labels: string[];
  values: number[];
}

const MiniBarChart: React.FC<MiniBarChartProps> = ({ labels, values }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        data: values,
        backgroundColor: '#4CAF50', // Verde bonito
        borderRadius: 6,
        barThickness: 12,
      },
    ],
  };

  const options = {
    indexAxis: 'y' as const, // 👉 Horizontal
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: { enabled: true },
      legend: { display: false }
    },
    scales: {
      x: {
        ticks: { color: '#ffffff' },
        grid: { display: false }
      },
      y: {
        ticks: { color: '#ffffff' },
        grid: { display: false }
      }
    }
  };

  return (
    <div style={{ width: '100%', height: '220px', marginTop: '1rem' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default MiniBarChart;
