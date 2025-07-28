'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion'
import { FaDatabase, FaCloud, FaChartLine, FaCogs, FaRocket, FaServer } from 'react-icons/fa'

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

  // Detect mobile devices
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  // Disable scroll animations on mobile
  const backgroundY = useTransform(scrollYProgress, [0, 1], isMobile ? ['0%', '0%'] : ['0%', '30%'])
  const rotateX = useTransform(scrollYProgress, [0, 0.5], isMobile ? [0, 0] : [0, 10])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], isMobile ? [1, 1, 1] : [1, 1.05, 1])
  
  // For floating animation on hover
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)
  
  // Animated typing effect for the title
  const [displayedTitle, setDisplayedTitle] = useState("")
  const fullTitle = "Your Data Engineering Partner"
  
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
  
  // Data Engineering focused features
  const features = [
    {
      icon: FaDatabase,
      title: "Data Pipeline Architecture",
      description: "Building robust, scalable data pipelines using Apache Airflow, Spark, and modern cloud platforms for reliable data processing."
    },
    {
      icon: FaCloud,
      title: "Cloud Data Solutions",
      description: "Expertise in AWS data services including S3, EMR, Redshift, and implementing medallion architecture patterns."
    },
    {
      icon: FaChartLine,
      title: "Real-time Analytics",
      description: "Designing streaming data solutions with Kafka, Flink, and building real-time dashboards for business intelligence."
    },
    {
      icon: FaCogs,
      title: "ETL/ELT Excellence",
      description: "Transforming raw data into actionable insights using DBT, Great Expectations, and advanced data modeling techniques."
    },
    {
      icon: FaServer,
      title: "Data Warehouse Design",
      description: "Creating optimized data warehouses and data lakes that support enterprise-scale analytics and reporting needs."
    },
    {
      icon: FaRocket,
      title: "Performance Optimization",
      description: "Ensuring high-performance data processing with monitoring, alerting, and continuous optimization strategies."
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
      {/* Background Elements with conditional animations */}
      <div className="absolute inset-0 z-0">
        {/* Abstract shape 1 - Cyan */}
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
            rotate: isMobile ? 0 : [0, 5, 0, -5, 0]
          }}
          transition={{ 
            opacity: { duration: 1.5, delay: 0.5 },
            rotate: isMobile ? {} : { repeat: Infinity, duration: 20, ease: "linear" }
          }}
          className="absolute -bottom-40 -right-20 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(146, 254, 157, 0.2), rgba(146, 254, 157, 0.05))',
            filter: 'blur(100px)',
            y: backgroundY
          }}
        />
        
        {/* Add extra floating elements with conditional animations */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 0.25,
            x: isMobile ? 0 : [0, 10, 0, -10, 0]
          }}
          transition={{ 
            opacity: { duration: 1.5, delay: 0.7 },
            x: isMobile ? {} : { repeat: Infinity, duration: 15, ease: "easeInOut" }
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
            scale: isMobile ? 1 : [1, 1.1, 1, 0.9, 1]
          }}
          transition={{ 
            opacity: { duration: 1.5, delay: 0.9 },
            scale: isMobile ? {} : { repeat: Infinity, duration: 12, ease: "easeInOut" }
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
            Transforming raw data into strategic business assets through scalable data engineering solutions, 
            cloud-native architectures, and cutting-edge analytics platforms.
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
              
              {/* Animated icon that appears on hover */}
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
        
        {/* Data Pipeline Architecture Showcase */}
        <motion.div
          style={{ rotateX }}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-10 mb-16 md:mb-20 perspective-1000"
        >
          {/* Data Pipeline Illustration */}
          <motion.div 
            className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
            whileInView={isMobile ? {} : { 
              rotate: [0, 2, 0, -2, 0],
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
                {/* Data Pipeline SVG Illustration */}
                <svg width="100%" height="100%" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                  {/* Background elements */}
                  <motion.circle 
                    cx="150" cy="150" r="120" fill="rgba(0, 201, 255, 0.05)"
                    animate={isMobile ? {} : { r: [120, 125, 120] }}
                    transition={isMobile ? {} : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* Data Sources */}
                  <motion.rect 
                    x="20" y="60" width="60" height="40" rx="8" fill="#0d0d0d" 
                    stroke="#00c9ff" strokeWidth="2" 
                    animate={isMobile ? {} : { y: [60, 58, 60] }}
                    transition={isMobile ? {} : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <text x="50" y="85" textAnchor="middle" fill="#00c9ff" fontSize="12" fontWeight="bold">API</text>
                  
                  <motion.rect 
                    x="20" y="120" width="60" height="40" rx="8" fill="#0d0d0d" 
                    stroke="#92fe9d" strokeWidth="2"
                    animate={isMobile ? {} : { y: [120, 122, 120] }}
                    transition={isMobile ? {} : { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  />
                  <text x="50" y="145" textAnchor="middle" fill="#92fe9d" fontSize="12" fontWeight="bold">DB</text>
                  
                  <motion.rect 
                    x="20" y="180" width="60" height="40" rx="8" fill="#0d0d0d" 
                    stroke="#fffce1" strokeWidth="2"
                    animate={isMobile ? {} : { y: [180, 183, 180] }}
                    transition={isMobile ? {} : { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                  <text x="50" y="205" textAnchor="middle" fill="#fffce1" fontSize="12" fontWeight="bold">Files</text>
                  
                  {/* Processing Layer - Airflow/Spark */}
                  <motion.rect 
                    x="120" y="110" width="60" height="80" rx="12" fill="#0d0d0d" 
                    stroke="#00c9ff" strokeWidth="2"
                    animate={isMobile ? {} : { scale: [1, 1.02, 1] }}
                    transition={isMobile ? {} : { duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <text x="150" y="140" textAnchor="middle" fill="#00c9ff" fontSize="10" fontWeight="bold">Airflow</text>
                  <text x="150" y="155" textAnchor="middle" fill="#92fe9d" fontSize="10" fontWeight="bold">Spark</text>
                  <text x="150" y="170" textAnchor="middle" fill="#fffce1" fontSize="10" fontWeight="bold">ETL</text>
                  
                  {/* Data Storage - Warehouse */}
                  <motion.rect 
                    x="220" y="110" width="60" height="80" rx="12" fill="#0d0d0d" 
                    stroke="#92fe9d" strokeWidth="2"
                    animate={isMobile ? {} : { y: [110, 108, 110] }}
                    transition={isMobile ? {} : { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  />
                  <text x="250" y="140" textAnchor="middle" fill="#92fe9d" fontSize="10" fontWeight="bold">Data</text>
                  <text x="250" y="155" textAnchor="middle" fill="#00c9ff" fontSize="10" fontWeight="bold">Warehouse</text>
                  <text x="250" y="170" textAnchor="middle" fill="#fffce1" fontSize="10" fontWeight="bold">Redshift</text>
                  
                  {/* Data Flow Arrows */}
                  <motion.path 
                    d="M85 80 L115 135" 
                    stroke="#00c9ff" 
                    strokeWidth="2" 
                    fill="none"
                    markerEnd="url(#arrowhead1)"
                    animate={isMobile ? {} : { strokeWidth: [2, 3, 2], opacity: [0.7, 1, 0.7] }}
                    transition={isMobile ? {} : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.path 
                    d="M85 140 L115 150" 
                    stroke="#92fe9d" 
                    strokeWidth="2" 
                    fill="none"
                    markerEnd="url(#arrowhead2)"
                    animate={isMobile ? {} : { strokeWidth: [2, 3, 2], opacity: [0.7, 1, 0.7] }}
                    transition={isMobile ? {} : { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  />
                  <motion.path 
                    d="M85 200 L115 165" 
                    stroke="#fffce1" 
                    strokeWidth="2" 
                    fill="none"
                    markerEnd="url(#arrowhead3)"
                    animate={isMobile ? {} : { strokeWidth: [2, 3, 2], opacity: [0.7, 1, 0.7] }}
                    transition={isMobile ? {} : { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                  
                  <motion.path 
                    d="M185 150 L215 150" 
                    stroke="#00c9ff" 
                    strokeWidth="3" 
                    fill="none"
                    markerEnd="url(#arrowhead1)"
                    animate={isMobile ? {} : { strokeWidth: [3, 4, 3], opacity: [0.8, 1, 0.8] }}
                    transition={isMobile ? {} : { duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* Arrow markers */}
                  <defs>
                    <marker id="arrowhead1" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#00c9ff" />
                    </marker>
                    <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#92fe9d" />
                    </marker>
                    <marker id="arrowhead3" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#fffce1" />
                    </marker>
                  </defs>
                  
                  {/* Monitoring/Analytics Layer */}
                  <motion.circle 
                    cx="150" cy="60" r="25" fill="rgba(0, 201, 255, 0.1)" 
                    stroke="#00c9ff" strokeWidth="2"
                    animate={isMobile ? {} : { r: [25, 27, 25] }}
                    transition={isMobile ? {} : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <text x="150" y="65" textAnchor="middle" fill="#00c9ff" fontSize="10" fontWeight="bold">Monitor</text>
                  
                  <motion.circle 
                    cx="150" cy="240" r="25" fill="rgba(146, 254, 157, 0.1)" 
                    stroke="#92fe9d" strokeWidth="2"
                    animate={isMobile ? {} : { r: [25, 27, 25] }}
                    transition={isMobile ? {} : { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                  />
                  <text x="150" y="245" textAnchor="middle" fill="#92fe9d" fontSize="10" fontWeight="bold">Analytics</text>
                  
                  {/* Connection lines to monitoring */}
                  <motion.path 
                    d="M150 90 L150 105" 
                    stroke="#00c9ff" 
                    strokeWidth="1" 
                    strokeDasharray="3,3"
                    fill="none"
                    animate={isMobile ? {} : { opacity: [0.5, 1, 0.5] }}
                    transition={isMobile ? {} : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.path 
                    d="M150 195 L150 210" 
                    stroke="#92fe9d" 
                    strokeWidth="1" 
                    strokeDasharray="3,3"
                    fill="none"
                    animate={isMobile ? {} : { opacity: [0.5, 1, 0.5] }}
                    transition={isMobile ? {} : { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  />
                  
                  {/* Data flow particles */}
                  {!isMobile && (
                    <>
                      <motion.circle 
                        cx="0" cy="0" r="2" fill="#00c9ff"
                        animate={{ 
                          cx: [85, 150, 215],
                          cy: [80, 135, 150],
                          opacity: [0, 1, 0]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      />
                      
                      <motion.circle 
                        cx="0" cy="0" r="2" fill="#92fe9d"
                        animate={{ 
                          cx: [85, 150, 215],
                          cy: [140, 150, 150],
                          opacity: [0, 1, 0]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      />
                      
                      <motion.circle 
                        cx="0" cy="0" r="2" fill="#fffce1"
                        animate={{ 
                          cx: [85, 150, 215],
                          cy: [200, 165, 150],
                          opacity: [0, 1, 0]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                      />
                    </>
                  )}
                </svg>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Text Content */}
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
              End-to-End Data Pipeline Solutions
            </motion.h3>
            <motion.p 
              variants={itemVariants}
              className="text-sm md:text-base text-[#fffce1]/80 mb-3 md:mb-4 leading-relaxed text-justify md:text-left"
            >
              From data ingestion to analytics, I build comprehensive data engineering solutions that transform raw data 
              into valuable business insights using industry-leading tools and best practices.
            </motion.p>
            <motion.p 
              variants={itemVariants}
              className="text-sm md:text-base text-[#fffce1]/80 mb-5 md:mb-6 leading-relaxed text-justify md:text-left"
            >
              Each pipeline is designed for scalability, reliability, and performance, with built-in monitoring, 
              data quality checks, and automated workflows.
            </motion.p>
            <motion.ul 
              variants={containerVariants}
              className="space-y-2 flex flex-col w-full px-2 md:px-0"
            >
              {["Apache Airflow", "Apache Spark", "AWS Data Services", "DBT & Great Expectations", "Kafka & Flink", "Data Warehouse Design"].map((skill, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-center justify-start w-full"
                  variants={itemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <motion.span 
                    className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                    style={{ backgroundColor: index % 2 === 0 ? '#00c9ff' : '#92fe9d' }}
                    animate={isMobile ? {} : { scale: [1, 1.5, 1] }}
                    transition={isMobile ? {} : { duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  ></motion.span>
                  <span className="text-sm md:text-base text-[#fffce1]/90 text-left">{skill}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
        
        {/* Cloud & Scalability Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-10"
        >
          {/* Cloud Architecture illustration */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <div className="relative w-[250px] md:w-[300px]">
              <motion.div 
                className="absolute inset-0 blur-2xl rounded-full"
                animate={isMobile ? {} : { 
                  background: [
                    'radial-gradient(circle, rgba(146, 254, 157, 0.2), rgba(0, 201, 255, 0.1))',
                    'radial-gradient(circle, rgba(0, 201, 255, 0.2), rgba(146, 254, 157, 0.1))',
                    'radial-gradient(circle, rgba(146, 254, 157, 0.2), rgba(0, 201, 255, 0.1))'
                  ]
                }}
                transition={isMobile ? {} : { duration: 10, repeat: Infinity, ease: "linear" }}
              ></motion.div>
              <div className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px] flex items-center justify-center">
                {/* Cloud Infrastructure SVG */}
                <svg width="100%" height="100%" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                  {/* Cloud shape */}
                  <motion.path 
                    d="M100 150 C80 130, 120 110, 150 130 C180 110, 220 130, 200 150 C220 170, 180 190, 150 170 C120 190, 80 170, 100 150 Z"
                    fill="rgba(0, 201, 255, 0.15)" stroke="#00c9ff" strokeWidth="2"
                    animate={isMobile ? {} : { scale: [1, 1.02, 1] }}
                    transition={isMobile ? {} : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* AWS Services nodes */}
                  <motion.circle cx="120" cy="130" r="12" fill="#00c9ff" opacity="0.8"
                    animate={isMobile ? {} : { r: [12, 14, 12] }}
                    transition={isMobile ? {} : { duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <text x="120" y="135" textAnchor="middle" fill="#0d0d0d" fontSize="8" fontWeight="bold">S3</text>
                  
                  <motion.circle cx="180" cy="130" r="12" fill="#92fe9d" opacity="0.8"
                    animate={isMobile ? {} : { r: [12, 14, 12] }}
                    transition={isMobile ? {} : { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  />
                  <text x="180" y="135" textAnchor="middle" fill="#0d0d0d" fontSize="8" fontWeight="bold">EMR</text>
                  
                  <motion.circle cx="150" cy="170" r="12" fill="#fffce1" opacity="0.8"
                    animate={isMobile ? {} : { r: [12, 14, 12] }}
                    transition={isMobile ? {} : { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                  <text x="150" y="175" textAnchor="middle" fill="#0d0d0d" fontSize="7" fontWeight="bold">Redshift</text>
                  
                  {/* Data flow connections */}
                  <motion.path 
                    d="M130 135 L170 135" stroke="#00c9ff" strokeWidth="2" fill="none"
                    animate={isMobile ? {} : { opacity: [0.5, 1, 0.5] }}
                    transition={isMobile ? {} : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.path 
                    d="M135 145 L145 160" stroke="#92fe9d" strokeWidth="2" fill="none"
                    animate={isMobile ? {} : { opacity: [0.5, 1, 0.5] }}
                    transition={isMobile ? {} : { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  />
                  <motion.path 
                    d="M165 145 L155 160" stroke="#00c9ff" strokeWidth="2" fill="none"
                    animate={isMobile ? {} : { opacity: [0.5, 1, 0.5] }}
                    transition={isMobile ? {} : { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                  />
                  
                  {/* Monitoring & Analytics */}
                  <motion.rect x="70" y="90" width="40" height="20" rx="10" fill="rgba(0, 201, 255, 0.2)" stroke="#00c9ff"
                    animate={isMobile ? {} : { y: [90, 88, 90] }}
                    transition={isMobile ? {} : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <text x="90" y="102" textAnchor="middle" fill="#00c9ff" fontSize="8">Grafana</text>
                  
                  <motion.rect x="190" y="90" width="40" height="20" rx="10" fill="rgba(146, 254, 157, 0.2)" stroke="#92fe9d"
                    animate={isMobile ? {} : { y: [90, 92, 90] }}
                    transition={isMobile ? {} : { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  />
                  <text x="210" y="102" textAnchor="middle" fill="#92fe9d" fontSize="8">Power BI</text>
                  
                  {/* Connection lines from cloud to monitoring */}
                  <motion.path d="M110 120 L100 110" stroke="#00c9ff" strokeWidth="1" strokeDasharray="2,2" fill="none"
                    animate={isMobile ? {} : { opacity: [0.3, 0.8, 0.3] }}
                    transition={isMobile ? {} : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.path d="M190 120 L200 110" stroke="#92fe9d" strokeWidth="1" strokeDasharray="2,2" fill="none"
                    animate={isMobile ? {} : { opacity: [0.3, 0.8, 0.3] }}
                    transition={isMobile ? {} : { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                  />
                  
                  {/* Scalability indicators */}
                  <motion.circle cx="80" cy="200" r="15" fill="rgba(0, 201, 255, 0.1)" stroke="#00c9ff"
                    animate={isMobile ? {} : { r: [15, 18, 15] }}
                    transition={isMobile ? {} : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <text x="80" y="205" textAnchor="middle" fill="#00c9ff" fontSize="9">Scale</text>
                  
                  <motion.circle cx="220" cy="200" r="15" fill="rgba(146, 254, 157, 0.1)" stroke="#92fe9d"
                    animate={isMobile ? {} : { r: [15, 18, 15] }}
                    transition={isMobile ? {} : { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                  />
                  <text x="220" y="205" textAnchor="middle" fill="#92fe9d" fontSize="9">Secure</text>
                  
                  {/* Data particles flowing */}
                  {!isMobile && (
                    <>
                      <motion.circle cx="0" cy="0" r="2" fill="#00c9ff"
                        animate={{
                          cx: [50, 120, 180, 250],
                          cy: [150, 130, 130, 150],
                          opacity: [0, 1, 1, 0]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      />
                      
                      <motion.circle cx="0" cy="0" r="2" fill="#92fe9d"
                        animate={{
                          cx: [150, 150, 150],
                          cy: [50, 130, 200],
                          opacity: [0, 1, 0]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      />
                    </>
                  )}
                </svg>
              </div>
            </div>
          </div>
          
          {/* Text Content */}
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
                animate={isMobile ? {} : { scale: [1, 1.02, 1] }}
                transition={isMobile ? {} : { duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                Cloud-Native & Scalable Solutions
              </motion.span>
            </motion.h3>
            <motion.p 
              variants={itemVariants}
              className="text-sm md:text-base text-[#fffce1]/80 mb-3 md:mb-4 leading-relaxed text-justify md:text-left"
            >
              Leveraging AWS cloud services to build enterprise-grade data platforms that scale automatically with your 
              business needs while maintaining high availability and security standards.
            </motion.p>
            <motion.p 
              variants={itemVariants}
              className="text-sm md:text-base text-[#fffce1]/80 mb-5 md:mb-6 leading-relaxed text-justify md:text-left"
            >
              From real-time streaming to batch processing, each solution is architected for performance, 
              cost-efficiency, and seamless integration with existing business systems.
            </motion.p>
            <motion.ul 
              variants={containerVariants}
              className="space-y-2 flex flex-col w-full px-2 md:px-0"
            >
              {["AWS S3 & EMR", "Real-time Streaming", "Auto-scaling Architecture", "Data Quality Monitoring", "Security & Compliance", "Cost Optimization"].map((skill, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-center justify-start w-full"
                  variants={itemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <motion.span 
                    className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                    style={{ backgroundColor: index % 2 === 0 ? '#00c9ff' : '#92fe9d' }}
                    animate={isMobile ? {} : { scale: [1, 1.5, 1] }}
                    transition={isMobile ? {} : { duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  ></motion.span>
                  <span className="text-sm md:text-base text-[#fffce1]/90 text-left">{skill}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center mt-16 md:mt-20 px-4 md:px-0"
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-[#fffce1]"
            animate={isMobile ? {} : { 
              textShadow: [
                "0 0 5px rgba(0, 201, 255, 0)", 
                "0 0 10px rgba(0, 201, 255, 0.3)", 
                "0 0 5px rgba(0, 201, 255, 0)"
              ]
            }}
            transition={isMobile ? {} : { duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Ready to Transform Your Data?
          </motion.h3>
          <motion.p 
            className="text-sm md:text-base text-[#fffce1]/80 max-w-2xl mx-auto mb-6 md:mb-8 text-justify md:text-center"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Let&apos;s build robust data engineering solutions that turn your raw data into strategic business assets. 
            From pipeline design to analytics platforms, I&apos;ll help you harness the full potential of your data.
          </motion.p>
          <motion.a
            href="mailto:abdulrehman.iq@outlook.com"
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
              animate={isMobile ? {} : { y: [0, -3, 0] }}
              transition={isMobile ? {} : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              Let&apos;s Discuss Your Data Needs
            </motion.span>
            
            {/* Animated pulse effect around button */}
            {!isMobile && (
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
            )}
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}