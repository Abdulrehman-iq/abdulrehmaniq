// app/context/ThemeContext.tsx
'use client';

import React, { createContext, useContext, useEffect } from 'react';

// Define theme styles for easy access throughout the app
export interface ThemeStyles {
  // Backgrounds
  mainBg: string;
  cardBg: string;
  glassBg: string;
  accentBg: string;
  
  // Text colors
  headingText: string;
  bodyText: string;
  accentText: string;
  mutedText: string;
  
  // Borders and shadows
  border: string;
  shadow: string;
  
  // Gradients
  gradient: string;
  buttonGradient: string;
  
  // Component specific styles
  pill: string;
  card: string;
  button: {
    primary: string;
    secondary: string;
  }
}

interface ThemeContextType {
  styles: ThemeStyles;
  isDarkMode: boolean;
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Define theme styles with fixed dark theme using #0d0d0d background and #fffce1 text
  const styles: ThemeStyles = {
    // Backgrounds
    mainBg: 'bg-[#0d0d0d]',
    
    cardBg: 'bg-[#121212] backdrop-blur-sm border border-[#2a2a2a]',
    
    glassBg: 'bg-[#121212]/90 backdrop-blur-sm border border-[#2a2a2a] shadow-lg shadow-black/30 hover:border-[#3a3a3a] transition-all duration-300',
    
    accentBg: 'bg-[#1a1a1a] text-[#fffce1] border border-[#2a2a2a]',
    
    // Text colors - using #fffce1 (warm off-white) as the primary text color
    headingText: 'text-[#fffce1] font-medium',
    
    bodyText: 'text-[#fffce1]/90',
    
    accentText: 'text-emerald-400',
    
    mutedText: 'text-[#fffce1]/60',
    
    // Borders and shadows
    border: 'border-[#2a2a2a]',
    
    shadow: 'shadow-lg shadow-black/30',
    
    // Gradients
    gradient: 'text-emerald-400 hover:text-emerald-300 transition-colors duration-300',
    
    buttonGradient: 'bg-gradient-to-r from-emerald-700 to-teal-800 shadow-emerald-900/30',
    
    // Component specific styles
    pill: 'bg-[#1a1a1a] backdrop-blur-sm border border-[#2a2a2a] hover:border-[#3a3a3a] hover:bg-[#1F1F1F] transition-all duration-300',
    
    card: 'bg-[#1a1a1a] backdrop-blur-sm border border-[#2a2a2a] shadow-lg shadow-black/30 hover:border-[#3a3a3a] hover:shadow-xl transition-all duration-300',
    
    button: {
      primary: 'bg-gradient-to-r from-emerald-700 to-teal-800 text-[#fffce1] shadow-lg shadow-black/30 hover:shadow-xl hover:from-emerald-600 hover:to-teal-700 hover:shadow-black/40 transition-all duration-300',
      
      secondary: 'border-2 border-emerald-700 text-emerald-400 hover:bg-emerald-900/20 transition-colors duration-300'
    }
  };

  // Apply dark theme to document when component mounts
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        // Always apply dark theme to document
        document.documentElement.classList.add('dark');
        
        // Set background color using inline style for better coverage
        document.body.style.backgroundColor = '#0d0d0d';
        document.body.style.color = '#fffce1';
        
        // Add CSS variable for consistent use in other components
        document.documentElement.style.setProperty('--background-color', '#0d0d0d');
        document.documentElement.style.setProperty('--text-color', '#fffce1');
        document.documentElement.style.setProperty('--accent-color', '#10b981'); // emerald-500
        document.documentElement.style.setProperty('--card-bg-color', '#1a1a1a');
        document.documentElement.style.setProperty('--border-color', '#2a2a2a');
      } catch (error) {
        console.error('Error setting theme:', error);
      }
    }
  }, []);
  
  // Dummy toggle function for API compatibility
  const toggleTheme = () => {};

  return (
    <ThemeContext.Provider value={{ 
      styles, 
      isDarkMode: true,
      theme: 'dark',
      toggleTheme 
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
}