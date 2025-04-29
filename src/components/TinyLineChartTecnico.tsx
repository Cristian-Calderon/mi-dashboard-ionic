// src/components/TinyLineChartTecnico.tsx
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
  total: number;
}

const days = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

const TinyLineChartTecnico: React.FC = () => {
  const [data, setData] = useState<ChartData[]>([]);

  const fetchElectronicsSales = async () => {
    try {
      const res = await fetch('https://api.escuelajs.co/api/v1/products');
      const products = await res.json();

      // Filtrar solo productos de categoría "electronics"
      const electronics = products.filter((p: any) => p.category?.name?.toLowerCase() === 'electronics');

      // Distribuirlos entre días de la semana
      const dayTotals: { [key: string]: number } = {};

      electronics.forEach((product: any, index: number) => {
        const dayIndex = index % 7;
        const day = days[dayIndex];
        dayTotals[day] = (dayTotals[day] || 0) + 1;
      });

      const chartData = days.map((day) => ({
        name: day,
        total: (dayTotals[day] || 0) + Math.floor(Math.random() * 3), // 👈 Variación aleatoria pequeña
      }));

      setData(chartData);
    } catch (error) {
      console.error('Error fetching electronics data:', error);
    }
  };

  useEffect(() => {
    fetchElectronicsSales(); // Primera carga

    const interval = setInterval(() => {
      fetchElectronicsSales(); // Actualizar cada 10 segundos
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      width: '100%',
      height: '100%',
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
          <Line type="monotone" dataKey="total" stroke="#8884d8" strokeWidth={2} name="Ventas Electrónica" dot />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TinyLineChartTecnico;
