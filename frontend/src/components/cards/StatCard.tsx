import React from "react";
import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  changePositive?: boolean;
  Icon?: LucideIcon;
  iconColor?: string;
  bgGradient?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  changePositive = true,
  Icon,
  iconColor = "text-amber-400",
  bgGradient = "from-slate-900 via-slate-800 to-slate-700",
}) => {
  return (
    <div
      className={`flex items-center justify-between p-6 rounded-2xl bg-linear-to-br ${bgGradient} shadow-[0_8px_20px_rgba(0,0,0,0.4)] border border-slate-700 hover:shadow-[0_10px_25px_rgba(0,0,0,0.6)] hover:-translate-y-1 transition-all duration-300`}
    >
      <div>
        <p className="text-sm text-gray-400 font-medium tracking-wide">
          {title}
        </p>
        <h3 className="text-3xl font-extrabold text-white mt-2">{value}</h3>
        {change && (
          <p
            className={`text-sm mt-2 ${
              changePositive ? "text-emerald-400" : "text-rose-400"
            }`}
          >
            {changePositive ? "↑ Increased" : "↓ Decreased"} by{" "}
            <span className="font-semibold">{change}</span>
          </p>
        )}
      </div>
      {Icon && (
        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-linear-to-br from-slate-800 to-slate-700 border border-slate-600 shadow-inner`}
        >
          <Icon className={`${iconColor} w-7 h-7 drop-shadow-md`} />
        </div>
      )}
    </div>
  );
};

export default StatCard;
