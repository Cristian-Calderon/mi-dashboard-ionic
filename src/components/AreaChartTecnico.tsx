import React, { useState, useEffect } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend
} from 'recharts';

interface ChartData {
  name: string;
  criticalErrors: number;
}

const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

const AreaChartTecnico: React.FC = () => {
  const [data, setData] = useState<ChartData[]>([]);

  useEffect(() => {
    // Generar datos simulados
    const simulatedData = months.map((month) => ({
      name: month,
      criticalErrors: Math.floor(Math.random() * 50), // 🔥 entre 0 y 50 errores simulados
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
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#ffffff" />
          <YAxis stroke="#ffffff" />
          <Tooltip />
          <Legend verticalAlign="top" />
          <Area
            type="monotone"
            dataKey="criticalErrors"
            stroke="#FF6B6B"
            fill="#FF6B6B"
            name="Errores Críticos"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChartTecnico;
