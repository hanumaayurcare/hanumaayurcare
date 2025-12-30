'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const blogPosts = [
  {
    title: 'The Healing Power of Ayurveda: An Introduction',
    excerpt: 'Learn about the fundamentals of Ayurveda and how it can transform your health and well-being.',
    link: '/blog/healing-power-of-ayurveda',
    date: 'April 15, 2025',
    image: '/images/blog1.jpg',
  },
  {
    title: '5 Benefits of Herbal Teas for Your Health',
    excerpt: 'Discover the top benefits of herbal teas, from digestion improvement to stress relief.',
    link: '/blog/benefits-of-herbal-teas',
    date: 'April 10, 2025',
    image: '/images/blog2.jpg',
  },
  {
    title: 'Detoxify Your Body Naturally with Ayurveda',
    excerpt: 'Explore how natural detox methods from Ayurvedic traditions can support your body’s natural healing processes.',
    link: '/blog/detoxify-with-ayurveda',
    date: 'April 5, 2025',
    image: '/images/blog3.jpg',
  },
  {
    title: 'Top 5 Ayurvedic Herbs You Should Know About',
    excerpt: 'A deep dive into some of the most powerful herbs used in Ayurveda for better health.',
    link: '/blog/top-ayurvedic-herbs',
    date: 'April 1, 2025',
    image: '/images/blog4.jpg',
  },
  {
    title: 'Ayurvedic Foods for a Healthy Gut',
    excerpt: 'Incorporate Ayurvedic foods into your diet to improve gut health and overall digestion.',
    link: '/blog/ayurvedic-foods-for-healthy-gut',
    date: 'March 28, 2025',
    image: '/images/blog5.jpg',
  },
  {
    title: 'The Science Behind Ashwagandha',
    excerpt: 'Learn about the amazing benefits of Ashwagandha, the ancient herb known for reducing stress and boosting energy.',
    link: '/blog/science-behind-ashwagandha',
    date: 'March 25, 2025',
    image: '/images/blog6.jpg',
  },
];

const LatestNews = () => {
  return (
    <section className="bg-[#f9fefb] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-xs uppercase tracking-widest text-green-700 font-semibold mb-2">
            Latest News
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Recent Articles & Blog Posts
          </h3>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          loop
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 3,
            },
            1600: {
              slidesPerView: 3,
            },
          }}
        >
          {blogPosts.map((post, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h4>
                <p className="text-gray-600 text-base mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <Link href={post.link} className="text-[#6b4f29] font-medium hover:underline underline-offset-4">
                    Read More →
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LatestNews;
