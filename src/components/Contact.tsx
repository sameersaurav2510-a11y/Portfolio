import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(titleRef.current, { opacity: 0, y: 60 }, {
        opacity: 1, y: 0, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: titleRef.current, start: 'top 80%' },
      });
    }
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="section-spacing relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px]" />
      </div>

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div ref={titleRef} className="text-center">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-8">
            Get in Touch
          </p>
          <h2 className="font-display text-6xl md:text-[8rem] lg:text-[10rem] font-bold leading-[0.9]">
            Let's
            <br />
            <span className="italic gradient-text">Collaborate.</span>
          </h2>

          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="mailto:sameer@example.com"
              className="magnetic-btn px-10 py-5 rounded-full bg-primary text-primary-foreground font-body font-medium tracking-wide text-lg hover:scale-105 transition-transform duration-300 glow-primary"
            >
              Say Hello
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn px-10 py-5 rounded-full glass-surface gradient-border text-foreground font-body font-medium tracking-wide text-lg hover:scale-105 transition-transform duration-300"
            >
              GitHub ↗
            </a>
          </div>

          <div className="mt-24 pt-10 border-t border-border">
            <p className="font-body text-sm text-muted-foreground">
              © 2024 Sameer Sourav. Crafted with precision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
