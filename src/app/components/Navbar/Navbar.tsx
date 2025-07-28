'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaWhatsapp, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import SplitType from 'split-type';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  // Remove unused styles import
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

      // Add hover effect to each character
      logoCharsRef.current.forEach((char, index) => {
        char.style.display = 'inline-block';
        char.style.transition = 'transform 0.2s ease-out';
        
        char.addEventListener('mouseenter', () => {
          // Different animation for AR, IQ, and Systems
          if (index < 2) { 
            // AR - Green
            gsap.to(char, { y: -5, scale: 1.2, color: '#4ade80', duration: 0.3 });
          } else if (index < 4) { 
            // IQ - Cyan
            gsap.to(char, { y: -5, scale: 1.2, color: '#22d3ee', duration: 0.3 });
          } else { 
            // Systems - Blue
            gsap.to(char, { y: -5, scale: 1.2, color: '#60a5fa', duration: 0.3 });
          }
        });
        
        char.addEventListener('mouseleave', () => {
          gsap.to(char, { y: 0, scale: 1, color: '#fffce1', duration: 0.5 });
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
  }, [isAnimated]); // Add isAnimated to the dependency array

  // Tech icons that appear on logo hover
  const techIcons = [
    { icon: FaReact, color: "#61DAFB", delay: 0 },
    { icon: SiNextdotjs, color: "#fffce1", delay: 0.1 },
    { icon: SiTailwindcss, color: "#06B6D4", delay: 0.2 },
    { icon: FaNodeJs, color: "#339933", delay: 0.3 },
    { icon: SiTypescript, color: "#3178C6", delay: 0.4 },
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#161616]/95 backdrop-blur-md shadow-md shadow-black/20 py-4'
          : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Name/Logo with hover animations */}
        <div className="relative group">
          <Link href="/" className="block">
            <div 
              ref={logoRef} 
              className="font-outfit font-extrabold text-lg md:text-1xl tracking-tight text-[#fffce1] perspective-1000"
            >
              Abdulrehman Iqbal
              <span className="text-blue-400">.</span>
            </div>
          </Link>
          
          {/* Animated underline */}
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></div>
          
          {/* Tech icons that appear on hover */}
          <div className="absolute -bottom-8 left-0 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {techIcons.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: tech.delay }}
                className="text-sm"
              >
                <tech.icon style={{ color: tech.color }} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-5">
          {/* GitHub */}
          <motion.a 
            href="https://github.com/Abdulrehman-iq"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#fffce1]/80 hover:text-[#fffce1] transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="text-xl md:text-2xl" />
            <span className="sr-only">GitHub</span>
          </motion.a>
          
          {/* LinkedIn */}
          <motion.a 
            href="https://www.linkedin.com/in/abdulrehman-iqbal-24a129219/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin className="text-xl md:text-2xl" />
            <span className="sr-only">LinkedIn</span>
          </motion.a>
          
          {/* WhatsApp */}
          <motion.a 
            href="https://wa.me/923338681426"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#fffce1]/80 hover:text-[#fffce1] transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp className="text-xl md:text-2xl" />
            <span className="sr-only">WhatsApp</span>
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
}