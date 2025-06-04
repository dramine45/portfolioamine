import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TerminalHeader } from './ui/TerminalHeader';
import { Globe } from 'lucide-react';

interface Language {
  name: string;
  code: string;
  proficiency: 'Native' | 'Fluent' | 'Professional' | 'Intermediate' | 'Basic';
  level: number; // 0-100
}

export const Languages: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setVisible(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  const languages: Language[] = [
    {
      name: "Arabic",
      code: "ar",
      proficiency: "Native",
      level: 100
    },
    {
      name: "French",
      code: "fr",
      proficiency: "Fluent",
      level: 90
    },
    {
      name: "English",
      code: "en",
      proficiency: "Professional",
      level: 85
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="languages" className="py-16 bg-background-darker relative">
      <div className="section-container">
        <TerminalHeader>root@amine:~/languages</TerminalHeader>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-8 max-w-3xl mx-auto"
        >
          <div className="bg-background-dark border border-terminal-red/30 p-6 rounded-md">
            <div className="mb-4 flex items-center">
              <Globe className="h-6 w-6 text-terminal-red mr-3" />
              <h3 className="text-xl text-terminal-green">Spoken Languages</h3>
            </div>
            
            <div className="space-y-6">
              {languages.map((language, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <span className="text-terminal-white text-lg">
                        {language.name}
                      </span>
                      <span className="ml-2 text-xs px-2 py-1 rounded bg-terminal-red/20 text-terminal-red">
                        {language.proficiency}
                      </span>
                    </div>
                    <span className="text-terminal-green text-sm">
                      {`[${language.code}]`}
                    </span>
                  </div>
                  
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ width: visible ? `${language.level}%` : '0%' }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 border-t border-terminal-red/30 pt-4">
              <p className="text-terminal-white/70 text-sm">
                <span className="text-terminal-red">$</span> Fluent in multiple languages, enabling effective communication across diverse environments and international collaboration in the cybersecurity field.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};