
import React from 'react';
import { MapPin, Phone, Mail, Clock, ChevronDown, Send } from 'lucide-react';
import { FAQS } from '../constants';
import { motion } from 'framer-motion';

const Location: React.FC = () => {
  return (
    <section id="contact" className="bg-stone-50 dark:bg-dark-900 min-h-screen">
       {/* Hero / Header for Contact Page */}
       <div className="bg-dark-900 text-white py-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?auto=format&fit=crop&w=1920&q=80" 
               alt="Contact Background" 
               className="w-full h-full object-cover opacity-30"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10 text-center pt-10">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
             >
                <span className="text-gold-500 font-bold uppercase tracking-[0.2em] text-xs block mb-4">Connect</span>
                <h1 className="text-5xl md:text-7xl font-serif font-medium tracking-tight">Contact Us</h1>
             </motion.div>
          </div>
       </div>

       <div className="container mx-auto px-6 md:px-12 py-24">
         <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
               <h2 className="text-3xl font-serif font-medium text-gray-900 dark:text-white mb-8">Get in Touch</h2>
               <p className="text-gray-600 dark:text-gray-400 mb-12 font-light text-lg leading-relaxed">
                 Whether you have a question about our menu, need assistance with a reservation, or want to host a private event, our team is here to assist you.
               </p>

               <div className="space-y-10">
                  <div className="flex gap-6 group">
                     <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0 text-gold-600 dark:text-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
                        <MapPin size={24} />
                     </div>
                     <div>
                        <h4 className="font-serif font-bold text-gray-900 dark:text-white text-lg mb-2">Location</h4>
                        <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">123 Culinary Avenue,<br/>Metropolis, NY 10012</p>
                     </div>
                  </div>

                  <div className="flex gap-6 group">
                     <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0 text-gold-600 dark:text-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
                        <Phone size={24} />
                     </div>
                     <div>
                        <h4 className="font-serif font-bold text-gray-900 dark:text-white text-lg mb-2">Reservations</h4>
                        <p className="text-gray-600 dark:text-gray-400 font-light">+1 (212) 555-0199</p>
                        <p className="text-sm text-gray-400 mt-1 italic">Mon-Fri from 9am to 6pm</p>
                     </div>
                  </div>

                  <div className="flex gap-6 group">
                     <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0 text-gold-600 dark:text-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
                        <Mail size={24} />
                     </div>
                     <div>
                        <h4 className="font-serif font-bold text-gray-900 dark:text-white text-lg mb-2">Inquiries</h4>
                        <p className="text-gray-600 dark:text-gray-400 font-light hover:text-gold-500 transition-colors cursor-pointer">info@aurumember.com</p>
                        <p className="text-gray-600 dark:text-gray-400 font-light hover:text-gold-500 transition-colors cursor-pointer">events@aurumember.com</p>
                     </div>
                  </div>
                  
                   <div className="flex gap-6 group">
                     <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0 text-gold-600 dark:text-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
                        <Clock size={24} />
                     </div>
                     <div>
                        <h4 className="font-serif font-bold text-gray-900 dark:text-white text-lg mb-2">Opening Hours</h4>
                        <div className="text-gray-600 dark:text-gray-400 font-light space-y-1">
                            <p className="flex justify-between w-48"><span>Mon - Fri:</span> <span>17:00 - 23:00</span></p>
                            <p className="flex justify-between w-48"><span>Sat - Sun:</span> <span>11:00 - 23:00</span></p>
                        </div>
                     </div>
                  </div>
               </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="bg-white dark:bg-dark-800 p-10 md:p-12 shadow-2xl relative border-t-4 border-gold-500"
            >
               <h3 className="text-2xl font-serif font-medium text-gray-900 dark:text-white mb-8">Send a Message</h3>
               <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                      <div className="group relative">
                        <input type="text" id="name" required className="peer w-full bg-transparent border-b border-gray-300 dark:border-gray-600 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-gold-500 transition-colors placeholder-transparent" placeholder="Name" />
                        <label htmlFor="name" className="absolute left-0 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold-500 peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs cursor-text">Your Name</label>
                      </div>
                      <div className="group relative">
                        <input type="email" id="email" required className="peer w-full bg-transparent border-b border-gray-300 dark:border-gray-600 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-gold-500 transition-colors placeholder-transparent" placeholder="Email" />
                        <label htmlFor="email" className="absolute left-0 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold-500 peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs cursor-text">Email Address</label>
                      </div>
                  </div>
                  <div className="group relative">
                        <input type="text" id="subject" className="peer w-full bg-transparent border-b border-gray-300 dark:border-gray-600 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-gold-500 transition-colors placeholder-transparent" placeholder="Subject" />
                        <label htmlFor="subject" className="absolute left-0 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold-500 peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs cursor-text">Subject</label>
                  </div>
                   <div className="group relative">
                        <textarea id="message" rows={4} required className="peer w-full bg-transparent border-b border-gray-300 dark:border-gray-600 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-gold-500 transition-colors placeholder-transparent resize-none" placeholder="Message"></textarea>
                        <label htmlFor="message" className="absolute left-0 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold-500 peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs cursor-text">Message</label>
                  </div>
                  
                  <button type="submit" className="group flex items-center justify-between w-full bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-lg shadow-gold-500/20">
                     <span>Send Message</span>
                     <Send size={16} className="transform group-hover:translate-x-1 transition-transform" />
                  </button>
               </form>
            </motion.div>
         </div>

         {/* Map Section */}
         <div className="mt-24 w-full h-[450px] relative grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out shadow-inner border-y border-gray-200 dark:border-dark-800">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.966309598967!2d-74.00425878428698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1626359286280!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy"
                title="Restaurant Location"
            ></iframe>
         </div>

         {/* FAQ Section */}
         <div className="max-w-3xl mx-auto mt-24">
             <div className="text-center mb-16">
                 <span className="text-gold-500 font-bold uppercase tracking-[0.2em] text-xs">Help</span>
                 <h2 className="text-4xl font-serif font-medium text-gray-900 dark:text-white mt-4">Frequently Asked Questions</h2>
             </div>
             
             <div className="space-y-4">
                {FAQS.map((faq, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-dark-800 p-6 hover:border-gold-500/30 transition-colors shadow-sm"
                    >
                        <details className="group">
                            <summary className="flex justify-between items-center cursor-pointer list-none text-gray-900 dark:text-white font-medium font-serif text-lg">
                                {faq.question}
                                <span className="transition-transform duration-300 group-open:rotate-180 text-gold-500">
                                    <ChevronDown size={20} />
                                </span>
                            </summary>
                            <div className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed font-light border-t border-gray-100 dark:border-gray-700 pt-4">
                                {faq.answer}
                            </div>
                        </details>
                    </motion.div>
                ))}
            </div>
         </div>
       </div>
    </section>
  );
};

export default Location;
