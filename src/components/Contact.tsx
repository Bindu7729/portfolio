import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { useState } from 'react';

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) {
      alert("Please enter at least your name and a message.");
      return;
    }
    const mailtoLink = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\nReply to: ' + email)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-extrabold text-white mb-2 tracking-tight">
        Let's <span className="text-red-600">Build Together</span>
      </h2>
      <div className="w-12 h-1 bg-red-600 rounded-full mb-10"></div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-5 flex flex-col gap-6"
        >
          <p className="text-gray-300 text-sm leading-relaxed">
            I am always open to discussing full-stack development roles, projects, and collaboration opportunities.
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-gray-300 text-sm">
              <Mail className="text-red-500" size={18} />
              <span>{personalInfo.email}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300 text-sm">
              <Phone className="text-red-500" size={18} />
              <span>{personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300 text-sm">
              <MapPin className="text-red-500" size={18} />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-2">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="p-3 bg-[#121215] rounded-full border border-red-900/40 text-gray-300 hover:text-red-500 hover:border-red-600 transition-all">
              <GithubIcon size={18} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-[#121215] rounded-full border border-red-900/40 text-gray-300 hover:text-red-500 hover:border-red-600 transition-all">
              <LinkedinIcon size={18} />
            </a>
          </div>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="md:col-span-7 bg-[#121215] p-6 rounded-2xl border border-red-600/40 shadow-[0_0_25px_rgba(229,9,20,0.15)] flex flex-col gap-4"
        >
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Your Name"
            className="w-full bg-[#0A0A0B] border border-red-900/30 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-colors"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Your Email"
            className="w-full bg-[#0A0A0B] border border-red-900/30 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-colors"
          />
          <textarea
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder="Your Message"
            className="w-full bg-[#0A0A0B] border border-red-900/30 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-colors"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium text-sm rounded-xl shadow-[0_0_15px_rgba(229,9,20,0.4)] transition-all self-start"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};