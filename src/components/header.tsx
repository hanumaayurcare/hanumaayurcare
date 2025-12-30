"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface NavItem {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const pathname = usePathname();

  // Navigation items structure
  const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    { 
      label: 'Products', 
      href: '/products',
      dropdown: [
        { label: 'Health Supplements', href: '/products/health-supplements' },
        { label: 'Personal Care', href: '/products/personal-care' },
        { label: 'Digestive Health', href: '/products/digestive-health' },
        { label: 'Immunity Products', href: '/products/immunity-boosters' },
        { label: 'Specialized Formulations', href: '/products/specialized-formulations' },
        { label: 'View All Products', href: '/products' },
      ]
    },
    { 
      label: 'About Us', 
      href: '/about-us',
      dropdown: [
        { label: 'Our Story', href: '/about-us/company-story' },
        { label: 'Ayurvedic Heritage', href: '/about-us/heritage' },
        { label: 'Manufacturing Excellence', href: '/about-us/facilities' },
        { label: 'Leadership Team', href: '/about-us/team' },
        { label: 'Quality Standards', href: '/about-us/standards' },
      ]
    },
    { 
      label: 'Ayurveda', 
      href: '/ayurveda',
      dropdown: [
        { label: 'Ayurvedic Principles', href: '/ayurveda/principles' },
        { label: 'Herb Directory', href: '/ayurveda/herbs' },
        { label: 'Health Conditions', href: '/ayurveda/health' },
      ]
    },
    { label: 'Research', href: '/research' },
    { label: 'Where to Buy', href: '/store-locator' },
    { label: 'Contact Us', href: '/contact' },
  ];

  // Handle scroll effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes (App Router version)
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Check if a nav item is active
  const isActive = (path: string): boolean => {
    if (path === '/' && pathname !== '/') return false;
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'shadow-md bg-white' : 'bg-white bg-opacity-95'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <div className="h-10 w-10 mr-3 relative">
                <Image 
                  src="/placeholder-logo.png" 
                  alt="HAC Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-primary-600 font-bold text-lg md:text-xl">HANUMA AYUR CARE</h1>
                <span className="text-accent-600 text-xs tracking-wider hidden sm:block">ANCIENT WISDOM, MODERN WELLNESS</span>
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-dark-600 hover:text-primary-600 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-6">
                <span 
                  className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`} 
                />
                <span 
                  className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} 
                />
                <span 
                  className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`} 
                />
              </div>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-1 lg:space-x-4">
            <div className="hidden md:flex md:items-center">
              {navItems.map((item, index) => (
                <div key={index} className="relative group">
                  <Link 
                    href={item.href}
                    className={`px-3 py-4 text-sm lg:text-base font-medium border-b-2 ${isActive(item.href) ? 'text-primary-600 border-primary-600' : 'text-dark-600 border-transparent hover:text-primary-600'} ${item.label === 'Contact Us' ? 'ml-2 bg-primary-600 hover:bg-accent-600 text-white px-4 py-2 rounded-md border-none' : ''}`}
                  >
                    {item.label}
                    {item.dropdown && (
                      <span className="ml-1 inline-block">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="12" 
                          height="12" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </span>
                    )}
                  </Link>
                  
                  {/* Dropdown menu */}
                  {item.dropdown && (
                    <div className="absolute left-0 mt-0 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="pt-2">
                        <div className="bg-white border-t-2 border-primary-600 rounded-md shadow-lg py-1">
                          {item.dropdown.map((dropdownItem, dropdownIndex) => (
                            <Link 
                              key={dropdownIndex}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-dark-600 hover:bg-light-100 hover:text-primary-600"
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right side items */}
          <div className="hidden md:flex md:items-center">
            <Link href="/search" className="px-3 py-2 text-dark-600 hover:text-primary-600">
              <span className="sr-only">Search</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Link>
            <Link href="/account" className="px-3 py-2 text-dark-600 hover:text-primary-600">
              <span className="sr-only">Account</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
            <Link href="/cart" className="pl-3 pr-1 py-2 text-dark-600 hover:text-primary-600">
              <span className="sr-only">Cart</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {navItems.map((item, index) => (
            <div key={index}>
              <Link 
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(item.href) ? 'text-primary-600 bg-light-100' : 'text-dark-600 hover:bg-light-100 hover:text-primary-600'} ${item.label === 'Contact Us' ? 'bg-primary-600 text-white hover:bg-accent-600' : ''}`}
              >
                {item.label}
              </Link>
              
              {/* Mobile dropdown */}
              {item.dropdown && (
                <div className="pl-4 mt-1 space-y-1">
                  {item.dropdown.map((dropdownItem, dropdownIndex) => (
                    <Link
                      key={dropdownIndex}
                      href={dropdownItem.href}
                      className="block px-3 py-2 rounded-md text-sm font-medium text-dark-600 hover:bg-light-100 hover:text-primary-600"
                    >
                      {dropdownItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          {/* Mobile secondary menu */}
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-3">
              <Link href="/search" className="px-3 py-2 text-dark-600 hover:text-primary-600">
                <span>Search</span>
              </Link>
              <Link href="/account" className="px-3 py-2 text-dark-600 hover:text-primary-600">
                <span>Account</span>
              </Link>
              <Link href="/cart" className="px-3 py-2 text-dark-600 hover:text-primary-600">
                <span>Cart</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;