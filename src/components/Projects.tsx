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
          const isHighlighted = index === 0;
          
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`bg-[#0d0d0d] rounded-2xl border flex flex-col justify-between transition-all duration-300 card-glow-hover group p-8 ${
                isHighlighted 
                  ? 'border-red-600/80 shadow-[0_0_25px_rgba(229,9,20,0.25)]' 
                  : 'border-[#1a1a1a] hover:border-red-900/60'
              }`}
            >
              <div>
                {/* Category/Tags - Simulated based on technologies */}
                <div className="text-[10px] font-bold text-red-500 uppercase tracking-widest mb-4">
                  {project.technologies.slice(0, 3).join(" / ")}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 font-display group-hover:text-red-400 transition-colors">
                  {project.title.split(" - ")[0]}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6 font-sans">
                  {project.description}
                </p>

                {/* Tech Stack badges (pill shaped) */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-transparent text-gray-300 text-xs font-medium px-3 py-1 rounded-full border border-[#262626] group-hover:border-red-900/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Buttons */}
              <div className="pt-6 border-t border-[#1a1a1a] mt-auto">
                <div className="flex items-center gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 hover:text-white text-sm font-medium font-display flex items-center gap-2 transition-colors"
                    >
                      <GithubIcon size={16} /> View on GitHub <ExternalLink size={14} className="opacity-50" />
                    </a>
                  )}
                  {project.liveUrl && project.liveUrl !== project.githubUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 hover:text-red-500 text-sm font-medium font-display flex items-center gap-2 transition-colors ml-auto"
                    >
                      Live Demo <ExternalLink size={14} />
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