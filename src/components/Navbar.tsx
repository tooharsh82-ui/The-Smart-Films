import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { SMART_FILMS_PROFILE } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);

          const sections = ['home', 'about', 'process', 'portfolio', 'reviews', 'services', 'contact'];
          const scrollPosition = window.scrollY + 140;

          for (const section of sections) {
            const el = document.getElementById(section);
            if (el) {
              const top = el.offsetTop;
              const height = el.offsetHeight;
              if (scrollPosition >= top && scrollPosition < top + height) {
                setActiveSection(section);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { label: 'Reviews', href: '#reviews', id: 'reviews' },
    { label: 'Services', href: '#services', id: 'services' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F6FBEE]/95 backdrop-blur-md shadow-xs py-3 border-b border-[#E3F2CE]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#home"
            id="brand-logo"
            className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight hover:opacity-85 transition-opacity"
          >
            {SMART_FILMS_PROFILE.name}
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`transition-colors hover:text-slate-950 relative py-1 ${
                  activeSection === link.id ? 'text-slate-950 font-semibold' : ''
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8CE828] rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Right Action: Contact Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={SMART_FILMS_PROFILE.phoneTel}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-950 px-3 py-1.5 rounded-full hover:bg-black/5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#58A50B]" />
              <span>{SMART_FILMS_PROFILE.phone}</span>
            </a>

            <a
              href="#contact"
              id="nav-contact-btn"
              className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#8CE828] hover:bg-[#7BD71B] text-slate-950 text-sm font-semibold tracking-tight shadow-xs hover:shadow-sm active:scale-95 transition-all duration-200"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#8CE828] text-slate-950 text-xs font-semibold"
            >
              Contact
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              className="p-2 rounded-lg text-slate-700 hover:bg-black/5 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#EBF9DC] text-slate-950 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={SMART_FILMS_PROFILE.phoneTel}
                className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-100 text-slate-900 text-xs font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-[#58A50B]" />
                <span>Call: {SMART_FILMS_PROFILE.phone}</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#8CE828] text-slate-950 text-sm font-semibold"
              >
                <span>Enquire / Contact</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
