import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Code, UserPlus, UserCheck } from 'lucide-react';
import { Button } from "../ui/Button";
import { Link } from 'react-router-dom';


export const UserCard = ({ dev }) => {
  const [following, setFollowing] = useState(false);

  return (
    <motion.div whileHover={{ scale: 1.01 }} className="glass-panel rounded-2xl p-6 text-center relative flex flex-col items-center">
      <img src={dev.avatar} alt={dev.name} className="w-20 h-20 rounded-full border-2 border-indigo-500 object-cover mb-4" />
      <Link to="/profile" className="text-lg font-bold text-white hover:text-indigo-400 transition">{dev.name}</Link>
      <p className="text-slate-400 text-xs mb-2">{dev.title || "Software Engineer"}</p>
      
      <div className="flex items-center gap-1 text-slate-500 text-xs mb-4">
        <MapPin size={12} />
        <span>{dev.location || "Remote"}</span>
      </div>

      <div className="flex flex-wrap justify-center gap-1.5 mb-6 max-h-16 overflow-hidden">
        {dev.skills?.map((skill, idx) => (
          <span key={idx} className="text-[11px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-md border border-glassborder">
            {skill}
          </span>
        ))}
      </div>

      <Button 
        variant={following ? "secondary" : "primary"} 
        className="w-full mt-auto"
        onClick={() => setFollowing(!following)}
      >
        {following ? <><UserCheck size={16} /> Connected</> : <><UserPlus size={16} /> Connect</>}
      </Button>
    </motion.div>
  );
};