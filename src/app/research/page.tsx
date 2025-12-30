'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaFlask } from 'react-icons/fa';
import { MdScience, MdBiotech, MdWork } from 'react-icons/md';

const ResearchPage = () => {
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
                Ayurvedic Research
                </h1>
                <p className="text-xl sm:text-2xl text-emerald-800 leading-relaxed drop-shadow-sm">
                Pioneering the future of traditional medicine through scientific exploration
                </p>
              </div>
            </div>
          </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          className="bg-white rounded-xl shadow-md p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="bg-amber-100 p-4 rounded-full">
                <MdWork className="text-4xl text-amber-600" />
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Research Journey
            </h2>
            
            <p className="text-lg text-gray-600 mb-6">
              While we don't have published research studies at this time, our team is actively engaged in rigorous scientific exploration to validate and enhance traditional Ayurvedic knowledge.
            </p>
            
            <div className="bg-amber-50 rounded-lg p-6 mb-8 text-left">
              <h3 className="text-xl font-semibold text-amber-800 mb-4 flex items-center gap-2">
                <FaFlask className="text-amber-600" />
                Current Research Focus
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>Clinical validation of traditional formulations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>Pharmacological studies on rare medicinal plants</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>Standardization of Ayurvedic preparation methods</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>Safety and efficacy studies of herbal combinations</span>
                </li>
              </ul>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="bg-amber-50/70 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-amber-800 mb-4 flex items-center gap-2">
                  <MdScience className="text-amber-600" />
                  Our Approach
                </h3>
                <p className="text-gray-700">
                  We combine ancient Ayurvedic wisdom with modern research methodologies to develop evidence-based formulations that meet international standards of safety and efficacy.
                </p>
              </div>
              
              <div className="bg-amber-50/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-amber-800 mb-4 flex items-center gap-2">
                  <MdBiotech className="text-amber-600" />
                  Future Directions
                </h3>
                <p className="text-gray-700">
                  We're establishing partnerships with research institutions to conduct clinical trials and publish peer-reviewed studies that will advance the scientific understanding of Ayurveda.
                </p>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-lg font-medium text-gray-700 mb-4">
                Interested in collaborating or learning more about our research initiatives?
              </h3>
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Contact Our Research Team
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResearchPage;