import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageSquare, ExternalLink } from 'lucide-react'; 
import { Link } from 'react-router-dom';

export const ProjectCard = ({ project }) => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(project.likes || 12);

  const handleLike = (e) => {
    e.preventDefault();
    setLiked(!liked);
    setLikesCount(prev => liked ? prev - 1 : prev + 1);
  };

  return (
    <motion.div 
      whileHover={{ y: -6 }}
      className="glass-panel rounded-2xl overflow-hidden shadow-xl hover:border-indigo-500/40 transition-colors group flex flex-col h-full"
    >
      {/* Project Image Visualization Area */}
      <div className="relative overflow-hidden aspect-video bg-slate-800">
        <img 
          src={project.image || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 gap-3">
          <a href={project.liveLink || "#"} target="_blank" rel="noreferrer" className="p-2 bg-slate-900/80 text-white rounded-lg hover:bg-indigo-600 transition">
            <ExternalLink size={18} />
          </a>
          
          {/* SAFE BYPASS: Inline Production SVG for GitHub Icon (No Imports Needed) */}
          <a href={project.githubLink || "#"} target="_blank" rel="noreferrer" className="p-2 bg-slate-900/80 text-white rounded-lg hover:bg-indigo-600 transition" title="View Source Code">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </a>
        </div>
      </div>
      
      {/* Content Meta Information Area */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
        <p className="text-slate-400 text-sm line-clamp-2 mb-4 flex-grow">{project.description}</p>
        
        {/* Architecture Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags?.map((tag, i) => (
            <span key={i} className="text-xs font-medium bg-indigo-500/10 text-indigo-300 px-2.5 py-1 rounded-md border border-indigo-500/10">
              {tag}
            </span>
          ))}
        </div>

        {/* Footer Metrics Interaction Bar */}
        <div className="flex justify-between items-center pt-3 border-t border-glassborder mt-auto">
          <div className="flex items-center gap-2">
            <img src={project.authorAvatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"} alt="" className="w-6 h-6 rounded-full object-cover border border-glassborder" />
            <span className="text-xs text-slate-300">{project.authorName}</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400 text-sm">
            <button onClick={handleLike} className={`flex items-center gap-1 transition ${liked ? 'text-rose-500' : 'hover:text-rose-400'}`}>
              <Heart size={16} fill={liked ? "currentColor" : "none"} />
              <span>{likesCount}</span>
            </button>
            <Link to={`/projects`} className="flex items-center gap-1 hover:text-indigo-400 transition">
              <MessageSquare size={16} />
              <span>{project.comments || 4}</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};