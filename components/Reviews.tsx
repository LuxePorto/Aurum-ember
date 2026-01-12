import React from 'react';
import { REVIEWS } from '../constants';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-dark-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-bold uppercase tracking-[0.2em] text-xs">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 dark:text-white mt-4">Guest Experiences</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-stone-50 dark:bg-dark-800 p-10 relative group hover:shadow-xl transition-shadow duration-300"
            >
              <Quote size={40} className="text-gold-200 dark:text-gold-900/30 absolute top-8 right-8" />
              
              <div className="flex gap-1 text-gold-500 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-300 italic text-lg leading-relaxed mb-8 font-serif">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all"
                />
                <div>
                  <h4 className="font-sans font-bold text-sm uppercase tracking-wider text-gray-900 dark:text-white">{review.name}</h4>
                  <span className="text-xs text-gray-400">Verified Guest</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;