'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaWhatsapp, FaBars } from 'react-icons/fa';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import SplitType from 'split-type';
import Drawer from './Drawer';

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
    <>
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
            {/* Logo Section */}
            <Link href="/" className="block z-50" onClick={() => setDrawerOpen(false)}>
              <div
                ref={logoRef}
                className="font-outfit font-extrabold text-xl md:text-2xl tracking-tight text-[#fffce1] perspective-1000 relative"
              >
                Abdulrehman Iqbal
                <span className="text-cyan-400 animate-pulse">.</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#fffce1]">
              <a href="#home" className="hover:text-cyan-400 transition-colors duration-300">Home</a>
              <a href="#about" className="hover:text-cyan-400 transition-colors duration-300">About</a>
              <a href="#experience" className="hover:text-cyan-400 transition-colors duration-300">Experience</a>
              <a href="#services" className="hover:text-cyan-400 transition-colors duration-300">What I Offer</a>
            </nav>

            {/* Mobile Hamburger Menu */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-400 transition-all duration-300"
              aria-label="Open navigation menu"
              onClick={() => setDrawerOpen(true)}
            >
              <FaBars className="text-xl text-cyan-400" />
            </button>

            {/* Desktop Social Icons */}
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
      </motion.header>

      {/* Mobile Drawer Component */}
      <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}