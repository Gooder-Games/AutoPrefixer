import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import MarkdownRenderer from './components/MarkdownRenderer'

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true)
  const location = useLocation()

  return (
    <div className="flex min-h-screen bg-[#0f1115] text-white">
      {/* Background Glow */}
      <div className="fixed top-[-100px] left-[-100px] w-96 h-96 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-100px] right-[-100px] w-96 h-96 bg-accent/3 blur-[120px] rounded-full pointer-events-none" />


      <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <Header setSidebarOpen={setSidebarOpen} isSidebarOpen={isSidebarOpen} />
        
        <main className="max-w-4xl mx-auto px-6 py-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Routes>
                <Route path="/" element={<MarkdownRenderer slug="index" />} />
                <Route path="/getting-started" element={<MarkdownRenderer slug="getting-started" />} />
                <Route path="/asset-naming" element={<MarkdownRenderer slug="asset-naming" />} />
                <Route path="/prefix-scrubbing" element={<MarkdownRenderer slug="prefix-scrubbing" />} />
                <Route path="/organization" element={<MarkdownRenderer slug="organization" />} />
                <Route path="/project-settings" element={<MarkdownRenderer slug="project-settings" />} />
                <Route path="/technical-details" element={<MarkdownRenderer slug="technical-details" />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}

export default App
