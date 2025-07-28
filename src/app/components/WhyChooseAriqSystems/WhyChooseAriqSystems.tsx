'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion'
import { FaCode, FaMobileAlt, FaRocket, FaTools, FaUserTie, FaGlobe } from 'react-icons/fa'

export default function WhyChooseAriqSystems() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })
  
  // Refs for each section
  const titleRef = useRef<HTMLHeadingElement>(null)
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 })
  
  // Create refs array manually instead of using map with hooks
  const ref0 = useRef<HTMLDivElement>(null)
  const ref1 = useRef<HTMLDivElement>(null)
  const ref2 = useRef<HTMLDivElement>(null)
  const ref3 = useRef<HTMLDivElement>(null)
  const ref4 = useRef<HTMLDivElement>(null)
  const ref5 = useRef<HTMLDivElement>(null)
  
  // Combine refs into an array for easier usage
  const refs = [ref0, ref1, ref2, ref3, ref4, ref5]

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [0, 10])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1])
  
  // For floating animation on hover
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)
  
  // Animated typing effect for the title
  const [displayedTitle, setDisplayedTitle] = useState("")
  const fullTitle = "Your Next Reliable Developer" // Updated title
  
  useEffect(() => {
    if (isTitleInView) {
      let i = 0
      const typingInterval = setInterval(() => {
        if (i < fullTitle.length) {
          setDisplayedTitle(fullTitle.substring(0, i + 1))
          i++
        } else {
          clearInterval(typingInterval)
        }
      }, 100)
      
      return () => clearInterval(typingInterval)
    }
  }, [isTitleInView, fullTitle])
  
  // Animated features with icons (removed AI specifics)
  const features = [
    {
      icon: FaCode,
      title: "Full-Stack Web Development",
      description: "Building scalable, performant web applications with modern frameworks and clean architecture patterns."
    },
    {
      icon: FaMobileAlt,
      title: "Mobile App Development",
      description: "Creating intuitive mobile experiences that work flawlessly across iOS and Android platforms."
    },
    {
      icon: FaUserTie,
      title: "UK-Based Client Success",
      description: "Proven track record of delivering successful projects for discerning UK-based clients."
    },
    {
      icon: FaTools,
      title: "Clean Development Practices",
      description: "Commitment to writing maintainable, well-documented code that scales with your business needs."
    },
    {
      icon: FaGlobe,
      title: "Cross-Platform Expertise",
      description: "Seamlessly bridging web and mobile platforms to deliver cohesive digital experiences."
    },
    {
      icon: FaRocket,
      title: "Future-Ready Solutions",
      description: "Forward-thinking approach that prepares your digital assets for tomorrow's challenges."
    }
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }
  
  const iconAnimation = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.2, 
      rotate: [0, 10, -10, 0],
      transition: { 
        duration: 0.6, 
        ease: "easeInOut",
        rotate: {
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2
        }
      }
    }
  }
  
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  return (
    <section
      ref={containerRef}
      className="relative py-16 md:py-24 overflow-hidden"
      id="why-choose"
      style={{
        background: '#0d0d0d'
      }}
    >
      {/* Background Elements with interactive animations */}
      <div className="absolute inset-0 z-0">
        {/* Abstract shape 1 - Cyan - with mouse follow effect */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute top-20 -left-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 201, 255, 0.2), rgba(0, 201, 255, 0.05))',
            filter: 'blur(80px)',
            y: backgroundY,
            scale
          }}
        />
        
        {/* Abstract shape 2 - Green */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 0.35,
            rotate: [0, 5, 0, -5, 0]
          }}
          transition={{ 
            opacity: { duration: 1.5, delay: 0.5 },
            rotate: { repeat: Infinity, duration: 20, ease: "linear" }
          }}
          className="absolute -bottom-40 -right-20 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(146, 254, 157, 0.2), rgba(146, 254, 157, 0.05))',
            filter: 'blur(100px)',
            y: backgroundY
          }}
        />
        
        {/* Add extra floating elements that react to scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 0.25,
            x: [0, 10, 0, -10, 0]
          }}
          transition={{ 
            opacity: { duration: 1.5, delay: 0.7 },
            x: { repeat: Infinity, duration: 15, ease: "easeInOut" }
          }}
          className="absolute top-1/3 right-[20%] w-[100px] md:w-[200px] h-[100px] md:h-[200px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 201, 255, 0.15), rgba(0, 201, 255, 0.03))',
            filter: 'blur(60px)',
            y: backgroundY
          }}
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 0.25,
            scale: [1, 1.1, 1, 0.9, 1]
          }}
          transition={{ 
            opacity: { duration: 1.5, delay: 0.9 },
            scale: { repeat: Infinity, duration: 12, ease: "easeInOut" }
          }}
          className="absolute bottom-1/4 left-[15%] w-[150px] md:w-[300px] h-[150px] md:h-[300px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(146, 254, 157, 0.15), rgba(146, 254, 157, 0.03))',
            filter: 'blur(70px)',
            y: backgroundY
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header with typing effect */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-[#fffce1] font-outfit"
          >
            {displayedTitle}
            <motion.span 
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="ml-1 inline-block"
            >
              |
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-base md:text-lg text-[#fffce1]/90 leading-relaxed px-4 text-justify md:text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 1.5, ease: "easeOut" }}
          >
            Delivering exceptional software solutions through thoughtful design, clean code, and innovative approaches that 
            solve real business problems and create delightful user experiences.
          </motion.p>
        </motion.div>
        
        {/* Main Content Grid with staggered entrance and hover effects */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              ref={refs[index]}
              variants={itemVariants}
              whileHover={{ 
                y: -5, 
                boxShadow: '0 10px 20px rgba(0, 201, 255, 0.1)',
                transition: { duration: 0.3 } 
              }}
              onHoverStart={() => setHoveredFeature(index)}
              onHoverEnd={() => setHoveredFeature(null)}
              className="p-5 md:p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <motion.div 
                className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center mb-4 md:mb-5 rounded-xl bg-white/5"
                variants={iconAnimation}
                initial="rest"
                animate={hoveredFeature === index ? "hover" : "rest"}
              >
                <feature.icon 
                  className="text-xl md:text-2xl" 
                  style={{ color: index % 2 === 0 ? '#00c9ff' : '#92fe9d' }}
                />
              </motion.div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-[#fffce1]">{feature.title}</h3>
              <p className="text-sm md:text-base text-[#fffce1]/70 text-justify">{feature.description}</p>
              
              {/* Animated icon that appears on hover (without "Learn more" text) */}
              <AnimatePresence>
                {hoveredFeature === index && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="mt-4 flex justify-center"
                    style={{ color: index % 2 === 0 ? '#00c9ff' : '#92fe9d' }}
                  >
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Cross-Platform Experience Showcase with scroll-triggered animations - IMPROVED FOR MOBILE */}
        <motion.div
          style={{ rotateX }}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-10 mb-16 md:mb-20 perspective-1000"
        >
          {/* NEW ENHANCED TECH ILLUSTRATION */}
          <motion.div 
            className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
            whileInView={{ 
              rotate: [0, 5, 0, -5, 0],
              transition: { duration: 10, repeat: Infinity, ease: "easeInOut" }
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <div className="relative w-[250px] md:w-[300px]">
              <div 
                className="absolute inset-0 blur-2xl rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(0, 201, 255, 0.2), rgba(146, 254, 157, 0.1))'
                }}
              ></div>
              <motion.div 
                className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px] flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Enhanced Tech-Focused SVG Illustration */}
                <svg width="100%" height="100%" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                  {/* Background elements */}
                  <motion.circle 
                    cx="150" cy="150" r="120" fill="rgba(0, 201, 255, 0.05)"
                    animate={{ r: [120, 125, 120] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* Browser/Desktop Platform */}
                  <motion.rect 
                    x="80" y="50" width="140" height="90" rx="6" fill="#0d0d0d" 
                    stroke="#00c9ff" strokeWidth="2" 
                    animate={{ y: [50, 47, 50] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <rect x="80" y="50" width="140" height="20" rx="6" fill="#00c9ff" opacity="0.3" />
                  <circle cx="95" cy="60" r="5" fill="#ff5f57" />
                  <circle cx="115" cy="60" r="5" fill="#febc2e" />
                  <circle cx="135" cy="60" r="5" fill="#28c840" />
                  
                  {/* Browser Content */}
                  <rect x="90" y="80" width="50" height="5" rx="2" fill="#00c9ff" />
                  <rect x="90" y="95" width="120" height="5" rx="2" fill="#fffce1" opacity="0.7" />
                  <rect x="90" y="110" width="80" height="5" rx="2" fill="#fffce1" opacity="0.7" />
                  <motion.rect 
                    x="90" y="125" width="100" height="5" rx="2" fill="#92fe9d" opacity="0.8"
                    animate={{ width: [100, 60, 100] }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  />
                  
                  {/* Mobile Device */}
                  <motion.rect 
                    x="180" y="160" width="40" height="80" rx="8" fill="#0d0d0d" 
                    stroke="#92fe9d" strokeWidth="2"
                    animate={{ y: [160, 163, 160] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  />
                  <rect x="180" y="180" width="40" height="45" rx="1" fill="#92fe9d" opacity="0.3" />
                  <rect x="195" y="170" width="10" height="3" rx="1" fill="#fffce1" />
                  <circle cx="200" cy="230" r="5" stroke="#fffce1" strokeWidth="1" fill="none" />
                  
                  {/* Tablet Device */}
                  <motion.rect 
                    x="70" y="160" width="70" height="90" rx="8" fill="#0d0d0d" 
                    stroke="#00c9ff" strokeWidth="2"
                    animate={{ y: [160, 165, 160] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                  <rect x="80" y="180" width="50" height="55" rx="1" fill="#00c9ff" opacity="0.3" />
                  <rect x="100" y="170" width="10" height="3" rx="1" fill="#fffce1" />
                  <circle cx="105" cy="240" r="5" stroke="#fffce1" strokeWidth="1" fill="none" />
                  
                  {/* Connection Lines Between Devices */}
                  <motion.path 
                    d="M140 100 L180 180" 
                    stroke="#00c9ff" 
                    strokeWidth="1" 
                    strokeDasharray="5,5"
                    fill="none"
                    animate={{ strokeWidth: [1, 2, 1], opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.path 
                    d="M120 100 L100 170" 
                    stroke="#92fe9d" 
                    strokeWidth="1" 
                    strokeDasharray="5,5"
                    fill="none"
                    animate={{ strokeWidth: [1, 2, 1], opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                  <motion.path 
                    d="M120 210 L170 210" 
                    stroke="#fffce1" 
                    strokeWidth="1" 
                    strokeDasharray="5,5"
                    fill="none"
                    animate={{ strokeWidth: [1, 2, 1], opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  />
                  
                  {/* Tech Icons/Symbols */}
                  <motion.circle 
                    cx="150" cy="140" r="12" fill="#00c9ff" opacity="0.8"
                    animate={{ 
                      r: [12, 14, 12],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <text x="146" y="145" fill="#0d0d0d" fontSize="12" fontWeight="bold">R</text>
                  
                  <motion.circle 
                    cx="200" cy="130" r="10" fill="#92fe9d" opacity="0.8"
                    animate={{ 
                      r: [10, 12, 10],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                  />
                  <text x="196" y="134" fill="#0d0d0d" fontSize="10" fontWeight="bold">N</text>
                  
                  <motion.circle 
                    cx="65" cy="115" r="10" fill="#fffce1" opacity="0.8"
                    animate={{ 
                      r: [10, 12, 10],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                  />
                  <text x="62" y="119" fill="#0d0d0d" fontSize="10" fontWeight="bold">T</text>
                  
                  {/* Code Brackets */}
                  <motion.path 
                    d="M40 180 L60 160 L40 140" 
                    stroke="#00c9ff" 
                    strokeWidth="3" 
                    fill="none" 
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                  />
                  
                  <motion.path 
                    d="M260 180 L240 160 L260 140" 
                    stroke="#92fe9d" 
                    strokeWidth="3" 
                    fill="none"
                    animate={{ x: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                  />
                  
                  {/* Data Flow Animation */}
                  <motion.circle 
                    cx="0" cy="0" r="3" fill="#00c9ff"
                    animate={{ 
                      cx: [140, 180],
                      cy: [100, 180],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  />
                  
                  <motion.circle 
                    cx="0" cy="0" r="3" fill="#92fe9d"
                    animate={{ 
                      cx: [120, 100],
                      cy: [100, 170],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                  />
                  
                  <motion.circle 
                    cx="0" cy="0" r="3" fill="#fffce1"
                    animate={{ 
                      cx: [120, 170],
                      cy: [210, 210],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Text Content with animated entrance of items - IMPROVED FOR MOBILE */}
          <motion.div 
            className="w-full md:w-1/2 px-4 md:px-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.h3 
              variants={itemVariants}
              className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#fffce1] text-center md:text-left"
            >
              Bridging Web & Mobile Platforms
            </motion.h3>
            <motion.p 
              variants={itemVariants}
              className="text-sm md:text-base text-[#fffce1]/80 mb-3 md:mb-4 leading-relaxed text-justify md:text-left"
            >
              With extensive experience across both web and mobile development ecosystems, Ariq Systems delivers cohesive 
              solutions that work seamlessly wherever your users are.
            </motion.p>
            <motion.p 
              variants={itemVariants}
              className="text-sm md:text-base text-[#fffce1]/80 mb-5 md:mb-6 leading-relaxed text-justify md:text-left"
            >
              Each project benefits from platform-specific optimization while maintaining consistency in quality, 
              performance, and user experience.
            </motion.p>
            <motion.ul 
  variants={containerVariants}
  className="space-y-2 flex flex-col w-full px-2 md:px-0"
>
  {["React & Next.js", "React Native", "Node.js", "RESTful APIs", "TypeScript", "Database Design"].map((skill, index) => (
    <motion.li 
      key={index} 
      className="flex items-center justify-start w-full"
      variants={itemVariants}
      whileHover={{ x: 5, transition: { duration: 0.2 } }}
    >
      <motion.span 
        className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
        style={{ backgroundColor: index % 2 === 0 ? '#00c9ff' : '#92fe9d' }}
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
      ></motion.span>
      <span className="text-sm md:text-base text-[#fffce1]/90 text-left">{skill}</span>
    </motion.li>
  ))}
</motion.ul>
          </motion.div>
        </motion.div>
        
        {/* Future Vision with parallax effect - IMPROVED FOR MOBILE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-10"
        >
          {/* Generic technology illustration with animated nodes */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <div className="relative w-[250px] md:w-[300px]">
              <motion.div 
                className="absolute inset-0 blur-2xl rounded-full"
                animate={{ 
                  background: [
                    'radial-gradient(circle, rgba(146, 254, 157, 0.2), rgba(0, 201, 255, 0.1))',
                    'radial-gradient(circle, rgba(0, 201, 255, 0.2), rgba(146, 254, 157, 0.1))',
                    'radial-gradient(circle, rgba(146, 254, 157, 0.2), rgba(0, 201, 255, 0.1))'
                  ]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              ></motion.div>
              <div className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px] flex items-center justify-center">
                {/* Technology/Future Illustration with animated connections */}
                <svg width="100%" height="100%" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                  <motion.circle 
                    cx="150" cy="150" r="80" fill="#00c9ff" opacity="0.2"
                    animate={{ r: [80, 85, 80] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.circle 
                    cx="150" cy="150" r="70" fill="#00c9ff" opacity="0.2" stroke="#00c9ff" strokeWidth="1"
                    animate={{ r: [70, 65, 70] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* Connected nodes representing technology with pulse animations */}
                  <motion.circle 
                    cx="150" cy="150" r="10" fill="#00c9ff"
                    animate={{ r: [10, 12, 10], fill: ['#00c9ff', '#92fe9d', '#00c9ff'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.circle 
                    cx="200" cy="130" r="8" fill="#00c9ff"
                    animate={{ r: [8, 10, 8] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  />
                  <motion.circle 
                    cx="180" cy="190" r="8" fill="#92fe9d"
                    animate={{ r: [8, 10, 8] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                  <motion.circle 
                    cx="120" cy="190" r="8" fill="#92fe9d"
                    animate={{ r: [8, 10, 8] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  />
                  <motion.circle 
                    cx="100" cy="130" r="8" fill="#00c9ff"
                    animate={{ r: [8, 10, 8] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  />
                  
                  {/* Animated connecting lines with pulse effect */}
                  <motion.line 
                    x1="150" y1="150" x2="200" y2="130" stroke="#00c9ff" strokeWidth="1"
                    animate={{ strokeWidth: [1, 2, 1], opacity: [1, 0.6, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.line 
                    x1="150" y1="150" x2="180" y2="190" stroke="#92fe9d" strokeWidth="1"
                    animate={{ strokeWidth: [1, 2, 1], opacity: [1, 0.6, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  />
                  <motion.line 
                    x1="150" y1="150" x2="120" y2="190" stroke="#92fe9d" strokeWidth="1"
                    animate={{ strokeWidth: [1, 2, 1], opacity: [1, 0.6, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                  <motion.line 
                    x1="150" y1="150" x2="100" y2="130" stroke="#00c9ff" strokeWidth="1"
                    animate={{ strokeWidth: [1, 2, 1], opacity: [1, 0.6, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  />
                  
                  {/* Remaining static lines */}
                  <line x1="200" y1="130" x2="180" y2="190" stroke="#00c9ff" strokeWidth="1" opacity="0.5" />
                  <line x1="180" y1="190" x2="120" y2="190" stroke="#92fe9d" strokeWidth="1" opacity="0.5" />
                  <line x1="120" y1="190" x2="100" y2="130" stroke="#92fe9d" strokeWidth="1" opacity="0.5" />
                  <line x1="100" y1="130" x2="200" y2="130" stroke="#00c9ff" strokeWidth="1" opacity="0.5" />
                  
                  {/* Secondary nodes with subtle animations */}
                  {[
                    { cx: 175, cy: 100, fill: "#00c9ff", delay: 0 },
                    { cx: 225, cy: 160, fill: "#92fe9d", delay: 0.5 },
                    { cx: 150, cy: 220, fill: "#92fe9d", delay: 1 },
                    { cx: 75, cy: 160, fill: "#92fe9d", delay: 1.5 },
                    { cx: 125, cy: 100, fill: "#00c9ff", delay: 2 }
                  ].map((node, index) => (
                    <motion.circle 
                      key={index}
                      cx={node.cx} 
                      cy={node.cy} 
                      r="5" 
                      fill={node.fill}
                      animate={{ r: [5, 6, 5], opacity: [1, 0.7, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: node.delay }}
                    />
                  ))}
                  
                  {/* Secondary connections remain static */}
                  <line x1="200" y1="130" x2="175" y2="100" stroke="#00c9ff" strokeWidth="1" opacity="0.5" />
                  <line x1="200" y1="130" x2="225" y2="160" stroke="#92fe9d" strokeWidth="1" opacity="0.5" />
                  <line x1="180" y1="190" x2="225" y2="160" stroke="#92fe9d" strokeWidth="1" opacity="0.5" />
                  <line x1="180" y1="190" x2="150" y2="220" stroke="#92fe9d" strokeWidth="1" opacity="0.5" />
                  <line x1="120" y1="190" x2="150" y2="220" stroke="#92fe9d" strokeWidth="1" opacity="0.5" />
                  <line x1="120" y1="190" x2="75" y2="160" stroke="#92fe9d" strokeWidth="1" opacity="0.5" />
                  <line x1="100" y1="130" x2="75" y2="160" stroke="#00c9ff" strokeWidth="1" opacity="0.5" />
                  <line x1="100" y1="130" x2="125" y2="100" stroke="#00c9ff" strokeWidth="1" opacity="0.5" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Text Content with staggered animation - IMPROVED FOR MOBILE */}
          <motion.div 
            className="w-full md:w-1/2 px-4 md:px-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.h3 
              variants={itemVariants}
              className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#fffce1] text-center md:text-left"
            >
              <motion.span
                className="inline-block"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                Looking to the Future
              </motion.span>
            </motion.h3>
            <motion.p 
              variants={itemVariants}
              className="text-sm md:text-base text-[#fffce1]/80 mb-3 md:mb-4 leading-relaxed text-justify md:text-left"
            >
              Ariq Systems is committed to staying at the forefront of technology, with plans to expand into emerging 
              fields including artificial intelligence as part of our commitment to delivering tomorrow&apos;s solutions today.
            </motion.p>
            <motion.p 
              variants={itemVariants}
              className="text-sm md:text-base text-[#fffce1]/80 mb-5 md:mb-6 leading-relaxed text-justify md:text-left"
            >
              With a foundation built on technical excellence and a dedication to continuous learning, we&apos;re positioned 
              to help your business not just keep pace with technology, but harness it for competitive advantage.
            </motion.p>
            <motion.ul 
  variants={containerVariants}
  className="space-y-2 flex flex-col w-full px-2 md:px-0"
>
  {["Cutting-Edge Technologies", "Performance Optimization", "Responsive Design", "Scalable Architecture", "Security Best Practices", "Future-Proof Development"].map((skill, index) => (
    <motion.li 
      key={index} 
      className="flex items-center justify-start w-full"
      variants={itemVariants}
      whileHover={{ x: 5, transition: { duration: 0.2 } }}
    >
      <motion.span 
        className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
        style={{ backgroundColor: index % 2 === 0 ? '#00c9ff' : '#92fe9d' }}
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
      ></motion.span>
      <span className="text-sm md:text-base text-[#fffce1]/90 text-left">{skill}</span>
    </motion.li>
  ))}
</motion.ul>
          </motion.div>
        </motion.div>
        
        {/* Call to Action with attention-grabbing animations - IMPROVED FOR MOBILE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center mt-16 md:mt-20 px-4 md:px-0"
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-[#fffce1]"
            animate={{ 
              textShadow: [
                "0 0 5px rgba(0, 201, 255, 0)", 
                "0 0 10px rgba(0, 201, 255, 0.3)", 
                "0 0 5px rgba(0, 201, 255, 0)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Let&apos;s Build Something Smart Together
          </motion.h3>
          <motion.p 
            className="text-sm md:text-base text-[#fffce1]/80 max-w-2xl mx-auto mb-6 md:mb-8 text-justify md:text-center"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Ready to transform your ideas into powerful digital solutions? Leverage our expertise in web and mobile 
            development to create standout applications that drive results.
          </motion.p>
          <motion.a
            href="mailto:abdulrehman.iq@outlook.com" // Added email link
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 0 25px rgba(0, 201, 255, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 md:px-8 py-3 md:py-4 text-sm md:text-base text-[#fffce1] font-medium rounded-xl transition-all duration-300 relative"
            style={{
              border: '2px solid transparent',
              backgroundImage: 'linear-gradient(#0d0d0d, #0d0d0d), linear-gradient(90deg, #00c9ff, #92fe9d)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
              boxShadow: '0 0 20px rgba(0, 201, 255, 0.2)'
            }}
          >
            <motion.span 
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              Contact Me
            </motion.span>
            
            {/* Animated pulse effect around button */}
            <motion.span
              className="absolute inset-0 rounded-xl"
              animate={{ 
                boxShadow: [
                  '0 0 0 0 rgba(0, 201, 255, 0.1)',
                  '0 0 0 10px rgba(0, 201, 255, 0)',
                ],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}