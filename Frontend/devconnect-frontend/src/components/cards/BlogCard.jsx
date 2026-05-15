import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BlogCard = ({ blog }) => {
  return (
    <motion.div whileHover={{ y: -4 }} className="glass-panel rounded-2xl overflow-hidden flex flex-col h-full">
      <div className="h-48 bg-slate-800 relative">
        <img src={blog.image} alt="" className="w-full h-full object-cover" />
        <span className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-cyan-400 text-xs font-semibold px-3 py-1 rounded-full border border-glassborder">
          {blog.category}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-slate-400 text-xs mb-3">
          <Calendar size={14} />
          <span>{blog.date || "May 12, 2026"}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 hover:text-cyan-400 transition">{blog.title}</h3>
        <p className="text-slate-400 text-sm line-clamp-3 mb-4 flex-grow">{blog.excerpt}</p>
        
        <Link to={`/blogs/${blog.id}`} className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 mt-auto group">
          Read Full Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};