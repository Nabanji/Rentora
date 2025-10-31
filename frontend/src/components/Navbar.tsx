import React from "react";
import {
  LayoutDashboard,
  BarChart3,
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
      //Clear session storage locally
      localStorage.clear();
      navigate("/");
    }
  };

  const navLinks = [
    { Icon: LayoutDashboard, title: "Dashboard", path: "/dashboard" },
    { Icon: BarChart3, title: "Revenue", path: "/revenue" },
    { Icon: Users, title: "Tenants", path: "/tenants" },
    { Icon: ReceiptText, title: "Transactions", path: "/transactions" },
    { Icon: Settings, title: "Settings", path: "/settings" },
  ];

  return (
    <aside className="h-screen w-72 bg-linear-to-b from-blue-50 via-white to-blue-50 border-r border-gray-200 shadow-sm flex flex-col justify-between">
      {/* Brand Header */}
      <div>
        <div className="flex pl-4 py-4 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-blue-700 tracking-tight">
            Rentora
          </h2>
        </div>

        {/* Nav Links */}
        <nav className="mt-6 px-4">
          <ul className="flex flex-col space-y-1">
            {navLinks.map(({ Icon, title, path }) => (
              <li key={title}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `
                      flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
                      ${isActive
                        ? "bg-blue-600 text-white shadow-md scale-[1.02]"
                        : "text-gray-600 hover:bg-blue-100 hover:text-blue-700"
                      }
                    `
                  }
                >
                  <Icon size={20} />
                  <span className="font-medium">{title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Footer / Logout Section */}
      <div className="px-4 pb-6 border-t border-gray-200">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all duration-200"
        >
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>

        <p className="text-xs text-center text-gray-400 mt-4">
          © {new Date().getFullYear()} Rentora
        </p>
      </div>
    </aside>
  );
};

export default Navbar;
