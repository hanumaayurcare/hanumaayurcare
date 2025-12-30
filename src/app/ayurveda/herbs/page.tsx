'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaSearch, FaFilter, FaLeaf, FaFire, FaTint, FaSnowflake, FaBalanceScale } from 'react-icons/fa';
import { GiHerbsBundle, GiHealing } from 'react-icons/gi';

interface Herb {
  id: number;
  name: string;
  scientificName: string;
  image: string;
  benefits: string[];
  dosha: ('vata' | 'pitta' | 'kapha')[];
  energy: 'heating' | 'cooling' | 'neutral';
  taste?: string[];
  usedFor?: string[];
  dosage?: string;
  contraindications?: string;
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const HerbDirectory = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedDosha, setSelectedDosha] = useState<string | null>(null);
  const [selectedEnergy, setSelectedEnergy] = useState<string | null>(null);
  const [selectedHerb, setSelectedHerb] = useState<Herb | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const herbs: Herb[] = [
    {
      id: 11,
      name: 'Haritaki',
      scientificName: 'Terminalia chebula',
      image: '/images/herbs/haritaki.jpg',
      benefits: ['Digestive', 'Rejuvenative', 'Laxative', 'Anti-aging'],
      dosha: ['vata'],
      energy: 'heating',
      taste: ['sweet', 'sour', 'bitter', 'pungent', 'astringent']
    },
    {
      id: 12,
      name: 'Bibhitaki',
      scientificName: 'Terminalia bellirica',
      image: '/images/herbs/bibhitaki.jpg',
      benefits: ['Respiratory', 'Detox', 'Anti-parasitic', 'Kapha reducer'],
      dosha: ['kapha'],
      energy: 'heating',
      taste: ['bitter', 'astringent']
    },
    {
      id: 13,
      name: 'Manjistha',
      scientificName: 'Rubia cordifolia',
      image: '/images/herbs/manjistha.jpg',
      benefits: ['Blood purifier', 'Skin health', 'Lymphatic', 'Anti-inflammatory'],
      dosha: ['pitta'],
      energy: 'cooling'
    },
    {
      id: 14,
      name: 'Gokshura',
      scientificName: 'Tribulus terrestris',
      image: '/images/herbs/gokshura.jpg',
      benefits: ['Urinary', 'Reproductive', 'Energy', 'Kidney support'],
      dosha: ['vata', 'pitta'],
      energy: 'cooling'
    },
    {
      id: 15,
      name: 'Punarnava',
      scientificName: 'Boerhavia diffusa',
      image: '/images/herbs/punarnava.jpg',
      benefits: ['Diuretic', 'Anti-inflammatory', 'Liver support', 'Heart health'],
      dosha: ['kapha'],
      energy: 'heating'
    },
    {
      id: 16,
      name: 'Licorice',
      scientificName: 'Glycyrrhiza glabra',
      image: '/images/herbs/licorice.jpg',
      benefits: ['Adrenal support', 'Expectorant', 'Anti-ulcer', 'Hormonal balance'],
      dosha: ['vata', 'pitta'],
      energy: 'cooling'
    },
    {
      id: 17,
      name: 'Arjuna',
      scientificName: 'Terminalia arjuna',
      image: '/images/herbs/arjuna.jpg',
      benefits: ['Cardiac tonic', 'Wound healer', 'Bone strengthener', 'Circulatory'],
      dosha: ['kapha', 'pitta'],
      energy: 'cooling'
    },
    {
      id: 18,
      name: 'Bala',
      scientificName: 'Sida cordifolia',
      image: '/images/herbs/bala.jpg',
      benefits: ['Muscle tonic', 'Nervine', 'Anti-inflammatory', 'Rejuvenative'],
      dosha: ['vata'],
      energy: 'heating'
    },
    {
      id: 19,
      name: 'Bhringaraj',
      scientificName: 'Eclipta prostrata',
      image: '/images/herbs/bhringaraj.jpg',
      benefits: ['Hair growth', 'Liver tonic', 'Anti-aging', 'Eye health'],
      dosha: ['pitta'],
      energy: 'cooling'
    },
    {
      id: 20,
      name: 'Chyawanprash',
      scientificName: 'Herbal jam',
      image: '/images/herbs/chyawanprash.jpg',
      benefits: ['Immune booster', 'Rejuvenative', 'Energy', 'Respiratory support'],
      dosha: ['vata', 'pitta', 'kapha'],
      energy: 'neutral'
    },
    {
      id: 21,
      name: 'Dashamoola',
      scientificName: 'Ten roots formula',
      image: '/images/herbs/dashamoola.jpg',
      benefits: ['Nervine', 'Anti-inflammatory', 'Muscle relaxant', 'Vata pacifier'],
      dosha: ['vata'],
      energy: 'heating'
    },
    {
      id: 22,
      name: 'Guggulu',
      scientificName: 'Commiphora mukul',
      image: '/images/herbs/guggulu.jpg',
      benefits: ['Detox', 'Anti-inflammatory', 'Cholesterol', 'Weight management'],
      dosha: ['kapha'],
      energy: 'heating'
    },
    {
      id: 23,
      name: 'Jatamansi',
      scientificName: 'Nardostachys jatamansi',
      image: '/images/herbs/jatamansi.jpg',
      benefits: ['Sedative', 'Nervine', 'Anti-spasmodic', 'Meditation support'],
      dosha: ['vata', 'pitta'],
      energy: 'cooling'
    },
    {
      id: 24,
      name: 'Katuka',
      scientificName: 'Picrorhiza kurroa',
      image: '/images/herbs/katuka.jpg',
      benefits: ['Liver protector', 'Anti-allergic', 'Immune modulator', 'Digestive'],
      dosha: ['pitta', 'kapha'],
      energy: 'cooling'
    },
    {
      id: 25,
      name: 'Kumari',
      scientificName: 'Aloe vera',
      image: '/images/herbs/kumari.jpg',
      benefits: ['Cooling', 'Laxative', 'Skin health', 'Female tonic'],
      dosha: ['pitta'],
      energy: 'cooling'
    },
    {
      id: 26,
      name: 'Mustaka',
      scientificName: 'Cyperus rotundus',
      image: '/images/herbs/mustaka.jpg',
      benefits: ['Digestive', 'Anti-diarrheal', 'Fever reducer', 'Anti-inflammatory'],
      dosha: ['kapha', 'pitta'],
      energy: 'cooling'
    },
    {
      id: 27,
      name: 'Pippali',
      scientificName: 'Piper longum',
      image: '/images/herbs/pippali.jpg',
      benefits: ['Digestive', 'Respiratory', 'Bioavailability enhancer', 'Rejuvenative'],
      dosha: ['vata', 'kapha'],
      energy: 'heating'
    },
    {
      id: 28,
      name: 'Shankhapushpi',
      scientificName: 'Convolvulus pluricaulis',
      image: '/images/herbs/shankhapushpi.jpg',
      benefits: ['Nervine', 'Memory enhancer', 'Calming', 'Meditation support'],
      dosha: ['vata', 'pitta'],
      energy: 'cooling'
    },
    {
      id: 29,
      name: 'Vacha',
      scientificName: 'Acorus calamus',
      image: '/images/herbs/vacha.jpg',
      benefits: ['Speech enhancer', 'Cognitive', 'Respiratory', 'Nervine'],
      dosha: ['kapha', 'vata'],
      energy: 'heating'
    },
    {
      id: 30,
      name: 'Yashtimadhu',
      scientificName: 'Glycyrrhiza glabra',
      image: '/images/herbs/yashtimadhu.jpg',
      benefits: ['Demulcent', 'Expectorant', 'Anti-ulcer', 'Adrenal support'],
      dosha: ['pitta', 'vata'],
      energy: 'cooling'
    },
    {
      id: 31,
      name: 'Daruharidra',
      scientificName: 'Berberis aristata',
      image: '/images/herbs/daruharidra.jpg',
      benefits: ['Liver tonic', 'Skin health', 'Anti-diabetic', 'Anti-inflammatory'],
      dosha: ['pitta', 'kapha'],
      energy: 'cooling'
    },
    {
      id: 32,
      name: 'Gudmar',
      scientificName: 'Gymnema sylvestre',
      image: '/images/herbs/gudmar.jpg',
      benefits: ['Sugar metabolism', 'Weight management', 'Pancreatic support', 'Anti-diabetic'],
      dosha: ['kapha'],
      energy: 'cooling'
    },
    {
      id: 33,
      name: 'Haridra',
      scientificName: 'Curcuma longa',
      image: '/images/herbs/haridra.jpg',
      benefits: ['Anti-inflammatory', 'Antioxidant', 'Liver detox', 'Skin health'],
      dosha: ['kapha', 'pitta'],
      energy: 'heating'
    },
    {
      id: 34,
      name: 'Kalmegh',
      scientificName: 'Andrographis paniculata',
      image: '/images/herbs/kalmegh.jpg',
      benefits: ['Liver protector', 'Immune booster', 'Anti-malarial', 'Digestive'],
      dosha: ['pitta', 'kapha'],
      energy: 'cooling'
    },
    {
      id: 35,
      name: 'Musta',
      scientificName: 'Cyperus rotundus',
      image: '/images/herbs/musta.jpg',
      benefits: ['Digestive', 'Anti-diarrheal', 'Fever reducer', 'Anti-inflammatory'],
      dosha: ['kapha', 'pitta'],
      energy: 'cooling'
    },
    {
      id: 36,
      name: 'Nirgundi',
      scientificName: 'Vitex negundo',
      image: '/images/herbs/nirgundi.jpg',
      benefits: ['Anti-inflammatory', 'Pain relief', 'Respiratory', 'Skin health'],
      dosha: ['kapha', 'vata'],
      energy: 'heating'
    },
    {
      id: 37,
      name: 'Pashanbheda',
      scientificName: 'Bergenia ligulata',
      image: '/images/herbs/pashanbheda.jpg',
      benefits: ['Kidney stones', 'Diuretic', 'Anti-inflammatory', 'Urinary health'],
      dosha: ['kapha'],
      energy: 'cooling'
    },
    {
      id: 38,
      name: 'Sariva',
      scientificName: 'Hemidesmus indicus',
      image: '/images/herbs/sariva.jpg',
      benefits: ['Blood purifier', 'Skin health', 'Anti-inflammatory', 'Cooling'],
      dosha: ['pitta'],
      energy: 'cooling'
    },
    {
      id: 39,
      name: 'Shilajit',
      scientificName: 'Mineral pitch',
      image: '/images/herbs/shilajit.jpg',
      benefits: ['Rejuvenative', 'Energy', 'Anti-aging', 'Adaptogen'],
      dosha: ['vata'],
      energy: 'heating'
    },
    {
      id: 40,
      name: 'Tagara',
      scientificName: 'Valeriana wallichii',
      image: '/images/herbs/tagara.jpg',
      benefits: ['Sedative', 'Nervine', 'Anti-spasmodic', 'Sleep aid'],
      dosha: ['vata', 'pitta'],
      energy: 'cooling'
    },
    {
      id: 41,
      name: 'Trikatu',
      scientificName: 'Piper longum, Piper nigrum, Zingiber officinale',
      image: '/images/herbs/trikatu.jpg',
      benefits: ['Digestive', 'Metabolism', 'Kapha reducer', 'Bioavailability enhancer'],
      dosha: ['kapha'],
      energy: 'heating'
    },
    {
      id: 42,
      name: 'Vidanga',
      scientificName: 'Embelia ribes',
      image: '/images/herbs/vidanga.jpg',
      benefits: ['Anti-parasitic', 'Digestive', 'Weight management', 'Detox'],
      dosha: ['kapha'],
      energy: 'heating'
    },
    {
      id: 43,
      name: 'Chandana',
      scientificName: 'Santalum album',
      image: '/images/herbs/chandana.jpg',
      benefits: ['Cooling', 'Skin health', 'Anti-inflammatory', 'Meditation support'],
      dosha: ['pitta'],
      energy: 'cooling'
    },
    {
      id: 44,
      name: 'Eranda',
      scientificName: 'Ricinus communis',
      image: '/images/herbs/eranda.jpg',
      benefits: ['Laxative', 'Anti-inflammatory', 'Pain relief', 'Nervine'],
      dosha: ['vata'],
      energy: 'heating'
    },
    {
      id: 45,
      name: 'Hingu',
      scientificName: 'Ferula asafoetida',
      image: '/images/herbs/hingu.jpg',
      benefits: ['Digestive', 'Carminative', 'Anti-spasmodic', 'Flavor enhancer'],
      dosha: ['vata', 'kapha'],
      energy: 'heating'
    },
    {
      id: 46,
      name: 'Jambu',
      scientificName: 'Syzygium cumini',
      image: '/images/herbs/jambu.jpg',
      benefits: ['Anti-diabetic', 'Astringent', 'Cooling', 'Urinary health'],
      dosha: ['pitta', 'kapha'],
      energy: 'cooling'
    },
    {
      id: 47,
      name: 'Kutaja',
      scientificName: 'Holarrhena antidysenterica',
      image: '/images/herbs/kutaja.jpg',
      benefits: ['Anti-diarrheal', 'Anti-parasitic', 'Digestive', 'Astringent'],
      dosha: ['pitta', 'kapha'],
      energy: 'cooling'
    },
    {
      id: 48,
      name: 'Lodhra',
      scientificName: 'Symplocos racemosa',
      image: '/images/herbs/lodhra.jpg',
      benefits: ['Astringent', 'Female health', 'Anti-inflammatory', 'Skin health'],
      dosha: ['kapha', 'pitta'],
      energy: 'cooling'
    },
    {
      id: 49,
      name: 'Madhuka',
      scientificName: 'Madhuca longifolia',
      image: '/images/herbs/madhuka.jpg',
      benefits: ['Demulcent', 'Expectorant', 'Tonic', 'Rejuvenative'],
      dosha: ['vata', 'pitta'],
      energy: 'cooling'
    },
    {
      id: 50,
      name: 'Nagakesara',
      scientificName: 'Mesua ferrea',
      image: '/images/herbs/nagakesara.jpg',
      benefits: ['Astringent', 'Anti-inflammatory', 'Fragrance', 'Uterine tonic'],
      dosha: ['kapha', 'pitta'],
      energy: 'cooling'
    }
  ];

  const filteredHerbs = herbs.filter(herb => {
    const matchesSearch = herb.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         herb.scientificName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDosha = selectedDosha ? herb.dosha.includes(selectedDosha as any) : true;
    const matchesEnergy = selectedEnergy ? herb.energy === selectedEnergy : true;
    
    return matchesSearch && matchesDosha && matchesEnergy;
  });

  const resetFilters = () => {
    setSelectedDosha(null);
    setSelectedEnergy(null);
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <div className="relative h-64 flex items-center justify-center bg-gradient-to-r from-green-800 to-amber-800">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Ayurvedic Herb Directory</h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Discover the healing power of nature's pharmacy with traditional Ayurvedic herbs
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter Section */}
        <motion.div 
          className="bg-white rounded-xl shadow-md p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search herbs by name or scientific name..."
                className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 px-4 py-3 bg-amber-100 hover:bg-amber-200 text-amber-800 rounded-lg transition-colors"
            >
              <FaFilter /> Filters
            </button>
          </div>

          {/* Filter Panel */}
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 overflow-hidden"
              >
                <div className="border-t pt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium text-gray-700 mb-3 flex items-center gap-2">
                      <FaBalanceScale /> Balance for Dosha
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {['vata', 'pitta', 'kapha'].map(dosha => (
                        <button
                          key={dosha}
                          onClick={() => setSelectedDosha(selectedDosha === dosha ? null : dosha)}
                          className={`px-4 py-2 rounded-full text-sm capitalize ${selectedDosha === dosha 
                            ? dosha === 'vata' ? 'bg-amber-500 text-white' 
                              : dosha === 'pitta' ? 'bg-red-500 text-white' 
                              : 'bg-blue-500 text-white'
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
                        >
                          {dosha}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-700 mb-3 flex items-center gap-2">
                      <GiHealing /> Energetic Quality
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {['heating', 'cooling', 'neutral'].map(energy => (
                        <button
                          key={energy}
                          onClick={() => setSelectedEnergy(selectedEnergy === energy ? null : energy)}
                          className={`px-4 py-2 rounded-full text-sm capitalize flex items-center gap-1 ${selectedEnergy === energy 
                            ? energy === 'heating' ? 'bg-red-100 text-red-800 border border-red-200' 
                              : energy === 'cooling' ? 'bg-blue-100 text-blue-800 border border-blue-200' 
                              : 'bg-gray-100 text-gray-800 border border-gray-200'
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
                        >
                          {energy === 'heating' ? <FaFire /> : energy === 'cooling' ? <FaSnowflake /> : <FaTint />}
                          {energy}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                {(selectedDosha || selectedEnergy) && (
                  <div className="mt-4 pt-4 border-t flex justify-end">
                    <button
                      onClick={resetFilters}
                      className="text-sm text-amber-600 hover:text-amber-800 font-medium"
                    >
                      Clear all filters
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Results Count */}
        <div className="mb-6 flex justify-between items-center">
          <p className="text-gray-600">
            Showing {filteredHerbs.length} {filteredHerbs.length === 1 ? 'herb' : 'herbs'}
          </p>
          {filteredHerbs.length === 0 && (
            <button
              onClick={resetFilters}
              className="text-sm bg-amber-100 hover:bg-amber-200 text-amber-800 px-4 py-2 rounded-lg"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* Herb Grid */}
        {filteredHerbs.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {filteredHerbs.map(herb => (
              <motion.div
                key={herb.id}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedHerb(herb)}
              >
                <div className="relative h-48 bg-gray-100">
                  <Image
                    src={herb.image}
                    alt={herb.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{herb.name}</h3>
                    <div className="flex gap-1">
                      {herb.dosha.map(d => (
                        <span
                          key={d}
                          className={`w-4 h-4 rounded-full ${d === 'vata' ? 'bg-amber-400' : d === 'pitta' ? 'bg-red-400' : 'bg-blue-400'}`}
                          title={d}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm italic text-gray-500 mb-3">{herb.scientificName}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs ${herb.energy === 'heating' ? 'bg-red-100 text-red-800' : herb.energy === 'cooling' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
                      {herb.energy}
                    </span>
                    <span className="text-xs text-gray-500">
                      {herb.taste?.join(', ') || ''}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {herb.usedFor?.slice(0, 3).map(use => (
                      <span key={use} className="bg-amber-50 text-amber-800 text-xs px-2 py-1 rounded">
                        {use}
                      </span>
                    ))}
                    {herb.usedFor && herb.usedFor.length > 3 && (
                      <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded">
                        +{herb.usedFor.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="bg-white rounded-xl shadow-md p-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <GiHerbsBundle className="mx-auto text-4xl text-gray-300 mb-4" />
            <h3 className="text-xl font-medium text-gray-700 mb-2">No herbs found</h3>
            <p className="text-gray-500 mb-4">Try adjusting your search or filters</p>
            <button
              onClick={resetFilters}
              className="bg-amber-100 hover:bg-amber-200 text-amber-800 px-6 py-2 rounded-lg"
            >
              Reset filters
            </button>
          </motion.div>
        )}
      </div>

      {/* Herb Detail Modal */}
      <AnimatePresence>
        {selectedHerb && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative h-64 md:h-80 bg-gray-100">
                <Image
                  src={selectedHerb.image}
                  alt={selectedHerb.name}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => setSelectedHerb(null)}
                  className="absolute top-4 right-4 bg-white/80 hover:bg-white p-2 rounded-full shadow"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{selectedHerb.name}</h2>
                    <p className="text-lg italic text-gray-500">{selectedHerb.scientificName}</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex items-center gap-1 bg-amber-50 text-amber-800 px-3 py-1 rounded-full">
                      <FaLeaf />
                      <span className="text-sm font-medium">Ayurvedic Herb</span>
                    </div>
                    <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${selectedHerb.energy === 'heating' ? 'bg-red-50 text-red-800' : selectedHerb.energy === 'cooling' ? 'bg-blue-50 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
                      {selectedHerb.energy === 'heating' ? <FaFire /> : selectedHerb.energy === 'cooling' ? <FaSnowflake /> : <FaTint />}
                      {selectedHerb.energy}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-amber-50 rounded-lg p-4">
                    <h4 className="font-medium text-amber-800 mb-2">Dosha Balance</h4>
                    <div className="flex gap-2">
                      {['vata', 'pitta', 'kapha'].map(dosha => (
                        <div key={dosha} className="flex flex-col items-center">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${selectedHerb.dosha.includes(dosha as any) ? 
                            dosha === 'vata' ? 'bg-amber-400' : 
                            dosha === 'pitta' ? 'bg-red-400' : 
                            'bg-blue-400' : 'bg-gray-200'}`}>
                            {selectedHerb.dosha.includes(dosha as any) ? (
                              <span className="text-white text-xs">{dosha.charAt(0).toUpperCase()}</span>
                            ) : null}
                          </div>
                          <span className="text-xs text-gray-600 mt-1 capitalize">{dosha}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-medium text-green-800 mb-2">Taste (Rasa)</h4>
                    <div className="flex flex-wrap gap-1">
                      {selectedHerb.taste?.map(taste => (
                        <span key={taste} className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs capitalize">
                          {taste}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-medium text-blue-800 mb-2">Dosage</h4>
                    <p className="text-blue-700">{selectedHerb.dosage || ''}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Key Benefits</h3>
                    <ul className="space-y-3">
                      {selectedHerb.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Common Uses</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedHerb.usedFor?.map(use => (
                        <span key={use} className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Contraindications</h3>
                    <p className="text-gray-700">{selectedHerb.contraindications || 'None known when used appropriately.'}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Traditional Knowledge</h3>
                    <p className="text-gray-700">
                      This herb has been used in Ayurveda for centuries. Consult an Ayurvedic practitioner for personalized recommendations.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HerbDirectory;