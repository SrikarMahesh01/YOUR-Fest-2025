import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaTimes } from 'react-icons/fa';

const ContactModal = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
    >
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative bg-gradient-to-br from-[#FFF6A5] via-[#B9C44C] to-[#3E6913] rounded-xl p-6 sm:p-12 w-[90%] sm:w-auto shadow-xl border-4 border-[#FFF6A5]"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#4F5F22] hover:text-[#3E6913] transition-colors"
        >
          <FaTimes className="text-2xl" />
        </button>

        <h2 className="text-4xl font-bold text-[#4F5F22] mb-12 text-center">Contact Information</h2>
        
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="bg-[#1B4332] p-5 rounded-full">
              <FaPhone className="text-4xl text-[#FFD700]" />
            </div>
            <div>
              <p className="text-lg text-[#4F5F22] font-medium">Phone Number</p>
              <p className="text-3xl font-bold text-[#1B4332]">+91 9849645441</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="bg-[#1B4332] p-5 rounded-full">
              <FaEnvelope className="text-4xl text-[#FFD700]" />
            </div>
            <div>
              <p className="text-lg text-[#4F5F22] font-medium">Email Address</p>
              <p className="text-3xl font-bold text-[#1B4332] break-all">
                yourfest2025@usharama.in
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactModal; 