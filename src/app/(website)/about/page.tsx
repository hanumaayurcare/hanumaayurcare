import { Button } from '@/src/components/ui/button';
import { Card, CardContent } from '@/src/components/ui/card';
import { 
  Building2, 
  Users2, 
  Leaf,
  Target,
  Heart,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <div className="bg-background min-h-screen">
      {/* Compact Hero Section */}
      <section className="relative bg-[#f3f6f3] py-12 overflow-hidden border-b border-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium mb-4">
              <Leaf className="w-3 h-3" />
              <span>Authentic Ayurveda Since 1920</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-green-950 mb-4 tracking-tight">
              About Hanuma Ayur Care
            </h1>
            <p className="text-lg text-green-900/80 max-w-2xl mx-auto leading-relaxed">
              Hanuman Ayurcare combines 5,000 years of Vedic tradition with modern scientific standards. We are more than just manufacturers; we are custodians of a legacy.
            </p>
        </div>
      </section>

      {/* Vision & Mission - Compact Split */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 flex flex-col justify-center">
                 <div className="flex items-center gap-3 mb-3">
                   <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                     <Target className="w-4 h-4 text-primary" />
                   </div>
                   <h3 className="text-xl font-bold text-primary">Our Vision</h3>
                 </div>
                 <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                   To be the global torchbearer of authentic Ayurveda, making holistic wellness accessible to every home while preserving the sanctity of ancient formulations through modern science.
                 </p>
                 <Link href="/about/company-story" className="text-primary text-sm font-bold inline-flex items-center hover:underline mt-auto">
                    Read Our Story <ArrowRight className="w-3 h-3 ml-1"/>
                 </Link>
            </div>
            <div className="bg-secondary/50 border border-secondary/50 rounded-xl p-6 flex flex-col justify-center">
                 <div className="flex items-center gap-3 mb-3">
                   <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                     <Heart className="w-4 h-4 text-primary" />
                   </div>
                   <h3 className="text-xl font-bold text-primary">Our Mission</h3>
                 </div>
                 <p className="text-sm text-foreground/80 leading-relaxed">
                   To manufacture superior quality Ayurvedic products through sustainable practices, innovation, and strict adherence to GMP standards, ensuring valid health outcomes.
                 </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hub Navigation Grid - Compact */}
      <section className="py-12 bg-[#fcfdfc] border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-10">
                  <h2 className="text-2xl font-bold text-green-950 mb-2">Explore Our World</h2>
                  <p className="text-sm text-gray-600">Dive deeper into the pillars that define our excellence.</p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                   {/* Infrastructure Link */}
                   <Link href="/about/facilities" className="group block h-full">
                       <div className="bg-white rounded-xl p-6 h-full shadow-sm hover:shadow-md border border-gray-100 transition-all duration-200 group-hover:border-green-300">
                           <div className="flex items-center gap-3 mb-3">
                               <Building2 className="w-8 h-8 text-green-700" />
                               <h3 className="text-lg font-bold text-green-950">Infrastructure</h3>
                           </div>
                           <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                               Production Blocks, Industry 4.0 locations & Automation.
                           </p>
                           <span className="text-green-800 text-sm font-bold inline-flex items-center group-hover:underline">Explore Facilities <ArrowRight className="w-3 h-3 ml-1"/></span>
                       </div>
                   </Link>

                   {/* Team Link */}
                   <Link href="/about/team" className="group block h-full">
                       <div className="bg-white rounded-xl p-6 h-full shadow-sm hover:shadow-md border border-gray-100 transition-all duration-200 group-hover:border-orange-300">
                           <div className="flex items-center gap-3 mb-3">
                               <Users2 className="w-8 h-8 text-orange-700" />
                               <h3 className="text-lg font-bold text-orange-950">Our Team</h3>
                           </div>
                           <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                               Promoters, Physicians, and QA/QC Leadership.
                           </p>
                            <span className="text-orange-800 text-sm font-bold inline-flex items-center group-hover:underline">Meet Leadership <ArrowRight className="w-3 h-3 ml-1"/></span>
                       </div>
                   </Link>

                   {/* Sustainability Link */}
                   <Link href="/about/sustainability" className="group block h-full">
                       <div className="bg-white rounded-xl p-6 h-full shadow-sm hover:shadow-md border border-gray-100 transition-all duration-200 group-hover:border-blue-300">
                           <div className="flex items-center gap-3 mb-3">
                               <Leaf className="w-8 h-8 text-blue-700" />
                               <h3 className="text-lg font-bold text-blue-950">Sustainability</h3>
                           </div>
                           <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                               Ethical Sourcing, ZLD, and Green Initiatives.
                           </p>
                            <span className="text-blue-800 text-sm font-bold inline-flex items-center group-hover:underline">View Impact <ArrowRight className="w-3 h-3 ml-1"/></span>
                       </div>
                   </Link>
               </div>
          </div>
      </section>

      {/* Compact Heritage Banner */}
      <section className="bg-green-950 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 flex flex-row items-center justify-between">
              <div>
                  <h2 className="text-xl font-bold">Our Company Story</h2>
                  <p className="text-green-200 text-sm hidden sm:block">Tracing our roots back to the start.</p>
              </div>
              <Button asChild variant="secondary" size="sm" className="rounded-full px-6">
                  <Link href="/about/company-story">Read Full History</Link>
              </Button>
          </div>
      </section>
    </div>
  );
}
