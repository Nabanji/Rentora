import React from "react";
import {
  LayoutDashboard,
  BarChart3,
  Building,
  ReceiptText,
  Settings,
  Users,
  LogOut,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut({ scope: "global" });
      if (error) throw error;
      console.log("Signed out successfully");
      navigate("/");
    } catch (error) {
      console.error("Sign out error:", error);
    } finally {
      localStorage.clear();
      navigate("/");
    }
  };

  const navLinks = [
    { Icon: LayoutDashboard, title: "Dashboard", path: "/dashboard" },
    { Icon: Building, title: "Properties", path: "/properties" },
    { Icon: BarChart3, title: "Revenue", path: "/revenue" },
    { Icon: Users, title: "Tenants", path: "/tenants" },
    { Icon: ReceiptText, title: "Transactions", path: "/transactions" },
    // { Icon: Settings, title: "Settings", path: "/settings" },
  ];

  return (
    <aside className="h-screen w-72 bg-linear-to-b from-slate-950 via-slate-900 to-slate-800 text-gray-100 flex flex-col justify-between shadow-[0_8px_25px_rgba(0,0,0,0.6)] border-r border-slate-700/40">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 px-6 py-6 bg-slate-900/60 border-b border-slate-700/50 backdrop-blur-sm shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-linear-to-br from-indigo-500 via-blue-600 to-purple-700 flex items-center justify-center text-white font-extrabold text-lg shadow-md">
            R
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Rentora
          </h2>
        </div>

        {/* Nav Links */}
        <nav className="mt-8 px-3">
          <ul className="flex flex-col space-y-2">
            {navLinks.map(({ Icon, title, path }) => (
              <li key={title}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `
                    flex items-center gap-3 px-5 py-3 rounded-xl font-medium tracking-wide transition-all duration-300
                    ${
                      isActive
                        ? "bg-linear-to-r from-indigo-600/90 to-purple-700/90 text-white shadow-[0_4px_15px_rgba(99,102,241,0.4)] scale-[1.02]"
                        : "text-gray-300 hover:bg-slate-800/70 hover:text-white hover:scale-[1.02] hover:shadow-md"
                    }
                  `
                  }
                >
                  <Icon size={20} className="shrink-0" />
                  <span>{title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Footer */}
      <div className="px-5 pb-8 border-t border-slate-700/50 bg-slate-900/60 backdrop-blur-sm">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-300 hover:bg-red-600/20 hover:text-white transition-all duration-300"
        >
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
        <p className="text-xs text-center text-gray-500 mt-4 tracking-wide">
          © {new Date().getFullYear()} Rentora
        </p>
      </div>
    </aside>
  );
};

export default Navbar;
