import React, { useState, useEffect } from 'react';
import { Terminal, Github, Linkedin, Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Languages', href: '#languages' },
    { label: 'Activities', href: '#hackathon' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background-dark bg-opacity-95 shadow-md shadow-terminal-red/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Terminal className="h-6 w-6 text-terminal-red mr-2" />
            <span className="text-terminal-white font-bold text-xl">
              <span className="text-terminal-red">A</span>mine<span className="text-terminal-red">@</span>Diouri
            </span>
          </div>

          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="navigation-link"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://github.com/dramine45" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-terminal-white hover:text-terminal-green transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/amine-diouri-3581ba266/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-terminal-white hover:text-terminal-green transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          <button 
            className="md:hidden text-terminal-white hover:text-terminal-green transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-background-darker border-t border-terminal-red/30 px-4 py-2">
          <div className="flex flex-col space-y-2 py-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="navigation-link block py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex space-x-4 pt-4 border-t border-terminal-red/30 mt-2">
              <a 
                href="https://github.com/dramine45" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-terminal-white hover:text-terminal-green transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/amine-diouri-3581ba266/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-terminal-white hover:text-terminal-green transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};