import Image from 'next/image';
import Link from 'next/link';

const AyurvedicEnhancedHero = () => {
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

      <div className="container mx-auto px-4 relative z-10 py-4">
        {/* Decorative line with icon */}
        <div className="flex items-center mb-6 md:mb-10">
          <div className="h-px bg-green-700 flex-grow opacity-20"></div>
          <div className="mx-4 text-green-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </div>
          <div className="h-px bg-green-700 flex-grow opacity-20"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Text Content */}
          <div>
            <h2 className="text-green-700 text-lg md:text-xl font-medium mb-3">Trusted for Generations</h2>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-green-900 mb-6 leading-tight">
              Harmonizing <span className="text-[#6b4f29]">Nature's Wisdom</span> With Modern Science
            </h1>
            <p className="text-lg md:text-xl text-green-700 mb-8 max-w-2xl">
              Discover the authentic Ayurvedic experience — crafted with care from nature’s finest ingredients and backed by centuries of traditional knowledge.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/about">
                <span className="group inline-flex items-center justify-center bg-[#3f6b4c] hover:bg-[#345b3f] text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                  Our Heritage
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
              <Link href="/products">
                <span className="inline-flex items-center justify-center border-2 border-[#3f6b4c] hover:bg-[#e8f1ea] text-[#3f6b4c] font-medium py-3 px-8 rounded-lg transition-all duration-300">
                  Explore Products
                </span>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-green-900">
              <div className="flex items-center">
                <div className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#c58f51]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="font-medium">GMP Certified</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#c58f51]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <span className="font-medium">100% Natural</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#c58f51]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-medium">Since 1920</span>
              </div>
            </div>
          </div>

          {/* Right Image Content */}
          <div className="relative h-full">
            <div className="relative h-64 md:h-80 lg:h-96 w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/hero/ayurveda-ingredients.webp"
                alt="Authentic Ayurvedic Ingredients"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Highlight Section */}
      <div className="bg-[#3f6b4c] text-white mt-8 py-6 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3">
              <div className="font-bold text-xl md:text-2xl text-[#f2d29b]">250+</div>
              <div className="text-green-100">Herbal Products</div>
            </div>
            <div className="p-3">
              <div className="font-bold text-xl md:text-2xl text-[#f2d29b]">50+</div>
              <div className="text-green-100">Formulations</div>
            </div>
            <div className="p-3">
              <div className="font-bold text-xl md:text-2xl text-[#f2d29b]">10M+</div>
              <div className="text-green-100">Satisfied Customers</div>
            </div>
            <div className="p-3">
              <div className="font-bold text-xl md:text-2xl text-[#f2d29b]">10+</div>
              <div className="text-green-100">Countries Served</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AyurvedicEnhancedHero;
