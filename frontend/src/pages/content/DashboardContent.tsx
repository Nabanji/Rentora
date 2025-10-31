import StatCard from "../../components/cards/StatCard";
import { Home, Users, DollarSign, Building2 } from "lucide-react";

const DashboardContent: React.FC = () => {
  return (
    <div className="flex-1 min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-gray-100 px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 tracking-tight text-white">
          Dashboard Overview
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard
            title="Total Properties"
            value="120"
            change="+12%"
            Icon={Home}
            iconColor="text-amber-400"
            bgGradient="from-amber-600/20 via-amber-500/10 to-transparent"
          />
          <StatCard
            title="Occupied Units"
            value="108"
            change="+5%"
            Icon={Building2}
            iconColor="text-indigo-400"
            bgGradient="from-indigo-600/20 via-indigo-500/10 to-transparent"
          />
          <StatCard
            title="Active Tenants"
            value="300"
            change="+8%"
            Icon={Users}
            iconColor="text-cyan-400"
            bgGradient="from-cyan-600/20 via-cyan-500/10 to-transparent"
          />
          <StatCard
            title="Monthly Revenue"
            value="$45,000"
            change="+18%"
            Icon={DollarSign}
            iconColor="text-emerald-400"
            bgGradient="from-emerald-600/20 via-emerald-500/10 to-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
