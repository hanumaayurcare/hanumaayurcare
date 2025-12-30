'use client';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: <FaFacebookF />, href: "https://facebook.com", label: "Facebook" },
    { icon: <FaInstagram />, href: "https://instagram.com", label: "Instagram" },
    { icon: <FaTwitter />, href: "https://twitter.com", label: "Twitter" },
    { icon: <FaLinkedinIn />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <FaYoutube />, href: "https://youtube.com", label: "YouTube" },
  ];

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const legalLinks = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/shipping", label: "Shipping Policy" },
    { href: "/refunds", label: "Refund Policy" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Columns Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12">
          {/* About Us Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-tight">About Us</h3>
            <p className="text-gray-400 leading-relaxed">
              We are dedicated to bringing you high-quality, natural Ayurvedic products for overall wellness and holistic health.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold tracking-tight mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold tracking-tight mb-4">Contact Us</h3>
            <address className="not-italic space-y-3">
              <p className="text-gray-400">
                <span className="block font-medium text-gray-300">Email:</span>
                <a href="mailto:support@yourstore.com" className="hover:text-amber-400 transition-colors duration-200">
                  support@yourstore.com
                </a>
              </p>
              <p className="text-gray-400">
                <span className="block font-medium text-gray-300">Phone:</span>
                <a href="tel:+11234567890" className="hover:text-amber-400 transition-colors duration-200">
                  +1 (123) 456-7890
                </a>
              </p>
              <p className="text-gray-400">
                <span className="block font-medium text-gray-300">Address:</span>
                123 Wellness Street, Ayurveda City, AC 12345
              </p>
            </address>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-bold tracking-tight mb-4">Follow Us</h3>
            <div className="flex flex-wrap gap-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.label}`}
                  className="text-gray-400 hover:text-amber-400 text-2xl transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div>
              <h4 className="font-medium text-gray-300 mb-3">Payment Methods</h4>
              <div className="flex gap-2">
                {['Visa', 'Mastercard', 'PayPal', 'ApplePay'].map((method) => (
                  <div 
                    key={method}
                    className="bg-gray-800 px-3 py-1 rounded text-xs font-medium text-gray-300"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section - Separate Row */}
        <div className="border-t border-b border-gray-800 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-6">
              Get the latest updates on our products, wellness tips, and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 justify-center">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 flex-grow max-w-md"
                aria-label="Email for newsletter subscription"
                required
              />
              <button 
                type="submit" 
                className="px-6 py-3 bg-amber-600 hover:bg-amber-700 rounded-lg font-medium transition-colors duration-200 whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              &copy; {currentYear} Ayurveda Wellness. All Rights Reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {legalLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className="text-sm text-gray-400 hover:text-amber-400 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-4 text-center text-xs text-gray-500">
            <p>Disclaimer: These statements have not been evaluated by the FDA. Our products are not intended to diagnose, treat, cure, or prevent any disease.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;