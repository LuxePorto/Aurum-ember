
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1514362545857-3bc16549766b?auto=format&fit=crop&w=1920&q=80", // Original moody dining
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1920&q=80", // Bar detail
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1920&q=80"  // High-end food art
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 8000); // Change image every 8 seconds for a slower, more elegant feel

    return () => clearInterval(timer);
  }, []);

  // Generate stable particles for the "Ember" effect
  const particles = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: Math.random() * 15 + 15, // 15-30s duration
      delay: Math.random() * 10,
      size: Math.random() * 3 + 2, // 2-5px size
      drift: (Math.random() - 0.5) * 150 // Horizontal drift amount
    }));
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-dark-900">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
                opacity: { duration: 2.5 }, 
                scale: { duration: 10, ease: "linear" } 
            }}
            className="absolute inset-0 w-full h-full"
          >
             <img
              src={HERO_IMAGES[currentIndex]}
              alt="Fine Dining Atmosphere"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Sophisticated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-dark-900/30 opacity-90 z-10"></div>
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        {/* Animated "Ember" Particles */}
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full bg-gold-400 mix-blend-screen blur-[1px]"
                    style={{
                        left: p.left,
                        width: p.size,
                        height: p.size,
                        bottom: '-20px',
                        opacity: 0
                    }}
                    animate={{
                        y: ['0vh', '-110vh'],
                        x: [0, p.drift],
                        opacity: [0, 0.4, 0.8, 0.4, 0]
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "linear"
                    }}
                />
            ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-6">
             <motion.span 
               initial={{ width: 0 }}
               animate={{ width: 64 }}
               transition={{ delay: 0.5, duration: 1 }}
               className="h-[1px] bg-gold-500/60 hidden md:block"
             ></motion.span>
             <span className="text-gold-400 uppercase tracking-[0.3em] text-xs md:text-sm font-semibold">
               Est. 2015
             </span>
             <motion.span 
               initial={{ width: 0 }}
               animate={{ width: 64 }}
               transition={{ delay: 0.5, duration: 1 }}
               className="h-[1px] bg-gold-500/60 hidden md:block"
             ></motion.span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-medium text-white mb-8 leading-[1.1] tracking-tight drop-shadow-lg">
            Taste That <br />
            <span className="italic text-gold-500 relative inline-block">
                Transcends
                {/* Subtle glow behind the italic text */}
                <div className="absolute inset-0 bg-gold-500/20 blur-2xl -z-10 rounded-full"></div>
            </span>
          </h1>
          
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed tracking-wide opacity-90 drop-shadow-md">
            A sanctuary of culinary artistry where tradition meets modern innovation. Experience the alchemy of flavor.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full">
            <Link
              to="/reservation"
              className="px-10 py-4 bg-gold-500 text-white rounded-sm text-sm font-bold tracking-[0.15em] uppercase hover:bg-gold-600 transition-all duration-300 w-full sm:w-auto min-w-[200px] shadow-lg hover:shadow-gold-500/40"
            >
              Book a Table
            </Link>
            <Link
              to="/menu"
              className="px-10 py-4 border border-white/20 text-white rounded-sm text-sm font-bold tracking-[0.15em] uppercase hover:bg-white hover:text-dark-900 transition-all duration-300 flex items-center justify-center gap-2 group w-full sm:w-auto min-w-[200px] backdrop-blur-sm"
            >
              View Menu
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Elegant Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
      >
        <span className="text-[10px] text-gray-400 uppercase tracking-[0.3em]">Discover</span>
        <motion.div 
          animate={{ height: [0, 64, 0], y: [0, 0, 10] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] bg-gradient-to-b from-gold-500 to-transparent opacity-60"
        ></motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
