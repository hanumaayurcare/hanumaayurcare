import { BookOpen, Download, HelpCircle, ArrowRight, Lightbulb } from 'lucide-react';
import Link from 'next/link';

export default function KnowledgeHub() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <div className="relative bg-[#0d3b1f] py-6 lg:py-32 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/hero/knowledge-bg.jpg')] bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 z-10 text-center">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/20 border border-yellow-400/30 text-yellow-100 text-sm font-medium mb-6 backdrop-blur-sm">
               <Lightbulb className="w-4 h-4" />
               <span>Knowledge Center</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Ayurveda Knowledge Hub</h1>
            <p className="text-xl max-w-2xl mx-auto text-green-100/90 leading-relaxed">
               Empowering you with authentic information. Whether you are a brand owner looking for manufacturing insights or a seeker of ancient wisdom.
            </p>
        </div>
      </div>

      {/* Hub Grid */}
      <section className="py-24 bg-[#fcfdfc]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   
                   {/* Articles Link */}
                   <Link href="/knowledge/articles" className="group block h-full">
                       <div className="bg-white rounded-3xl p-10 h-full shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 group-hover:-translate-y-2 relative overflow-hidden">
                           <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                           <BookOpen className="w-12 h-12 text-green-600 mb-8 relative z-10" />
                           <h3 className="text-2xl font-bold text-green-950 mb-4 relative z-10">Articles & Insights</h3>
                           <p className="text-gray-600 mb-8 leading-relaxed relative z-10">
                               Read about Ayurvedic approaches to common conditions, herb monographs, and manufacturing quality standards.
                           </p>
                           <span className="text-green-700 font-bold inline-flex items-center relative z-10 group-hover:gap-2 transition-all">
                              Read Articles <ArrowRight className="w-5 h-5 ml-2" />
                           </span>
                       </div>
                   </Link>

                   {/* Resources Link */}
                   <Link href="/knowledge/resources" className="group block h-full">
                       <div className="bg-white rounded-3xl p-10 h-full shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 group-hover:-translate-y-2 relative overflow-hidden">
                           <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                           <Download className="w-12 h-12 text-blue-600 mb-8 relative z-10" />
                           <h3 className="text-2xl font-bold text-green-950 mb-4 relative z-10">Downloads</h3>
                           <p className="text-gray-600 mb-8 leading-relaxed relative z-10">
                               Access downloadable resources including Product Catalogs (PDF), Brochures, and Regulatory Guidelines.
                           </p>
                           <span className="text-blue-700 font-bold inline-flex items-center relative z-10 group-hover:gap-2 transition-all">
                              View Resources <ArrowRight className="w-5 h-5 ml-2" />
                           </span>
                       </div>
                   </Link>

                   {/* FAQ Link */}
                   <Link href="/knowledge/faq" className="group block h-full">
                       <div className="bg-white rounded-3xl p-10 h-full shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 group-hover:-translate-y-2 relative overflow-hidden">
                           <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-100 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                           <HelpCircle className="w-12 h-12 text-yellow-600 mb-8 relative z-10" />
                           <h3 className="text-2xl font-bold text-green-950 mb-4 relative z-10">FAQs</h3>
                           <p className="text-gray-600 mb-8 leading-relaxed relative z-10">
                               Find answers to common questions about MOQs, Timelines, Pricing for B2B, and Product Safety for Consumers.
                           </p>
                           <span className="text-yellow-700 font-bold inline-flex items-center relative z-10 group-hover:gap-2 transition-all">
                              Get Answers <ArrowRight className="w-5 h-5 ml-2" />
                           </span>
                       </div>
                   </Link>
               </div>
          </div>
      </section>

    </div>
  );
}
