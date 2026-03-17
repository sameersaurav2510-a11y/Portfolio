import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled ? 'glass-surface rounded-full px-6 md:px-8 py-3' : 'px-6 md:px-8 py-3'
        }`}
      >
        <div className="flex items-center gap-6 md:gap-8">
          <a href="#hero" className="font-display text-lg font-bold">
            SS<span className="gradient-text">.</span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-foreground"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[101] w-72 bg-card border-l border-border transition-transform duration-500 ease-out md:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <span className="font-display text-lg font-bold">
            SS<span className="gradient-text">.</span>
          </span>
          <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <X size={22} className="text-foreground" />
          </button>
        </div>

        <div className="flex flex-col p-6 gap-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="font-body text-lg py-3 text-muted-foreground hover:text-foreground hover:pl-2 transition-all duration-300 border-b border-border/50"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="absolute bottom-8 left-6 right-6">
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block text-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-body font-medium glow-primary"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
