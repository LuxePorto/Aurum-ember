
import React, { useState } from 'react';
import { MENU_ITEMS, TASTING_MENU, CATEGORIES } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Wine, Utensils } from 'lucide-react';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const handleDownload = () => {
    // In a production environment, this would point to a real PDF file URL.
    // e.g., window.open('/assets/menu.pdf', '_blank');
    
    // As per requirements, we prompt the user that the PDF is not currently available.
    alert("Our full seasonal menu PDF is currently being updated. Please check back shortly for the digital download.");
  };

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section className="py-24 bg-stone-50 dark:bg-dark-900">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-gold-500 font-bold uppercase tracking-[0.2em] text-xs">Curated Selection</span>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 dark:text-white mt-4 mb-6">Signature Dishes</h2>
          <p className="text-gray-600 dark:text-gray-400 font-light text-lg">
            A symphony of flavors crafted with passion and precision.
          </p>
        </div>

        {/* Tasting Menu Section - Deep Detail */}
        <div className="mb-32 relative">
            <div className="absolute inset-0 bg-gold-500/5 dark:bg-gold-500/5 -skew-y-3 transform -z-0 rounded-3xl"></div>
            <div className="relative z-10 bg-white dark:bg-dark-800 p-8 md:p-16 shadow-2xl border border-gold-500/20 max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-2">Chef's Tasting Journey</h3>
                    <p className="text-gold-600 dark:text-gold-500 text-xs font-bold uppercase tracking-[0.2em]">Six Course Experience</p>
                </div>
                
                <div className="space-y-12 relative before:absolute before:left-1/2 before:-translate-x-1/2 before:top-4 before:bottom-4 before:w-[1px] before:bg-gold-200 dark:before:bg-gold-900/30">
                    {TASTING_MENU.map((item, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative flex flex-col items-center text-center bg-white dark:bg-dark-800 py-4"
                        >
                            <span className="w-8 h-8 rounded-full bg-gold-500 text-white flex items-center justify-center font-serif italic text-sm mb-4 relative z-10 shadow-lg border-4 border-white dark:border-dark-800">
                                {item.course}
                            </span>
                            <h4 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-2">{item.name}</h4>
                            <p className="text-gray-500 dark:text-gray-400 font-light mb-3 max-w-md">{item.description}</p>
                            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-gold-600 dark:text-gold-400 font-bold bg-gold-50 dark:bg-dark-700 px-3 py-1 rounded-full">
                                <Wine size={12} />
                                {item.pairing}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center pt-8 border-t border-gray-100 dark:border-gray-700">
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                        $185 per guest · Wine Pairing $95
                    </p>
                </div>
            </div>
        </div>

        {/* A La Carte Section */}
        <div className="text-center mb-12">
            <h3 className="text-2xl font-serif font-medium text-gray-900 dark:text-white mb-8">A La Carte</h3>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory('All')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider border transition-all duration-300 ${
                  activeCategory === 'All'
                    ? 'bg-gold-500 text-white border-gold-500 shadow-lg shadow-gold-500/30'
                    : 'bg-white dark:bg-dark-800 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-gold-500 hover:text-gold-500'
                }`}
              >
                <Utensils size={16} />
                All
              </motion.button>

              {CATEGORIES.map((cat) => (
                <motion.button
                  key={cat.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider border transition-all duration-300 ${
                    activeCategory === cat.name
                      ? 'bg-gold-500 text-white border-gold-500 shadow-lg shadow-gold-500/30'
                      : 'bg-white dark:bg-dark-800 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-gold-500 hover:text-gold-500'
                  }`}
                >
                  <cat.icon size={16} />
                  {cat.name}
                </motion.button>
              ))}
            </div>
        </div>

        <motion.div 
          layout
          className="grid lg:grid-cols-2 gap-x-16 gap-y-12 min-h-[400px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group flex gap-6 items-start"
              >
                {/* Image */}
                <div className="shrink-0 w-24 h-24 overflow-hidden shadow-lg bg-gray-200 dark:bg-dark-800 relative rounded-sm">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex justify-between items-baseline mb-2 border-b border-gray-200 dark:border-gray-800 pb-2 group-hover:border-gold-500/30 transition-colors">
                    <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white">
                      {item.name}
                    </h3>
                    <span className="text-lg font-serif italic text-gold-600 dark:text-gold-400">{item.price}</span>
                  </div>
                  
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-3 leading-relaxed font-light">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.isSpecial && (
                      <span className="text-[10px] uppercase tracking-wider font-bold text-gold-600 dark:text-gold-400 border border-gold-200 dark:border-gold-900 px-2 py-0.5">
                        Chef's Choice
                      </span>
                    )}
                    {item.tags?.map((tag) => (
                       <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-gray-400 border border-gray-200 dark:border-gray-800 px-2 py-0.5">
                         {tag}
                       </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
           <div className="text-center py-12 text-gray-500 dark:text-gray-400 italic">
              No items found in this category.
           </div>
        )}

        <div className="mt-20 text-center">
          <button 
            onClick={handleDownload}
            className="inline-flex items-center gap-3 px-10 py-4 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:border-gold-500 hover:text-gold-500 transition-all duration-300 text-xs font-bold uppercase tracking-[0.2em]"
          >
            <Download size={16} />
            Download Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
    