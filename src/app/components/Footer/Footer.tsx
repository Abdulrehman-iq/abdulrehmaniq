'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaWhatsapp, FaArrowUp, FaCode, FaDatabase } from 'react-icons/fa';
import { SiPython, SiApachespark, SiDocker } from 'react-icons/si';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/Abdulrehman-iq',
      color: '#ffffff'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/abdulrehman-iqbal-24a129219/',
      color: '#0077b5'
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      url: 'https://wa.me/923338681426',
      color: '#25d366'
    }
  ];

  const techIcons = [
    { icon: SiPython, color: '#3776ab' },
    { icon: SiApachespark, color: '#e25a1c' },
    { icon: FaDatabase, color: '#336791' },
    { icon: SiDocker, color: '#2496ed' },
    { icon: FaCode, color: '#60a5fa' }
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Enhanced Background with Multiple Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] via-[#0a0a0a] to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Top Decorative Border */}
      <div className="relative h-px">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-400/80 via-blue-400/80 to-cyan-400/80"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          style={{ width: '30%' }}
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          
          {/* Brand Section - Enhanced */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border border-cyan-400/30 flex items-center justify-center">
                  <FaCode className="text-xl text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#fffce1] font-outfit">
                    Abdulrehman Iqbal
                    <span className="text-cyan-400 animate-pulse">.</span>
                  </h3>
                  <p className="text-cyan-400/80 text-sm font-medium">Data Engineer</p>
                </div>
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                Passionate about building scalable data solutions and transforming raw data into actionable insights. 
                Specialized in modern data engineering technologies.
              </p>
            </motion.div>
            
            {/* Professional Status with Enhanced Design */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-green-400/5 to-cyan-400/5 border border-green-400/20"
            >
              <div className="relative">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-20" />
              </div>
              <span className="text-gray-300 text-sm font-medium">Available for opportunities</span>
            </motion.div>

            {/* Tech Stack Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex gap-3 pt-2"
            >
              {techIcons.map((tech, index) => (
                <motion.div
                  key={index}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-white/30 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <tech.icon className="text-sm" style={{ color: tech.color }} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Connect Section - Enhanced */}
          <div className="space-y-6">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-lg font-semibold text-[#fffce1] flex items-center gap-2"
            >
              <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full" />
              Let&apos;s Connect
            </motion.h4>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              {socialLinks.map((social, socialIndex) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 group"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: `0 8px 32px ${social.color}20` 
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + socialIndex * 0.1 }}
                >
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center border transition-all duration-300"
                    style={{ 
                      backgroundColor: `${social.color}10`,
                      borderColor: `${social.color}30`
                    }}
                  >
                    <social.icon 
                      className="text-lg transition-all duration-300 group-hover:scale-110" 
                      style={{ color: social.color }}
                    />
                  </div>
                  <div>
                    <span className="text-[#fffce1] font-medium text-sm group-hover:text-cyan-400 transition-colors">
                      {social.name}
                    </span>
                    <p className="text-gray-500 text-xs">Connect with me</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Enhanced Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative mb-8"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <motion.div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-px bg-gradient-to-r from-cyan-400 to-blue-400"
            animate={{ width: [0, 80, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
        </motion.div>

        {/* Enhanced Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-gray-400 text-sm"
          >
            <span>© {new Date().getFullYear()} Abdulrehman Iqbal. All rights reserved.</span>
          </motion.div>

          {/* Enhanced Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="group relative overflow-hidden px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-400/30 rounded-xl hover:border-cyan-400/50 transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 8px 32px rgba(0, 201, 255, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-300 group-hover:text-cyan-400 transition-colors font-medium">
                Back to Top
              </span>
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-6 rounded-lg bg-cyan-400/20 flex items-center justify-center"
              >
                <FaArrowUp className="text-cyan-400 text-sm" />
              </motion.div>
            </div>
            
            {/* Hover effect overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
              style={{ willChange: 'transform' }}
            />
          </motion.button>
        </div>
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="h-px bg-gradient-to-r from-cyan-400/40 via-green-400/40 to-blue-400/40" />
        <motion.div
          className="h-px bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 opacity-60"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          style={{ width: '40%' }}
        />
      </div>
      
      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, particleIndex) => (
          <motion.div
            key={particleIndex}
            className="absolute rounded-full"
            style={{
              width: `${2 + (particleIndex % 3)}px`,
              height: `${2 + (particleIndex % 3)}px`,
              backgroundColor: particleIndex % 2 === 0 ? '#00c9ff40' : '#92fe9d40',
              left: `${10 + particleIndex * 12}%`,
              top: `${20 + (particleIndex % 4) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + particleIndex * 0.5,
              repeat: Infinity,
              delay: particleIndex * 0.3,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>
    </footer>
  );
}