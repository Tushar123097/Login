import { useState } from 'react'
import { motion } from 'framer-motion'
import './App.css'

function App() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-screen flex p-4 md:p-8">
      {/* Left Section */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-1/2 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 flex flex-col items-center justify-center p-8 relative overflow-hidden rounded-2xl m-2"
      >
        <motion.div 
          className="text-center z-10 animate-float"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-white mb-4">Quote of the Day</h1>
          <p className="text-xl text-white italic">
            "Design is not just what it looks like and feels like. Design is how it works"
          </p>
        </motion.div>
        <div className="flex gap-4 mt-8 z-10">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsLogin(false)}
            className="px-6 py-2 bg-white text-purple-600 rounded-full hover:scale-105 transition-transform duration-300 animate-pulse"
          >
            Sign Up
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsLogin(true)}
            className="px-6 py-2 bg-white text-purple-600 rounded-full hover:scale-105 transition-transform duration-300 animate-pulse"
          >
            Login
          </motion.button>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-1/2 bg-white flex flex-col items-center justify-center p-8 rounded-2xl m-2 shadow-lg"
      >
        <motion.h2 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-3xl font-bold text-gray-800 mb-8"
        >
          Create Account
        </motion.h2>
        <motion.form 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-full max-w-md space-y-6"
        >
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <label className="block text-gray-700 mb-2">Full Name</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
              placeholder="Enter your full name"
            />
          </motion.div>
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <label className="block text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
              placeholder="Enter your email"
            />
          </motion.div>
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <label className="block text-gray-700 mb-2">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
              placeholder="Enter your password"
            />
          </motion.div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300 transform hover:scale-105"
          >
            Sign Up
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  )
}

export default App
