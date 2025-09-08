'use client'

import { useState, useEffect, MouseEvent, useRef } from "react"
import { FaChevronDown,FaAws,FaStream, FaClock } from 'react-icons/fa'
import { HiOutlineSparkles } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'
import { SiApacheairflow, SiApachespark, SiGooglecloud, SiPython } from 'react-icons/si'
import { MdCloud, MdAnalytics } from 'react-icons/md'
import SplitType from 'split-type'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const impactWords = ["Real-time Pipelines", "Cloud Architecture", "Data Automation", "Actionable Insights"];
  
  // Refs for animations
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const specialtiesRef = useRef<HTMLDivElement>(null);
  const titleWrapperRef = useRef<HTMLDivElement>(null);

  // Word cycling animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % impactWords.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [impactWords.length]); // Fixed: Added missing dependency

  // Set loaded state after initial render
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  // Text reveal animation on load
  useEffect(() => {
    if (!isLoaded || !headlineRef.current) return;
    
    // Split text into chars for animation
    try {
      // Create a text splitter for the main headline
      const splitHeadline = new SplitType(headlineRef.current, { 
        types: 'chars,words', 
        tagName: 'span' 
      });
      
      // Simple fade in animation for the characters
      const chars = splitHeadline.chars;
      if (chars) {
        chars.forEach((char, index) => {
          char.style.opacity = '0';
          char.style.transform = 'translateY(20px) rotateX(-90deg)';
          char.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
          char.style.transitionDelay = `${0.3 + index * 0.02}s`;
          
          setTimeout(() => {
            char.style.opacity = '1';
            char.style.transform = 'translateY(0) rotateX(0)';
          }, 50);
        });
      }
    } catch (error) {
      console.error("Error with text splitting animation:", error);
    }
  }, [isLoaded]);

  // Handle smooth scroll on button click
  const handleExploreClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden pb-48"
      style={{
        background: '#0d0d0d'
      }}
    >
      {/* Background with animated 3D elements */}
      <div className="absolute inset-0 z-0">
        {/* Abstract shape 1 - Cyan */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="bg-shape absolute top-20 -left-20 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 201, 255, 0.2), rgba(0, 201, 255, 0.05))',
            filter: 'blur(80px)'
          }}
        ></motion.div>
        
        {/* Abstract shape 2 - Green */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="bg-shape absolute -bottom-40 -right-20 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(146, 254, 157, 0.2), rgba(146, 254, 157, 0.05))',
            filter: 'blur(100px)'
          }}
        ></motion.div>
        
        {/* Add extra floating elements that react to scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ duration: 1.5, delay: 0.7 }}
          className="bg-shape absolute top-1/3 right-[20%] w-[200px] h-[200px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 201, 255, 0.15), rgba(0, 201, 255, 0.03))',
            filter: 'blur(60px)'
          }}
        ></motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ duration: 1.5, delay: 0.9 }}
          className="bg-shape absolute bottom-1/4 left-[15%] w-[300px] h-[300px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(146, 254, 157, 0.15), rgba(146, 254, 157, 0.03))',
            filter: 'blur(70px)'
          }}
        ></motion.div>

        {/* Floating Data Engineering Icons */}
        {[
          { Icon: SiApacheairflow, position: { top: '15%', left: '10%' }, delay: 1.2 },
          { Icon: SiApachespark, position: { top: '70%', right: '15%' }, delay: 1.4 },
          { Icon: FaAws, position: { top: '40%', left: '85%' }, delay: 1.6 },
          { Icon: SiGooglecloud, position: { bottom: '60%', left: '5%' }, delay: 1.8 },
          { Icon: SiPython, position: { bottom: '30%', right: '10%' }, delay: 2.2 }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1, delay: item.delay }}
            className="absolute text-6xl text-white/10 pointer-events-none"
            style={item.position}
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 6 + index,
                repeat: Infinity,
                repeatType: "reverse",
                delay: index * 0.5,
              }}
            >
              <item.Icon />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Main content with enhanced layout */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[85vh]">
          {/* Centered content layout */}
          <div className="text-center max-w-4xl mx-auto">
            {/* Decorative element */}
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, type: "spring" }}
              className="mb-6 inline-flex"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-m font-medium font-dm-sans bg-white/5 backdrop-blur-md border border-white/10">
                <HiOutlineSparkles 
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(90deg, #00c9ff, #92fe9d)' }}
                />
                <span className="text-[#fffce1]">Building Scalable Pipelines & Cloud Architectures</span>
              
              </span>
            </motion.div>
            
            {/* Headline wrapper for scroll effects */}
            <div ref={titleWrapperRef} className="perspective-1000">
              {/* Headline with enhanced typography and char animation */}
              <motion.h1 
                ref={headlineRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoaded ? 1 : 0 }}
                transition={{ duration: 0.1 }}
                className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-[#fffce1] font-outfit tracking-tight"
              >
                Transforming Data Into  {' '}
                <span 
                  className="text-[#fffcel] bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(90deg, #00c9ff, #92fe9d)' }}
                >
                  Insights
                </span>
              </motion.h1>
            </div>
            
            {/* Animated words with enhanced effect */}
            <motion.div 
              ref={taglineRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="h-16 mt-6 mb-6"
            >
              <div className="relative h-14 flex justify-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={impactWords[currentWordIndex]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl sm:text-4xl font-semibold font-outfit text-[#fffce1]"
                  >
                    {impactWords[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
              <div 
                className="w-24 h-1 mx-auto" 
                style={{ backgroundImage: 'linear-gradient(90deg, #00c9ff, #92fe9d)' }}
              ></div>
            </motion.div>
            
            {/* Description with more refined typography */}
            <motion.p 
              ref={descriptionRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-xl leading-relaxed max-w-2xl mx-auto mb-10 text-[#fffce1] font-dm-sans"
            >
              I design and automate robust data workflows that turn raw data into business-ready insights. From real-time processing and batch pipelines to cloud-native ETL and analytics dashboards—my work powers data-driven decisions at scale.
            </motion.p>
            
            {/* Enhanced CTA button with downward orientation */}
            <motion.div 
              ref={ctaRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex flex-col items-center mt-8"
            >
              <motion.a 
                href="#projects"
                onClick={handleExploreClick}
                className="px-6 py-3 font-medium rounded-xl text-[#fffce1] transition-all duration-300"
                style={{
                  border: '2px solid transparent',
                  backgroundImage: 'linear-gradient(#0d0d0d, #0d0d0d), linear-gradient(90deg, #00c9ff, #92fe9d)',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'padding-box, border-box',
                  boxShadow: '0 0 20px rgba(0, 201, 255, 0.2)'
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 25px rgba(0, 201, 255, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Data Projects
              </motion.a>
              
              {/* Animated down chevron */}
              <motion.div 
                animate={{ 
                  y: [0, 5, 0],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="mt-4"
              >
                <FaChevronDown 
                  className="text-2xl"
                  style={{ color: '#00c9ff' }} 
                />
              </motion.div>
            </motion.div>
            
            {/* Enhanced specialties section */}
            <motion.div 
              ref={specialtiesRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="mt-20"
            >
              <p className="text-sm uppercase tracking-wider font-medium mb-8 text-[#bbbbbb] font-outfit">
                DATA ENGINEERING SOLUTIONS FOR
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
                {[
                  { icon: FaStream, text: "End-to-End Data Pipelines" },
                  { icon: MdCloud, text: "Cloud-Native Architecture" },
                  { icon: FaClock, text: "Real-Time & Batch Processing" }, 
                  { icon: MdAnalytics, text: "Analytics-Ready Data Modeling" },
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + (index * 0.2), duration: 0.5 }}
                    className="specialty-item flex flex-col items-center group text-center"
                  >
                    <div 
                      className="p-6 rounded-2xl mb-4 group-hover:scale-110 transition-all duration-300 bg-white/5 backdrop-blur-md"
                      style={{
                        boxShadow: '0 0 20px rgba(0, 201, 255, 0.1)'
                      }}
                    >
                      <item.icon 
                        className="text-3xl"
                        style={{
                          color: index % 2 === 0 ? '#00c9ff' : '#92fe9d'
                        }}
                      />
                    </div>
                    <span className="font-medium text-sm sm:text-base text-[#fffce1] font-dm-sans leading-tight">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Add a visual connector element at the bottom to blend into the Introduction section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, #0d0d0d)'
        }}
      />
    </section>
  )
}