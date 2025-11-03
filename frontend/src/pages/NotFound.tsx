import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-gray-100 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center bg-slate-900/70 backdrop-blur-xl border border-slate-700/50 shadow-[0_0_40px_rgba(99,102,241,0.15)] rounded-2xl px-10 py-12 max-w-md"
      >
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-rose-500 via-red-600 to-pink-600 flex items-center justify-center shadow-lg">
            <AlertCircle className="w-8 h-8 text-white" />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">404</h1>
        <h2 className="text-xl font-semibold text-gray-300 mb-3">Page Not Found</h2>

        <p className="text-gray-400 mb-8 text-sm leading-relaxed">
          Oops! The page you’re looking for doesn’t exist or might have been moved.
        </p>

        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-xl bg-linear-to-r from-indigo-600 to-purple-700 hover:from-indigo-500 hover:to-purple-600 text-white font-medium shadow-lg transition-all duration-300"
        >
          Back to Login
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
