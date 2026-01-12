
import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Heart, Star, ArrowRight } from 'lucide-react';
import { TEAM_MEMBERS, AWARDS } from '../constants';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-white dark:bg-dark-900 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Story Section - Asymmetrical Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-20 mb-32">
          
          {/* Images */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative z-10 pr-8"
            >
              <img 
                src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=800&q=80" 
                alt="Chef Plating Art" 
                className="shadow-xl w-full max-w-md mx-auto lg:mx-0 object-cover aspect-[3/4]"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-12 -right-4 lg:-right-12 z-20 w-56 md:w-72 shadow-2xl"
            >
               <img 
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=600&q=80" 
                alt="Interior Detail" 
                className="w-full h-full object-cover border-8 border-white dark:border-dark-800"
              />
            </motion.div>
             <div className="absolute top-20 -left-20 w-64 h-64 bg-gold-500/10 rounded-full blur-[80px] -z-0"></div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 pt-10 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-gold-600 dark:text-gold-500 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Our Story</span>
              <h2 className="text-5xl md:text-6xl font-serif font-medium text-gray-900 dark:text-white mb-8 leading-tight">
                Tradition Meets <br/>
                <span className="italic text-gold-600 dark:text-gold-500">Innovation</span>
              </h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300 font-light text-lg leading-relaxed">
                <p>
                    Aurum & Ember was born from a desire to create a sanctuary where time slows down. Founded in 2015, we bridge the gap between the comforting warmth of a home kitchen and the exacting standards of fine dining.
                </p>
                <p>
                    We believe that true luxury lies in the details. From the locally sourced micro-greens to the hand-polished crystal, every element is curated to tell a story of passion and precision.
                </p>
              </div>
              
              <div className="mt-12 flex gap-16">
                 <div>
                    <span className="block text-4xl font-serif font-bold text-gray-900 dark:text-white">15+</span>
                    <span className="text-xs uppercase tracking-widest text-gray-500">Years Experience</span>
                 </div>
                 <div>
                    <span className="block text-4xl font-serif font-bold text-gray-900 dark:text-white">3</span>
                    <span className="text-xs uppercase tracking-widest text-gray-500">Michelin Stars</span>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="mb-32 grid md:grid-cols-2 gap-16 items-start">
             <div>
                <h3 className="text-3xl font-serif font-medium text-gray-900 dark:text-white mb-6">Ethical Sourcing</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                    Our menu changes with the seasons, dictated by what the earth provides. We partner directly with artisan growers and local fishermen to ensure that every ingredient is at its peak flavor and ethically sourced.
                </p>
                <div className="grid grid-cols-1 gap-6">
                    <div className="flex gap-4 items-start">
                         <Leaf className="text-gold-500 shrink-0 mt-1" size={20} />
                         <div>
                            <h4 className="font-serif font-bold text-gray-900 dark:text-white">Farm to Table</h4>
                            <p className="text-sm text-gray-500 mt-1">Direct partnerships with local farms within 50 miles.</p>
                         </div>
                    </div>
                     <div className="flex gap-4 items-start">
                         <Heart className="text-gold-500 shrink-0 mt-1" size={20} />
                         <div>
                            <h4 className="font-serif font-bold text-gray-900 dark:text-white">Zero Waste</h4>
                            <p className="text-sm text-gray-500 mt-1">Committed to sustainability in every aspect of our kitchen.</p>
                         </div>
                    </div>
                </div>
             </div>
             <div className="h-[400px] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1466637574327-047b0e88be26?auto=format&fit=crop&w=800&q=80" alt="Fresh Ingredients" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
             </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
            <span className="text-gold-500 font-bold uppercase tracking-[0.2em] text-xs">The Artisans</span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 dark:text-white mt-4">Culinary Masters</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-32">
            {TEAM_MEMBERS.map((member, index) => (
                <motion.div 
                    key={member.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="group"
                >
                    <div className="relative overflow-hidden mb-6 aspect-[3/4] bg-gray-100 dark:bg-dark-800">
                        <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0" 
                        />
                        <div className="absolute bottom-0 left-0 w-full bg-white dark:bg-dark-800 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-xs text-gray-500 dark:text-gray-400 italic font-serif">"{member.bio}"</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white tracking-wide">{member.name}</h3>
                        <p className="text-gold-600 dark:text-gold-500 text-xs font-bold uppercase tracking-[0.2em] mt-2">{member.role}</p>
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Awards Section - Deep Detail */}
        <div className="bg-stone-100 dark:bg-dark-800 py-16 px-6 rounded-sm mb-32">
            <div className="text-center mb-12">
               <h3 className="text-2xl font-serif font-medium text-gray-900 dark:text-white">Excellence Recognized</h3>
               <div className="w-16 h-[1px] bg-gold-500 mx-auto mt-4"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {AWARDS.map((award, index) => (
                   <motion.div
                      key={award.id}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.8 }}
                      viewport={{ once: true }}
                      className="text-center group cursor-default"
                   >
                      <div className="mb-4 text-gold-500/50 group-hover:text-gold-500 transition-colors flex justify-center">
                          <Star size={32} />
                      </div>
                      <span className="block text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">{award.year}</span>
                      <h4 className="font-serif font-bold text-lg text-gray-900 dark:text-white leading-tight mb-1">{award.title}</h4>
                      <p className="text-xs text-gold-600 dark:text-gold-500 italic">{award.organization}</p>
                   </motion.div>
                ))}
            </div>
        </div>

        {/* Careers Call to Action - New Detail */}
        <div className="relative py-24 px-6 md:px-12 bg-dark-900 text-white text-center overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full opacity-20 z-0">
                 <img src="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?auto=format&fit=crop&w=1600&q=80" alt="Kitchen Team" className="w-full h-full object-cover" />
             </div>
             <div className="relative z-10 max-w-3xl mx-auto">
                 <span className="text-gold-500 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Join Our Team</span>
                 <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6">Pursue Culinary Excellence</h2>
                 <p className="text-gray-300 mb-10 text-lg font-light leading-relaxed">
                    We are always looking for passionate individuals to join our kitchen and service teams. If you share our dedication to craft and hospitality, we want to hear from you.
                 </p>
                 <Link to="/careers" className="inline-flex items-center gap-3 border border-white px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-dark-900 transition-all">
                    View Open Positions <ArrowRight size={16} />
                 </Link>
             </div>
        </div>

      </div>
    </section>
  );
};

export default About;
