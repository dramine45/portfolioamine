import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Mail, Linkedin } from 'lucide-react';

export const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading delay for effect
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="absolute inset-0 bg-background-dark bg-opacity-70 z-0"></div>
      
      {loaded && (
        <motion.div
          className="section-container relative z-10 text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-block">
              <h1 
                className="text-5xl md:text-7xl font-bold mb-2 glitch" 
                data-text="AMINE DIOURI"
              >
                AMINE DIOURI
              </h1>
              <img
                src="/amine1.jpg"
                alt="Amine Diouri"
                className="mx-auto mt-4 rounded-full w-32 h-32 object-cover border-4 border-terminal-red shadow-lg"
              />
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="mb-8">
            <div className="h-8 overflow-hidden">
              <Typewriter
                options={{
                  strings: [
                    'Cybersecurity & Digital Trust Engineer in Training',
                    'Security Researcher',
                    'Ethical Hacker',
                    'Problem Solver'
                  ],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: 'text-xl md:text-2xl text-terminal-green',
                  cursorClassName: 'text-terminal-red'
                }}
              />
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="mb-12">
            <div className="section-container pt-16">
              <p className="text-lg md:text-xl text-terminal-white opacity-80 mb-0">
                <span className="text-terminal-red">root@amine:~$</span>
              </p>
              <p className="text-lg md:text-xl text-terminal-white opacity-80 mb-4">
                cat contacts
              </p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex justify-center space-x-6">
            <a
              href="mailto:aminediouri19@gmail.com"
              className="flex items-center px-4 py-2 bg-background-darker border border-terminal-red
                        text-terminal-white hover:bg-terminal-red hover:text-white
                        transition-all duration-300 rounded"
            >
              <Mail className="h-5 w-5 mr-2" />
              <span>Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/amine-diouri-3581ba266/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-background-darker border border-terminal-red
                        text-terminal-white hover:bg-terminal-red hover:text-white
                        transition-all duration-300 rounded"
            >
              <Linkedin className="h-5 w-5 mr-2" />
              <span>LinkedIn</span>
            </a>
          </motion.div>
        </motion.div>
      )}

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-terminal-white animate-bounce">
        <a href="#about" className="text-sm">
          <span className="block">Scroll Down</span>
          <span className="block text-center text-lg">↓</span>
        </a>
      </div>
    </section>
  );
};