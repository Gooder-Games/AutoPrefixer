import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Rocket, 
  Book, 
  Pencil, 
  Settings, 
  Info, 
  Layout, 
  Layers 
} from 'lucide-react'

const navItems = [
  { label: 'Getting Started', items: [
    { label: 'Overview', path: '/', icon: Rocket },
    { label: 'Installation', path: '/getting-started', icon: Layers }
  ]},
  { label: 'Guides', items: [
    { label: 'Asset Naming', path: '/asset-naming', icon: Pencil },
    { label: 'Prefix Scrubbing', path: '/prefix-scrubbing', icon: Book },
    { label: 'Organization', path: '/organization', icon: Layout }
  ]},
  { label: 'Reference', items: [
    { label: 'Project Settings', path: '/project-settings', icon: Settings },
    { label: 'Technical Details', path: '/technical-details', icon: Info }
  ]}
]

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <motion.aside
      initial={false}
      animate={{ x: isSidebarOpen ? 0 : -256 }}
      className="fixed top-0 left-0 h-full w-64 glass border-r border-slate-800/50 z-40 overflow-y-auto"
    >
      <div className="p-8">
        <NavLink to="/" className="flex items-center gap-3 mb-12">
          <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center">
            <Rocket size={18} className="text-white" />
          </div>
          <span className="font-extrabold text-xl tracking-tight text-white">AutoPrefixer</span>
        </NavLink>

        <nav className="space-y-8">
          {navItems.map((section) => (
            <div key={section.label}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 px-3">
                {section.label}
              </h3>
              <div className="space-y-1">
                {section.items.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) => 
                      `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive 
                          ? 'bg-sky-500/10 text-sky-400 border-r-2 border-sky-400' 
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                      }`
                    }
                  >
                    <item.icon size={16} />
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </motion.aside>
  )
}

export default Sidebar
