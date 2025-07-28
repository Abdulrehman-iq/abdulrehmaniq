// src/components/Footer.tsx
'use client';

import { motion } from 'framer-motion';
import { ArrowUpIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../context/ThemeContext';

export function Footer() {
  const { styles } = useTheme();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="w-full py-6 mt-20 border-t border-white/10">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p className={`${styles.bodyText} text-sm opacity-60`}>
          © {new Date().getFullYear()} Abdulrehman Iqbal. All rights reserved.
        </p>
        
        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          className={`
            p-2 rounded-full ${styles.pill}
            hover:bg-white/5 transition-colors duration-200
          `}
          aria-label="Scroll to top"
        >
          <ArrowUpIcon className="w-5 h-5" />
        </motion.button>
      </div>
    </footer>
  );
}