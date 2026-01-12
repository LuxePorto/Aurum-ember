
import React from 'react';
import { Facebook, Instagram, Twitter, ArrowUp, UtensilsCrossed, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const INSTAGRAM_IMAGES = [
      "https://images.unsplash.com/photo-1546241072-48010ad2862c?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1514362545857-3bc16549766b?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?auto=format&fit=crop&w=300&q=80"
  ];

  return (
    <footer className="bg-stone-950 text-stone-400 relative border-t border-white/5">
      
      {/* Visual Instagram Strip */}
      <div className="grid grid-cols-3 md:grid-cols-6">
          {INSTAGRAM_IMAGES.map((img, i) => (
              <a href="#" key={i} className="block relative aspect-square group overflow-hidden">
                  <img src={img} alt="Instagram" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gold-500/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Instagram className="text-white" size={24} />
                  </div>
              </a>
          ))}
      </div>

      <div className="container mx-auto px-6 text-center pt-24 pb-12">
        
        {/* Brand */}
        <div className="flex flex-col items-center mb-16">
            <div className="p-3 bg-stone-900 rounded-full text-gold-500 mb-6 border border-stone-800">
                <UtensilsCrossed size={24} />
            </div>
            <h2 className="text-3xl font-serif font-bold text-white tracking-wider mb-2">AURUM & EMBER</h2>
            <p className="text-xs uppercase tracking-[0.3em] text-gold-500">Fine Dining Experience</p>
        </div>

        {/* Newsletter */}
        <div className="max-w-xl mx-auto mb-20 bg-white/5 p-8 rounded-sm backdrop-blur-sm border border-white/10">
            <h3 className="text-white font-serif text-xl mb-2">Join the Inner Circle</h3>
            <p className="text-stone-400 text-sm mb-6 font-light">Subscribe for exclusive event invitations and seasonal menu updates.</p>
            <form className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="bg-stone-900 border border-stone-800 text-white px-4 py-3 flex-grow text-sm focus:outline-none focus:border-gold-500 transition-colors placeholder-stone-600"
                />
                <button type="submit" className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 transition-colors">
                    <Send size={18} />
                </button>
            </form>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-20 max-w-5xl mx-auto border-t border-b border-white/5 py-12">
            {/* Address */}
            <div className="space-y-4">
                <h3 className="text-white font-serif text-lg">Visit Us</h3>
                <p className="leading-relaxed text-sm">
                    123 Culinary Avenue<br/>
                    Metropolis, NY 10012
                </p>
            </div>

            {/* Contact */}
            <div className="space-y-4">
                <h3 className="text-white font-serif text-lg">Contact</h3>
                <p className="leading-relaxed text-sm">
                    reservations@aurumember.com<br/>
                    +1 (212) 555-0199
                </p>
            </div>

             {/* Social */}
             <div className="space-y-4">
                <h3 className="text-white font-serif text-lg">Follow</h3>
                <div className="flex justify-center gap-6">
                    <a href="#" className="hover:text-gold-500 transition-colors"><Facebook size={20} /></a>
                    <a href="#" className="hover:text-gold-500 transition-colors"><Instagram size={20} /></a>
                    <a href="#" className="hover:text-gold-500 transition-colors"><Twitter size={20} /></a>
                </div>
            </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm font-medium uppercase tracking-widest text-stone-500">
             <Link to="/" className="hover:text-white transition-colors">Home</Link>
             <Link to="/about" className="hover:text-white transition-colors">Story</Link>
             <Link to="/menu" className="hover:text-white transition-colors">Menu</Link>
             <Link to="/events" className="hover:text-white transition-colors">Private Dining</Link>
             <Link to="/journal" className="hover:text-white transition-colors">Journal</Link>
             <Link to="/reservation" className="hover:text-white transition-colors">Reservations</Link>
             <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>

        <div className="text-stone-600 text-xs flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5">
            <p>© {new Date().getFullYear()} Aurum & Ember. All rights reserved.</p>
            <div className="flex gap-6">
                <Link to="/privacy" className="hover:text-stone-400 transition-colors">Privacy</Link>
                <Link to="/terms" className="hover:text-stone-400 transition-colors">Terms</Link>
                <Link to="/careers" className="hover:text-stone-400 transition-colors">Careers</Link>
            </div>
        </div>
      </div>

      {/* Scroll to top */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gold-500/80 hover:bg-gold-500 p-3 rounded-full text-white shadow-lg backdrop-blur-sm transition-all transform hover:-translate-y-1 z-40 hidden md:block"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
