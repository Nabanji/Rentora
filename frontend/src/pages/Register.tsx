import { Link } from "react-router-dom"
import { FcGoogle } from "react-icons/fc";

const Register: React.FC = () => {
  return (
    <div className="login-container w-full h-screen flex justify-center items-center border border-black p-2">
      <div className="w-100 text-center border border-gray-200 p-6 rounded-3xl shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <form className="w-full">

          <div className="w-full flex flex-col items-start">
            <label 
              htmlFor="name"
              className="text-base"
            >
              Full Name
            </label>
            <input 
              id="name"
              type="text" 
              name="name"
              placeholder="Enter your full name"
              className="w-full p-2 text-sm border border-gray-400 rounded-md mt-1 focus:outline-none focus:border-blue-700"
              required
            />
          </div>

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
              autoComplete="email"
              placeholder="you@example.com"
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
              placeholder="Enter your password"
              className="w-full p-2 border text-sm border-gray-400 rounded-md mt-1 focus:outline-none focus:border-blue-700"
              required
            />
          </div>

          <div className="w-full flex flex-col items-start mt-1">
            <label 
              htmlFor="confirmPassword"
              className="text-base"
            >
              Confirm Password:
            </label>
            <input 
              id="confirmPassword"
              type="password" 
              name="confirmPassword" 
              placeholder="Confirm your password" 
              className="w-full p-2 border text-sm border-gray-400 rounded-md mt-1 focus:outline-none focus:border-blue-700" 
              required
            />
          </div>

          <div className="my-4">
            <button 
              type="submit"
              className="w-full bg-blue-500 text-white text-sm p-2 rounded-lg cursor-pointer hover:bg-blue-600 transition-all"
            >
              Register
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
              Already have an account? <Link to="/" className="text-blue-500 hover:underline">Login</Link>
            </p>
          </div>


        </form>
      </div>
    </div>
  )
}

export default Register