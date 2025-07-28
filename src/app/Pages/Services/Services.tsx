// 'use client'

// import { useRef, useState } from 'react'
// import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion'
// import { FaCode, FaMobileAlt, FaServer, FaDatabase, FaGlobe, FaTools, FaLayerGroup, FaPlug } from 'react-icons/fa'
// import { SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiFirebase, SiFlutter, SiSwift } from 'react-icons/si'
// import { useTheme } from '../../components/context/ThemeContext'

// export default function Services() {
//   const { styles } = useTheme()
//   const containerRef = useRef<HTMLDivElement>(null)
//   const isInView = useInView(containerRef, { once: false, amount: 0.2 })
  
//   const titleRef = useRef<HTMLHeadingElement>(null)
//   const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 })
  
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"]
//   })
  
//   const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  
//   // For service tab switching
//   const [activeService, setActiveService] = useState(0)
  
//   // Hover state for service cards
//   const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  
//   // Service data
//   const services = [
//     {
//       id: 0,
//       title: "Full-Stack Web Development",
//       icon: <FaGlobe className="text-[#00c9ff]" />,
//       description: "End-to-end web solutions from concept to deployment with modern frameworks and responsive design principles.",
//       details: [
//         "Interactive Single Page Applications (SPAs)",
//         "Server-side Rendered (SSR) websites",
//         "Progressive Web Apps (PWAs)",
//         "E-commerce solutions",
//         "Content Management Systems",
//         "Real-time web applications"
//       ],
//       technologies: [
//         { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
//         { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
//         { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
//         { name: "Express", icon: <SiExpress className="text-white" /> },
//         { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
//         { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> }
//       ]
//     },
//     {
//       id: 1,
//       title: "Mobile App Development",
//       icon: <FaMobileAlt className="text-[#92fe9d]" />,
//       description: "Native and cross-platform mobile applications that deliver a seamless user experience on both iOS and Android.",
//       details: [
//         "Cross-platform mobile apps",
//         "Native iOS and Android applications",
//         "Mobile app UI/UX design",
//         "App Store submission and optimization",
//         "Mobile app maintenance and updates",
//         "Performance optimization"
//       ],
//       technologies: [
//         { name: "React Native", icon: <SiReact className="text-[#61DAFB]" /> },
//         { name: "Flutter", icon: <SiFlutter className="text-[#02569B]" /> },
//         { name: "Swift", icon: <SiSwift className="text-[#F05138]" /> },
//         { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
//         { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
//         { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> }
//       ]
//     },
//     {
//       id: 2,
//       title: "Custom API Integration",
//       icon: <FaPlug className="text-[#00c9ff]" />,
//       description: "Seamless integration of third-party services and development of custom APIs to connect your applications with external systems.",
//       details: [
//         "RESTful API development",
//         "GraphQL API implementation",
//         "Third-party API integration",
//         "Payment gateway integration",
//         "Authentication & authorization systems",
//         "API performance optimization"
//       ],
//       technologies: [
//         { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
//         { name: "Express", icon: <SiExpress className="text-white" /> },
//         { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
//         { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
//         { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
//         { name: "Next.js", icon: <SiNextdotjs className="text-white" /> }
//       ]
//     }
//   ]
  
//   // Smaller service cards for the grid
//   const serviceCards = [
//     {
//       title: "Front-End Development",
//       icon: <FaCode />,
//       description: "Creating responsive, interactive user interfaces with modern JavaScript frameworks"
//     },
//     {
//       title: "Back-End Systems",
//       icon: <FaServer />,
//       description: "Building robust server-side applications and database architecture"
//     },
//     {
//       title: "Database Design",
//       icon: <FaDatabase />,
//       description: "Designing efficient, scalable database solutions for optimal data management"
//     },
//     {
//       title: "API Development",
//       icon: <FaPlug />,
//       description: "Creating custom APIs that connect your applications with external services"
//     },
//     {
//       title: "Responsive Design",
//       icon: <FaLayerGroup />,
//       description: "Ensuring your applications look and function perfectly on any device"
//     },
//     {
//       title: "Maintenance & Support",
//       icon: <FaTools />,
//       description: "Ongoing technical support and upgrades to keep your applications running smoothly"
//     }
//   ]
  
