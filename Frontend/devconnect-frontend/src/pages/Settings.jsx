import React from 'react';
import { Button } from '../components/ui/Button';
import toast from 'react-hot-toast';

export const Settings = () => {
  const save = (e) => { e.preventDefault(); toast.success("Configuration updated localized state."); };

  return (
    <div className="max-w-xl mx-auto glass-panel p-6 rounded-2xl">
      <h1 className="text-lg font-bold text-white mb-4">Configuration Environment</h1>
      <form onSubmit={save} className="space-y-4">
        <div>
          <label className="block text-xs text-slate-400 mb-1">Modify Alias Name</label>
          <input type="text" className="w-full rounded-xl glass-input text-sm px-4 py-2" defaultValue="Sayali" />
        </div>
        <Button variant="primary" type="submit">Update Configurations</Button>
      </form>
    </div>
  );
};