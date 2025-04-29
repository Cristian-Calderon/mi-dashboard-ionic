// src/components/MiniPieChartTecnico.tsx
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'; // 👈 Importar Legend

const data = [
  { name: 'Activo', value: 80 },
  { name: 'Inactivo', value: 20 },
];

const COLORS = ['#00C49F', '#FF8042'];

const MiniPieChartTecnico: React.FC = () => {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column', // 👈 Muy importante para que la leyenda quede debajo
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={90}
            innerRadius={50}
            label
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend layout="horizontal" verticalAlign="bottom" align="center" /> {/* 👈 Aquí la leyenda */}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MiniPieChartTecnico;
