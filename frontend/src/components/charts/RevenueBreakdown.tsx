import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";

ChartJs.register(ArcElement, Tooltip, Legend);

const RevenueBreakdown = () => {
  const data = {
    labels: ["Rental Income", "Service Charges", "Utility Recoveries"],
    datasets: [
      {
        data: [70, 20, 10],
        backgroundColor: ["#4F46E5", "#10B981", "#F59E0B"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: "#E2E8F0",
        },
      },
    },
  };

  return (
    <div className="bg-slate-900/70 p-6 rounded-2xl border border-slate-800 shadow-lg backdrop-blur-md">
      <h2 className="text-lg font-semibold text-white mb-4">
        Revenue Breakdown
      </h2>
      <div className="w-52 mx-auto">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default RevenueBreakdown;
