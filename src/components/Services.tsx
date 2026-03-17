import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    num: '01',
    title: 'AI Systems',
    description: 'Designing and deploying intelligent AI systems for real-world safety, automation, and optimization.',
  },
  {
    num: '02',
    title: 'Full Stack Development',
    description: 'End-to-end web applications with modern frameworks, scalable architectures, and polished interfaces.',
  },
  {
    num: '03',
    title: 'Smart IoT Solutions',
    description: 'Connected device ecosystems with real-time data processing, edge computing, and intelligent automation.',
  },
  {
    num: '04',
    title: 'Real-Time Systems',
    description: 'High-performance systems for live data processing, streaming analytics, and instant response applications.',
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
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
      gsap.fromTo(item, { opacity: 0, x: -40 }, {
        opacity: 1, x: 0, duration: 0.8, delay: i * 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: item, start: 'top 85%' },
      });
    });
  }, []);

  return (
    <section ref={sectionRef} id="services" className="section-spacing relative">
      <div className="container max-w-6xl mx-auto px-6">
        <div ref={titleRef} className="mb-20">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Expertise
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-bold">
            How can I<br />
            <span className="italic gradient-text">help you?</span>
          </h2>
        </div>

        <div className="space-y-0">
          {services.map((service, i) => (
            <div
              key={service.num}
              ref={(el) => { itemRefs.current[i] = el; }}
              className="group border-t border-border py-10 md:py-14 flex flex-col md:flex-row md:items-center gap-6 cursor-pointer transition-colors duration-300 hover:border-primary/30"
            >
              <span className="font-body text-sm text-muted-foreground w-12 shrink-0">
                {service.num}
              </span>
              <h3 className="font-display text-3xl md:text-5xl font-bold flex-1 group-hover:gradient-text transition-all duration-300">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground max-w-sm leading-relaxed">
                {service.description}
              </p>
              <span className="text-2xl text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all duration-300">
                →
              </span>
            </div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default Services;
