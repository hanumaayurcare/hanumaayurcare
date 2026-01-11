'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaLeaf, FaHeart, FaBrain, FaSearch, FaCalendarAlt, FaQuoteLeft } from 'react-icons/fa';
import { GiMedicines, GiStomach, GiHerbsBundle } from 'react-icons/gi';
import { TbMoodHappy } from 'react-icons/tb';
import { RiMentalHealthLine } from 'react-icons/ri';
import { MdOutlineImportContacts } from 'react-icons/md';

interface Condition {
  name: string;
  description: string;
  symptoms: string[];
  treatments: string[];
  herbs: string[];
  lifestyle: string[];
  doshas: string[];
  image?: string;
}

interface ConditionCategory {
  title: string;
  icon: React.ReactElement;
  description: string;
  conditions: Condition[];
  color: string;
}

export default function HealthConditionsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('digestive');
  const [selectedCondition, setSelectedCondition] = useState<Condition | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredConditions, setFilteredConditions] = useState<Condition[]>([]);
  const [testimonials, setTestimonials] = useState<number>(0);

  const categories: Record<string, ConditionCategory> = {
    digestive: {
      title: 'Digestive Health',
      icon: <GiStomach className="w-6 h-6" />,
      description: 'Ayurvedic solutions for digestive wellness and gut health',
      color: 'amber',
      conditions: [
        {
          name: 'Acid Reflux',
          description: 'Imbalance in Pitta dosha leading to excess acid production and inflammation of the esophagus. Ayurveda addresses the root causes through dietary and lifestyle interventions.',
          symptoms: ['Heartburn', 'Regurgitation', 'Chest discomfort', 'Bitter taste', 'Throat irritation', 'Difficulty swallowing'],
          treatments: ['Dietary modifications', 'Herbal preparations', 'Lifestyle changes', 'Cooling practices', 'Digestive stimulants'],
          herbs: ['Amla (Indian Gooseberry)', 'Licorice Root', 'Aloe Vera Juice', 'Fennel Seeds', 'Cumin', 'Coriander'],
          lifestyle: ['Avoid late meals', 'Elevated head during sleep', 'Regular walking', 'Stress management', 'Avoid spicy foods'],
          doshas: ['Pitta'],
          image: '/images/acid-reflux.jpg'
        },
        {
          name: 'IBS',
          description: 'Digestive disorder affecting the large intestine, characterized by various symptoms related to bowel movements. Ayurveda treats IBS by balancing the digestive fire (agni) and nervous system.',
          symptoms: ['Abdominal pain', 'Bloating', 'Irregular bowel movements', 'Gas', 'Mucus in stool', 'Food sensitivities'],
          treatments: ['Digestive herbs', 'Stress management', 'Diet regulation', 'Abdominal massage', 'Oil therapy'],
          herbs: ['Ginger', 'Cumin', 'Triphala', 'Peppermint', 'Psyllium Husk', 'Fennel'],
          lifestyle: ['Regular meal times', 'Yoga poses for digestion', 'Meditation', 'Adequate hydration', 'Food journaling'],
          doshas: ['Vata', 'Pitta'],
          image: '/images/ibs.jpg'
        },
        {
          name: 'Constipation',
          description: 'A vata imbalance leading to slow bowel movements and difficulty passing stool. Ayurveda focuses on improving digestive fire and bowel lubrication.',
          symptoms: ['Infrequent bowel movements', 'Hard, dry stool', 'Straining', 'Bloating', 'Abdominal discomfort'],
          treatments: ['Herbal laxatives', 'Oil therapy', 'Hydration therapy', 'Dietary fiber', 'Digestive stimulants'],
          herbs: ['Triphala', 'Psyllium Husk', 'Castor Oil', 'Aloe Vera', 'Licorice Root'],
          lifestyle: ['Morning warm water ritual', 'Regular exercise', 'Increase healthy fats', 'Abhyanga (oil massage)', 'Scheduled bathroom time'],
          doshas: ['Vata'],
          image: '/images/constipation.jpg'
        }
      ]
    },
    mental: {
      title: 'Mental Wellness',
      icon: <RiMentalHealthLine className="w-6 h-6" />,
      description: 'Natural approaches to mental health and emotional balance',
      color: 'blue',
      conditions: [
        {
          name: 'Anxiety',
          description: 'Vata imbalance leading to excessive worry, restlessness and mental agitation. Ayurveda addresses anxiety through grounding practices and nervous system support.',
          symptoms: ['Restlessness', 'Racing thoughts', 'Sleep issues', 'Digestive problems', 'Excessive worry', 'Physical tension'],
          treatments: ['Meditation', 'Herbal remedies', 'Oil therapies', 'Breathing practices', 'Sound therapy'],
          herbs: ['Ashwagandha', 'Brahmi (Bacopa)', 'Jatamansi', 'Holy Basil (Tulsi)', 'Shankhpushpi', 'Valerian Root'],
          lifestyle: ['Regular routine (dinacharya)', 'Yoga', 'Abhyanga (oil massage)', 'Nature walks', 'Reduced screen time', 'Warm, nourishing diet'],
          doshas: ['Vata'],
          image: '/images/anxiety.jpg'
        },
        {
          name: 'Depression',
          description: 'Kapha imbalance leading to emotional heaviness, lethargy, and reduced motivation. Ayurveda employs energizing and stimulating therapies to address depression.',
          symptoms: ['Low energy', 'Sadness', 'Loss of interest', 'Oversleeping', 'Heaviness', 'Social withdrawal'],
          treatments: ['Active therapies', 'Herbal support', 'Light therapy', 'Aromatherapy', 'Detoxification'],
          herbs: ['St. John\'s Wort', 'Saffron', 'Bacopa', 'Rose', 'Cardamom', 'Ashwagandha'],
          lifestyle: ['Morning exercise', 'Bright environments', 'Social connection', 'Routine breaking', 'Creative expression', 'Light, warm foods'],
          doshas: ['Kapha'],
          image: '/images/depression.jpg'
        },
        {
          name: 'Insomnia',
          description: 'Sleep disorder often related to vata imbalance, causing difficulty falling or staying asleep. Ayurveda approaches insomnia by calming the mind and establishing healthy sleep rhythms.',
          symptoms: ['Difficulty falling asleep', 'Waking during the night', 'Unrefreshing sleep', 'Daytime fatigue', 'Anxiety about sleep'],
          treatments: ['Sleep hygiene practices', 'Herbal remedies', 'Oil therapies', 'Sound therapy', 'Meditation'],
          herbs: ['Ashwagandha', 'Valerian Root', 'Chamomile', 'Nutmeg', 'Jatamansi', 'Brahmi'],
          lifestyle: ['Regular sleep schedule', 'Evening oil massage', 'No screens before bed', 'Warm milk with spices', 'Gentle yoga'],
          doshas: ['Vata', 'Pitta'],
          image: '/images/insomnia.jpg'
        }
      ]
    },
    respiratory: {
      title: 'Respiratory Health',
      icon: <FaHeart className="w-6 h-6" />,
      description: 'Traditional remedies for breathing and respiratory wellness',
      color: 'green',
      conditions: [
        {
          name: 'Asthma',
          description: 'Kapha-Vata condition affecting the respiratory system, characterized by bronchial constriction and difficulty breathing. Ayurveda focuses on clearing the channels and strengthening lung tissue.',
          symptoms: ['Wheezing', 'Shortness of breath', 'Chest tightness', 'Coughing', 'Mucus production', 'Breathing difficulty during exertion'],
          treatments: ['Breathing exercises', 'Herbal medicines', 'Steam inhalation', 'Diet modification', 'Stress reduction'],
          herbs: ['Vasaka', 'Tulsi (Holy Basil)', 'Ginger', 'Pushkarmool', 'Licorice', 'Pippali (Long Pepper)'],
          lifestyle: ['Pranayama (breathing practices)', 'Avoid cold exposure', 'Warm foods', 'Steam therapy', 'Regular exercise', 'Avoid allergens'],
          doshas: ['Kapha', 'Vata'],
          image: '/images/asthma.jpg'
        },
        {
          name: 'Chronic Sinusitis',
          description: 'Kapha condition characterized by inflammation of the sinus cavities and excess mucus production. Ayurveda treats sinusitis by clearing blockages and reducing inflammation.',
          symptoms: ['Nasal congestion', 'Facial pain/pressure', 'Headache', 'Thick nasal discharge', 'Reduced sense of smell', 'Post-nasal drip'],
          treatments: ['Nasya (nasal therapy)', 'Steam inhalation', 'Herbal medicines', 'Sinus massage', 'Diet modifications'],
          herbs: ['Tulsi (Holy Basil)', 'Eucalyptus', 'Ginger', 'Turmeric', 'Black Pepper', 'Cinnamon'],
          lifestyle: ['Neti pot irrigation', 'Facial steam', 'Avoiding dairy', 'Warm beverages', 'Humidification', 'Head elevation during sleep'],
          doshas: ['Kapha'],
          image: '/images/sinusitis.jpg'
        }
      ]
    },
    skin: {
      title: 'Skin Conditions',
      icon: <GiHerbsBundle className="w-6 h-6" />,
      description: 'Holistic approaches to skin health and radiance',
      color: 'rose',
      conditions: [
        {
          name: 'Eczema',
          description: 'Inflammatory skin condition characterized by itchy, red, and dry skin. Ayurveda treats eczema by detoxifying the blood and balancing the doshas that affect skin health.',
          symptoms: ['Dry, scaly skin', 'Itching', 'Redness', 'Cracking', 'Oozing or bleeding', 'Skin thickening'],
          treatments: ['Blood-purifying herbs', 'Medicated oils', 'Special diet', 'Panchakarma detox', 'Cooling therapies'],
          herbs: ['Neem', 'Turmeric', 'Manjistha', 'Aloe Vera', 'Sandalwood', 'Guduchi'],
          lifestyle: ['Avoid hot showers', 'Cotton clothing', 'Stress management', 'Hydration', 'Avoid trigger foods'],
          doshas: ['Pitta', 'Vata'],
          image: '/images/eczema.jpg'
        },
        {
          name: 'Psoriasis',
          description: 'Chronic autoimmune condition causing rapid skin cell buildup. Ayurveda approaches psoriasis as a manifestation of systemic toxins (ama) and imbalanced doshas.',
          symptoms: ['Red patches with silvery scales', 'Dry, cracked skin', 'Itching', 'Burning sensation', 'Thickened nails', 'Joint pain'],
          treatments: ['Internal cleansing', 'Blood purification', 'Topical treatments', 'Stress reduction', 'Diet therapy'],
          herbs: ['Neem', 'Turmeric', 'Aloe Vera', 'Manjistha', 'Guduchi', 'Kutki'],
          lifestyle: ['Anti-inflammatory diet', 'Sun exposure', 'Oil massage', 'Meditation', 'Regular detoxification'],
          doshas: ['Pitta', 'Vata', 'Kapha'],
          image: '/images/psoriasis.jpg'
        }
      ]
    }
  };

  // Search functionality
  useEffect(() => {
    if (searchTerm) {
      const allConditions = Object.values(categories).flatMap(category => category.conditions);
      const filtered = allConditions.filter(condition => 
        condition.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        condition.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        condition.doshas.some(dosha => dosha.toLowerCase().includes(searchTerm.toLowerCase())) ||
        condition.symptoms.some(symptom => symptom.toLowerCase().includes(searchTerm.toLowerCase())) ||
        condition.herbs.some(herb => herb.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setFilteredConditions(filtered);
    } else {
      setFilteredConditions([]);
    }
  }, [searchTerm, categories]);

  // Function to get dosha colors
  const getDoshaColor = (dosha: string) => {
    switch(dosha) {
      case 'Vata': return 'bg-purple-50 text-purple-700';
      case 'Pitta': return 'bg-red-50 text-red-700';
      case 'Kapha': return 'bg-blue-50 text-blue-700';
      default: return 'bg-amber-50 text-amber-700';
    }
  };

  // Testimonials
  const testimonialsList = [
    {
      name: "Priya M.",
      condition: "Acid Reflux",
      text: "After years of dependency on antacids, the Ayurvedic approach completely changed my relationship with food. The herbs and lifestyle changes have made such a difference.",
      image: "/images/testimonial1.jpg"
    },
    {
      name: "Michael T.",
      condition: "Anxiety",
      text: "The holistic approach to my anxiety was exactly what I needed. The combination of herbs, meditation practices, and dietary changes has brought a sense of calm I haven't felt in years.",
      image: "/images/testimonial2.jpg"
    },
    {
      name: "Sarah J.",
      condition: "Eczema",
      text: "My skin has transformed after following the Ayurvedic protocol. The personalized herbs and oils recommended for my dosha type made all the difference.",
      image: "/images/testimonial3.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative py-24">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/ayurveda-conditions.jpg"
            alt="Ayurvedic Healing"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50/90 via-lime-50/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-6xl font-bold text-amber-800 mb-6">
              Ayurvedic Health Solutions
            </h1>
            <p className="text-xl text-amber-700 mb-8">
              Discover natural approaches to common health conditions through ancient Ayurvedic wisdom tailored to your unique constitution
            </p>
            <div className="bg-white/80 rounded-full p-2 shadow-md flex items-center max-w-md">
              <FaSearch className="ml-3 text-amber-400" />
              <input
                type="text"
                placeholder="Search conditions, herbs, or symptoms..."
                className="w-full bg-transparent px-4 py-2 focus:outline-none text-amber-800"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            {searchTerm && filteredConditions.length > 0 && (
              <div className="mt-4 bg-white/90 rounded-xl shadow-md p-4 max-w-md max-h-64 overflow-y-auto">
                <h3 className="font-medium text-amber-800 mb-2">Search Results:</h3>
                <ul>
                  {filteredConditions.map((condition, index) => (
                    <li key={index}>
                      <button 
                        className="w-full text-left p-2 hover:bg-amber-50 rounded-lg transition-colors flex items-center gap-2"
                        onClick={() => {
                          const categoryKey = Object.keys(categories).find(key => 
                            categories[key].conditions.some(c => c.name === condition.name)
                          ) || activeCategory;
                          setActiveCategory(categoryKey);
                          setSelectedCondition(condition);
                          setSearchTerm('');
                        }}
                      >
                        <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                        {condition.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Dosha Quick Guide */}
      <div className="py-12 bg-gradient-to-r from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-amber-800 text-center mb-8">Understanding Your Dosha Type</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-6 border-t-4 border-purple-400">
              <h3 className="text-xl font-semibold text-purple-800 mb-3">Vata</h3>
              <p className="text-gray-600 mb-4">Air and space elements characterized by movement, creativity, and lightness. When imbalanced, can lead to anxiety, dry skin, and digestive issues.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-sm bg-purple-50 text-purple-700">Dry</span>
                <span className="px-3 py-1 rounded-full text-sm bg-purple-50 text-purple-700">Light</span>
                <span className="px-3 py-1 rounded-full text-sm bg-purple-50 text-purple-700">Cold</span>
                <span className="px-3 py-1 rounded-full text-sm bg-purple-50 text-purple-700">Quick</span>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 border-t-4 border-red-400">
              <h3 className="text-xl font-semibold text-red-800 mb-3">Pitta</h3>
              <p className="text-gray-600 mb-4">Fire and water elements characterized by transformation, intelligence, and heat. When imbalanced, can lead to inflammation, skin rashes, and irritability.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-sm bg-red-50 text-red-700">Hot</span>
                <span className="px-3 py-1 rounded-full text-sm bg-red-50 text-red-700">Sharp</span>
                <span className="px-3 py-1 rounded-full text-sm bg-red-50 text-red-700">Intense</span>
                <span className="px-3 py-1 rounded-full text-sm bg-red-50 text-red-700">Acidic</span>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 border-t-4 border-blue-400">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Kapha</h3>
              <p className="text-gray-600 mb-4">Earth and water elements characterized by stability, strength, and structure. When imbalanced, can lead to weight gain, congestion, and lethargy.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-700">Heavy</span>
                <span className="px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-700">Slow</span>
                <span className="px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-700">Cool</span>
                <span className="px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-700">Oily</span>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link 
              href="/dosha-quiz"
              className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 hover:bg-amber-200 px-6 py-3 rounded-full font-medium transition-colors"
            >
              <FaBrain className="w-5 h-5" />
              Take Our Dosha Quiz
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-gradient-to-br from-amber-50/50 via-lime-50/30 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Categories Sidebar */}
            <div className="lg:w-1/4">
              <div className="sticky top-8">
                <h2 className="text-2xl font-bold text-amber-800 mb-6">Health Categories</h2>
                <div className="flex flex-col gap-3">
                  {Object.entries(categories).map(([key, category]) => (
                    <button
                      key={key}
                      onClick={() => {
                        setActiveCategory(key);
                        setSelectedCondition(null);
                      }}
                      className={`p-4 rounded-xl text-left transition-all flex items-center gap-3 ${
                        activeCategory === key
                          ? 'bg-gradient-to-r from-amber-50/80 to-lime-50/60 shadow-sm'
                          : 'hover:bg-amber-50/40'
                      }`}
                    >
                      <div className={`${activeCategory === key ? 'text-amber-600' : 'text-gray-400'}`}>
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-amber-800">{category.title}</h3>
                        <p className="text-sm text-gray-500">{category.description}</p>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Educational Resource */}
                <div className="mt-8 bg-gradient-to-br from-lime-50 to-white p-6 rounded-xl border border-lime-100">
                  <div className="flex items-center gap-3 mb-4">
                    <MdOutlineImportContacts className="text-lime-600 w-6 h-6" />
                    <h3 className="font-medium text-lime-800">Learn More</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Explore our educational resources to understand Ayurvedic principles and self-healing techniques.
                  </p>
                  <Link 
                    href="/ayurveda-library"
                    className="text-sm font-medium text-lime-700 hover:text-lime-800 flex items-center gap-1"
                  >
                    Browse Ayurvedic Library
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Conditions List */}
            <div className="lg:w-3/4">
              <div className="bg-white/80 rounded-2xl shadow-sm border border-amber-100/50 overflow-hidden">
                {!selectedCondition ? (
                  <div className="p-6">
                    <h2 className="text-3xl font-bold text-amber-800 mb-6">
                      {categories[activeCategory].title}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      {categories[activeCategory].conditions.map((condition, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedCondition(condition)}
                          className="text-left p-6 rounded-xl bg-gradient-to-br from-amber-50/60 to-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-amber-100 flex flex-col h-full"
                        >
                          <div className="mb-4 relative h-40 rounded-lg overflow-hidden bg-amber-50">
                            {condition.image ? (
                              <div className="relative h-full w-full">
                                <div className="h-full w-full bg-gradient-to-br from-amber-50/10 to-white/30 absolute z-10" />
                                {/* Image would be here in a real implementation */}
                                <div className="flex items-center justify-center h-full">
                                  <span className="text-amber-300 text-6xl">
                                    {condition.name === 'Acid Reflux' && <GiStomach />}
                                    {condition.name === 'IBS' && <GiStomach />}
                                    {condition.name === 'Constipation' && <GiStomach />}
                                    {condition.name === 'Anxiety' && <RiMentalHealthLine />}
                                    {condition.name === 'Depression' && <TbMoodHappy />}
                                    {condition.name === 'Insomnia' && <FaBrain />}
                                    {condition.name === 'Asthma' && <FaHeart />}
                                    {condition.name === 'Chronic Sinusitis' && <FaHeart />}
                                    {condition.name === 'Eczema' && <GiHerbsBundle />}
                                    {condition.name === 'Psoriasis' && <GiHerbsBundle />}
                                  </span>
                                </div>
                              </div>
                            ) : (
                              <div className="flex items-center justify-center h-full">
                                <FaLeaf className="text-amber-200 text-6xl" />
                              </div>
                            )}
                          </div>
                          <h3 className="text-xl font-semibold text-amber-800 mb-2">{condition.name}</h3>
                          <p className="text-gray-600 mb-4 flex-grow text-sm">{condition.description.substring(0, 120)}...</p>
                          <div className="flex flex-wrap gap-2 mt-auto">
                            {condition.doshas.map((dosha, i) => (
                              <span
                                key={i}
                                className={`px-3 py-1 rounded-full text-sm ${getDoshaColor(dosha)}`}
                              >
                                {dosha}
                              </span>
                            ))}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="p-6">
                    <button
                      onClick={() => setSelectedCondition(null)}
                      className="text-amber-600 hover:text-amber-700 mb-6 flex items-center gap-2"
                    >
                      ← Back to conditions
                    </button>
                    
                    <div className="bg-gradient-to-br from-amber-50/40 to-white p-6 rounded-xl mb-8">
                      <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="md:w-2/3">
                          <h2 className="text-3xl font-bold text-amber-800 mb-2">{selectedCondition.name}</h2>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {selectedCondition.doshas.map((dosha, i) => (
                              <span
                                key={i}
                                className={`px-3 py-1 rounded-full text-sm ${getDoshaColor(dosha)}`}
                              >
                                {dosha}
                              </span>
                            ))}
                          </div>
                          <p className="text-gray-600">{selectedCondition.description}</p>
                        </div>
                        <div className="md:w-1/3 rounded-lg overflow-hidden bg-white shadow-sm border border-amber-100">
                          <div className="relative h-48 bg-amber-50 flex items-center justify-center">
                            <span className="text-amber-300 text-6xl">
                              {selectedCondition.name === 'Acid Reflux' && <GiStomach />}
                              {selectedCondition.name === 'IBS' && <GiStomach />}
                              {selectedCondition.name === 'Constipation' && <GiStomach />}
                              {selectedCondition.name === 'Anxiety' && <RiMentalHealthLine />}
                              {selectedCondition.name === 'Depression' && <TbMoodHappy />}
                              {selectedCondition.name === 'Insomnia' && <FaBrain />}
                              {selectedCondition.name === 'Asthma' && <FaHeart />}
                              {selectedCondition.name === 'Chronic Sinusitis' && <FaHeart />}
                              {selectedCondition.name === 'Eczema' && <GiHerbsBundle />}
                              {selectedCondition.name === 'Psoriasis' && <GiHerbsBundle />}
                              </span>
                          </div>
                          <div className="p-4">
                            <h4 className="font-medium text-amber-800 mb-2">Quick Action</h4>
                            <button className="bg-amber-100 hover:bg-amber-200 text-amber-800 w-full py-2 rounded-lg transition-colors flex items-center justify-center gap-2">
                              <FaCalendarAlt className="w-4 h-4" />
                              Schedule Consultation
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-white rounded-xl shadow-sm border border-amber-100/50 p-6">
                        <h3 className="text-xl font-semibold text-amber-800 mb-4 flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Common Symptoms
                        </h3>
                        <ul className="space-y-3">
                          {selectedCondition.symptoms.map((symptom, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-600">
                              <span className="text-amber-500 mt-1 flex-shrink-0">•</span>
                              <span>{symptom}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-white rounded-xl shadow-sm border border-amber-100/50 p-6">
                        <h3 className="text-xl font-semibold text-amber-800 mb-4 flex items-center gap-2">
                          <GiMedicines className="h-5 w-5 text-amber-500" />
                          Ayurvedic Treatments
                        </h3>
                        <ul className="space-y-3">
                          {selectedCondition.treatments.map((treatment, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-600">
                              <span className="text-amber-500 mt-1 flex-shrink-0">•</span>
                              <span>{treatment}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-white rounded-xl shadow-sm border border-amber-100/50 p-6">
                        <h3 className="text-xl font-semibold text-amber-800 mb-4 flex items-center gap-2">
                          <FaLeaf className="h-5 w-5 text-amber-500" />
                          Recommended Herbs
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                          {selectedCondition.herbs.map((herb, index) => (
                            <div key={index} className="flex items-start gap-2 p-2 rounded-lg bg-lime-50 text-gray-700">
                              <span className="text-lime-500 mt-1 flex-shrink-0">•</span>
                              <span>{herb}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-xl shadow-sm border border-amber-100/50 p-6">
                        <h3 className="text-xl font-semibold text-amber-800 mb-4 flex items-center gap-2">
                          <TbMoodHappy className="h-5 w-5 text-amber-500" />
                          Lifestyle Recommendations
                        </h3>
                        <ul className="space-y-3">
                          {selectedCondition.lifestyle.map((item, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-600">
                              <span className="text-amber-500 mt-1 flex-shrink-0">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Related Articles/Resources */}
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold text-amber-800 mb-4">Related Resources</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <Link href="#" className="block p-4 rounded-lg bg-amber-50 hover:bg-amber-100 transition-colors">
                          <h4 className="font-medium text-amber-800">Diet Guidelines for {selectedCondition.doshas[0]} Type</h4>
                          <p className="text-sm text-gray-600 mt-1">Nutritional recommendations to balance your dosha</p>
                        </Link>
                        <Link href="#" className="block p-4 rounded-lg bg-amber-50 hover:bg-amber-100 transition-colors">
                          <h4 className="font-medium text-amber-800">Yoga for {selectedCondition.name}</h4>
                          <p className="text-sm text-gray-600 mt-1">Specific poses to help manage symptoms</p>
                        </Link>
                        <Link href="#" className="block p-4 rounded-lg bg-amber-50 hover:bg-amber-100 transition-colors">
                          <h4 className="font-medium text-amber-800">Home Remedies</h4>
                          <p className="text-sm text-gray-600 mt-1">DIY Ayurvedic treatments you can prepare at home</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      {!selectedCondition && (
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-amber-800 mb-4">Success Stories</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Read how our Ayurvedic approaches have helped others find balance and healing
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonialsList.map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-6 shadow-sm relative">
                  <FaQuoteLeft className="text-amber-200 text-4xl absolute top-4 left-4 opacity-30" />
                  <div className="mt-4 text-gray-600">
                    <p className="italic">"{testimonial.text}"</p>
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-400">
                      {/* This would be a real image in production */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-amber-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.condition}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-br from-amber-50/50 via-lime-50/30 to-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-amber-50 via-lime-50 to-white rounded-2xl p-8 md:p-12 shadow-lg border border-amber-100/50">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-amber-900 mb-6">
                Begin Your Healing Journey Today
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Consult with our certified Ayurvedic practitioners for a personalized treatment plan tailored to your unique constitution and health concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-lime-600 text-white hover:bg-lime-700 px-8 py-4 rounded-full font-medium transition-colors flex items-center justify-center gap-2">
                  <FaCalendarAlt className="w-5 h-5" />
                  Book a Consultation
                </button>
                <Link 
                  href="/ayurveda"
                  className="bg-transparent border-2 border-amber-600 text-amber-800 hover:bg-amber-50 px-8 py-4 rounded-full font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <MdOutlineImportContacts className="w-5 h-5" />
                  Learn More About Ayurveda
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-amber-800 mb-4">
              Subscribe to Our Wellness Newsletter
            </h2>
            <p className="text-gray-600 mb-6">
              Receive monthly Ayurvedic tips, seasonal recipes, and exclusive offers
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
              <button className="bg-amber-600 text-white hover:bg-amber-700 px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              By subscribing, you agree to receive our newsletter and accept our Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}