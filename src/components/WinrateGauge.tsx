// src/components/WinrateGauge.tsx
import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer, Legend } from 'recharts';

interface WinrateGaugeProps {
  percentage: number;
}

const WinrateGauge: React.FC<WinrateGaugeProps> = ({ percentage }) => {
  const data = [{ name: 'Winrate', value: percentage }];

  return (
    <div style={{ width: '100%', height: 200 }}>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="70%"
          outerRadius="100%"
          barSize={15}
          data={data}
          startAngle={90}
          endAngle={-270}
        >
          <RadialBar
            dataKey="value"
            background
            cornerRadius={10}
          />
          <Legend
            iconSize={0}
            formatter={() => (
              <span style={{ color: '#fff', fontSize: '1.2rem' }}>
                {percentage}%
              </span>
            )}
            verticalAlign="middle"
            align="center"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WinrateGauge;
