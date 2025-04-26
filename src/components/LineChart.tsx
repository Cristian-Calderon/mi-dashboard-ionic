// src/components/LineChart.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
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
  data: any;
  options?: any;
  height?: number;  // Nuevo prop
  width?: number;   // Nuevo prop
}

const LineChart: React.FC<LineChartProps> = ({ data, options, height, width }) => (
  <Line
    data={data}
    options={options}
    height={height}   // usan estos props
    width={width}
    redraw={true}
  />
);

export default LineChart;
