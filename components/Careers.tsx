
import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const POSITIONS = [
    {
        title: "Sous Chef",
        department: "Kitchen",
        type: "Full-time",
        description: "Assist the Executive Chef in managing the kitchen operations, menu creation, and maintaining high culinary standards."
    },
    {
        title: "Senior Line Cook",
        department: "Kitchen",
        type: "Full-time",
        description: "Execute complex dishes with precision during service, manage station inventory, and mentor junior staff."
    },
    {
        title: "Sommelier",
        department: "Service",
        type: "Full-time",
        description: "Curate our award-winning wine list and guide guests through pairings to enhance their dining experience."
    },
    {
        title: "Front of House Host",
        department: "Service",
        type: "Part-time",
        description: "The first point of contact for our guests. Manage reservations, seating, and ensure a warm welcome."
    }
];

const Careers: React.FC = () => {
  return (
    <section className="pt-24 pb-24 bg-stone-50 dark:bg-dark-900 min-h-screen">
      {/* Hero */}
      <div className="bg-dark-900 text-white py-20 relative overflow-hidden mb-20">
         <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=1920&q=80" 
               alt="Kitchen Team" 
               className="w-full h-full object-cover opacity-20"
             />
         </div>
         <div className="container mx-auto px-6 relative z-10 text-center">
            <span className="text-gold-500 font-bold uppercase tracking-[0.2em] text-xs">Join Our Team</span>
            <h1 className="text-4xl md:text-6xl font-serif font-medium mt-4">Pursue Excellence</h1>
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto font-light text-lg">
                We are always looking for passionate, dedicated individuals who share our commitment to hospitality and culinary artistry.
            </p>
         </div>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        {/* Culture Section */}
        <div className="grid md:grid-cols-2 gap-16 mb-24 items-center">
            <div>
                <h2 className="text-3xl font-serif font-medium text-gray-900 dark:text-white mb-6">Our Culture</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                    At Aurum & Ember, we believe that our staff is our greatest asset. We foster a supportive, creative environment where learning and growth are encouraged. We offer competitive compensation, comprehensive benefits, and opportunities for advancement.
                </p>
                <div className="space-y-4">
                    {['Competitive Salary & Tips', 'Health & Dental Insurance', 'Staff Meals & Dining Discounts', 'Ongoing Wine & Culinary Training'].map((benefit, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-600 dark:text-gold-500">
                                <Check size={12} strokeWidth={3} />
                            </div>
                            <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{benefit}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative">
                <img src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=800&q=80" alt="Team Meeting" className="shadow-xl rounded-sm w-full" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl -z-10"></div>
            </div>
        </div>

        {/* Open Positions */}
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-serif font-medium text-gray-900 dark:text-white">Current Openings</h2>
            </div>

            <div className="space-y-6">
                {POSITIONS.map((job, index) => (
                    <div key={index} className="bg-white dark:bg-dark-800 p-8 shadow-md border-l-4 border-transparent hover:border-gold-500 transition-all group">
                        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4">
                            <div>
                                <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white group-hover:text-gold-500 transition-colors">{job.title}</h3>
                                <div className="flex gap-4 text-xs uppercase tracking-wider text-gray-400 mt-1">
                                    <span>{job.department}</span>
                                    <span>•</span>
                                    <span>{job.type}</span>
                                </div>
                            </div>
                            <Link to="/contact" className="inline-flex items-center gap-2 bg-gray-100 dark:bg-dark-700 hover:bg-gold-500 hover:text-white px-6 py-3 text-xs font-bold uppercase tracking-widest transition-colors rounded-sm">
                                Apply Now <ArrowRight size={14} />
                            </Link>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm font-light">
                            {job.description}
                        </p>
                    </div>
                ))}
            </div>
            
            <div className="mt-12 text-center">
                <p className="text-gray-500 dark:text-gray-400 mb-4">Don't see your role? We are always accepting general applications.</p>
                <a href="mailto:careers@aurumember.com" className="text-gold-600 dark:text-gold-500 font-bold hover:underline">Email your resume to careers@aurumember.com</a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
