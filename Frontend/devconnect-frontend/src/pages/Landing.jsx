import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Cpu, Rocket, Users2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ProjectCard } from '../components/cards/ProjectCard';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../components/common/Footer';

export const Landing = () => {
  const navigate = useNavigate();
  const dummyProjects = [
    { title: "AI Image Generator", description: "State of the art canvas orchestration framework.", tags: ["React", "Python"], authorName: "Sayali", likes: 45 },
    { title: "Fintech Ledger Platform", description: "High throughput cryptographic distributed expense engine.", tags: ["NodeJS", "PostgreSQL"], authorName: "Devendra", likes: 89 }
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center px-4 py-20 relative">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
        <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-xs uppercase tracking-widest font-bold bg-indigo-500/10 text-indigo-400 px-4 py-1.5 rounded-full border border-indigo-500/20">
          The Developer Ecosystem Hub
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-black text-white mt-6 tracking-tight leading-tight">
          Where Engineers Connect & <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">Showcase Reality.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-slate-400 max-w-2xl mx-auto mt-6 text-base md:text-lg">
          Publish production projects, craft architectural technical logs, receive community validation, and build global development networks[cite: 1, 2, 3].
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex justify-center gap-4 mt-10">
          <Button variant="primary" onClick={() => navigate('/register')}>Get Started Free <ArrowRight size={16} /></Button>
          <Button variant="secondary" onClick={() => navigate('/projects')}>Explore Showcases</Button>
        </motion.div>
      </section>

      {/* Featured Grid Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 border-t border-glassborder">
        <h2 className="text-2xl font-extrabold text-white mb-8">Trending Ecosystem Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyProjects.map((p, i) => <ProjectCard key={i} project={p} />)}
        </div>
      </section>
      <Footer />
    </div>
  );
};