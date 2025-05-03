import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'API', errors: 120 },
  { name: 'BD', errors: 80 },
  { name: 'Frontend', errors: 45 },
  { name: 'Serv Externos', errors: 60 },
];

const BarChartTecnico: React.FC = () => {
  return (
    <div style={{
      width: '100%',
      height: '300px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#ffffff" />
          <YAxis stroke="#ffffff" />
          <Tooltip />
          <Bar dataKey="errors" fill="#FF6B6B" name="Errores por Módulo" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartTecnico;
