// src/components/LineChartTecnico.tsx
import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from 'recharts';

const INITIAL_POINTS = 10;
const UPDATE_INTERVAL = 1500; // ms

const LineChartTecnico: React.FC = () => {
  const [speedData, setSpeedData] = useState<number[]>(
    Array(INITIAL_POINTS).fill(50)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const newSpeed = Math.floor(Math.random() * 100);
      setSpeedData(prev => [...prev.slice(1), newSpeed]);
    }, UPDATE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  // Recharts necesita un array de objetos { name, value }
  const chartData = speedData.map((value, i) => ({
    name: `${i}`, 
    value
  }));

  return (
    <div style={{ width: '100%', height: '300px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid stroke="#333" strokeDasharray="5 5" />
          <XAxis 
            dataKey="name" 
            tick={false} 
            axisLine={false} 
            label={{ value: 'Tiempo', position: 'insideBottom', dy: 10, fill: '#fff' }}
          />
          <YAxis 
            domain={[0, 100]} 
            tickFormatter={val => `${val} Mbps`} 
            tick={{ fill: '#fff', fontSize: 12 }} 
            axisLine={{ stroke: '#fff' }}
          />
          <Tooltip 
            formatter={(val: number) => `${val} Mbps`} 
            contentStyle={{ backgroundColor: '#1E1E1E', border: 'none' }}
            itemStyle={{ color: '#00C49F' }}
          />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#00C49F" 
            strokeWidth={2} 
            dot={{ r: 4, fill: '#00C49F' }}
            isAnimationActive={false}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartTecnico;
