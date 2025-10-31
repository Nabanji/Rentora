import StatCard from "../../components/cards/StatCard";
import RevenueChart from "../../components/charts/RevenueChart";
import RevenueBreakdown from "../../components/charts/RevenueBreakdown";
import TopPerformingProperties from "../../components/charts/TopPerformingProperties";
import PropertyInsights from "../../components/charts/PropertyInsights";
import { Home, Users, DollarSign, Building2 } from "lucide-react";

const DashboardContent: React.FC = () => {

  const statCardContent = [
    {
      title: "Total Properties",
      value: "120",
      change: "+12%",
      Icon: Home,
      iconColor: "text-amber-400",
      bgGradient: "from-amber-600/20 via-amber-500/10 to-transparent",
    },
    {
      title: "Occupied Units",
      value: "108",
      change: "+5%",
      Icon: Building2,
      iconColor: "text-indigo-400",
      bgGradient: "from-indigo-600/20 via-indigo-500/10 to-transparent",
    },
    {
      title: "Active Tenants",
      value: "300",
      change: "+8%",
      Icon: Users,
      iconColor: "text-cyan-400",
      bgGradient: "from-cyan-600/20 via-cyan-500/10 to-transparent",
    },
    {
      title: "Monthly Revenue",
      value: "$45,000",
      change: "+18%",
      Icon: DollarSign,
      iconColor: "text-emerald-400",
      bgGradient: "from-emerald-600/20 via-emerald-500/10 to-transparent",
    },
  ]

  return (
    <div className="flex-1 bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-gray-100 px-8 py-8 ">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 tracking-tight text-white">
          Dashboard Overview
        </h1>

        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statCardContent.map((stats, index) => (
            <StatCard
              key={index}
              title={stats.title}
              value={stats.value}
              change={stats.change}
              Icon={stats.Icon}
              iconColor={stats.iconColor}
              bgGradient={stats.bgGradient}
           />
          ))}
        </div>

        {/* Charts section */}
        <div className="my-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <RevenueChart />
          </div>
          <RevenueBreakdown />
        </div>

        {/* Insights section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <PropertyInsights />
          </div>
          <TopPerformingProperties />
        </div>

      </div>
    </div>
  );
};

export default DashboardContent;