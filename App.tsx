
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Press from './components/Press';
import ChefWord from './components/ChefWord';
import About from './components/About';
import Categories from './components/Categories';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Reservation from './components/Reservation';
import Location from './components/Location';
import Footer from './components/Footer';
import Features from './components/Features';
import Journal from './components/Journal';
import Events from './components/Events';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import Careers from './components/Careers';
import BlogPost from './components/BlogPost';
import { MessageCircle, ArrowRight } from 'lucide-react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout: React.FC<{ children: React.ReactNode; darkMode: boolean; toggleDarkMode: () => void }> = ({ children, darkMode, toggleDarkMode }) => {
  return (
    <div className="min-h-screen font-sans selection:bg-gold-500 selection:text-white flex flex-col">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      {/* Floating Action Button */}
      <a 
        href="https://wa.me/" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-24 right-8 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 flex items-center justify-center"
        aria-label="Order on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};

const HomePage = () => (
  <>
    <Hero />
    <Press />
    <ChefWord />
    <Features />
    <Categories />
    <Reviews />
    {/* Journal Teaser */}
    <section className="py-20 bg-stone-100 dark:bg-dark-800">
       <div className="container mx-auto px-6 text-center">
          <span className="text-gold-500 font-bold uppercase tracking-[0.2em] text-xs">Latest News</span>
          <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mt-4 mb-8">From The Journal</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
               <div className="relative group overflow-hidden cursor-pointer aspect-video md:aspect-auto">
                   <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Journal 1" />
                   <Link to="/journal/1" className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                       <h3 className="text-white font-serif text-2xl font-bold">The Art of Sourcing</h3>
                   </Link>
               </div>
               <div className="relative group overflow-hidden cursor-pointer aspect-video md:aspect-auto">
                   <img src="https://images.unsplash.com/photo-1514362545857-3bc16549766b?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Journal 2" />
                   <Link to="/journal/2" className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                       <h3 className="text-white font-serif text-2xl font-bold">Summer Cocktails</h3>
                   </Link>
               </div>
          </div>
          <Link to="/journal" className="inline-flex items-center gap-2 text-gold-600 dark:text-gold-500 font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all">
             Read All Stories <ArrowRight size={14} />
          </Link>
       </div>
    </section>
    
    <section className="py-20 bg-stone-900 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold mb-6">Ready to Experience?</h2>
        <p className="mb-8 text-stone-300 max-w-xl mx-auto">Book your table now and indulge in an unforgettable dining journey.</p>
        <Link to="/reservation" className="inline-block bg-gold-500 hover:bg-gold-600 text-white px-8 py-3 rounded-sm font-bold uppercase tracking-wide transition-colors">
          Reserve Your Table
        </Link>
      </div>
    </section>
  </>
);

const AboutPage = () => (
  <div className="pt-20">
    <About />
    <Reviews />
  </div>
);

const MenuPage = () => (
  <div className="pt-20">
    <Categories />
    <Menu />
  </div>
);

const GalleryPage = () => (
  <div className="pt-20">
    <Gallery />
  </div>
);

const ContactPage = () => (
  <div className="pt-20">
    <Location />
  </div>
);

const ReservationPage = () => (
  <div className="pt-20">
    <Reservation />
  </div>
);

const JournalPage = () => (
  <div className="pt-20">
    <Journal />
  </div>
);

const EventsPage = () => (
  <div className="pt-20">
    <Events />
  </div>
);

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setDarkMode(true);
    }
  };

  return (
    <HashRouter>
      <ScrollToTop />
      <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/journal/:id" element={<BlogPost />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
