import React, { useEffect, useState } from 'react';

const ProgrammingCards = () => {
  // Sample data for programming languages with image URLs
  const languages = [
    {
      name: "Java",
      imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      description: "A high-level, class-based, object-oriented programming language.",
      color: "#f89820" // Orange color for Java
    },
    {
      name: "Python",
      imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      description: "An interpreted, high-level, general-purpose programming language.",
      color: "#4B8BBE" // Python blue
    },
    {
      name: "JavaScript",
      imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      description: "A lightweight, interpreted programming language with first-class functions.",
      color: "#F7DF1E" // JavaScript yellow
    },
    {
      name: "Node.js",
      imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      description: "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
      color: "#68A063" // Node.js green
    },
    {
      name: "MongoDB",
      imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      description: "A document-oriented NoSQL database used in many modern web applications.",
      color: "#47A248" // MongoDB green
    },
    {
      name: "Express",
      imageUrl: "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/8d565/express-js.webp",
      description: "A minimal and flexible Node.js web application framework .",
      color: "#F7DF1E" // Express black
    }, {
      name: "C++",
      imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      description: "A programming language with a bias toward systems programming.",
      color: "#00599C" // C++ blue
    },
    {
      name: "React JS",
      imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      description: "A JavaScript library for building user interfaces And interactivity.",
      color: "#61DAFB"
    },

  ];

  const BinaryBackground = ({ color }) => {
    const [binary, setBinary] = useState([]);
    
    useEffect(() => {

      const rows = 18;
      const cols = 12;
      const initialBinary = Array(rows).fill().map(() => 
        Array(cols).fill().map(() => Math.round(Math.random()))
      );
      setBinary(initialBinary);
      
      const interval = setInterval(() => {
        setBinary(prev => {
          const newBinary = [...prev];
          for (let i = 0; i < 3; i++) {
            const row = Math.floor(Math.random() * rows);
            const col = Math.floor(Math.random() * cols);
            newBinary[row][col] = newBinary[row][col] === 1 ? 0 : 1;
          }
          return newBinary;
        });
      }, 250);
      
      return () => clearInterval(interval);
    }, []);
    
    return (
      <div className="absolute inset-x-0 top-0 w-full h-full overflow-hidden text-opacity-20 font-mono text-xs flex items-center justify-center">
        <div className="grid gap-0 w-full">
          {binary.map((row, i) => (
            <div key={i} className="flex gap-0 w-full justify-center">
              {row.map((bit, j) => (
                <span 
                  key={j} 
                  className="text-xs w-2 text-center transition-opacity duration-300"
                  style={{ 
                    color: color || '#4ade80',
                    opacity: bit === 1 ? 0.5 : 0.15
                  }}
                >
                  {bit}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8 ">
      {languages.map((language, index) => (
        <div key={index} className="flex justify-center transform hover:-translate-y-2 transition-all duration-300">

          <div className="w-64 h-94 rounded-3xl border-2 border-gray-500 overflow-hidden shadow-2xl relative bg-black">
            
            {/* Card content container */}
            <div className="relative w-full h-full overflow-hidden pt-7">
              {/* Background gradient based on language color */}
              <div 
                className="absolute inset-0 bg-gradient-to-b"
                style={{ 
                  background: `linear-gradient(to bottom, rgba(0,0,0,0.95), rgba(0,0,0,0.8))`,
                  
                }}
              ></div>
              
              {/* Binary animation background */}
              <BinaryBackground color={language.color} />
              
              {/* Content with improved spacing and animations */}
              <div className="relative flex flex-col items-center justify-between h-full p-5 z-10">
                {/* Logo with glow effect */}
                <div 
                  className="w-24 h-24 mt-6 mb-4 transition-all duration-500 hover:scale-110 p-2 rounded-full"
                  style={{ filter: `drop-shadow(0 0 8px ${language.color}99)` }}
                >
                  <img 
                    src={language.imageUrl}
                    alt={`${language.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Language name with gradient text */}
                <h2 
                  className="text-3xl font-bold text-center mb-4 bg-clip-text"
                  style={{ 
                    color: language.color,
                    textShadow: `0 0 10px ${language.color}40`
                  }}
                >
                  {language.name}
                </h2>
                
                {/* Description with better readability */}
                <p className="text-gray-300 text-center mb-12 leading-relaxed">
                  {language.description}
                </p>
                
                {/* Learn more button - Fixed increased color contrast for better visibility */}
                <button 
                  className="px-5 py-2 w-2/3  rounded-full text-sm font-medium mb-6 transition-all duration-300 hover:scale-105 text-black"
                  style={{ 
                    background: `linear-gradient(45deg, ${language.color}, ${language.color}CC)`,
                    boxShadow: `0 0 15px ${language.color}70`
                  }}
                > hello
                </button>
                
                {/* Phone home indicator - Always included now */}
                <div className="w-16 h-1 bg-gray-600 rounded-full mb-2"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgrammingCards;