import React from 'react';
import { BlogCard } from '../components/cards/BlogCard';

export const Blogs = () => {
  const dataset = [
    { id: 1, title: "Mastering Asynchronous Micro-tasks", excerpt: "Deep execution layer diagnostic inspection of the event loop mechanism.", category: "Architecture", image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=500&q=80" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Technical Operation Logs</h1>
        <p className="text-slate-400 text-sm">Architectural thoughts and structural guides published by nodes[cite: 2].</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dataset.map((b, i) => <BlogCard key={i} blog={b} />)}
      </div>
    </div>
  );
};