'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaLeaf, FaYinYang, FaBalanceScale } from 'react-icons/fa';
import { GiMedicines, GiBodyBalance } from 'react-icons/gi';
import { MdOutlineWaterDrop } from 'react-icons/md';
import { IoEarth, IoFlame } from 'react-icons/io5';
import { TbMoodHappy } from 'react-icons/tb';
import { RiMentalHealthLine } from 'react-icons/ri';

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

export default function PrinciplesPage() {
  const corePrinciples = [
    {
      title: "Prakruti",
      icon: <FaYinYang className="w-8 h-8" />,
      description: "Your unique constitution",
      details: "The inherent balance of the three doshas (Vata, Pitta, Kapha) that you're born with, determining your physical and mental characteristics.",
      color: "from-amber-50 to-lime-50"
    },
    {
      title: "Vikruti",
      icon: <GiBodyBalance className="w-8 h-8" />,
      description: "Current state of balance",
      details: "The present condition of your body-mind system, which may differ from your natural constitution due to lifestyle, diet, and environmental factors.",
      color: "from-lime-50 to-amber-50"
    },
    {
      title: "Panchamahabhutas",
      icon: <IoEarth className="w-8 h-8" />,
      description: "Five elements theory",
      details: "Everything in nature is composed of the five elements: Space (Akasha), Air (Vayu), Fire (Agni), Water (Jala), and Earth (Prithvi).",
      color: "from-amber-50 to-lime-50"
    }
  ];

  const doshas = [
    {
      name: "Vata",
      icon: <MdOutlineWaterDrop className="w-12 h-12" />,
      elements: "Air & Space",
      qualities: ["Light", "Cold", "Dry", "Mobile"],
      functions: ["Movement", "Breathing", "Natural urges", "Tissue transformation"],
      color: "from-blue-50 to-purple-50"
    },
    {
      name: "Pitta",
      icon: <IoFlame className="w-12 h-12" />,
      elements: "Fire & Water",
      qualities: ["Hot", "Sharp", "Light", "Liquid"],
      functions: ["Digestion", "Metabolism", "Intelligence", "Body temperature"],
      color: "from-amber-50 to-red-50"
    },
    {
      name: "Kapha",
      icon: <IoEarth className="w-12 h-12" />,
      elements: "Earth & Water",
      qualities: ["Heavy", "Cold", "Oily", "Stable"],
      functions: ["Structure", "Lubrication", "Immunity", "Strength"],
      color: "from-green-50 to-blue-50"
    }
  ];

  const subDoshas = [
    {
      title: "The Five Sub-doshas of Vata",
      items: ["Prana (Life force)", "Udana (Upward energy)", "Samana (Balancing energy)", "Apana (Downward energy)", "Vyana (Pervasive energy)"]
    },
    {
      title: "The Five Sub-doshas of Pitta",
      items: ["Pachaka (Digestive fire)", "Ranjaka (Blood production)", "Sadhaka (Heart and emotions)", "Alochaka (Vision)", "Bhrajaka (Skin luster)"]
    },
    {
      title: "The Five Sub-doshas of Kapha",
      items: ["Kledaka (Mucus protection)", "Avalambaka (Cardiac strength)", "Bodhaka (Taste perception)", "Tarpaka (Brain protection)", "Shleshaka (Joint lubrication)"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative py-24">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/ayurveda-principles.jpg"
            alt="Ayurvedic Principles"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50/90 via-lime-50/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-6xl font-bold text-amber-800 mb-6">
              Principles of Ayurveda
            </h1>
            <p className="text-xl text-amber-700 mb-8">
              Discover the foundational concepts that form the basis of Ayurvedic wisdom and healing
            </p>
          </div>
        </div>
      </div>

      {/* Core Principles Section */}
      <section className="py-16 bg-gradient-to-br from-amber-100/70 via-amber-50/60 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-amber-800 mb-12">
            Core Principles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corePrinciples.map((principle, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className={`p-6 rounded-2xl bg-gradient-to-br ${principle.color} shadow-sm hover:shadow-md transition-all backdrop-blur-sm`}
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white/80 rounded-full shadow-sm">
                  <div className="text-amber-600">{principle.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-amber-800 text-center mb-2">
                  {principle.title}
                </h3>
                <p className="text-amber-700 text-center mb-4">{principle.description}</p>
                <p className="text-gray-600 text-sm text-center">{principle.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Doshas Section */}
      <section className="py-16 bg-gradient-to-br from-lime-100/70 via-lime-50/60 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-amber-800 mb-4">
            The Three Doshas
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            The three fundamental energies that govern all physical and mental processes in the body and mind
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doshas.map((dosha, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className={`p-6 rounded-2xl bg-gradient-to-br ${dosha.color} shadow-sm hover:shadow-md transition-all backdrop-blur-sm border border-white/50`}
              >
                <div className="text-amber-600 flex justify-center mb-4">{dosha.icon}</div>
                <h3 className="text-2xl font-bold text-amber-800 text-center mb-2">{dosha.name}</h3>
                <p className="text-amber-700 text-center mb-4">{dosha.elements}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-amber-800 mb-2">Qualities:</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {dosha.qualities.map((quality, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/70 rounded-full text-sm text-amber-700 border border-amber-100/30"
                      >
                        {quality}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-amber-800 mb-2">Functions:</h4>
                  <ul className="space-y-1">
                    {dosha.functions.map((function_, i) => (
                      <li key={i} className="text-gray-600 text-sm flex items-center gap-2">
                        <span className="text-lime-600">•</span>
                        {function_}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-doshas Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50/70 via-amber-50/60 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-amber-800 mb-12">
            Sub-doshas (Upadoshas)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subDoshas.map((section, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="p-6 rounded-2xl bg-white/90 shadow-sm hover:shadow-md transition-all backdrop-blur-sm border border-orange-100/30"
              >
                <h3 className="text-xl font-semibold text-amber-800 mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <span className="text-orange-500 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-lime-50/50 via-amber-50/30 to-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-amber-50/90 via-lime-50/80 to-white rounded-2xl p-8 md:p-12 shadow-lg border border-amber-100/30 backdrop-blur-sm">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-amber-900 mb-6">
                Begin Your Ayurvedic Journey
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Understanding these principles is the first step towards achieving optimal health through Ayurveda.
                Discover your unique constitution and learn how to maintain balance in your life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-lime-600 text-white hover:bg-lime-700 px-8 py-4 rounded-full font-medium transition-colors">
                  Take Dosha Quiz
                </button>
                <button className="bg-transparent border-2 border-amber-600 text-amber-800 hover:bg-amber-50 px-8 py-4 rounded-full font-medium transition-colors">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
