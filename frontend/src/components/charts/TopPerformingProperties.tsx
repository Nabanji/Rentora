import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const TopPerformingProperties = () => {
  const data = {
    labels: ["Downtown Loft", "Lakeview Villa", "Skyline Towers", "Garden Suites"],
    datasets: [
      {
        label: "Revenue ($)",
        data: [42000, 39000, 36000, 33000],
        backgroundColor: "#F59E0B",
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      x: { ticks: { color: "#94A3B8" }, grid: { display: false } },
      y: { ticks: { color: "#94A3B8" }, grid: { color: "#1E293B" } },
    },
  };

  return (
    <div className="bg-slate-900/70 p-6 rounded-2xl border border-slate-800 shadow-lg backdrop-blur-md">
      <h2 className="text-lg font-semibold text-white mb-4">
        Top Revenue Properties
      </h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default TopPerformingProperties;
