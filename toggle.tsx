import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CloudMoon, Sun } from 'lucide-react';

export default function DarkToggle() {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode ? JSON.parse(savedMode) : false;
    });

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    return (
        <div className="relative flex w-full h-full items-center transition-colors duration-500">
            <motion.button
                onClick={toggleDarkMode}
                className={`p-1 relative flex items-center w-full h-full max-w-[80px] aspect-[2/1] border rounded-full cursor-pointer transition-colors duration-300 shadow-sm outline-none focus-visible:outline-none focus-visible:ring-1
                            ${isDarkMode ? 'bg-indigo-950 border-transparent' : 'bg-sky-400 border-white'}
                            hover:scale-105 transition-transform duration-200 flex overflow-hidden`}
                animate={{ backgroundColor: isDarkMode ? '#1e1b4b' : '#38bdf8' }}
                style={isDarkMode ? { boxShadow: '0 0 15px rgba(255, 255, 255, 0.1), inset 0 0 15px rgba(255, 255, 255, 0.1)' } : {}}
            >
                {/* Moving circle / Moon */}
                <motion.div
                    className={`relative flex items-center justify-center ${isDarkMode ? 'w-[45%] h-[100%] bg-white' : 'w-[45%] h-[100%] bg-white'} rounded-full shadow-md z-20`}
                    animate={{ x: isDarkMode ? '120%' : '0%' }}
                    transition={{ type: 'spring', stiffness: 700, damping: 30 }}
                >
                        {isDarkMode ? (
                            <div className="w-full h-full flex items-center justify-center rounded-full relative overflow-hidden pl-[3px] pb-[2px]">
                                {/* Moon crater */}
                                <div
                                    className="absolute w-[60%] h-[60%] rounded-full"
                                    style={{
                                        top: '5%',
                                        right: '5%',
                                        background: 'radial-gradient(circle at 70% 70%, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 50%)'
                                    }}
                                />
                                <div className='bg-gradient-to-b from-indigo-950 to-indigo-900 w-[100%] h-[100%] rounded-full'>
                                  <motion.div
                                      animate={{ rotate: 360 }}
                                      transition={{ duration: 0.5 }}
                                  >
                                    <CloudMoon className="w-full h-full rounded-full fill-white" />
                                  </motion.div>
                                </div>
                            </div>
                        ) : (
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 0.5 }}
                            >
                            <Sun className="w-full h-full text-yellow-500" />
                            </motion.div>
                        )}
                </motion.div>

                {/* Main glow effect for dark mode */}
                {isDarkMode && (
                    <div 
                        className="absolute w-[140%] h-[140%] left-[30%] top-1/2 transform -translate-y-1/2"
                        style={{
                            background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
                            filter: 'blur(5px)'
                        }}
                    />
                )}

                {/* Light mode background */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-blue-300 to-blue-100"
                    initial={false}
                    animate={{ opacity: isDarkMode ? 0 : 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Animated clouds */}
                    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <filter id="cloud-filter">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
                            <feComponentTransfer>
                                <feFuncA type="linear" slope="0.5"/>
                            </feComponentTransfer>
                        </filter>
                        <g filter="url(#cloud-filter)">
                            <motion.path
                                className="cloud cloud-1"
                                d="M10,20 Q15,10 20,20 T30,20 T40,20 T50,20"
                                fill="white"
                                animate={{ x: ["-10%", "10%", "-10%"], y: ["-80%", "-80%", "-80%"] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <motion.path
                                className="cloud cloud-2"
                                d="M0,25 Q10,15 20,25 T40,25 T60,25"
                                fill="white"
                                animate={{ x: ["-15%", "15%", "-15%"], y: ["-70%", "-70%", "-70%"] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <motion.path
                                className="cloud cloud-3"
                                d="M-10,30 Q0,20 10,30 T30,30 T50,30"
                                fill="white"
                                animate={{ x: ["-20%", "20%", "-20%"], y: ["-60%", "-60%", "-60%"]  }}
                                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </g>
                    </svg>
                </motion.div>

                {/* Dark mode background with stars */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-indigo-950 to-indigo-900"
                    initial={false}
                    animate={{ opacity: isDarkMode ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Stars */}
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="star absolute rounded-full bg-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isDarkMode ? [0.2, 1, 0.2] : 0 }}
                            transition={{ duration: Math.random() * 3 + 1, repeat: Infinity, delay: Math.random() * 3 }}
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 60}%`,
                                width: `${Math.random() * 2 + 1}px`,
                                height: `${Math.random() * 2 + 1}px`,
                            }}
                        />
                    ))}
                </motion.div>
            </motion.button>
        </div>
    );
}
