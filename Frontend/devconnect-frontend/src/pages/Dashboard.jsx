import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Eye, Flame, Code, Bell } from 'lucide-react';

export const Dashboard = () => {
  const { user } = useAuth();

  const metrics = [
    { title: "Total Project Interactions", count: "1,248", icon: <Eye className="text-cyan-400" /> },
    { title: "System Contribution Streak", count: "14 Days", icon: <Flame className="text-orange-500" /> },
    { title: "Active Deployments Indexed", count: "8 Systems", icon: <Code className="text-indigo-400" /> }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white">System Command Desk</h1>
        <p className="text-slate-400 text-sm">Welcome operational unit: {user?.name || 'Sayali'}</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {metrics.map((m, i) => (
          <div key={i} className="glass-panel p-6 rounded-2xl flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400 font-medium">{m.title}</p>
              <p className="text-2xl font-extrabold text-white mt-1">{m.count}</p>
            </div>
            <div className="p-3 bg-slate-800 rounded-xl">{m.icon}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-panel p-6 rounded-2xl">
          <h2 className="text-lg font-bold text-white mb-4">Pipeline Operation Log</h2>
          <div className="text-slate-400 text-sm py-8 text-center">
            No diagnostic anomalies reported. Production interfaces are nominal.
          </div>
        </div>
        <div className="glass-panel p-6 rounded-2xl">
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Bell size={18}/> Notifications</h2>
          <div className="space-y-3">
            <div className="p-3 bg-slate-800/40 rounded-xl border border-glassborder text-xs text-slate-300">
              <strong>Devendra Sir</strong> mentioned you in a code review request[cite: 3].
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};