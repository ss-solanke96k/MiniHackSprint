import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Terminal, LogOut, LayoutDashboard } from 'lucide-react';
import { useAuth } from '../../context/AuthContext'; // Fix 1: Added extra '../'
import { Button } from '../ui/Button';               // Fix 2: Changed path to find UI button

export const Navbar = () => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-darkbg/70 border-b border-glassborder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-white">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2 rounded-xl text-white">
              <Terminal size={20} />
            </div>
            <span>Dev<span className="text-indigo-400">Connect</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <Link to="/projects" className="hover:text-white transition">Explore Projects</Link>
            <Link to="/blogs" className="hover:text-white transition">Tech Blogs</Link>
            <Link to="/search" className="hover:text-white transition">Find Developers</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-4">
                <Link to="/dashboard" className="text-slate-300 hover:text-white transition flex items-center gap-1">
                  <LayoutDashboard size={16} /> Dashboard
                </Link>
                <Link to="/profile">
                  <img src={user.avatar} className="w-8 h-8 rounded-full border border-indigo-500 object-cover" alt="" />
                </Link>
                <button onClick={() => { logout(); navigate('/'); }} className="text-slate-400 hover:text-red-400 transition"><LogOut size={18}/></button>
              </div>
            ) : (
              <>
                <Link to="/login" className="text-slate-300 hover:text-white font-medium text-sm">Sign In</Link>
                <Button variant="primary" onClick={() => navigate('/register')}>Join Community</Button>
              </>
            )}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass-panel px-4 pt-2 pb-4 space-y-3 absolute w-full left-0 bg-darkbg/95">
          <Link to="/projects" className="block text-slate-300 py-2" onClick={() => setIsOpen(false)}>Explore Projects</Link>
          <Link to="/blogs" className="block text-slate-300 py-2" onClick={() => setIsOpen(false)}>Tech Blogs</Link>
          <Link to="/search" className="block text-slate-300 py-2" onClick={() => setIsOpen(false)}>Find Developers</Link>
          <hr className="border-glassborder" />
          {user ? (
            <>
              <Link to="/dashboard" className="block text-slate-300 py-1" onClick={() => setIsOpen(false)}>Dashboard</Link>
              <Link to="/profile" className="block text-slate-300 py-1" onClick={() => setIsOpen(false)}>My Profile</Link>
              <button onClick={() => { logout(); setIsOpen(false); navigate('/'); }} className="w-full text-left text-red-400 py-2">Sign Out</button>
            </>
          ) : (
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="secondary" className="w-full" onClick={() => { navigate('/login'); setIsOpen(false); }}>Sign In</Button>
              <Button variant="primary" className="w-full" onClick={() => { navigate('/register'); setIsOpen(false); }}>Join Community</Button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};