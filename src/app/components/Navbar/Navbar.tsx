'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaWhatsapp, FaDatabase } from 'react-icons/fa';
import { SiPython, SiApachespark, SiApacheairflow, SiDocker} from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import SplitType from 'split-type';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);
  const logoCharsRef = useRef<HTMLSpanElement[]>([]);
  const [isAnimated, setIsAnimated] = useState(false);

  // Detect scroll position to change navbar styles
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Initialize logo character animations
  useEffect(() => {
    if (!logoRef.current || isAnimated) return;

    const splitLogo = new SplitType(logoRef.current, {
      types: 'chars',
      tagName: 'span'
    });

    if (splitLogo.chars) {
      logoCharsRef.current = Array.from(splitLogo.chars);
      setIsAnimated(true);

      // Add hover effect to each character with data engineering theme colors
      logoCharsRef.current.forEach((char) => {
        char.style.display = 'inline-block';
        char.style.transition = 'transform 0.2s ease-out';
        char.style.cursor = 'pointer';
        
        char.addEventListener('mouseenter', () => {
          // Data engineering themed colors
          const colors = ['#00c9ff', '#92fe9d', '#60a5fa', '#fbbf24', '#ff6b6b', '#845ec2'];
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          
          gsap.to(char, { 
            y: -15, 
            scale: 1.5, 
            color: randomColor, 
            rotation: Math.random() * 15 - 7.5,
            duration: 0.4,
            ease: 'back.out(2)'
          });
        });
        
        char.addEventListener('mouseleave', () => {
          gsap.to(char, { 
            y: 0, 
            scale: 1, 
            color: '#fffce1',
            rotation: 0,
            duration: 0.6,
            ease: 'elastic.out(1, 0.3)'
          });
        });
      });
    }

    return () => {
      // Clean up event listeners
      logoCharsRef.current.forEach(char => {
        char.removeEventListener('mouseenter', () => {});
        char.removeEventListener('mouseleave', () => {});
      });
    };
  }, [isAnimated]);

  // Enhanced Data Engineering tech icons
  const dataEngineeringIcons = [
    { icon: SiPython, color: "#3776ab", delay: 0, name: "Python", desc: "Data Processing" },
    { icon: SiApachespark, color: "#e25a1c", delay: 0.1, name: "Apache Spark", desc: "Big Data" },
    { icon: SiApacheairflow, color: "#017cee", delay: 0.2, name: "Apache Airflow", desc: "Orchestration" },
    { icon: FaDatabase, color: "#336791", delay: 0.3, name: "Databases", desc: "Data Storage" },
    { icon: SiDocker, color: "#2496ed", delay: 0.5, name: "Docker", desc: "Containerization" }
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

  return (
    <motion.header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#0d0d0d]/95 backdrop-blur-xl shadow-lg shadow-cyan-500/10 border-b border-white/5 py-3'
          : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          
          {/* Logo Section with Enhanced Hover Effects */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Link href="/" className="block">
              <div 
                ref={logoRef} 
                className="font-outfit font-extrabold text-xl md:text-2xl tracking-tight text-[#fffce1] perspective-1000 relative"
              >
                Abdulrehman Iqbal
                <span className="text-cyan-400 animate-pulse">.</span>
              </div>
            </Link>
            
            {/* Enhanced animated underline */}
            <motion.div 
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-400 via-green-400 to-blue-400 shadow-lg shadow-cyan-400/50 rounded-full"
              initial={{ width: 0, opacity: 0 }}
              animate={{ 
                width: isHovered ? '100%' : 0,
                opacity: isHovered ? 1 : 0
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
            
            {/* Glowing background effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-green-400/10 to-blue-400/10 rounded-lg blur-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1.1 : 0.8
              }}
              transition={{ duration: 0.4 }}
            />
            
            {/* Enhanced Data Engineering Tech Stack Display */}
            <AnimatePresence>
              {isHovered && (
                <motion.div 
                  className="absolute -bottom-16 left-0 flex flex-wrap gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {dataEngineeringIcons.map((tech, index) => (
                    <motion.div
                      key={index}
                      className="relative group/icon cursor-pointer"
                      initial={{ 
                        opacity: 0, 
                        y: 30, 
                        scale: 0.3,
                        rotate: -180
                      }}
                      animate={{ 
                        opacity: 1, 
                        y: 0, 
                        scale: 1,
                        rotate: 0
                      }}
                      transition={{ 
                        duration: 0.6, 
                        delay: tech.delay,
                        ease: "back.out(1.7)",
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ 
                        scale: 1.3, 
                        y: -8,
                        rotate: [0, -10, 10, 0],
                        transition: { 
                          duration: 0.4,
                          rotate: { duration: 0.6, ease: "easeInOut" }
                        }
                      }}
                    >
                      {/* Icon container with enhanced styling */}
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/20 shadow-2xl relative overflow-hidden"
                        style={{ 
                          backgroundColor: `${tech.color}20`,
                          boxShadow: `0 8px 32px ${tech.color}30, inset 0 1px 0 rgba(255,255,255,0.1)`
                        }}
                      >
                        {/* Animated background gradient */}
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover/icon:opacity-100"
                          style={{
                            background: `linear-gradient(135deg, ${tech.color}40, ${tech.color}10)`
                          }}
                          transition={{ duration: 0.3 }}
                        />
                        
                        <tech.icon 
                          style={{ color: tech.color }} 
                          className="text-lg drop-shadow-lg relative z-10"
                        />
                        
                        {/* Floating particles effect */}
                        <motion.div
                          className="absolute inset-0 pointer-events-none"
                          animate={{
                            background: [
                              `radial-gradient(circle at 20% 80%, ${tech.color}30 0%, transparent 50%)`,
                              `radial-gradient(circle at 80% 20%, ${tech.color}30 0%, transparent 50%)`,
                              `radial-gradient(circle at 40% 40%, ${tech.color}30 0%, transparent 50%)`
                            ]
                          }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />
                      </div>
                      
                      {/* Enhanced Tooltip with description */}
                      <motion.div 
                        className="absolute -top-16 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white text-xs rounded-xl opacity-0 group-hover/icon:opacity-100 whitespace-nowrap pointer-events-none border border-white/20 shadow-2xl backdrop-blur-sm"
                        initial={{ y: 10, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        style={{
                          boxShadow: `0 10px 40px ${tech.color}20`
                        }}
                      >
                        <div className="font-semibold text-[#fffce1]">{tech.name}</div>
                        <div className="text-xs text-gray-300 mt-1">{tech.desc}</div>
                        
                        {/* Tooltip arrow */}
                        <div 
                          className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"
                        />
                        
                        {/* Glowing effect */}
                        <motion.div
                          className="absolute inset-0 rounded-xl opacity-20"
                          style={{ backgroundColor: tech.color }}
                          animate={{ opacity: [0.1, 0.3, 0.1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Enhanced Data Engineer Title */}
            <AnimatePresence>
              {isHovered && (
                <motion.div 
                  className="absolute -bottom-9 left-0 flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    <FaDatabase className="text-cyan-400 text-sm drop-shadow-lg" />
                  </motion.div>
                  
                  <span className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-green-400 to-blue-400">
                    Data Engineer
                  </span>
                  
                  <motion.div 
                    className="w-2 h-2 bg-green-400 rounded-full shadow-lg shadow-green-400/50"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-11 h-11 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:border-white/30 transition-all duration-300 group overflow-hidden"
                whileHover={{ 
                  scale: 1.15, 
                  rotate: 8,
                  boxShadow: `0 10px 30px ${social.color}30`
                }}
                whileTap={{ scale: 0.9 }}
                title={social.name}
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
                
                {/* Pulsing ring effect */}
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
      </div>
    </motion.header>
  );
}