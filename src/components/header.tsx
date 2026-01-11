"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ShoppingCart, User, Search, ExternalLink } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  dropdown?: { label: string; href: string }[];
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const pathname = usePathname();

  // Navigation items structure based on new sitemap
  const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    { 
      label: 'About', 
      href: '/about',
      dropdown: [
        { label: 'Company Story', href: '/about/company-story' },
        { label: 'Heritage', href: '/about/heritage' },
        { label: 'Facilities', href: '/about/facilities' },
        { label: 'Team', href: '/about/team' },
        { label: 'Standards', href: '/about/standards' },
      ]
    },
    { label: 'Products', href: '/products' },
    { label: 'Manufacturing', href: '/manufacturing' },
    { label: 'Services', href: '/services' },
    { label: 'R&D', href: '/rnd' },
    { 
      label: 'Knowledge', 
      href: '/knowledge',
      dropdown: [
        { label: 'Blog', href: '/knowledge' },
        { label: 'Certifications', href: '/certifications' },
      ]
    },
    { label: 'Contact', href: '/contact' },
  ];

  // Handle scroll effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Check if a nav item is active
  const isActive = (path: string): boolean => {
    if (path === '/' && pathname !== '/') return false;
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'shadow-md bg-white/95 backdrop-blur-sm' : 'bg-white/95 backdrop-blur-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="h-10 w-10 relative transition-transform group-hover:scale-105">
                <Image 
                  src="/placeholder-logo.png" 
                  alt="HAC Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-primary-800 font-bold text-lg leading-tight tracking-tight">HANUMA AYUR CARE</h1>
                <span className="text-amber-600 text-[0.65rem] tracking-[0.2em] font-medium">ANCIENT WISDOM, MODERN SCIENCE</span>
              </div>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex lg:items-center">
            <div className="flex items-center space-x-1">
              {navItems.map((item, index) => (
                <div key={index} className="relative group/nav">
                  <Link 
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md flex items-center gap-1
                      ${isActive(item.href) 
                        ? 'text-primary-700 bg-primary-50' 
                        : 'text-gray-600 hover:text-primary-700 hover:bg-gray-50'
                      }`}
                  >
                    {item.label}
                    {item.dropdown && (
                      <svg className="w-3 h-3 opacity-50 block duration-200 group-hover/nav:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    )}
                  </Link>
                  
                  {/* Dropdown menu */}
                  {item.dropdown && (
                    <div className="absolute left-0 mt-0 w-56 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-200 z-50 pt-2">
                       <div className="bg-white rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 overflow-hidden">
                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                          <Link 
                            key={dropdownIndex}
                            href={dropdownItem.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700 border-l-2 border-transparent hover:border-primary-500 transition-all"
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right side items (External Actions) */}
          <div className="hidden lg:flex lg:items-center gap-3 pl-4">
             {/* Hospital Link */}
             <a 
              href="https://hospital.hanumaayurcare.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary-700 bg-white border border-primary-200 rounded-full hover:bg-primary-50 hover:border-primary-300 transition-colors"
            >
              <span>Hospital</span>
              <ExternalLink className="w-3 h-3 opacity-50" />
            </a>

            {/* Shop Link */}
            <a 
              href="https://pharmacy.hanumaayurcare.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 text-sm font-bold text-white bg-primary-700 rounded-full hover:bg-primary-800 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Shop Now</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-primary-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden bg-white border-t border-gray-100 absolute w-full transition-all duration-300 ease-in-out shadow-xl ${isMenuOpen ? 'max-h-[80vh] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 py-6 space-y-4">
          <div className="flex flex-col space-y-2">
            {navItems.map((item, index) => (
              <div key={index}>
                <Link 
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg text-base font-medium ${isActive(item.href) ? 'text-primary-700 bg-primary-50' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <div className="pl-8 mt-1 space-y-1 border-l-2 border-gray-100 ml-4">
                    {item.dropdown.map((dropdownItem, dropdownIndex) => (
                      <Link
                        key={dropdownIndex}
                        href={dropdownItem.href}
                        className="block px-4 py-2 rounded-md text-sm text-gray-600 hover:text-primary-700"
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="pt-6 border-t border-gray-100 flex flex-col gap-3">
             <a 
              href="https://hospital.hanumaayurcare.com" 
              target="_blank"
              rel="noopener noreferrer" 
              className="w-full text-center py-3 rounded-lg border border-primary-200 text-primary-700 font-medium hover:bg-primary-50"
            >
              Visit Hospital
            </a>
            <a 
              href="https://pharmacy.hanumaayurcare.com"
              target="_blank"
              rel="noopener noreferrer" 
              className="w-full text-center py-3 rounded-lg bg-primary-700 text-white font-bold hover:bg-primary-800 flex justify-center items-center gap-2"
            >
              <ShoppingCart className="w-4 h-4" />
              Shop Online
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;