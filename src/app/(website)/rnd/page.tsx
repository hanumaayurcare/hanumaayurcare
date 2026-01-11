import { FlaskConical, Atom, Scroll, Network, Award, Beaker } from 'lucide-react';
import Image from 'next/image';

export default function RNDPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-[#0d3b1f] py-24 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
             {/* Placeholder for R&D Lab Image */}
            <div className="w-full h-full bg-[url('/hero/rnd-bg.jpg')] bg-cover bg-center"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 z-10 text-center">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-100 text-sm font-medium mb-6 backdrop-blur-sm">
               <Atom className="w-4 h-4" />
               <span>Innovation Center</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">R&D & Innovation</h1>
            <p className="text-xl max-w-2xl mx-auto text-green-100/90 leading-relaxed">
               Bridging the gap between ancient texts and modern therapeutics. Our science-driven approach ensures every formulation is safe, effective, and standardized.
            </p>
        </div>
      </div>

      {/* Focus Areas */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
             <div className="text-center mb-16">
                 <h2 className="text-3xl font-bold text-green-950 mb-4">Core Focus Areas</h2>
                 <p className="text-gray-600 max-w-2xl mx-auto">
                     We don't just reproduce old recipes; we evolve them for the modern world through rigorous scientific validation.
                 </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                 <div className="bg-green-50 rounded-3xl p-10 border border-green-100">
                     <FlaskConical className="w-12 h-12 text-green-600 mb-6" />
                     <h3 className="text-2xl font-bold text-green-950 mb-4">Evidence-Backed Ayurveda</h3>
                     <p className="text-gray-700 leading-relaxed mb-6">
                         Developing new Poly-herbal formulations that address contemporary lifestyle disorders like diabetes, stress, and immunity. Every new product undergoes:
                     </p>
                     <ul className="space-y-3">
                         <li className="flex items-center gap-3">
                             <div className="w-2 h-2 rounded-full bg-green-500"></div>
                             <span className="text-green-900 font-medium">Literature Review from Samhitas</span>
                         </li>
                         <li className="flex items-center gap-3">
                             <div className="w-2 h-2 rounded-full bg-green-500"></div>
                             <span className="text-green-900 font-medium">Pre-clinical Safety Studies</span>
                         </li>
                         <li className="flex items-center gap-3">
                             <div className="w-2 h-2 rounded-full bg-green-500"></div>
                             <span className="text-green-900 font-medium">Efficacy Validation</span>
                         </li>
                     </ul>
                 </div>
                 
                 <div className="bg-blue-50 rounded-3xl p-10 border border-blue-100">
                     <Beaker className="w-12 h-12 text-blue-600 mb-6" />
                     <h3 className="text-2xl font-bold text-blue-950 mb-4">Standardized Extracts</h3>
                     <p className="text-gray-700 leading-relaxed mb-6">
                         Moving beyond raw powders to highly potent, standardized extracts with quantified active markers (e.g., Curcumin in Turmeric, Withanolides in Ashwagandha).
                     </p>
                     <ul className="space-y-3">
                         <li className="flex items-center gap-3">
                             <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                             <span className="text-blue-900 font-medium">Consistent Potency in Every Batch</span>
                         </li>
                         <li className="flex items-center gap-3">
                             <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                             <span className="text-blue-900 font-medium">Higher Bioavailability</span>
                         </li>
                         <li className="flex items-center gap-3">
                             <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                             <span className="text-blue-900 font-medium">Solvent-Free Extraction Methods</span>
                         </li>
                     </ul>
                 </div>
             </div>
             
             {/* IP & Development Strip */}
             <div className="bg-gray-900 rounded-3xl p-10 md:p-16 text-white mb-24">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                     <div>
                         <h2 className="text-3xl font-bold mb-6">IP & Formulations</h2>
                         <p className="text-gray-400 leading-relaxed mb-8">
                             Our intellectual property portfolio includes proprietary blends and novel delivery systems. We operate a dedicated Pilot Plant to scale up lab-level innovations to commercial batch sizes efficiently.
                         </p>
                         <div className="flex gap-6">
                             <div className="bg-white/10 p-4 rounded-xl">
                                 <Scroll className="w-8 h-8 text-yellow-400 mb-2" />
                                 <div className="font-bold">Patents / Trademarks</div>
                                 <div className="text-sm text-gray-400">Filed & Granted</div>
                             </div>
                             <div className="bg-white/10 p-4 rounded-xl">
                                 <Award className="w-8 h-8 text-yellow-400 mb-2" />
                                 <div className="font-bold">Pilot Plant</div>
                                 <div className="text-sm text-gray-400">Scale-up Dev</div>
                             </div>
                         </div>
                     </div>
                     <div className="flex items-center justify-center bg-white/5 rounded-2xl border border-white/10 p-8">
                         <div className="text-center">
                             <div className="text-5xl font-bold text-yellow-400 mb-2">15+</div>
                             <div className="text-lg text-gray-300">New Formulations per Year</div>
                         </div>
                     </div>
                 </div>
             </div>

             {/* Collaborations */}
             <div className="text-center mb-10">
                 <h2 className="text-3xl font-bold text-green-950 mb-12">Collaborations</h2>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                         <Network className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                         <h3 className="font-bold text-lg text-gray-900 mb-2">Research Institutes</h3>
                         <p className="text-gray-600 text-sm">Joint studies with leading Ayurvedic colleges on pharmacology and toxicology.</p>
                     </div>
                     <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                         <FlaskConical className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                         <h3 className="font-bold text-lg text-gray-900 mb-2">Clinical Trials</h3>
                         <p className="text-gray-600 text-sm">Observational studies conducted at our partner hospitals to validate real-world results.</p>
                     </div>
                     <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                         <Atom className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                         <h3 className="font-bold text-lg text-gray-900 mb-2">Tech Partners</h3>
                         <p className="text-gray-600 text-sm">Collaborating with agronomy experts for high-yield, organic herb cultivation.</p>
                     </div>
                 </div>
             </div>
        </div>
      </section>
    </div>
  );
}
