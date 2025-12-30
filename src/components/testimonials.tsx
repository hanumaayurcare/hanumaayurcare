'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaQuoteLeft } from 'react-icons/fa';

// Define the type for each testimonial
interface Testimonial {
  name: string;
  location: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Anjali M.',
    location: 'Mumbai, India',
    quote: 'The Ayurvedic Herbal Oil completely changed my daily routine. My joint pain has eased, and I feel so much more relaxed.',
    image: '/images/user1.jpg',
  },
  {
    name: 'Rajiv S.',
    location: 'Bangalore, India',
    quote: 'I was struggling with stress and poor sleep. After using the Sleep Harmony Drops, I finally wake up refreshed.',
    image: '/images/user2.jpg',
  },
  {
    name: 'Priya K.',
    location: 'Delhi, India',
    quote: "The Herbal Tea Blend is my go-to after a long day. It's calming, aromatic, and truly works.",
    image: '/images/user3.jpg',
  },
  {
    name: 'Nikhil T.',
    location: 'Pune, India',
    quote: 'Amazing products! The Detoxifying Powder really helped me feel lighter and more energized throughout the day.',
    image: '/images/user4.jpg',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-[#fffefb] py-24 relative">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-xs uppercase tracking-widest text-green-700 font-semibold mb-2">
          Customer Stories
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Real People. Real Healing.
        </h3>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          autoplay={{ delay: 6000 }}
          pagination={{ clickable: true }}
          loop
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-8 rounded-3xl shadow-xl max-w-2xl mx-auto">
                <FaQuoteLeft className="text-green-400 text-3xl mb-4" />
                <p className="text-gray-700 text-lg italic mb-6">"{item.quote}"</p>
                <div className="flex flex-col items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-full mb-2 border-2 border-green-100"
                  />
                  <p className="font-semibold text-gray-800">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.location}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
