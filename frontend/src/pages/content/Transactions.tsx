import React, { useState, useMemo } from "react";
import Navbar from "../../components/Navbar";
import {
  ArrowDownCircle,
  ArrowUpCircle,
  Wallet,
  CreditCard,
  X,
} from "lucide-react";

const Transactions: React.FC = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      tenant: "James Kariuki",
      type: "Rent Payment",
      category: "Income",
      amount: 1200,
      date: "Oct 30, 2025",
      status: "Completed",
      method: "Bank Transfer",
    },
    {
      id: 2,
      tenant: "Lucy Wambui",
      type: "Maintenance Fee",
      category: "Expense",
      amount: 150,
      date: "Oct 28, 2025",
      status: "Pending",
      method: "M-Pesa",
    },
    {
      id: 3,
      tenant: "Brian Mwangi",
      type: "Rent Payment",
      category: "Income",
      amount: 1100,
      date: "Oct 26, 2025",
      status: "Completed",
      method: "Credit Card",
    },
    {
      id: 4,
      tenant: "Faith Njeri",
      type: "Late Fee",
      category: "Expense",
      amount: 50,
      date: "Oct 20, 2025",
      status: "Failed",
      method: "M-Pesa",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newTransaction, setNewTransaction] = useState({
    tenant: "",
    type: "",
    category: "Income",
    amount: "",
    method: "",
    status: "Pending",
  });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setNewTransaction({ ...newTransaction, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleAddTransaction = (e: React.FormEvent) => {
    e.preventDefault();
    const newEntry = {
      id: transactions.length + 1,
      ...newTransaction,
      amount: parseFloat(newTransaction.amount),
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    };
    setTransactions([...transactions, newEntry]);
    setShowModal(false);
    setNewTransaction({
      tenant: "",
      type: "",
      category: "Income",
      amount: "",
      method: "",
      status: "Pending",
    });
  };

  //Calculate totals based on category
  const { totalIncome, totalExpenses, netRevenue } = useMemo(() => {
    const income = transactions
      .filter((t) => t.status === "Completed" && t.category === "Income")
      .reduce((sum, t) => sum + t.amount, 0);

    const expenses = transactions
      .filter((t) => t.status === "Completed" && t.category === "Expense")
      .reduce((sum, t) => sum + t.amount, 0);

    return {
      totalIncome: income,
      totalExpenses: expenses,
      netRevenue: income - expenses,
    };
  }, [transactions]);

  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />

      {/* Main content */}
      <div className="flex-1 flex flex-col bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-gray-100">
        {/* Header */}
        <div className="flex justify-between items-center px-8 py-6 border-b border-slate-800/60">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Transactions
          </h1>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-linear-to-r from-indigo-600 to-purple-700 hover:from-indigo-500 hover:to-purple-600 text-white font-medium px-5 py-2.5 rounded-xl shadow-lg transition-all duration-300"
          >
            <Wallet size={18} />
            Add Transaction
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-8 py-6 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 shadow-md">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm text-gray-400">Total Income</h3>
                <ArrowDownCircle className="text-emerald-400" size={18} />
              </div>
              <p className="text-2xl font-bold text-white">
                ${totalIncome.toLocaleString()}
              </p>
              <p className="text-xs text-emerald-500 mt-1">+18% this month</p>
            </div>

            <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 shadow-md">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm text-gray-400">Expenses</h3>
                <ArrowUpCircle className="text-red-400" size={18} />
              </div>
              <p className="text-2xl font-bold text-white">
                ${totalExpenses.toLocaleString()}
              </p>
              <p className="text-xs text-red-500 mt-1">Maintenance & fees</p>
            </div>

            <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 shadow-md">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm text-gray-400">Net Revenue</h3>
                <CreditCard className="text-indigo-400" size={18} />
              </div>
              <p className="text-2xl font-bold text-white">
                ${netRevenue.toLocaleString()}
              </p>
              <p className="text-xs text-indigo-500 mt-1">After deductions</p>
            </div>
          </div>

          {/* Transaction Table */}
          <div className="bg-slate-900/70 rounded-2xl p-6 border border-slate-800 shadow-lg">
            <h2 className="text-lg font-semibold mb-4 text-white">
              Recent Transactions
            </h2>

            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="text-gray-400 border-b border-slate-800/70">
                  <th className="pb-3">Tenant</th>
                  <th className="pb-3">Type</th>
                  <th className="pb-3">Category</th>
                  <th className="pb-3">Method</th>
                  <th className="pb-3">Date</th>
                  <th className="pb-3">Amount</th>
                  <th className="pb-3 text-right">Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((t) => (
                  <tr
                    key={t.id}
                    className="border-b border-slate-800/40 hover:bg-slate-800/30 transition"
                  >
                    <td className="py-3 font-medium text-white">{t.tenant}</td>
                    <td>{t.type}</td>
                    <td>{t.category}</td>
                    <td>{t.method}</td>
                    <td>{t.date}</td>
                    <td>${t.amount.toLocaleString()}</td>
                    <td className="text-right">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          t.status === "Completed"
                            ? "bg-emerald-500/20 text-emerald-400"
                            : t.status === "Pending"
                            ? "bg-amber-500/20 text-amber-400"
                            : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {t.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add Transaction Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-slate-900 rounded-2xl p-6 w-full max-w-lg border border-slate-700 shadow-2xl relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>

            <h2 className="text-xl font-semibold text-white mb-4">
              Add New Transaction
            </h2>

            <form onSubmit={handleAddTransaction} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Tenant Name
                </label>
                <input
                  name="tenant"
                  value={newTransaction.tenant}
                  onChange={handleChange}
                  required
                  placeholder="e.g., James Kariuki"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Transaction Type
                </label>
                <input
                  name="type"
                  value={newTransaction.type}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Rent Payment or Maintenance Fee"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
                />
              </div>

              {/* New Category Dropdown */}
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Category
                </label>
                <select
                  name="category"
                  value={newTransaction.category}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
                >
                  <option value="Income">Income</option>
                  <option value="Expense">Expense</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Amount ($)
                  </label>
                  <input
                    name="amount"
                    value={newTransaction.amount}
                    onChange={handleChange}
                    required
                    type="number"
                    placeholder="e.g., 1200"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Payment Method
                  </label>
                  <input
                    name="method"
                    value={newTransaction.method}
                    onChange={handleChange}
                    required
                    placeholder="e.g., Bank Transfer"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Status
                </label>
                <select
                  name="status"
                  value={newTransaction.status}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
                >
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                  <option value="Failed">Failed</option>
                </select>
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
                  Save Transaction
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Transactions;
