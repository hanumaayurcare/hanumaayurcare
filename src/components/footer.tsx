
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a3c2f] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#f2d29b]">Hanuma Ayur Care</h2>
            <p className="text-green-100/70 text-sm leading-relaxed">
              Authentic Ayurveda meets modern science. We are dedicated to bringing you high-quality, GMP-certified natural products for holistic wellness.
            </p>
            <div className="flex gap-4">
               <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#f2d29b] hover:text-[#1a3c2f] transition-colors"><Facebook size={18} /></a>
               <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#f2d29b] hover:text-[#1a3c2f] transition-colors"><Instagram size={18} /></a>
               <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#f2d29b] hover:text-[#1a3c2f] transition-colors"><Twitter size={18} /></a>
               <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#f2d29b] hover:text-[#1a3c2f] transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#f2d29b]">Quick Links</h3>
            <ul className="space-y-3 text-sm text-green-100/70">
              <li><Link href="/" className="hover:text-white hover:translate-x-1 transition-all inline-block">Home</Link></li>
              <li><Link href="/about" className="hover:text-white hover:translate-x-1 transition-all inline-block">About Us</Link></li>
              <li><Link href="/products" className="hover:text-white hover:translate-x-1 transition-all inline-block">Products</Link></li>
              <li><Link href="/manufacturing" className="hover:text-white hover:translate-x-1 transition-all inline-block">Manufacturing</Link></li>
              <li><Link href="/services" className="hover:text-white hover:translate-x-1 transition-all inline-block">Services (B2B)</Link></li>
              <li><Link href="/rnd" className="hover:text-white hover:translate-x-1 transition-all inline-block">R&D</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#f2d29b]">Resources</h3>
            <ul className="space-y-3 text-sm text-green-100/70">
              <li><Link href="/knowledge" className="hover:text-white hover:translate-x-1 transition-all inline-block">Knowledge Center</Link></li>
              <li><Link href="/certifications" className="hover:text-white hover:translate-x-1 transition-all inline-block">Certifications</Link></li>
              <li><a href="https://hospital.hanumaayurcare.com" target="_blank" rel="noreferrer" className="hover:text-white hover:translate-x-1 transition-all inline-block flex items-center gap-1">Hospital <span className="text-[10px]">↗</span></a></li>
              <li><a href="https://pharmacy.hanumaayurcare.com" target="_blank" rel="noreferrer" className="hover:text-white hover:translate-x-1 transition-all inline-block flex items-center gap-1">Pharmacy Store <span className="text-[10px]">↗</span></a></li>
              <li><Link href="/contact" className="hover:text-white hover:translate-x-1 transition-all inline-block">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#f2d29b]">Contact Us</h3>
            <ul className="space-y-4 text-sm text-green-100/70">
              <li className="flex items-start gap-3">
                 <MapPin className="w-5 h-5 flex-shrink-0 text-[#f2d29b]" />
                 <span>Hanuma Ayur Care Pvt Ltd,<br/>Plot 123, Industrial Area,<br/>Kerala - 682001</span>
              </li>
              <li className="flex items-center gap-3">
                 <Phone className="w-5 h-5 flex-shrink-0 text-[#f2d29b]" />
                 <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                 <Mail className="w-5 h-5 flex-shrink-0 text-[#f2d29b]" />
                 <span>info@hanumaayurcare.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-800/50 pt-8 mt-8 text-center text-xs text-green-100/50 flex flex-col md:flex-row justify-between items-center gap-4">
           <p>&copy; {currentYear} Hanuma Ayur Care Pvt Ltd. All rights reserved.</p>
           <div className="flex gap-6">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <Link href="/admin" className="hover:text-white opacity-50">Admin</Link>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;