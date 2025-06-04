import React from 'react';
import { Terminal, Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background-darker border-t border-terminal-red/30 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Terminal className="h-5 w-5 text-terminal-red mr-2" />
            <span className="text-terminal-white font-bold">
              <span className="text-terminal-red">A</span>mine<span className="text-terminal-red">@</span>Diouri
            </span>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a 
              href="mailto:aminediouri19@gmail.com" 
              className="text-terminal-white hover:text-terminal-green transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
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
          
          <div className="text-sm text-terminal-white/60">
            <span className="text-terminal-red">© {currentYear}</span> Amine Diouri. All rights reserved.
          </div>
        </div>
        
        <div className="mt-6 text-center text-xs text-terminal-white/40">
        </div>
      </div>
    </footer>
  );
};