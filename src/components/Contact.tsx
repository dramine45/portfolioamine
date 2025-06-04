import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TerminalHeader } from './ui/TerminalHeader';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import Typewriter from 'typewriter-effect';

export const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending message
    setTimeout(() => {
      setMessageSent(true);
      setName('');
      setEmail('');
      setMessage('');
    }, 1000);
  };

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
    <section id="contact" className="py-16 bg-background-darker relative">
      <div className="section-container">
        <TerminalHeader>contact</TerminalHeader>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.div variants={itemVariants} className="bg-background-dark border border-terminal-red/30 p-6 rounded-md">
            <h3 className="text-xl text-terminal-green mb-6">
              <span className="text-terminal-red">&gt;</span> Send me a message
            </h3>
            
            {messageSent ? (
              <div className="h-60 flex flex-col items-center justify-center">
                <div className="text-terminal-green mb-4">
                  <Typewriter
                    options={{
                      strings: ['Message sent successfully!', 'I will get back to you soon.'],
                      autoStart: true,
                      loop: false,
                      cursor: '|',
                      delay: 50,
                    }}
                  />
                </div>
                <button 
                  onClick={() => setMessageSent(false)}
                  className="mt-4 px-4 py-2 border border-terminal-red text-terminal-white hover:bg-terminal-red hover:text-white transition-colors duration-300 rounded"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-terminal-white mb-1 text-sm">
                    <span className="text-terminal-red">&gt;</span> Name
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-background-darker border border-terminal-red/30 p-2 rounded 
                              text-terminal-white focus:outline-none focus:border-terminal-green"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-terminal-white mb-1 text-sm">
                    <span className="text-terminal-red">&gt;</span> Email
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-background-darker border border-terminal-red/30 p-2 rounded 
                              text-terminal-white focus:outline-none focus:border-terminal-green"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-terminal-white mb-1 text-sm">
                    <span className="text-terminal-red">&gt;</span> Message
                  </label>
                  <textarea 
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    className="w-full bg-background-darker border border-terminal-red/30 p-2 rounded 
                              text-terminal-white focus:outline-none focus:border-terminal-green"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full flex items-center justify-center px-4 py-2 bg-background-darker 
                            border border-terminal-red text-terminal-white hover:bg-terminal-red 
                            hover:text-white transition-colors duration-300 rounded"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-background-dark border border-terminal-red/30 p-6 rounded-md">
            <h3 className="text-xl text-terminal-green mb-6">
              <span className="text-terminal-red">&gt;</span> Connect with me
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-terminal-red mr-4" />
                <div>
                  <h4 className="text-terminal-white">Email</h4>
                  <a 
                    href="mailto:contact@aminediouri.com" 
                    className="text-terminal-green hover:underline"
                  >
                    contact@aminediouri.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <Linkedin className="h-6 w-6 text-terminal-red mr-4" />
                <div>
                  <h4 className="text-terminal-white">LinkedIn</h4>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-terminal-green hover:underline"
                  >
                    linkedin.com/in/amine-diouri
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <Github className="h-6 w-6 text-terminal-red mr-4" />
                <div>
                  <h4 className="text-terminal-white">GitHub</h4>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-terminal-green hover:underline"
                  >
                    github.com/aminediouri
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-background-darker border border-terminal-red/20 rounded-md">
              <div className="flex items-start">
                <div className="text-terminal-red mr-2">$</div>
                <div>
                  <p className="text-terminal-white/80 text-sm mb-2">
                    I'm always open to discussing cybersecurity projects, research opportunities, 
                    or potential collaborations.
                  </p>
                  <p className="text-terminal-white/80 text-sm">
                    Feel free to reach out through any of these channels!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};