import React from 'react'
import { Menu, Search, Github, Globe } from 'lucide-react'

const Header = ({ setSidebarOpen, isSidebarOpen }) => {
  return (
    <header className="sticky top-0 z-30 glass-nav h-16 w-full flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <button 
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className="p-2 hover:bg-slate-800/50 rounded-lg text-slate-400 hover:text-slate-200 transition-colors"
        >
          <Menu size={20} />
        </button>

        <div className="relative group hidden sm:block">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-slate-500 group-hover:text-slate-400 transition-colors">
            <Search size={16} />
          </div>
          <input 
            type="text" 
            placeholder="Search documentation..." 
            className="bg-slate-900/50 border border-slate-800/80 rounded-full py-1.5 pl-10 pr-4 text-sm w-64 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/30 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <a 
          href="https://gooder.games" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-2 hover:bg-slate-800/50 rounded-lg text-slate-400 hover:text-slate-200 transition-colors"
          title="Gooder Games"
        >
          <Globe size={20} />
        </a>
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-slate-100 text-slate-900 px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-white transition-colors"
        >
          View Fab Store
        </a>
      </div>
    </header>
  )
}

export default Header
