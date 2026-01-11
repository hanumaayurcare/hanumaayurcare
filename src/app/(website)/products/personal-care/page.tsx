"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  category: string;
  tags: string[];
  description: string;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface Review {
  id: number;
  text: string;
  author: string;
  location: string;
  rating: number;
  product: string;
  avatar: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

interface ReviewCardProps {
  review: Review;
}

interface FAQItemProps {
  faq: FAQ;
  isOpen: boolean;
  toggle: () => void;
}

// Product data
const products = [
  { 
    id: 1, 
    name: 'Ashwagandha',
    price: 20,
    rating: 4.8,
    reviews: 124,
    category: 'herbs',
    tags: ['stress-relief', 'adaptogen', 'sleep'],
    description: 'A powerful herb for stress relief and improved vitality.',
    image: '/images/products/ashwagandha.jpg'
  },
  { 
    id: 2, 
    name: 'Turmeric',
    price: 15, 
    rating: 4.9,
    reviews: 96,
    category: 'herbs',
    tags: ['anti-inflammatory', 'antioxidant', 'joint-health'],
    description: 'A natural anti-inflammatory spice with powerful healing properties.',
    image: '/images/products/turmeric.jpg'
  },
  { 
    id: 3, 
    name: 'Neem',
    price: 18, 
    rating: 4.7,
    reviews: 87,
    category: 'skincare',
    tags: ['skin-health', 'antibacterial', 'purifying'],
    description: 'Great for skin health with natural antibacterial properties.',
    image: '/images/products/neem.jpg'
  },
  { 
    id: 4, 
    name: 'Brahmi',
    price: 22, 
    rating: 4.6,
    reviews: 65,
    category: 'herbs',
    tags: ['brain-health', 'cognitive', 'memory'],
    description: 'Traditional herb known for enhancing cognitive function and memory.',
    image: '/images/products/brahmi.jpg'
  },
  { 
    id: 5, 
    name: 'Triphala',
    price: 19, 
    rating: 4.7,
    reviews: 103,
    category: 'supplements',
    tags: ['digestion', 'detox', 'wellness'],
    description: 'Ancient formula for digestive health and gentle detoxification.',
    image: '/images/products/triphala.jpg'
  },
  { 
    id: 6, 
    name: 'Shatavari',
    price: 24, 
    rating: 4.5,
    reviews: 78,
    category: 'herbs',
    tags: ['womens-health', 'hormonal-balance', 'vitality'],
    description: 'Rejuvenating herb that supports hormonal balance and vitality.',
    image: '/images/products/shatavari.jpg'
  }
];

// Benefits data
const benefits = [
  {
    icon: '/icons/balance.svg',
    title: 'Natural Balance',
    description: 'Ayurvedic products help restore your body\'s natural equilibrium.'
  },
  {
    icon: '/icons/wellness.svg',
    title: 'Holistic Wellness',
    description: 'Address the root cause rather than just symptoms for complete health.'
  },
  {
    icon: '/icons/sustainable.svg',
    title: 'Sustainable Sourcing',
    description: 'Ethically harvested ingredients that support the environment.'
  },
  {
    icon: '/icons/tradition.svg',
    title: 'Ancient Wisdom',
    description: 'Founded on 5,000 years of knowledge and traditional practices.'
  }
];

// Reviews data
const reviews = [
  {
    id: 1,
    text: "I've struggled with stress and poor sleep for years. Ashwagandha has been transformative - I feel more balanced and sleep better than I have in a decade.",
    author: "Sarah Johnson",
    location: "California",
    rating: 5,
    product: "Ashwagandha",
    avatar: "/images/avatars/sarah.jpg"
  },
  {
    id: 2,
    text: "Turmeric has been a game changer for my joint pain. After just three weeks, I noticed significant improvement in mobility and reduced inflammation.",
    author: "Michael Chen",
    location: "New York",
    rating: 5,
    product: "Turmeric",
    avatar: "/images/avatars/michael.jpg"
  },
  {
    id: 3,
    text: "The Neem face wash has completely transformed my skin. My acne cleared up within weeks, and my skin feels balanced for the first time in years.",
    author: "Priya Patel",
    location: "Texas",
    rating: 5,
    product: "Neem",
    avatar: "/images/avatars/priya.jpg"
  }
];

// FAQ data
const faqs = [
  {
    question: "What is Ayurveda?",
    answer: "Ayurveda is a 5,000-year-old system of natural healing that originated in India. It's based on the concept that health and wellness depend on a delicate balance between the mind, body, and spirit. The primary goal of Ayurveda is to promote good health rather than fight disease."
  },
  {
    question: "How do I know which Ayurvedic products are right for me?",
    answer: "Ayurvedic products are typically aligned with your dosha (body constitution). You can take our dosha quiz to determine yours, or schedule a consultation with our Ayurvedic practitioner for personalized recommendations."
  },
  {
    question: "Are your products organic?",
    answer: "Yes, all our herbs and ingredients are certified organic, sustainably harvested, and tested for purity. We work directly with farmers who follow traditional cultivation methods."
  },
  {
    question: "How do I use Ashwagandha?",
    answer: "Ashwagandha can be taken as a supplement (1-2 capsules daily) or as a powder mixed into warm milk, water, or smoothies (1/4-1/2 teaspoon). For best results, take consistently for at least 6-8 weeks."
  },
  {
    question: "Do your products have any side effects?",
    answer: "Our products are generally safe when used as directed. However, we recommend consulting with your healthcare provider before starting any new supplement, especially if you have existing health conditions or are pregnant/nursing."
  }
];

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-t from-amber-900/80 to-transparent z-10 transition-opacity duration-300 ${isHovered ? 'opacity-60' : 'opacity-0'}`} />
        <Image
          src={product.image || "/images/placeholder-product.jpg"}
          alt={product.name}
          fill
          className={`object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        
        {/* Quick actions overlay */}
        <div className={`absolute inset-0 z-20 flex items-center justify-center gap-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button 
            className="bg-white rounded-full p-3 shadow hover:bg-amber-50" 
            aria-label="View details"
          >
            <svg className="w-5 h-5 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
          <button 
            className="bg-white rounded-full p-3 shadow hover:bg-amber-50" 
            aria-label="Add to wishlist"
          >
            <svg className="w-5 h-5 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
        
        {/* Badge */}
        {product.id <= 3 && (
          <div className="absolute top-3 left-3 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
            Bestseller
          </div>
        )}
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-amber-900">{product.name}</h3>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
          </div>
        </div>
        
        <div className="flex items-center mb-3">
          <span className="text-xs text-gray-500">({product.reviews} reviews)</span>
          <span className="mx-2 text-gray-300">•</span>
          <span className="text-xs px-2 py-1 bg-amber-50 text-amber-800 rounded-full">{product.category}</span>
        </div>
        
        <p className="text-sm text-gray-600 mb-4">{product.description}</p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {product.tags.map(tag => (
            <span key={tag} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">{tag}</span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-amber-700">${product.price}</span>
          <button 
            onClick={() => onAddToCart(product)}
            className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={review.avatar || "/images/avatar-placeholder.jpg"}
            alt={review.author}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-amber-900">{review.author}</h4>
          <p className="text-sm text-gray-500">{review.location}</p>
        </div>
        <div className="ml-auto flex gap-1">
          {[...Array(5)].map((_, i) => (
            <svg 
              key={i} 
              className={`w-4 h-4 ${i < review.rating ? 'text-amber-500' : 'text-gray-300'}`} 
              fill="currentColor" 
              viewBox="0 0 20 20" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
      <p className="text-gray-700 italic mb-2">"{review.text}"</p>
      <p className="text-sm text-amber-600 font-medium">About {review.product}</p>
    </div>
  );
};

const FAQItem: React.FC<FAQItemProps> = ({ faq, isOpen, toggle }) => {
  return (
    <div className="border-b border-amber-100 last:border-b-0">
      <button
        className="w-full text-left py-4 focus:outline-none flex justify-between items-center"
        onClick={toggle}
      >
        <h3 className="text-lg font-medium text-amber-900">{faq.question}</h3>
        <svg
          className={`w-5 h-5 text-amber-700 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="pb-4 text-gray-600">{faq.answer}</p>
      </div>
    </div>
  );
};