//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.3
//       }
//     }
//   }
  
//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 }
//   }
  
//   return (
//     <section
//       ref={containerRef}
//       className="relative py-24 overflow-hidden"
//       id="services"
//       style={{
//         background: '#0d0d0d'
//       }}
//     >
//       {/* Background Elements with interactive animations */}
//       <div className="absolute inset-0 z-0">
//         {/* Abstract shape 1 - Cyan */}
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.35 }}
//           transition={{ duration: 1.5, delay: 0.2 }}
//           className="absolute top-20 -left-20 w-[500px] h-[500px] rounded-full"
//           style={{
//             background: 'radial-gradient(circle, rgba(0, 201, 255, 0.2), rgba(0, 201, 255, 0.05))',
//             filter: 'blur(80px)',
//             y: backgroundY
//           }}
//         />
        
//         {/* Abstract shape 2 - Green */}
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ 
//             opacity: 0.35,
//             rotate: [0, 5, 0, -5, 0]
//           }}
//           transition={{ 
//             opacity: { duration: 1.5, delay: 0.5 },
//             rotate: { repeat: Infinity, duration: 20, ease: "linear" }
//           }}
//           className="absolute -bottom-40 -right-20 w-[600px] h-[600px] rounded-full"
//           style={{
//             background: 'radial-gradient(circle, rgba(146, 254, 157, 0.2), rgba(146, 254, 157, 0.05))',
//             filter: 'blur(100px)',
//             y: backgroundY
//           }}
//         />
        
//         {/* Extra floating elements */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ 
//             opacity: 0.25,
//             x: [0, 10, 0, -10, 0]
//           }}
//           transition={{ 
//             opacity: { duration: 1.5, delay: 0.7 },
//             x: { repeat: Infinity, duration: 15, ease: "easeInOut" }
//           }}
//           className="absolute top-1/3 right-[20%] w-[200px] h-[200px] rounded-full"
//           style={{
//             background: 'radial-gradient(circle, rgba(0, 201, 255, 0.15), rgba(0, 201, 255, 0.03))',
//             filter: 'blur(60px)',
//             y: backgroundY
//           }}
//         />
        
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ 
//             opacity: 0.25,
//             scale: [1, 1.1, 1, 0.9, 1]
//           }}
//           transition={{ 
//             opacity: { duration: 1.5, delay: 0.9 },
//             scale: { repeat: Infinity, duration: 12, ease: "easeInOut" }
//           }}
//           className="absolute bottom-1/4 left-[15%] w-[300px] h-[300px] rounded-full"
//           style={{
//             background: 'radial-gradient(circle, rgba(146, 254, 157, 0.15), rgba(146, 254, 157, 0.03))',
//             filter: 'blur(70px)',
//             y: backgroundY
//           }}
//         />
//       </div>
      
//       <div className="container mx-auto px-6 relative z-10">
//         {/* Section Header */}
//         <motion.div
//           ref={titleRef}
//           initial={{ opacity: 0, y: 20 }}
//           animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//           className="text-center max-w-3xl mx-auto mb-16"
//         >
//           <h2 
//             className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text font-outfit"
//             style={{ backgroundImage: 'linear-gradient(90deg, #00c9ff, #92fe9d)' }}
//           >
//             Our Services
//           </h2>
//           <motion.p 
//             className="text-lg text-[#fffce1]/90 leading-relaxed"
//             initial={{ opacity: 0, y: 20 }}
//             animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
//           >
//             Comprehensive digital solutions tailored to your specific needs, from web and mobile development to seamless API integrations.
//           </motion.p>
//         </motion.div>
        
