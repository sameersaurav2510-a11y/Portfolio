import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Services from '../components/Services';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import CustomCursor from '../components/CustomCursor';


const Index = () => {
  
  return (
    <div className="bg-background text-foreground min-h-screen cursor-none md:cursor-none">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Services />
      <Experience />
      <Contact />
    </div>
  );
};

export default Index;
