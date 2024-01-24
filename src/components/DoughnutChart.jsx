// import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
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
      text: "Your Patient Constitution",
      font: { size: 20, weight: "bold", family: "Nunito", color: "#c92b27" },
    },
  },
};

export const data = {
  labels: ["Male", "Female"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19],
      backgroundColor: [
        "rgba(16,13,177, .75)",
        "rgba(201,43,39,0.75)",
      
      ],
      // borderColor: [
      //   "rgba(255, 99, 132, 1)",
      //   "rgba(54, 162, 235, 1)",
     
      // ],
      borderWidth: 1,
    },
  ],
};

export function DoughNutChart() {
  return <Doughnut data={data} options={options} />;
}
