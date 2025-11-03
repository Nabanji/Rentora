import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { Users, Home, DollarSign, Plus, X, Check } from "lucide-react";

const Tenants: React.FC = () => {
  const [tenants, setTenants] = useState([
    {
      id: 1,
      name: "James Kariuki",
      property: "Sunset Apartments",
      unit: "A-203",
      rent: "$1,200",
      status: "Paid",
      email: "james.kariuki@email.com",
      phone: "+254 712 456 890",
    },
    {
      id: 2,
      name: "Lucy Wambui",
      property: "Palm View Villas",
      unit: "B-101",
      rent: "$950",
      status: "Pending",
      email: "lucy.wambui@email.com",
      phone: "+254 710 987 654",
    },
    {
      id: 3,
      name: "Brian Mwangi",
      property: "Oak Residency",
      unit: "C-402",
      rent: "$1,100",
      status: "Paid",
      email: "brian.mwangi@email.com",
      phone: "+254 733 567 111",
    },
    {
      id: 4,
      name: "Faith Njeri",
      property: "Emerald Heights",
      unit: "D-105",
      rent: "$1,050",
      status: "Overdue",
      email: "faith.njeri@email.com",
      phone: "+254 722 345 678",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newTenant, setNewTenant] = useState({
    name: "",
    property: "",
    unit: "",
    rent: "",
    status: "Pending",
    email: "",
    phone: "",
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTenant({ ...newTenant, [e.target.name]: e.target.value });
  };

  // Handle add tenant
  const handleAddTenant = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedRent = `$${parseFloat(newTenant.rent).toLocaleString()}`;
    const newEntry = {
      id: tenants.length + 1,
      ...newTenant,
      rent: formattedRent,
    };
    setTenants([...tenants, newEntry]);
    setShowModal(false);
    setNewTenant({
      name: "",
      property: "",
      unit: "",
      rent: "",
      status: "Pending",
      email: "",
      phone: "",
    });
  };

  // ✅ Handle mark as paid
  const handleMarkAsPaid = (id: number) => {
    const updatedTenants = tenants.map((tenant) =>
      tenant.id === id ? { ...tenant, status: "Paid" } : tenant
    );
    setTenants(updatedTenants);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />

      {/* Main content */}
      <div className="flex-1 flex flex-col bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-gray-100">
        
        {/* Header */}
        <div className="flex justify-between items-center px-8 py-6 border-b border-slate-800/60">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Tenants
          </h1>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-linear-to-r from-indigo-600 to-purple-700 hover:from-indigo-500 hover:to-purple-600 text-white cursor-pointer font-medium px-5 py-2.5 rounded-xl shadow-lg transition-all duration-300"
          >
            <Plus size={18} />
            Add Tenant
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-8 py-6 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">

          {/* Tenant Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 shadow-md">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm text-gray-400">Total Tenants</h3>
                <Users className="text-cyan-400" size={18} />
              </div>
              <p className="text-2xl font-bold text-white">{tenants.length}</p>
              <p className="text-xs text-cyan-500 mt-1">+12 new this month</p>
            </div>

            <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 shadow-md">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm text-gray-400">Occupied Units</h3>
                <Home className="text-emerald-400" size={18} />
              </div>
              <p className="text-2xl font-bold text-white">108</p>
              <p className="text-xs text-emerald-500 mt-1">90% occupancy rate</p>
            </div>

            <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 shadow-md">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm text-gray-400">Rent Collection Rate</h3>
                <DollarSign className="text-indigo-400" size={18} />
              </div>
              <p className="text-2xl font-bold text-white">96%</p>
              <p className="text-xs text-indigo-500 mt-1">This month’s performance</p>
            </div>
          </div>

          {/* Tenant Table */}
          <div className="bg-slate-900/70 rounded-2xl p-6 border border-slate-800 shadow-lg">
            <h2 className="text-lg font-semibold mb-4 text-white">
              Tenant Directory
            </h2>

            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="text-gray-400 border-b border-slate-800/70">
                  <th className="pb-3">Tenant</th>
                  <th className="pb-3">Property</th>
                  <th className="pb-3">Unit</th>
                  <th className="pb-3">Rent</th>
                  <th className="pb-3">Contact</th>
                  <th className="pb-3 text-right">Status</th>
                </tr>
              </thead>
              <tbody>
                {tenants.map((t) => (
                  <tr
                    key={t.id}
                    className="border-b border-slate-800/40 hover:bg-slate-800/30 transition"
                  >
                    <td className="py-3 font-medium text-white">{t.name}</td>
                    <td>{t.property}</td>
                    <td>{t.unit}</td>
                    <td>{t.rent}</td>
                    <td>
                      <div className="flex flex-col">
                        <span>{t.email}</span>
                        <span className="text-gray-500 text-xs">{t.phone}</span>
                      </div>
                    </td>
                    <td className="text-right">
                      <div className="flex justify-end items-center gap-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            t.status === "Paid"
                              ? "bg-emerald-500/20 text-emerald-400"
                              : t.status === "Pending"
                              ? "bg-amber-500/20 text-amber-400"
                              : "bg-red-500/20 text-red-400"
                          }`}
                        >
                          {t.status}
                        </span>
                        {t.status !== "Paid" && (
                          <button
                            onClick={() => handleMarkAsPaid(t.id)}
                            className="flex items-center gap-1 text-xs bg-emerald-600 hover:bg-emerald-500 text-white px-2 py-1 rounded-md transition cursor-pointer"
                          >
                            <Check size={14} />
                            Mark as Paid
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add Tenant Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-slate-900 rounded-2xl p-6 w-full max-w-lg border border-slate-700 shadow-2xl relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>

            <h2 className="text-xl font-semibold text-white mb-4">Add New Tenant</h2>

            <form onSubmit={handleAddTenant} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Full Name</label>
                <input
                  name="name"
                  value={newTenant.name}
                  onChange={handleChange}
                  type="text"
                  required
                  placeholder="e.g., James Kariuki"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">Property</label>
                <input
                  name="property"
                  value={newTenant.property}
                  onChange={handleChange}
                  type="text"
                  required
                  placeholder="e.g., Sunset Apartments"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Unit</label>
                  <input
                    name="unit"
                    value={newTenant.unit}
                    onChange={handleChange}
                    type="text"
                    required
                    placeholder="e.g., A-203"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Rent ($)</label>
                  <input
                    name="rent"
                    value={newTenant.rent}
                    onChange={handleChange}
                    type="number"
                    required
                    placeholder="e.g., 1200"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Email</label>
                  <input
                    name="email"
                    value={newTenant.email}
                    onChange={handleChange}
                    type="email"
                    required
                    placeholder="e.g., james.kariuki@email.com"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Phone</label>
                  <input
                    name="phone"
                    value={newTenant.phone}
                    onChange={handleChange}
                    type="text"
                    required
                    placeholder="e.g., +254 712 456 890"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-lg text-sm bg-slate-700 text-gray-300 hover:bg-slate-600 mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg text-sm bg-indigo-600 hover:bg-indigo-500 text-white"
                >
                  Save Tenant
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tenants;
