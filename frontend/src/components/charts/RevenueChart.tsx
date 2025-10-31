import { Line } from "react-chartjs-2";
import {
    Chart as ChartJs,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip
} from "chart.js";

ChartJs.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip);

const RevenueChart = () => {

    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Monthly Revenue",
                data: [4000, 6000, 5500, 8000, 7600, 9000, 11000, 9500, 10500, 12000],
                borderColor: "#10B981",
                backgroundColor: "rgba(16, 185, 129, 0.2)",
                tension: 0.4,
                fills: true,
            },
        ]
    };

    const options = {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
            x: { ticks: { color: "#94A3B8" }, grid: { color: "#1E293B" } },
            y: { ticks: { color: "#94A3B8" }, grid: { color: "#1E293B" } },
        },
    };

    return (
        <div className="bg-slate-900/70 p-6 rounded-2xl border border-slate-800 shadow-lg backdrop-blur-md">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-white">Monthly Revenue</h2>
                <button className="text-sm text-gray-400 hover:text-white transition">This year</button>
            </div>
            <Line data={data} options={options} />
        </div>
    )

}

export default RevenueChart;