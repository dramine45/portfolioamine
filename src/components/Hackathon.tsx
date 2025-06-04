import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TerminalHeader } from './ui/TerminalHeader';
import { Trophy, Users, Target, Heart } from 'lucide-react';

export const Hackathon: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <section id="hackathon" className="py-16 relative">
      <div className="section-container">
        <TerminalHeader>root@amine:~/activities</TerminalHeader>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-8"
        >
          <motion.div variants={itemVariants} className="bg-background-dark border border-terminal-red/30 p-6 rounded-md">
            <div className="flex items-center mb-6">
              <Trophy className="h-8 w-8 text-terminal-red mr-4" />
              <h3 className="text-2xl text-terminal-green">hackathon Gender-Based Cyber Violence Initiative (2024)</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-3">
                <p className="text-terminal-white/90 mb-4">
                  Led a team of 4 developers in creating a platform that detects and prevents online gender-based 
                  violence through advanced NLP algorithms and machine learning techniques. The solution provides 
                  real-time monitoring of potential threats and offers resources for victims.
                </p>
                <p className="text-terminal-white/90 mb-4">
                  The platform implements a multi-layered security approach, ensuring user privacy while effectively 
                  identifying harmful patterns across various digital communication channels.
                </p>
                
                <div className="mt-6 space-y-4">
                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-terminal-red mr-3 mt-1" />
                    <div>
                      <h4 className="text-terminal-green text-lg mb-1">Team Collaboration</h4>
                      <p className="text-terminal-white/80 text-sm">
                        Worked with a cross-disciplinary team including security specialists, 
                        UX designers, and AI researchers to build a comprehensive solution.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Target className="h-5 w-5 text-terminal-red mr-3 mt-1" />
                    <div>
                      <h4 className="text-terminal-green text-lg mb-1">Technical Challenge</h4>
                      <p className="text-terminal-white/80 text-sm">
                        Developed an AI model capable of identifying subtle forms of harassment 
                        while maintaining low false positive rates, utilizing transformer-based NLP.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Heart className="h-5 w-5 text-terminal-red mr-3 mt-1" />
                    <div>
                      <h4 className="text-terminal-green text-lg mb-1">Social Impact</h4>
                      <p className="text-terminal-white/80 text-sm">
                        Created a solution with potential to safeguard vulnerable individuals 
                        online, particularly women and marginalized communities frequently targeted by digital harassment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};