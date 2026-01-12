
import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, UtensilsCrossed, CalendarDays } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const isActive = (path: string) => location.pathname === path;
  const isHome = location.pathname === '/';

  const navBackground = scrolled || !isHome || isOpen
    ? 'bg-white/95 dark:bg-dark-900/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 shadow-sm'
    : 'bg-transparent';

  const textColor = scrolled || !isHome || isOpen
    ? 'text-gray-900 dark:text-gray-100'
    : 'text-white';

  const logoColor = scrolled || !isHome || isOpen
    ? 'bg-gold-500 text-white'
    : 'bg-white/10 text-white backdrop-blur-sm';

  const subTextColor = scrolled || !isHome || isOpen
     ? 'text-gold-600 dark:text-gold-400'
     : 'text-gold-300';

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${navBackground} ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="container mx-auto px-6 md:px-8 lg:px-12 flex justify-between items-center">
          {/* Logo - Added right margin for safety gap */}
          <Link to="/" className="flex items-center gap-3 group z-50 shrink-0 relative mr-8 lg:mr-16" onClick={() => setIsOpen(false)}>
            <div className={`p-2 rounded-full transition-colors duration-300 ${logoColor}`}>
              <UtensilsCrossed size={20} className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl md:text-2xl font-serif font-bold tracking-wider leading-none ${textColor}`}>
                AURUM
              </span>
              <span className={`text-[10px] md:text-[11px] font-sans uppercase tracking-[0.3em] ${subTextColor}`}>
                & Ember
              </span>
            </div>
          </Link>

          {/* Desktop Menu - Shifted breakpoint to XL for better tablet experience */}
          <div className="hidden xl:flex items-center gap-8 2xl:gap-12 ml-auto">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 relative py-2 ${
                  isActive(link.href)
                    ? 'text-gold-500'
                    : `${textColor} hover:text-gold-500`
                }`}
              >
                {link.name}
                {isActive(link.href) && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 bottom-0 h-[2px] bg-gold-500"
                  />
                )}
              </Link>
            ))}

            <div className={`h-6 w-[1px] mx-2 ${scrolled || !isHome ? 'bg-gray-300 dark:bg-gray-700' : 'bg-white/20'}`}></div>

            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all duration-300 hover:text-gold-500 ${textColor}`}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <Link
               to="/reservation"
               className="bg-gold-500 hover:bg-gold-600 text-white text-xs font-bold uppercase tracking-widest px-8 py-3 rounded-sm transition-all duration-300 shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 transform hover:-translate-y-0.5"
            >
              Book Table
            </Link>
          </div>

          {/* Mobile/Tablet Header Actions - Visible on < XL */}
          <div className="xl:hidden flex items-center gap-3 md:gap-6 z-50">
            {/* Mobile Book Button */}
            <Link
              to="/reservation"
              onClick={() => setIsOpen(false)}
              className="bg-gold-500 hover:bg-gold-600 text-white p-2 px-5 rounded-full shadow-md flex items-center gap-2 transition-transform active:scale-95 border border-gold-400"
            >
               <CalendarDays size={18} />
               <span className="text-[10px] font-bold uppercase tracking-widest hidden sm:inline">Reserve</span>
            </Link>

            <button
              onClick={toggleDarkMode}
               className={`p-2 transition-colors hover:text-gold-500 ${textColor}`}
               aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-1 transition-colors hover:text-gold-500 ${textColor}`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-white dark:bg-dark-900 xl:hidden flex flex-col pt-28 pb-10 px-6 overflow-y-auto"
          >
            <div className="flex flex-col items-center justify-center flex-grow gap-6 md:gap-8 min-h-[400px]">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05, duration: 0.5 }}
                  className="w-full text-center"
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-4xl md:text-5xl font-serif font-medium block py-3 transition-colors ${
                      isActive(link.href) 
                      ? 'text-gold-500 italic' 
                      : 'text-gray-900 dark:text-white hover:text-gold-500'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-auto space-y-8"
            >
              <div className="w-16 h-[1px] bg-gray-200 dark:bg-gray-800 mx-auto"></div>
              
              <div className="flex flex-col items-center gap-3 text-gray-500 dark:text-gray-400 font-light tracking-wide text-sm">
                 <p>123 Culinary Avenue, NY</p>
                 <a href="tel:+12125550199" className="hover:text-gold-500 transition-colors">+1 (212) 555-0199</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
