import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TerminalHeader } from './ui/TerminalHeader';
import { Shield, Database, BookOpen, MonitorSmartphone } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  icon: React.ReactNode;
  status: 'completed' | 'in-progress';
}

export const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects: Project[] = [
    {
      id: 1,
      title: "Secure File Sharing Platform",
      description: "End-to-end encrypted file sharing system with zero-knowledge architecture, role-based access control, and comprehensive audit logging.",
      technologies: ["Python", "React", "Redux", "Cryptography", "Docker"],
      icon: <Shield className="h-6 w-6 text-terminal-green" />,
      status: 'completed'
    },
    {
      id: 2,
      title: "Ransomware Dataset Augmentation with GANs",
      description: "Research project using generative adversarial networks to augment ransomware detection datasets, improving machine learning model performance.",
      technologies: ["Python", "TensorFlow", "GANs", "Cybersecurity"],
      icon: <Database className="h-6 w-6 text-terminal-green" />,
      status: 'completed'
    },
    {
      id: 3,
      title: "Online Education Platform",
      description: "Secure platform for delivering cybersecurity education with interactive labs, secure authentication, and progress tracking.",
      technologies: ["Node.js", "Express", "React"],
      icon: <BookOpen className="h-6 w-6 text-terminal-green" />,
      status: 'in-progress'
    },
    {
      id: 4,
      title: "AI Reel Generator Desktop App",
      description: "Desktop application that leverages AI to automate the creation of professional video reels from user content.",
      technologies: ["Electron", "Python", "TensorFlow", "OpenCV"],
      icon: <MonitorSmartphone className="h-6 w-6 text-terminal-green" />,
      status: 'completed'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="projects" className="py-16 relative">
      <div className="section-container">
        <TerminalHeader>root@amine:~/projects</TerminalHeader>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="project-card group"
            >
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  {project.icon}
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl text-terminal-green font-medium mb-2">
                      {project.title}
                    </h3>
                    <span className={`text-xs px-2 py-1 rounded ${
                      project.status === 'completed' 
                        ? 'bg-terminal-green/20 text-terminal-green' 
                        : 'bg-terminal-yellow/20 text-terminal-yellow'
                    }`}>
                      {project.status === 'completed' ? 'Completed' : 'In Progress'}
                    </span>
                  </div>
                  <p className="text-terminal-white/80 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="text-xs bg-background-dark border border-terminal-red/30 
                                  px-2 py-1 rounded text-terminal-white/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};