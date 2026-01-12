
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ChefWord: React.FC = () => {
  return (
    <section className="py-24 bg-stone-50 dark:bg-dark-900 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="relative">
                <span className="absolute -top-12 -left-8 text-9xl text-gold-500/10 font-serif">"</span>
                <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 dark:text-white mb-8 leading-tight">
                    Cooking is an act of <span className="italic text-gold-600 dark:text-gold-500">storytelling.</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg font-light leading-relaxed mb-8">
                    "At Aurum & Ember, every dish is a chapter, and every ingredient is a character. We strive not just to feed, but to evoke memory, emotion, and connection. Our kitchen is a place where respect for nature meets the pursuit of perfection."
                </p>
                <div className="flex flex-col gap-2">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Signature_sample.svg" 
                        alt="Chef Signature" 
                        className="h-12 w-32 opacity-60 dark:invert" 
                    />
                    <div>
                        <p className="font-serif font-bold text-gray-900 dark:text-white text-lg">Marco Rossi</p>
                        <p className="text-xs uppercase tracking-widest text-gold-500">Executive Chef</p>
                    </div>
                </div>
                <div className="mt-10">
                    <Link to="/about" className="text-sm font-bold uppercase tracking-widest border-b border-gray-900 dark:border-white pb-1 hover:text-gold-500 hover:border-gold-500 transition-colors">
                        Read Our Full Story
                    </Link>
                </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/2 relative"
          >
             <div className="relative z-10 p-4 border border-gold-500/20 bg-white dark:bg-dark-800 shadow-2xl rotate-2">
                <img 
                    src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=800&q=80" 
                    alt="Chef Marco Rossi" 
                    className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
             </div>
             <div className="absolute top-0 right-0 w-full h-full border-2 border-gold-500/30 -rotate-2 transform translate-x-4 -translate-y-4 -z-0"></div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default ChefWord;
