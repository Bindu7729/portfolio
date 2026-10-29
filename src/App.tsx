import { useCallback, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import { Intro } from './components/Intro';
import { ResumeViewer } from './components/ResumeViewer';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Ticker } from './components/Ticker';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ExperienceEducation } from './components/ExperienceEducation';
import { Contact } from './components/Contact';
import { Footer, HireBadge } from './components/Footer';

function App() {
  const [introDone, setIntroDone] = useState(false);
  const finishIntro = useCallback(() => setIntroDone(true), []);

  return (
    <MotionConfig reducedMotion="user">
      <Intro onFinish={finishIntro} />
      <Navbar />
      <main>
        {/* remount on reveal so the hero's entrance plays as the intro lifts */}
        <Hero key={introDone ? 'live' : 'held'} />
        <Ticker />
        <About />
        <Skills />
        <Projects />
        <ExperienceEducation />
        <Contact />
      </main>
      <Footer />
      <HireBadge />
      <ResumeViewer />
    </MotionConfig>
  );
}

export default App;
