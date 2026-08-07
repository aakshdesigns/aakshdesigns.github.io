import { useState } from 'react';
import IntroLoader from '@/components/IntroLoader';
import CursorGlow from '@/components/CursorGlow';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Services from '@/components/Services';
import Work from '@/components/Work';
import ProjectModal from '@/components/ProjectModal';
import Process from '@/components/Process';
import type { Project } from '@/data';
import Skills from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-[#080808] text-[#F5F5F5]">
      <IntroLoader />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Work onOpenProject={setSelectedProject} />
        <Process />
        <Skills />
        <Contact />
      </main>
      <Footer />
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
