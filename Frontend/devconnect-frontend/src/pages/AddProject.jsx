import React, { useState } from 'react';
import { Button } from "../components/ui/Button";
import { CloudUpload } from 'lucide-react';
import toast from 'react-hot-toast';

export const AddProject = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handlePublish = (e) => {
    e.preventDefault();
    toast.success("System architecture published to registry!");
    setTitle(''); setDesc('');
  };

  return (
    <div className="max-w-2xl mx-auto glass-panel p-8 rounded-2xl">
      <h1 className="text-xl font-bold text-white mb-2">Publish System Architecture</h1>
      <p className="text-slate-400 text-sm mb-6">Register your project codebase parameters to the community platform index[cite: 2].</p>
      
      <form onSubmit={handlePublish} className="space-y-5">
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Project Designation / Title</label>
          <input type="text" required className="w-full px-4 py-2.5 rounded-xl glass-input text-sm" placeholder="Dynamic UI Engine" value={title} onChange={e=>setTitle(e.target.value)} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Functional Description</label>
          <textarea rows={4} required className="w-full px-4 py-2.5 rounded-xl glass-input text-sm" placeholder="Provide deep architectural overview..." value={desc} onChange={e=>setDesc(e.target.value)} />
        </div>
        <div className="border-2 border-dashed border-glassborder rounded-xl p-6 text-center cursor-pointer hover:border-indigo-500 transition">
          <CloudUpload className="mx-auto text-slate-400 mb-2" size={32} />
          <p className="text-xs text-slate-400">Stage visualization metrics (PNG, JPEG up to 5MB)</p>
        </div>
        <Button variant="primary" type="submit" className="w-full py-3">Deploy Public Registry Node</Button>
      </form>
    </div>
  );
};