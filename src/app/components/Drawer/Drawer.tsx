// 'use client'

// import { useState, useRef, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import Link from 'next/link'
// import { FaGlobe, FaMobileAlt, FaPlug, FaEnvelope, FaTimes, FaBars } from 'react-icons/fa'
// import { useTheme } from '../context/ThemeContext'
// import { usePathname } from 'next/navigation'

// export default function Drawer() {
//   const [isOpen, setIsOpen] = useState(false)
//   const { styles } = useTheme()
//   const drawerRef = useRef<HTMLDivElement>(null)
//   const pathname = usePathname()

//   // Close drawer when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
//         setIsOpen(false)
//       }
//     }

//     if (isOpen) {
//       document.addEventListener('mousedown', handleClickOutside)
//     }
    
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside)
//     }
//   }, [isOpen])

//   // Close drawer when route changes
//   useEffect(() => {
//     setIsOpen(false)
//   }, [pathname])

//   // Navigation items
//   const navigationItems = [
//     {
//       title: 'Services',
//       path: '/services',
//       icon: <FaGlobe />,
//       description: 'Explore our full range of services',
//       subItems: [
//         { name: 'Web Development', icon: <FaGlobe className="text-[#00c9ff]" />, path: '/services#web' },
//         { name: 'Mobile Apps', icon: <FaMobileAlt className="text-[#92fe9d]" />, path: '/services#mobile' },
//         { name: 'API Integration', icon: <FaPlug className="text-[#00c9ff]" />, path: '/services#api' }
//       ]
//     },
//     {
//       title: 'Contact',
//       path: '/contact',
//       icon: <FaEnvelope />,
//       description: 'Get in touch with us',
//       subItems: []
//     }
//   ]

//   return (
//     <>
//       {/* Drawer toggle button */}
//       <motion.button
//         onClick={() => setIsOpen(true)}
//         className="fixed top-4 right-4 z-50 p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10"
//         whileHover={{ 
//           scale: 1.05, 
//           boxShadow: '0 0 15px rgba(0, 201, 255, 0.3)' 
//         }}
//         whileTap={{ scale: 0.95 }}
//         aria-label="Open menu"
//       >
//         <FaBars className="text-[#fffce1] text-xl" />
//       </motion.button>

//       {/* Overlay */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
//           />
//         )}
//       </AnimatePresence>

//       {/* Drawer */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             ref={drawerRef}
//             initial={{ x: '100%' }}
//             animate={{ x: 0 }}
//             exit={{ x: '100%' }}
//             transition={{ type: 'spring', stiffness: 400, damping: 40 }}
//             className="fixed right-0 top-0 h-full w-full sm:w-96 bg-[#0d0d0d] z-50 overflow-hidden"
//           >
//             {/* Drawer background effects */}
//             <div className="absolute inset-0 z-0 overflow-hidden">
//               {/* Top gradient blob */}
//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 0.4 }}
//                 transition={{ duration: 1.5, delay: 0.2 }}
//                 className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full"
//                 style={{
//                   background: 'radial-gradient(circle, rgba(0, 201, 255, 0.2), rgba(0, 201, 255, 0.05))',
//                   filter: 'blur(80px)'
//                 }}
//               />
              
//               {/* Bottom gradient blob */}
//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 0.4 }}
//                 transition={{ duration: 1.5, delay: 0.5 }}
//                 className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full"
//                 style={{
//                   background: 'radial-gradient(circle, rgba(146, 254, 157, 0.2), rgba(146, 254, 157, 0.05))',
//                   filter: 'blur(80px)'
//                 }}
//               />
//             </div>

//             {/* Drawer content */}
//             <div className="relative z-10 h-full flex flex-col">
//               {/* Header */}
//               <div className="p-6 flex justify-between items-center border-b border-white/10">
//                 <h2 className="text-2xl font-bold text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #00c9ff, #92fe9d)' }}>
//                   Navigation
//                 </h2>
//                 <motion.button
//                   onClick={() => setIsOpen(false)}
//                   className="p-2 rounded-full bg-white/5 border border-white/10"
//                   whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
//                   whileTap={{ scale: 0.9 }}
//                   aria-label="Close menu"
//                 >
//                   <FaTimes className="text-[#fffce1]" />
//                 </motion.button>
//               </div>

