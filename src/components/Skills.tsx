import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'React / Next.js', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 92, category: 'Frontend' },
  { name: 'Node.js', level: 88, category: 'Backend' },
  { name: 'Python / AI/ML', level: 85, category: 'Backend' },
  { name: 'PostgreSQL', level: 82, category: 'Backend' },
  { name: 'IoT / Embedded', level: 80, category: 'Systems' },
  { name: 'Three.js / WebGL', level: 75, category: 'Creative' },
];

const techIcons = [
  'React', 'TypeScript', 'Python', 'Node.js', 'TensorFlow',
  'Docker', 'AWS', 'PostgreSQL', 'GraphQL', 'Git',
  'Tailwind', 'Firebase',
];

const Skills = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const barRefs = useRef<(HTMLDivElement | null)[]>([]);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(titleRef.current, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: titleRef.current, start: 'top 80%' },
      });
    }

    barRefs.current.forEach((bar, i) => {
      if (!bar) return;
      const fill = bar.querySelector('.skill-fill') as HTMLElement;
      if (!fill) return;

      gsap.fromTo(bar, { opacity: 0, x: -30 }, {
        opacity: 1, x: 0, duration: 0.6, delay: i * 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: bar, start: 'top 90%' },
      });

      gsap.fromTo(fill, { scaleX: 0 }, {
        scaleX: 1, duration: 1.2, delay: i * 0.08 + 0.3, ease: 'power3.out',
        scrollTrigger: { trigger: bar, start: 'top 90%' },
      });
    });

    iconRefs.current.forEach((icon, i) => {
      if (!icon) return;
      gsap.fromTo(icon, { opacity: 0, y: 20, scale: 0.8 }, {
        opacity: 1, y: 0, scale: 1, duration: 0.5, delay: i * 0.06, ease: 'back.out(1.7)',
        scrollTrigger: { trigger: icon, start: 'top 90%' },
      });
    });
  }, []);

  return (
    <section id="skills" className="section-spacing relative">
      <div className="container max-w-6xl mx-auto px-6">
        <div ref={titleRef} className="mb-20">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Expertise
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-bold">
            Skills & <span className="italic gradient-text">Tech Stack</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Progress bars */}
          <div className="space-y-6">
            {skills.map((skill, i) => (
              <div
                key={skill.name}
                ref={(el) => { barRefs.current[i] = el; }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-body text-sm text-foreground">{skill.name}</span>
                  <span className="font-body text-xs text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                  <div
                    className="skill-fill h-full rounded-full origin-left"
                    style={{
                      width: `${skill.level}%`,
                      background: `linear-gradient(90deg, hsl(var(--glow-primary)), hsl(var(--glow-secondary)))`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Tech icon grid */}
          <div>
            <p className="font-body text-sm text-muted-foreground mb-6 tracking-wider uppercase">Technologies</p>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {techIcons.map((tech, i) => (
                <div
                  key={tech}
                  ref={(el) => { iconRefs.current[i] = el; }}
                  className="group glass-surface rounded-xl p-4 flex items-center justify-center text-center cursor-default hover:glow-primary transition-all duration-300 hover:scale-105"
                >
                  <span className="font-body text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
