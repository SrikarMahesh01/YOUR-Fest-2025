import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Array of different shape paths
  const shapes = [
    "M 0 20 C 40 0, 60 40, 100 20 L 100 100 L 0 100 Z", // Wave
    "M25,25 L75,25 L75,75 L25,75 Z", // Square
    "M50,0 L100,86.6 L0,86.6 Z", // Triangle
    "M50,0 C 80,40 80,60 50,100 C 20,60 20,40 50,0 Z" // Blob
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, index) => {
        const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
        const randomPosition = {
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height
        };

        return (
          <motion.div
            key={index}
            className="absolute"
            initial={{
              opacity: 0,
              scale: 0.5,
              x: randomPosition.x,
              y: randomPosition.y
            }}
            animate={{
              opacity: [0, 0.3, 0],
              scale: [0.5, 1.5, 0.5],
              x: [randomPosition.x, randomPosition.x + 100, randomPosition.x],
              y: [randomPosition.y, randomPosition.y - 100, randomPosition.y],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: index * 2
            }}
          >
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              className="fill-[#FFF6A5] opacity-30"
            >
              <path d={randomShape} />
            </svg>
          </motion.div>
        );
      })}

      {/* Add some blurred circles */}
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={`blur-${index}`}
          className="absolute w-64 h-64 rounded-full bg-[#FFF6A5]/20 blur-3xl"
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
            scale: 0.5
          }}
          animate={{
            x: [
              Math.random() * dimensions.width,
              Math.random() * dimensions.width,
              Math.random() * dimensions.width
            ],
            y: [
              Math.random() * dimensions.height,
              Math.random() * dimensions.height,
              Math.random() * dimensions.height
            ],
            scale: [0.5, 1.5, 0.5]
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
            delay: index * 3
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground; 