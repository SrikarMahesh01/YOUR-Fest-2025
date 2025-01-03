import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BranchButton from './BranchButton';
import DepartmentEvents from './DepartmentEvents';
import { FaTimes, FaBars } from 'react-icons/fa';

// Update branches to remove AI and keep CSE as CSE & AI
const branches = [
  { id: 'CSE', name: 'CSE & AI', fullName: 'Computer Science & AI' },
  { id: 'IT', name: 'IT', fullName: 'Information Technology' },
  { id: 'ECE', name: 'ECE', fullName: 'Electronics & Communication' },
  { id: 'EEE', name: 'EEE', fullName: 'Electrical & Electronics' },
  { id: 'MECH', name: 'MECH', fullName: 'Mechanical Engineering' },
  { id: 'DIPLOMA', name: 'DIPLOMA', fullName: 'Diploma' }
];

const Header = ({ onClose, onDepartmentEventOpen }) => {
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleBranchClick = (branchId) => {
    setSelectedDepartment(branchId);
    onDepartmentEventOpen(true);
  };

  const handleDepartmentClose = () => {
    setSelectedDepartment(null);
    onDepartmentEventOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  if (selectedDepartment) {
    return (
      <DepartmentEvents
        department={selectedDepartment}
        departmentFullName={branches.find(b => b.id === selectedDepartment)?.fullName}
        onClose={handleDepartmentClose}
      />
    );
  }

  return (
    <div className="mb-8">
      <div className="flex justify-end px-4">
        <motion.button
          onClick={onClose}
          className="text-[#4F5F22] hover:text-[#3E6913] p-2 rounded-full"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaTimes className="text-xl" />
        </motion.button>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-4 px-4 w-full mx-auto">
        {branches.map((branch, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: index * 0.1,
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
          >
            <BranchButton 
              branch={branch.name}
              onBranchClick={() => handleBranchClick(branch.id)}
            />
          </motion.div>
        ))}
      </div>

      <nav className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
        <button className="sm:hidden" onClick={toggleMobileMenu}>
          <FaBars className="text-2xl" />
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#1B4332]/95">
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            {/* Mobile navigation items */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
