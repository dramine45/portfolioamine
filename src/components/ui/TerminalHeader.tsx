import React from 'react';
import Typewriter from 'typewriter-effect';

interface TerminalHeaderProps {
  children: React.ReactNode;
}

export const TerminalHeader: React.FC<TerminalHeaderProps> = ({ children }) => {
  return (
    <h2 className="text-3xl md:text-4xl font-bold mb-2 terminal-header">
      <Typewriter
        options={{
          strings: [String(children)],
          autoStart: true,
          loop: false,
          cursor: '',
          delay: 50,
        }}
      />
    </h2>
  );
};