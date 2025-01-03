import React from 'react';
import { motion } from 'framer-motion';

const FallingStars = () => {
  const stars = Array.from({ length: 30 });
  
  const colors = [
    '#FF0000', // Red
    '#00FF00', // Green
    '#0000FF', // Blue
    '#FFFF00', // Yellow
    '#FF00FF', // Magenta
    '#00FFFF', // Cyan
  ];

  return (
    <div className="fixed inset-0 pointer-events-none">
      {stars.map((_, index) => {
        const color = colors[Math.floor(Math.random() * colors.length)];
        return (
          <motion.div
            key={index}
            className="absolute falling-star"
            style={{
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * -100}px`,
              width: '6px',
              height: '6px',
              backgroundColor: color,
              borderRadius: '50%',
              opacity: 0.9,
              boxShadow: `0 0 20px ${color}, 0 0 30px ${color}, 0 0 40px ${color}`,
            }}
            initial={{ y: -20 }}
            animate={{
              y: window.innerHeight + 100,
              x: Math.random() * 50 - 25,
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'loop',
              delay: Math.random() * 2,
            }}
          />
        );
      })}
    </div>
  );
};

export default FallingStars; 