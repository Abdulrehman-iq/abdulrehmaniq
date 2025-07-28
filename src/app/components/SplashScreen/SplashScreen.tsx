// components/SplashScreen/SplashScreen.tsx
'use client'

import { useEffect, useState, useRef, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import SplitType from 'split-type'
import { FaDatabase, FaServer, FaStream, FaCloud } from 'react-icons/fa'
import { SiApacheairflow, SiApachespark, SiPython, SiDocker } from 'react-icons/si'

// Main Splash Screen Component
const SplashScreen = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true)
  const [animationStarted, setAnimationStarted] = useState(false)
  const logoRef = useRef<HTMLDivElement>(null)
  const sloganRef = useRef<HTMLDivElement>(null)
  const logoCharsRef = useRef<HTMLSpanElement[]>([])
  const originalOverflow = useRef<string>('')
  
  useEffect(() => {
    // Only run animation once
    if (animationStarted) return
    
    setAnimationStarted(true)
    
    // Store original overflow value
    if (typeof window !== 'undefined') {
      originalOverflow.current = document.body.style.overflow || ''
    }
    
    // Set body styles - exact color theme
    document.body.style.backgroundColor = '#0d0d0d'
    document.body.style.color = '#fffce1'
    document.body.style.overflow = 'hidden'
    
    // Logo text animation
    if (logoRef.current) {
      const splitLogo = new SplitType(logoRef.current, {
        types: 'chars',
        tagName: 'span'
      })
      
      // Store references to characters for hover effects
      if (splitLogo.chars) {
        logoCharsRef.current = Array.from(splitLogo.chars)
        
        // Add hover effect to each character with data engineering theme colors
        logoCharsRef.current.forEach(char => {
          char.style.display = 'inline-block'
          char.style.transition = 'transform 0.2s ease-out'
          
          char.addEventListener('mouseenter', () => {
            // Data engineering themed hover effects
            const effectNum = Math.floor(Math.random() * 4)
            
            switch(effectNum) {
              case 0:
                gsap.to(char, { y: -15, scale: 1.2, color: '#00c9ff', duration: 0.3 }) 
                break
              case 1:
                gsap.to(char, { x: 5, scale: 1.3, color: '#92fe9d', duration: 0.3 }) 
                break
              case 2:
                gsap.to(char, { rotate: 15, scale: 1.1, color: '#60a5fa', duration: 0.3 }) 
                break
              case 3:
                gsap.to(char, { scale: 1.4, color: '#fbbf24', duration: 0.3 }) 
                break
            }
          })
          
          char.addEventListener('mouseleave', () => {
            gsap.to(char, { x: 0, y: 0, scale: 1, rotate: 0, skewX: 0, color: '#fffce1', duration: 0.5 })
          })
        })
      }
      
      // Initial character animation
      gsap.fromTo(
        splitLogo.chars,
        {
          opacity: 0,
          y: 40,
          rotateX: -90,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          stagger: 0.05,
          duration: 0.8,
          ease: 'power4.out',
          delay: 0.5,
        }
      )
    }
    
    // Slogan text animation
    if (sloganRef.current) {
      const splitSlogan = new SplitType(sloganRef.current, {
        types: 'words',
        tagName: 'span'
      })
      
      gsap.fromTo(
        splitSlogan.words,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.7,
          ease: 'power3.out',
          delay: 1.5,
        }
      )
    }
    
    // Set to exactly 6 seconds with direct state updates
    const timer = setTimeout(() => {
      console.log("Timer completed, fading out splash screen");
      
      // Fade out animation before unmounting
      const fadeOutAnimation = gsap.to('.splash-content', {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        onComplete: () => {
          console.log("Fade out animation completed");
          document.body.style.overflow = originalOverflow.current || 'auto';
          setLoading(false);
        }
      });
      
      // Set a backup timeout in case the animation complete callback doesn't fire
      setTimeout(() => {
        if (loading) {
          console.log("Backup timeout triggered");
          fadeOutAnimation.kill();
          document.body.style.overflow = originalOverflow.current || 'auto';
          setLoading(false);
        }
      }, 1000); // 1 second backup
    }, 6000);
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = originalOverflow.current || 'auto';
      
      // Clean up event listeners
      logoCharsRef.current.forEach(char => {
        char.removeEventListener('mouseenter', () => {});
        char.removeEventListener('mouseleave', () => {});
      });
    }
  }, [animationStarted, loading]);
  
  // Separate useEffect to ensure overflow is restored
  useEffect(() => {
    if (!loading) {
      console.log("Loading state changed to false");
      document.body.style.overflow = originalOverflow.current || 'auto';
    }
  }, [loading]);
  
  // Force exit after 7.5 seconds regardless of animation state
  useEffect(() => {
    const forceExitTimer = setTimeout(() => {
      if (loading) {
        console.log("Force exit triggered");
        document.body.style.overflow = originalOverflow.current || 'auto';
        setLoading(false);
      }
    }, 7500); // 7.5 seconds total maximum
    
    return () => clearTimeout(forceExitTimer);
  }, [loading]);
  
  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
            style={{ 
              backgroundColor: '#0d0d0d',
              background: 'linear-gradient(135deg, rgba(13,13,13,1) 0%, rgba(18,18,18,1) 100%)'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              transition: { 
                duration: 0.8, 
                ease: [0.43, 0.13, 0.23, 0.96] 
              } 
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Data engineering themed gradient overlay */}
            <div 
              className="absolute inset-0"
              style={{ 
                background: 'linear-gradient(135deg, rgba(0, 201, 255, 0.05) 0%, rgba(146, 254, 157, 0.03) 50%, rgba(96, 165, 250, 0.05) 100%)',
                backdropFilter: 'blur(2px)'
              }}
            />
            
            {/* Floating Data Engineering Icons */}
            {[
              { Icon: FaDatabase, position: { top: '15%', left: '10%' }, delay: 1.2, color: '#00c9ff' },
              { Icon: SiApacheairflow, position: { top: '20%', right: '15%' }, delay: 1.4, color: '#92fe9d' },
              { Icon: FaServer, position: { bottom: '60%', left: '8%' }, delay: 1.6, color: '#60a5fa' },
              { Icon: SiApachespark, position: { bottom: '25%', right: '12%' }, delay: 1.8, color: '#fbbf24' },
              { Icon: SiPython, position: { top: '50%', left: '85%' }, delay: 2.0, color: '#00c9ff' },
              { Icon: FaStream, position: { bottom: '50%', left: '15%' }, delay: 2.2, color: '#92fe9d' },
              { Icon: FaCloud, position: { top: '70%', right: '10%' }, delay: 2.4, color: '#60a5fa' },
              { Icon: SiDocker, position: { bottom: '80%', right: '20%' }, delay: 2.6, color: '#fbbf24' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ 
                  opacity: [0, 0.15, 0.1], 
                  scale: [0, 1.2, 1], 
                  rotate: [-180, 0, 360]
                }}
                transition={{ 
                  duration: 2, 
                  delay: item.delay,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 3
                }}
                className="absolute text-4xl md:text-5xl pointer-events-none"
                style={{
                  ...item.position,
                  color: item.color,
                  filter: 'blur(0.5px)'
                }}
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4 + index,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: index * 0.3,
                  }}
                >
                  <item.Icon />
                </motion.div>
              </motion.div>
            ))}
            
            {/* Data pipeline visualization */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              {/* Pipeline flow lines */}
              <motion.div
                className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
                initial={{ width: '0%', left: '0%' }}
                animate={{ 
                  width: ['0%', '100%', '0%'], 
                  left: ['0%', '0%', '100%']
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  delay: 2.5,
                  ease: "easeInOut"
                }}
                style={{ transform: 'translateY(-50%)' }}
              />
              
              <motion.div
                className="absolute top-1/3 left-0 h-0.5 bg-gradient-to-r from-transparent via-green-400/20 to-transparent"
                initial={{ width: '0%', left: '0%' }}
                animate={{ 
                  width: ['0%', '80%', '0%'], 
                  left: ['0%', '20%', '100%']
                }}
                transition={{ 
                  duration: 3.5, 
                  repeat: Infinity, 
                  delay: 3,
                  ease: "easeInOut"
                }}
                style={{ transform: 'translateY(-50%)' }}
              />
              
              <motion.div
                className="absolute top-2/3 left-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"
                initial={{ width: '0%', left: '0%' }}
                animate={{ 
                  width: ['0%', '90%', '0%'], 
                  left: ['0%', '10%', '100%']
                }}
                transition={{ 
                  duration: 4.5, 
                  repeat: Infinity, 
                  delay: 2.8,
                  ease: "easeInOut"
                }}
                style={{ transform: 'translateY(-50%)' }}
              />
            </div>
            
            {/* Main content container */}
            <div className="max-w-5xl w-full relative z-10 py-6 md:py-10">
              <div className="splash-content flex flex-col items-center justify-center px-4 md:px-6">
                {/* Main Content */}
                <div className="relative z-20 text-center">
                  {/* Logo - Abdul Rehman with data engineering focus */}
                  <div 
                    ref={logoRef} 
                    className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold font-[Outfit] tracking-tighter mb-4 md:mb-6 text-[#fffce1] perspective-1000"
                  >
                    Abdul Rehman Iqbal
                    <span className="text-[#00c9ff]">.</span>
                  </div>
                  
                  {/* Data Engineering title */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.0 }}
                    className="text-lg sm:text-xl md:text-2xl font-semibold text-transparent bg-clip-text mb-3"
                    style={{
                      backgroundImage: 'linear-gradient(90deg, #00c9ff, #92fe9d, #60a5fa)'
                    }}
                  >
                    Data Engineer
                  </motion.div>
                  
                  {/* Slogan with data engineering focus */}
                  <div className="relative">
                    <div 
                      ref={sloganRef} 
                      className="text-base sm:text-lg md:text-xl font-medium text-[#fffce1]/80 mb-8 md:mb-12 font-dm-sans"
                    >
                      Transforming Raw Data Into Actionable Insights
                    </div>
                    <motion.div 
                      className="h-[2px] w-0 absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2"
                      style={{
                        background: 'linear-gradient(90deg, #00c9ff, #92fe9d, #60a5fa)',
                        boxShadow: '0 0 5px rgba(0, 201, 255, 0.3)'
                      }}
                      animate={{ width: ["0%", "70%"] }}
                      transition={{ 
                        duration: 2, 
                        delay: 2.5,
                        ease: "easeOut" 
                      }}
                    />
                  </div>
                  
                  {/* Data processing indicator */}
                  <motion.div 
                    className="mt-6 md:mt-8 flex justify-center items-center space-x-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3 }}
                  >
                    <span className="text-xs md:text-sm text-[#fffce1]/60 font-mono">
                      Processing data pipeline
                    </span>
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full"
                        style={{ backgroundColor: i === 0 ? '#00c9ff' : i === 1 ? '#92fe9d' : '#60a5fa' }}
                        animate={{ 
                          opacity: [0.3, 1, 0.3],
                          scale: [1, 1.3, 1]
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity,
                          delay: i * 0.3
                        }}
                      />
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
            
            {/* Progress bar with data flow visualization */}
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="text-xs text-[#fffce1]/50 mb-2 font-mono"
              >
                Initializing data workflows...
              </motion.div>
              <div className="relative w-32 sm:w-40 md:w-48 h-0.5 md:h-1 bg-[#1a1a1a] rounded-full overflow-hidden">
                <motion.div 
                  className="absolute top-0 left-0 h-full rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #00c9ff, #92fe9d, #60a5fa)',
                    boxShadow: '0 0 4px rgba(0, 201, 255, 0.5)'
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 6, ease: "linear" }}
                />
                {/* Data packets moving through the pipeline */}
                <motion.div
                  className="absolute top-0 left-0 w-2 h-full bg-white/30 rounded-full"
                  animate={{ x: [0, 180] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    delay: 2,
                    ease: "linear"
                  }}
                />
              </div>
            </div>
          </motion.div> 
        )}
      </AnimatePresence>
      
      {/* Main content - simple conditional rendering */}
      {!loading && children}
    </>
  )
}

export default SplashScreen