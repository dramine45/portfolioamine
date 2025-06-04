import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TerminalHeader } from './ui/TerminalHeader';
import { Code, Shield, Server } from 'lucide-react';

interface Skill {
  name: string;
  level: number; // 0-100
  category: 'language' | 'cybersecurity' | 'system';
}

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
}

export const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setVisible(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  const skillCategories: SkillCategory[] = [
    {
      name: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Python", level: 90, category: 'language' },
        { name: "Java", level: 80, category: 'language' },
        { name: "C", level: 75, category: 'language' },
        { name: "JavaScript", level: 85, category: 'language' },
        { name: "SQL", level: 80, category: 'language' },
        { name: "HTML/CSS", level: 85, category: 'language' },
      ]
    },
    {
      name: "Cybersecurity",
      icon: <Shield className="h-6 w-6" />,
      skills: [
        { name: "Network Security", level: 85, category: 'cybersecurity' },
        { name: "Penetration Testing", level: 80, category: 'cybersecurity' },
        { name: "Security Analysis", level: 75, category: 'cybersecurity' },
        { name: "Cryptography", level: 70, category: 'cybersecurity' },
        { name: "Malware Analysis", level: 65, category: 'cybersecurity' },
      ]
    },
    {
      name: "Systems & Infrastructure",
      icon: <Server className="h-6 w-6" />,
      skills: [
        { name: "Linux", level: 85, category: 'system' },
        { name: "Windows", level: 75, category: 'system' },
        { name: "Docker", level: 70, category: 'system' },
        { name: "Networking", level: 80, category: 'system' },
      ]
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
    <section id="skills" className="py-16 bg-background-darker relative">
      <div className="section-container">
        <TerminalHeader>root@amine:~/skills</TerminalHeader>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              variants={itemVariants}
              className="bg-background-dark border border-terminal-red/30 p-6 rounded-md"
            >
              <div className="flex items-center mb-4">
                <div className="mr-3 text-terminal-red">
                  {category.icon}
                </div>
                <h3 className="text-xl text-terminal-green">
                  {category.name}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-terminal-white">{skill.name}</span>
                      <span className="text-xs text-terminal-green">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ width: visible ? `${skill.level}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};