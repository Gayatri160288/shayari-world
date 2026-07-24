import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

function CategoryChart({ data }) {
  const chartData = {
    labels: data.map((item) => item.name),

    datasets: [
      {
        label: "Shayaris",
        data: data.map((item) => Number(item.count)),

        backgroundColor: ["#ec4899", "#3b82f6", "#22c55e", "#f59e0b"],

        borderRadius: 12,
        borderSkipped: false,

        barPercentage: 0.6,
        categoryPercentage: 0.6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },

      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
}

export default CategoryChart;
