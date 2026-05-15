import React from 'react';
import { Terminal } from 'lucide-react';

export const Footer = () => (
  <footer className="border-t border-glassborder bg-slate-950/40 py-12">
    <div className="max-w-7xl mx-auto px-4 text-center md:flex md:justify-between md:text-left items-center">
      <div className="flex items-center justify-center md:justify-start gap-2 text-lg font-bold text-white mb-4 md:mb-0">
        <div className="bg-indigo-600 p-1.5 rounded-lg"><Terminal size={16}/></div>
        <span>DevConnect</span>
      </div>
      <p className="text-slate-500 text-sm">© 2026 DevConnect Engine. Built for the future of engineering.</p>
    </div>
  </footer>
);