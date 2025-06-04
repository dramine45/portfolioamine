import React from 'react';
import Typewriter from 'typewriter-effect';

export const SectionPrompt = ({ section }: { section: string }) => (
  <div className="section-container pt-16">
    <p className="text-lg md:text-xl text-terminal-white opacity-80 mb-0">
      <span className="text-terminal-red">root@amine:~$</span>
    </p>
    <div className="text-lg md:text-xl text-terminal-white opacity-80 mb-4">
      <Typewriter
        options={{
          strings: [`cat ${section}`],
          autoStart: true,
          loop: false,
          delay: 60,
          cursor: '<span class="text-terminal-red">|</span>',
        }}
      />
    </div>
  </div>
); 