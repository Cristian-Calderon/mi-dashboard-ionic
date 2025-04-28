// src/components/TinyLineChartTecnico.tsx
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Lun', value: 12 },
  { name: 'Mar', value: 18 },
  { name: 'Mié', value: 10 },
  { name: 'Jue', value: 22 },
  { name: 'Vie', value: 16 },
  { name: 'Sáb', value: 25 },
  { name: 'Dom', value: 20 },
];

const TinyLineChartTecnico: React.FC = () => {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#ffffff" tick={{ fontSize: 12 }} />
          <YAxis stroke="#ffffff" tick={{ fontSize: 12 }} />
          <Tooltip />
          <Legend layout="horizontal" verticalAlign="top" align="center" />
          <Line type="monotone" dataKey="value" stroke="#2884d8" strokeWidth={2} name="Visitas" dot />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TinyLineChartTecnico;
