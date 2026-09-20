import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolioData';

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Header */}
      <h2 className="text-sm font-bold text-gray-400 mb-2 tracking-widest uppercase font-display">
        Skills
      </h2>
      <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight font-display">
        What I <span className="text-red-600">Work With</span>
      </h2>
      <p className="text-gray-400 text-lg mb-12">
        Technologies and tools I use across my projects.
      </p>

      {/* Grid wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillsData.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="bg-[#121215] p-8 rounded-2xl border border-[#1a1a1a] shadow-sm hover:border-red-900/40 transition-all duration-300"
          >
            {/* Category Pill */}
            <div className="inline-block bg-neutral-900 text-red-400 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-8">
              {category.category}
            </div>
              
            {/* List of Skills */}
            <ul className="space-y-4">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="text-gray-300 text-sm font-medium flex items-center gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};