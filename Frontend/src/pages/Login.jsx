import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/Button';
import toast from 'react-hot-toast';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!email || !password) return toast.error("Fill out all required parameters.");
    login(email, password);
    toast.success("Welcome back, dev!");
    navigate('/dashboard');
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="glass-panel w-full max-w-md p-8 rounded-2xl relative shadow-2xl">
        <h2 className="text-2xl font-bold text-white mb-2">Authenticate Identity</h2>
        <p className="text-slate-400 text-sm mb-6">Access your developer operational dashboard[cite: 1].</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Network Handle / Email</label>
            <input type="email" className="w-full px-4 py-3 rounded-xl glass-input text-sm" placeholder="sayali@devconnect.com" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Secure Cipher / Password</label>
            <input type="password" className="w-full px-4 py-3 rounded-xl glass-input text-sm" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <Button variant="primary" className="w-full py-3 mt-2" type="submit">Initialize Verification</Button>
        </form>
        <p className="text-center text-slate-400 text-xs mt-6">New terminal access sequence? <Link to="/register" className="text-indigo-400 hover:underline">Register Vector</Link></p>
      </motion.div>
    </div>
  );
};