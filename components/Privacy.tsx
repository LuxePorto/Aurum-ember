
import React from 'react';

const Privacy: React.FC = () => {
  return (
    <section className="pt-32 pb-24 bg-stone-50 dark:bg-dark-900 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-12 text-center">
            <span className="text-gold-500 font-bold uppercase tracking-[0.2em] text-xs">Legal</span>
            <h1 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 dark:text-white mt-4">Privacy Policy</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-4">Last Updated: October 2024</p>
        </div>

        <div className="bg-white dark:bg-dark-800 p-8 md:p-12 shadow-xl prose prose-stone dark:prose-invert max-w-none">
          <p className="lead text-lg text-gray-600 dark:text-gray-300">
            At Aurum & Ember, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or dine with us.
          </p>

          <h3 className="text-2xl font-serif text-gray-900 dark:text-white mt-8 mb-4">1. Information We Collect</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            We collect information that you provide directly to us, such as when you make a reservation, sign up for our newsletter, or contact us. This may include:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-6 space-y-2">
            <li>Name and contact information (email, phone number)</li>
            <li>Reservation details (date, time, party size, dietary restrictions)</li>
            <li>Payment information for deposits or events</li>
            <li>Communications and feedback</li>
          </ul>

          <h3 className="text-2xl font-serif text-gray-900 dark:text-white mt-8 mb-4">2. How We Use Your Information</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            We use the information we collect to provide and improve our services, including:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-6 space-y-2">
            <li>Processing reservations and managing bookings</li>
            <li>Sending reservation confirmations and reminders</li>
            <li>Responding to your inquiries and comments</li>
            <li>Sending marketing communications (if you have opted in)</li>
            <li>Improving our website and dining experience</li>
          </ul>

          <h3 className="text-2xl font-serif text-gray-900 dark:text-white mt-8 mb-4">3. Data Security</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the Internet is 100% secure.
          </p>

          <h3 className="text-2xl font-serif text-gray-900 dark:text-white mt-8 mb-4">4. Third-Party Services</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            We may use third-party service providers to assist with reservations (e.g., OpenTable, Resy) or payment processing. These providers have their own privacy policies, and we encourage you to review them.
          </p>

          <h3 className="text-2xl font-serif text-gray-900 dark:text-white mt-8 mb-4">5. Contact Us</h3>
          <p className="text-gray-600 dark:text-gray-400">
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@aurumember.com" className="text-gold-500 hover:underline">privacy@aurumember.com</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
