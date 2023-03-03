import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const options = {
    // responsive: true,
    maintainAspectRatio: false,
    borderRadius: 4,
    borderSkipped: false,
    scales: {
      x: {
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
          },
        },
      },
      y: {
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      labels: {
        font: {
          size: 16,
        },
      },
    },
  };

  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ];
  const data = {
    labels,
    datasets: [
      {
        data: [800, 600, 500, 400, 750, 750, 400],
        backgroundColor: '#475BE8',
      },
      {
        data: [800, 600, 500, 400, 750, 750, 400],
        backgroundColor: ' #CFC8FF',
      },
    ],
  };
  return <Bar options={options} data={data} width={100} height={50} />;
};

export default BarChart;