//         {/* Service Selection Tabs */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.7, delay: 0.6 }}
//           className="flex flex-wrap justify-center gap-4 mb-12"
//         >
//           {services.map((service) => (
//             <motion.button
//               key={service.id}
//               onClick={() => setActiveService(service.id)}
//               className={`px-6 py-3 rounded-xl text-sm md:text-base font-medium transition-all duration-300 ${
//                 activeService === service.id 
//                   ? "bg-white/10 backdrop-blur-md border border-white/20" 
//                   : "bg-transparent border border-white/5 hover:border-white/15"
//               }`}
//               whileHover={{ y: -2 }}
//               whileTap={{ y: 0 }}
//             >
//               <div className="flex items-center gap-2">
//                 {service.icon}
//                 <span className="text-[#fffce1]">{service.title}</span>
//               </div>
//             </motion.button>
//           ))}
//         </motion.div>
        
//         {/* Main Service Content with Animation */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeService}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.5 }}
//             className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20 items-center"
//           >
//             {/* Service Illustration */}
//             <div className="flex justify-center md:order-2">
//               <motion.div 
//                 className="relative w-[350px] h-[350px]"
//                 animate={{ 
//                   rotate: [0, 2, 0, -2, 0],
//                   scale: [1, 1.02, 1, 0.98, 1]
//                 }}
//                 transition={{ 
//                   duration: 10, 
//                   repeat: Infinity, 
//                   ease: "easeInOut" 
//                 }}
//               >
//                 <div 
//                   className="absolute inset-0 blur-2xl rounded-full"
//                   style={{
//                     background: activeService % 2 === 0 
//                       ? 'radial-gradient(circle, rgba(0, 201, 255, 0.2), rgba(146, 254, 157, 0.1))' 
//                       : 'radial-gradient(circle, rgba(146, 254, 157, 0.2), rgba(0, 201, 255, 0.1))'
//                   }}
//                 ></div>
                
//                 {/* Different illustration based on service */}
//                 {activeService === 0 && (
//                   <div className="relative w-full h-full flex items-center justify-center">
//                     <motion.div 
//                       className="w-[120px] h-[200px] rounded-xl overflow-hidden border-4 border-[#00c9ff]/30"
//                       animate={{ 
//                         boxShadow: ['0 0 20px rgba(0, 201, 255, 0.2)', '0 0 40px rgba(0, 201, 255, 0.4)', '0 0 20px rgba(0, 201, 255, 0.2)']
//                       }}
//                       transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//                     >
//                       <div className="h-[15%] bg-[#00c9ff]/20 flex items-center justify-center">
//                         <div className="w-[40%] h-[4px] rounded-full bg-[#00c9ff]"></div>
//                       </div>
//                       <div className="h-[85%] bg-[#0d0d0d] p-2">
//                         <motion.div 
//                           className="w-full h-[10px] mb-2 bg-[#00c9ff]/20 rounded-sm"
//                           animate={{ width: ['100%', '60%', '100%'] }}
//                           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//                         ></motion.div>
//                         <motion.div 
//                           className="w-[80%] h-[10px] mb-2 bg-[#00c9ff]/20 rounded-sm"
//                           animate={{ width: ['80%', '40%', '80%'] }}
//                           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
//                         ></motion.div>
//                         <motion.div 
//                           className="w-[60%] h-[10px] bg-[#00c9ff]/20 rounded-sm"
//                           animate={{ width: ['60%', '90%', '60%'] }}
//                           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//                         ></motion.div>
                        
//                         <motion.div 
//                           className="mt-4 w-full h-[80px] bg-[#00c9ff]/10 rounded-sm"
//                           animate={{ opacity: [0.5, 1, 0.5] }}
//                           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//                         ></motion.div>
//                       </div>
//                     </motion.div>
                    
