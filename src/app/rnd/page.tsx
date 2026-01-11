import { FlaskConical, Microscope, FileCheck, Share2 } from 'lucide-react';

export default function RNDPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gradient-to-r from-gray-900 to-green-950 py-24 text-white">
         <div className="container mx-auto px-4">
             <span className="text-[#c58f51] font-bold tracking-widest text-sm uppercase mb-2 block">Innovation Center</span>
             <h1 className="text-4xl md:text-6xl font-bold mb-6">Research & Development</h1>
             <p className="text-lg text-gray-300 max-w-2xl">Bridging the gap between ancient texts and modern therapeutics through rigorous scientific validation.</p>
         </div>
      </div>

      <div className="container mx-auto px-4 py-20">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
             {/* Key Focus Areas */}
             <div>
                <h2 className="text-3xl font-bold text-green-950 mb-8">Focus Areas</h2>
                <div className="space-y-8">
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 text-green-700">
                           <FlaskConical className="w-6 h-6" />
                        </div>
                        <div>
                           <h3 className="text-xl font-bold text-green-900 mb-2">New Formulations</h3>
                           <p className="text-gray-600">Developing proprietary evidence-backed Ayurvedic medicines targeted at lifestyle disorders.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 text-green-700">
                           <Microscope className="w-6 h-6" />
                        </div>
                        <div>
                           <h3 className="text-xl font-bold text-green-900 mb-2">Standardized Extracts</h3>
                           <p className="text-gray-600">Creating high-potency herbal extracts with quantified active markers for consistent efficacy.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 text-green-700">
                           <FileCheck className="w-6 h-6" />
                        </div>
                        <div>
                           <h3 className="text-xl font-bold text-green-900 mb-2">Clinical Validation</h3>
                           <p className="text-gray-600">Conducting observational studies and collaborating with hospitals for clinical data generation.</p>
                        </div>
                    </div>
                </div>
             </div>

             {/* Right Panel - Stats/IP */}
             <div className="bg-[#f8faf8] p-8 rounded-2xl border border-green-50">
                 <h3 className="text-2xl font-bold text-green-950 mb-6">Intellectual Property</h3>
                 <div className="grid grid-cols-2 gap-6 mb-10">
                     <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                         <div className="text-3xl font-bold text-[#c58f51] mb-1">15+</div>
                         <div className="text-gray-500 text-sm">Proprietary Formulas</div>
                     </div>
                     <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                         <div className="text-3xl font-bold text-[#c58f51] mb-1">5+</div>
                         <div className="text-gray-500 text-sm">Patents Filed</div>
                     </div>
                 </div>
                 
                 <h3 className="text-xl font-bold text-green-900 mb-4">Collaborations</h3>
                 <div className="flex flex-wrap gap-3">
                     <span className="bg-white px-4 py-2 rounded-full border text-sm text-gray-700 font-medium">Ayurvedic Universities</span>
                     <span className="bg-white px-4 py-2 rounded-full border text-sm text-gray-700 font-medium">Research Institutes</span>
                     <span className="bg-white px-4 py-2 rounded-full border text-sm text-gray-700 font-medium">Wellness Clinics</span>
                 </div>
             </div>
         </div>
      </div>
    </div>
  );
}
