'use client';
import { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle email input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Example: Submit email to an API or email service provider
    if (email) {
      setIsSubmitted(true);
      // You can add your email service submission logic here.
      console.log('Email submitted:', email);
    }
  };

  return (
    <section className="w-full bg-[#fffefb] py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-xs uppercase tracking-widest text-green-700 font-semibold mb-2">
          Stay Updated
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Subscribe to Our Newsletter
        </h3>
        <p className="text-gray-600 mb-8">
          Get the latest news, updates, and promotions directly to your inbox.
        </p>

        {/* Newsletter Sign-up Form */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-lg">
            <input
              type="email"
              value={email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="w-full p-4 mb-4 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#6b4f29] text-white py-3 rounded-lg font-semibold hover:bg-[#5a4224] transition duration-300"
            >
              Subscribe Now
            </button>
          </form>
        ) : (
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-lg mx-auto">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Thank You for Subscribing!</h4>
            <p className="text-gray-600">
              You’ve successfully subscribed to our newsletter. Expect updates soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsletterSignup;
