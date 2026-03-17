import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    period: '2024 — Present',
    role: 'AI/IoT Innovator',
    company: 'Independent Projects',
    description: 'Building AI-powered safety and smart city systems, including SafePress and traffic optimization platforms.',
  },
  {
    period: '2023 — 2024',
    role: 'Full Stack Developer',
    company: 'Freelance & Projects',
    description: 'Developing scalable web applications and real-time systems with modern frameworks and cloud infrastructure.',
  },
  {
    period: '2022 — 2023',
    role: 'Software Developer',
    company: 'Academic & Research',
    description: 'Research and development in IoT systems, machine learning models, and embedded computing applications.',
  },
];

const Experience = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(titleRef.current, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: titleRef.current, start: 'top 80%' },
      });
    }

    itemRefs.current.forEach((item, i) => {
      if (!item) return;
      gsap.fromTo(item, { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 0.8, delay: i * 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: item, start: 'top 85%' },
      });
    });
  }, []);

  return (
    <section id="experience" className="section-spacing relative">
      <div className="container max-w-6xl mx-auto px-6">
        <div ref={titleRef} className="mb-20">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Journey
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-bold">
            Experience<span className="gradient-text">.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <div
                key={exp.period}
                ref={(el) => { itemRefs.current[i] = el; }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-2 w-3 h-3 -translate-x-[6px] rounded-full bg-primary glow-primary" />

                <span className="font-body text-sm text-muted-foreground tracking-wider">
                  {exp.period}
                </span>
                <h3 className="font-display text-3xl md:text-4xl font-bold mt-2">
                  {exp.role}
                </h3>
                <p className="font-body text-primary mt-1 text-lg">{exp.company}</p>
                <p className="font-body text-muted-foreground mt-4 max-w-lg leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
