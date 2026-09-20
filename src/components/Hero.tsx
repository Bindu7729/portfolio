import { motion } from 'framer-motion';
import { ArrowUpRight, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import profilePhoto from '../assets/passport size photo.png';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-32 pb-16 flex items-center justify-center px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight font-display">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-200 to-red-500 text-glow">{personalInfo.name}</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-red-500 uppercase tracking-widest text-glow mt-1">
            {personalInfo.role}
          </h2>
          <p className="text-gray-400 text-base leading-relaxed max-w-lg font-sans">
            {personalInfo.tagline}
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-medium text-sm flex items-center gap-2 shadow-[0_0_20px_rgba(229,9,20,0.4)] transition-all"
            >
              View Projects <ArrowUpRight size={16} />
            </a>
            <a
              href={personalInfo.resumeUrl}
              download
              className="px-6 py-3 rounded-full bg-[#121215] hover:bg-[#1c1c21] text-gray-200 border border-red-900/40 hover:border-red-600 font-medium text-sm flex items-center gap-2 transition-all"
            >
              Download Resume <Download size={16} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center items-center"
        >
          <motion.div
            drag
            dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
            dragElastic={0.2}
            whileHover={{ scale: 1.05 }}
            whileDrag={{ scale: 1.1, cursor: "grabbing" }}
            animate={{ y: [-12, 12, -12], rotate: [-2, 2, -2] }}
            transition={{ 
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-2 bg-gradient-to-tr from-red-600 via-red-900 to-transparent flex items-center justify-center shadow-[0_0_40px_rgba(229,9,20,0.4)] cursor-grab z-10"
          >
            <img
              src={profilePhoto}
              alt={personalInfo.name}
              className="w-full h-full object-cover rounded-full border-[3px] border-[#121215] pointer-events-none"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};