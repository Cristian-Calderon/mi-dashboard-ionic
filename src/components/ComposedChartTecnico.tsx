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
  Legend, // 👈 Importa Legend
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
    }}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data}>
          <CartesianGrid stroke="#333" />
          <XAxis dataKey="name" stroke="#ffffff" tick={{ fontSize: 12 }} />
          <YAxis stroke="#ffffff" tick={{ fontSize: 12 }} />
          <Tooltip />
          <Legend layout="horizontal" verticalAlign="top" align="center" /> {/* 👈 Aquí agregamos la leyenda */}
          <Bar dataKey="ventas" barSize={30} fill="#413ea0" name="Ventas" /> {/* name importante */}
          <Line type="monotone" dataKey="visitas" stroke="#ff7300" strokeWidth={2} name="Visitas" /> {/* name importante */}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ComposedChartTecnico;
