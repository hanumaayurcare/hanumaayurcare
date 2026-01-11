import Image from "next/image";
import AyurvedicHeroBanner from "@/src/components/hero";
import Testimonials from '@/src/components/testimonials';
import { Button } from '@/src/components/ui/button';


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfdfc]">
      <AyurvedicHeroBanner />
      
      {/* Key Segments Section - Quick Highlights */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-green-950 mb-4">Our Key Segments</h2>
               <div className="w-20 h-1 bg-[#c58f51] mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-50 hover:border-[#c58f51/30] transition-colors">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-700">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                  </div>
                  <h3 className="text-xl font-bold text-green-900 mb-3">Third-party Manufacturing</h3>
                  <p className="text-gray-600 mb-4">Comprehensive end-to-end manufacturing solutions for your Ayurvedic brand with low MOQs.</p>
                  <a href="/services" className="text-[#c58f51] font-semibold hover:tracking-wide transition-all">Learn More →</a>
               </div>

               <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-50 hover:border-[#c58f51/30] transition-colors">
                  <div className="w-12 h-12 bg-green-100 mx-auto rounded-full flex items-center justify-center mb-6 text-green-700">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
                  </div>
                  <h3 className="text-xl font-bold text-green-900 mb-3">Private Label</h3>
                  <p className="text-gray-600 mb-4">Launch your own line of products with our library of 50+ standardized formulations.</p>
                  <a href="/services" className="text-[#c58f51] font-semibold hover:tracking-wide transition-all">Explore Options →</a>
               </div>

               <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-50 hover:border-[#c58f51/30] transition-colors">
                  <div className="w-12 h-12 bg-green-100 mx-auto rounded-full flex items-center justify-center mb-6 text-green-700">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <h3 className="text-xl font-bold text-green-900 mb-3">Exports / OEM</h3>
                  <p className="text-gray-600 mb-4">International standard manufacturing with complete regulatory documentation support.</p>
                  <a href="/services" className="text-[#c58f51] font-semibold hover:tracking-wide transition-all">Global Reach →</a>
               </div>
            </div>
        </div>
      </section>

      {/* Featured Products / Categories Preview */}
      <section className="bg-[#f0f4f0] py-20 px-4">
        <div className="max-w-7xl mx-auto">

           <div className="flex flex-col md:flex-row justify-between items-end mb-12">
               <div>
                  <h2 className="text-3xl font-bold text-primary mb-2">Our Capabilities</h2>
                  <p className="text-primary/60 max-w-xl">From classical fermentations to modern standardized extracts, we cover the full spectrum of dosage forms.</p>
               </div>
               <Button asChild size="lg" className="hidden md:flex">
                 <a href="/products">View All Products</a>
               </Button>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
               {['Tablets', 'Capsules', 'Syrups', 'Oils', 'Powders', 'Avalehas'].map((item) => (
                  <div key={item} className="bg-white p-6 rounded-xl text-center hover:shadow-md transition-shadow cursor-pointer group">
                     <div className="w-16 h-16 bg-green-50 mx-auto rounded-full mb-4 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                        <span className="text-2xl">💊</span>
                     </div>
                     <h3 className="font-semibold text-green-900">{item}</h3>
                  </div>
               ))}
           </div>
           
           <div className="mt-8 text-center md:hidden">
              <a href="/products" className="bg-green-900 text-white px-6 py-3 rounded-full hover:bg-green-800 transition-colors w-full block">View All Products</a>
           </div>
        </div>
      </section>

      {/* Infrastructure Snapshot */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-green-950 mb-4">World-Class Infrastructure</h2>
             <p className="text-gray-600 max-w-2xl mx-auto">Our GMP-certified manufacturing units are equipped with state-of-the-art machinery to ensure precision and purity.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-96">
              <div className="md:col-span-2 relative rounded-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gray-200 animate-pulse"></div> {/* Placeholder for Mfg Plant */}
                  <div className="absolute inset-0 bg-black/40 flex items-end p-6 group-hover:bg-black/50 transition-colors">
                      <span className="text-white font-bold text-lg">Manufacturing Unit</span>
                  </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gray-300 animate-pulse"></div> {/* Placeholder for Lab */}
                   <div className="absolute inset-0 bg-black/40 flex items-end p-6 group-hover:bg-black/50 transition-colors">
                      <span className="text-white font-bold text-lg">QC Laboratory</span>
                  </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gray-400 animate-pulse"></div> {/* Placeholder for Packaging */}
                   <div className="absolute inset-0 bg-black/40 flex items-end p-6 group-hover:bg-black/50 transition-colors">
                      <span className="text-white font-bold text-lg">Packaging Line</span>
                  </div>
              </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />


    </div>
  );
}
