import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolioData';

// Helper to return beautiful custom SVG logos for each skill
const getSkillIcon = (skillName: string) => {
  const name = skillName.toLowerCase();
  
  if (name.includes('react')) {
    return (
      <svg className="w-5 h-5 text-[#61DAFB]" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 38.6c-6.3 0-12 1.3-16.7 3.5 4.7 2.2 10.4 3.5 16.7 3.5s12-1.3 16.7-3.5c-4.7-2.2-10.4-3.5-16.7-3.5zm0-24.1c-19.1 0-35 4.3-43.2 10.8 7 5.5 20.3 8.7 36 9.2-2-7.5-3.3-15.1-3.6-20.1 3.5.3 7.2 1 10.8 2.2 3.6-1.2 7.3-1.9 10.8-2.2-.3 5-1.6 12.6-3.6 20.1 15.7-.5 29-3.7 36-9.2-8.2-6.5-24.1-10.8-43.2-10.8zm23.2 34.6c4 6.9 6.8 13.9 8 19.8-3.2-1.6-6.8-3.5-10.7-5.5 3.3-6.6 6.3-13.4 8.7-19.8.7.6 1.3 1.3 1.9 2.1l2.1 3.4zm-46.4 0c.6-.8 1.2-1.5 1.9-2.1 2.4 6.4 5.4 13.2 8.7 19.8-3.9 2-7.5 3.9-10.7 5.5 1.2-5.9 4-12.9 8-19.8zm41.2 21c-5.7 3-12 4.7-18 4.7s-12.3-1.7-18-4.7c5.7-3 12-4.7 18-4.7s12.3 1.7 18 4.7z"/>
        <circle cx="50" cy="50" r="8" />
      </svg>
    );
  }
  if (name.includes('java')) {
    return (
      <svg className="w-5 h-5 text-[#E76F00]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.3 16.4c0 .1 0 .2-.1.3-.2.9-1.2 1.6-2.5 1.6h-5.4c-1.3 0-2.3-.7-2.5-1.6-.1-.1-.1-.2-.1-.3v-1.1c.5.5 1.3.8 2.3.9h6.1c1-.1 1.8-.4 2.3-.9v1.1zm-2.5-3.5c1.3 0 2.3.7 2.5 1.6.1.1.1.2.1.3v.4c-.5-.5-1.3-.8-2.3-.9h-6.1c-1 .1-1.8.4-2.3.9v-.4c0-.1 0-.2.1-.3.2-.9 1.2-1.6 2.5-1.6h5.5zM21 19.4c0 .8-.5 1.6-1.5 2.1-1 .5-2.5.8-4.2.8H8.7c-1.7 0-3.2-.3-4.2-.8C3.5 21 3 20.2 3 19.4v-1.9c.7.7 1.9 1.2 3.4 1.4h11.2c1.5-.2 2.7-.7 3.4-1.4v1.9zM18.8 6c.4-.7.6-1.5.6-2.4 0-1.7-.8-3.1-2.1-3.6H12c1.3.5 2.1 1.9 2.1 3.6 0 .9-.2 1.7-.6 2.4H18.8z"/>
      </svg>
    );
  }
  if (name.includes('python')) {
    return (
      <svg className="w-5 h-5 text-[#3776AB]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.9 1c-2.4 0-4.6.4-5.6 1-.9.6-1.4 1.5-1.4 3v1.8h7.2v1h-9c-1 0-1.7.4-2.2 1S0 10.3 0 11.8s.5 2.6 1.4 3.1c.9.5 2 .7 3 .7h1.6v-2.3c0-1.6.9-3.2 2.3-3.7 1.4-.5 3-.5 4.3 0 1.4.5 2.3 2.1 2.3 3.7V17c0 1.5-.9 3-2.3 3.6-1.4.5-3 .5-4.3 0C6.9 20 6 18.5 6 17v-.4H2c0 1.5.5 2.5 1.4 3.1 1 .6 3.2 1 5.6 1 2.4 0 4.6-.4 5.6-1 .9-.6 1.4-1.5 1.4-3v-1.8H9v-1h9c1 0 1.7-.4 2.2-1 .5-.6.8-1.6.8-3.1s-.5-2.6-1.4-3.1c-.9-.5-2-.7-3-.7h-1.6V8.7c0 1.6-.9 3.2-2.3 3.7-1.4.5-3 .5-4.3 0-1.4-.5-2.3-2.1-2.3-3.7V7c0-1.5.9-3 2.3-3.6 1.4-.5 3-.5 4.3 0 1.4.5 2.3 2.1 2.3 3.7v.4h4V7.6c0-1.5-.5-2.5-1.4-3.1-1-.6-3.2-1-5.6-1z"/>
      </svg>
    );
  }
  if (name.includes('javascript')) {
    return (
      <svg className="w-5 h-5 text-[#F7DF1E]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 0h24v24H0V0zm20.3 17.8c-.8-.5-1.6-.9-2.7-1.1-.7-.2-1-.4-1-.7 0-.3.3-.5.7-.5.4 0 .8.2 1.1.5l1.1-.9c-.5-.6-1.1-.9-2-.9-.8 0-1.5.3-1.8.8-.4.5-.4 1.2.1 1.7.6.5 1.6.8 2.4 1 .8.2 1.1.5 1.1.8 0 .4-.4.6-.9.6-.6 0-1.1-.3-1.5-.8l-1.1.8c.6.9 1.5 1.3 2.6 1.3 1.1 0 1.9-.4 2.2-1 .3-.5.3-1.2-.1-1.7zm-7.6-.8c0-.7-.2-1.3-.7-1.7-.5-.4-1.1-.4-1.9-.4-.7 0-1.4.2-1.9.6l.8.9c.3-.3.7-.4 1.1-.4.4 0 .7.1.9.3.2.2.3.4.3.7v.2h-1.7c-1.1 0-1.9.5-1.9 1.4 0 .9.7 1.4 1.7 1.4.8 0 1.4-.3 1.8-.8.3.4.8.8 1.5.8.5 0 .9-.2 1.2-.5l-.8-.8c-.1.2-.3.3-.5.3-.3 0-.5-.2-.5-.5v-1.8zm-1.8 1.5c0 .4-.4.6-.8.6-.4 0-.7-.2-.7-.5s.3-.5.8-.5h.7v.4z"/>
      </svg>
    );
  }
  if (name.includes('typescript')) {
    return (
      <svg className="w-5 h-5 text-[#3178C6]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 0h24v24H0V0zm17.9 13.9H15v5.3h-2.1v-5.3h-2.8V12h7.8v1.9zm3.3 2.9c-.3.4-.8.7-1.4.9-.6.2-1.3.3-2 .3-.7 0-1.4-.2-1.9-.5-.5-.3-.9-.8-1.1-1.3-.2-.5-.3-1.1-.3-1.7 0-.7.1-1.3.4-1.9.3-.5.7-.9 1.2-1.2.5-.3 1.2-.4 1.9-.4.7 0 1.3.1 1.8.4.5.3.9.7 1.1 1.2.2.5.3 1.1.3 1.8v.5H16.8c0 .5.1.8.3 1.1.2.3.5.4.9.4.4 0 .8-.1 1.1-.4.3-.3.5-.7.6-1.2h2c-.1.7-.4 1.3-.8 1.8zm-2.4-3.4c0-.3-.1-.6-.3-.8-.2-.2-.5-.3-.8-.3-.4 0-.7.1-.9.3-.2.2-.3.5-.3.8h2.3z"/>
      </svg>
    );
  }
  if (name.includes('tailwind')) {
    return (
      <svg className="w-5 h-5 text-[#06B6D4]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 6.018c-3.1 0-4.65 1.55-4.65 4.65h3.1c0-1.55.775-2.325 2.325-2.325 1.55 0 2.325.775 2.325 2.325h3.1c0-3.1-1.55-4.65-4.65-4.65zm-4.65 6.2c-3.1 0-4.65 1.55-4.65 4.65h3.1c0-1.55.775-2.325 2.325-2.325 1.55 0 2.325.775 2.325 2.325h3.1c0-3.1-1.55-4.65-4.65-4.65z"/>
      </svg>
    );
  }
  if (name.includes('html5') || name.includes('html')) {
    return (
      <svg className="w-5 h-5 text-[#E34F26]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm14 17.5l.4-4.8H8.3l-.2-2.1h8.2l.4-4.5H5.8l.6 6.6h7.2l-.3 3.3-2.8.9-2.8-.9-.2-2.3H5.2l.3 4.1 6.5 2.1 6.5-2.1z"/>
      </svg>
    );
  }
  if (name.includes('css3') || name.includes('css')) {
    return (
      <svg className="w-5 h-5 text-[#1572B6]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm14.1 7.1H5.8l.6 6.6h7.2l-.3 3.3-2.8.9-2.8-.9-.2-2.3H5.2l.3 4.1 6.5 2.1 6.5-2.1.8-8.8z"/>
      </svg>
    );
  }
  if (name.includes('vite')) {
    return (
      <svg className="w-5 h-5 text-[#646CFF]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.8 2.2L12 14.7 5.2 2.2h13.6zM12 21.8L3 5.4h5.2L12 12.6l3.8-7.2h5.2L12 21.8z"/>
      </svg>
    );
  }
  if (name.includes('spring')) {
    return (
      <svg className="w-5 h-5 text-[#6DB33F]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm3.5 16.7c-1 .8-2.6.8-3.7 0-1.1-.8-1.5-2.2-1.5-3.6 0-1.4.5-2.8 1.5-3.6 1-.8 2.6-.8 3.7 0 1.1.8 1.5 2.2 1.5 3.6 0 1.4-.4 2.8-1.5 3.6zm-1.8-6.1c-.5-.4-1.2-.4-1.7 0-.5.4-.7 1-.7 1.7 0 .7.2 1.3.7 1.7.5.4 1.2.4 1.7 0s.7-1 .7-1.7c0-.7-.2-1.3-.7-1.7z"/>
      </svg>
    );
  }
  if (name.includes('node')) {
    return (
      <svg className="w-5 h-5 text-[#339933]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm4.7 13.9c-.8.8-2 1.2-3.2 1.2s-2.4-.4-3.2-1.2c-.8-.8-1.2-2-1.2-3.2s.4-2.4 1.2-3.2c.8-.8 2-1.2 3.2-1.2s2.4.4 3.2 1.2c.8.8 1.2 2 1.2 3.2s-.4 2.4-1.2 3.2z"/>
      </svg>
    );
  }
  if (name.includes('express')) {
    return (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 11h3m-3 4h5M8 7h8" />
      </svg>
    );
  }
  if (name.includes('mysql')) {
    return (
      <svg className="w-5 h-5 text-[#00758F]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm3.8 13.5c-1.3.8-3.1 1.2-4.8 1.2-1.7 0-3.5-.4-4.8-1.2v-3c1.3.8 3.1 1.2 4.8 1.2 1.7 0 3.5-.4 4.8-1.2v3zm0-4.5c-1.3.8-3.1 1.2-4.8 1.2-1.7 0-3.5-.4-4.8-1.2V8.2c1.3.8 3.1 1.2 4.8 1.2 1.7 0 3.5-.4 4.8-1.2v3z"/>
      </svg>
    );
  }
  if (name.includes('mongo')) {
    return (
      <svg className="w-5 h-5 text-[#47A248]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-.3 0-.6.1-.9.2-2.1.7-4.1 2.2-4.8 4.2-.7 1.9-.3 4.2.8 6 1 1.7 2.7 2.8 4.3 3.6.3.1.6.2.9.2s.6-.1.9-.2c1.6-.8 3.3-1.9 4.3-3.6 1.1-1.8 1.5-4.1.8-6-.7-2-2.7-3.5-4.8-4.2-.3-.1-.6-.2-.9-.2zM9.4 5.9c-.3.4-.5 1-.4 1.5.1.5.4 1 .8 1.3.4.3 1 .4 1.5.3.5-.1.9-.4 1.1-.8.2-.4.3-1 .1-1.5-.1-.5-.4-.9-.8-1.2-.4-.3-1-.4-1.5-.3-.5.1-.9.4-1.1.8zm2.6 14.1c-1.8 0-3.5.5-5 1.5l1.2 1.2c1.1-.6 2.4-.9 3.8-.9s2.7.3 3.8.9l1.2-1.2c-1.5-1-3.2-1.5-5-1.5z"/>
      </svg>
    );
  }
  if (name.includes('git')) {
    return (
      <svg className="w-5 h-5 text-[#F05032]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.3 11.4L12.6.7c-.9-.9-2.3-.9-3.2 0L6.7 3.4 9.8 6.5c.7-.2 1.5-.1 2.1.4.6.6.7 1.5.4 2.2l3.1 3.1c.7-.3 1.6-.2 2.2.4.8.8.8 2.1 0 2.9-.8.8-2.1.8-2.9 0-.6-.6-.7-1.5-.4-2.2l-3.1-3.1c-.2.7-.1 1.5.4 2.1.6.6 1.5.7 2.2.4v3.2c-.7.3-1.2.9-1.2 1.7 0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8c0-.8-.5-1.4-1.2-1.7V9.7c.7-.3 1.2-.9 1.2-1.7 0-.5-.2-1-.5-1.3l2.8-2.8 5.7 5.7c.9.9.9 2.3 0 3.2L12.6 23.3c-.9.9-2.3.9-3.2 0L.7 12.6c-.9-.9-.9-2.3 0-3.2L3.4 6.7.7 9.4c-.9.9-.9 2.3 0 3.2l10.7 10.7c.9.9 2.3.9 3.2 0l10.7-10.7c.9-.9.9-2.3 0-3.2z"/>
      </svg>
    );
  }
  if (name.includes('servicenow')) {
    return (
      <svg className="w-5 h-5 text-[#81B5A2]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 14h-2v-4h2v4zm0-6h-2V7h2v3z"/>
      </svg>
    );
  }

  // Fallback default code icon
  return (
    <svg className="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Header */}
      <h2 className="text-3xl font-extrabold text-white mb-2 tracking-tight">
        Technical <span className="text-red-600">Skills</span>
      </h2>
      <div className="w-12 h-1 bg-red-600 rounded-full mb-12"></div>

      {/* Grid wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }} // Faster transition speed
            className="bg-[#121215] p-7 rounded-3xl border border-red-900/30 shadow-[0_0_20px_rgba(229,9,20,0.08)] hover:border-red-600/50 hover:shadow-[0_0_30px_rgba(229,9,20,0.15)] transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              {/* Category Title - Larger size */}
              <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-red-500 transition-colors font-display">
                {category.category}
              </h3>
              
              {/* Flexbox layout for skill badges with icons */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-[#050505] hover:bg-[#0a0a0d] text-gray-200 text-sm font-medium px-4 py-2.5 rounded-2xl border border-red-900/15 hover:border-red-600/40 flex items-center gap-2.5 transition-all duration-200 shadow-sm"
                  >
                    {getSkillIcon(skill)}
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};