//                     <motion.div
//                       className="absolute -left-10 top-[50%] w-[200px] h-[150px] rounded-lg overflow-hidden border-4 border-[#92fe9d]/30"
//                       animate={{ 
//                         y: ['-60%', '-55%', '-60%'],
//                         boxShadow: ['0 0 20px rgba(146, 254, 157, 0.2)', '0 0 40px rgba(146, 254, 157, 0.4)', '0 0 20px rgba(146, 254, 157, 0.2)']
//                       }}
//                       transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//                     >
//                       <div className="h-[15%] bg-[#92fe9d]/20 flex items-center justify-center">
//                         <div className="w-[40%] h-[4px] rounded-full bg-[#92fe9d]"></div>
//                       </div>
//                       <div className="h-[85%] bg-[#0d0d0d] p-2">
//                         <motion.div 
//                           className="w-full h-[6px] mb-2 bg-[#92fe9d]/20 rounded-sm"
//                           animate={{ width: ['100%', '70%', '100%'] }}
//                           transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//                         ></motion.div>
//                         <motion.div 
//                           className="w-[80%] h-[6px] mb-2 bg-[#92fe9d]/20 rounded-sm"
//                           animate={{ width: ['80%', '90%', '80%'] }}
//                           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
//                         ></motion.div>
//                         <motion.div 
//                           className="w-[60%] h-[6px] bg-[#92fe9d]/20 rounded-sm"
//                           animate={{ width: ['60%', '40%', '60%'] }}
//                           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//                         ></motion.div>
//                       </div>
//                     </motion.div>
                    
//                     <motion.div
//                       className="absolute -right-10 top-[50%] w-[180px] h-[130px] rounded-lg overflow-hidden border-4 border-[#00c9ff]/30"
//                       animate={{ 
//                         y: ['-40%', '-45%', '-40%'],
//                         boxShadow: ['0 0 20px rgba(0, 201, 255, 0.2)', '0 0 40px rgba(0, 201, 255, 0.4)', '0 0 20px rgba(0, 201, 255, 0.2)']
//                       }}
//                       transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
//                     >
//                       <div className="h-[15%] bg-[#00c9ff]/20 flex items-center justify-center">
//                         <div className="w-[40%] h-[4px] rounded-full bg-[#00c9ff]"></div>
//                       </div>
//                       <div className="h-[85%] bg-[#0d0d0d] p-2">
//                         <motion.div 
//                           className="w-full h-[6px] mb-2 bg-[#00c9ff]/20 rounded-sm"
//                           animate={{ width: ['100%', '40%', '100%'] }}
//                           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//                         ></motion.div>
//                         <motion.div 
//                           className="w-[70%] h-[6px] mb-2 bg-[#00c9ff]/20 rounded-sm"
//                           animate={{ width: ['70%', '90%', '70%'] }}
//                           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
//                         ></motion.div>
//                       </div>
//                     </motion.div>
//                   </div>
//                 )}
                
//                 {activeService === 1 && (
//                   <div className="relative w-full h-full flex items-center justify-center">
//                     <motion.div 
//                       className="w-[100px] h-[200px] rounded-[25px] overflow-hidden border-4 border-[#92fe9d]/30"
//                       animate={{ 
//                         y: [0, -5, 0],
//                         boxShadow: ['0 0 20px rgba(146, 254, 157, 0.2)', '0 0 40px rgba(146, 254, 157, 0.4)', '0 0 20px rgba(146, 254, 157, 0.2)']
//                       }}
//                       transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//                     >
//                       <div className="h-[5%] bg-[#92fe9d]/20 flex items-center justify-center">
//                         <div className="w-[30%] h-[4px] rounded-full bg-[#92fe9d]"></div>
//                       </div>
//                       <div className="h-[95%] bg-[#0d0d0d] p-2 flex flex-col items-center justify-center">
//                         <motion.div 
//                           className="w-[40px] h-[40px] mb-4 rounded-full bg-[#92fe9d]/20 flex items-center justify-center"
//                           animate={{ scale: [1, 1.1, 1] }}
//                           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//                         >
//                           <FaMobileAlt className="text-[#92fe9d]" />
//                         </motion.div>
                        
//                         <motion.div 
//                           className="w-full h-[6px] mb-2 bg-[#92fe9d]/20 rounded-sm"
//                           animate={{ width: ['100%', '70%', '100%'] }}
//                           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//                         ></motion.div>
//                         <motion.div 
//                           className="w-[80%] h-[6px] mb-2 bg-[#92fe9d]/20 rounded-sm"
//                           animate={{ width: ['80%', '90%', '80%'] }}
//                           transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
//                         ></motion.div>
//                         <motion.div 
//                           className="w-[60%] h-[6px] bg-[#92fe9d]/20 rounded-sm"
//                           animate={{ width: ['60%', '40%', '60%'] }}
//                           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
//                         ></motion.div>
//                       </div>
//                     </motion.div>
                    
