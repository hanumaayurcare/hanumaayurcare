"use client";

import { useState } from 'react';
import { Mail, MapPin, Phone, Clock, Linkedin, Youtube, MessageCircle, Send, Building2, User } from 'lucide-react';

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<'general' | 'b2b'>('general');

  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <div className="relative bg-[#0d3b1f] py-24 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/hero/contact-bg.jpg')] bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 z-10 text-center">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6 backdrop-blur-sm">
               <MessageCircle className="w-4 h-4" />
               <span>Get in Touch</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Contact Us</h1>
            <p className="text-xl max-w-2xl mx-auto text-green-100/90 leading-relaxed">
               Whether you represent a brand looking for manufacturing partners or are a patient seeking care, we are here to help.
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Contact Info & Map */}
              <div>
                  <h2 className="text-3xl font-bold text-green-950 mb-8">Reach Our HQ</h2>
                  
                  <div className="space-y-8 mb-12">
                      <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center shrink-0 text-green-700">
                              <MapPin className="w-6 h-6" />
                          </div>
                          <div>
                              <h3 className="font-bold text-lg text-gray-900 mb-1">Head Office & Plant</h3>
                              <p className="text-gray-600 leading-relaxed">
                                  Hanuma Ayur Care,<br />
                                  Industrial Area, Plot No. 45-B,<br />
                                  Madhya Pradesh, India - 452001
                              </p>
                          </div>
                      </div>

                      <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center shrink-0 text-green-700">
                              <Phone className="w-6 h-6" />
                          </div>
                          <div>
                              <h3 className="font-bold text-lg text-gray-900 mb-1">Phone</h3>
                              <p className="text-gray-600 mb-1">+91 98765 43210 (General)</p>
                              <p className="text-gray-600">+91 91234 56789 (B2B Sales)</p>
                          </div>
                      </div>

                      <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center shrink-0 text-green-700">
                              <Mail className="w-6 h-6" />
                          </div>
                          <div>
                              <h3 className="font-bold text-lg text-gray-900 mb-1">Email</h3>
                              <p className="text-gray-600 mb-1">info@hanumaayurcare.com</p>
                              <p className="text-gray-600">sales@hanumaayurcare.com</p>
                          </div>
                      </div>

                      <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center shrink-0 text-green-700">
                              <Clock className="w-6 h-6" />
                          </div>
                          <div>
                              <h3 className="font-bold text-lg text-gray-900 mb-1">Business Hours</h3>
                              <p className="text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM</p>
                          </div>
                      </div>
                  </div>

                  {/* Social Links */}
                  <div className="mb-12">
                      <h3 className="font-bold text-lg text-gray-900 mb-4">Connect With Us</h3>
                      <div className="flex gap-4">
                          <a href="#" className="w-12 h-12 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors">
                              <Linkedin className="w-6 h-6" />
                          </a>
                          <a href="#" className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center hover:bg-red-100 transition-colors">
                              <Youtube className="w-6 h-6" />
                          </a>
                          <a href="#" className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center hover:bg-green-100 transition-colors">
                              <MessageCircle className="w-6 h-6" />
                          </a>
                      </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-4">
                      <button className="flex-1 bg-green-900 text-white font-bold py-4 rounded-xl hover:bg-green-800 transition-colors shadow-lg">
                          Schedule Plant Visit
                      </button>
                      <button className="flex-1 bg-white border border-green-900 text-green-900 font-bold py-4 rounded-xl hover:bg-green-50 transition-colors">
                          Join Partner Network
                      </button>
                  </div>
              </div>

              {/* Enquiry Form */}
              <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-xl">
                  <div className="flex mb-8 bg-gray-100 p-1 rounded-xl">
                      <button 
                          onClick={() => setActiveTab('general')}
                          className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${activeTab === 'general' ? 'bg-white shadow text-green-900' : 'text-gray-500 hover:text-green-700'}`}
                      >
                          General Enquiry
                      </button>
                      <button 
                          onClick={() => setActiveTab('b2b')}
                          className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${activeTab === 'b2b' ? 'bg-white shadow text-green-900' : 'text-gray-500 hover:text-green-700'}`}
                      >
                          B2B / Manufacturing
                      </button>
                  </div>

                  {activeTab === 'general' ? (
                      <form className="space-y-6">
                          <div className="grid grid-cols-2 gap-4">
                              <div>
                                  <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border-transparent focus:bg-white focus:border-green-500 focus:ring-0 transition-colors" placeholder="John" />
                              </div>
                              <div>
                                  <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border-transparent focus:bg-white focus:border-green-500 focus:ring-0 transition-colors" placeholder="Doe" />
                              </div>
                          </div>
                          <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                              <input type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border-transparent focus:bg-white focus:border-green-500 focus:ring-0 transition-colors" placeholder="john@example.com" />
                          </div>
                          <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                              <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-gray-50 border-transparent focus:bg-white focus:border-green-500 focus:ring-0 transition-colors" placeholder="How can we help you?"></textarea>
                          </div>
                          <button type="button" className="w-full bg-[#f2d29b] text-green-950 font-bold py-4 rounded-xl hover:bg-[#e6c18a] transition-colors flex items-center justify-center gap-2">
                              Send Message <Send className="w-4 h-4" />
                          </button>
                      </form>
                  ) : (
                      <form className="space-y-6">
                           <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
                              <div className="relative">
                                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                  <input type="text" className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-50 border-transparent focus:bg-white focus:border-green-500 focus:ring-0 transition-colors" placeholder="Your Company" />
                              </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                              <div>
                                  <label className="block text-sm font-semibold text-gray-700 mb-2">Contact Person</label>
                                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border-transparent focus:bg-white focus:border-green-500 focus:ring-0 transition-colors" placeholder="Name" />
                              </div>
                              <div>
                                  <label className="block text-sm font-semibold text-gray-700 mb-2">Designation</label>
                                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border-transparent focus:bg-white focus:border-green-500 focus:ring-0 transition-colors" placeholder="Job Title" />
                              </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                              <div>
                                  <label className="block text-sm font-semibold text-gray-700 mb-2">Interested Services</label>
                                  <select className="w-full px-4 py-3 rounded-lg bg-gray-50 border-transparent focus:bg-white focus:border-green-500 focus:ring-0 transition-colors">
                                      <option>Private Label</option>
                                      <option>Third Party Mfg</option>
                                      <option>Raw Materials</option>
                                  </select>
                              </div>
                              <div>
                                  <label className="block text-sm font-semibold text-gray-700 mb-2">Est. Quantity</label>
                                  <select className="w-full px-4 py-3 rounded-lg bg-gray-50 border-transparent focus:bg-white focus:border-green-500 focus:ring-0 transition-colors">
                                      <option>&lt; 1,000 Units</option>
                                      <option>1,000 - 5,000</option>
                                      <option>5,000 - 10,000</option>
                                      <option>10,000+</option>
                                  </select>
                              </div>
                          </div>
                          <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">Project Details</label>
                              <textarea rows={3} className="w-full px-4 py-3 rounded-lg bg-gray-50 border-transparent focus:bg-white focus:border-green-500 focus:ring-0 transition-colors" placeholder="Tell us about your requirements (Dosage form, target market, etc.)"></textarea>
                          </div>
                          <button type="button" className="w-full bg-green-900 text-white font-bold py-4 rounded-xl hover:bg-green-800 transition-colors flex items-center justify-center gap-2">
                              Request Quotation <Send className="w-4 h-4" />
                          </button>
                      </form>
                  )}
              </div>
          </div>
          
          {/* Map Section */}
          <div className="mt-20 rounded-3xl overflow-hidden h-96 bg-gray-200 border border-gray-100 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Embed Google Map here. Using placeholder image for now */}
               <div className="w-full h-full bg-[url('/hero/map-placeholder.jpg')] bg-cover bg-center flex items-center justify-center">
                   <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full text-green-900 font-bold shadow-lg">
                       Google Map Integration
                   </div>
               </div>
          </div>

      </div>
    </div>
  );
}
