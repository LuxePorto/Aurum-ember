
import React from 'react';
import { BLOG_POSTS } from '../constants';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Journal: React.FC = () => {
  return (
    <section className="py-24 bg-stone-50 dark:bg-dark-900 min-h-screen">
      {/* Header */}
      <div className="container mx-auto px-6 mb-20 text-center">
        <span className="text-gold-500 font-bold uppercase tracking-[0.2em] text-xs">The Journal</span>
        <h1 className="text-4xl md:text-6xl font-serif font-medium text-gray-900 dark:text-white mt-4 mb-6">Culinary Chronicles</h1>
        <p className="text-gray-600 dark:text-gray-400 font-light text-lg max-w-2xl mx-auto">
          Behind the scenes stories, chef's inspirations, and the latest news from the world of Aurum & Ember.
        </p>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        {/* Featured Post */}
        <div className="mb-20">
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               className="grid lg:grid-cols-2 gap-12 items-center"
             >
                <Link to={`/journal/${BLOG_POSTS[0].id}`} className="relative aspect-[16/9] lg:aspect-auto lg:h-[500px] overflow-hidden rounded-sm shadow-xl group block">
                    <img 
                      src={BLOG_POSTS[0].image} 
                      alt={BLOG_POSTS[0].title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-6 left-6 bg-gold-500 text-white text-xs font-bold uppercase tracking-widest px-4 py-2">
                        Featured
                    </div>
                </Link>
                <div className="space-y-6">
                    <div className="flex items-center gap-4 text-xs text-gold-600 dark:text-gold-400 font-bold uppercase tracking-widest">
                        <span>{BLOG_POSTS[0].category}</span>
                        <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                        <span>{BLOG_POSTS[0].date}</span>
                    </div>
                    <Link to={`/journal/${BLOG_POSTS[0].id}`} className="block">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white leading-tight hover:text-gold-500 transition-colors">
                            {BLOG_POSTS[0].title}
                        </h2>
                    </Link>
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                        {BLOG_POSTS[0].excerpt}
                    </p>
                    <div className="flex items-center gap-6 pt-4 border-t border-gray-200 dark:border-gray-800">
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                             <User size={16} />
                             <span>{BLOG_POSTS[0].author}</span>
                        </div>
                         <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                             <Clock size={16} />
                             <span>{BLOG_POSTS[0].readTime}</span>
                        </div>
                    </div>
                    <Link to={`/journal/${BLOG_POSTS[0].id}`} className="inline-flex items-center gap-2 text-gold-600 dark:text-gold-500 font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all">
                        Read Article <ArrowRight size={16} />
                    </Link>
                </div>
             </motion.div>
        </div>

        {/* Recent Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {BLOG_POSTS.slice(1).map((post, index) => (
                <motion.div 
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col group cursor-pointer"
                >
                    <Link to={`/journal/${post.id}`} className="relative aspect-[4/3] overflow-hidden mb-6 rounded-sm shadow-md block">
                        <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                         <div className="absolute top-4 left-4 bg-white dark:bg-dark-800 text-gray-900 dark:text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                            {post.category}
                        </div>
                    </Link>
                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-3 font-medium">
                        <Calendar size={12} />
                        <span>{post.date}</span>
                    </div>
                    <Link to={`/journal/${post.id}`} className="block">
                        <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gold-500 transition-colors">
                            {post.title}
                        </h3>
                    </Link>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                        {post.excerpt}
                    </p>
                     <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-500 mt-auto border-t border-gray-100 dark:border-gray-800 pt-4">
                        <span>By {post.author}</span>
                        <span>{post.readTime}</span>
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Newsletter Callout */}
        <div className="mt-32 bg-dark-900 text-white p-12 md:p-20 text-center relative overflow-hidden rounded-sm">
             <div className="absolute top-0 left-0 w-full h-full opacity-20">
                 <img src="https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?auto=format&fit=crop&w=1600&q=80" className="w-full h-full object-cover" alt="Background" />
             </div>
             <div className="relative z-10 max-w-2xl mx-auto">
                 <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">Stay Inspired</h2>
                 <p className="text-gray-400 mb-8 font-light">Join our newsletter to receive the latest stories, recipes, and exclusive event invitations directly to your inbox.</p>
                 <form className="flex flex-col sm:flex-row gap-4">
                     <input type="email" placeholder="Your Email Address" className="flex-grow bg-white/10 border border-white/20 px-6 py-4 text-white focus:outline-none focus:border-gold-500 transition-colors placeholder-gray-500" />
                     <button className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 font-bold uppercase tracking-widest transition-colors">Subscribe</button>
                 </form>
             </div>
        </div>
      </div>
    </section>
  );
};

export default Journal;