//                     <motion.div 
//                       className="absolute left-[35%] top-[25%] w-[80px] h-[170px] rounded-[20px] overflow-hidden border-4 border-[#00c9ff]/30"
//                       animate={{ 
//                         x: [-10, 0, -10],
//                         y: [-20, -25, -20],
//                         rotate: [-5, 0, -5],
//                         boxShadow: ['0 0 20px rgba(0, 201, 255, 0.2)', '0 0 40px rgba(0, 201, 255, 0.4)', '0 0 20px rgba(0, 201, 255, 0.2)']
//                       }}
//                       transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
//                     >
//                       <div className="h-[5%] bg-[#00c9ff]/20 flex items-center justify-center">
//                         <div className="w-[30%] h-[3px] rounded-full bg-[#00c9ff]"></div>
//                       </div>
//                       <div className="h-[95%] bg-[#0d0d0d] flex flex-col items-center justify-center p-2">
//                         <motion.div 
//                           className="w-full h-[4px] mb-2 bg-[#00c9ff]/20 rounded-sm"
//                           animate={{ width: ['100%', '60%', '100%'] }}
//                           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//                         ></motion.div>
//                         <motion.div 
//                           className="w-[80%] h-[4px] mb-2 bg-[#00c9ff]/20 rounded-sm"
//                           animate={{ width: ['80%', '40%', '80%'] }}
//                           transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
//                         ></motion.div>
//                         <motion.div 
//                           className="w-[60%] h-[4px] mb-8 bg-[#00c9ff]/20 rounded-sm"
//                           animate={{ width: ['60%', '90%', '60%'] }}
//                           transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
//                         ></motion.div>
                        
//                         <motion.div 
//                           className="w-[40px] h-[40px] rounded-full bg-[#00c9ff]/20 flex items-center justify-center"
//                           animate={{ scale: [1, 1.1, 1] }}
//                           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
//                         >
//                           <FaMobileAlt className="text-[#00c9ff] text-sm" />
//                         </motion.div>
//                       </div>
//                     </motion.div>
                    
//                     <motion.div 
//                       className="absolute right-[35%] top-[28%] w-[90px] h-[180px] rounded-[22px] overflow-hidden border-4 border-[#92fe9d]/30"
//                       animate={{ 
//                         x: [10, 0, 10],
//                         y: [-30, -35, -30],
//                         rotate: [5, 0, 5],
//                         boxShadow: ['0 0 20px rgba(146, 254, 157, 0.2)', '0 0 40px rgba(146, 254, 157, 0.4)', '0 0 20px rgba(146, 254, 157, 0.2)']
//                       }}
//                       transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
//                     >
//                       <div className="h-[5%] bg-[#92fe9d]/20 flex items-center justify-center">
//                         <div className="w-[30%] h-[3px] rounded-full bg-[#92fe9d]"></div>
//                       </div>
//                       <div className="h-[95%] bg-[#0d0d0d] p-2 flex flex-col items-center justify-center">
//                         <motion.div 
//                           className="w-[35px] h-[35px] mb-4 rounded-full bg-[#92fe9d]/20 flex items-center justify-center"
//                           animate={{ scale: [1, 1.1, 1] }}
//                           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
//                         >
//                           <FaMobileAlt className="text-[#92fe9d] text-sm" />
//                         </motion.div>
                        
//                         <motion.div 
//                           className="w-full h-[5px] mb-2 bg-[#92fe9d]/20 rounded-sm"
//                           animate={{ width: ['100%', '50%', '100%'] }}
//                           transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
//                         ></motion.div>
//                         <motion.div 
//                           className="w-[70%] h-[5px] mb-2 bg-[#92fe9d]/20 rounded-sm"
//                           animate={{ width: ['70%', '90%', '70%'] }}
//                           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
//                         ></motion.div>
//                       </div>
//                     </motion.div>
//                   </div>
//                 )}
                
