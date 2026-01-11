import { Calendar, Award, Globe, Leaf, Droplets, Microscope, Recycle, Eye, Heart } from 'lucide-react';
import Image from 'next/image';

export default function CompanyStory() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-[#0d3b1f] py-24 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/hero/story-bg.jpg')] bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 z-10 text-center">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6 backdrop-blur-sm">
               <Leaf className="w-4 h-4" />
               <span>Since 1920</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Our Journey</h1>
            <p className="text-xl max-w-3xl mx-auto text-green-100/90 leading-relaxed">
               Welcome to a world where ancient wisdom and modern science converge. We're not just manufacturers; we're one of the many custodians of a 5,000-year-old healing tradition, reimagined for the 21st century.
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
          
          {/* Our Roots Section */}
          <div className="mb-24 max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-green-950 mb-6">Our Roots, Your Wellness</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Born from the lush fields of <span className="font-semibold text-green-800">Angalakuduru, Tenali, Guntur District of Andhra Pradesh</span>, our journey began with a simple belief: nature holds the key to holistic health. Today, we stand at the forefront of Ayurvedic innovation, bridging time-honoured practices with cutting-edge technology.
              </p>
          </div>

          {/* Philosophy Section */}
          <div className="mb-24">
              <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-green-950">The Hanuma Ayur Care Philosophy</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-green-50 p-8 rounded-2xl flex gap-6">
                      <div className="shrink-0">
                          <Droplets className="w-10 h-10 text-green-700" />
                      </div>
                      <div>
                          <h3 className="text-xl font-bold text-green-950 mb-2">Purity in Every Drop</h3>
                          <p className="text-gray-700 text-sm leading-relaxed">Our formulations are a testament to nature's bounty, untainted by artificial additives.</p>
                      </div>
                  </div>

                  <div className="bg-blue-50 p-8 rounded-2xl flex gap-6">
                      <div className="shrink-0">
                          <Microscope className="w-10 h-10 text-blue-700" />
                      </div>
                      <div>
                          <h3 className="text-xl font-bold text-blue-950 mb-2">Precision Meets Tradition</h3>
                          <p className="text-gray-700 text-sm leading-relaxed">Advanced manufacturing techniques preserve the potency of each herb, ensuring maximum efficacy.</p>
                      </div>
                  </div>

                  <div className="bg-orange-50 p-8 rounded-2xl flex gap-6">
                      <div className="shrink-0">
                          <Recycle className="w-10 h-10 text-orange-700" />
                      </div>
                      <div>
                          <h3 className="text-xl font-bold text-orange-950 mb-2">Sustainability at Heart</h3>
                          <p className="text-gray-700 text-sm leading-relaxed">We nurture the earth that nurtures us, implementing eco-conscious practices at every step.</p>
                      </div>
                  </div>

                  <div className="bg-teal-50 p-8 rounded-2xl flex gap-6">
                      <div className="shrink-0">
                          <Eye className="w-10 h-10 text-teal-700" />
                      </div>
                      <div>
                          <h3 className="text-xl font-bold text-teal-950 mb-2">Transparency in Action</h3>
                          <p className="text-gray-700 text-sm leading-relaxed">From farm to bottle, we invite you to trace the journey of your wellness companions.</p>
                      </div>
                  </div>
              </div>
          </div>

      </div>
    </div>
  );
}
