'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaWhatsapp, FaDatabase, FaBars, FaTimes } from 'react-icons/fa';
import { SiPython, SiApachespark, SiApacheairflow, SiDocker } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import SplitType from 'split-type';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);
  const logoCharsRef = useRef<HTMLSpanElement[]>([]);
  const [isAnimated, setIsAnimated] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

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

  useEffect(() => {
    if (!logoRef.current || isAnimated) return;

    const splitLogo = new SplitType(logoRef.current, {
      types: 'chars',
      tagName: 'span'
    });

    if (splitLogo.chars) {
      logoCharsRef.current = Array.from(splitLogo.chars);
      setIsAnimated(true);

      logoCharsRef.current.forEach((char) => {
        char.style.display = 'inline-block';
        char.style.transition = 'transform 0.2s ease-out';
        char.style.cursor = 'pointer';

        char.addEventListener('mouseenter', () => {
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
      logoCharsRef.current.forEach(char => {
        char.removeEventListener('mouseenter', () => {});
        char.removeEventListener('mouseleave', () => {});
      });
    };
  }, [isAnimated]);

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

  // Drawer animation variants
  const drawerVariants = {
    closed: { x: '100%', opacity: 0 },
    open: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 30 } }
  };

  // Mobile drawer content (all navbar content except name)
  const DrawerContent = () => (
    <motion.aside
      className="fixed top-0 right-0 h-full w-[85vw] max-w-xs z-[100] shadow-2xl flex flex-col border-l border-cyan-900/30"
      initial="closed"
      animate="open"
      exit="closed"
      variants={drawerVariants}
      style={{
        background: 'linear-gradient(135deg, #101010 0%, #0e1a24 60%, #101010 100%)',
        backdropFilter: 'none',
        WebkitBackdropFilter: 'none',
        opacity: 1
      }}
    >
      <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
        <span className="font-bold text-lg text-cyan-400 tracking-wide">Menu</span>
        <button
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-cyan-400/20 transition"
          aria-label="Close navigation menu"
          onClick={() => setDrawerOpen(false)}
        >
          <FaTimes className="text-xl text-cyan-400" />
        </button>
      </div>
      {/* Data Engineering Icons */}
      <div className="flex flex-wrap gap-3 px-6 pt-6">
        {dataEngineeringIcons.map((tech, index) => (
          <div
            key={index}
            className="relative group/icon cursor-pointer"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/20 shadow-2xl relative overflow-hidden"
              style={{
                backgroundColor: `${tech.color}20`,
                boxShadow: `0 8px 32px ${tech.color}30, inset 0 1px 0 rgba(255,255,255,0.1)`
              }}
            >
              <tech.icon
                style={{ color: tech.color }}
                className="text-lg drop-shadow-lg relative z-10"
              />
            </div>
            <div
              className="absolute -top-16 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white text-xs rounded-xl opacity-0 group-hover/icon:opacity-100 whitespace-nowrap pointer-events-none border border-white/20 shadow-2xl backdrop-blur-sm"
              style={{
                boxShadow: `0 10px 40px ${tech.color}20`
              }}
            >
              <div className="font-semibold text-[#fffce1]">{tech.name}</div>
              <div className="text-xs text-gray-300 mt-1">{tech.desc}</div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800" />
            </div>
          </div>
        ))}
      </div>
      {/* Navigation Links */}
      <nav className="flex flex-col gap-4 px-6 py-8 text-base font-semibold text-[#fffce1]">
        <a
          href="#home"
          className="hover:text-cyan-400 transition-colors duration-300"
          onClick={() => setDrawerOpen(false)}
        >
          Home
        </a>
        <a
          href="#about"
          className="hover:text-cyan-400 transition-colors duration-300"
          onClick={() => setDrawerOpen(false)}
        >
          About
        </a>
        <a
          href="#experience"
          className="hover:text-cyan-400 transition-colors duration-300"
          onClick={() => setDrawerOpen(false)}
        >
          Experience
        </a>
        <a
          href="#services"
          className="hover:text-cyan-400 transition-colors duration-300"
          onClick={() => setDrawerOpen(false)}
        >
          What I Offer
        </a>
      </nav>
      {/* Social Icons */}
      <div className="flex items-center gap-4 px-6 mt-auto mb-8">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:border-cyan-400 transition"
            title={social.name}
          >
            <social.icon className="text-xl" style={{ color: social.color }} />
          </a>
        ))}
      </div>
      {/* Drawer Glow Effect */}
      <div className="absolute inset-0 pointer-events-none z-[-1]">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl" />
      </div>
    </motion.aside>
  );

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
          {/* Logo Section (always visible, links to root) */}
          <Link href="/" className="block z-50" onClick={() => setDrawerOpen(false)}>
            <div
              ref={logoRef}
              className="font-outfit font-extrabold text-xl md:text-2xl tracking-tight text-[#fffce1] perspective-1000 relative"
            >
              Abdulrehman Iqbal
              <span className="text-cyan-400 animate-pulse">.</span>
            </div>
          </Link>
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#fffce1]">
            <a href="#home" className="hover:text-cyan-400 transition-colors duration-300">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors duration-300">About</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors duration-300">Experience</a>
            <a href="#services" className="hover:text-cyan-400 transition-colors duration-300">What I Offer</a>
          </nav>
          {/* Hamburger Icon (Mobile) */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-400 transition-all duration-300"
            aria-label="Open navigation menu"
            onClick={() => setDrawerOpen(true)}
          >
            <FaBars className="text-xl text-cyan-400" />
          </button>
          {/* Social Icons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
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
      {/* Mobile Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/80 z-[90]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setDrawerOpen(false)}
            />
            {/* Drawer with all navbar content except name */}
            <DrawerContent />
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}