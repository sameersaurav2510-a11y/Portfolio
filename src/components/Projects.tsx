import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'SafePress',
    category: 'AI & Public Safety',
    description: 'AI public safety system with SOS alerts, CCTV integration, and real-time threat detection for safer communities.',
    tags: ['AI', 'Computer Vision', 'IoT'],
  },
  {
    title: 'AI Traffic Control',
    category: 'Smart Cities',
    description: 'Smart traffic optimization using AI-powered signal control, reducing congestion and improving flow in urban environments.',
    tags: ['Machine Learning', 'IoT', 'Real-Time'],
  },
  {
    title: 'Ambulance Route Optimizer',
    category: 'Healthcare AI',
    description: 'AI-based fastest route system with green corridor creation using GPS and real-time traffic data for emergency response.',
    tags: ['GPS', 'AI Routing', 'Real-Time'],
  },
  {
    title: 'Online Grading System',
    category: 'EdTech',
    description: 'Comprehensive academic web platform for streamlined grading, analytics, and student performance tracking.',
    tags: ['Full Stack', 'React', 'Node.js'],
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Tilt effect
    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(card, {
        rotateX: -y * 10,
        rotateY: x * 10,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.5 });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.fromTo(
      card,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="group glass-surface rounded-2xl p-8 cursor-pointer transition-all duration-500 hover:glow-primary"
      style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
    >
      <div className="flex items-start justify-between mb-6">
        <span className="text-xs font-body tracking-[0.2em] uppercase text-muted-foreground">
          {project.category}
        </span>
        <span className="text-2xl text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
          ↗
        </span>
      </div>

      <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 group-hover:gradient-text transition-all duration-300">
        {project.title}
      </h3>

      <p className="font-body text-muted-foreground leading-relaxed mb-6">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-body px-3 py-1 rounded-full border border-border text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section id="projects" className="section-spacing relative">
      <div className="container max-w-6xl mx-auto px-6">
        <div ref={titleRef} className="mb-20">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Selected Work
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-bold">
            Projects<span className="gradient-text">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
