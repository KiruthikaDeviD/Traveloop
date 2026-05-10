// src/pages/Login.jsx

import { motion } from "framer-motion";
import {
  User,
  Lock,
} from "lucide-react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import InputField from "../components/auth/InputField";

function Login() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full top-0 left-0"></div>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="
          w-full
          max-w-md
          bg-white/5
          backdrop-blur-xl
          border
          border-white/20
          rounded-3xl
          p-10
          shadow-2xl
        "
      >

        {/* Heading */}
        <h1 className="text-4xl font-bold text-white text-center mb-10">
          Traveloop
        </h1>

        {/* User Circle */}
        <div className="flex justify-center mb-8">

          <div
            className="
              w-24
              h-24
              rounded-full
              border-2
              border-cyan-400
              flex
              items-center
              justify-center
              bg-white/5
            "
          >
            <User
              size={40}
              className="text-cyan-300"
            />
          </div>

        </div>

        {/* Form */}
        <div className="space-y-5">

          <InputField
            icon={<User size={18} />}
            type="text"
            placeholder="Username"
          />

          <InputField
            icon={<Lock size={18} />}
            type="password"
            placeholder="Password"
          />

        </div>

        {/* Login Button */}
        <button
  type="button"
  onClick={() => navigate("/dashboard")}
  className="
    mt-8
    w-full
    bg-gradient-to-r
    from-cyan-500
    to-blue-600
    py-3
    rounded-xl
    text-white
    font-semibold
    hover:scale-105
    transition-all
    duration-300
    shadow-lg
    shadow-cyan-500/20
  "
>
  Login
</button>

        {/* Register Redirect */}
        <p className="text-center text-gray-400 mt-6">

          New User?{" "}

          <Link
            to="/register"
            className="text-cyan-400 hover:underline"
          >
            Register
          </Link>

        </p>

      </motion.div>
    </div>
  );
}

export default Login;