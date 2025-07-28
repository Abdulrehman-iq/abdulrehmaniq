import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinux, FaDatabase, FaGithub, FaCode, FaServer, FaAws, FaGit } from 'react-icons/fa';
import { SiApacheairflow, SiApachespark, SiTerraform, SiDocker, SiPython, SiPostgresql, SiMongodb, SiGooglecloud,  SiApachekafka, SiDbt, SiAmazonredshift } from 'react-icons/si';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type';
import Link from 'next/link';

// Register ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const technologies = {
  dataengineering: [
    { icon: <SiApachespark className="text-[#E25A1C]" />, name: 'Apache Spark' },
    { icon: <SiApacheairflow className="text-[#017CEE]" />, name: 'Apache Airflow' },
    { icon: <SiDbt className="text-[#FF694B]" />, name: 'dbt' },
    { icon: <SiApachekafka className="text-[#231F20]" />, name: 'Apache Kafka' },
    { icon: <SiPython className="text-[#3776AB]" />, name: 'Python' },
  ],
  clouddevops: [
    { icon: <FaAws className="text-[#FF9900]" />, name: 'AWS' },
    { icon: <SiGooglecloud className="text-[#4285F4]" />, name: 'Google Cloud' },
    { icon: <SiTerraform className="text-[#7B42BC]" />, name: 'Terraform' },
    { icon: <SiDocker className="text-[#2496ED]" />, name: 'Docker' },
    { icon: <FaLinux className="text-[#FCC624]" />, name: 'Linux' },
  ],
  databases: [
    { icon: <SiPostgresql className="text-[#4169E1]" />, name: 'PostgreSQL' },
    { icon: <SiMongodb className="text-[#47A248]" />, name: 'MongoDB' },
    { icon: <SiAmazonredshift className="text-[#8C4FFF]" />, name: 'Redshift' },
    { icon: <FaDatabase className="text-cyan-400" />, name: 'SQL' },
  ],
  tools: [
    { icon: <FaGithub className="text-[#fffce1]" />, name: 'GitHub' },
    { icon: <FaCode className="text-cyan-400" />, name: 'VS Code' },
    { icon: <FaGit className="text-[#F05032]" />, name: 'Git' },
    { icon: <FaServer className="text-[#fffce1]" />, name: 'Server Management' },
  ],
};

// Updated gradient colors to match Hero.tsx
const gradientColors = {
  start: "#00c9ff", // cyan
  mid: "#92fe9d",   // green
  end: "#60a5fa"    // blue
};