//               {/* Main navigation */}
//               <div className="flex-1 overflow-y-auto p-6">
//                 <div className="space-y-6">
//                   {navigationItems.map((item, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: index * 0.1 + 0.3 }}
//                       className="space-y-2"
//                     >
//                       <Link href={item.path}>
//                         <motion.div
//                           className="p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300"
//                           whileHover={{ 
//                             y: -5, 
//                             boxShadow: '0 10px 20px rgba(0, 201, 255, 0.1)'
//                           }}
//                         >
//                           <div className="flex items-center">
//                             <div 
//                               className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
//                               style={{ 
//                                 background: index % 2 === 0 
//                                   ? 'linear-gradient(135deg, rgba(0, 201, 255, 0.15), rgba(0, 201, 255, 0.05))' 
//                                   : 'linear-gradient(135deg, rgba(146, 254, 157, 0.15), rgba(146, 254, 157, 0.05))'
//                               }}
//                             >
//                               <motion.div 
//                                 className="text-xl"
//                                 style={{ color: index % 2 === 0 ? '#00c9ff' : '#92fe9d' }}
//                                 animate={{ scale: [1, 1.2, 1] }}
//                                 transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
//                               >
//                                 {item.icon}
//                               </motion.div>
//                             </div>
//                             <div>
//                               <h3 className="text-lg font-medium text-[#fffce1]">{item.title}</h3>
//                               <p className="text-sm text-[#fffce1]/70">{item.description}</p>
//                             </div>
//                           </div>
//                         </motion.div>
//                       </Link>

//                       {/* Sub items if any */}
//                       {item.subItems.length > 0 && (
//                         <div className="ml-6 space-y-2 mt-3">
//                           {item.subItems.map((subItem, subIndex) => (
//                             <motion.div
//                               key={subIndex}
//                               initial={{ opacity: 0, x: -10 }}
//                               animate={{ opacity: 1, x: 0 }}
//                               transition={{ delay: (index * 0.1) + (subIndex * 0.05) + 0.5 }}
//                             >
//                               <Link href={subItem.path}>
//                                 <motion.div
//                                   className="flex items-center p-3 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-all duration-300"
//                                   whileHover={{ x: 5, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
//                                 >
//                                   <span className="mr-3">{subItem.icon}</span>
//                                   <span className="text-[#fffce1]/90">{subItem.name}</span>
//                                 </motion.div>
//                               </Link>
//                             </motion.div>
//                           ))}
//                         </div>
//                       )}
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>

//               {/* Footer with glow effect */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.8 }}
//                 className="p-6 border-t border-white/10"
//               >
//                 <motion.div
//                   whileHover={{ 
//                     scale: 1.02, 
//                     boxShadow: '0 0 25px rgba(0, 201, 255, 0.4)'
//                   }}
//                   className="py-3 px-4 text-center text-[#fffce1] font-medium rounded-xl relative overflow-hidden"
//                   style={{
//                     border: '2px solid transparent',
//                     backgroundImage: 'linear-gradient(#0d0d0d, #0d0d0d), linear-gradient(90deg, #00c9ff, #92fe9d)',
//                     backgroundOrigin: 'border-box',
//                     backgroundClip: 'padding-box, border-box'
//                   }}
//                 >
//                   <motion.span 
//                     animate={{ y: [0, -3, 0] }}
//                     transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//                     className="relative z-10"
//                   >
//                     Back to Home
//                   </motion.span>
                  
//                   {/* Animated glow effect */}
//                   <motion.div
//                     className="absolute inset-0"
//                     animate={{ 
//                       background: [
//                         'radial-gradient(circle at 50% 50%, rgba(0, 201, 255, 0.15), transparent 70%)',
//                         'radial-gradient(circle at 50% 50%, rgba(146, 254, 157, 0.15), transparent 70%)',
//                         'radial-gradient(circle at 50% 50%, rgba(0, 201, 255, 0.15), transparent 70%)'
//                       ]
//                     }}
//                     transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
//                   />
//                 </motion.div>
//               </motion.div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }