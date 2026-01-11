import { BookOpen, Leaf, Settings, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ArticlesPage() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            <span>Ayurvedic Insights</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-green-950 mb-6">Articles & Monographs</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deep dives into herb sourcing, manufacturing science, and therapeutic approaches.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-20">
            <div className="relative rounded-3xl overflow-hidden bg-green-900 text-white min-h-[400px] flex items-center">
                 <div className="absolute inset-0 bg-[url('/hero/knowledge-bg.jpg')] bg-cover bg-center opacity-30"></div>
                 <div className="relative z-10 p-10 md:p-16 max-w-4xl">
                     <span className="text-green-300 font-bold tracking-widest text-sm uppercase mb-4 block">Featured Read</span>
                     <h2 className="text-3xl md:text-5xl font-bold mb-6">The Science of Standardization: Why It Matters</h2>
                     <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-2xl">
                         In an era of mass production, how do we ensure every tablet delivers the exact same therapeutic value? Learn about marker profiling and HPLC validation.
                     </p>
                     <button className="bg-[#f2d29b] text-green-950 font-bold px-8 py-3 rounded-full hover:bg-[#e6c18a] transition-colors">
                         Read Full Article
                     </button>
                 </div>
            </div>
        </div>

        {/* Recent Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Card 1 */}
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="h-48 bg-gray-100 relative">
                     <div className="absolute inset-0 bg-green-50 flex items-center justify-center">
                         <Leaf className="w-12 h-12 text-green-200" />
                     </div>
                </div>
                <div className="p-6">
                    <div className="text-sm text-green-600 font-medium mb-3">Herb Monograph</div>
                    <h3 className="font-bold text-xl text-green-950 mb-3 group-hover:text-green-700 transition-colors">
                        Ashwagandha: Sourcing & Actives
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        Understanding the difference between root-only extracts and whole plant usage. What looks best on your label vs what works best.
                    </p>
                    <Link href="#" className="inline-flex items-center text-green-800 font-bold text-sm hover:underline">
                        Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                </div>
            </div>

             {/* Card 2 */}
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="h-48 bg-gray-100 relative">
                     <div className="absolute inset-0 bg-purple-50 flex items-center justify-center">
                         <Settings className="w-12 h-12 text-purple-200" />
                     </div>
                </div>
                <div className="p-6">
                    <div className="text-sm text-purple-600 font-medium mb-3">Manufacturing</div>
                    <h3 className="font-bold text-xl text-green-950 mb-3 group-hover:text-green-700 transition-colors">
                        Ayurvedic Approaches to Diabetes
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        A clinical look at formulations like Mehamudgara Vati and Nisha Amalaki from the classical texts.
                    </p>
                    <Link href="#" className="inline-flex items-center text-green-800 font-bold text-sm hover:underline">
                        Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                </div>
            </div>

             {/* Card 3 */}
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="h-48 bg-gray-100 relative">
                     <div className="absolute inset-0 bg-orange-50 flex items-center justify-center">
                         <BookOpen className="w-12 h-12 text-orange-200" />
                     </div>
                </div>
                <div className="p-6">
                    <div className="text-sm text-orange-600 font-medium mb-3">Business Insight</div>
                    <h3 className="font-bold text-xl text-green-950 mb-3 group-hover:text-green-700 transition-colors">
                        Quality Insights for Brand Owners
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                         Key questions to ask your contract manufacturer about certificates of analysis (CoAs) and stability data.
                    </p>
                    <Link href="#" className="inline-flex items-center text-green-800 font-bold text-sm hover:underline">
                        Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}