//                 {activeService === 2 && (
//                   <div className="relative w-full h-full flex items-center justify-center">
//                     <motion.div 
//                       className="w-[250px] h-[200px] rounded-lg overflow-hidden border-4 border-[#00c9ff]/30"
//                       animate={{ 
//                         boxShadow: ['0 0 20px rgba(0, 201, 255, 0.2)', '0 0 40px rgba(0, 201, 255, 0.4)', '0 0 20px rgba(0, 201, 255, 0.2)']
//                       }}
//                       transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//                     >
//                       <div className="h-[15%] bg-[#00c9ff]/20 flex items-center justify-center">
//                         <div className="w-[40%] h-[4px] rounded-full bg-[#00c9ff]"></div>
//                       </div>
//                       <div className="h-[85%] bg-[#0d0d0d] p-4 flex flex-col">
//                         <div className="mb-4 flex items-center">
//                           <div className="w-[30px] h-[30px] rounded-md bg-[#00c9ff]/20 flex items-center justify-center mr-3">
//                             <FaServer className="text-[#00c9ff] text-xs" />
//                           </div>
//                           <motion.div 
//                             className="h-[6px] bg-[#00c9ff]/20 rounded-sm flex-1"
//                             animate={{ opacity: [0.5, 1, 0.5] }}
//                             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//                           ></motion.div>
//                         </div>
                        
//                         <div className="flex-1 grid grid-cols-3 gap-3">
//                           {[...Array(6)].map((_, i) => (
//                             <motion.div 
//                               key={i}
//                               className="rounded-md bg-[#00c9ff]/10 flex items-center justify-center"
//                               animate={{ 
//                                 opacity: [0.5, 0.8, 0.5],
//                                 scale: [1, 1.05, 1]
//                               }}
//                               transition={{ 
//                                 duration: 3, 
//                                 repeat: Infinity, 
//                                 ease: "easeInOut",
//                                 delay: i * 0.2
//                               }}
//                             >
//                               <FaPlug className="text-[#00c9ff] opacity-50" />
//                             </motion.div>
//                           ))}
//                         </div>
                        
//                         <motion.div 
//                           className="h-[30px] mt-4 bg-[#00c9ff]/10 rounded-md flex items-center justify-center"
//                           animate={{ opacity: [0.5, 1, 0.5] }}
//                           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//                         >
//                           <motion.div 
//                             className="h-[4px] w-[80%] bg-[#00c9ff]/30 rounded-sm"
//                             animate={{ width: ['80%', '40%', '60%', '80%'] }}
//                             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//                           ></motion.div>
//                         </motion.div>
//                       </div>
//                     </motion.div>
                    
//                     <motion.div 
//                       className="absolute -right-[10%] top-[60%] w-[150px] h-[100px] rounded-lg overflow-hidden border-4 border-[#92fe9d]/30"
//                       animate={{ 
//                         y: ['-50%', '-45%', '-50%'],
//                         rotate: [5, 0, 5],
//                         boxShadow: ['0 0 20px rgba(146, 254, 157, 0.2)', '0 0 40px rgba(146, 254, 157, 0.4)', '0 0 20px rgba(146, 254, 157, 0.2)']
//                       }}
//                       transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
//                     >
//                       <div className="h-[20%] bg-[#92fe9d]/20 flex items-center justify-center">
//                         <div className="w-[40%] h-[3px] rounded-full bg-[#92fe9d]"></div>
//                       </div>
//                       <div className="h-[80%] bg-[#0d0d0d] p-2 flex flex-col">
//                         <div className="flex items-center mb-2">
//                           <div className="w-[20px] h-[20px] rounded-md bg-[#92fe9d]/20 flex items-center justify-center mr-2">
//                             <FaDatabase className="text-[#92fe9d] text-xs" />
//                           </div>
//                           <motion.div 
//                             className="h-[4px] bg-[#92fe9d]/20 rounded-sm flex-1"
//                             animate={{ width: ['100%', '70%', '100%'] }}
//                             transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//                           ></motion.div>
//                         </div>
                        
