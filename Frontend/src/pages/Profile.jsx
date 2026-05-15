import React from 'react';
import { useAuth } from '../context/AuthContext';
import { MapPin, Briefcase } from 'lucide-react'; // FIXED: Github aur Linkedin dono imports se permanent hata diye
import { ProjectCard } from '../components/cards/ProjectCard';

export const Profile = () => {
  const { user } = useAuth();
  const personalProjects = [
    { 
      title: "Expense Tracker Architecture", 
      description: "MERN Stack deployment with clean lifecycle Hooks.", 
      tags: ["React", "Bootstrap"], 
      authorName: "Sayali", 
      likes: 32,
      comments: 5,
      liveLink: "#",
      githubLink: "#",
      image: ""
    }
  ];

  return (
    <div className="space-y-6">
      {/* Profile Cover Banner */}
      <div className="h-40 w-full bg-gradient-to-r from-indigo-900 to-purple-900 rounded-2xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>
      
      {/* User Info Avatar Section */}
      <div className="flex flex-col md:flex-row gap-6 items-start -mt-16 px-4 relative z-10">
        <img 
          src={user?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"} 
          alt="" 
          className="w-24 h-24 rounded-full border-4 border-darkbg object-cover shadow-xl" 
        />
        <div className="pt-12 md:pt-16 flex-grow">
          <h1 className="text-2xl font-black text-white">{user?.name || "Sayali"}</h1>
          <p className="text-slate-400 text-sm flex items-center gap-1.5 mt-1">
            <Briefcase size={14}/> Systems Architect / Student
          </p>
        </div>
      </div>

      {/* Grid Layout Layout Framework */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Left Side: Bio & Social Panel */}
        <div className="glass-panel p-5 rounded-2xl space-y-4">
          <h3 className="text-sm font-bold uppercase text-slate-400 tracking-wider">Bio-Description</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            {user?.bio || "Passionate full-stack developer focusing on modular architectures, optimization metrics, and premium user experiences."}
          </p>
          
          {/* Social Links Layout Area */}
          <div className="pt-2 flex gap-4 text-slate-400 items-center">
            
            {/* 100% Stable Inline SVG for GitHub (No Library Import Needed) */}
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" title="GitHub Profile">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>
            
            {/* FIXED & SAFE: 100% Stable Inline SVG for LinkedIn (No Library Import Needed) */}
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" title="LinkedIn Profile">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm10.934 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Right Side: Showcase Grid Dynamic Feed */}
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-lg font-bold text-white">Indexed Repositories & Work</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {personalProjects.map((p, i) => (
              <ProjectCard key={i} project={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};