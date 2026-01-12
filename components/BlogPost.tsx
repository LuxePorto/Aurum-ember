
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { Calendar, User, Clock, ArrowLeft, Facebook, Twitter, Linkedin } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50 dark:bg-dark-900">
        <div className="text-center">
            <h2 className="text-3xl font-serif text-gray-900 dark:text-white mb-4">Article Not Found</h2>
            <Link to="/journal" className="text-gold-500 hover:underline">Return to Journal</Link>
        </div>
      </div>
    );
  }

  return (
    <article className="pt-24 pb-24 bg-stone-50 dark:bg-dark-900 min-h-screen">
       {/* Article Header */}
       <div className="relative h-[60vh] w-full">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <div className="bg-gold-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-6">
                    {post.category}
                </div>
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-white max-w-4xl leading-tight mb-8">
                    {post.title}
                </h1>
                <div className="flex flex-wrap justify-center gap-6 text-gray-300 text-sm font-medium">
                    <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-gold-500" />
                        <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <User size={16} className="text-gold-500" />
                        <span>By {post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock size={16} className="text-gold-500" />
                        <span>{post.readTime}</span>
                    </div>
                </div>
            </div>
       </div>

       <div className="container mx-auto px-6 max-w-4xl -mt-20 relative z-10">
           <div className="bg-white dark:bg-dark-800 p-8 md:p-20 shadow-2xl rounded-sm">
                
                {/* Content Container */}
                <div className="max-w-3xl mx-auto">
                    {/* Excerpt / Lead */}
                    <div className="border-y border-gold-100 dark:border-gold-900/30 py-10 mb-12">
                        <p className="text-xl md:text-2xl text-center font-serif italic text-gold-600 dark:text-gold-500 leading-relaxed">
                            "{post.excerpt}"
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="text-gray-600 dark:text-gray-300 font-light text-lg leading-8 space-y-8">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>

                        <h3 className="text-2xl md:text-3xl font-serif font-medium text-gray-900 dark:text-white mt-12 mb-2 tracking-wide">
                            The Inspiration
                        </h3>
                        
                        <p>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>

                        <figure className="my-14">
                            <img src={post.image} alt="Detail view" className="w-full h-auto rounded-sm shadow-lg" />
                            <figcaption className="text-center text-xs uppercase tracking-widest text-gray-400 mt-4">Captured during our recent preparation session</figcaption>
                        </figure>

                        <h3 className="text-2xl md:text-3xl font-serif font-medium text-gray-900 dark:text-white mt-12 mb-2 tracking-wide">
                            Crafting the Experience
                        </h3>

                        <p>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                        </p>

                        <ul className="list-disc pl-5 space-y-4 my-8 marker:text-gold-500">
                            <li className="pl-2">Sustainable local ingredients sourced directly from artisan farmers.</li>
                            <li className="pl-2">Traditional culinary techniques blended with modern artistic flair.</li>
                            <li className="pl-2">Uncompromising attention to sensory detail and presentation.</li>
                        </ul>

                        <p>
                             Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
                        </p>
                    </div>
                </div>

                {/* Share & Tags */}
                <div className="mt-16 pt-10 border-t border-gray-100 dark:border-dark-700 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex gap-2">
                        {['Culinary', 'Experience', 'Behind The Scenes'].map(tag => (
                            <span key={tag} className="text-xs font-bold uppercase tracking-wider bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-300 px-4 py-2 rounded-sm hover:bg-gold-500 hover:text-white transition-colors cursor-default">{tag}</span>
                        ))}
                    </div>
                    <div className="flex gap-6 items-center">
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Share Article</span>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>
                </div>
           </div>

           <div className="mt-16 text-center pb-8">
               <Link to="/journal" className="inline-flex items-center gap-3 text-gold-600 dark:text-gold-500 font-bold uppercase tracking-[0.2em] text-sm hover:gap-6 transition-all group">
                   <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" /> Back to Journal
               </Link>
           </div>
       </div>
    </article>
  );
};

export default BlogPost;
