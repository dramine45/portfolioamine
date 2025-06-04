import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TerminalHeader } from './ui/TerminalHeader';

export const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-16 bg-background-darker relative">
      <div className="section-container">
        <TerminalHeader>root@amine:~/about</TerminalHeader>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
        >
          <motion.div variants={itemVariants} className="md:col-span-2">
            <div className="bg-background-dark border border-terminal-red/30 p-6 rounded-md">
              <h3 className="text-xl text-terminal-green mb-4 border-b border-terminal-red/30 pb-2">
                <span className="text-terminal-red">~/</span>biography
              </h3>
              <p className="mb-4 text-terminal-white/90">
                Passionate cybersecurity student at INPT (National Institute of Posts and Telecommunications) in Morocco, 
                with a deep interest in digital security, ethical hacking, and secure systems development.
              </p>
              <p className="mb-4 text-terminal-white/90">
                My journey in technology began with a strong foundation in mathematics and physics, which evolved into 
                a fascination with how systems can be secured against modern threats. I believe that understanding 
                both offensive and defensive security is crucial for building truly secure applications.
              </p>
              <p className="text-terminal-white/90">
                Currently focused on expanding my knowledge in secure network architecture, penetration testing methodologies, 
                and exploring how artificial intelligence can enhance cybersecurity defenses.
              </p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="md:col-span-1">
            <div className="bg-background-dark border border-terminal-red/30 p-6 rounded-md h-full">
              <h3 className="text-xl text-terminal-green mb-4 border-b border-terminal-red/30 pb-2">
                <span className="text-terminal-red">~/</span>education
              </h3>
              <ul className="space-y-4">
                <li className="relative pl-6 before:content-['$'] before:absolute before:left-0 before:text-terminal-red">
                  <span className="text-terminal-white font-medium">National Institute of Posts and Telecommunications (INPT) – Rabat</span>
                  <p className="text-sm text-terminal-white/70">Cybersecurity and Digital Trust</p>
                  <p className="text-xs text-terminal-green">2024 - Present</p>
                </li>
                <li className="relative pl-6 before:content-['$'] before:absolute before:left-0 before:text-terminal-red">
                  <span className="text-terminal-white font-medium">Lycée Moulay Youssef – Rabat</span>
                  <p className="text-sm text-terminal-white/70">Preparatory Classes for Engineering Schools – PCSI/PSI</p>
                  <p className="text-xs text-terminal-green">2022 - 2024</p>
                </li>
                <li className="relative pl-6 before:content-['$'] before:absolute before:left-0 before:text-terminal-red">
                  <span className="text-terminal-white font-medium">Lycée El Mowahiddine – khemisset</span>
                  <p className="text-sm text-terminal-white/70">Baccalaureate in Physical Sciences – High Honors</p>
                  <p className="text-xs text-terminal-green">2022</p>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};