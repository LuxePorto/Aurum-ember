import React from 'react';
import { CATEGORIES } from '../constants';
import { motion } from 'framer-motion';

const Categories: React.FC = () => {
  return (
    <section className="py-20 bg-stone-100 dark:bg-dark-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
           <span className="text-gold-500 font-bold uppercase tracking-wider text-sm">Discover</span>
           <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mt-2">Our Culinary Worlds</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {CATEGORIES.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-dark-700 p-8 rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer group text-center border border-transparent hover:border-gold-500/30"
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-stone-50 dark:bg-dark-800 rounded-full group-hover:bg-gold-500 transition-colors duration-300">
                  <category.icon size={32} className="text-gold-600 dark:text-gold-400 group-hover:text-white transition-colors" />
                </div>
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-2">{category.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-snug">{category.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;