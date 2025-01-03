import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaClock, FaMapMarkerAlt, FaUsers, FaInfoCircle, FaMusic, FaCalendarAlt, FaArrowLeft } from 'react-icons/fa';

const EventSection = ({ isMaximized, onClose, showEventDetails }) => {
  return (
    <motion.div 
      className={`${
        isMaximized 
          ? "bg-[#FFF6A5]/90 rounded-lg shadow-lg p-8 backdrop-filter backdrop-blur-sm border border-[#4F5F22]/20 w-[90%] mx-auto"
          : "bg-[#FFF6A5]/90 rounded-lg shadow-lg p-8 backdrop-filter backdrop-blur-sm border border-[#4F5F22]/20 w-full cursor-pointer"
      } text-[#4F5F22]`}
      initial={isMaximized ? { opacity: 0, y: 20 } : { opacity: 0, y: 20 }}
      animate={isMaximized ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {isMaximized && (
        <motion.button
          onClick={onClose}
          className="mb-6 flex items-center gap-2 text-[#4F5F22] hover:text-[#4F5F22]/80"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaArrowLeft />
          <span>Back</span>
        </motion.button>
      )}

      <h2 className="text-4xl font-bold mb-8 text-[#4F5F22] text-center">
        Event Details
      </h2>

      <div className="max-w-[95%] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Technical Events Section */}
          <motion.div 
            className="bg-[#FFF6A5]/70 rounded-xl p-6 lg:p-8 border border-[#4F5F22]/20"
            whileHover={isMaximized ? { scale: 1.02 } : undefined}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <FaTrophy className="text-2xl text-[#4F5F22]" />
              <h3 className="text-2xl font-bold text-[#4F5F22]">Technical Events</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-[#4F5F22]" />
                <span>Date: 24/01/2025</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-[#4F5F22]" />
                <span>Time: 9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#4F5F22]" />
                <span>Venue: Respective Department Labs</span>
              </div>
            </div>
          </motion.div>

          {/* Cultural Events Section */}
          <motion.div 
            className="bg-[#FFF6A5]/70 rounded-xl p-6 border border-[#4F5F22]/20"
            whileHover={isMaximized ? { scale: 1.02 } : undefined}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <FaMusic className="text-2xl text-[#4F5F22]" />
              <h3 className="text-2xl font-bold text-[#4F5F22]">Cultural Events</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-[#4F5F22]" />
                <span>Date: 25/01/2025</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-[#4F5F22]" />
                <span>Time: 10:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#4F5F22]" />
                <span>Venue: College Auditorium</span>
              </div>
            </div>
          </motion.div>

          {/* Registration Details */}
          <motion.div 
            className="bg-[#FFF6A5]/70 rounded-xl p-6 border border-[#4F5F22]/20"
            whileHover={isMaximized ? { scale: 1.02 } : undefined}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <FaUsers className="text-2xl text-[#4F5F22]" />
              <h3 className="text-2xl font-bold text-[#4F5F22]">Registration Details</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <FaInfoCircle className="text-[#4F5F22] mt-1" />
                <div>
                  <p>Spot Registration Available</p>
                  <p className="text-sm opacity-80">Registration Fee: ₹100 per participant</p>
                  <p className="text-sm opacity-80">Team Events: Additional ₹100 per team</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Important Guidelines - Modified to span full width */}
          <motion.div 
            className="bg-[#FFF6A5]/70 rounded-xl p-6 border border-[#4F5F22]/20 col-span-1 md:col-span-2 lg:col-span-3 mt-8"
            whileHover={isMaximized ? { scale: 1.02 } : undefined}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <FaInfoCircle className="text-2xl text-[#4F5F22]" />
              <h3 className="text-2xl font-bold text-[#4F5F22]">Important Guidelines</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <h4 className="font-semibold text-lg text-[#4F5F22] mb-4">Registration Guidelines</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#4F5F22] mt-1">•</span>
                    <span>College ID is mandatory for participation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4F5F22] mt-1">•</span>
                    <span>Participants can register for multiple events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4F5F22] mt-1">•</span>
                    <span>On-spot registration closes 30 minutes before event</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-lg text-[#4F5F22] mb-4">Event Guidelines</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#4F5F22] mt-1">•</span>
                    <span>Certificate will be provided for all participants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4F5F22] mt-1">•</span>
                    <span>Winners will receive cash prizes and medals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4F5F22] mt-1">•</span>
                    <span>Participants must report 30 minutes before event</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-lg text-[#4F5F22] mb-4">General Guidelines</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#4F5F22] mt-1">•</span>
                    <span>Lunch and refreshments will be provided</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4F5F22] mt-1">•</span>
                    <span>All participants must follow college guidelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4F5F22] mt-1">•</span>
                    <span>Decision of judges will be final</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default EventSection; 