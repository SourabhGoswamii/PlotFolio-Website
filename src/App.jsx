import React, { useEffect, useState } from "react";
import ProgrammingCards from "./programinglanguages";

const projectData = [
  {
    title: "JavaScript Chat Application",
    description: "A real-time Ecommerce platform built with Mern and Node.js",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2028&auto=format&fit=crop",
    link: "#",
    tags: ["JavaScript", "MERN" ,"React", "Node.js"]
  },
  {
    title: "Healthcare Management System And AI Chatbot",
    description: "An AI-powered healthcare management system with a chatbot",
    image: "https://cdn.ceps.eu/wp-content/uploads/2024/07/vecteezy_ai-generated-ai-circuit-board-technology-background_37348385-scaled.jpg",
    link: "#",
    tags: ["JavaScript", "OOP", ""]
  },
  {
    title: " AI API Implementation",
    description: "JavaScript Node js backend with comprehensive API documentation",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    link: "#",
    tags: ["MERN", "API", "JavaScript"]
  }
];

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Calculate which section is in view
      const sections = ["hero", "skills", "projects", "about", "contact"];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Trigger the loading animation
    setTimeout(() => setIsLoaded(true), 300);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen overflow-hidden">
      {/* Particle Background */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div id="particles-js" className="absolute inset-0"></div>
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/10 via-transparent to-transparent"></div>
      </div>
      
      {/* Animated Lines Background */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <svg width="100%" height="100%" className="opacity-20">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"></path>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)"></rect>
        </svg>
      </div>
      
      {/* Cursor Glow Effect */}
      <div className="cursor-glow"></div>
      
      <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} flex flex-col items-center`}>
        {/* Floating Navigation */}
        <nav className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-md bg-black/30 rounded-full px-1.5 py-1.5 border border-gray-700/50 shadow-2xl transition-all duration-500 ${scrollY > 100 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <ul className="flex items-center space-x-1">
            {["hero", "skills", "projects", "about", "contact"].map((section, index) => (
              <li key={index}>
                <a 
                  href={`#${section}`} 
                  className={`flex items-center justify-center h-10 px-4 rounded-full transition-all duration-300 ${activeSection === section ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Header with Glass Morphism */}
        <header className="w-full max-w-7xl flex justify-between items-center py-5 px-8 backdrop-blur-md bg-black/30 rounded-b-2xl shadow-lg border-x border-b border-gray-700/50 fixed top-0 z-50 transition-all duration-500">
          <div className="flex items-center">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-70 animate-pulse"></div>
              <div className="h-10 w-10 bg-gray-900 rounded-full flex items-center justify-center relative border border-gray-700">
                <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-purple-500 bg-clip-text text-transparent">S</span>
              </div>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-purple-500 bg-clip-text text-transparent ml-3">Sourabh</h1>
          </div>
          <nav>
            <ul className="hidden md:flex items-center space-x-8 text-gray-300">
              <li><a href="#hero" className={`transition-colors duration-300 ${activeSection === 'hero' ? 'text-purple-400' : 'hover:text-purple-400'}`}>Home</a></li>
              <li><a href="#skills" className={`transition-colors duration-300 ${activeSection === 'skills' ? 'text-purple-400' : 'hover:text-purple-400'}`}>Skills</a></li>
              <li><a href="#projects" className={`transition-colors duration-300 ${activeSection === 'projects' ? 'text-purple-400' : 'hover:text-purple-400'}`}>Projects</a></li>
              <li><a href="#about" className={`transition-colors duration-300 ${activeSection === 'about' ? 'text-purple-400' : 'hover:text-purple-400'}`}>About</a></li>
              <li><a href="#contact" className={`transition-colors duration-300 ${activeSection === 'contact' ? 'text-purple-400' : 'hover:text-purple-400'}`}>Contact</a></li>
            </ul>
            <button className="md:hidden text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>
        </header>

        {/* Main Content */}
        <div className="w-full flex flex-col items-center pt-24">
          {/* Hero Section with Animation */}
          <section id="hero" className="min-h-screen w-full max-w-7xl flex flex-col justify-center px-6 py-12">
            <div className="flex flex-col md:flex-row items-center w-full">
              <div className="md:w-1/2" data-aos="fade-right">
                <div className="flex items-center mb-3">
                  <div className="h-0.5 w-12 bg-purple-500 mr-3"></div>
                  <span className="text-purple-400 font-mono">Hello, I'm</span>
                </div>
                
                <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4">
                  <span className="text-white">Sourabh </span>
                  <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Goswami</span>
                </h2>
                
                <div className="typewriter-container h-10 mb-8">
                  <span className="text-xl md:text-2xl text-gray-300">I create </span>
                  <span className="typewriter text-xl md:text-2xl font-medium text-purple-300">
                    elegant solutions
                  </span>
                </div>
                
                <p className="mt-2 text-xl text-gray-300 leading-relaxed max-w-xl">
                  Turning innovative ideas into elegant solutions through creative coding and design. 
                  <span className="text-purple-400"> Let's build something amazing together.</span>
                </p>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="#contact" className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white rounded-full">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-600 to-pink-500 shadow-md"></span>
                    <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition-all duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                    <span className="relative flex items-center">
                      Get In Touch
                      <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </span>
                  </a>
                  
                  <a href="#projects" className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white rounded-full hover:bg-purple-500/10">
                    <span className="absolute inset-0 w-full h-full border border-purple-500 rounded-full"></span>
                    <span className="relative flex items-center">
                      View Projects
                    </span>
                  </a>
                </div>
                
                {/* Social Icons */}
                <div className="mt-10 flex gap-5">
                  <a href="https://github.com/SourabhGoswamii" className="group p-2 bg-black/20 rounded-full border border-gray-800 text-gray-400 hover:text-purple-400 hover:border-purple-500/50 transition-all duration-300">
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="https://x.com/SourabhGoswammi?t=BvPRAvwQZ5YrH5pf_yQc0g&s=08" className="group p-2 bg-black/20 rounded-full border border-gray-800 text-gray-400 hover:text-purple-400 hover:border-purple-500/50 transition-all duration-300">
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/iam.sourabhm?igsh=dDRiNnd1bmtlZ25v" className="group p-2 bg-black/20 rounded-full border border-gray-800 text-gray-400 hover:text-purple-400 hover:border-purple-500/50 transition-all duration-300">
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/sourabh-goswami-936225325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="group p-2 bg-black/20 rounded-full border border-gray-800 text-gray-400 hover:text-purple-400 hover:border-purple-500/50 transition-all duration-300">
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
                
                {/* Current Date */}
                <div className="mt-10 inline-block rounded-full py-1 px-3 text-xs font-mono text-gray-500 bg-gray-900/40 border border-gray-800">
                  Last updated: April 2, 2025
                </div>
              </div>
              
              <div className="md:w-1/2 flex justify-center mt-16 md:mt-0 relative" data-aos="fade-left">
                {/* Simplified Hero Image */}
                <div className="relative w-128 h-128">
                  <img 
                    src="../public/image.png" 
                    alt="Sourabh Goswami" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
              <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
              <div className="w-5 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
                <div className="w-1 h-2 bg-purple-400 rounded-full animate-scroll-down"></div>
              </div>
            </div>
          </section>

          {/* Skills Section - Programming Cards */}
          <section id="skills" className="w-full max-w-7xl px-6 py-24" data-aos="fade-up">
            <div className="mb-16">
              <div className="flex items-center mb-3">
                <div className="h-0.5 w-12 bg-purple-500 mr-3"></div>
                <span className="text-purple-400 font-mono">My Skills</span>
              </div>
              <h3 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Technical Expertise</span>
              </h3>
              <p className="text-gray-400 max-w-2xl">
                Expertise in multiple programming languages and frameworks to create efficient and elegant solutions for modern challenges.
              </p>
            </div>
            <ProgrammingCards/>
          </section>

          {/* Projects Section with Advanced Card Hover Effects */}
          <section id="projects" className="w-full max-w-7xl px-6 py-24 relative" data-aos="fade-up">
            <div className="mb-16">
              <div className="flex items-center mb-3">
                <div className="h-0.5 w-12 bg-purple-500 mr-3"></div>
                <span className="text-purple-400 font-mono">My Work</span>
              </div>
              <h3 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Featured Projects</span>
              </h3>
              <p className="text-gray-400 max-w-2xl">
                Explore some of my recent work showcasing problem-solving abilities and technical expertise.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projectData.map((project, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
                  </div>
                  
                  <div className="p-6 relative z-10">
                    <h4 className="text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors duration-300">{project.title}</h4>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs py-1 px-2 rounded-full bg-gray-800 text-gray-300 border border-gray-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <a href={project.link} className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                      <span className="relative">
                        View Project
                        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* About Me Section with Glass Morphism */}
          <section id="about" className="w-full max-w-7xl px-6 py-24" data-aos="fade-up">
            <div className="mb-16">
              <div className="flex items-center mb-3">
                <div className="h-0.5 w-12 bg-purple-500 mr-3"></div>
                <span className="text-purple-400 font-mono">Who I Am</span>
              </div>
              <h3 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">About Me</span>
              </h3>
              <p className="text-gray-400 max-w-2xl">
                Passionate developer with a focus on creating intuitive and performant applications.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-10 backdrop-blur-md bg-black/30 p-8 rounded-2xl border border-gray-700/50 relative overflow-hidden" data-tilt data-tilt-max="5" data-tilt-speed="400" data-tilt-perspective="500">
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-600/10 rounded-full filter blur-3xl"></div>
              
              <div className="md:w-1/3">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 animate-pulse"></div>
                  <div className="relative rounded-lg overflow-hidden border-2 border-gray-800 group">
                    <img 
                      src="../public\banner.jpg" 
                      alt="About Sourabh" 
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h4 className="text-2xl font-bold text-white mb-4">Sourabh Goswami</h4>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  With over 1 years of experience in software development, I specialize in creating elegant, efficient, and user-friendly applications. My passion lies in solving complex problems through clean and maintainable code.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-y-4 text-gray-300 mb-8">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-2"></div>
                    <span className="font-medium">First Name:</span>
                    <span className="ml-2 text-gray-400">Sourabh</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-2"></div>
                    <span className="font-medium">Last Name:</span>
                    <span className="ml-2 text-gray-400">Goswami</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-2"></div>
                    <span className="font-medium">Birthdate:</span>
                    <span className="ml-2 text-gray-400">25 April 2006</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-2"></div>
                    <span className="font-medium">Nationality:</span>
                    <span className="ml-2 text-gray-400">India</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-2"></div>
                    <span className="font-medium">Experience:</span>
                    <span className="ml-2 text-gray-400">1 years</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-2"></div>
                    <span className="font-medium">Address:</span>
                    <span className="ml-2 text-gray-400">Himachal Pardesh</span>
                  </div>
                </div>
                
                {/* Skills Progress Bars */}
                <div className="mb-8">
                  <h5 className="text-lg font-medium text-white mb-4">Technical Skills</h5>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-400">JavaScript</span>
                        <span className="text-sm text-purple-400">95%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full">
                        <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{ width: '95%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-400">React</span>
                        <span className="text-sm text-purple-400">90%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full">
                        <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-400">Java</span>
                        <span className="text-sm text-purple-400">70%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full">
                        <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-6 rounded-lg shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                  >
                    Contact Me
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
          
          {/* Contact Section */}
          <section id="contact" className="w-full max-w-7xl px-6 py-24" data-aos="fade-up">
            <div className="mb-16">
              <div className="flex items-center mb-3">
                <div className="h-0.5 w-12 bg-purple-500 mr-3"></div>
                <span className="text-purple-400 font-mono">Get In Touch</span>
              </div>
              <h3 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Contact Me</span>
              </h3>
              <p className="text-gray-400 max-w-2xl">
                Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 space-y-6">
                <div className="backdrop-blur-md bg-black/30 rounded-2xl border border-gray-700/50 p-6 hover:border-purple-500/50 transition-colors duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium text-white mb-2">Email</h4>
                  <p className="text-gray-400">sourabh.goswami2211@gmail.com</p>
                </div>
                
                <div className="backdrop-blur-md bg-black/30 rounded-2xl border border-gray-700/50 p-6 hover:border-purple-500/50 transition-colors duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium text-white mb-2">Phone</h4>
                  <p className="text-gray-400">+91 87555-26609</p>
                </div>
              </div>
              
              <div className="md:w-2/3 backdrop-blur-md bg-black/30 rounded-2xl border border-gray-700/50 p-8">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2" htmlFor="name">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2" htmlFor="email">Your Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white" 
                      placeholder="john@example.com" 
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-400 mb-2" htmlFor="subject">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white" 
                      placeholder="Project Inquiry" 
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-400 mb-2" htmlFor="message">Message</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white" 
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  <div className="md:col-span-2 flex justify-center md:justify-end">
                    <button 
                      type="submit" 
                      className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white rounded-lg"
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 shadow-md"></span>
                      <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition-all duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                      <span className="relative flex items-center">
                        Send Message
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="w-full mt-12 text-center text-gray-400 border-t border-gray-800 pt-8 pb-6">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex justify-center space-x-6 mb-6">
                <a href="https://github.com/SourabhGoswamii" className="group p-2 bg-black/20 rounded-full border border-gray-800 text-gray-400 hover:text-purple-400 hover:border-purple-500/50 transition-all duration-300">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="https://x.com/SourabhGoswammi?t=BvPRAvwQZ5YrH5pf_yQc0g&s=08" className="group p-2 bg-black/20 rounded-full border border-gray-800 text-gray-400 hover:text-purple-400 hover:border-purple-500/50 transition-all duration-300">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="https://www.instagram.com/iam.sourabhm?igsh=dDRiNnd1bmtlZ25v" className="group p-2 bg-black/20 rounded-full border border-gray-800 text-gray-400 hover:text-purple-400 hover:border-purple-500/50 transition-all duration-300">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/sourabh-goswami-936225325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="group p-2 bg-black/20 rounded-full border border-gray-800 text-gray-400 hover:text-purple-400 hover:border-purple-500/50 transition-all duration-300">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
              <p className="text-sm">&copy; 2025 <span className="text-purple-400">Sourabh Goswami</span>. All rights reserved.</p>
              <p className="text-xs mt-2 text-gray-500">Last updated: April 2, 2025</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;