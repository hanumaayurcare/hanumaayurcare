import Link from 'next/link';
import { FaLeaf, FaFlask, FaRecycle } from 'react-icons/fa'; // Example of icon imports

const WhatWeDoSnapshot = () => {
  return (
    <section className="relative py-20 ">
      {/* Full-width subtle background with geometric shapes and overlay */}
      <div className="absolute inset-0 opacity-40 z-0">
        <div className="absolute inset-0 bg-pattern w-full h-full opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-xs uppercase tracking-widest text-gray-600 font-semibold mb-2">
            WHAT WE DO
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ancient Ayurveda Meets Modern Science
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
          {/* Icon and Text Blocks */}
          <div className="flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white p-8 rounded-lg shadow-md border border-gray-300">
            <FaLeaf className="text-green-600 text-6xl mb-4 transition-all duration-300 hover:text-green-700" />
            <h4 className="text-xl font-semibold text-gray-800">Ancient Ayurveda</h4>
            <p className="text-gray-700 text-base md:text-lg mt-2">
              Our roots are grounded in the ancient wisdom of Ayurveda, bringing nature’s finest ingredients to you.
            </p>
          </div>

          <div className="flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white p-8 rounded-lg shadow-md border border-gray-300">
            <FaFlask className="text-blue-600 text-6xl mb-4 transition-all duration-300 hover:text-blue-700" />
            <h4 className="text-xl font-semibold text-gray-800">Modern Science</h4>
            <p className="text-gray-700 text-base md:text-lg mt-2">
              Combining the best of science to enhance the benefits of Ayurvedic practices for your wellness.
            </p>
          </div>

          <div className="flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white p-8 rounded-lg shadow-md border border-gray-300">
            <FaRecycle className="text-yellow-600 text-6xl mb-4 transition-all duration-300 hover:text-yellow-700" />
            <h4 className="text-xl font-semibold text-gray-800">Sustainable Practices</h4>
            <p className="text-gray-700 text-base md:text-lg mt-2">
              We prioritize eco-friendly sourcing and sustainable methods in every product we create.
            </p>
          </div>
        </div>

        <p className="text-gray-700 text-base md:text-lg max-w-4xl mx-auto text-center leading-relaxed mb-10">
          Gathering the choicest, natural ingredients is important. But you also need to know how to blend them to create a quality health product. 
          That’s why we rely on the traditional knowledge of Ayurveda and the expertise of modern-day science. And quite honestly, 
          it’s the very foundation of everything we’ve built ever since.
        </p>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/explore-ayurveda">
            <span className="inline-block bg-[#6b4f29] text-white font-medium py-3 px-8 rounded-lg shadow-xl hover:bg-[#5a4224] hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Explore Ayurveda →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSnapshot;
