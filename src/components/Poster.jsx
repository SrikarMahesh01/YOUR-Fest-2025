import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaArrowLeft } from 'react-icons/fa';

const Poster = ({ type, onClose }) => {
  const getPoster = () => {
    switch(type) {
      case 'B.Tech':
        return {
          imageUrl: '/btech-fest-poster.jpg',
          alt: 'B.Tech Fest Poster',
          downloadUrl: '/btech-fest-poster.pdf',
          title: 'B.Tech Fest Poster'
        };
      case 'Diploma':
        return {
          imageUrl: '/diploma-fest-poster.jpg',
          alt: 'Diploma Fest Poster',
          downloadUrl: '/diploma-fest-poster.pdf',
          title: 'Diploma Fest Poster'
        };
      default:
        return null;
    }
  };

  const poster = getPoster();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-start justify-center"
    >
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#F7F729] via-[#F7F729] to-[#3E6913]" 
        onClick={onClose}
      />
      
      <div className="relative w-full min-h-screen p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <motion.button
              onClick={() => {
                onClose();
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-[#333333] hover:text-[#333333]/80"
            >
              <FaArrowLeft />
              <span>Back</span>
            </motion.button>
            <h2 className="text-4xl font-bold text-[#333333]">{poster?.title}</h2>
            <motion.a
              href={poster?.downloadUrl}
              download
              className="flex items-center gap-2 text-[#333333] hover:text-[#333333]/80 cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload />
              <span>Download</span>
            </motion.a>
          </div>

          {poster && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center"
            >
              <div className="relative w-full">
                <img 
                  src={poster.imageUrl}
                  alt={poster.alt}
                  className="w-full h-auto rounded-lg shadow-2xl max-h-[80vh] object-contain mx-auto"
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Poster; 