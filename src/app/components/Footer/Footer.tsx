'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaArrowUp, FaHeart } from 'react-icons/fa';

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
      name: 'Email',
      icon: FaEnvelope,
      url: 'mailto:abdulrehman.iq@outlook.com',
      color: '#0078d4'
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      url: 'https://wa.me/923338681426',
      color: '#25d366'
    }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#0d0d0d] to-black border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-2"
            >
              <h3 className="text-2xl font-bold text-[#fffce1]">
                Abdulrehman Iqbal
                <span className="text-cyan-400">.</span>
              </h3>
              <p className="text-gray-400 text-sm">
                Data Engineer passionate about building scalable data solutions and transforming raw data into actionable insights.
              </p>
            </motion.div>
            
            {/* Professional Status */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2 text-sm"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-gray-300">Available for opportunities</span>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg font-semibold text-[#fffce1]"
            >
              Quick Links
            </motion.h4>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2"
            >
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {link}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg font-semibold text-[#fffce1]"
            >
              Let&apos;s Connect
            </motion.h4>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, socialIndex) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:border-white/30 transition-all duration-300 group"
                  whileHover={{ 
                    scale: 1.1, 
                    boxShadow: `0 5px 20px ${social.color}30` 
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + socialIndex * 0.1 }}
                >
                  <social.icon 
                    className="text-lg transition-colors duration-300 group-hover:drop-shadow-lg" 
                    style={{ color: social.color }}
                  />
                </motion.a>
              ))}
            </motion.div>
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-1 text-sm text-gray-400"
            >
              <p>📧 abdulrehman.iq@outlook.com</p>
              <p>📱 +92 333 8681426</p>
              <p>📍 Pakistan</p>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"
        />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-400 text-sm flex items-center gap-2"
          >
            © {new Date().getFullYear()} Abdul Rehman. Made with 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-red-400"
            >
              <FaHeart />
            </motion.span>
            using Next.js & TypeScript
          </motion.p>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:border-cyan-400/50 transition-all duration-300 group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 5px 20px rgba(0, 201, 255, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <span className="text-sm text-gray-300 group-hover:text-cyan-400 transition-colors">
              Back to Top
            </span>
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FaArrowUp className="text-cyan-400 text-sm" />
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-cyan-400/20 via-green-400/20 to-blue-400/20" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, particleIndex) => (
          <motion.div
            key={particleIndex}
            className="absolute w-2 h-2 bg-cyan-400/20 rounded-full"
            style={{
              left: `${20 + particleIndex * 30}%`,
              top: `${30 + particleIndex * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + particleIndex,
              repeat: Infinity,
              delay: particleIndex * 0.5,
            }}
          />
        ))}
      </div>
    </footer>
  );
}