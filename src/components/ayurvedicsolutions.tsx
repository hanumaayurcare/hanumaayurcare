import Link from 'next/link';
import { FaLeaf } from 'react-icons/fa';

const solutions = [
    {
      title: 'Stress & Anxiety',
      description: 'Soothe the mind and relax the body with calming herbs and adaptogens.',
      product: {
        name: 'Herbal Tea Blend',
        link: '/product/herbal-tea-blend',
        image: '/images/product2.jpg',
      },
    },
    {
      title: 'Joint & Muscle Pain',
      description: 'Natural relief for inflammation and stiffness using traditional Ayurvedic oils.',
      product: {
        name: 'Ayurvedic Herbal Oil',
        link: '/product/ayurvedic-herbal-oil',
        image: '/images/product1.jpg',
      },
    },
    {
      title: 'Skin Health',
      description: 'Nourish and heal your skin from within using pure botanical serums.',
      product: {
        name: 'Natural Skin Serum',
        link: '/product/natural-skin-serum',
        image: '/images/product3.jpg',
      },
    },
    {
      title: 'Detox & Digestion',
      description: 'Cleanse your body and improve digestion with balanced herbal formulas.',
      product: {
        name: 'Detoxifying Powder',
        link: '/product/detoxifying-powder',
        image: '/images/product4.jpg',
      },
    },
    {
      title: 'Immune Support',
      description: 'Boost your immunity naturally with time-tested herbs and antioxidants.',
      product: {
        name: 'Immunity Booster Tonic',
        link: '/product/immunity-booster-tonic',
        image: '/images/product5.jpg',
      },
    },
    {
      title: 'Hair Fall & Scalp Care',
      description: 'Strengthen roots and nourish your scalp with Ayurvedic hair oils.',
      product: {
        name: 'Revitalizing Hair Oil',
        link: '/product/revitalizing-hair-oil',
        image: '/images/product6.jpg',
      },
    },
    {
      title: 'Energy & Vitality',
      description: 'Reignite your natural energy with powerful Ayurvedic rejuvenators.',
      product: {
        name: 'Ashwagandha Energy Capsules',
        link: '/product/ashwagandha-energy-capsules',
        image: '/images/product7.jpg',
      },
    },
    {
      title: 'Sleep Issues',
      description: 'Promote restful sleep with soothing herbal blends and adaptogens.',
      product: {
        name: 'Sleep Harmony Drops',
        link: '/product/sleep-harmony-drops',
        image: '/images/product8.jpg',
      },
    },
  ];
  

  const AyurvedicSolutions = () => {
    return (
      <section className="relative py-24 bg-gradient-to-b from-[#f9fefb] to-[#ffffff]">
        {/* Background Leaf Icons (Decorative) */}
        <FaLeaf className="absolute top-10 left-10 text-green-100 text-7xl rotate-45 hidden lg:block animate-pulse-slow" />
        <FaLeaf className="absolute bottom-10 right-10 text-green-200 text-5xl -rotate-12 hidden md:block animate-float" />
  
        <div className="max-w-7xl mx-auto px-6 z-10 relative">
          <div className="text-center mb-20">
            <h2 className="text-xs uppercase tracking-widest text-green-600 font-semibold mb-2">
              Ayurvedic Guidance
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Solutions for Common Health Concerns
            </h3>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Discover ancient Ayurvedic remedies tailored to your unique wellness goals.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {solutions.map((item, index) => (
              <div
                key={index}
                className="flex bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-green-50 transition-all duration-300"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-28 h-28 md:w-36 md:h-36 object-cover rounded-xl flex-shrink-0 mr-6"
                />
                <div className="flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-semibold text-green-800 mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                  <Link
                    href={item.product.link}
                    className="mt-3 text-[#6b4f29] text-sm font-medium hover:underline underline-offset-4"
                  >
                    Try {item.product.name} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        {/* Bottom Wave Decoration */}
        <svg className="absolute bottom-0 left-0 w-full h-16" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,100 C25,50 75,50 100,100 Z" fill="#f0fdf4" />
        </svg>
      </section>
    );
  };
  
  export default AyurvedicSolutions;