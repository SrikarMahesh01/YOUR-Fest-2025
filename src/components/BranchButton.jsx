import React from 'react';
import { motion } from 'framer-motion';

const BranchButton = ({ branch, onBranchClick }) => {
  const handleClick = () => {
    console.log('BranchButton clicked:', branch);
    onBranchClick(branch);
  };

  return (
    <motion.button
      onClick={handleClick}
      className="bg-[#FFF6A5] rounded-full px-6 py-3 text-[#5C4533] 
        hover:bg-[#FFF6A5]/90 transition-all duration-300
        border-2 border-[#5C4533]/20 hover:border-[#5C4533]/50
        backdrop-blur-sm relative overflow-hidden group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="text-xl font-bold">{branch}</span>
    </motion.button>
  );
};

export default BranchButton;