//                         <motion.div 
//                           className="flex-1 grid grid-cols-2 gap-2"
//                         >
//                           {[...Array(4)].map((_, i) => (
//                             <motion.div 
//                               key={i}
//                               className="rounded-sm bg-[#92fe9d]/10"
//                               animate={{ 
//                                 opacity: [0.4, 0.7, 0.4],
//                               }}
//                               transition={{ 
//                                 duration: 2, 
//                                 repeat: Infinity, 
//                                 ease: "easeInOut",
//                                 delay: i * 0.3
//                               }}
//                             ></motion.div>
//                           ))}
//                         </motion.div>
//                       </div>
//                     </motion.div>
                    
//                     <motion.div 
//                       className="absolute -left-[5%] top-[40%] w-[120px] h-[90px] rounded-lg overflow-hidden border-4 border-[#00c9ff]/30"
//                       animate={{ 
//                         y: ['-20%', '-15%', '-20%'],
//                         rotate: [-5, 0, -5],
//                         boxShadow: ['0 0 20px rgba(0, 201, 255, 0.2)', '0 0 40px rgba(0, 201, 255, 0.4)', '0 0 20px rgba(0, 201, 255, 0.2)']
//                       }}
//                       transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
//                     >
//                       <div className="h-[20%] bg-[#00c9ff]/20 flex items-center justify-center">
//                         <div className="w-[40%] h-[3px] rounded-full bg-[#00c9ff]"></div>
//                       </div>
//                       <div className="h-[80%] bg-[#0d0d0d] p-2">
//                         <motion.div 
//                           className="h-[5px] mb-2 bg-[#00c9ff]/20 rounded-sm"
//                           animate={{ width: ['100%', '60%', '100%'] }}
//                           transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
//                         ></motion.div>
//                         <motion.div 
//                           className="h-[5px] mb-2 bg-[#00c9ff]/20 rounded-sm"
//                           animate={{ width: ['80%', '100%', '80%'] }}
//                           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
//                         ></motion.div>
//                         <motion.div 
//                           className="h-[5px] mb-2 bg-[#00c9ff]/20 rounded-sm"
//                           animate={{ width: ['60%', '40%', '60%'] }}
//                           transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
//                         ></motion.div>
//                         <motion.div 
//                           className="h-[5px] bg-[#00c9ff]/20 rounded-sm"
//                           animate={{ width: ['70%', '90%', '70%'] }}
//                           transition={{ duration: 2.3, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
//                         ></motion.div>
//                       </div>
//                     </motion.div>
//                   </div>
//                 )}
//               </motion.div>
//             </div>
            
//             {/* Service Content */}
//             <div className="md:order-1">
//               <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#fffce1]">
//                 {services[activeService].title}
//               </h3>
//               <p className="text-[#fffce1]/80 mb-8 leading-relaxed text-lg">
//                 {services[activeService].description}
//               </p>
              
//               <div className="mb-8">
//                 <h4 className="text-xl font-semibold mb-4 text-[#fffce1]">Key Features</h4>
//                 <ul className="space-y-3">
//                   {services[activeService].details.map((detail, index) => (
//                     <motion.li 
//                       key={index}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.1, duration: 0.5 }}
//                       className="flex items-center"
//                     >
//                       <motion.span 
//                         className="w-2 h-2 rounded-full mr-3"
//                         style={{ backgroundColor: index % 2 === 0 ? '#00c9ff' : '#92fe9d' }}
//                         animate={{ scale: [1, 1.5, 1] }}
//                         transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
//                       ></motion.span>
//                       <span className="text-[#fffce1]/90">{detail}</span>
//                     </motion.li>
//                   ))}
//                 </ul>
//               </div>
              
