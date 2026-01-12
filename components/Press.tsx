
import React from 'react';
import { motion } from 'framer-motion';

const PRESS_LOGOS = [
  { name: "Michelin Guide", text: "MICHELIN" },
  { name: "The New York Times", text: "The New York Times" },
  { name: "Vogue", text: "VOGUE" },
  { name: "Esquire", text: "Esquire" },
  { name: "Bon Appétit", text: "Bon Appétit" },
  { name: "Forbes", text: "Forbes" }
];

const Press: React.FC = () => {
  return (
    <section className="py-12 bg-white dark:bg-dark-900 border-b border-gray-100 dark:border-white/5">
      <div className="container mx-auto px-6">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-8">
          As Featured In
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 hover:opacity-80 transition-opacity duration-500 grayscale">
          {PRESS_LOGOS.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="font-serif text-2xl md:text-3xl font-bold text-gray-900 dark:text-white select-none cursor-default"
            >
              {logo.text}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Press;
