import React, { useEffect, useRef } from 'react';

export const MatrixBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const characters = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789';
    const columnCount = 30;
    
    // Clear any existing children
    container.innerHTML = '';
    
    // Create columns
    for (let i = 0; i < columnCount; i++) {
      const column = document.createElement('div');
      column.className = 'matrix-column';
      column.style.left = `${(i / columnCount) * 100}%`;
      
      // Random animation duration between 10 and 25 seconds
      const duration = 10 + Math.random() * 15;
      column.style.animationDuration = `${duration}s`;
      
      // Random delay to start animation
      const delay = Math.random() * 5;
      column.style.animationDelay = `${delay}s`;
      
      // Create random characters
      const charCount = 20 + Math.floor(Math.random() * 30);
      let html = '';
      for (let j = 0; j < charCount; j++) {
        const char = characters.charAt(Math.floor(Math.random() * characters.length));
        html += `<div style="opacity: ${Math.random() * 0.5 + 0.5}">${char}</div>`;
      }
      
      column.innerHTML = html;
      container.appendChild(column);
    }
    
    // Cleanup function
    return () => {
      container.innerHTML = '';
    };
  }, []);

  return <div ref={containerRef} className="matrix-bg"></div>;
};