import { motion } from 'framer-motion';
import { Cpu, GraduationCap, Award, Users } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <h2 className="text-3xl font-extrabold text-white mb-2 tracking-tight">
        About <span className="text-red-600">Me</span>
      </h2>
      <div className="w-12 h-1 bg-red-600 rounded-full mb-12"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Right Side: Professional Biography & Unique highlights */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-12 flex flex-col gap-6 text-left"
        >
          <p className="text-gray-300 text-lg leading-relaxed">
            I am a detail-oriented Computer Science and Engineering undergraduate at <strong className="text-white font-bold">Mohan Babu University</strong> with a strong academic record (<strong className="text-red-500 font-bold">8.89 CGPA</strong>). I focus on engineering highly scalable full-stack applications, designing robust DBMS schemas, and implementing workflow automation solutions.
          </p>
          
          <p className="text-gray-300 text-lg leading-relaxed">
            I combine academic rigor in core CS subjects (Data Structures & Algorithms, OOP, Database Management) with practical experience building responsive full-stack applications and automated workflow scripts. I enjoy problem solving, peer tutoring, and coordinating technical challenges.
          </p>

          {/* Unique Highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            
            {/* Highlight 1: ServiceNow & Automation */}
            <div className="bg-[#121215] p-5 rounded-2xl border border-red-900/30 hover:border-red-600/50 transition-all flex gap-4 items-start card-glow-hover">
              <div className="p-2.5 rounded-xl bg-neutral-900 border border-white/5 text-red-500 shrink-0">
                <Cpu size={20} />
              </div>
              <div>
                <h3 className="text-white font-bold text-base mb-1 uppercase tracking-wider">Automation</h3>
                <p className="text-gray-400 text-sm leading-relaxed">ServiceNow Virtual Intern & Certified Advanced Automation Professional (Automation Anywhere).</p>
              </div>
            </div>

            {/* Highlight 2: Peer Mentorship */}
            <div className="bg-[#121215] p-5 rounded-2xl border border-red-900/30 hover:border-red-600/50 transition-all flex gap-4 items-start card-glow-hover">
              <div className="p-2.5 rounded-xl bg-neutral-900 border border-white/5 text-red-500 shrink-0">
                <Users size={20} />
              </div>
              <div>
                <h3 className="text-white font-bold text-base mb-1 uppercase tracking-wider">Mentorship</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Core Team Member @ MBU Coding Club, coaching 50+ junior students in DSA and programming.</p>
              </div>
            </div>

            {/* Highlight 3: Hackathon Leadership */}
            <div className="bg-[#121215] p-5 rounded-2xl border border-red-900/30 hover:border-red-600/50 transition-all flex gap-4 items-start card-glow-hover">
              <div className="p-2.5 rounded-xl bg-neutral-900 border border-white/5 text-red-500 shrink-0">
                <Award size={20} />
              </div>
              <div>
                <h3 className="text-white font-bold text-base mb-1 uppercase tracking-wider">Leadership</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Coordinated event logistics for hackathons. Represented MBU in national engineering contests.</p>
              </div>
            </div>

            {/* Highlight 4: Academic Background */}
            <div className="bg-[#121215] p-5 rounded-2xl border border-red-900/30 hover:border-red-600/50 transition-all flex gap-4 items-start card-glow-hover">
              <div className="p-2.5 rounded-xl bg-neutral-900 border border-white/5 text-red-500 shrink-0">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 className="text-white font-bold text-base mb-1 uppercase tracking-wider">Education</h3>
                <p className="text-gray-400 text-sm leading-relaxed">B.Tech in Computer Science & Engineering (Batch 2023 - 2027) with an active academic focus.</p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};