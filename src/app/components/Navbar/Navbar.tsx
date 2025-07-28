'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaWhatsapp, FaDatabase } from 'react-icons/fa';
import { SiPython, SiApachespark, SiApacheairflow, SiDocker, SiPostgresql, SiSnowflake } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import SplitType from 'split-type';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      logoCharsRef.current.forEach((char, index) => {
        char.style.display = 'inline-block';
        char.style.transition = 'transform 0.2s ease-out';
        char.style.cursor = 'pointer';
        
        char.addEventListener('mouseenter', () => {
          // Data engineering themed colors
          const colors = ['#00c9ff', '#92fe9d', '#60a5fa', '#fbbf24', '#ff6b6b', '#845ec2'];
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          
          gsap.to(char, { 
            y: -12, 
            scale: 1.4, 
            color: randomColor, 
            rotation: Math.random() * 10 - 5,
            duration: 0.3,
            ease: 'back.out(1.7)'
          });
        });
        
        char.addEventListener('mouseleave', () => {
          gsap.to(char, { 
            y: 0, 
            scale: 1, 
            color: '#fffce1',
            rotation: 0,
            duration: 0.5,
            ease: 'power2.out'
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

  // Data Engineering tech icons that appear on logo hover
  const dataEngineeringIcons = [
    { icon: SiPython, color: "#3776ab", delay: 0, name: "Python" },
    { icon: SiApachespark, color: "#e25a1c", delay: 0.1, name: "Apache Spark" },
    { icon: SiApacheairflow, color: "#017cee", delay: 0.2, name: "Apache Airflow" },
    { icon: FaDatabase, color: "#336791", delay: 0.3, name: "Databases" },
    { icon: SiDocker, color: "#2496ed", delay: 0.5, name: "Docker" }
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
          <div className="relative group">
            <Link href="/" className="block">
              <div 
                ref={logoRef} 
                className="font-outfit font-extrabold text-xl md:text-2xl tracking-tight text-[#fffce1] perspective-1000 relative"
              >
                Abdul Rehman Iqbal
                <span className="text-cyan-400 animate-pulse">.</span>
              </div>
            </Link>
            
            {/* Animated underline with enhanced gradient */}
            <motion.div 
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 via-green-400 to-blue-400 shadow-lg shadow-cyan-400/30"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            
            {/* Data Engineering Tech Stack Display */}
            <div className="absolute -bottom-12 left-0 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-3 group-hover:translate-y-0 pointer-events-none">
              {dataEngineeringIcons.map((tech, index) => (
                <div
                  key={index}
                  className="relative cursor-pointer group/icon"
                  title={tech.name}
                  style={{
                    opacity: 0,
                    transform: 'translateY(20px) scale(0.5) rotate(-180deg)',
                    animation: `techIconAppear 0.5s ease-out ${tech.delay}s forwards`
                  }}
                >
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/10 shadow-lg hover:scale-110 hover:-translate-y-1 transition-transform duration-200"
                    style={{ backgroundColor: `${tech.color}15` }}
                  >
                    <tech.icon 
                      style={{ color: tech.color }} 
                      className="text-sm drop-shadow-lg"
                    />
                  </div>
                  
                  {/* Enhanced Tooltip */}
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1.5 bg-gradient-to-r from-gray-900 to-black text-white text-xs rounded-lg opacity-0 group-hover/icon:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none border border-white/10 shadow-xl">
                    {tech.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Data Engineer Title with Animation */}
            <motion.div 
              className="absolute -bottom-8 left-0 text-xs font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-green-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-500"
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="flex items-center gap-2">
                <FaDatabase className="text-cyan-400 text-xs animate-spin" style={{ animationDuration: '3s' }} />
                Data Engineer
                <motion.div 
                  className="w-1 h-1 bg-green-400 rounded-full"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </span>
            </motion.div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-3">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-10 h-10 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:border-white/20 transition-all duration-300 group overflow-hidden"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                title={social.name}
              >
                <social.icon 
                  className="text-lg transition-colors duration-300" 
                  style={{ color: social.color }}
                />
                
                {/* Hover overlay */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ backgroundColor: social.color }}
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for tech icon animations */}
      <style jsx>{`
        @keyframes techIconAppear {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.5) rotate(-180deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1) rotate(0deg);
          }
        }
      `}</style>
    </motion.header>
  );
}