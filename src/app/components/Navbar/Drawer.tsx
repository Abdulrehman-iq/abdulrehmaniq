'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaWhatsapp, FaDatabase, FaTimes } from 'react-icons/fa';
import { SiPython, SiApachespark, SiApacheairflow, SiDocker } from 'react-icons/si';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Drawer({ isOpen, onClose }: DrawerProps) {
  // Disable scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const dataEngineeringIcons = [
    { icon: SiPython, color: "#3776ab", name: "Python", desc: "Data Processing" },
    { icon: SiApachespark, color: "#e25a1c", name: "Apache Spark", desc: "Big Data" },
    { icon: SiApacheairflow, color: "#017cee", name: "Apache Airflow", desc: "Orchestration" },
    { icon: FaDatabase, color: "#336791", name: "Databases", desc: "Data Storage" },
    { icon: SiDocker, color: "#2496ed", name: "Docker", desc: "Containerization" }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/Abdulrehman-iq",
      color: "#ffffff",
      name: "GitHub"
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/abdulrehman-iqbal-24a129219/",
      color: "#0077b5",
      name: "LinkedIn"
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/923338681426",
      color: "#25d366",
      name: "WhatsApp"
    }
  ];

  const navigationLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'What I Offer', href: '#services' }
  ];

  // Enhanced drawer animation variants
  const drawerVariants = {
    closed: { 
      x: '100%', 
      opacity: 0,
      transition: { 
        type: 'spring', 
        stiffness: 400, 
        damping: 35,
        duration: 0.3
      }
    },
    open: { 
      x: 0, 
      opacity: 1, 
      transition: { 
        type: 'spring', 
        stiffness: 350, 
        damping: 30,
        duration: 0.4
      } 
    }
  };

  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay - Dark theme consistent */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[90] md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={overlayVariants}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Drawer - Consistent with dark theme */}
          <motion.aside
            className="fixed top-0 right-0 h-full w-[85vw] max-w-sm z-[100] shadow-2xl flex flex-col border-l border-white/10 md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={drawerVariants}
            style={{
              background: '#0d0d0d',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
            }}
          >
            {/* Header - Consistent styling */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
              <motion.span 
                className="font-bold text-xl text-[#fffce1] tracking-wide"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Menu
              </motion.span>
              <motion.button
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:border-cyan-400 transition-all duration-300"
                aria-label="Close navigation menu"
                onClick={onClose}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 0.1 }}
              >
                <FaTimes className="text-xl text-cyan-400 transition-colors" />
              </motion.button>
            </div>

            {/* Navigation Links - Primary section */}
            <nav className="flex flex-col gap-1 px-6 py-6">
              <motion.h3 
                className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Navigation
              </motion.h3>
              {navigationLinks.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center px-4 py-3 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300 text-[#fffce1] font-medium"
                  onClick={onClose}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 3 }}
                >
                  <span className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-3">→</span>
                  <span className="group-hover:text-cyan-400 transition-colors duration-300">{item.label}</span>
                </motion.a>
              ))}
            </nav>

            {/* Tech Stack Section - Smaller and refined */}
            <div className="px-6 py-4 border-t border-white/5">
              <motion.h3 
                className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                Tech Stack
              </motion.h3>
              <div className="flex flex-wrap gap-3">
                {dataEngineeringIcons.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="relative group/icon cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-white/30 transition-all duration-300 group relative overflow-hidden"
                    >
                      <tech.icon
                        style={{ color: tech.color }}
                        className="text-lg relative z-10 group-hover/icon:scale-110 transition-transform duration-300"
                      />
                      <motion.div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
                        style={{
                          background: `linear-gradient(135deg, ${tech.color}20, ${tech.color}05)`
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    {/* Simplified tooltip */}
                    <motion.div
                      className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-black/90 text-white text-xs rounded-lg opacity-0 group-hover/icon:opacity-100 whitespace-nowrap pointer-events-none border border-white/20 z-50"
                      initial={{ y: 10, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="font-medium text-[#fffce1]">{tech.name}</div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Icons - Bottom section */}
            <div className="px-6 mt-auto mb-8 border-t border-white/5 pt-6">
              <motion.h3 
                className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
              >
                Connect
              </motion.h3>
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-11 h-11 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:border-white/30 transition-all duration-300 group overflow-hidden"
                    title={social.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.1 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: 8,
                      boxShadow: `0 10px 30px ${social.color}30`
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
                      style={{
                        background: `linear-gradient(135deg, ${social.color}20, ${social.color}05)`
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <social.icon 
                      className="text-xl transition-all duration-300 relative z-10 group-hover:drop-shadow-lg" 
                      style={{ color: social.color }} 
                    />
                    <motion.div
                      className="absolute inset-0 rounded-xl border-2 opacity-0 group-hover:opacity-100"
                      style={{ borderColor: social.color }}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Subtle glow effect at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cyan-500/5 to-transparent pointer-events-none" />
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}