import React, { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import { motion } from "framer-motion";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setError(null);
    setLoading(true);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      setMessage("Password reset link sent! Check your email inbox.");
      setEmail("");
    }
  };

  return (
    <div className="w-full h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md bg-slate-900/70 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-[0_0_30px_rgba(99,102,241,0.2)] p-8 text-gray-100"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mx-auto w-12 h-12 rounded-2xl bg-linear-to-br from-indigo-500 via-blue-600 to-purple-700 flex items-center justify-center text-white font-extrabold text-lg shadow-md">
            R
          </div>
          <h2 className="text-2xl font-bold mt-4 tracking-tight text-white">
            Forgot Password
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Enter your email and we’ll send you a link to reset your password.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handlePasswordReset} className="space-y-5">
          {error && (
            <div className="w-full bg-red-500/10 border border-red-500/40 text-red-400 text-sm p-3 rounded-lg text-center">
              {error}
            </div>
          )}

          {message && (
            <div className="w-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 text-sm p-3 rounded-lg text-center">
              {message}
            </div>
          )}

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm text-gray-300 mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-slate-800/60 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-linear-to-r from-indigo-600 to-purple-700 hover:from-indigo-500 hover:to-purple-600 text-white font-medium py-2.5 rounded-xl shadow-lg transition-all duration-300 disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        {/* Back to login */}
        <p className="text-sm text-center text-gray-400 mt-6">
          Remember your password?{" "}
          <Link
            to="/"
            className="text-indigo-400 hover:text-indigo-300 transition"
          >
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
