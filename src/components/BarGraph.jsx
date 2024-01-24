//import React from 'react';

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
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

ChartJS.defaults.datasets.bar.maxBarThickness = 73;
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        font: { size: 16, weight: "bold", family: "Nunito" },
      },
    },
    title: {
      display: true,
      text: "Patients Consult Timeline",
      font: { size: 20, weight: "bold", family: "Nunito", color: "#c92b27" },
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',  'November', 'December'];

export const data = {
  labels,
  datasets: [
    {
      label: "Female",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(201,43,39,0.75)",
    },
    {
      label: "Male",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(16,13,177, .75)",
    },
  ],
};

export function BarGraph() {
  
  return (
    <div className='w-full'>
      <Bar options={options} data={data} />
    </div>
  );
}
