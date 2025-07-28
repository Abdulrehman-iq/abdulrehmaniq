// src/app/page.tsx
'use client'

import Hero from './components/Hero/Hero'
import Introduction from './components/Introduction/Introduction'
import { useTheme } from './components/context/ThemeContext'
import Experience from './components/Projects/Experience'
import WhyChooseAriqSystems from './components/WhyChooseAriqSystems/WhyChooseAriqSystems'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

export default function Home() {
  const { styles } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${styles.mainBg}`}>
      <Navbar />
      <div id="home"><Hero /></div>
      <div id="about"><Introduction /></div>
      <div id="experience"><Experience /></div>
      <div id="services"><WhyChooseAriqSystems /></div>
      <Footer />
    </div>
  )
}
