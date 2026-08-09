import { motion } from 'framer-motion';
import { projectsData } from '../data/portfolioData';
import { GithubIcon } from './Icons';
import { ExternalLink } from 'lucide-react';

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Header with red line indicator under Projects */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-white mb-3 tracking-tight font-display">
          Projects
        </h2>
        <div className="w-16 h-1 bg-red-600 rounded-full mx-auto"></div>
      </div>

      {/* Grid wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => {
          // Highlight the first card with a beautiful red glow border
          const isHighlighted = index === 0;
          
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`bg-[#0d0d0d] rounded-[24px] border overflow-hidden flex flex-col justify-between transition-all duration-300 card-glow-hover group ${
                isHighlighted 
                  ? 'border-red-600/80 shadow-[0_0_25px_rgba(229,9,20,0.25)]' 
                  : 'border-[#1a1a1a]'
              }`}
            >
              <div>
                {/* Project Image Preview at the Top */}
                {project.image && (
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-900 border-b border-[#1a1a1a]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] to-transparent opacity-40" />
                  </div>
                )}

                {/* Content Panel */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 font-display group-hover:text-red-500 transition-colors">
                    {project.title.split(" — ")[0]}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-5 font-sans min-h-[60px]">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-red-500 uppercase tracking-widest mb-2 font-display">Key Highlights</h4>
                    <ul className="text-xs text-gray-400 space-y-1.5 list-none font-sans">
                      {project.features.slice(0, 2).map((feature, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-red-500 select-none">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Footer Tech Stack and Buttons */}
              <div className="p-6 pt-0 mt-auto">
                {/* Tech Stack badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-transparent text-gray-300 text-[10px] font-mono font-medium px-2.5 py-1 rounded-full border border-[#262626] group-hover:border-red-900/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Direct Action Buttons - rounded pills side-by-side */}
                <div className="flex items-center gap-3">
                  {project.liveUrl && project.liveUrl !== project.githubUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 px-4 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold font-display flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(229,9,20,0.2)] hover:shadow-[0_0_20px_rgba(229,9,20,0.4)] transition-all"
                    >
                      <ExternalLink size={13} /> Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-grow px-4 py-2.5 rounded-full bg-transparent hover:bg-neutral-900 text-gray-300 hover:text-white text-xs font-bold font-display border border-[#262626] hover:border-red-600/40 flex items-center justify-center gap-1.5 transition-all text-center"
                    >
                      <GithubIcon size={13} /> View on GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};