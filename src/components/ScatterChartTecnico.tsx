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
  { x: 100, y: 20 },   // 100 registros, 20 ms
  { x: 500, y: 60 },
  { x: 1000, y: 110 },
  { x: 5000, y: 250 },
  { x: 10000, y: 500 },
];

const ScatterChartTecnico: React.FC = () => {
  return (
    <div style={{
      width: '100%',
      height: '300px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart>
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="Registros" stroke="#ffffff" tick={{ fontSize: 12 }} />
          <YAxis type="number" dataKey="y" name="Tiempo (ms)" stroke="#ffffff" tick={{ fontSize: 12 }} />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend verticalAlign="top" height={36} />
          <Scatter
            name="Registros vs Tiempo"
            data={data}
            fill="#00C49F"
            shape="circle"
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScatterChartTecnico;
