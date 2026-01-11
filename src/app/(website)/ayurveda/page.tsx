'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaLeaf, FaHeart, FaBrain, FaBalanceScale, FaYinYang } from 'react-icons/fa';
import { GiMedicines, GiHerbsBundle, GiSandsOfTime } from 'react-icons/gi';
import { MdOutlineWaterDrop, MdOutlineAir } from 'react-icons/md';
import { IoEarth, IoFlame } from 'react-icons/io5';

interface DoshaInfo {
  title: string;
  description: string;
  characteristics: string[];
  color: string;
  element: React.ReactElement;
  recommendations: {
    diet: string[];
    lifestyle: string[];
    herbs: string[];
  };
}

interface DoshaTypes {
  vata: DoshaInfo;
  pitta: DoshaInfo;
  kapha: DoshaInfo;
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const elementVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export default function AyurvedaPage() {
  const [activeDosha, setActiveDosha] = useState<keyof DoshaTypes>('vata');
  const [activeTab, setActiveTab] = useState<'characteristics' | 'recommendations'>('characteristics');
  const [isExploring, setIsExploring] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExploring(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const doshas: DoshaTypes = {
    vata: {
      title: 'Vata',
      description: 'Represents air and space elements. Associated with movement, creativity, and flexibility. When balanced, Vata promotes creativity and vitality. When imbalanced, it can cause anxiety and digestive issues.',
      characteristics: ['Light', 'Cold', 'Dry', 'Rough', 'Subtle', 'Mobile', 'Clear', 'Astringent'],
      color: 'from-amber-50 to-amber-100',
      element: <MdOutlineAir className="w-full h-full text-amber-600" />,
      recommendations: {
        diet: ['Warm, cooked foods', 'Nourishing soups and stews', 'Healthy fats like ghee and olive oil', 'Sweet, sour and salty tastes', 'Avoid cold/raw foods'],
        lifestyle: ['Regular routine', 'Gentle exercise like yoga', 'Warm oil massage', 'Meditation for grounding', 'Early bedtime'],
        herbs: ['Ashwagandha', 'Brahmi', 'Ginger', 'Cinnamon', 'Shatavari']
      }
    },
    pitta: {
      title: 'Pitta',
      description: 'Represents fire and water elements. Associated with transformation, metabolism, and intelligence. Balanced Pitta promotes digestion and understanding. Imbalanced Pitta can lead to inflammation and irritability.',
      characteristics: ['Hot', 'Sharp', 'Light', 'Liquid', 'Spreading', 'Oily', 'Pungent', 'Sour'],
      color: 'from-amber-50 via-lime-50 to-white',
      element: <IoFlame className="w-full h-full text-amber-600" />,
      recommendations: {
        diet: ['Cooling foods like cucumber', 'Sweet, bitter and astringent tastes', 'Moderate amounts of ghee', 'Avoid spicy/oily foods', 'Stay hydrated'],
        lifestyle: ['Avoid excessive heat/sun', 'Swimming or moonlit walks', 'Cooling pranayama', 'Moderate exercise', 'Relaxation techniques'],
        herbs: ['Aloe vera', 'Coriander', 'Sandalwood', 'Neem', 'Brahmi']
      }
    },
    kapha: {
      title: 'Kapha',
      description: 'Represents earth and water elements. Associated with structure, stability, and lubrication. Balanced Kapha provides strength and endurance. Imbalanced Kapha can lead to lethargy and congestion.',
      characteristics: ['Heavy', 'Slow', 'Cold', 'Oily', 'Smooth', 'Dense', 'Soft', 'Sweet'],
      color: 'from-amber-50 via-lime-50 to-white',
      element: <IoEarth className="w-full h-full text-amber-600" />,
      recommendations: {
        diet: ['Light, dry and warm foods', 'Pungent, bitter and astringent tastes', 'Honey and spices', 'Avoid dairy and sweets', 'Smaller portions'],
        lifestyle: ['Regular vigorous exercise', 'Early rising', 'Dry massage', 'Stimulating activities', 'Variety in routine'],
        herbs: ['Turmeric', 'Ginger', 'Tulsi', 'Pippali', 'Guggulu']
      }
    }
  };

  const seasonalPractices = [
    {
      season: 'Spring',
      focus: 'Detoxification',
      practices: ['Kapha-balancing diet', 'Dry brushing', 'Spicy herbs', 'Vigorous exercise', 'Panchakarma therapies']
    },
    {
      season: 'Summer',
      focus: 'Cooling',
      practices: ['Pitta-balancing diet', 'Moonlight walks', 'Cooling herbs', 'Swimming', 'Evening meditation']
    },
    {
      season: 'Autumn',
      focus: 'Grounding',
      practices: ['Vata-balancing diet', 'Oil massage', 'Warm spices', 'Gentle yoga', 'Regular routine']
    },
    {
      season: 'Winter',
      focus: 'Nourishment',
      practices: ['Warm, oily foods', 'Herbal teas', 'Restorative yoga', 'Adequate sleep', 'Moisturizing oils']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative py-24">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/ayurveda-hero.jpg"
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
              Discover our curated selection of authentic Ayurvedic wisdom for balanced living and natural health.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-lime-600 text-white hover:bg-lime-700 px-8 py-3 rounded-full font-medium transition-colors">
                Begin Your Journey
              </button>
              <button className="bg-transparent border-2 border-amber-600 text-amber-800 hover:bg-amber-50 px-8 py-3 rounded-full font-medium transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Principles Section */}
      <div className="py-16 bg-gradient-to-br from-amber-50 via-lime-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">
            Core Principles of Ayurveda
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaLeaf className="w-8 h-8" />,
                title: "Natural Healing",
                description: "Utilizing nature's wisdom through herbs, diet, and lifestyle",
                longDesc: "Ayurveda harnesses the healing power of plants, minerals and natural elements to restore balance without harmful side effects."
              },
              {
                icon: <FaBalanceScale className="w-8 h-8" />,
                title: "Balance of Doshas",
                description: "Maintaining harmony between the three fundamental energies",
                longDesc: "Health is achieved when Vata, Pitta and Kapha are in equilibrium according to your unique constitution (Prakriti)."
              },
              {
                icon: <FaHeart className="w-8 h-8" />,
                title: "Holistic Wellness",
                description: "Treating the whole person, not just symptoms",
                longDesc: "Ayurveda considers physical, mental, emotional and spiritual aspects as interconnected dimensions of health."
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="text-center p-6 rounded-xl bg-gradient-to-br from-amber-50 to-white border border-amber-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-amber-100 rounded-full">
                  <div className="text-amber-600">{item.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-amber-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Doshas Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-amber-900 mb-2">
                Understanding the Doshas
              </h2>
              <p className="text-gray-600">
                Your unique energy blueprint that governs all physical and mental processes
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3">
              <div className="sticky top-8">
                <div className="flex flex-col gap-4 mb-8">
                  {Object.entries(doshas).map(([key, dosha]) => (
                    <motion.button
                      key={key}
                      onClick={() => setActiveDosha(key as keyof DoshaTypes)}
                      className={`p-6 rounded-xl text-left transition-all ${
                        activeDosha === key as keyof DoshaTypes
                          ? `bg-gradient-to-r ${dosha.color} shadow-lg`
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <h3 className="text-xl font-semibold text-amber-900 mb-2">
                        {dosha.title}
                      </h3>
                      <p className="text-amber-800 text-sm">
                        {dosha.description}
                      </p>
                    </motion.button>
                  ))}
                </div>
                <div className="bg-amber-50 rounded-xl p-6">
                  <h4 className="font-semibold text-amber-900 mb-3">Take the Dosha Quiz</h4>
                  <p className="text-amber-800 text-sm mb-4">Discover your predominant dosha with our simple assessment</p>
                  <button className="w-full bg-lime-600 text-white hover:bg-lime-700 py-3 rounded-lg font-medium transition-all">
                    Start Quiz
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3">
              <motion.div
                key={activeDosha}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={`bg-gradient-to-br ${doshas[activeDosha as keyof DoshaTypes].color} rounded-2xl p-8 shadow-lg mb-6`}
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-3xl font-bold text-amber-900">
                    {doshas[activeDosha as keyof DoshaTypes].title} Dosha
                  </h3>
                  <div className="w-12 h-12">
                    {doshas[activeDosha as keyof DoshaTypes].element}
                  </div>
                </div>
                
                <div className="flex border-b border-amber-200 mb-6">
                  <button
                    onClick={() => setActiveTab('characteristics')}
                    className={`pb-2 px-4 ${activeTab === 'characteristics' ? 'text-amber-900 border-b-2 border-amber-900 font-medium' : 'text-amber-800'}`}
                  >
                    Characteristics
                  </button>
                  <button
                    onClick={() => setActiveTab('recommendations')}
                    className={`pb-2 px-4 ${activeTab === 'recommendations' ? 'text-amber-900 border-b-2 border-amber-900 font-medium' : 'text-amber-800'}`}
                  >
                    Recommendations
                  </button>
                </div>
                
                <AnimatePresence mode="wait">
                  {activeTab === 'characteristics' ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="text-xl font-semibold text-amber-900 mb-4">Key Qualities</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {doshas[activeDosha as keyof DoshaTypes].characteristics.map((trait: string, index: number) => (
                          <motion.div
                            key={index}
                            className="bg-white/80 backdrop-blur-sm rounded-lg p-4 text-center"
                            variants={elementVariants}
                            initial="hidden"
                            animate="visible"
                            custom={index}
                          >
                            <span className="text-amber-800 font-medium">{trait}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold text-amber-900 mb-3 flex items-center gap-2">
                            <GiHerbsBundle /> Diet
                          </h4>
                          <ul className="space-y-2">
                            {doshas[activeDosha as keyof DoshaTypes].recommendations.diet.map((item, i) => (
                              <li key={i} className="text-amber-800 flex items-start">
                                <span className="text-lime-600 mr-2">•</span> {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-amber-900 mb-3 flex items-center gap-2">
                            <FaYinYang /> Lifestyle
                          </h4>
                          <ul className="space-y-2">
                            {doshas[activeDosha as keyof DoshaTypes].recommendations.lifestyle.map((item, i) => (
                              <li key={i} className="text-amber-800 flex items-start">
                                <span className="text-lime-600 mr-2">•</span> {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-amber-900 mb-3 flex items-center gap-2">
                            <FaLeaf /> Herbs
                          </h4>
                          <ul className="space-y-2">
                            {doshas[activeDosha as keyof DoshaTypes].recommendations.herbs.map((item, i) => (
                              <li key={i} className="text-amber-800 flex items-start">
                                <span className="text-lime-600 mr-2">•</span> {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              
              <motion.div 
                className="bg-amber-50 rounded-2xl p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: isExploring ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="text-xl font-semibold text-amber-900 mb-4">Did You Know?</h4>
                <p className="text-amber-800 mb-4">
                  Most people have one or two dominant doshas. Your unique combination is called your <span className="font-medium">Prakriti</span> (constitution), which remains constant throughout life.
                </p>
                <p className="text-amber-800">
                  Your current state of balance is called <span className="font-medium">Vikriti</span>, which changes based on diet, lifestyle, seasons and other factors.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Practices Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50 via-lime-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-4">
            Seasonal Ayurveda
          </h2>
          <p className="text-xl text-amber-800 text-center mb-16 max-w-3xl mx-auto">
            Aligning your lifestyle with nature's rhythms for optimal health
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalPractices.map((season, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`h-3 ${index === 0 ? 'bg-green-500' : index === 1 ? 'bg-red-400' : index === 2 ? 'bg-amber-500' : 'bg-blue-400'}`}></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-amber-900">{season.season}</h3>
                    {index === 0 ? <GiHerbsBundle className="text-green-500 text-xl" /> :
                     index === 1 ? <MdOutlineWaterDrop className="text-red-400 text-xl" /> :
                     index === 2 ? <FaBalanceScale className="text-amber-500 text-xl" /> :
                     <GiSandsOfTime className="text-blue-400 text-xl" />}
                  </div>
                  <p className="text-amber-800 mb-2"><span className="font-medium">Focus:</span> {season.focus}</p>
                  <div className="mt-4">
                    <h4 className="font-medium text-amber-900 mb-2">Recommended Practices:</h4>
                    <ul className="space-y-1">
                      {season.practices.map((practice, i) => (
                        <li key={i} className="text-amber-700 text-sm flex items-start">
                          <span className="text-lime-600 mr-2">•</span> {practice}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Practices Section */}
      <div className="py-16 bg-gradient-to-br from-amber-50 via-lime-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">
            Ayurvedic Practices
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <GiHerbsBundle className="w-8 h-8" />,
                title: "Herbal Medicine",
                description: "Traditional herbs and formulations for natural healing",
                details: "Ayurveda uses hundreds of medicinal plants, minerals and natural substances in precise combinations to restore balance without side effects."
              },
              {
                icon: <FaBrain className="w-8 h-8" />,
                title: "Meditation & Yoga",
                description: "Practices for mental clarity and spiritual growth",
                details: "Specific asanas, pranayama and meditation techniques are prescribed based on individual constitution to calm the mind and energize the body."
              },
              {
                icon: <GiMedicines className="w-8 h-8" />,
                title: "Panchakarma",
                description: "Deep cleansing and rejuvenation therapies",
                details: "A sophisticated detoxification process involving oil treatments, heat therapies and elimination procedures to remove deep-seated toxins."
              },
              {
                icon: <FaBalanceScale className="w-8 h-8" />,
                title: "Dinacharya",
                description: "Daily routine aligned with natural cycles",
                details: "Timing of meals, sleep, exercise and other activities according to the doshic cycles of the day for optimal energy and digestion."
              },
              {
                icon: <FaHeart className="w-8 h-8" />,
                title: "Marma Therapy",
                description: "Energy point stimulation",
                details: "Gentle pressure on vital energy points to release blockages, improve prana flow and promote self-healing."
              },
              {
                icon: <FaLeaf className="w-8 h-8" />,
                title: "Rasayana",
                description: "Rejuvenation therapies",
                details: "Specialized preparations and practices to enhance vitality, immunity and longevity while slowing aging processes."
              }
            ].map((practice, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50 to-white shadow-lg"
              >
                <div className="p-8">
                  <div className="text-lime-600 mb-4 group-hover:text-amber-600 transition-colors">{practice.icon}</div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-3">{practice.title}</h3>
                  <p className="text-amber-800 mb-4">{practice.description}</p>
                  <motion.p 
                    className="text-amber-700 text-sm h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 overflow-hidden transition-all duration-300"
                    initial={{ opacity: 0, height: 0 }}
                  >
                    {practice.details}
                  </motion.p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-lime-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-amber-50 via-lime-50 to-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-amber-900 mb-6">
                Ready to Transform Your Health?
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Schedule a personalized Ayurvedic consultation to discover your unique constitution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-lime-600 text-white hover:bg-lime-700 px-8 py-4 rounded-full font-medium transition-colors">
                  Book a Consultation
                </button>
                <button className="bg-transparent border-2 border-amber-600 text-amber-800 hover:bg-amber-50 px-8 py-4 rounded-full font-medium transition-colors">
                  Take Dosha Quiz
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}