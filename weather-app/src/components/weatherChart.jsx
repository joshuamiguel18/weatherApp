import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js';
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)

const TemperatureGraph = ({ temps }) => {
  // State to store the temperature data
  const [temperature, setTemperature] = useState([]);
  const [timestamps, setTimestamps] = useState([]);

  useEffect(() => {
    if (temps && temps.list) {
      // Process the data and set it in the state
      const temperatureData = temps.list.filter(data2 => data2.dt_txt.split(' ')[1] === '00:00:00').map((data2) => data2.main.temp);
      const timestamps = temps.list
    .filter(data2 => data2.dt_txt.split(' ')[1] === '00:00:00')
    .map(data2 => {
      const date = new Date(data2.dt_txt);
      const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      const monthName = monthNames[date.getMonth()];
      const day = date.getDate(); 
      return `${monthName} ${day}`;
    });

      setTemperature(temperatureData);
      setTimestamps(timestamps);  
    }
  }, [temps]);

  const chartData = {
    labels: timestamps,
    datasets: [
      {
        label: 'Temperature',
        data: temperature, 
        fill: false,
        backgroundColor: 'transparent',
        borderColor: '#ff9500',
        tension: 0.3,
        pointBorderColor: 'transparent',
        pointBorderWidth: 4,
      }
    ]
  }
  const options = {
    plugins: {
      legend: false
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        ticks: {

          stepSize: 1,
          callback: (value) => value + "°",
        },

        
      }
    },
    maintainAspectRatio: false,
  }
  return (
    <div >
      <Line data={chartData} 
      height={400} 
      width={600} 
      options={options}
      />
    </div>
  );
};

export default TemperatureGraph;
