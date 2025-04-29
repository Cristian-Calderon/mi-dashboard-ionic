// src/components/AreaChartTecnico.tsx
import React, { useEffect, useState } from 'react';
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
  total: number;
}

const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

const AreaChartTecnico: React.FC = () => {
  const [data, setData] = useState<ChartData[]>([]);

  const fetchSalesData = async () => {
    try {
      const res = await fetch('https://api.escuelajs.co/api/v1/products');
      const products = await res.json();
  
      const monthTotals: { [key: string]: number } = {};
  
      products.forEach((product: any, index: number) => {
        const monthIndex = index % 12;
        const month = months[monthIndex];
        monthTotals[month] = (monthTotals[month] || 0) + 1;
      });
  
      const chartData = months.map((month) => ({
        name: month,
        total: (monthTotals[month] || 0) + Math.floor(Math.random() * 6), // 🔥 Aquí
      }));
  
      setData(chartData);
    } catch (error) {
      console.error('Error fetching sales data:', error);
    }
  };
  

  useEffect(() => {
    fetchSalesData(); // Primera carga

    const interval = setInterval(() => {
      fetchSalesData(); // Actualizar cada 10 segundos
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
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#ffffff" />
          <YAxis stroke="#ffffff" />
          <Tooltip />
          <Legend verticalAlign="top" />
          <Area type="monotone" dataKey="total" stroke="#82ca9d" fill="#82ca9d" name="Ventas" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChartTecnico;
