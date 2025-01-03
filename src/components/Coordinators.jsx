import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaTimes, 
  FaDatabase, FaCode,
  FaMicrochip, FaWifi,
  FaCogs, FaIndustry,
  FaLaptopCode, FaServer,
  FaUser, FaUserTie
} from 'react-icons/fa';

const departments = [
  { 
    name: 'CSE & AI DEPARTMENT',
    faculty: {
      name: 'Mr BV Praveen Kumar',
      phone: '9110362765'
    },
    student: {
      name: 'Rajashekhar Sunkara',
      phone: '9182754804'
    },
    icons: [FaDatabase, FaCode]
  },
  { 
    name: 'IT DEPARTMENT',
    faculty: {
      name: 'Mr B. Trivikrama Rao',
      phone: '9703418339'
    },
    student: {
      name: 'XXXXXXX',
      phone: 'XXXXXX'
    },
    icons: [FaLaptopCode, FaServer]
  },
  { 
    name: 'ECE DEPARTMENT',
    faculty: {
      name: 'Mr. E. Rama Krishna Reddy',
      phone: '9502251501'
    },
    student: {
       name: 'Koushal Kumar Yadav',
      phone: '9949418804'
    },
    icons: [FaMicrochip, FaWifi]
  },
  { 
    name: 'EEE DEPARTMENT',
    faculty: {
      name: 'Mr A. Balaji',
      phone: '9492080980'
    },
    student: {
    name: 'T. Mahesh',
      phone: '9347257321'
    },
    icons: [FaMicrochip, FaWifi]
  },
  { 
    name: 'MECH DEPARTMENT',
    faculty: {
      name: 'Mr. MD Nawad Masid Abdul',
      phone: '7893602287'
    },
    student: {
    name: 'Bh. Naga Pavan',
      phone:'9100653226'
    },
    icons: [FaCogs, FaIndustry]
  },
  { 
    name: 'DIPLOMA DEPARTMENT',
    faculty: [
      {
        name: 'Mr T Srinivasa Rao',
        phone: '9490703377'
      },
      {
        name: 'Mr. K. Ravi Babu',
        phone: '9160359798'
      }
    ],
    student: {
      name: 'T. Jai Ganesh',
      phone: '8500369798'
    },
    icons: [FaCogs, FaIndustry]
  },
  { 
    name: 'S&H DEPARTMENT',
    faculty: {
      name: 'Mr D Victor',
      phone: '7386241791'
    },
    student: {
      name: 'XXXXXXX',
      phone: 'XXXXXX'
    },
    icons: [FaUserTie, FaUser]
  },
];

const Coordinators = ({ onClose }) => {
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const handleDepartmentClick = (dept) => {
    setSelectedDepartment(dept);
  };

  const renderFacultySection = (dept) => {
    if (dept.name === 'DIPLOMA DEPARTMENT') {
      return (
        <div className="space-y-4 w-full col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <FaUserTie className="text-2xl text-[#4F5F22]" />
            <h4 className="text-xl font-bold text-[#4F5F22]">Faculty Coordinators</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dept.faculty.map((faculty, index) => (
              <div key={index} className="bg-[#FFF6A5]/30 p-6 rounded-xl">
                <div className="space-y-3">
                  <p className="text-lg text-[#4F5F22]">{faculty.name}</p>
                  <div className="flex items-center gap-2">
                    <FaPhone className="text-[#4F5F22]" />
                    <span className="text-[#4F5F22]">{faculty.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="bg-[#FFF6A5]/30 p-6 rounded-xl">
        <div className="flex items-center gap-3 mb-4">
          <FaUserTie className="text-2xl text-[#4F5F22]" />
          <h4 className="text-xl font-bold text-[#4F5F22]">Faculty Coordinator</h4>
        </div>
        <div className="space-y-3">
          <p className="text-lg text-[#4F5F22]">{dept.faculty.name}</p>
          <div className="flex items-center gap-2">
            <FaPhone className="text-[#4F5F22]" />
            <span className="text-[#4F5F22]">{dept.faculty.phone}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-gradient-to-br from-[#F7F729] via-[#F7F729] to-[#3E6913] flex items-center justify-center"
    >
      <div className="bg-[#FFF6A5]/90 backdrop-blur-sm w-[95%] h-[90vh] rounded-xl shadow-2xl overflow-hidden">
        <div className="relative h-full p-8">
          <motion.button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#4F5F22] hover:text-[#3E6913] p-2 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaTimes className="text-xl" />
          </motion.button>

          <h2 className="text-4xl font-bold text-center text-[#4F5F22] mb-8">
            {selectedDepartment ? 'Department Coordinators' : 'Select Department'}
          </h2>

          {!selectedDepartment ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 h-[calc(100%-5rem)] overflow-y-auto">
              {departments.map((dept, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleDepartmentClick(dept)}
                  className="bg-[#FFF6A5] p-8 rounded-xl shadow-lg hover:shadow-xl 
                    transition-all duration-300 border-2 border-[#4F5F22]/20 
                    hover:border-[#4F5F22]/50 group relative overflow-hidden
                    hover:bg-white"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-[#4F5F22] mb-4">{dept.name}</h3>
                    <div className="flex justify-center gap-4">
                      {dept.icons.map((Icon, i) => (
                        <Icon key={i} className="text-3xl text-[#4F5F22]" />
                      ))}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-8 shadow-xl
                border-2 border-[#4F5F22]/20 max-w-3xl mx-auto mt-8"
            >
              <div className="flex flex-col items-center space-y-8">
                <h3 className="text-3xl font-bold text-[#4F5F22]">{selectedDepartment.name}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                  {renderFacultySection(selectedDepartment)}

                  {/* Student Coordinator */}
                  <div className={`bg-[#FFF6A5]/30 p-6 rounded-xl ${selectedDepartment.name === 'DIPLOMA DEPARTMENT' ? 'col-span-2' : ''}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <FaUser className="text-2xl text-[#4F5F22]" />
                      <h4 className="text-xl font-bold text-[#4F5F22]">Student Coordinator</h4>
                    </div>
                    <div className="space-y-3">
                      <p className="text-lg text-[#4F5F22]">{selectedDepartment.student.name}</p>
                      <div className="flex items-center gap-2">
                        <FaPhone className="text-[#4F5F22]" />
                        <span className="text-[#4F5F22]">{selectedDepartment.student.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <motion.button
                  onClick={() => setSelectedDepartment(null)}
                  className="mt-6 bg-[#4F5F22] text-white px-6 py-2 rounded-full
                    hover:bg-[#3E6913] transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Back to Departments
                </motion.button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Coordinators;
