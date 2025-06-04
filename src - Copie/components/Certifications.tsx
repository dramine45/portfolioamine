import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TerminalHeader } from './ui/TerminalHeader';
import { Award, ExternalLink } from 'lucide-react';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  badgeUrl?: string;
  verificationUrl?: string;
}

export const Certifications: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications: Certification[] = [
    {
      id: 1,
      title: "Network Defense Certification",
      issuer: "Cyber Security Academy",
      date: "2023",
      badgeUrl: "https://images.credly.com/images/5bdd6a39-3e03-4444-9510-ecff80c9ce79/image.png",
      verificationUrl: "https://www.credly.com/badges/de0cd3cd-8f17-4875-b41a-523f37607669/public_url"
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
    <section id="certifications" className="py-16 relative">
      <div className="section-container">
        <TerminalHeader>root@amine:~/certifications</TerminalHeader>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-8 grid grid-cols-1 gap-6"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              className="bg-background-dark border border-terminal-red/30 rounded-md overflow-hidden flex flex-col max-w-md mx-auto"
            >
              <div className="h-40 overflow-hidden relative">
                {cert.badgeUrl && (
                  <img 
                    src={cert.badgeUrl} 
                    alt={`${cert.title} badge`} 
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent"></div>
              </div>
              
              <div className="p-4 flex-grow flex flex-col">
                <h3 className="text-lg text-terminal-green font-medium mb-2 flex items-center">
                  <Award className="h-4 w-4 mr-2 text-terminal-red" />
                  {cert.title}
                </h3>
                <p className="text-sm text-terminal-white/80 mb-1">
                  {cert.issuer}
                </p>
                <p className="text-xs text-terminal-white/60 mb-4">
                  {cert.date}
                </p>
                
                {cert.verificationUrl && (
                  <a 
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center text-xs text-terminal-green hover:text-terminal-green/80 transition-colors"
                  >
                    Verify <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};