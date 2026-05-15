import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FolderPlus, FileText, Settings, User, Search } from 'lucide-react';

export const Sidebar = () => {
  const links = [
    { to: "/dashboard", label: "Overview", icon: <LayoutDashboard size={18} /> },
    { to: "/profile", label: "My Profile", icon: <User size={18} /> },
    { to: "/add-project", label: "Share Project", icon: <FolderPlus size={18} /> },
    { to: "/blogs", label: "Read Blogs", icon: <FileText size={18} /> },
    { to: "/search", label: "Discover Devs", icon: <Search size={18} /> },
    { to: "/settings", label: "Account Settings", icon: <Settings size={18} /> },
  ];

  return (
    <aside className="w-64 glass-panel border-y-0 border-l-0 border-r border-glassborder h-[calc(100vh-4rem)] sticky top-16 hidden md:flex flex-col p-4 space-y-2">
      <div className="px-3 mb-6">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Developer Center</p>
      </div>
      {links.map((link, i) => (
        <NavLink
          key={i}
          to={link.to}
          className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all text-sm ${
            isActive 
              ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/10 text-indigo-400 border border-indigo-500/30' 
              : 'text-slate-400 hover:bg-slate-800/50 hover:text-white border border-transparent'
          }`}
        >
          {link.icon}
          {link.label}
        </NavLink>
      ))}
    </aside>
  );
};