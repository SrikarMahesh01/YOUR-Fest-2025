import React from 'react';
import { motion } from 'framer-motion';

const departments = ['CSE', 'IT', 'AI-ML/DS', 'ECE', 'EEE', 'MECH'];

const Departments = () => {
  return (
    <motion.div 
      className="bg-indigo-900 bg-opacity-90 rounded-lg shadow-lg p-8 backdrop-filter backdrop-blur-lg border border-indigo-700 text-yellow-300 h-full"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h2 className="text-3xl font-semibold mb-8 text-yellow-400 border-b border-yellow-400/30 pb-3">Departments</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-[calc(100%-5rem)]">
        {departments.map((dept, index) => (
          <motion.div
            key={index}
            className="bg-indigo-800 rounded-xl border border-yellow-400/20 
              flex items-center justify-center text-center
              hover:border-yellow-400/50 hover:shadow-yellow-400/10 
              transition-all duration-300
              min-h-[120px] p-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-400">{dept}</h3>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Departments;
