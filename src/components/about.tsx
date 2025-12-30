import Link from 'next/link';

const AboutSnapshotHAC = () => {
  return (
    <section className="w-full relative py-20 bg-[#f8f3e7] opacity-95">
      {/* Full-width subtle mild background with 80% overlay */}
      <div className="absolute inset-0  z-0"></div>

      <div className="w-full mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-xs uppercase tracking-widest text-gray-700 font-semibold mb-2">
            HAC - LEADING HERBAL AYURVEDIC COMPANY
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Explore the World of HAC
          </h3>
        </div>

        <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto text-center leading-relaxed mb-10">
          Staying healthy is more than just physical well-being. It’s about living in balance with your body, mind, and spirit. 
          At HAC, we believe in making this journey to wellness accessible through our range of Ayurvedic products, 
          crafted with nature's finest ingredients and a deep respect for tradition.
        </p>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/about">
            <span className="inline-block bg-[#6b4f29] text-white font-medium py-3 px-8 rounded-lg shadow-md hover:bg-[#5a4224] hover:shadow-lg transition-all duration-300">
              Discover Our Full Story →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSnapshotHAC;
