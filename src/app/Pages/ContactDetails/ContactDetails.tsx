// 'use client'

// import { useRef } from 'react'
// import { motion, useInView } from 'framer-motion'
// import { FaWhatsapp, FaLinkedinIn, FaInstagram, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPhone, FaTelegram, FaDiscord } from 'react-icons/fa'
// import { useTheme } from '../../components/context/ThemeContext'

// export default function ContactDetails() {
//   // Remove the unused styles variable
//   const containerRef = useRef<HTMLDivElement>(null)
//   const isInView = useInView(containerRef, { once: true, amount: 0.3 })
  
//   // Contact information
//   const contactInfo = {
//     email: "abdulrehman.iq@outlook.com",
//     whatsapp: "+44 7418 613963", // Replace with your actual WhatsApp number
//     phone: "+44 7418 613963", // Replace with your actual phone number
//     location: "London, United Kingdom",
//     // Social links
//     socials: [
//       { 
//         name: "LinkedIn",
//         icon: <FaLinkedinIn />,
//         url: "https://linkedin.com/in/abdulrehmaniq",
//         color: "#00c9ff"
//       },
//       { 
//         name: "Instagram",
//         icon: <FaInstagram />,
//         url: "https://instagram.com/abdulrehman.iq",
//         color: "#92fe9d"
//       },
//       { 
//         name: "GitHub",
//         icon: <FaGithub />,
//         url: "https://github.com/abdulrehmaniq",
//         color: "#00c9ff"
//       },
//       { 
//         name: "Telegram",
//         icon: <FaTelegram />,
//         url: "https://t.me/abdulrehmaniq",
//         color: "#92fe9d"
//       },
//       { 
//         name: "Discord",
//         icon: <FaDiscord />,
//         url: "https://discord.com/users/abdulrehmaniq",
//         color: "#00c9ff"
//       }
//     ],
//     // Primary contact methods
//     primaryMethods: [
//       {
//         name: "Email",
//         value: "abdulrehman.iq@outlook.com",
//         icon: <FaEnvelope />,
//         action: "mailto:abdulrehman.iq@outlook.com",
//         description: "For project inquiries and formal communication"
//       },
//       {
//         name: "WhatsApp",
//         value: "+44 7418 613963", // Replace with your actual WhatsApp number
//         icon: <FaWhatsapp />,
//         action: "https://wa.me/447418613963", // Replace with your actual WhatsApp number
//         description: "Quick responses for urgent matters"
//       },
//       {
//         name: "Phone",
//         value: "+44 7418 613963", // Replace with your actual phone number
//         icon: <FaPhone />,
//         action: "tel:+447418613963", // Replace with your actual phone number
//         description: "Available during UK business hours"
//       },
//       {
//         name: "Location",
//         value: "London, United Kingdom",
//         icon: <FaMapMarkerAlt />,
//         action: "https://maps.google.com/?q=London,UK",
//         description: "Available for in-person meetings in London"
//       }
//     ]
//   }
  
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
//     <motion.div 
//       ref={containerRef}
//       initial="hidden"
//       animate={isInView ? "visible" : "hidden"}
//       variants={containerVariants}
//       className="rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10"
//       style={{
//         boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
//       }}
//     >
//       {/* Header with gradient background */}
//       <div 
//         className="p-6 relative overflow-hidden"
//         style={{
//           background: 'linear-gradient(135deg, rgba(0, 201, 255, 0.15), rgba(146, 254, 157, 0.15))'
//         }}
//       >
//         <motion.div 
//           className="absolute inset-0 z-0 opacity-30"
//           animate={{ 
//             background: [
//               'radial-gradient(circle at 30% 70%, rgba(0, 201, 255, 0.4), transparent 50%)',
//               'radial-gradient(circle at 70% 30%, rgba(146, 254, 157, 0.4), transparent 50%)',
//               'radial-gradient(circle at 30% 70%, rgba(0, 201, 255, 0.4), transparent 50%)'
//             ]
//           }}
//           transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//         />
        
//         <div className="relative z-10">
//           <motion.h3 
//             variants={itemVariants}
//             className="text-2xl font-bold text-[#fffce1] mb-2"
//           >
//             Let&apos;s Connect
//           </motion.h3>
//           <motion.p 
//             variants={itemVariants}
//             className="text-[#fffce1]/80"
//           >
//             Feel free to reach out through any of these channels
//           </motion.p>
//         </div>
//       </div>
      
//       {/* Primary contact methods */}
//       <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
//         {contactInfo.primaryMethods.map((method, index) => (
//           <motion.a
//             key={index}
//             href={method.action}
//             target={method.name === "Email" || method.name === "WhatsApp" ? "_blank" : undefined}
//             rel="noopener noreferrer"
//             variants={itemVariants}
//             whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0, 201, 255, 0.1)' }}
//             whileTap={{ scale: 0.98 }}
//             className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 flex items-start"
//           >
//             <div 
//               className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0"
//               style={{ 
//                 background: index % 2 === 0 
//                   ? 'linear-gradient(135deg, rgba(0, 201, 255, 0.15), rgba(0, 201, 255, 0.05))' 
//                   : 'linear-gradient(135deg, rgba(146, 254, 157, 0.15), rgba(146, 254, 157, 0.05))',
//               }}
//             >
//               <motion.div 
//                 className="text-xl"
//                 style={{ color: index % 2 === 0 ? '#00c9ff' : '#92fe9d' }}
//                 animate={{ scale: [1, 1.2, 1] }}
//                 transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
//               >
//                 {method.icon}
//               </motion.div>
//             </div>
//             <div>
//               <h4 className="text-[#fffce1] font-medium mb-1">{method.name}</h4>
//               <p className="text-[#fffce1]/90 mb-1 text-sm">{method.value}</p>
//               <p className="text-[#fffce1]/60 text-xs">{method.description}</p>
//             </div>
//           </motion.a>
//         ))}
//       </div>
      
