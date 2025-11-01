import Navbar from "../../components/Navbar";
import { Download, TrendingUp, DollarSign, Wallet } from "lucide-react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const Revenue: React.FC = () => {

  // Chart Data
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    datasets: [
      {
        label: "Monthly Revenue ($)",
        data: [4200, 4800, 5300, 6000, 7500, 8200, 8800, 9100, 9500],
        borderColor: "#6366f1",
        backgroundColor: "rgba(99,102,241,0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        ticks: { color: "#94a3b8" },
        grid: { color: "#1e293b" },
      },
      x: {
        ticks: { color: "#94a3b8" },
        grid: { color: "transparent" },
      },
    },
  };

  // Recent payments
  const payments = [
    {
      id: 1,
      tenant: "James Kariuki",
      property: "Sunset Apartments",
      date: "Oct 29, 2025",
      amount: "$1,200",
      status: "Paid",
    },
    {
      id: 2,
      tenant: "Lucy Wambui",
      property: "Palm View Villas",
      date: "Oct 28, 2025",
      amount: "$950",
      status: "Paid",
    },
    {
      id: 3,
      tenant: "Brian Mwangi",
      property: "Oak Residency",
      date: "Oct 27, 2025",
      amount: "$1,100",
      status: "Pending",
    },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-gray-100">
        
        {/* Header */}
        <div className="flex justify-between items-center px-8 py-6 border-b border-slate-800/60">
          <h1 className="text-3xl font-bold tracking-tight text-white">Revenue</h1>
          <button className="flex items-center gap-2 bg-linear-to-r from-indigo-600 to-purple-700 hover:from-indigo-500 hover:cursor-pointer hover:to-purple-600 text-white font-medium px-5 py-2.5 rounded-xl shadow-lg transition-all duration-300">
            <Download size={18} />
            Export Report
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-8 py-6 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">

          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 shadow-md">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm text-gray-400">Total Revenue</h3>
                <DollarSign className="text-emerald-400" size={18} />
              </div>
              <p className="text-2xl font-bold text-white">$82,300</p>
              <p className="text-xs text-emerald-500 mt-1">+12% from last month</p>
            </div>

            <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 shadow-md">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm text-gray-400">Pending Payments</h3>
                <Wallet className="text-amber-400" size={18} />
              </div>
              <p className="text-2xl font-bold text-white">$3,400</p>
              <p className="text-xs text-amber-500 mt-1">5 tenants pending</p>
            </div>

            <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 shadow-md">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm text-gray-400">Monthly Growth</h3>
                <TrendingUp className="text-indigo-400" size={18} />
              </div>
              <p className="text-2xl font-bold text-white">+8.5%</p>
              <p className="text-xs text-indigo-500 mt-1">Compared to last month</p>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-slate-900/70 rounded-2xl p-6 border border-slate-800 shadow-lg">
            <h2 className="text-lg font-semibold mb-4 text-white">Recent Payments</h2>
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="text-gray-400 border-b border-slate-800/70">
                  <th className="pb-3">Tenant</th>
                  <th className="pb-3">Property</th>
                  <th className="pb-3">Date</th>
                  <th className="pb-3">Amount</th>
                  <th className="pb-3 text-right">Status</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((p) => (
                  <tr key={p.id} className="border-b border-slate-800/40 hover:bg-slate-800/30 transition">
                    <td className="py-3">{p.tenant}</td>
                    <td>{p.property}</td>
                    <td>{p.date}</td>
                    <td>{p.amount}</td>
                    <td className="text-right">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          p.status === "Paid"
                            ? "bg-emerald-500/20 text-emerald-400"
                            : "bg-amber-500/20 text-amber-400"
                        }`}
                      >
                        {p.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Revenue Trend Chart */}
          <div className="w-full bg-slate-900/70 rounded-2xl p-6 border border-slate-800 shadow-lg mb-8">
            <h2 className="text-lg font-semibold mb-4 text-white">Revenue Trend</h2>
            <div className="h-72">
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Revenue;
