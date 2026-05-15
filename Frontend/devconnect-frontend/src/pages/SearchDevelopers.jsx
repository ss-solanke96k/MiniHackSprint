import React from 'react';
import { UserCard } from "../components/cards/UserCard";

export const SearchDevelopers = () => {
  const devs = [
    { name: "Devendra Dhote", title: "Systems Engineer", location: "India", skills: ["React", "Node.js", "Python"] },
    { name: "Alex Rivers", title: "UI/UX Researcher", location: "Remote", skills: ["Figma", "Tailwind", "CSS"] }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Discover Engineering Vectors</h1>
        <p className="text-slate-400 text-sm">Query active network profiles across localized skill vectors[cite: 2].</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {devs.map((d, i) => <UserCard key={i} dev={d} />)}
      </div>
    </div>
  );
};