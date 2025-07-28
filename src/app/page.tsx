// src/app/page.tsx
'use client'

import Hero from './components/Hero/Hero'
import Introduction from './components/Introduction/Introduction'
import { useTheme } from './components/context/ThemeContext'
import Experience from './components/Projects/Experience'
import WhyChooseAriqSystems from './components/WhyChooseAriqSystems/WhyChooseAriqSystems'
import Footer from './components/Footer/Footer'

export default function Home() {
  const { styles } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${styles.mainBg}`}>
      <Hero />
      <Introduction />
      <Experience />
      <WhyChooseAriqSystems />
      <Footer />
    </div>
  )
}
