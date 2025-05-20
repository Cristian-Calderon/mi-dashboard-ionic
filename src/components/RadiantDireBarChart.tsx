// src/components/RadiantDireBarChart.tsx
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from 'recharts';

interface DataPoint {
  name: string;
  value: number;
}

interface RadiantDireBarChartProps {
  data: DataPoint[];
}

const RadiantDireBarChart: React.FC<RadiantDireBarChartProps> = ({ data }) => (
  <div style={{ width: '100%', height: 200 }}>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
      >
        <CartesianGrid stroke="#333" strokeDasharray="3 3" />
        <XAxis type="number" domain={[0, 100]} hide />
        <YAxis
          dataKey="name"
          type="category"
          width={80}
          axisLine={false}
          tickLine={false}
          tick={{ fill: '#fff' }}
        />
        <Tooltip formatter={(val: number, name: string) => [`${val}%`, name]} />
        <Bar dataKey="value" fill="#4CAF50" barSize={20} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default RadiantDireBarChart;
