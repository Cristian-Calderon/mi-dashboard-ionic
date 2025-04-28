// src/components/TinyLineChartTecnico.tsx
import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const data = [
  { value: 12 },
  { value: 18 },
  { value: 10 },
  { value: 22 },
  { value: 16 },
  { value: 25 },
  { value: 20 },
];

const TinyLineChartTecnico: React.FC = () => {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }}>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data}>
          <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TinyLineChartTecnico;
