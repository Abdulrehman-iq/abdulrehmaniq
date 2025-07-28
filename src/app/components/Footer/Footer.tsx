'use client';

import { motion } from 'framer-motion';
import { ArrowUpIcon, HeartIcon } from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedin, FaEnvelope, FaDatabase, FaCode, FaServer, FaWhatsapp } from 'react-icons/fa';
import { SiPython, SiApachespark, SiApacheairflow } from 'react-icons/si';
import { useTheme } from '../context/ThemeContext';

export function Footer() {
  const { styles } = useTheme();
  
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
      name: 'Outlook',
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

  const techStack = [
    { icon: SiPython, color: '#3776ab' },
    { icon: SiApachespark, color: '#e25a1c' },
    { icon: SiApacheairflow, color: '#017cee' },
    { icon: FaDatabase, color: '#336791' },
    { icon: FaServer, color: '#68217a' },
    { icon: FaCode, color: '#f1502f' }
  ];

  return (
    <footer className="relative w-full mt-20 bg-gradient-to-t from-black/50 to-transparent">
      {/* Animated background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -top-32 -right-16 w-56 h-56 bg-green-400/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative border-t border-white/10">
        {/* Main footer content */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Brand section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#fffce1] mb-2">
                  Abdul Rehman Iqbal
                  <span className="text-cyan-400">.</span>
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
                    Data Engineer
                  </span>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <FaDatabase className="text-cyan-400 text-sm" />
                  </motion.div>
                </div>
                <p className="text-[#fffce1]/70 text-sm leading-relaxed">
                  Transforming raw data into actionable insights through scalable pipelines, 
                  real-time processing, and cloud-native solutions.
                </p>
              </div>
              
              

              {/* Contact info */}
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-sm text-[#fffce1]/70">
                  <FaEnvelope className="text-cyan-400" />
                  <a 
                    href="mailto:abdulrehman.iq@outlook.com" 
                    className="hover:text-cyan-400 transition-colors"
                  >
                    abdulrehman.iq@outlook.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#fffce1]/70">
                  <FaWhatsapp className="text-green-400" />
                  <a 
                    href="https://wa.me/923338681426" 
                    className="hover:text-green-400 transition-colors"
                  >
                    +92 333 8681426
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Connect section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <h4 className="text-lg font-semibold text-[#fffce1] mb-6">Let's Connect</h4>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 group"
                  >
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${social.color}20` }}
                    >
                      <social.icon 
                        className="text-lg transition-colors" 
                        style={{ color: social.color }}
                      />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[#fffce1] group-hover:text-[#fffce1] transition-colors">
                        {social.name}
                      </div>
                      <div className="text-xs text-[#fffce1]/60">
                        {social.name === 'GitHub' ? 'View my projects' :
                         social.name === 'LinkedIn' ? 'Professional network' :
                         social.name === 'Outlook' ? 'Send me an email' :
                         'Let\'s chat'}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
              
              {/* Status indicator */}
              <motion.div 
                className="flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <motion.div
                  className="w-2 h-2 bg-green-400 rounded-full"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-xs text-[#fffce1]/60">Available for opportunities</span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/5">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-[#fffce1]/60">
                <span>© {new Date().getFullYear()} Abdul Rehman Iqbal.</span>
                <span>Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <HeartIcon className="w-4 h-4 text-red-400" />
                </motion.div>
                <span>using Next.js & TypeScript</span>
              </div>

              {/* Back to top button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative p-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-green-400/10 border border-white/10 hover:border-white/20 transition-all duration-300"
                aria-label="Scroll to top"
              >
                <ArrowUpIcon className="w-5 h-5 text-[#fffce1]/70 group-hover:text-[#fffce1] transition-colors" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}