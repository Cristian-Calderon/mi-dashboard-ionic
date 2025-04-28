// src/components/AreaChartTecnico.tsx
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Ene', visitas: 400 },
  { name: 'Feb', visitas: 300 },
  { name: 'Mar', visitas: 500 },
  { name: 'Abr', visitas: 200 },
  { name: 'May', visitas: 278 },
  { name: 'Jun', visitas: 189 },
  { name: 'Jul', visitas: 239 },
  { name: 'Ago', visitas: 349 },
  { name: 'Sep', visitas: 450 },
];

const AreaChartTecnico: React.FC = () => {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <XAxis dataKey="name" stroke="#ffffff" />
          <YAxis stroke="#ffffff" />
          <Tooltip />
          <Area type="monotone" dataKey="visitas" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChartTecnico;
