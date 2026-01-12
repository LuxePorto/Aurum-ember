
import React from 'react';
import { motion } from 'framer-motion';

const Reservation: React.FC = () => {
  return (
    <section id="reservation" className="py-12 md:py-24 bg-stone-100 dark:bg-dark-950">
      <div className="container mx-auto px-4 md:px-12">
        <div className="bg-white dark:bg-dark-900 shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[600px] md:min-h-[700px] rounded-sm">
          
          {/* Image Side - Hidden on small mobile to save space or reduced height */}
          <div className="lg:w-5/12 relative h-64 lg:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80" 
              alt="Dining Atmosphere" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-serif font-medium mb-4 md:mb-6">Opening Hours</h3>
              <div className="space-y-3 font-light tracking-wide text-xs md:text-sm">
                 <div className="flex justify-between border-b border-white/20 pb-2">
                    <span>Mon - Fri</span>
                    <span>17:00 - 23:00</span>
                 </div>
                 <div className="flex justify-between border-b border-white/20 pb-2">
                    <span>Sat - Sun</span>
                    <span>11:00 - 23:00</span>
                 </div>
              </div>
              <p className="mt-6 md:mt-8 text-gold-400 text-[10px] md:text-xs uppercase tracking-widest font-bold">Reservations Recommended</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-7/12 p-6 md:p-16 lg:p-20 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-gold-500 font-bold uppercase tracking-[0.2em] text-xs">Save your spot</span>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 dark:text-white mt-3 mb-8 md:mb-12">Book a Table</h2>
              
              <form className="space-y-8 md:space-y-10">
                <div className="grid md:grid-cols-2 gap-8 md:gap-10">
                  <div className="group">
                    <input type="text" placeholder="Your Name" className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-3 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-gold-500 transition-colors" />
                  </div>
                  <div className="group">
                    <input type="tel" placeholder="Phone Number" className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-3 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-gold-500 transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                   <div className="group">
                    <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Date</label>
                    <input type="date" className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-2 text-gray-900 dark:text-white focus:outline-none focus:border-gold-500 transition-colors" />
                  </div>
                  <div className="group">
                    <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Time</label>
                    <input type="time" className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-2 text-gray-900 dark:text-white focus:outline-none focus:border-gold-500 transition-colors" />
                  </div>
                   <div className="group">
                    <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Guests</label>
                    <select className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-2 text-gray-900 dark:text-white focus:outline-none focus:border-gold-500 transition-colors">
                        <option>2 Guests</option>
                        <option>3 Guests</option>
                        <option>4 Guests</option>
                        <option>5+ Guests</option>
                    </select>
                  </div>
                </div>

                <div className="group">
                    <textarea placeholder="Special Requests (Allergies, Occasions)" rows={2} className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-3 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-gold-500 transition-colors resize-none"></textarea>
                </div>

                <div className="pt-4 md:pt-6">
                    <button type="button" className="w-full bg-gold-500 hover:bg-gold-600 text-white font-bold text-sm uppercase tracking-[0.2em] py-4 md:py-5 transition-all shadow-lg shadow-gold-500/30 rounded-sm">
                        Confirm Reservation
                    </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
