import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword: React.FC = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center border border-black p-2">
        <div className="w-100 text-center border border-gray-200 p-6 rounded-3xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">Forgot Password</h2>
            <p className="text-sm text-gray-600 mb-6">
                Enter your email address and we’ll send you instructions to reset your password.
            </p>

            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Email:</label>
                    <input
                        type="email"
                        name="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white rounded-lg cursor-pointer py-2 hover:bg-blue-700 transition"
                >
                    Send Reset Link
                </button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-6">
                Remember your password?{" "}
                <Link to="/" className="text-blue-600 hover:underline">
                    Login
                </Link>
            </p>
        </div>
      
    </div>
  );
};

export default ForgotPassword;
