import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useAuth } from "../contexts/AuthContext.jsx";
import { motion } from "framer-motion";

export const Route = createFileRoute("/register")({
  component: Signup,
});

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleSignup = async (e) => {
    e.preventDefault();
    
    const result = await register(name, email, password);
    
    if (result.success) {
      setMessage(result.message);
      // Show success message for 2 seconds before redirecting
      setTimeout(() => {
        navigate({ to: "/login" });
      }, 2000);
    } else {
      setMessage(result.message);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen w-full flex justify-center items-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 p-4"
    >
      <motion.form
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          duration: 0.6, 
          ease: "easeOut",
          type: "spring",
          stiffness: 100
        }}
        onSubmit={handleSignup}
        className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100"
      >
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl font-bold mb-6 text-center text-gray-800"
        >
          Create Account ✨
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-4"
        >
          <motion.label 
            className="block text-sm font-medium mb-1 text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            Full Name
          </motion.label>
          <motion.input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            whileFocus={{ 
              scale: 1.02,
              boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)"
            }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-4"
        >
          <motion.label 
            className="block text-sm font-medium mb-1 text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            Email
          </motion.label>
          <motion.input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            whileFocus={{ 
              scale: 1.02,
              boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)"
            }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-6"
        >
          <motion.label 
            className="block text-sm font-medium mb-1 text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            Password
          </motion.label>
          <motion.input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            whileFocus={{ 
              scale: 1.02,
              boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)"
            }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          />
        </motion.div>

        <motion.button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          whileHover={{ 
            scale: 1.02,
            backgroundColor: "#2563eb",
            boxShadow: "0 10px 25px rgba(37, 99, 235, 0.3)"
          }}
          whileTap={{ scale: 0.98 }}
        >
          Sign Up
        </motion.button>

        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
        >
        {message && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`mt-4 text-center text-sm font-medium ${
                message.includes("Successfully") ? "text-green-500" : "text-red-500"
              }`}
            >
            {message}
            </motion.p>
          )}
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-6 text-center text-gray-600 text-sm"
        >
          Already have an account?{" "}
          <motion.button
            onClick={() => navigate({ to: "/login" })}
            className="text-blue-600 font-medium hover:underline cursor-pointer"
            whileHover={{ 
              scale: 1.05,
              color: "#1d4ed8"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Login
          </motion.button>
        </motion.p>
      </motion.form>
    </motion.div>
  );
}
