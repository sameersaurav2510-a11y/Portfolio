import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Services from '../components/Services';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import CustomCursor from '../components/CustomCursor';


const Index = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

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
