import { Button } from '@/src/components/ui/button';
import { Card, CardContent } from '@/src/components/ui/card';
import { 
  History, 
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
      {/* Hero Section */}
      <section className="relative bg-[#f3f6f3] py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#e8f1ea] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
              <Leaf className="w-4 h-4" />
              <span>Authentic Ayurveda Since 1920</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-green-950 mb-8 tracking-tight">
              About Hanuma Ayur Care
            </h1>
            <p className="text-xl text-green-900/70 max-w-3xl mx-auto leading-relaxed mb-10">
              Hanuman Ayurcare combines 5,000 years of Vedic tradition with modern scientific standards. We are more than just manufacturers; we are custodians of a legacy.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="bg-primary/5 border-primary/20">
               <CardContent className="p-10">
                 <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                   <Target className="w-6 h-6 text-primary" />
                 </div>
                 <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                 <p className="text-foreground/80 leading-relaxed mb-6">
                   To be the global torchbearer of authentic Ayurveda, making holistic wellness accessible to every home while preserving the sanctity of ancient formulations through modern science.
                 </p>
                 <Link href="/about/company-story" className="text-primary font-bold inline-flex items-center hover:underline">
                    Read Our Story <ArrowRight className="w-4 h-4 ml-2"/>
                 </Link>
               </CardContent>
            </Card>
            <Card className="bg-secondary/50 border-secondary">
               <CardContent className="p-10">
                 <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-6">
                   <Heart className="w-6 h-6 text-primary" />
                 </div>
                 <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                 <p className="text-foreground/80 leading-relaxed mb-6">
                   To manufacture superior quality Ayurvedic products through sustainable practices, innovation, and strict adherence to GMP standards, ensuring valid health outcomes.
                 </p>
               </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hub Navigation Grid */}
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-green-950 mb-4">Explore Our World</h2>
                  <p className="text-lg text-gray-600">Dive deeper into the pillars that define our excellence.</p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   {/* Infrastructure Link */}
                   <Link href="/about/facilities" className="group block h-full">
                       <div className="bg-[#f0f4f0] rounded-2xl p-8 h-full transition-all duration-300 group-hover:bg-green-100 group-hover:shadow-lg border border-transparent group-hover:border-green-200">
                           <Building2 className="w-12 h-12 text-green-800 mb-6 group-hover:scale-110 transition-transform" />
                           <h3 className="text-2xl font-bold text-green-950 mb-4">Infrastructure</h3>
                           <p className="text-gray-600 mb-6">
                               Check out our Land Location, Production Blocks (Solid, Liquid, Extracts), and Industry 4.0 Automation.
                           </p>
                           <span className="text-green-800 font-bold inline-flex items-center">Explore Facilities <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"/></span>
                       </div>
                   </Link>

                   {/* Team Link */}
                   <Link href="/about/team" className="group block h-full">
                       <div className="bg-[#fff9f0] rounded-2xl p-8 h-full transition-all duration-300 group-hover:bg-orange-100 group-hover:shadow-lg border border-transparent group-hover:border-orange-200">
                           <Users2 className="w-12 h-12 text-orange-800 mb-6 group-hover:scale-110 transition-transform" />
                           <h3 className="text-2xl font-bold text-orange-950 mb-4">Our Team</h3>
                           <p className="text-gray-600 mb-6">
                               Meet our Promoters, Ayurvedic Physicians, QA/QC Experts, and Regulatory Specialists.
                           </p>
                            <span className="text-orange-800 font-bold inline-flex items-center">Meet Leadership <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"/></span>
                       </div>
                   </Link>

                   {/* Sustainability Link */}
                   <Link href="/about/sustainability" className="group block h-full">
                       <div className="bg-[#eaf4ff] rounded-2xl p-8 h-full transition-all duration-300 group-hover:bg-blue-100 group-hover:shadow-lg border border-transparent group-hover:border-blue-200">
                           <Leaf className="w-12 h-12 text-blue-800 mb-6 group-hover:scale-110 transition-transform" />
                           <h3 className="text-2xl font-bold text-blue-950 mb-4">CSR & Sustainability</h3>
                           <p className="text-gray-600 mb-6">
                               Learn about our Ethical Sourcing, Waste Management Practices, and Green Initiatives.
                           </p>
                            <span className="text-blue-800 font-bold inline-flex items-center">View Impact <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"/></span>
                       </div>
                   </Link>
               </div>
          </div>
      </section>

      {/* Heritage Strip */}
      <section className="bg-green-950 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                  <h2 className="text-3xl font-bold mb-2">Our Company Story</h2>
                  <p className="text-green-200">Tracing our roots back to the start.</p>
              </div>
              <Button asChild variant="secondary" size="lg" className="rounded-full px-8">
                  <Link href="/about/company-story">Read Full History</Link>
              </Button>
          </div>
      </section>
    </div>
  );
}
