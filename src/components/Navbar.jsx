import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineMenu, MdClose, MdLogout } from "react-icons/md";
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
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100 w-full"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 group"
          >
            <img
              src={buildingicon}
              className="h-7 w-7"
              alt="Architect IP Studios"
            />
            <span className="text-lg font-bold text-gray-900 hidden sm:inline">
              IP Studios
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex items-center gap-8"
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
                    className="text-sm font-medium text-gray-700 hover:text-teal-600 transition duration-300 cursor-pointer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.li>
                </Link>
              </motion.div>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden md:flex items-center gap-3"
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
                    className="text-sm font-medium text-gray-700"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    Hi, {user.name} 👋
                  </motion.span>
                  <motion.button
                    onClick={handleLogout}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-300 flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
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
                  className="flex gap-2"
                >
                  <Link to="/login">
                    <motion.button
                      className="text-gray-700 hover:text-teal-600 font-medium text-sm transition duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Sign In
                    </motion.button>
                  </Link>
                  <Link to="/register">
                    <motion.button
                      className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Sign Up
                    </motion.button>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <div className="md:hidden flex items-center gap-2">
            <AnimatePresence mode="wait">
              {user && (
                <motion.button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg text-xs font-medium transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <MdLogout className="text-sm" />
                </motion.button>
              )}
            </AnimatePresence>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setMenuBtn(!menubtn)}
              className="text-2xl text-gray-700 p-1"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {menubtn ? <MdClose /> : <MdOutlineMenu />}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menubtn && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden border-t border-gray-100 bg-white"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-2">
              {nav.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link to={item.path} onClick={() => setMenuBtn(false)}>
                    <motion.div
                      className="text-sm font-medium text-gray-700 hover:text-teal-600 py-2 transition duration-300 cursor-pointer"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.name}
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
              {!user && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="flex gap-2 pt-2 border-t border-gray-100"
                >
                  <Link to="/login" className="flex-1">
                    <motion.button
                      className="w-full text-gray-700 hover:text-teal-600 font-medium text-sm transition duration-300 py-2"
                      whileTap={{ scale: 0.95 }}
                    >
                      Sign In
                    </motion.button>
                  </Link>
                  <Link to="/register" className="flex-1">
                    <motion.button
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium text-sm rounded-lg transition duration-300 py-2"
                      whileTap={{ scale: 0.95 }}
                    >
                      Sign Up
                    </motion.button>
                  </Link>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