//               <div>
//                 <h4 className="text-xl font-semibold mb-4 text-[#fffce1]">Technologies Used</h4>
//                 <div className="flex flex-wrap gap-3">
//                   {services[activeService].technologies.map((tech, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       transition={{ delay: index * 0.1, duration: 0.5 }}
//                       whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0, 201, 255, 0.1)' }}
//                       className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 transition-all duration-300"
//                     >
//                       <span className="text-xl">{tech.icon}</span>
//                       <span className="text-sm font-medium text-[#fffce1]/90">{tech.name}</span>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </AnimatePresence>
        
//         {/* Additional Service Cards */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.1 }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//         >
//           {serviceCards.map((card, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               whileHover={{ 
//                 y: -5, 
//                 boxShadow: '0 10px 20px rgba(0, 201, 255, 0.1)'
//               }}
//               className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 transition-all duration-300"
//               onHoverStart={() => setHoveredCard(index)}
//               onHoverEnd={() => setHoveredCard(null)}
//             >
//               <motion.div 
//                 className="w-14 h-14 flex items-center justify-center mb-4 rounded-xl bg-white/5"
//                 animate={
//                   hoveredCard === index 
//                     ? { 
//                         scale: 1.1, 
//                         rotate: [0, 10, -10, 0],
//                         transition: { 
//                           duration: 0.6, 
//                           ease: "easeInOut",
//                           rotate: {
//                             repeat: Infinity,
//                             repeatType: "mirror",
//                             duration: 2
//                           }
//                         }
//                       }
//                     : { scale: 1 }
//                 }
//               >
//                 <motion.div
//                   style={{ 
//                     color: index % 2 === 0 ? '#00c9ff' : '#92fe9d' 
//                   }}
//                   className="text-2xl"
//                 >
//                   {card.icon}
//                 </motion.div>
//               </motion.div>
//               <h3 className="text-xl font-semibold mb-3 text-[#fffce1]">{card.title}</h3>
//               <p className="text-[#fffce1]/70">{card.description}</p>
//             </motion.div>
//           ))}
//         </motion.div>
        
//         {/* Call to Action */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.3 }}
//           viewport={{ once: true }}
//           className="text-center mt-16"
//         >
//           <motion.h3 
//             className="text-2xl md:text-3xl font-bold mb-6 text-[#fffce1]"
//             animate={{ 
//               textShadow: [
//                 "0 0 5px rgba(0, 201, 255, 0)", 
//                 "0 0 15px rgba(0, 201, 255, 0.3)", 
//                 "0 0 5px rgba(0, 201, 255, 0)"
//               ]
//             }}
//             transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//           >
//             Ready to Start Your Project?
//           </motion.h3>
//           <motion.p 
//             className="text-[#fffce1]/80 max-w-2xl mx-auto mb-8"
//           >
//             Let's discuss how we can help bring your ideas to life with the perfect technical solution.
//           </motion.p>
//           <motion.a
//             href="#contact"
//             whileHover={{ 
//               scale: 1.05, 
//               boxShadow: '0 0 25px rgba(0, 201, 255, 0.4)'
//             }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-block px-8 py-4 text-[#fffce1] font-medium rounded-xl transition-all duration-300 relative"
//             style={{
//               border: '2px solid transparent',
//               backgroundImage: 'linear-gradient(#0d0d0d, #0d0d0d), linear-gradient(90deg, #00c9ff, #92fe9d)',
//               backgroundOrigin: 'border-box',
//               backgroundClip: 'padding-box, border-box',
//               boxShadow: '0 0 20px rgba(0, 201, 255, 0.2)'
//             }}
//           >
//             <motion.span 
//               animate={{ y: [0, -3, 0] }}
//               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//               className="relative z-10"
//             >
//               Contact Me
//             </motion.span>
            
//             {/* Animated pulse effect around button */}
//             <motion.span
//               className="absolute inset-0 rounded-xl"
//               animate={{ 
//                 boxShadow: [
//                   '0 0 0 0 rgba(0, 201, 255, 0.1)',
//                   '0 0 0 10px rgba(0, 201, 255, 0)',
//                 ],
//               }}
//               transition={{ 
//                 duration: 2,
//                 repeat: Infinity,
//                 ease: "easeOut",
//               }}
//             />
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   )
// }