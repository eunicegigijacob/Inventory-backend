import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
//   import { useEffect, useState } from "react";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: [
      "Budweiser",
      "Malta Guiness",
      "Budweiser",
      "Malta Guiness",
      "Budweiser",
    ],
    datasets: [
      {
        labels: "wee",
        data: [3, 6, 9, 10, 11],
        backgroundColor: "#2A5C99",
        borderColor: "#2A5C99",
        borderWidth: 1,
      },
      {
        labels: "bjj",
        data: [3, 6, 9, 10, 11],
        backgroundColor: "#A9BDD5",
        borderColor: "#A9BDD5",
        borderWidth: 1,
      },
    ],
  };
  const options = {
    scales: {
      x: {
        grid: { drawOnChartArea: false, drawTicks: false },
      },
      y: {
        grid: {
          drawOnChartArea: false,
          drawTicks: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div className="mb-5">
      <section className="bg-white rounded mt-4 hidden md:block">
        <h1 className="text-[24px] my-5">Top 5 products Inventory</h1>
        <p className="my-2">Inventory Vs Outflow</p>
        <div className="pl-9 border">
          <div className="-2 p-3 relative">
              <p className="rotate-item">Product Quantity</p>
            <Bar data={data} options={options} />
          </div>
        <p className="text-center mt-3 mb-3">Product</p>
        </div>
      </section>
    </div>
  );
};

export default BarChart;
