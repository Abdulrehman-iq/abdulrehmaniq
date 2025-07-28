// components/SplashScreen/SplashScreen.tsx
'use client'

import { useEffect, useState, useRef, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import SplitType from 'split-type'

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
        
        // Add hover effect to each character
        logoCharsRef.current.forEach(char => {
          char.style.display = 'inline-block'
          char.style.transition = 'transform 0.2s ease-out'
          
          char.addEventListener('mouseenter', () => {
            // Random animation effect from several options
            const effectNum = Math.floor(Math.random() * 5)
            
            switch(effectNum) {
              case 0:
                gsap.to(char, { y: -15, scale: 1.2, color: '#4ade80', duration: 0.3 }) 
                break
              case 1:
                gsap.to(char, { x: 5, scale: 1.3, color: '#60a5fa', duration: 0.3 }) 
                break
              case 2:
                gsap.to(char, { rotate: 15, scale: 1.1, color: '#22d3ee', duration: 0.3 }) 
                break
              case 3:
                gsap.to(char, { skewX: 20, color: '#f472b6', duration: 0.3 }) 
                break
              case 4:
                gsap.to(char, { scale: 1.4, color: '#c084fc', duration: 0.3 }) 
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
            {/* Subtle, cleaner gradient overlay */}
            <div 
              className="absolute inset-0"
              style={{ 
                background: 'linear-gradient(135deg, rgba(0, 201, 255, 0.03) 0%, rgba(146, 254, 157, 0.02) 50%, rgba(96, 165, 250, 0.03) 100%)',
                backdropFilter: 'blur(2px)'
              }}
            />
            
            {/* Cleaner, more refined gradient elements */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              {/* Top gradient accent */}
              <div 
                className="absolute top-0 left-0 w-full h-1"
                style={{
                  background: 'linear-gradient(90deg, rgba(0, 201, 255, 0.3), rgba(146, 254, 157, 0.3), rgba(96, 165, 250, 0.3))'
                }}
              ></div>
              
              {/* Refined accent 1 - Cyan */}
              <div 
                className="absolute top-[10%] left-[10%] w-32 h-32 md:w-64 md:h-64"
                style={{
                  background: 'radial-gradient(circle, rgba(0, 201, 255, 0.07) 0%, rgba(0, 201, 255, 0) 70%)',
                  opacity: 0.4
                }}
              ></div>
              
              {/* Refined accent 2 - Green */}
              <div 
                className="absolute bottom-[15%] right-[15%] w-48 h-48 md:w-80 md:h-80"
                style={{
                  background: 'radial-gradient(circle, rgba(146, 254, 157, 0.07) 0%, rgba(146, 254, 157, 0) 70%)',
                  opacity: 0.4
                }}
              ></div>
              
              {/* Refined accent 3 - Blue */}
              <div
                className="absolute top-[60%] left-[20%] w-24 h-24 md:w-40 md:h-40"
                style={{
                  background: 'radial-gradient(circle, rgba(96, 165, 250, 0.07) 0%, rgba(96, 165, 250, 0) 70%)',
                  opacity: 0.3
                }}
              ></div>
            </div>
            
            {/* Main content container with subtle gradient border */}
            <div className="max-w-5xl w-full relative z-10 py-6 md:py-10">
              <div className="splash-content flex flex-col items-center justify-center px-4 md:px-6">
                {/* Main Content */}
                <div className="relative z-20 text-center">
                  {/* Logo - ARIQ with no frame, just text */}
                  <div 
                    ref={logoRef} 
                    className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold font-[Outfit] tracking-tighter mb-4 md:mb-6 text-[#fffce1] perspective-1000"
                  >
                    ARIQ Systems
                    <span className="text-[#00c9ff]">.</span>
                  </div>
                  
                  {/* Slogan with clean animated underline */}
                  <div className="relative">
                    <div 
                      ref={sloganRef} 
                      className="text-base sm:text-lg md:text-xl font-medium text-[#fffce1]/80 mb-8 md:mb-12 font-dm-sans"
                    >
                      Next-Gen Solutions for a Fast-Changing World
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
                  
                  {/* Animated dots to show loading */}
                  <div className="mt-6 md:mt-8 flex justify-center space-x-2">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#fffce1]"
                        animate={{ 
                          opacity: [0.3, 1, 0.3],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity,
                          delay: i * 0.3
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Refined loading indicator with smooth gradient - exactly 6 seconds */}
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 flex justify-center">
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