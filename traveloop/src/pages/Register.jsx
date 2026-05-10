// src/pages/Register.jsx

import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Globe,
} from "lucide-react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import InputField from "../components/auth/InputField";

function Register() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full bottom-0 right-0"></div>

      {/* Register Card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="
          w-full
          max-w-2xl
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
          Create Account
        </h1>

        {/* Profile Upload */}
        <div className="flex justify-center mb-8">
          <div
            className="
              w-28
              h-28
              rounded-full
              border-2
              border-purple-400
              flex
              items-center
              justify-center
              text-gray-300
              bg-white/5
              hover:scale-105
              transition
              cursor-pointer
            "
          >
            Photo
          </div>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <InputField
            icon={<User size={18} />}
            type="text"
            placeholder="First Name"
          />

          <InputField
            icon={<User size={18} />}
            type="text"
            placeholder="Last Name"
          />

          <InputField
            icon={<Mail size={18} />}
            type="email"
            placeholder="Email Address"
          />

          <InputField
            icon={<Phone size={18} />}
            type="text"
            placeholder="Phone Number"
          />

          <InputField
            icon={<MapPin size={18} />}
            type="text"
            placeholder="City"
          />

          <InputField
            icon={<Globe size={18} />}
            type="text"
            placeholder="Country"
          />

        </div>

        {/* Additional Info */}
        <textarea
          rows="4"
          placeholder="Additional Information..."
          className="
            mt-5
            w-full
            bg-black/40
            border
            border-white/20
            rounded-xl
            p-4
            text-white
            outline-none
            focus:border-purple-400
            resize-none
          "
        />

        {/* Register Button */}
        <button
          onClick={() => navigate("/dashboard")}
          className="
            mt-8
            w-full
            bg-gradient-to-r
            from-purple-500
            to-pink-600
            py-3
            rounded-xl
            text-white
            font-semibold
            hover:scale-105
            transition-all
            duration-300
            shadow-lg
            shadow-pink-500/20
          "
        >
          Register
        </button>

        {/* Login Redirect */}
        <p className="text-center text-gray-400 mt-6">

          Already have an account?{" "}

          <Link
            to="/"
            className="text-purple-400 hover:underline"
          >
            Login
          </Link>

        </p>

      </motion.div>
    </div>
  );
}

export default Register;