import { useEffect, useRef, useState } from 'react';
import { Download } from 'lucide-react';
import profileImg from '@/assets/profile.png';

const Hero = () => {
  const imgRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(600px) rotateY(${x * 20}deg) rotateX(${-y * 20}deg)`;
    };

    const handleMouseLeave = () => {
      el.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg)';
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle gradient background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[100px]" />
      </div>

      <div className="relative z-10 px-6 max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Text */}
        <div className="text-center lg:text-left flex-1">
          <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <p className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground mb-8">
              Full Stack Developer & AI/IoT Innovator
            </p>
          </div>

          <div className={`transition-all duration-1000 delay-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h1 className="font-display text-6xl md:text-[8rem] lg:text-[10rem] font-bold leading-[0.85] tracking-tight mb-2">
              Sameer
            </h1>
            <h1 className="font-display italic text-6xl md:text-[8rem] lg:text-[10rem] font-bold leading-[0.85] tracking-tight gradient-text">
              Sourav.
            </h1>
          </div>

          <div className={`transition-all duration-1000 delay-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mt-10 leading-relaxed">
              Building AI-powered systems for safety, smart cities & intelligent infrastructure
            </p>
          </div>

          <div className={`flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 mt-12 transition-all duration-1000 delay-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <a href="#projects" className="magnetic-btn px-8 py-4 rounded-full glass-surface gradient-border text-foreground font-body font-medium tracking-wide hover:scale-105 transition-transform duration-300">
              View Projects
            </a>
            <a
              href="/Sameer_Sourav_CV.pdf"
              download
              className="magnetic-btn px-8 py-4 rounded-full bg-primary text-primary-foreground font-body font-medium tracking-wide hover:scale-105 transition-transform duration-300 glow-primary inline-flex items-center gap-2"
            >
              <Download size={18} />
              Download CV
            </a>
            <a href="#contact" className="magnetic-btn px-8 py-4 rounded-full border border-border text-foreground font-body font-medium tracking-wide hover:scale-105 hover:border-primary/40 transition-all duration-300">
              Contact Me
            </a>
          </div>
        </div>

        {/* Profile image */}
        <div className={`transition-all duration-1000 delay-500 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <div
            ref={imgRef}
            className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full"
            style={{ transition: 'transform 0.15s ease-out', transformStyle: 'preserve-3d' }}
          >
            <div className="absolute inset-0 rounded-full bg-primary/10 blur-[40px] scale-110" />
            <div className="absolute inset-0 rounded-full gradient-border overflow-hidden">
              <img src={profileImg} alt="Sameer Sourav" className="w-full h-full object-cover rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
