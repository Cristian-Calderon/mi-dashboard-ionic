// src/components/ScatterChartTecnico.tsx
import React from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
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
      padding: '1rem'
    }}>
      <ResponsiveContainer width="100%" height="90%">
        <ScatterChart>
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="Duración" stroke="#ffffff" />
          <YAxis type="number" dataKey="y" name="Ventas" stroke="#ffffff" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="Ventas vs Duración" data={data} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScatterChartTecnico;
