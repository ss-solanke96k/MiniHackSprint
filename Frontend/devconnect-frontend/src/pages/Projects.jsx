import React, { useState } from 'react';
import { ProjectCard } from '../components/cards/ProjectCard';
import { Search, Filter } from 'lucide-react';

export const Projects = () => {
  const [query, setQuery] = useState('');
  const repositoryDataset = [
    { title: "E-Commerce Microservice", description: "Decoupled transaction handling matrix.", tags: ["NodeJS", "MongoDB"], authorName: "Alex", likes: 52 },
    { title: "React Context Formatter", description: "State compilation abstraction engine.", tags: ["React", "Vite"], authorName: "Sayali", likes: 21 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
      <div className="md:flex md:justify-between md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Global Project Exchange</h1>
          <p className="text-slate-400 text-sm">Analyze distributed systems deployed across the cluster[cite: 2].</p>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0 max-w-md w-full">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
            <input type="text" className="w-full pl-9 pr-4 py-2 rounded-xl glass-input text-sm" placeholder="Query tech stack..." value={query} onChange={e=>setQuery(e.target.value)} />
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {repositoryDataset.map((p, i) => <ProjectCard key={i} project={p} />)}
      </div>
    </div>
  );
};