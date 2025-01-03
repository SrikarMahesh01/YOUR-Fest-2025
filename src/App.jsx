import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import EventSection from './components/EventSection';
import Coordinators from './components/Coordinators';
import Poster from './components/Poster';
import CulturalEvents from './components/CulturalEvents';
import FallingStars from './components/FallingStars';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaGraduationCap, FaCalendarCheck, FaImages, FaPhoneAlt, FaMusic, FaUsers, FaFacebook, FaInstagram, FaLinkedin, FaStore } from 'react-icons/fa';
import ContactModal from './components/ContactModal';
import AnimatedBackground from './components/AnimatedBackground';
import Confetti from 'react-confetti';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import DepartmentEvents from './components/DepartmentEvents';
import BranchButton from './components/BranchButton';

const getFullDeptName = (dept) => {
  const deptNames = {
    'CSE & AI': 'CSE & AI',
    'IT': 'IT',
    'ECE': 'ECE',
    'EEE': 'EEE',
    'MECH': 'MECH',
    'DIPLOMA': 'DIPLOMA'
  };
  return deptNames[dept] || dept;
};

function App() {
  const [selectedType, setSelectedType] = useState(null);
  const [showCoordinators, setShowCoordinators] = useState(false);
  const [showPosterButtons, setShowPosterButtons] = useState(false);
  const [showPoster, setShowPoster] = useState(null);
  const [isEventSectionExpanded, setIsEventSectionExpanded] = useState(true);
  const [isEventSectionMaximized, setIsEventSectionMaximized] = useState(false);
  const [isEventSectionMinimized, setIsEventSectionMinimized] = useState(false);
  const [showBranches, setShowBranches] = useState(false);
  const [isDepartmentEventOpen, setIsDepartmentEventOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showEventDetails, setShowEventDetails] = useState(false);
  const mainContainerRef = useRef(null);
  const { ref, isVisible } = useScrollAnimation();
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [showEventTypesModal, setShowEventTypesModal] = useState(false);
  const [showStalls, setShowStalls] = useState(false);

  useEffect(() => {
    console.log('State Debug:', {
      showCoordinators,
      isDepartmentEventOpen,
      isEventSectionMaximized
    });
  }, [showCoordinators, isDepartmentEventOpen, isEventSectionMaximized]);

  useEffect(() => {
    if (showCoordinators) {
      setIsEventSectionMinimized(true);
      setIsEventSectionMaximized(false);
    } else {
      setIsEventSectionMinimized(false);
    }
  }, [showCoordinators]);

  useEffect(() => {
    const handleScroll = () => {
      if (!mainContainerRef.current) return;
      
      const scrollPosition = window.scrollY;
      const containerHeight = mainContainerRef.current.scrollHeight - window.innerHeight;
      const progress = Math.min(Math.max(scrollPosition / containerHeight, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClose = () => {
    // Reset all states to return to main page
    resetToHome();
    // Add scroll reset
    window.scrollTo(0, 0);
  };

  const handleEventSectionClick = () => {
    if (showCoordinators) {
      setIsEventSectionMaximized(true);
    } else if (!isEventSectionMaximized) {
      setIsEventSectionMaximized(true);
    }
  };

  const resetToHome = () => {
    setShowCoordinators(false);
    setShowPosterButtons(false);
    setShowPoster(null);
    setShowBranches(false);
    setIsDepartmentEventOpen(false);
    setSelectedType(null);
    // Add scroll reset
    window.scrollTo(0, 0);
  };

  const handleDepartmentEventOpen = (isOpen) => {
    setIsDepartmentEventOpen(isOpen);
    if (!isOpen) {
      // Reset scroll when closing department events
      window.scrollTo(0, 0);
    }
  };

  const handleBranchesClick = () => {
    setSelectedType(null);
    setShowBranches(true);
    setShowContact(false);
  };

  const createConfetti = () => {
    const confettiElements = [];
    for (let i = 0; i < 100; i++) { // Adjust the number of confetti pieces
      const shape = Math.random() < 0.5 ? 'circle' : Math.random() < 0.5 ? 'square' : 'triangle'; // Randomly choose shape
      confettiElements.push(
        <div 
          className={`confetti ${shape}`} 
          key={i} 
          style={{ 
            left: `${Math.random() * 100}vw`, 
            top: `${Math.random() * 100}vh`, 
            animationDelay: `${Math.random() * 2}s` 
          }} 
        />
      );
    }
    return confettiElements;
  };

  const handleDepartmentClick = (dept) => {
    console.log('=== Department Click Debug ===');
    console.log('Department clicked:', dept);
    const deptCode = dept.split(' ')[0];
    console.log('Department code:', deptCode);
    
    setSelectedDepartment(deptCode);
    setIsDepartmentEventOpen(true);
    setShowBranches(false);
  };

  const handleEventsClick = () => {
    setShowEventTypesModal(true);
    setShowBranches(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#F7F729] via-[#F7F729] to-[#3E6913]">
      {/* Background Overlays */}
      <div className="background-overlay -z-20"></div>
      <AnimatedBackground />

      {/* Main Content */}
      <div className="flex-grow relative z-10">
        {!showCoordinators && !isDepartmentEventOpen && !isEventSectionMaximized && (
          <div className="relative z-50">
            {/* Header Section */}
            <div className="flex items-center justify-between pl-6 pr-8 pt-4">
              <div className="flex items-center flex-1">
                <a 
                  href="https://usharama.edu.in/home" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity duration-300 shrink-0"
                >
                  <img
                    src="/logo.png"
                    alt="USHARAMA College Logo"
                    className="h-16 w-auto md:h-20 object-contain"
                  />
                </a>
                <div className="flex-1 flex justify pl-[200px]">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1B4332] h-24 md:h-28 flex items-center font-roboto">
                    yoUR FEST-2025
                  </h1>
                </div>
                {/* Register Now Button - Moved inside header with larger size */}
                {!showCoordinators && !isDepartmentEventOpen && !isEventSectionMaximized && !selectedType && !showPosterButtons && !showPoster && !showContact && (
                  <motion.a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSf_WwWrvN91MIFZnk4rer4Dtb40FV_HNYs-BJsmwdPwka4Wiw/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FFF6A5] text-indigo-900 px-8 py-3 rounded-full font-bold text-2xl md:text-3xl hover:bg-[#FFF6A5]/90 transition-all duration-300 border-2 border-indigo-900/20 hover:border-indigo-900/50 shadow-lg ml-4"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Register Now
                  </motion.a>
                )}
              </div>
            </div>

            {/* Gradient Line */}
            <div className="mt-4">
              <div className="h-1 bg-gradient-to-r from-[#3E6913] via-[#4F5F22] to-[#3E6913]"></div>
            </div>

            {/* Navigation Menu */}
            <nav className="bg-[#FFF6A5]/90 shadow-md backdrop-blur-sm">
              <div className="w-full px-16 max-w-[1900px] mx-auto">
                <div className="flex items-center py-2">
                  <div className="flex items-center mr-auto pl-4">
                    <motion.button
                      onClick={resetToHome}
                      className="text-[#4F5F22] hover:text-[#4F5F22] font-medium transition-all duration-300 flex items-center gap-3 cursor-pointer whitespace-nowrap px-6 min-w-[120px] justify-center relative rounded-full hover:bg-[#DC143C]/20 py-1.5 group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaHome className="text-xl" />
                      Home
                    </motion.button>
                  </div>

                  <div className="flex justify-evenly items-center gap-12 flex-1 px-4"> 

                    <div className="flex items-center">
                      <motion.button
                        onClick={handleEventsClick}
                        className={`text-[#4F5F22] font-medium transition-all duration-300 flex items-center gap-3 cursor-pointer whitespace-nowrap px-2 min-w-[140px] justify-center relative rounded-full py-2 group ${
                          showEventTypesModal || showBranches
                          ? 'bg-[#DC143C]/20 text-[#4F5F22]' 
                          : 'hover:bg-[#DC143C]/20 hover:text-[#4F5F22]'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaCalendarCheck className="text-xl" />
                        Events
                      </motion.button>
                    </div>

                    <div className="flex items-center">
                      <motion.button
                        onClick={() => setShowPosterButtons(true)}
                        className="text-[#4F5F22] hover:text-[#4F5F22] font-medium transition-all duration-300 flex items-center gap-3 cursor-pointer whitespace-nowrap px-6 min-w-[160px] justify-center relative rounded-full hover:bg-[#DC143C]/20 py-2 group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaImages className="text-xl" />
                        Posters
                      </motion.button>
                    </div>

                    <div className="flex items-center">
                      <motion.button
                        onClick={() => setShowStalls(true)}
                        className="text-[#4F5F22] hover:text-[#4F5F22] font-medium transition-all duration-300 flex items-center gap-3 cursor-pointer whitespace-nowrap px-6 min-w-[140px] justify-center relative rounded-full hover:bg-[#DC143C]/20 py-2 group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaStore className="text-xl" />
                        Stalls
                      </motion.button>
                    </div>

                    <div className="flex items-center">
                      <motion.button
                        onClick={() => setShowCoordinators(true)}
                        className="text-[#4F5F22] hover:text-[#4F5F22] font-medium transition-all duration-300 flex items-center gap-3 cursor-pointer whitespace-nowrap px-6 min-w-[140px] justify-center relative rounded-full hover:bg-[#DC143C]/20 py-2 group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaUsers className="text-xl" />
                        Coordinators
                      </motion.button>
                    </div>

                    <div className="flex items-center">
                      <motion.button
                        onClick={() => {
                          resetToHome();
                          setTimeout(() => {
                            setShowContact(true);
                          }, 100);
                        }}
                        className="text-[#4F5F22] hover:text-[#4F5F22] font-medium transition-all duration-300 flex items-center gap-3 cursor-pointer whitespace-nowrap px-6 min-w-[140px] justify-center relative rounded-full hover:bg-[#DC143C]/20 py-2 group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaPhoneAlt className="text-xl" />
                        Contact
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </nav>

            {/* Branches Section */}
            {showBranches && (
              <div className="flex flex-wrap justify-center gap-4 p-4">
                {['CSE & AI', 'IT', 'ECE', 'EEE', 'MECH', 'DIPLOMA'].map((branch) => (
                  <BranchButton
                    key={branch}
                    branch={branch}
                    onBranchClick={handleDepartmentClick}
                  />
                ))}
              </div>
            )}

            {/* Enhanced Fest Description Section */}
            <div className="text-center p-8 space-y-12 bg-gradient-to-r from-[#FFF6A5]/80 via-[#FFD700]/80 to-[#FFF6A5]/80 backdrop-blur-sm">
              {/* Main Welcome Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-[#1B4332] mb-6">Welcome to yoUR FEST-2025!</h2>
                <p className="text-xl text-[#333333] leading-relaxed">
                  Join us for the most anticipated technical and cultural extravaganza of the year! 
                  yoUR Fest 2025 brings together talent, innovation, and creativity in a spectacular celebration.
                </p>
              </motion.div>

              {/* Key Features Grid */}
              <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 max-w-7xl mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="p-6 bg-[#FFF6A5]/60 rounded-xl hover:bg-[#FFF6A5]/80 transition-all duration-300 transform 
                    hover:-translate-y-2 hover:shadow-xl hover:shadow-[#4F5F22]/20 cursor-pointer
                    hover:scale-105 group"
                >
                  <div className="text-4xl text-[#4F5F22] mb-4 group-hover:scale-110 transition-transform duration-300">🎭</div>
                  <h3 className="text-2xl font-bold text-[#333333] mb-3 group-hover:text-[#1B4332] transition-colors duration-300">Cultural Showcase</h3>
                  <p className="text-[#333333]">Experience mesmerizing performances, music competitions, and artistic displays.</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="p-6 bg-[#FFF6A5]/60 rounded-xl hover:bg-[#FFF6A5]/80 transition-all duration-300 transform 
                    hover:-translate-y-2 hover:shadow-xl hover:shadow-[#4F5F22]/20 cursor-pointer
                    hover:scale-105 group"
                >
                  <div className="text-4xl text-[#4F5F22] mb-4 group-hover:scale-110 transition-transform duration-300">🏆</div>
                  <h3 className="text-2xl font-bold text-[#333333] mb-3 group-hover:text-[#1B4332] transition-colors duration-300">Amazing Prizes</h3>
                  <p className="text-[#333333]">Compete for exciting prizes worth <b>5 Lakhs+</b> across various events!</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="p-6 bg-[#FFF6A5]/60 rounded-xl hover:bg-[#FFF6A5]/80 transition-all duration-300 transform 
                    hover:-translate-y-2 hover:shadow-xl hover:shadow-[#4F5F22]/20 cursor-pointer
                    hover:scale-105 group"
                >
                  <div className="text-4xl text-[#4F5F22] mb-4 group-hover:scale-110 transition-transform duration-300">🎓</div>
                  <h3 className="text-2xl font-bold text-[#333333] mb-3 group-hover:text-[#1B4332] transition-colors duration-300">Technical Events</h3>
                  <p className="text-[#333333]">Showcase your technical prowess through innovative projects and competitions.</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="p-6 bg-[#FFF6A5]/60 rounded-xl hover:bg-[#FFF6A5]/80 transition-all duration-300 transform 
                    hover:-translate-y-2 hover:shadow-xl hover:shadow-[#4F5F22]/20 cursor-pointer
                    hover:scale-105 group"
                >
                  <div className="text-4xl text-[#4F5F22] mb-4 group-hover:scale-110 transition-transform duration-300">🏪</div>
                  <h3 className="text-2xl font-bold text-[#333333] mb-3 group-hover:text-[#1B4332] transition-colors duration-300">Food & Fun Stalls</h3>
                  <p className="text-[#333333]">Enjoy a variety of food stalls, game zones, and entertainment activities throughout the fest!</p>
                </motion.div>
              </div>

              {/* Event Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="max-w-4xl mx-auto bg-[#FFF6A5]/60 p-8 rounded-xl
                  hover:bg-[#FFF6A5]/80 transition-all duration-300 
                  hover:shadow-xl hover:shadow-[#4F5F22]/20 transform 
                  hover:scale-[1.02] group"
              >
                <h3 className="text-3xl font-bold text-[#1B4332] mb-6 
                  group-hover:scale-105 transition-transform duration-300">Event Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300">
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-300">📅</span>
                      <div>
                        <h4 className="font-bold text-[#333333] group-hover:text-[#1B4332] transition-colors duration-300">Date</h4>
                        <p>January 24-25, 2025</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300">
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-300">🎯</span>
                      <div>
                        <h4 className="font-bold text-[#333333] group-hover:text-[#1B4332] transition-colors duration-300">Participation</h4>
                        <p>Open to all Engineering & Diploma Colleges</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300">
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-300">🎪</span>
                      <div>
                        <h4 className="font-bold text-[#333333] group-hover:text-[#1B4332] transition-colors duration-300">Venue</h4>
                        <p>Usha Rama College of Engineering And Technology Campus</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300">
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-300">🎟️</span>
                      <div>
                        <h4 className="font-bold text-[#333333] group-hover:text-[#1B4332] transition-colors duration-300">Registration</h4>
                        <p>100 Rupees</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="pt-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#4F5F22] text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-[#3E6913] transition-colors duration-300"
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSf_WwWrvN91MIFZnk4rer4Dtb40FV_HNYs-BJsmwdPwka4Wiw/viewform', '_blank')}
                >
                  Register Now and Join the Celebration! 🎉
                </motion.button>
              </motion.div>
            </div>
          </div>
        )}

        {/* Main content */}
        {!isEventSectionMaximized && (
          <>
            <div className="relative">
              <div className="w-full px-8 py-8">
                <div className="max-w-full mx-auto">
                  <div className="space-y-8">
                    {/* Coordinators Section */}
                    <AnimatePresence>
                      {showCoordinators && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.5 }}
                          className="overflow-hidden relative z-30"
                        >
                          <Coordinators onClose={() => setShowCoordinators(false)} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Event Details Modal */}
        <AnimatePresence>
          {showEventDetails && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto"
            >
              <div 
                className="absolute inset-0 bg-gradient-to-br from-[#F7F729] via-[#F7F729] to-[#3E6913]" 
                onClick={() => {
                  setShowEventDetails(false);
                  setIsEventSectionMaximized(false);
                }}
              />
              <div className="relative w-full min-h-screen py-6 px-2">
                <div ref={mainContainerRef} className="w-full max-w-[90%] mx-auto">
                  <EventSection 
                    isMaximized={true}
                    onClose={() => {
                      setShowEventDetails(false);
                      setIsEventSectionMaximized(false);
                    }}
                    scrollProgress={scrollProgress}
                    showEventDetails={showEventDetails}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Modals */}
        <AnimatePresence>
          {selectedType === 'Cultural' && (
            <CulturalEvents 
              onClose={handleClose}
            />
          )}
          
          {showPosterButtons && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
            >
              <div 
                className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
                onClick={resetToHome} 
              />
              <div className="relative bg-gradient-to-br from-[#FFF6A5] via-[#B9C44C] to-[#3E6913] rounded-lg p-8 backdrop-blur-lg border-4 border-[#FFF6A5] max-w-2xl w-full shadow-lg">
                <button
                  onClick={resetToHome}
                  className="absolute top-4 right-4 text-[#333333] hover:text-[#333333]/80 
                    transition-colors duration-200 text-xl"
                >
                  Close
                </button>
                <h2 className="text-2xl font-bold text-[#333333] mb-6 text-center">Select Poster Type</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.button
                    onClick={() => {
                      setShowPosterButtons(false);
                      setShowPoster('B.Tech');
                    }}
                    className="bg-gradient-to-br from-[#FFF6A5] via-[#B9C44C] to-[#3E6913] rounded-lg p-6 text-[#333333] 
                      hover:opacity-90 transition-all duration-300
                      border border-[#FFF6A5]/20 hover:border-[#FFF6A5]/50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <h3 className="text-xl font-bold">B.Tech</h3>
                  </motion.button>
                  <motion.button
                    onClick={() => {
                      setShowPosterButtons(false);
                      setShowPoster('Diploma');
                    }}
                    className="bg-gradient-to-br from-[#FFF6A5] via-[#B9C44C] to-[#3E6913] rounded-lg p-6 text-[#333333] 
                      hover:opacity-90 transition-all duration-300
                      border border-[#FFF6A5]/20 hover:border-[#FFF6A5]/50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <h3 className="text-xl font-bold">Diploma</h3>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}

          {showPoster && (
            <AnimatePresence>
              <Poster type={showPoster} onClose={handleClose} />
            </AnimatePresence>
          )}

          {showContact && (
            <AnimatePresence>
              <ContactModal onClose={() => setShowContact(false)} />
            </AnimatePresence>
          )}
        </AnimatePresence>

        {/* Asymmetrical Layout for Events */}
        <div className="asymmetrical-layout">
          <motion.div ref={ref} className={`asymmetrical-item ${isVisible ? 'visible' : ''}`}>
            {/* Event Card Content */}
          </motion.div>
          <motion.div ref={ref} className={`asymmetrical-item ${isVisible ? 'visible' : ''}`}>
            {/* Event Card Content */}
          </motion.div>
          <motion.div ref={ref} className={`asymmetrical-item ${isVisible ? 'visible' : ''}`}>
            {/* Event Card Content */}
          </motion.div>
        </div>

        {/* Department Events Modal */}
        <AnimatePresence mode="wait">
          {isDepartmentEventOpen && selectedDepartment && (
            <motion.div
              key="department-events-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50"
            >
              <DepartmentEvents
                department={selectedDepartment}
                departmentFullName={getFullDeptName(selectedDepartment)}
                onClose={() => {
                  setIsDepartmentEventOpen(false);
                  setSelectedDepartment(null);
                  setShowBranches(true);
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {showEventTypesModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
          >
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
              onClick={() => setShowEventTypesModal(false)} 
            />
            <div className="relative bg-gradient-to-br from-[#FFF6A5] via-[#B9C44C] to-[#3E6913] rounded-lg p-8 backdrop-blur-lg border-4 border-[#FFF6A5] max-w-2xl w-full shadow-lg">
              <button
                onClick={() => setShowEventTypesModal(false)}
                className="absolute top-4 right-4 text-[#333333] hover:text-[#333333]/80 
                  transition-colors duration-200 text-xl"
              >
                Close
              </button>
              <h2 className="text-2xl font-bold text-[#333333] mb-6 text-center">Select Event Type</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.button
                  onClick={() => {
                    setShowBranches(true);
                    setShowEventTypesModal(false);
                  }}
                  className="bg-gradient-to-br from-[#FFF6A5] via-[#B9C44C] to-[#3E6913] rounded-lg p-6 text-[#333333] 
                    hover:opacity-90 transition-all duration-300
                    border border-[#FFF6A5]/20 hover:border-[#FFF6A5]/50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-xl font-bold flex items-center justify-center gap-2">
                    <FaGraduationCap className="text-xl" />
                    Technical Events
                  </span>
                </motion.button>
                <motion.button
                  onClick={() => {
                    setSelectedType('Cultural');
                    setShowEventTypesModal(false);
                  }}
                  className="bg-gradient-to-br from-[#FFF6A5] via-[#B9C44C] to-[#3E6913] rounded-lg p-6 text-[#333333] 
                    hover:opacity-90 transition-all duration-300
                    border border-[#FFF6A5]/20 hover:border-[#FFF6A5]/50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-xl font-bold flex items-center justify-center gap-2">
                    <FaMusic className="text-xl" />
                    Cultural Events
                  </span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Falling Stars - Higher z-index */}
      <div className="relative z-20">
        <FallingStars />
      </div>

      {/* Footer - Only show when no modals are open */}
      {!showCoordinators && !isDepartmentEventOpen && !isEventSectionMaximized && 
       !showContact && !showBranches && !selectedType && (
        <footer className="relative bg-gradient-to-r from-[#FFF6A5]/90 via-[#FFD700]/90 to-[#FFF6A5]/90 backdrop-blur-sm shadow-lg w-full bottom-0">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* College Information */}
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-[#333333] mb-4">Usha Rama College Of Engineering And Technology</h3>
                <p className="text-[#333333]">
                  Telaprolu, Near Gannavaram,<br />
                  Krishna District-521109, <br />
                  Andhra Pradesh, India.
                </p>
              </div>

              {/* Quick Links */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-[#333333] mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <motion.a
                    href="https://usharama.edu.in/home"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[#333333] hover:text-[#4F5F22] transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <b>College Website</b>
                  </motion.a>
                  <motion.a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSf_WwWrvN91MIFZnk4rer4Dtb40FV_HNYs-BJsmwdPwka4Wiw/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[#333333] hover:text-[#4F5F22] transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <b>Register for Events</b>
                  </motion.a>
                  <motion.button
                    onClick={() => {
                      resetToHome();
                      setTimeout(() => {
                        setShowContact(true);
                      }, 100);
                    }}
                    className="block w-full text-[#333333] hover:text-[#4F5F22] transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    Contact Us
                  </motion.button>
                </div>
              </div>

              {/* Social Media & Contact */}
              <div className="text-center md:text-right">
                <h3 className="text-xl font-bold text-[#333333] mb-4">Connect With Us</h3>
                <div className="space-y-2">
                  <p className="text-[#333333]">
                    Email : yourfest2025@usharama.edu.in
                  </p>
                  <p className="text-[#333333]">
                    Phone : +91 9876543210
                  </p>
                  <div className="flex justify-center md:justify-end gap-4 mt-4">
                    <motion.a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#333333] hover:text-[#4F5F22] transition-colors duration-300"
                      whileHover={{ scale: 1.2 }}
                    >
                      <FaFacebook size={24} />
                    </motion.a>
                    <motion.a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#333333] hover:text-[#4F5F22] transition-colors duration-300"
                      whileHover={{ scale: 1.2 }}
                    >
                      <FaInstagram size={24} />
                    </motion.a>
                    <motion.a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#333333] hover:text-[#4F5F22] transition-colors duration-300"
                      whileHover={{ scale: 1.2 }}
                    >
                      <FaLinkedin size={24} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center mt-8 pt-4 border-t border-[#333333]/20">
              <p className="text-[#333333]">
                © {new Date().getFullYear()} yoUR FEST-2025. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}

export default App;
