import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/src/components/ui/button';
import { ArrowRight } from 'lucide-react';

const AyurvedicHeroBanner = () => {
  return (
    <div className="relative w-full overflow-hidden bg-[#f3f6f3]">
      {/* Background leaf pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="leaf-pattern" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="rotate(45)">
            <path d="M0,0 L10,10 C15,15 15,5 10,0" fill="none" stroke="currentColor" strokeWidth="1" className="text-green-300" />
          </pattern>
          <rect width="100" height="100" fill="url(#leaf-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 py-12 md:py-20 lg:py-28">
        {/* Decorative line with icon */}
        <div className="flex items-center mb-6 md:mb-10 justify-center lg:justify-start">
          <div className="h-px bg-green-700 w-12 opacity-30"></div>
          <div className="mx-4 text-green-600">
             <span className="font-semibold tracking-[0.2em] text-sm uppercase">Ayurvedic Manufacturing & Wellness</span>
          </div>
          <div className="h-px bg-green-700 w-12 opacity-30"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-950 mb-6 leading-tight">
              Authenticity Meets <span className="text-[#c58f51] block mt-2">Modern GMP</span>
            </h1>
            <p className="text-lg md:text-xl text-green-800/80 mb-8 max-w-2xl mx-auto lg:mx-0">
               Empowering brands with high-quality Ayurvedic manufacturing, blending ancient wisdom with industry 4.0 standards.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center lg:justify-start">
              <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all">
                <Link href="/manufacturing">
                  Enquire for Manufacturing
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-2 border-primary text-primary hover:bg-primary/5 hover:text-primary transition-all">
                <a href="https://pharmacy.hanumaayurcare.com" target="_blank" rel="noopener noreferrer">
                  Shop Products
                </a>
              </Button>
            </div>

            {/* Quick Highlights / Trust Indicators */}
            <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0">
               <div className="flex items-center gap-3 bg-white/50 p-3 rounded-lg border border-green-100">
                  <div className="text-[#c58f51]">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <div className="text-left">
                     <p className="text-xs text-green-600 font-semibold uppercase">Experience</p>
                     <p className="text-sm font-bold text-green-900">100+ Years</p>
                  </div>
               </div>
               <div className="flex items-center gap-3 bg-white/50 p-3 rounded-lg border border-green-100">
                  <div className="text-[#c58f51]">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                  </div>
                  <div className="text-left">
                     <p className="text-xs text-green-600 font-semibold uppercase">Capacity</p>
                     <p className="text-sm font-bold text-green-900">High Volume</p>
                  </div>
               </div>
               <div className="flex items-center gap-3 bg-white/50 p-3 rounded-lg border border-green-100">
                  <div className="text-[#c58f51]">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <div className="text-left">
                     <p className="text-xs text-green-600 font-semibold uppercase">Quality</p>
                     <p className="text-sm font-bold text-green-900">GMP & ISO</p>
                  </div>
               </div>
               <div className="flex items-center gap-3 bg-white/50 p-3 rounded-lg border border-green-100">
                  <div className="text-[#c58f51]">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <div className="text-left">
                     <p className="text-xs text-green-600 font-semibold uppercase">Reach</p>
                     <p className="text-sm font-bold text-green-900">Global Export</p>
                  </div>
               </div>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-2 justify-center lg:justify-start text-xs font-dm font-medium text-green-700/60 uppercase tracking-wide">
               <span className="bg-green-100/50 px-3 py-1 rounded-full">Tablets</span>
               <span className="bg-green-100/50 px-3 py-1 rounded-full">Capsules</span>
               <span className="bg-green-100/50 px-3 py-1 rounded-full">Syrups</span>
               <span className="bg-green-100/50 px-3 py-1 rounded-full">Oils</span>
               <span className="bg-green-100/50 px-3 py-1 rounded-full">Extracts</span>
            </div>
          </div>

          {/* Right Image Content */}
          <div className="relative h-full hidden lg:block">
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-green-900/20 md:rotate-3 transition-transform hover:rotate-0 duration-700">
              <Image
                src="/hero/ayurveda-ingredients.webp" // Ensure this image exists or use a placehold
                alt="Ayurvedic Manufacturing"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                priority
              />
               <div className="absolute inset-0 bg-gradient-to-t from-green-950/60 to-transparent"></div>
               <div className="absolute bottom-6 left-6 text-white text-left">
                  <p className="font-bold text-xl">Legacy of Excellence</p>
                  <p className="text-sm opacity-90">Combining tradition with technology.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AyurvedicHeroBanner;
