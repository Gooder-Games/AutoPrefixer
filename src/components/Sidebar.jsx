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
          <NavLink to="/" className="flex flex-col gap-1 group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-chunky transition-transform active:translate-y-0.5">
                <Rocket size={20} className="text-white" />
              </div>
              <span className="font-black text-2xl tracking-tighter text-white uppercase">AutoPrefixer</span>
            </div>
            <div className="flex items-center gap-2 ml-[52px]">
              <span className="px-2 py-0.5 bg-slate-800 text-[10px] font-black tracking-widest text-accent rounded-full border border-slate-700">v1.0.0</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Released</span>
            </div>
          </NavLink>


        <nav className="space-y-8">
          {navItems.map((section) => (
            <div key={section.label}>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-4 px-3">
                {section.label}
              </h3>
              <div className="space-y-1">
                {section.items.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) => 
                      `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                        isActive 
                          ? 'bg-accent text-white shadow-chunky' 
                          : 'text-slate-400 hover:text-white hover:bg-slate-800'
                      }`
                    }
                  >
                    <item.icon size={18} />
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
