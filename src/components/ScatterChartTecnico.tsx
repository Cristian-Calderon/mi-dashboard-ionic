// src/components/ScatterChartTecnico.tsx
import React from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

const data = [
  { x: 10, y: 30 },
  { x: 30, y: 200 },
  { x: 50, y: 100 },
  { x: 70, y: 180 },
  { x: 90, y: 250 },
];

const ScatterChartTecnico: React.FC = () => {
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
        <ScatterChart>
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="Duración" stroke="#ffffff" tick={{ fontSize: 12 }} />
          <YAxis type="number" dataKey="y" name="Ventas" stroke="#ffffff" tick={{ fontSize: 12 }} />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Scatter
            name="Duración vs Ventas"
            data={data}
            fill="#2884d8"
            shape="circle" /* 👈 aseguramos forma de círculo */
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScatterChartTecnico;
