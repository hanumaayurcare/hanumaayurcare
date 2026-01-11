import { Factory, ShieldCheck, ClipboardCheck, ArrowRight, Settings } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ManufacturingPage() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <div className="relative bg-[#0d3b1f] py-20 lg:py-32 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <Image 
                src="/hero/manufacturing-bg.jpg" // Placeholder
                alt="Ayurvedic Manufacturing Plant"
                fill
                className="object-cover"
                priority
            />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-400/30 text-green-100 text-sm font-medium mb-6 backdrop-blur-sm">
               <Settings className="w-4 h-4" />
               <span>Precision Manufacturing</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Manufacturing & Quality</h1>
            <p className="text-xl max-w-2xl mx-auto text-green-100/90 leading-relaxed">
               Where ancient Ayurvedic wisdom meets Industry 4.0 precision. Explore our state-of-the-art ecosystem ensuring purity, potency, and rigorous compliance.
            </p>
        </div>
      </div>

      {/* Hub Navigation Grid */}
      <section className="py-24 bg-[#fcfdfc]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   
                   {/* Facility Link */}
                   <Link href="/manufacturing/facility" className="group block h-full">
                       <div className="bg-white rounded-3xl p-10 h-full shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 group-hover:-translate-y-2 relative overflow-hidden">
                           <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                           <Factory className="w-12 h-12 text-orange-600 mb-8 relative z-10" />
                           <h3 className="text-2xl font-bold text-green-950 mb-4 relative z-10">Facility Overview</h3>
                           <p className="text-gray-600 mb-8 leading-relaxed relative z-10">
                               Explore our 5-acre campus, intelligent plant layout, capacity specs, and advanced equipment list including mixers, dryers, and automated packing lines.
                           </p>
                           <span className="text-orange-700 font-bold inline-flex items-center relative z-10 group-hover:gap-2 transition-all">
                              View Infrastructure <ArrowRight className="w-5 h-5 ml-2" />
                           </span>
                       </div>
                   </Link>

                   {/* Quality Link */}
                   <Link href="/manufacturing/quality" className="group block h-full">
                       <div className="bg-white rounded-3xl p-10 h-full shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 group-hover:-translate-y-2 relative overflow-hidden">
                           <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                           <ShieldCheck className="w-12 h-12 text-blue-600 mb-8 relative z-10" />
                           <h3 className="text-2xl font-bold text-green-950 mb-4 relative z-10">Quality Systems</h3>
                           <p className="text-gray-600 mb-8 leading-relaxed relative z-10">
                               Deep dive into our QA/QC protocols, GLP-certified laboratory, instrumentation (HPLC, HPTLC), and batch traceability systems.
                           </p>
                           <span className="text-blue-700 font-bold inline-flex items-center relative z-10 group-hover:gap-2 transition-all">
                              Inspect Quality <ArrowRight className="w-5 h-5 ml-2" />
                           </span>
                       </div>
                   </Link>

                   {/* Process Link */}
                   <Link href="/manufacturing/process" className="group block h-full">
                       <div className="bg-white rounded-3xl p-10 h-full shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 group-hover:-translate-y-2 relative overflow-hidden">
                           <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                           <ClipboardCheck className="w-12 h-12 text-purple-600 mb-8 relative z-10" />
                           <h3 className="text-2xl font-bold text-green-950 mb-4 relative z-10">Process & Compliance</h3>
                           <p className="text-gray-600 mb-8 leading-relaxed relative z-10">
                               Understand our manufacturing lifecycle from raw material to finished good, along with our certifications: GMP, ISO, and FSSAI.
                           </p>
                           <span className="text-purple-700 font-bold inline-flex items-center relative z-10 group-hover:gap-2 transition-all">
                              Check Compliance <ArrowRight className="w-5 h-5 ml-2" />
                           </span>
                       </div>
                   </Link>
               </div>
          </div>
      </section>

      {/* Quick Stats Strip */}
      <section className="bg-green-900 text-white py-16 border-t border-green-800">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                  <div className="text-4xl font-bold text-orange-300 mb-2">100+</div>
                  <div className="text-sm text-green-200 uppercase tracking-widest">Active Formulas</div>
              </div>
              <div>
                  <div className="text-4xl font-bold text-orange-300 mb-2">5M+</div>
                  <div className="text-sm text-green-200 uppercase tracking-widest">Bottles / Year</div>
              </div>
               <div>
                  <div className="text-4xl font-bold text-orange-300 mb-2">ISO</div>
                  <div className="text-sm text-green-200 uppercase tracking-widest">9001:2015 Cert</div>
              </div>
               <div>
                  <div className="text-4xl font-bold text-orange-300 mb-2">24/7</div>
                  <div className="text-sm text-green-200 uppercase tracking-widest">Lab Testing</div>
              </div>
          </div>
      </section>

    </div>
  );
}

