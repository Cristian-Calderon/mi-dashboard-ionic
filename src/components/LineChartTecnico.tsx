import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';

const LineChartTecnico: React.FC = () => {
  const [speedData, setSpeedData] = useState<number[]>(Array(10).fill(50));

  useEffect(() => {
    const interval = setInterval(() => {
      const newSpeed = Math.floor(Math.random() * 100);
      setSpeedData((prev) => {
        const updated = [...prev.slice(1), newSpeed];
        return updated;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const option = {
    xAxis: {
      type: 'category',
      data: Array(10).fill(''),
      show: false,
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 100,
      axisLabel: {
        formatter: '{value} Mbps',
      },
      splitLine: {
        lineStyle: {
          color: '#eee',
        },
      },
    },
    tooltip: {
      trigger: 'axis',
      formatter: (params: any) => {
        const val = params[0].value;
        return `Velocidad: ${val} Mbps`;
      },
    },
    series: [
      {
        data: speedData,
        type: 'line',
        smooth: true,
        lineStyle: {
          color: '#00C49F',
          width: 3,
        },
        areaStyle: {
          color: 'rgba(0,196,159,0.2)',
        },
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: {
          color: '#00C49F',
        },
      },
    ],
  };

  return (
    <div style={{ width: '100%', height: '300px' }}>
      <ReactECharts option={option} style={{ width: '100%', height: '100%' }} />
    </div>
  );
  
};

export default LineChartTecnico;
