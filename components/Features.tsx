import React from 'react';
import { FEATURES } from '../constants';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-stone-900 text-white border-t border-white/5 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
         <div className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-6 relative">
                 <div className="absolute inset-0 bg-gold-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 <feature.icon strokeWidth={1} size={40} className="text-gold-400 relative z-10" />
              </div>
              <h3 className="text-lg font-serif font-medium mb-3 text-white tracking-wide">{feature.title}</h3>
              <p className="text-stone-400 text-sm leading-relaxed max-w-xs">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;