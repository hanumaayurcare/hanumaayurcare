import Link from 'next/link';
import { FaLeaf, FaFlask, FaRecycle } from 'react-icons/fa';

const Bestsellers = () => {
  const bestsellers = [
    {
      name: 'Ayurvedic Herbal Oil',
      image: '/images/product1.jpg',
      description: 'A blend of ancient herbs for total body rejuvenation.',
      link: '/product/ayurvedic-herbal-oil',
    },
    {
      name: 'Herbal Tea Blend',
      image: '/images/product2.jpg',
      description: 'A soothing tea blend to promote relaxation and balance.',
      link: '/product/herbal-tea-blend',
    },
    {
      name: 'Natural Skin Serum',
      image: '/images/product3.jpg',
      description: 'Revitalize your skin with the purest natural ingredients.',
      link: '/product/natural-skin-serum',
    },
    {
      name: 'Detoxifying Powder',
      image: '/images/product4.jpg',
      description: 'A natural detox solution for your body and mind.',
      link: '/product/detoxifying-powder',
    },
  ];

  return (
    <div className="relative overflow-hidden">

      {/* Floating Leaves */}
      <svg className="absolute top-20 left-10 w-12 h-12 opacity-20 animate-float hidden md:block" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C9 5 5 9 2 12c3 3 7 7 10 10 3-3 7-7 10-10-3-3-7-7-10-10z" fill="#6fbf73" />
      </svg>
      <svg className="absolute top-10 right-16 w-10 h-10 opacity-10 animate-float delay-200 hidden md:block" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C9 5 5 9 2 12c3 3 7 7 10 10 3-3 7-7 10-10-3-3-7-7-10-10z" fill="#a3d9a5" />
      </svg>

      {/* Decorative Side Vines */}
      <svg className="absolute top-32 left-0 w-24 h-64 opacity-10 hidden lg:block" viewBox="0 0 100 100" fill="none">
        <path d="M0 100 C20 60, 20 40, 0 0" stroke="#91c788" strokeWidth="4" fill="none" strokeLinecap="round" />
      </svg>
      <svg className="absolute bottom-16 right-0 w-24 h-64 opacity-10 hidden lg:block" viewBox="0 0 100 100" fill="none">
        <path d="M100 0 C80 40, 80 60, 100 100" stroke="#a3d9a5" strokeWidth="4" fill="none" strokeLinecap="round" />
      </svg>

      {/* Gradient Top Decoration */}
      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-green-100 to-transparent z-0" />

      {/* Section */}
      <section className="py-24 bg-white relative z-10">
        {/* Inline SVG Background Pattern */}
        <div className="absolute inset-0 z-0">
          <svg className="w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="leaves" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M10 0 C10 10, 0 10, 0 20" stroke="#7fbf7f" strokeWidth="1" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#leaves)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-xs uppercase tracking-widest text-green-700 font-semibold mb-2">
              Featured Products
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Bestsellers
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {bestsellers.map((product, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-green-100"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h4>
                <p className="text-gray-600 text-base text-center mb-4">{product.description}</p>
                <Link href={product.link} className="inline-block bg-[#6b4f29] text-white font-medium py-2 px-6 rounded-lg shadow-md hover:bg-[#5a4224] transition-all duration-300 transform hover:scale-105">
                  View Product →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/products">
              <span className="inline-block text-[#6b4f29] font-medium hover:underline underline-offset-4 transition-all">
                Explore All Products →
              </span>
            </Link>
          </div>
        </div>

        {/* Bottom Vine */}
        <svg className="absolute bottom-0 left-0 w-full h-16" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,100 C25,50 75,50 100,100 Z" fill="#f0fdf4" />
        </svg>
      </section>
    </div>
  );
};

export default Bestsellers;
