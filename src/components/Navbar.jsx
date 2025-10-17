import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineMenu } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import buildingicon from "../assets/buildingicon.png";
import { Link, useNavigate } from "@tanstack/react-router";
import { useAuth } from "../contexts/AuthContext.jsx";

const Navbar = () => {
  const [menubtn, setMenuBtn] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate({ to: "/" });
    setMenuBtn(false);
  };

  const nav = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Projects", path: "/projects" },
    { id: 4, name: "Gallery", path: "/gallery" },
    { id: 5, name: "Contact", path: "/contact" },
  ];

  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-between items-center bg-transparent shadow-md p-3 sm:w-full relative"
    >
      {/* Logo */}
      <motion.a 
        href="/"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <img src={buildingicon} className="h-8 pl-2 max-lg:h-10" alt="Logo" />
      </motion.a>

      {/* Desktop Navigation */}
      <motion.ul 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex font-medium gap-9 pr-14 max-lg:hidden"
      >
        {nav.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
          >
            <Link to={item.path}>
              <motion.li 
                className="cursor-pointer hover:text-red-500 transition duration-300"
                whileHover={{ 
                  scale: 1.05,
                  color: "#ef4444"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
              {item.name}
              </motion.li>
          </Link>
          </motion.div>
        ))}
      </motion.ul>

      {/* Desktop Sign In / Sign Up or User Info */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex justify-between gap-4 max-lg:hidden"
      >
        <AnimatePresence mode="wait">
          {user ? (
            <motion.div 
              key="user-info"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-4"
            >
              <motion.span 
                className="text-gray-700 font-medium"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                Hi, {user.name} 👋
              </motion.span>
              <motion.button
                onClick={handleLogout}
                className="bg-red-600 h-8 px-4 rounded-lg text-white text-sm font-semibold hover:bg-red-700 transition duration-300 flex items-center gap-2"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "#dc2626"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <MdLogout className="text-sm" />
                Logout
              </motion.button>
            </motion.div>
          ) : (
            <motion.div 
              key="auth-buttons"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="flex gap-4"
            >
        <Link to="/login">
                <motion.button 
                  className="bg-black h-8 px-4 rounded-lg text-white text-sm font-semibold hover:bg-gray-800 transition duration-300"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "#374151"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
            Sign In
                </motion.button>
        </Link>
              <Link to="/register">
                <motion.button 
                  className="bg-black h-8 px-4 rounded-lg text-white text-sm font-semibold hover:bg-gray-800 transition duration-300"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "#374151"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
            Sign Up
                </motion.button>
        </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* ✅ Mobile View: User Info or Sign In / Sign Up + Menu Button */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="lg:hidden flex items-center gap-3"
      >
        <AnimatePresence mode="wait">
          {user ? (
            <motion.div 
              key="mobile-user-info"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2"
            >
              {/* Mobile User Info */}
              <motion.span 
                className="text-gray-700 font-medium text-sm"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                Hi, {user.name} 👋
              </motion.span>
              <motion.button
                onClick={handleLogout}
                className="bg-red-600 px-3 py-1 rounded-lg text-white text-xs font-semibold hover:bg-red-700 transition duration-300 flex items-center gap-1"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "#dc2626"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <MdLogout className="text-xs" />
                Logout
              </motion.button>
            </motion.div>
          ) : (
            <motion.div 
              key="mobile-auth-buttons"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2"
            >
        {/* Mobile Sign Buttons */}
        <Link to="/login">
                <motion.button 
                  className="bg-black px-3 py-1 rounded-lg text-white text-xs font-semibold hover:bg-gray-800 transition duration-300"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "#374151"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
            Sign In
                </motion.button>
        </Link>
              <Link to="/register">
                <motion.button 
                  className="bg-black px-3 py-1 rounded-lg text-white text-xs font-semibold hover:bg-gray-800 transition duration-300"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "#374151"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
            Sign Up
                </motion.button>
        </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Menu Button */}
        <motion.button
          onClick={() => setMenuBtn(!menubtn)}
          className="text-3xl text-gray-800"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <motion.div
            animate={{ rotate: menubtn ? 90 : 0 }}
            transition={{ duration: 0.3 }}
        >
          <MdOutlineMenu />
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
      {menubtn && (
          <motion.ul 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-14 right-3 bg-white w-48 shadow-lg rounded-lg p-4 space-y-3 z-10"
          >
            {nav.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link to={item.path} onClick={() => setMenuBtn(false)}>
                  <motion.li 
                    className="cursor-pointer text-gray-800 hover:text-red-500 transition duration-300"
                    whileHover={{ 
                      scale: 1.05,
                      color: "#ef4444",
                      x: 5
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                {item.name}
                  </motion.li>
            </Link>
              </motion.div>
          ))}
          </motion.ul>
      )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
