import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTrophy, FaClock, FaMapMarkerAlt, FaUsers, FaArrowLeft, FaPhone, FaTimes, FaAward, FaClipboardList, FaUser } from 'react-icons/fa';
import { departmentEvents } from '../data/departmentEvents';

const DepartmentEvents = ({ department: initialDepartment, departmentFullName, onClose }) => {
  const [selectedDept, setSelectedDept] = useState(initialDepartment);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  
  const getFullDeptName = (dept) => {
    const deptNames = {
      'CSE & AI': 'CSE & AI',
      'IT': 'Information Technology',
      'ECE': 'Electronics & Communication',
      'EEE': 'Electrical & Electronics',
      'MECH': 'Mechanical Engineering',
      'DIPLOMA': 'Diploma'
    };
    return deptNames[dept] || dept;
  };

  const events = departmentEvents[selectedDept] || [];

  const handleDepartmentClick = (dept) => {
    const deptCode = dept.split(' ')[0];
    setSelectedDept(deptCode);
  };

  const handleMouseMove = (e, cardElement) => {
    const rect = cardElement.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const closeEventDetails = () => {
    setSelectedEvent(null);
  };

  // If an event is selected, show only that event's details
  if (selectedEvent) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-gradient-to-br from-[#F7F729] via-[#F7F729] to-[#3E6913]"
      >
        {/* Header */}
        <div className="bg-[#1B4332] p-4">
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
              <span className="text-lg font-bold">Back</span>
            </motion.button>
            <h1 className="text-[#FFD700] text-3xl font-bold text-center flex-1">
              {selectedEvent.name}
            </h1>
            <div className="w-[116px]"></div>
          </div>
        </div>

        {/* Event Content with Scrollbar */}
        <div className="container mx-auto p-8 mt-4 overflow-y-auto h-[calc(100vh-80px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {/* Left Column */}
            <div className="space-y-6">
              {/* About the Event */}
              <div className="bg-[#1B4332] rounded-xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold text-[#FFD700] mb-4">About the Event</h2>
                <p className="text-lg text-[#FFD700]/90">{selectedEvent.description}</p>
              </div>

              {/* Event Details */}
              <div className="bg-[#1B4332] rounded-xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Event Details</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <FaClock className="text-2xl text-[#FFD700]" />
                    <span className="text-xl text-[#FFD700]">{selectedEvent.time}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaMapMarkerAlt className="text-2xl text-[#FFD700]" />
                    <span className="text-xl text-[#FFD700]">{selectedEvent.venue}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaUsers className="text-2xl text-[#FFD700]" />
                    <span className="text-xl text-[#FFD700]">{selectedEvent.teamSize}</span>
                  </div>
                </div>
              </div>

              {/* Prize Distribution */}
              <div className="bg-[#1B4332] rounded-xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Prize Distribution</h2>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-[#1B4332] rounded-lg">
                    <div className="text-xl font-bold text-[#FFD700]">1st Prize</div>
                    <div className="text-2xl font-bold text-[#FFD700]">
                      ₹{selectedEvent.firstPrize || 'NA'}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-[#1B4332] rounded-lg">
                    <div className="text-xl font-bold text-[#FFD700]">2nd Prize</div>
                    <div className="text-2xl font-bold text-[#FFD700]">
                      ₹{selectedEvent.secondPrize || 'NA'}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-[#1B4332] rounded-lg">
                    <div className="text-xl font-bold text-[#FFD700]">3rd Prize</div>
                    <div className="text-2xl font-bold text-[#FFD700]">
                      ₹{selectedEvent.thirdPrize || 'NA'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Contact Information */}
              <div className="bg-[#1B4332] rounded-xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Contact Information</h2>
                <div className="space-y-4">
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
              <div className="bg-[#1B4332] rounded-xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Rules & Regulations</h2>
                <div className="space-y-4">
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

          {/* Registration Button - Full Width */}
          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf_WwWrvN91MIFZnk4rer4Dtb40FV_HNYs-BJsmwdPwka4Wiw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-[#FFD700] text-[#1B4332] font-bold text-xl py-4 mt-12 rounded-xl
              shadow-xl hover:bg-[#FFD700]/90 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Register Now
          </motion.a>
        </div>
      </motion.div>
    );
  }

  // Original events grid view
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col bg-gradient-to-br from-[#F7F729] via-[#F7F729] to-[#3E6913]"
    >
      {/* Navigation Menu Bar */}
      <div className="sticky top-0 z-20 bg-[#1B4332] shadow-lg">
        <div className="max-w-8xl mx-auto px-4">
          <div className="flex items-center h-16">
            <motion.button
              onClick={onClose}
              className="text-[#FFD700] px-4"
              whileTap={{ scale: 0.95 }}
            >
              <FaArrowLeft className="text-xl" />
            </motion.button>
            
            <div className="flex-1 flex justify-evenly items-center">
              {['CSE & AI', 'IT', 'ECE', 'EEE', 'MECH', 'DIPLOMA'].map((dept) => (
                <button
                  key={dept}
                  onClick={() => handleDepartmentClick(dept)}
                  className={`px-4 py-2 rounded-full text-sm font-medium
                    ${selectedDept === (dept === 'CSE & AI' ? 'CSE' : dept)
                      ? 'bg-[#FFD700] text-[#1B4332] font-bold border-2 border-[#FFD700]' 
                      : 'text-[#FFD700] border-2 border-[#FFD700] hover:bg-[#1B4332]/50'}`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content Area with Scrollbar */}
      <div className="flex-1 overflow-y-auto h-[calc(100vh-64px)]">
        <div className="container mx-auto p-3 sm:p-4 md:p-6 lg:p-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B4332] mb-6 sm:mb-8 md:mb-10 text-center">
            {selectedDept === 'CSE' ? 'CSE & AI Events' : `${selectedDept} Events`}
          </h2>
          <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleEventClick(event)}
                onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => {
                  setHoveredCard(null);
                  setMousePosition({ x: 0, y: 0 });
                }}
                className="bg-[#1B4332] p-4 sm:p-6 md:p-8 rounded-xl text-[#FFD700] shadow-lg hover:shadow-2xl 
                  transition-all duration-300 relative cursor-pointer overflow-hidden
                  transform hover:scale-[1.02] min-h-[350px] sm:min-h-[400px]
                  flex flex-col"
              >
                {/* Event content */}
                <div className="relative z-10 flex flex-col flex-grow">
                  <h2 className="text-3xl font-bold mb-6 text-[#FFD700]">{event.name}</h2>
                  <p className="mb-6 text-[#FFD700]/90 text-lg">{event.description}</p>
                  <div className="space-y-4">
                    {[
                      { icon: FaClock, text: event.time },
                      { icon: FaMapMarkerAlt, text: event.venue }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-lg text-[#FFD700]">
                        <item.icon className="text-xl text-[#FFD700]" />
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex-grow" />
                  {/* View Details Hint */}
                  <div className="mt-auto pt-4 pb-14 flex justify-center">
                    <div className="bg-[#1B4332]/80 border-2 border-[#FFD700] rounded-full px-6 py-2
                      text-[#FFD700] text-lg font-medium hover:bg-[#1B4332] transition-all duration-300
                      shadow-lg hover:shadow-xl cursor-pointer animate-pulse">
                      Click to view more details
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DepartmentEvents; 