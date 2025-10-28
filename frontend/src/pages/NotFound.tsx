import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-50 px-6">
      <AlertCircle className="w-16 h-16 text-red-500 mb-4" />
      <h1 className="text-4xl font-bold text-gray-800 mb-2">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-6 max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-5 py-2.5 rounded-xl text-black font-semibold transition-all"
      >
        Login
      </Link>
    </div>
  );
};

export default NotFound;