const ProductsPage: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [openFAQ, setOpenFAQ] = useState<number>(0);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeTab, setActiveTab] = useState<string>('all');
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevCart.map(item => 
          item.id === product.id ? {...item, quantity: item.quantity + 1} : item
        );
      } else {
        return [...prevCart, {...product, quantity: 1}];
      }
    });
    
    setIsCartOpen(true);
    setTimeout(() => setIsCartOpen(false), 3000);
  };
  
  const filteredProducts = products
    .filter(product => {
      if (filterCategory === 'all') return true;
      return product.category === filterCategory;
    })
    .filter(product => {
      if (!searchTerm) return true;
      return product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
             product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
             product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return a.id - b.id; // Default to featured/id order
      }
    });
  
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      
      {/* Hero Section */}
      <div className="relative py-24">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/hero-ayurveda.jpg"
            alt="Ayurvedic Herbs and Ingredients"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-100/80 via-lime-100/60 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6">
              Ancient Wisdom for Modern Wellness
            </h1>
            <p className="text-xl text-amber-800 mb-8">
              Discover our curated selection of authentic Ayurvedic products for balanced living and natural health.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-lime-600 text-white hover:bg-lime-700 px-8 py-3 rounded-full font-medium transition-colors">
                Shop Now
              </button>
              <button className="bg-transparent border-2 border-amber-600 text-amber-800 hover:bg-amber-50 px-8 py-3 rounded-full font-medium transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Benefits Section */}
      <div className="py-16 bg-gradient-to-br from-amber-50 via-lime-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">
            The Benefits of Ayurveda
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="text-center p-6 rounded-xl bg-gradient-to-br from-amber-50 to-white border border-amber-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-amber-100 rounded-full">
                  <Image src={benefit.icon} alt={benefit.title} width={40} height={40} />
                </div>
                <h3 className="text-xl font-semibold text-amber-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Featured Products Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-amber-900 mb-2">
                Explore Our Products
              </h2>
              <p className="text-gray-600">
                Discover our bestselling Ayurvedic products for holistic wellbeing
              </p>
            </div>
            
            <div className="mt-4 md:mt-0 flex flex-wrap gap-3">
              <button 
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'all' ? 'bg-amber-600 text-white' : 'bg-white text-amber-900 hover:bg-amber-100'}`}
                onClick={() => setActiveTab('all')}
              >
                All Products
              </button>
              <button 
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'bestsellers' ? 'bg-amber-600 text-white' : 'bg-white text-amber-900 hover:bg-amber-100'}`}
                onClick={() => setActiveTab('bestsellers')}
              >
                Bestsellers
              </button>
              <button 
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'new' ? 'bg-amber-600 text-white' : 'bg-white text-amber-900 hover:bg-amber-100'}`}
                onClick={() => setActiveTab('new')}
              >
                New Arrivals
              </button>
              <button 
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'offers' ? 'bg-amber-600 text-white' : 'bg-white text-amber-900 hover:bg-amber-100'}`}
                onClick={() => setActiveTab('offers')}
              >
                Special Offers
              </button>
            </div>
          </div>
          
          {/* Filters and Search */}
          <div className="bg-white rounded-xl shadow-sm p-4 mb-8">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                  <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  <option value="all">All Categories</option>
                  <option value="herbs">Herbs</option>
                  <option value="supplements">Supplements</option>
                  <option value="skincare">Skincare</option>
                </select>
                
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Products Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="h-64 bg-gray-200 animate-pulse" />
                  <div className="p-5">
                    <div className="h-6 w-2/3 bg-gray-200 animate-pulse mb-2" />
                    <div className="h-4 w-1/3 bg-gray-200 animate-pulse mb-3" />
                    <div className="h-4 w-full bg-gray-200 animate-pulse mb-2" />
                    <div className="h-4 w-5/6 bg-gray-200 animate-pulse mb-4" />
                    <div className="flex justify-between items-center">
                      <div className="h-6 w-16 bg-gray-200 animate-pulse" />
                      <div className="h-10 w-32 bg-gray-200 animate-pulse rounded-lg" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="bg-white rounded-xl shadow-md p-12 text-center">
              <svg className="w-16 h-16 text-amber-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">No products found</h3>
              <p className="text-gray-600 mb-4">
                We couldn't find any products matching your criteria.
              </p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setFilterCategory('all');
                  setSortBy('featured');
                }}
                className="text-amber-600 font-medium hover:text-amber-700"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
              ))}
            </div>
          )}
          
          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <div className="inline-flex bg-white rounded-lg shadow-sm">
              <button className="px-4 py-2 border-r border-gray-200 text-amber-700 hover:bg-amber-50">
                Previous
              </button>
              <button className="px-4 py-2 bg-amber-600 text-white font-medium">
                1
              </button>
              <button className="px-4 py-2 border-r border-gray-200 text-amber-700 hover:bg-amber-50">
                2
              </button>
              <button className="px-4 py-2 border-r border-gray-200 text-amber-700 hover:bg-amber-50">
                3
              </button>
              <button className="px-4 py-2 text-amber-700 hover:bg-amber-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Collection */}
      <div className="py-16 bg-gradient-to-br from-amber-50 via-lime-50 to-white">
        <div className="container mx-auto px-4">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="/images/featured-collection-bg.jpg"
                alt="Ayurvedic Collection"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 via-amber-800/80 to-transparent" />
            </div>
            
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 md:p-12">
              <div className="text-white">
                <span className="inline-block px-3 py-1 bg-amber-600 text-white text-xs font-semibold rounded-full mb-4">
                  Featured Collection
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Seasonal Immunity Boosters
                </h2>
                <p className="text-amber-100 mb-6">
                  Strengthen your natural defenses with our curated collection of time-tested Ayurvedic immunity boosters.
                  Perfect for seasonal transitions and maintaining optimal wellness year-round.
                </p>
                <button className="bg-white text-amber-900 hover:bg-amber-50 px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2">
                  Explore Collection
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg shadow-lg p-4 transform hover:scale-105 transition-transform">
                  <div className="relative h-40 mb-3">
                    <Image
                      src="/images/products/immunity-1.jpg"
                      alt="Immunity Product"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <h3 className="text-amber-900 font-medium mb-1">Tulsi Formula</h3>
                  <p className="text-sm text-gray-600">Holy Basil supplement</p>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="font-bold text-amber-700">$24</span>
                    <button className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">
                      Add
                    </button>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-4 transform hover:scale-105 transition-transform">
                  <div className="relative h-40 mb-3">
                    <Image
                      src="/images/products/immunity-2.jpg"
                      alt="Immunity Product"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <h3 className="text-amber-900 font-medium mb-1">Chyawanprash</h3>
                  <p className="text-sm text-gray-600">Traditional herbal jam</p>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="font-bold text-amber-700">$28</span>
                    <button className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">
                      Add
                    </button>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-4 transform hover:scale-105 transition-transform">
                  <div className="relative h-40 mb-3">
                    <Image
                      src="/images/products/immunity-3.jpg"
                      alt="Immunity Product"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <h3 className="text-amber-900 font-medium mb-1">Giloy Extract</h3>
                  <p className="text-sm text-gray-600">Immune system support</p>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="font-bold text-amber-700">$18</span>
                    <button className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">
                      Add
                    </button>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-lg p-4 transform hover:scale-105 transition-transform">
                  <div className="relative h-40 mb-3">
                    <Image
                      src="/images/products/immunity-4.jpg"
                      alt="Immunity Product"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <h3 className="text-amber-900 font-medium mb-1">Amla Powder</h3>
                  <p className="text-sm text-gray-600">Vitamin C boost</p>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="font-bold text-amber-700">$15</span>
                    <button className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Reviews Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover how our Ayurvedic products have helped transform the lives of our customers and contributed to their wellness journey.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="bg-transparent border-2 border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2">
              See All Reviews
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="py-16 bg-gradient-to-br from-amber-50 via-lime-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Find answers to common questions about our products, Ayurveda, and how to incorporate these practices into your daily routine.
          </p>
          
          <div className="max-w-3xl mx-auto bg-amber-50 rounded-xl p-6 shadow-sm">
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index} 
                faq={faq} 
                isOpen={openFAQ === index} 
                toggle={() => setOpenFAQ(openFAQ === index ? -1 : index)} 
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Have more questions? We're here to help.</p>
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </div>
      
      {/* Newsletter Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-amber-50 via-lime-50 to-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-amber-900 mb-4">
                  Join Our Wellness Journey
                </h2>
                <p className="text-gray-600 mb-6">
                  Subscribe to our newsletter and receive exclusive offers, Ayurvedic tips, and early access to new products.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                  <button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-6 py-3 rounded-lg transition-colors">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                </p>
              </div>
              
              <div className="relative h-64 lg:h-auto rounded-xl overflow-hidden">
                <Image
                  src="/images/newsletter-bg.jpg"
                  alt="Newsletter"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sustainability Section */}
      <div className="py-16 bg-gradient-to-br from-amber-50 via-lime-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full mb-4">
                Our Commitment
              </span>
              <h2 className="text-3xl font-bold text-amber-900 mb-4">
                Sustainable Practices for a Healthier Planet
              </h2>
              <p className="text-gray-600 mb-6">
                We believe in honoring the ancient wisdom of Ayurveda while protecting the planet. Our commitment to sustainability spans every aspect of our business:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Ethically sourced ingredients from sustainable farms</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Eco-friendly packaging made from recycled materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Carbon-neutral shipping options</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Support for regenerative farming practices</span>
                </li>
              </ul>
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2">
                Learn More About Our Practices
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
                <Image
                  src="/images/sustainability.jpg"
                  alt="Sustainable Practices"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
