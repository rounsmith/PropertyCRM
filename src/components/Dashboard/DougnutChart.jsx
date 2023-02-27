import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DougnutChart = ({ number1, number2, color }) => {
  const data = {
    datasets: [
      {
        data: [number1, number2],
        backgroundColor: [color, '#E4E8EF'],
        borderWidth: 0,
      },
    ],
  };
  return <Doughnut data={data} />;
};

export default DougnutChart;
