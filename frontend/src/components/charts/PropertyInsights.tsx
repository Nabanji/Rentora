import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const PropertyInsights = () => {
  const data = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      { label: "Occupied", data: [300, 350, 400, 420], backgroundColor: "#4F46E5" },
      { label: "Vacant", data: [100, 80, 60, 50], backgroundColor: "#10B981" },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { labels: { color: "#E2E8F0" } } },
    scales: {
      x: { ticks: { color: "#94A3B8" }, grid: { color: "#1E293B" } },
      y: { ticks: { color: "#94A3B8" }, grid: { color: "#1E293B" } },
    },
  };

  return (
    <div className="bg-slate-900/70 p-6 rounded-2xl border border-slate-800 shadow-lg backdrop-blur-md">
      <h2 className="text-lg font-semibold text-white mb-4">
        Property Occupancy Insights
      </h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default PropertyInsights;
