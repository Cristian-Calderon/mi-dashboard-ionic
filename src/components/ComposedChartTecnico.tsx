import React from 'react';
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from 'recharts';

const data = [
  { name: 'Ene', apiRequests: 5900, responseTime: 240 },
  { name: 'Feb', apiRequests: 6800, responseTime: 230 },
  { name: 'Mar', apiRequests: 7200, responseTime: 210 },
  { name: 'Abr', apiRequests: 8000, responseTime: 200 },
  { name: 'May', apiRequests: 8500, responseTime: 190 },
  { name: 'Jun', apiRequests: 9000, responseTime: 180 },
];

const ComposedChartTecnico: React.FC = () => {
  return (
    <div style={{
      width: '100%',
      height: '300px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data}>
          <CartesianGrid stroke="#333" />
          <XAxis dataKey="name" stroke="#ffffff" tick={{ fontSize: 12 }} />
          <YAxis yAxisId="left" stroke="#ffffff" tick={{ fontSize: 12 }} />
          <YAxis yAxisId="right" orientation="right" stroke="#ffffff" tick={{ fontSize: 12 }} />
          <Tooltip />
          <Legend layout="horizontal" verticalAlign="top" align="center" />
          <Bar yAxisId="left" dataKey="apiRequests" barSize={30} fill="#413ea0" name="Peticiones API" />
          <Line yAxisId="right" type="monotone" dataKey="responseTime" stroke="#ff7300" strokeWidth={2} name="Tiempo Resp. (ms)" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ComposedChartTecnico;
