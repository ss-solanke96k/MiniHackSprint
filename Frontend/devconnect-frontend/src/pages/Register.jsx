import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/Button';
import toast from 'react-hot-toast';

export const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if(formData.password !== formData.confirmPassword) return toast.error("Encryption keys do not match!");
    login(formData.email, formData.password);
    toast.success("Profile system deployed successfully!");
    navigate('/dashboard');
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-panel w-full max-w-md p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-white mb-2">Establish Developer Record</h2>
        <p className="text-slate-400 text-sm mb-6">Initialize node integration into the hub network[cite: 1].</p>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-slate-400 text-xs font-semibold mb-1">Display Alias / Name</label>
            <input type="text" required className="w-full px-4 py-2.5 rounded-xl glass-input text-sm" placeholder="Sayali" onChange={e => setFormData({...formData, name: e.target.value})} />
          </div>
          <div>
            <label className="block text-slate-400 text-xs font-semibold mb-1">Electronic Mail Address</label>
            <input type="email" required className="w-full px-4 py-2.5 rounded-xl glass-input text-sm" placeholder="sayali@devconnect.io" onChange={e => setFormData({...formData, email: e.target.value})} />
          </div>
          <div>
            <label className="block text-slate-400 text-xs font-semibold mb-1">Access Credentials</label>
            <input type="password" required className="w-full px-4 py-2.5 rounded-xl glass-input text-sm" placeholder="••••••••" onChange={e => setFormData({...formData, password: e.target.value})} />
          </div>
          <div>
            <label className="block text-slate-400 text-xs font-semibold mb-1">Confirm Access Credentials</label>
            <input type="password" required className="w-full px-4 py-2.5 rounded-xl glass-input text-sm" placeholder="••••••••" onChange={e => setFormData({...formData, confirmPassword: e.target.value})} />
          </div>
          <Button variant="primary" className="w-full py-3" type="submit">Deploy Network Profile</Button>
        </form>
      </motion.div>
    </div>
  );
};