'use client'

import { useState, useEffect, MouseEvent, useRef } from "react"
import { FaChevronDown, FaLayerGroup, FaMobile, FaDatabase, FaPlug } from 'react-icons/fa'
import { HiOutlineSparkles } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import SplitType from 'split-type'

// Register the ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const impactWords = ["Innovation", "Simplicty", "Impact", "Excellence"];
  
  // Refs for GSAP animations
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
      
      // Animate the characters
      gsap.from(splitHeadline.chars, {
        opacity: 0,
        y: 20,
        rotateX: -90,
        stagger: 0.02,
        duration: 0.8,
        ease: 'power4.out',
        delay: 0.3
      });
    } catch (error) {
      console.error("Error with text splitting animation:", error);
    }
  }, [isLoaded]);
  
  // GSAP ScrollTrigger animations
  useEffect(() => {
    if (!sectionRef.current || !isLoaded) return;
    
    // Create a primary scroll timeline
    const heroTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.5,
      }
    });
    
    // More elaborate animations for the headline
    if (headlineRef.current && titleWrapperRef.current) {
      // Parallax effect for the title wrapper
      heroTimeline.to(titleWrapperRef.current, {
        y: -80,
        opacity: 0.8,
        scale: 0.95,
        ease: "power1.inOut"
      }, 0);
    }
    
    // Animation for tagline - move up faster and fade more
    if (taglineRef.current) {
      heroTimeline.to(taglineRef.current, {
        y: -120,
        opacity: 0.2,
        ease: "power2.inOut"
      }, 0);
    }
    
    // Animation for description - move up and fade out with a slight rotation
    if (descriptionRef.current) {
      heroTimeline.to(descriptionRef.current, {
        y: -150,
        opacity: 0,
        ease: "power2.inOut",
        rotationX: 5
      }, 0);
    }
    
    // Animation for CTA button - shrink slightly and move up faster
    if (ctaRef.current) {
      heroTimeline.to(ctaRef.current, {
        y: -180,
        scale: 0.8,
        opacity: 0,
        ease: "power3.inOut"
      }, 0);
    }
    
    // Staggered animation for specialties section items
    if (specialtiesRef.current) {
      const items = specialtiesRef.current.querySelectorAll('.specialty-item');
      
      heroTimeline.to(specialtiesRef.current, {
        y: -50,
        opacity: 0.6,
        ease: "power1.inOut"
      }, 0);
      
      // Add staggered movement to the specialty items
      heroTimeline.to(items, {
        y: (i) => -30 - (i * 15),
        opacity: (i) => 0.8 - (i * 0.15),
        stagger: 0.05,
        ease: "power1.inOut"
      }, 0);
    }
    
    // Create cool background animation on scroll
    const bgShapes = document.querySelectorAll('.bg-shape');
    if (bgShapes.length) {
      heroTimeline.to(bgShapes, {
        y: (i) => i % 2 === 0 ? -150 : -100,
        x: (i) => i % 2 === 0 ? 50 : -50,
        opacity: 0.3,
        scale: 1.2,
        ease: "power1.inOut",
        stagger: 0.1
      }, 0);
    }
    
    // Cleanup
    return () => {
      if (heroTimeline.scrollTrigger) {
        heroTimeline.scrollTrigger.kill();
      }
    };
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
                <span className="text-[#fffce1]">Crafting Web & Mobile Apps That Drive Results</span>
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
                Transforming Ideas Into  {' '}
                <span 
                  className="text-[#fffcel] bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(90deg, #00c9ff, #92fe9d)' }}
                >
                  Digital Reality
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
              Cutting-edge solutions for the modern digital world. I craft scalable web and mobile applications that bring your vision to life—efficiently, beautifully, and reliably.
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
                Explore My Portfolio
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
                DIGITAL SOLUTIONS FOR
              </p>
              <div className="flex flex-wrap justify-center gap-5 sm:gap-6 md:gap-8">
                {[
                  { icon: FaLayerGroup, text: "Full Stack Web Development" },
                  { icon: FaMobile, text: "Mobile App Development" },
                  { icon: FaDatabase, text: "Database Management" }, 
                  { icon: FaPlug, text: "Custom APIs & Integration" },
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + (index * 0.2), duration: 0.5 }}
                    className="specialty-item flex flex-col items-center group text-center w-[160px] sm:w-[180px] md:w-[200px]"
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
                    <span className="font-medium text-sm sm:text-base md:text-lg text-[#fffce1] font-dm-sans">
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