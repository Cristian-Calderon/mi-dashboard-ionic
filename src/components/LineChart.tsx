// src/components/LineChart.tsx
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Registrar los componentes necesarios en Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      fill?: boolean;
      tension?: number;
    }[];
  };
  options?: any;
}

const LineChart: React.FC<LineChartProps> = ({ data, options }) => (
  <Line data={data} options={options} />
);

export default LineChart;
