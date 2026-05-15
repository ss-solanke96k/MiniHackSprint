import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';

export const BlogDetails = () => {
  const { id } = useParams();

  // Static fallback data matching your platform requirement
  const blog = {
    title: "Mastering Asynchronous Micro-tasks in JavaScript",
    author: "Sayali",
    date: "May 15, 2026",
    readingTime: "5 min read",
    category: "Architecture",
    content: "The JavaScript execution environment relies completely on standard queuing primitives. Microtask scheduling optimization processes dictate component layout updates, asynchronous batching, and functional hydration metrics. When you look deeper into execution layer loops, understanding how microtasks preempt macrotasks is essential for writing high-performance React web applications."
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      <Link to="/blogs" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-indigo-400 transition mb-4">
        <ArrowLeft size={16} /> Back to Technical Logs
      </Link>
      
      <div className="w-full h-64 md:h-96 bg-gradient-to-br from-indigo-950 to-slate-900 rounded-2xl overflow-hidden relative border border-glassborder flex items-center justify-center">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        <span className="absolute top-4 left-4 bg-indigo-500/20 text-indigo-300 text-xs font-semibold px-3 py-1 rounded-full border border-indigo-500/30">
          {blog.category}
        </span>
        <h1 className="text-2xl md:text-4xl font-black text-center text-white px-6 drop-shadow-md">{blog.title}</h1>
      </div>

      <div className="flex flex-wrap gap-4 items-center text-slate-400 text-xs sm:text-sm border-b border-glassborder pb-4">
        <div className="flex items-center gap-1.5">
          <User size={16} className="text-indigo-400" />
          <span>By <strong>{blog.author}</strong></span>
        </div>
        <div className="flex items-center gap-1.5">
          <Calendar size={16} />
          <span>{blog.date}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock size={16} />
          <span>{blog.readingTime}</span>
        </div>
      </div>

      <article className="prose prose-invert max-w-none">
        <p className="text-slate-300 leading-relaxed text-base md:text-lg whitespace-pre-line">
          {blog.content}
        </p>
      </article>
    </div>
  );
};