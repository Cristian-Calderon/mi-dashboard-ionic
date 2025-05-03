import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend
} from 'recharts';

interface ChartData {
  name: string;
  cpuUsage: number;
}

const days = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

const TinyLineChartTecnico: React.FC = () => {
  const [data, setData] = useState<ChartData[]>([]);

  useEffect(() => {
    const simulatedData = days.map((day) => ({
      name: day,
      cpuUsage: Math.floor(30 + Math.random() * 50), // 🔥 Simula uso entre 30% y 80%
    }));
    setData(simulatedData);
  }, []);

  return (
    <div style={{
      width: '100%',
      height: '300px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#ffffff" tick={{ fontSize: 10 }} />
          <YAxis stroke="#ffffff" tick={{ fontSize: 10 }} />
          <Tooltip />
          <Legend verticalAlign="top" />
          <Line
            type="monotone"
            dataKey="cpuUsage"
            stroke="#FF6B6B"
            strokeWidth={2}
            name="Uso CPU (%)"
            dot
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TinyLineChartTecnico;
