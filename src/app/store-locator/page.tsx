'use client';

import { motion } from 'framer-motion';
import { FaAmazon, FaShoppingCart, FaShippingFast, FaHeadset } from 'react-icons/fa';
import { SiFlipkart } from 'react-icons/si';
import { MdSecurity, MdStorefront } from 'react-icons/md';
import Image from 'next/image';

const platforms = [
  {
    id: 1,
    name: 'Our Website',
    icon: <MdStorefront className="text-4xl text-amber-600" />,
    description: 'Purchase directly from us for the best prices and exclusive offers',
    benefits: [
      'Exclusive discounts and offers',
      'Direct customer support',
      'Authentic products guarantee',
      'Loyalty program rewards'
    ],
    link: '#',
    bgColor: 'bg-amber-50',
    buttonColor: 'bg-amber-600 hover:bg-amber-700',
    badgeColor: 'bg-amber-100 text-amber-800'
  },
  {
    id: 2,
    name: 'Amazon',
    icon: <FaAmazon className="text-4xl text-[#FF9900]" />,
    description: 'Find our products on Amazon with Prime delivery benefits',
    benefits: [
      'Fast Prime delivery',
      'Easy returns',
      'Customer reviews',
      'Secure payments'
    ],
    link: 'https://www.amazon.in',
    bgColor: 'bg-[#FFEFD9]',
    buttonColor: 'bg-[#FF9900] hover:bg-[#FF8800]',
    badgeColor: 'bg-[#FFF3E0] text-[#E65100]'
  },
  {
    id: 3,
    name: 'Flipkart',
    icon: <SiFlipkart className="text-4xl text-[#2874F0]" />,
    description: 'Shop on Flipkart for great deals and fast delivery',
    benefits: [
      'Flipkart assured quality',
      'Multiple payment options',
      'Plus member benefits',
      'Nationwide delivery'
    ],
    link: 'https://www.flipkart.com',
    bgColor: 'bg-[#F1F5FF]',
    buttonColor: 'bg-[#2874F0] hover:bg-[#1A5BC3]',
    badgeColor: 'bg-[#E3EAFC] text-[#2874F0]'
  },
  {
    id: 4,
    name: 'Snapdeal',
    icon: <Image src="/images/snapdeal-logo.png" alt="Snapdeal" width={40} height={40} />,
    description: 'Find competitive prices on Snapdeal',
    benefits: [
      'Competitive pricing',
      'Wide reach across India',
      'Easy returns policy',
      'Multiple payment options'
    ],
    link: 'https://www.snapdeal.com',
    bgColor: 'bg-[#FFF1F0]',
    buttonColor: 'bg-[#E40046] hover:bg-[#CC0033]',
    badgeColor: 'bg-[#FFE5E5] text-[#E40046]'
  }
];

const features = [
  {
    icon: <MdSecurity className="text-3xl text-gray-600" />,
    title: 'Authentic Products',
    description: 'All products are genuine and quality tested'
  },
  {
    icon: <FaShippingFast className="text-3xl text-gray-600" />,
    title: 'Fast Delivery',
    description: 'Quick delivery across India through our partners'
  },
  {
    icon: <FaHeadset className="text-3xl text-gray-600" />,
    title: 'Customer Support',
    description: '24/7 support for all your queries and concerns'
  },
  {
    icon: <FaShoppingCart className="text-3xl text-gray-600" />,
    title: 'Secure Shopping',
    description: 'Safe and secure payment options available'
  }
];

const WhereToBuyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
       <div className="relative h-[12rem] bg-gradient-to-br from-amber-100 via-lime-100 to-white overflow-hidden">
        <Image
          src="/images/store-front.jpg"
          alt="Where to Buy"
          fill
          priority
          className="object-cover opacity-60"
        />

        {/* Soft Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('/images/leaf-pattern.svg')] bg-repeat opacity-10 pointer-events-none"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-amber-900 sm:text-6xl mb-4 drop-shadow-md">
              Where to Buy
            </h1>
            <p className="text-xl sm:text-2xl text-emerald-800 leading-relaxed drop-shadow-sm">
              Choose your preferred way to purchase our authentic Ayurvedic products
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow border border-neutral-100"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${platform.bgColor} rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-neutral-100`}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      {platform.icon}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">{platform.name}</h2>
                      <p className="text-gray-600">{platform.description}</p>
                    </div>
                  </div>
                  {platform.name === 'Our Website' ? (
                    <span className={platform.badgeColor + " px-3 py-1 rounded-full text-sm"}>
                      Official Store
                    </span>
                  ) : (
                    <span className="bg-neutral-100 text-neutral-600 px-3 py-1 rounded-full text-sm">
                      Authorized Partner
                    </span>
                  )}
                </div>

                <div className="space-y-3 mb-6">
                  {platform.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center w-full px-6 py-3 text-white ${platform.buttonColor} rounded-lg font-medium transition-colors`}
                >
                  Shop Now
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <motion.div
          className="mt-12 bg-neutral-50 rounded-xl p-6 md:p-8 border border-neutral-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Important Information</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              • All products are available for purchase through our official website and authorized partners.
            </p>
            <p>
              • Prices may vary across platforms due to different promotional offers and platform-specific discounts.
            </p>
            <p>
              • For bulk orders and wholesale inquiries, please contact us directly through our website.
            </p>
            <p>
              • Be cautious of unauthorized sellers. Always verify the authenticity of the seller before making a purchase.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhereToBuyPage; 