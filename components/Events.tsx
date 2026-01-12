import React from 'react';
import { EVENT_ROOMS } from '../constants';
import { motion } from 'framer-motion';
import { Users, Check } from 'lucide-react';

const Events: React.FC = () => {
  return (
    <section className="bg-stone-50 dark:bg-dark-900 min-h-screen">
       {/* Hero */}
       <div className="relative h-[60vh] flex items-center justify-center">
            <div className="absolute inset-0">
                <img 
                    src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1920&q=80" 
                    alt="Private Dining" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
            </div>
            <div className="relative z-10 text-center px-4">
                 <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                 >
                    <span className="text-gold-500 font-bold uppercase tracking-[0.2em] text-xs">Private Dining & Events</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-medium text-white mt-4 tracking-tight">Host the Extraordinary</h1>
                    <p className="text-gray-200 mt-6 max-w-xl mx-auto font-light text-lg">
                        From intimate gatherings to grand celebrations, create unforgettable moments in our exclusive private spaces.
                    </p>
                 </motion.div>
            </div>
       </div>

       {/* Rooms Section */}
       <div className="container mx-auto px-6 md:px-12 py-24">
            <div className="text-center mb-20">
                <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 dark:text-white">Our Spaces</h2>
                <div className="w-20 h-[1px] bg-gold-500 mx-auto mt-6"></div>
            </div>

            <div className="space-y-32">
                {EVENT_ROOMS.map((room, index) => (
                    <motion.div 
                        key={room.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}
                    >
                        <div className="lg:w-1/2 w-full">
                            <div className="relative aspect-[4/3] group overflow-hidden shadow-2xl rounded-sm">
                                <img 
                                    src={room.image} 
                                    alt={room.name} 
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute bottom-0 left-0 bg-white dark:bg-dark-800 px-8 py-4 flex items-center gap-3">
                                    <Users className="text-gold-500" size={20} />
                                    <span className="font-serif font-bold text-gray-900 dark:text-white">{room.capacity}</span>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <h3 className="text-4xl font-serif font-medium text-gray-900 dark:text-white mb-6">{room.name}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed font-light mb-8">
                                {room.description}
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                                {room.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-600 dark:text-gold-400">
                                            <Check size={12} strokeWidth={3} />
                                        </div>
                                        <span className="text-sm text-gray-700 dark:text-gray-300 uppercase tracking-wider font-bold">{feature}</span>
                                    </div>
                                ))}
                            </div>
                            <button className="px-8 py-3 border border-gray-900 dark:border-white text-gray-900 dark:text-white font-bold uppercase tracking-widest text-xs hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-dark-900 transition-all">
                                View Floorplan
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
       </div>

       {/* Inquiry Form */}
       <div className="bg-stone-100 dark:bg-dark-800 py-24">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                     <span className="text-gold-500 font-bold uppercase tracking-[0.2em] text-xs">Start Planning</span>
                     <h2 className="text-4xl font-serif font-medium text-gray-900 dark:text-white mt-4">Event Inquiry</h2>
                     <p className="text-gray-500 dark:text-gray-400 mt-4">Fill out the form below and our events team will contact you within 24 hours.</p>
                </div>

                <form className="bg-white dark:bg-dark-900 p-8 md:p-12 shadow-xl border-t-4 border-gold-500">
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Full Name</label>
                            <input type="text" className="w-full bg-stone-50 dark:bg-dark-800 border-none p-4 text-gray-900 dark:text-white focus:ring-1 focus:ring-gold-500" />
                        </div>
                        <div>
                            <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Email Address</label>
                            <input type="email" className="w-full bg-stone-50 dark:bg-dark-800 border-none p-4 text-gray-900 dark:text-white focus:ring-1 focus:ring-gold-500" />
                        </div>
                         <div>
                            <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Event Date</label>
                            <input type="date" className="w-full bg-stone-50 dark:bg-dark-800 border-none p-4 text-gray-900 dark:text-white focus:ring-1 focus:ring-gold-500" />
                        </div>
                        <div>
                            <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Guest Count (Approx)</label>
                            <input type="number" className="w-full bg-stone-50 dark:bg-dark-800 border-none p-4 text-gray-900 dark:text-white focus:ring-1 focus:ring-gold-500" />
                        </div>
                    </div>
                    <div className="mb-8">
                         <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Preferred Space</label>
                         <select className="w-full bg-stone-50 dark:bg-dark-800 border-none p-4 text-gray-900 dark:text-white focus:ring-1 focus:ring-gold-500">
                             <option>Select a Room...</option>
                             {EVENT_ROOMS.map(room => (
                                 <option key={room.id} value={room.name}>{room.name}</option>
                             ))}
                             <option>Entire Restaurant Buyout</option>
                         </select>
                    </div>
                     <div className="mb-8">
                         <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Additional Details</label>
                         <textarea rows={4} className="w-full bg-stone-50 dark:bg-dark-800 border-none p-4 text-gray-900 dark:text-white focus:ring-1 focus:ring-gold-500"></textarea>
                    </div>
                    <button type="button" className="w-full bg-gold-500 hover:bg-gold-600 text-white font-bold text-sm uppercase tracking-[0.2em] py-5 transition-all">
                        Submit Inquiry
                    </button>
                </form>
            </div>
       </div>
    </section>
  );
};

export default Events;