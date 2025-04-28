// src/components/RadialBarChartTecnico.tsx
import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
  {
    name: 'Progreso',
    value: 75,
    fill: '#00C49F',
  },
];

const RadialBarChartTecnico: React.FC = () => {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column', /* Muy importante */
      position: 'relative'
    }}>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="70%"
          outerRadius="90%"
          barSize={12}
          data={data}
          startAngle={180}
          endAngle={-180}
        >
          <RadialBar
            background
            dataKey="value"
          />
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </RadialBarChart>
      </ResponsiveContainer>

      {/* 👇 Texto central */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#00C49F',
      }}>
        75%
      </div>
    </div>
  );
};

export default RadialBarChartTecnico;
