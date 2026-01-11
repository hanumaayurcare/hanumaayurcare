import { Button } from '@/src/components/ui/button';
import { Card, CardContent } from '@/src/components/ui/card';
import { 
  Building2, 
  Users2, 
  Leaf,
  Target,
  Heart,
  ArrowRight,
  Sprout,
  Droplets,
  Microscope,
  Recycle,
  Eye
} from 'lucide-react';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#0d3b1f] py-20 overflow-hidden text-white">
        <div className="absolute inset-0 opacity-10 bg-[url('/hero/about-bg.jpg')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-green-100 text-sm font-medium mb-6">
              <Leaf className="w-4 h-4" />
              <span>Authentic Ayurveda Since 1920</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Who We Are
            </h1>
            <p className="text-xl text-green-100/90 max-w-3xl mx-auto leading-relaxed">
              Welcome to a world where ancient wisdom and modern science converge. We're not just manufacturers; we're one of the many custodians of a 5,000-year-old healing tradition, reimagined for the 21st century.
            </p>
        </div>
      </section>

      {/* Narrative Section - Our Roots */}
      <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-green-950 mb-6">Our Roots, Your Wellness</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Born from the lush fields of <span className="font-semibold text-green-800">Angalakuduru, Tenali, Guntur District of Andhra Pradesh</span>, our journey began with a simple belief: nature holds the key to holistic health. Today, we stand at the forefront of Ayurvedic innovation, bridging time-honoured practices with cutting-edge technology.
              </p>
          </div>
      </section>

      {/* Philosophy Grid */}
      <section className="py-20 bg-[#f8faf8]">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-green-950">The Hanuma Ayur Care Philosophy</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {/* Purity */}
                  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow dark:bg-gray-800">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                          <Droplets className="w-6 h-6 text-green-700" />
                      </div>
                      <h3 className="text-xl font-bold text-green-900 mb-4">Purity in Every Drop</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                          Our formulations are a testament to nature's bounty, untainted by artificial additives.
                      </p>
                  </div>

                  {/* Precision */}
                  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow dark:bg-gray-800">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                          <Microscope className="w-6 h-6 text-blue-700" />
                      </div>
                      <h3 className="text-xl font-bold text-green-900 mb-4">Precision Meets Tradition</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                          Advanced manufacturing techniques preserve the potency of each herb, ensuring maximum efficacy.
                      </p>
                  </div>

                  {/* Sustainability */}
                  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow dark:bg-gray-800">
                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                          <Recycle className="w-6 h-6 text-orange-700" />
                      </div>
                      <h3 className="text-xl font-bold text-green-900 mb-4">Sustainability at Heart</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                          We nurture the earth that nurtures us, implementing eco-conscious practices at every step.
                      </p>
                  </div>

                  {/* Transparency */}
                  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow dark:bg-gray-800">
                      <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                          <Eye className="w-6 h-6 text-teal-700" />
                      </div>
                      <h3 className="text-xl font-bold text-green-900 mb-4">Transparency in Action</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                          From farm to bottle, we invite you to trace the journey of your wellness companions.
                      </p>
                  </div>
              </div>
          </div>
      </section>

      {/* Mission & Vision - Full Width Split */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Mission */}
            <div className="bg-green-50 rounded-3xl p-10 flex flex-col justify-center relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-green-200/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-green-300/50 transition-colors"></div>
                 <div className="relative z-10">
                   <div className="flex items-center gap-3 mb-6">
                     <div className="w-10 h-10 bg-green-200 rounded-lg flex items-center justify-center">
                       <Target className="w-5 h-5 text-green-800" />
                     </div>
                     <span className="text-sm font-bold text-green-800 uppercase tracking-widest">Our Mission</span>
                   </div>
                   <h3 className="text-2xl font-bold text-green-950 mb-4 leading-tight">
                     Crafting Nature's Wisdom into Modern Wellness
                   </h3>
                   <p className="text-lg text-green-900/80 leading-relaxed mb-6 font-medium">
                     Empowering Lives Through Authentic Ayurveda.
                   </p>
                   <p className="text-sm text-green-800/70 leading-relaxed border-t border-green-200 pt-6">
                     Harmonizing Ancient Wisdom with Modern Science: Cultivating Holistic Health Through Pure Ayurvedic Innovation.
                   </p>
                 </div>
            </div>

            {/* Vision */}
            <div className="bg-green-900 rounded-3xl p-10 flex flex-col justify-center relative overflow-hidden text-white group">
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 group-hover:bg-green-400/20 transition-colors"></div>
                 <div className="relative z-10">
                   <div className="flex items-center gap-3 mb-6">
                     <div className="w-10 h-10 bg-green-800 rounded-lg flex items-center justify-center">
                       <Heart className="w-5 h-5 text-green-100" />
                     </div>
                     <span className="text-sm font-bold text-green-200 uppercase tracking-widest">Our Vision</span>
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                     Global Catalyst for a Wellness Revolution
                   </h3>
                   <p className="text-lg text-green-100/90 leading-relaxed mb-6 font-medium">
                     Where Ayurveda's timeless wisdom becomes the cornerstone of modern health.
                   </p>
                   <p className="text-sm text-green-100/60 leading-relaxed border-t border-green-800 pt-6">
                     To inspire a world where Ayurveda is the foundation of holistic health, fostering a community that thrives on natural wellness, sustainable practices, and the harmony of body, mind, and spirit.
                   </p>
                 </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hub Navigation Grid */}
      <section className="py-20 bg-[#fcfdfc] border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-green-950 mb-4">Explore Our World</h2>
                  <p className="text-gray-600">Dive deeper into the pillars that define our excellence.</p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   {/* Infrastructure Link */}
                   <Link href="/about/facilities" className="group block h-full">
                       <div className="bg-white rounded-2xl p-8 h-full shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 group-hover:-translate-y-2">
                           <div className="flex items-center gap-4 mb-6">
                               <div className="bg-green-50 p-3 rounded-xl group-hover:bg-green-100 transition-colors">
                                   <Building2 className="w-8 h-8 text-green-700" />
                               </div>
                               <h3 className="text-xl font-bold text-green-950">Infrastructure</h3>
                           </div>
                           <p className="text-gray-600 mb-6 leading-relaxed">
                               Explore our GMP-certified production blocks, Industry 4.0 automation, and quality control labs.
                           </p>
                           <span className="text-green-800 font-bold inline-flex items-center group-hover:gap-2 transition-all">
                               Explore Facilities <ArrowRight className="w-5 h-5 ml-2"/>
                           </span>
                       </div>
                   </Link>

                   {/* Team Link */}
                   <Link href="/about/team" className="group block h-full">
                       <div className="bg-white rounded-2xl p-8 h-full shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 group-hover:-translate-y-2">
                           <div className="flex items-center gap-4 mb-6">
                               <div className="bg-orange-50 p-3 rounded-xl group-hover:bg-orange-100 transition-colors">
                                   <Users2 className="w-8 h-8 text-orange-700" />
                               </div>
                               <h3 className="text-xl font-bold text-orange-950">Our Team</h3>
                           </div>
                           <p className="text-gray-600 mb-6 leading-relaxed">
                               Meet the Vaidyas, Scientists, and Visionaries driving our mission forward.
                           </p>
                            <span className="text-orange-800 font-bold inline-flex items-center group-hover:gap-2 transition-all">
                               Meet Leadership <ArrowRight className="w-5 h-5 ml-2"/>
                           </span>
                       </div>
                   </Link>

                   {/* Sustainability Link */}
                   <Link href="/about/sustainability" className="group block h-full">
                       <div className="bg-white rounded-2xl p-8 h-full shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 group-hover:-translate-y-2">
                           <div className="flex items-center gap-4 mb-6">
                               <div className="bg-blue-50 p-3 rounded-xl group-hover:bg-blue-100 transition-colors">
                                   <Leaf className="w-8 h-8 text-blue-700" />
                               </div>
                               <h3 className="text-xl font-bold text-blue-950">Sustainability</h3>
                           </div>
                           <p className="text-gray-600 mb-6 leading-relaxed">
                               Discover our commitment to ethical sourcing, Zero Liquid Discharge (ZLD), and green energy.
                           </p>
                            <span className="text-blue-800 font-bold inline-flex items-center group-hover:gap-2 transition-all">
                               View Impact <ArrowRight className="w-5 h-5 ml-2"/>
                           </span>
                       </div>
                   </Link>
               </div>
          </div>
      </section>

      {/* Call to Action Banner */}
      <section className="bg-green-950 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                  <h2 className="text-2xl font-bold mb-2">Want to know detailed history?</h2>
                  <p className="text-green-200">Trace our roots from 1920 to present day.</p>
              </div>
              <Button asChild variant="secondary" size="lg" className="rounded-full px-8 bg-white text-green-950 hover:bg-green-50">
                  <Link href="/about/company-story">Read Full History</Link>
              </Button>
          </div>
      </section>
    </div>
  );
}