//       {/* Social media links */}
//       <div className="p-6 pt-0">
//         <motion.p 
//           variants={itemVariants}
//           className="text-[#fffce1]/80 mb-4 text-sm"
//         >
//           Connect with me on social media
//         </motion.p>
//         <div className="flex flex-wrap gap-3">
//           {contactInfo.socials.map((social, index) => (
//             <motion.a
//               key={index}
//               href={social.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               variants={itemVariants}
//               whileHover={{ 
//                 y: -3, 
//                 boxShadow: '0 10px 20px rgba(0, 201, 255, 0.1)',
//                 backgroundColor: 'rgba(255, 255, 255, 0.1)'
//               }}
//               whileTap={{ scale: 0.95 }}
//               className="w-12 h-12 rounded-full flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300"
//               style={{ color: social.color }}
//               aria-label={social.name}
//             >
//               <motion.div
//                 animate={{ scale: [1, 1.1, 1] }}
//                 transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
//               >
//                 {social.icon}
//               </motion.div>
//             </motion.a>
//           ))}
//         </div>
//       </div>
      
//       {/* Response time note */}
//       <motion.div 
//         variants={itemVariants}
//         className="p-6 pt-3"
//       >
//         <div className="rounded-xl overflow-hidden bg-white/5 p-4">
//           <div className="flex items-start">
//             <div 
//               className="w-10 h-10 rounded-full flex items-center justify-center mr-3 flex-shrink-0"
//               style={{ 
//                 backgroundImage: 'linear-gradient(90deg, #00c9ff, #92fe9d)'
//               }}
//             >
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M12 8V12L15 15" stroke="#0d0d0d" strokeWidth="2" strokeLinecap="round"/>
//                 <circle cx="12" cy="12" r="9" stroke="#0d0d0d" strokeWidth="2"/>
//               </svg>
//             </div>
//             <div>
//               <h4 className="text-[#fffce1] font-medium mb-1">Quick Response</h4>
//               <p className="text-[#fffce1]/70 text-sm">
//                 I typically respond within 24 hours. For urgent matters, WhatsApp is the fastest way to reach me.
//               </p>
//             </div>
//           </div>
          
//           <div className="mt-4 pt-4 border-t border-white/10">
//             <div className="flex justify-between items-center">
//               <span className="text-xs text-[#fffce1]/60">Response time</span>
//               <span className="text-xs text-[#fffce1]/60">24 hours</span>
//             </div>
//             <div className="w-full h-2 bg-white/10 rounded-full mt-2 overflow-hidden">
//               <motion.div 
//                 className="h-full rounded-full"
//                 style={{ backgroundImage: 'linear-gradient(90deg, #00c9ff, #92fe9d)' }}
//                 initial={{ width: 0 }}
//                 animate={{ width: '85%' }}
//                 transition={{ duration: 1.5, delay: 0.5 }}
//               />
//             </div>
//           </div>
//         </div>
//       </motion.div>
      
//       {/* Availability schedule */}
//       <motion.div 
//         variants={itemVariants}
//         className="p-6 pt-0"
//       >
//         <div className="rounded-xl overflow-hidden bg-white/5 p-4">
//           <h4 className="text-[#fffce1] font-medium mb-3">Availability</h4>
//           <div className="grid grid-cols-7 gap-1">
//             {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-xs text-[#fffce1]/60 mb-1">{day}</div>
//                 <motion.div 
//                   className="h-8 rounded-md"
//                   style={{ 
//                     backgroundColor: index < 5 ? 'rgba(0, 201, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)',
//                     border: index < 5 ? '1px solid rgba(0, 201, 255, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)'
//                   }}
//                   whileHover={{ scale: 1.05 }}
//                 />
//               </div>
//             ))}
//           </div>
//           <p className="text-xs text-[#fffce1]/60 mt-3 text-center">
//             Available weekdays, 9 AM - 6 PM (GMT)
//           </p>
//         </div>
//       </motion.div>
      
//       {/* Quick contact CTA */}
//       <motion.div 
//         variants={itemVariants}
//         className="p-6 pt-0"
//       >
//         <motion.a
//           href="mailto:abdulrehman.iq@outlook.com"
//           whileHover={{ 
//             scale: 1.02, 
//             boxShadow: '0 0 25px rgba(0, 201, 255, 0.4)'
//           }}
//           whileTap={{ scale: 0.98 }}
//           className="block w-full py-4 text-center text-[#fffce1] font-medium rounded-xl transition-all duration-300 relative"
//           style={{
//             border: '2px solid transparent',
//             backgroundImage: 'linear-gradient(#0d0d0d, #0d0d0d), linear-gradient(90deg, #00c9ff, #92fe9d)',
//             backgroundOrigin: 'border-box',
//             backgroundClip: 'padding-box, border-box',
//             boxShadow: '0 0 20px rgba(0, 201, 255, 0.2)'
//           }}
//         >
//           <motion.span 
//             animate={{ y: [0, -3, 0] }}
//             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//             className="relative z-10"
//           >
//             Send an Email
//           </motion.span>
          
//           {/* Animated pulse effect around button */}
//           <motion.span
//             className="absolute inset-0 rounded-xl"
//             animate={{ 
//               boxShadow: [
//                 '0 0 0 0 rgba(0, 201, 255, 0.1)',
//                 '0 0 0 10px rgba(0, 201, 255, 0)',
//               ],
//             }}
//             transition={{ 
//               duration: 2,
//               repeat: Infinity,
//               ease: "easeOut",
//             }}
//           />
//         </motion.a>
//       </motion.div>
//     </motion.div>
//   )
// }