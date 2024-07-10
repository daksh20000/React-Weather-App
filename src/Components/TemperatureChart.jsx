import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './TemperatureChart.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function TemperatureChart({ forecastData, cityName, width = '100%', height = '220px' }) {
  const temperatureData = {
    labels: forecastData.map(item => new Date(item.dt_txt).toLocaleDateString()),
    datasets: [
      {
        label: 'Min Temperature (°C)',
        data: forecastData.map(item => item.main.temp_min),
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        fill: true,
      },
      {
        label: 'Max Temperature (°C)',
        data: forecastData.map(item => item.main.temp_max),
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        fill: true,
      }
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'white', 
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: `5-Day Temperature Trend for ${cityName.charAt(0).toUpperCase() + cityName.slice(1)}`,
        color: 'white', 
        font: {
          size: 20, 
        },
      },
      tooltip: {
        bodyFont: {
          size: 12, 
        },
        bodyColor: 'white', 
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'white', 
          font: {
            size: 12, 
          },
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)', 
        },
      },
      y: {
        ticks: {
          color: 'white', 
          font: {
            size: 12, 
          },
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)', 
        },
      },
    },
  };

  return (
    <div className="temperature-chart" style={{ width, height }}>
      <Line data={temperatureData} options={options} />
    </div>
  );
}

export default TemperatureChart;
