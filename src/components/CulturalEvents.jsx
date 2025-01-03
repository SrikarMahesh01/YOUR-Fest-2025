import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMusic, FaClock, FaMapMarkerAlt, FaTrophy, FaArrowLeft, FaHome, FaGraduationCap, FaCalendarCheck, FaPhoneAlt, FaImages, FaUsers, FaPhone, FaUser, FaTimes, FaAward } from 'react-icons/fa';
import { culturalEvents } from '../data/culturalEvents';

const CulturalEvents = ({ onClose }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col bg-gradient-to-br from-[#F7F729] via-[#F7F729] to-[#3E6913]"
    >
      <AnimatePresence>
        {selectedEvent ? (
          // Full Page Event View
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-60 bg-gradient-to-br from-[#F7F729] via-[#F7F729] to-[#3E6913]"
          >
            {/* Header */}
            <div className="bg-[#1B4332] shadow-md backdrop-blur-sm p-4">
              <div className="max-w-[1900px] mx-auto flex items-center">
                <motion.button
                  onClick={() => setSelectedEvent(null)}
                  className="text-[#FFD700] hover:text-[#FFF6A5] flex items-center gap-2 
                    bg-[#1B4332]/80 px-4 py-2 rounded-full border-2 border-[#FFD700]
                    transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaArrowLeft className="text-2xl" />
                  <span className="text-lg font-bold">Back to Events</span>
                </motion.button>
                <h1 className="text-[#FFD700] text-3xl font-bold mx-auto pr-[100px] tracking-wider">
                  {selectedEvent.name}
                </h1>
              </div>
            </div>

            {/* Event Content */}
            <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8 overflow-y-auto h-[calc(100vh-80px)]">
              <div className="max-w-6xl mx-auto">
                {/* Large Event Image */}
                <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] mb-4 sm:mb-8 overflow-hidden rounded-xl bg-[#1B4332]/90 p-2 sm:p-4">
                  <img
                    src={selectedEvent.image || `/images/${selectedEvent.name.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                    alt={selectedEvent.name}
                    className="w-full h-full object-contain rounded-lg"
                    onError={(e) => {
                      e.target.src = '/images/default-event.jpg';
                    }}
                  />
                </div>

                {/* Event Information Grid */}
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-6">
                  {/* Left Column - About & Details */}
                  <div className="space-y-4 sm:space-y-6">
                    {/* About the Event */}
                    <div className="bg-[#1B4332]/90 rounded-xl p-4 sm:p-6 shadow-xl">
                      <h2 className="text-xl sm:text-2xl font-bold text-[#FFD700] mb-2 sm:mb-4">About the Event</h2>
                      <p className="text-base sm:text-lg text-[#FFD700]/90">{selectedEvent.description}</p>
                    </div>

                    {/* Event Details */}
                    <div className="bg-[#1B4332]/90 rounded-xl p-4 sm:p-6 shadow-xl">
                      <h2 className="text-xl sm:text-2xl font-bold text-[#FFD700] mb-2 sm:mb-4">Event Details</h2>
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex items-center gap-3">
                          <FaClock className="text-xl sm:text-2xl text-[#FFD700]" />
                          <span className="text-base sm:text-xl text-[#FFD700]">{selectedEvent.time}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <FaMapMarkerAlt className="text-xl sm:text-2xl text-[#FFD700]" />
                          <span className="text-base sm:text-xl text-[#FFD700]">{selectedEvent.venue}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <FaUsers className="text-xl sm:text-2xl text-[#FFD700]" />
                          <span className="text-base sm:text-xl text-[#FFD700]">{selectedEvent.teamSize}</span>
                        </div>
                      </div>
                    </div>

                    {/* Prize Distribution */}
                    <div className="bg-[#1B4332]/90 rounded-xl p-4 sm:p-6 shadow-xl">
                      <h2 className="text-xl sm:text-2xl font-bold text-[#FFD700] mb-2 sm:mb-4">Prize Distribution</h2>
                      <div className="flex flex-wrap gap-2 sm:gap-4">
                        <div className="flex-1 text-center p-2 sm:p-4 bg-[#1B4332] rounded-lg">
                          <div className="text-xl font-bold text-[#FFD700]">1st Prize</div>
                          <div className="text-2xl font-bold text-[#FFD700]">
                            ₹{selectedEvent.firstPrize || '2000'}
                          </div>
                        </div>
                        <div className="flex-1 text-center p-2 sm:p-4 bg-[#1B4332] rounded-lg">
                          <div className="text-xl font-bold text-[#FFD700]">2nd Prize</div>
                          <div className="text-2xl font-bold text-[#FFD700]">
                            ₹{selectedEvent.secondPrize || '1500'}
                          </div>
                        </div>
                        <div className="flex-1 text-center p-2 sm:p-4 bg-[#1B4332] rounded-lg">
                          <div className="text-xl font-bold text-[#FFD700]">3rd Prize</div>
                          <div className="text-2xl font-bold text-[#FFD700]">
                            ₹{selectedEvent.thirdPrize || '1000'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Contact & Rules */}
                  <div className="space-y-4 sm:space-y-6">
                    {/* Contact Information */}
                    <div className="bg-[#1B4332]/90 rounded-xl p-4 sm:p-6 shadow-xl">
                      <h2 className="text-xl sm:text-2xl font-bold text-[#FFD700] mb-2 sm:mb-4">Contact Information</h2>
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex items-center gap-4">
                          <FaUser className="text-3xl text-[#FFD700]" />
                          <div>
                            <span className="text-sm text-[#FFD700]/80">Coordinator</span>
                            <p className="text-2xl font-bold text-[#FFD700]">{selectedEvent.coordinator}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <FaPhone className="text-3xl text-[#FFD700]" />
                          <div>
                            <span className="text-sm text-[#FFD700]/80">Contact</span>
                            <p className="text-2xl font-bold text-[#FFD700]">{selectedEvent.contact}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Rules and Regulations */}
                    <div className="bg-[#1B4332]/90 rounded-xl p-4 sm:p-6 shadow-xl">
                      <h2 className="text-xl sm:text-2xl font-bold text-[#FFD700] mb-2 sm:mb-4">Rules & Regulations</h2>
                      <div className="space-y-3 sm:space-y-4">
                        <ul className="list-disc list-inside space-y-3 text-[#FFD700]/90">
                          {selectedEvent.rules ? (
                            selectedEvent.rules.map((rule, index) => (
                              <li key={index} className="text-lg">{rule}</li>
                            ))
                          ) : (
                            <>
                              <li className="text-lg">All participants must carry their college ID cards</li>
                              <li className="text-lg">Registration is mandatory before the event</li>
                              <li className="text-lg">Decision of judges will be final</li>
                              <li className="text-lg">Participants should report 30 minutes before the event</li>
                              <li className="text-lg">Use of unfair means will lead to disqualification</li>
                              {selectedEvent.teamSize.toLowerCase().includes('team') && (
                                <li className="text-lg">All team members must be from the same college</li>
                              )}
                            </>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Registration Button */}
                <motion.a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSf_WwWrvN91MIFZnk4rer4Dtb40FV_HNYs-BJsmwdPwka4Wiw/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-[#FFD700] text-[#1B4332] font-bold text-lg sm:text-xl py-3 sm:py-4 mt-6 sm:mt-8 rounded-xl
                    shadow-xl hover:bg-[#FFD700]/90 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Register Now
                </motion.a>
              </div>
            </div>
          </motion.div>
        ) : (
          // Original Events Grid View
          <>
            {/* Header */}
            <div className="bg-[#1B4332] shadow-md backdrop-blur-sm p-4">
              <div className="max-w-[1900px] mx-auto flex items-center">
                <motion.button
                  onClick={onClose}
                  className="text-[#FFD700] hover:text-[#FFF6A5] flex items-center gap-2 
                    bg-[#1B4332]/80 px-4 py-2 rounded-full border-2 border-[#FFD700]
                    transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaArrowLeft className="text-2xl" />
                  <span className="text-lg font-bold">Back</span>
                </motion.button>
                <h1 className="text-[#FFD700] text-3xl font-bold mx-auto pr-[100px]
                  tracking-wider uppercase">
                  Cultural Events
                </h1>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-8xl mx-auto">
                {culturalEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setSelectedEvent(event)}
                    className="bg-[#1B4332]/90 rounded-xl p-8 text-[#FFD700] shadow-lg backdrop-blur-sm
                      min-h-[500px] flex flex-col cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                  >
                    {/* Event Image */}
                    <div className="w-full h-48 mb-6 overflow-hidden rounded-lg">
                      <img
                        src={event.image || `/images/${event.name.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                        alt={event.name}
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src = `/images/cultural/${event.name.toLowerCase().replace(/\s+/g, '-')}.jpg`;
                        }}
                      />
                    </div>

                    {/* Event Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <FaMusic className="text-3xl" />
                      <h3 className="text-2xl font-bold">{event.name}</h3>
                    </div>

                    {/* Event Description */}
                    <p className="mb-4 text-base opacity-90">{event.description}</p>

                    {/* Event Details */}
                    <div className="mt-auto space-y-3 bg-[#1B4332]/50 p-4 rounded-lg">
                      {/* Contact Information Section */}
                      <div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <FaUser className="text-2xl" />
                            <div>
                              <span className="text-sm opacity-80">Coordinator</span>
                              <p className="text-xl font-bold">{event.coordinator}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <FaPhone className="text-2xl" />
                            <div>
                              <span className="text-sm opacity-80">Contact</span>
                              <p className="text-xl font-bold">{event.contact}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CulturalEvents; 