const Introduction = () => {
  const [displayedLines, setDisplayedLines] = useState<Array<{text: string, isVisible: boolean}>>([]);
  const codeBlockRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLHeadingElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const codeBlockContainerRef = useRef<HTMLDivElement>(null);
  
  // Text reveal animation on load
  useEffect(() => {
    if (!headingRef.current) return;
    
    // Split text into chars for animation
    try {
      // Create a text splitter for the heading
      const splitHeading = new SplitType(headingRef.current, { 
        types: 'chars,words', 
        tagName: 'span' 
      });
      
      // Animate the characters
      gsap.from(splitHeading.chars, {
        opacity: 0,
        y: 20,
        rotateX: -90,
        stagger: 0.02,
        duration: 0.8,
        ease: 'power4.out',
        delay: 0.5
      });
    } catch (error) {
      console.error("Error with text splitting animation:", error);
    }
  }, []);
  
  // Scroll-based animations
  useEffect(() => {
    if (!sectionRef.current) return;
    
    // Create parallax effect for subheading
    if (subheadingRef.current) {
      gsap.to(subheadingRef.current, {
        scrollTrigger: {
          trigger: subheadingRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5
        },
        y: -30,
        opacity: 0.8
      });
    }
    
    // Create parallax effect for text content
    if (textContentRef.current) {
      gsap.to(textContentRef.current, {
        scrollTrigger: {
          trigger: textContentRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5
        },
        y: -20,
        opacity: 0.9
      });
    }
    
    // Animate skills section
    if (skillsRef.current) {
      const skillCategories = skillsRef.current.querySelectorAll('.skill-category');
      
      skillCategories.forEach((category, index) => {
        gsap.fromTo(
          category,
          { 
            opacity: 0, 
            y: 30 
          },
          {
            scrollTrigger: {
              trigger: category,
              start: "top bottom-=100",
              toggleActions: "play none none reverse"
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.2
          }
        );
      });
    }
    
    // Animate code block with parallax
    if (codeBlockContainerRef.current) {
      gsap.to(codeBlockContainerRef.current, {
        scrollTrigger: {
          trigger: codeBlockContainerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5
        },
        y: -40,
        opacity: 0.9
      });
    }
    
    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  // Code typing animation - improved for cross-browser compatibility
  useEffect(() => {
    // Code lines that will be displayed in the DataEngineer.py window
    const codeLines = [
      "class DataEngineer:",
      "    def __init__(self):",
      "        self.name = 'Abdulrehman Iqbal'",
      "        self.company = 'ARIQ Systems'",
      "        self.passion = 'transforming_data'",
      "        self.tools = ['Airflow', 'Spark', 'BigQuery']",
      "",
      "    def build_pipeline(self):",
      "        pipeline = Pipeline(",
      "            extract=self.extract_data(),",
      "            transform=self.clean_and_process(),",
      "            load=self.load_to_warehouse()",
      "        )",
      "        return pipeline.run()",
      "",
      "    def automate_workflow(self):",
      "        with DAG('data_pipeline') as dag:",
      "            extract_task >> transform_task >> load_task",
      "",
      "    def generate_insights(self):",
      "        return self.analytics.create_dashboard()",
      "",
      "# Ready to transform your data! 🚀"
    ];
    
    // Initialize with empty lines that will be filled one by one
    setDisplayedLines(codeLines.map(line => ({ text: line, isVisible: false })));
    
    // Reveal one line at a time
    const timeoutIds: NodeJS.Timeout[] = [];
    
    codeLines.forEach((_, index) => {
      const timeoutId = setTimeout(() => {
        setDisplayedLines(prev => 
          prev.map((line, i) => 
            i === index ? { ...line, isVisible: true } : line
          )
        );
      }, 100 * index);
      
      timeoutIds.push(timeoutId);
    });
    
    // Clean up timeouts on unmount
    return () => {
      timeoutIds.forEach(id => clearTimeout(id));
    };
  }, []);

  // Function to apply syntax highlighting
  const highlightSyntax = (line: string) => {
    if (line === '') return <>&nbsp;</>;
    
    // Replace patterns with styled spans
    let highlightedLine = line;
    
    // Apply React-safe styling approach
    highlightedLine = highlightedLine
      .replace(/(class|def|return|with|import)/g, `<span style="color: ${gradientColors.start}">$1</span>`)
      .replace(/(self|Pipeline|DAG)/g, `<span style="color: ${gradientColors.mid}">$1</span>`)
      .replace(/('.*?')/g, `<span style="color: ${gradientColors.end}">$1</span>`)
      .replace(/(\{|\}|\(|\)|;|<|>|\[|\]|:|=)/g, '<span class="text-gray-400">$1</span>')
      .replace(/(#.*)/g, '<span class="text-gray-500 italic">$1</span>');
    
    return <div dangerouslySetInnerHTML={{ __html: highlightedLine }} />;
  };

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen px-4 md:px-0 py-20 font-outfit relative overflow-hidden"
      style={{ backgroundColor: '#0d0d0d' }} // Exact theme background color
    >
      {/* Background elements with updated theme colors */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Abstract shape 1 - Cyan */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute top-20 -left-20 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 201, 255, 0.2), rgba(0, 201, 255, 0.05))',
            filter: 'blur(80px)'
          }}
        ></motion.div>
        
        {/* Abstract shape 2 - Green */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute -bottom-40 -right-20 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(146, 254, 157, 0.2), rgba(146, 254, 157, 0.05))',
            filter: 'blur(100px)'
          }}
        ></motion.div>
        
        {/* Extra floating elements - Blue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ duration: 1.5, delay: 0.7 }}
          className="absolute top-1/3 left-[15%] w-[200px] h-[200px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(96, 165, 250, 0.15), rgba(96, 165, 250, 0.03))',
            filter: 'blur(60px)'
          }}
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-12">
          {/* Left column - Text content */}
          <motion.div 
            className="lg:w-1/2 mb-12 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Updated name heading to be more visible with theme colors */}
            <h1 
              ref={headingRef}
              className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight font-outfit tracking-tight"
              style={{ color: '#fffce1' }}
            >
              <span className="text-[#fffcel]  bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(90deg, #00c9ff, #92fe9d)' }}
              >
                Hi, I&apos;m Abdulrehman Iqbal
              </span>
            </h1>
            
            {/* Updated job title to be italic with specified color (#fffce1) */}
            <h2 
              ref={subheadingRef}
              className="text-xl md:text-2xl font-semibold mb-6 italic"
              style={{ color: '#fffce1' }}
            >
              Cloud & Data Engineering Specialist
            </h2>
            
            <div 
              ref={textContentRef}
              className="mb-8 text-lg text-justify"
              style={{ color: '#fffce1' }}
            >
              <p className="mb-4">
                I&apos;m a Data Engineer specializing in building scalable data pipelines and automating workflows that transform raw data into actionable insights. With hands-on experience in cloud services like AWS and GCP, I design end-to-end solutions that handle real-time and batch processing at enterprise scale.
              </p>
              <p>
                My expertise spans Apache Spark for large-scale data processing, Apache Airflow for workflow orchestration, and infrastructure-as-code with Terraform and Docker. I&apos;ve delivered projects ranging from logistics data pipelines to real-time analytics systems, always focusing on reliability, performance, and cost optimization in cloud environments.
              </p>
            </div>
            
            <div ref={skillsRef} className="mb-12">
              <div className="space-y-6">
                {Object.entries(technologies).map(([category, techs], categoryIndex) => (
                  <div key={category} className="mb-6 skill-category">
                    <h3 className="text-sm uppercase tracking-wider font-medium mb-3 text-[#fffce1]/60">
                      {category === 'dataengineering' ? 'DATA ENGINEERING' : 
                      category === 'clouddevops' ? 'CLOUD & DEVOPS' : 
                      category === 'databases' ? 'DATABASES' : 'TOOLS & PLATFORMS'}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {techs.map((tech, index) => (
                        <motion.div
                          key={tech.name}
                          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#3a3a3a] hover:bg-[#1F1F1F] transition-all duration-300"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: categoryIndex * 0.1 + index * 0.05, duration: 0.5 }}
                        >
                          <span className="text-xl">{tech.icon}</span>
                          <span className="text-sm font-medium text-[#fffce1]/90">{tech.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div ref={buttonsRef} className="flex space-x-4">
              <motion.button 
                className="px-6 py-3 font-medium rounded-xl border-2 border-[#fffce1] text-[#fffce1] hover:bg-[#fffce1]/10 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Data Projects
              </motion.button>
              <Link href="mailto:abdulrehman.iq@outlook.com">
                <motion.button 
                  className="px-6 py-3 font-medium rounded-xl border-2 border-[#fffce1]/70 text-[#fffce1]/90 hover:border-[#fffce1] hover:text-[#fffce1] transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.button>
              </Link>
            </div>
          </motion.div>
          
          {/* Right column - Visual content - Hidden on mobile, shown on laptop and larger */}
          <motion.div 
            ref={codeBlockContainerRef}
            className="hidden lg:block lg:w-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative">
              {/* Code Block */}
              <div className="rounded-xl shadow-2xl overflow-hidden bg-gray-900">
                <div className="flex items-center space-x-2 px-4 py-2 bg-gray-800">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-gray-400 text-sm ml-2">DataEngineer.py</span>
                </div>
                <div className="p-5 font-mono text-sm text-gray-300 overflow-hidden h-[400px]" ref={codeBlockRef}>
                  {displayedLines.map((line, index) => (
                    <div 
                      key={index} 
                      className={`mb-1 transition-opacity duration-300 ${line.isVisible ? 'opacity-100' : 'opacity-0'}`}
                    >
                      {line.text === '' ? <>&nbsp;</> : highlightSyntax(line.text)}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Floating gradient elements - updated with theme colors */}
              <motion.div 
                className="absolute -top-4 -right-4 w-24 h-24 rounded-lg opacity-50 blur-lg"
                style={{ background: `linear-gradient(to right, ${gradientColors.start}, ${gradientColors.mid})` }}
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, 0],
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              />
              <motion.div 
                className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full opacity-50 blur-xl"
                style={{ background: `linear-gradient(to right, ${gradientColors.mid}, ${gradientColors.end})` }}
                animate={{ 
                  scale: [1, 1.3, 1],
                  x: [0, 10, 0],
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              />
              
              {/* Floating elements */}
              {/* Icons */}
              {[
                { Icon: SiApacheairflow, color: "#000000", size: 1 }, 
                { Icon: SiApachespark, color: "#000000", size: 0.9 }, 
                { Icon: FaAws, color: "#000000", size: 1.1 },
                { Icon: SiPython, color: "#000000", size: 1.05 }
              ].map((item, index) => (
                <motion.div
                  key={`icon-${index}`}
                  className="absolute text-xl text-white"
                  style={{
                    top: `${15 + index * 20}%`,
                    right: `${-8 - (index % 2) * 5}%`,
                  }}
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4 + index,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: index * 0.8,
                  }}
                >
                  <div 
                    className="p-3 rounded-lg shadow-lg"
                    style={{
                      background: index % 2 === 0 
                        ? `linear-gradient(to right, ${gradientColors.start}, ${gradientColors.mid})` 
                        : `linear-gradient(to right, ${gradientColors.mid}, ${gradientColors.end})`,
                      transform: `scale(${item.size})`
                    }}
                  >
                    <item.Icon style={{ color: item.color }} />
                  </div>
                </motion.div>
              ))}
              
              {/* Floating company name */}
              <motion.div
                className="absolute text-white font-medium px-4 py-2 rounded-lg shadow-lg"
                style={{
                  background: `linear-gradient(to right, ${gradientColors.mid}, ${gradientColors.end})`,
                  bottom: '8%',
                  right: '-10%',
                }}
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5,
                }}
              >
                <span className="text-black font-bold">ARIQ Systems</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;