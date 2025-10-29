import { Link, useNavigate } from "react-router-dom"
import { FcGoogle } from "react-icons/fc";
import { supabase } from "../supabaseClient";
import React, { useState } from "react";

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {

  const [ formData, setFormData ] = useState<FormData>({
    email: '',
    password: ''
  });

  const [ error, setError ] = useState<string | null>(null);
  const [ loading, setLoading ] = useState<boolean>(false);

  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle Form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // Supabase sign-in
    const { data, error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      console.error("Login error:", error);
    } else {
      console.log("User logged in:", data);
      navigate("/dashboard");
    }
  }

  return (
    <div className="login-container w-full h-screen flex justify-center items-center border border-black p-2">
      <div className="w-100 text-center border border-gray-200 p-6 rounded-3xl shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form className="w-full" onSubmit={handleSubmit}>
          {error && <div className="w-full bg-red-100 text-red-700 p-2 mb-4 rounded-md">{error}</div>}

          <div className="w-full flex flex-col items-start">
            <label 
              htmlFor="email"
              className="text-base"
            >
              Email:
            </label>
            <input 
              id="email"
              type="email"
              name="email" 
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              autoComplete="email"
              className="w-full p-2 text-sm border border-gray-400 rounded-md mt-1 focus:outline-none focus:border-blue-700"
              required
            />
          </div>

          <div className="w-full flex flex-col items-start mt-1">
            <label 
              htmlFor="password"
              className="text-base"
            >
              Password:
            </label>
            <input 
              id="password"
              type="password"
              name="password" 
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full p-2 border text-sm border-gray-400 rounded-md mt-1 focus:outline-none focus:border-blue-700"
              required
            />
          </div>

          <div className="w-full items-end text-right m-2">
            <p className="text-sm mr-2"> <Link to="/forgot-password" className="text-blue-500 hover:underline">Forgot password?</Link></p>
          </div>

          <div className="my-3">
            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white text-sm p-2 rounded-lg cursor-pointer hover:bg-blue-600 transition-all"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>

          <div className="flex items-center my-4">
            <hr className="grow border-t border-gray-300" />
            <span className="mx-2 text-gray-500 text-sm">or</span>
            <hr className="grow border-t border-gray-300" />
          </div>

          <div className="w-full border border-gray-300 rounded-lg p-2 cursor-pointer hover:shadow-md transition-all flex justify-center items-center">
            <div className="link-container">
              <FcGoogle size={24}/> 
            </div>
          </div>

          <div>
            <p className="text-sm mt-4">
              Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Register</Link>
            </p>
          </div>


        </form>
      </div>
    </div>
  )
}

export default Login