import { motion } from 'framer-motion';
import { educationData, experienceData } from '../data/portfolioData';

export const ExperienceEducation = () => {
  return (
    <section id="experience" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-extrabold text-white mb-2 tracking-tight">
            Work <span className="text-red-600">Experience</span>
          </h2>
          <div className="w-12 h-1 bg-red-600 rounded-full mb-8"></div>

          <div className="flex flex-col gap-6">
            {experienceData.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#121215] p-5 rounded-xl border border-red-900/30 shadow-[0_0_15px_rgba(229,9,20,0.1)]"
              >
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                  <span className="text-xs text-red-500 font-mono bg-red-950/40 px-2 py-0.5 rounded border border-red-900/30">{exp.period}</span>
                </div>
                <p className="text-sm font-medium text-gray-300 mb-3">{exp.organization}</p>
                <ul className="list-disc list-inside text-xs text-gray-400 space-y-1">
                  {exp.details.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-extrabold text-white mb-2 tracking-tight">
            My <span className="text-red-600">Education</span>
          </h2>
          <div className="w-12 h-1 bg-red-600 rounded-full mb-8"></div>

          <div className="flex flex-col gap-6">
            {educationData.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#121215] p-5 rounded-xl border border-red-900/30 shadow-[0_0_15px_rgba(229,9,20,0.1)]"
              >
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                  <span className="text-xs text-red-500 font-mono bg-red-950/40 px-2 py-0.5 rounded border border-red-900/30">{edu.period}</span>
                </div>
                <p className="text-sm font-medium text-gray-300 mb-2">{edu.institution}</p>
                <p className="text-xs text-gray-400">{edu.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};