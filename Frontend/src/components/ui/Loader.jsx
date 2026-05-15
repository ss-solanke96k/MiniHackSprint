import React from 'react';

export const Loader = () => (
  <div className="flex items-center justify-center h-48 w-full">
    <div className="relative w-12 h-12">
      <div className="absolute top-0 left-0 w-full h-full border-4 border-indigo-500/20 rounded-full"></div>
      <div className="absolute top-0 left-0 w-full h-full border-4 border-t-indigo-500 rounded-full animate-spin"></div>
    </div>
  </div>
);

export const SkeletonCard = () => (
  <div className="glass-panel p-5 rounded-2xl animate-pulse space-y-4">
    <div className="h-40 bg-slate-800 rounded-xl w-full"></div>
    <div className="h-4 bg-slate-800 rounded w-2/3"></div>
    <div className="h-3 bg-slate-800 rounded w-full"></div>
    <div className="h-8 bg-slate-800 rounded w-1/3 pt-2"></div>
  </div>
);