// src/components/RadialBarChartTecnico.tsx
import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  {
    name: 'Progreso',
    value: 75, // porcentaje
    fill: '#00C49F', // color verde bonito
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
      padding: '1rem'
    }}>
      <ResponsiveContainer width="100%" height="90%">
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
            minAngle={15}
            background
            clockWise
            dataKey="value"
          />
          <Tooltip />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadialBarChartTecnico;
