import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
})

function NotFoundComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
      <div className="text-center p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl max-w-md mx-4">
        <div className="text-6xl mb-4">🔍</div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-xl text-gray-600 mb-6">Page Not Found</h2>
        <p className="text-gray-500 mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="space-y-4">
          <a
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
          >
            Go Home
          </a>
          <div className="text-sm text-gray-400">
            <a href="/login" className="hover:text-blue-600 transition-colors mr-4">
              Login
            </a>
            <a href="/register" className="hover:text-blue-600 transition-colors">
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function RootComponent() {
  return (
    <React.Fragment>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar/>
        <AnimatePresence mode="wait">
          <motion.div
            key={window.location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </React.Fragment>
  )
}
