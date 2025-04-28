// src/components/ComposedChartTecnico.tsx
import React from 'react';
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

const data = [
  { name: 'Ene', ventas: 590, visitas: 800 },
  { name: 'Feb', ventas: 868, visitas: 967 },
  { name: 'Mar', ventas: 1397, visitas: 1098 },
  { name: 'Abr', ventas: 1480, visitas: 1200 },
  { name: 'May', ventas: 1520, visitas: 1108 },
  { name: 'Jun', ventas: 1400, visitas: 1050 },
];

const ComposedChartTecnico: React.FC = () => {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }}>
      <ResponsiveContainer width="100%" height="90%">
        <ComposedChart data={data}>
          <CartesianGrid stroke="#333" />
          <XAxis dataKey="name" stroke="#ffffff" />
          <YAxis stroke="#ffffff" />
          <Tooltip />
          <Bar dataKey="ventas" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="visitas" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ComposedChartTecnico;
