
import React from 'react';

const Terms: React.FC = () => {
  return (
    <section className="pt-32 pb-24 bg-stone-50 dark:bg-dark-900 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-12 text-center">
            <span className="text-gold-500 font-bold uppercase tracking-[0.2em] text-xs">Legal</span>
            <h1 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 dark:text-white mt-4">Terms of Service</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-4">Last Updated: October 2024</p>
        </div>

        <div className="bg-white dark:bg-dark-800 p-8 md:p-12 shadow-xl prose prose-stone dark:prose-invert max-w-none">
          <p className="lead text-lg text-gray-600 dark:text-gray-300">
            Welcome to Aurum & Ember. By accessing our website or visiting our restaurant, you agree to be bound by the following Terms of Service.
          </p>

          <h3 className="text-2xl font-serif text-gray-900 dark:text-white mt-8 mb-4">1. Reservations & Cancellations</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            We require a credit card to secure reservations for parties of 6 or more. Cancellations made less than 24 hours in advance may be subject to a cancellation fee of $50 per person.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            We hold tables for 15 minutes past the reservation time. If you are running late, please contact us immediately.
          </p>

          <h3 className="text-2xl font-serif text-gray-900 dark:text-white mt-8 mb-4">2. Gift Cards</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Gift cards are non-refundable and cannot be exchanged for cash. Lost or stolen cards will not be replaced. Gift cards do not expire.
          </p>

          <h3 className="text-2xl font-serif text-gray-900 dark:text-white mt-8 mb-4">3. Private Dining & Events</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Private dining events require a signed contract and a 50% deposit to secure the date. The remaining balance is due at the conclusion of the event. Specific terms regarding minimum spend and guest counts are detailed in the event contract.
          </p>

          <h3 className="text-2xl font-serif text-gray-900 dark:text-white mt-8 mb-4">4. Code of Conduct</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            We reserve the right to refuse service to anyone who engages in harassing, discriminatory, or disruptive behavior towards our staff or other guests.
          </p>

          <h3 className="text-2xl font-serif text-gray-900 dark:text-white mt-8 mb-4">5. Website Content</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            All content on this website, including text, images, and logos, is the property of Aurum & Ember and may not be used without prior written permission.
          </p>

          <h3 className="text-2xl font-serif text-gray-900 dark:text-white mt-8 mb-4">6. Liability</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Aurum & Ember is not liable for any personal items lost or stolen on the premises. Please keep your personal belongings with you at all times.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Terms;
