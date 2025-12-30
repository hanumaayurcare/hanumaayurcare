import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { 
  History, 
  Sparkles, 
  Building2, 
  Users2, 
  ShieldCheck, 
  ArrowRight,
  Leaf
} from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="bg-[#fcfdfc] min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#f3f6f3] py-24 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#e8f1ea] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6 animate-fade-in">
              <Leaf className="w-4 h-4" />
              <span>Authentic Ayurveda Since 1920</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-green-950 mb-8 tracking-tight">
              Our Journey of <span className="text-[#3f6b4c]">Wellbeing</span>
            </h1>
            <p className="text-xl text-green-900/70 max-w-3xl mx-auto leading-relaxed mb-10">
              Discover the wisdom of ages, crafted with nature's purity. Hanuman Ayurcare 
              combines 5,000 years of tradition with modern scientific standards.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AboutLinkCard 
            title="Our Story" 
            description="The evolution from a humble traditional pharmacy to a trusted leader in global Ayurvedic wellness."
            href="/about-us/company-story"
            icon={<History className="w-8 h-8 text-[#3f6b4c]" />}
          />
          
          <AboutLinkCard 
            title="Our Heritage" 
            description="Rooted in deep ancestral knowledge and the sacred principles of the ancient Vedas."
            href="/about-us/heritage"
            icon={<Sparkles className="w-8 h-8 text-[#6b4f29]" />}
          />
          
          <AboutLinkCard 
            title="Our Facilities" 
            description="State-of-the-art, GMP-certified production units where tradition meets technical excellence."
            href="/about-us/facilities"
            icon={<Building2 className="w-8 h-8 text-[#3f6b4c]" />}
          />
          
          <AboutLinkCard 
            title="Our Team" 
            description="A dedicated community of Vaidyas, researchers, and practitioners passionate about your health."
            href="/about-us/team"
            icon={<Users2 className="w-8 h-8 text-[#6b4f29]" />}
          />
          
          <AboutLinkCard 
            title="Our Standards" 
            description="Uncompromising quality control and global certifications ensuring safety and authentic results."
            href="/about-us/standards"
            icon={<ShieldCheck className="w-8 h-8 text-[#3f6b4c]" />}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <Card className="bg-gradient-to-br from-[#14532d] to-[#064e3b] border-none shadow-2xl shadow-green-900/20 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-8 opacity-10">
             <Leaf className="w-32 h-32 text-white" />
          </div>
          <div className="px-8 py-20 text-center relative z-10">
            <h2 className="text-4xl font-bold text-white mb-6">Experience True Restoration</h2>
            <p className="text-xl text-green-50/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Our formulations are crafted from the purest herbs harvested at the peak of their potency. 
              Embark on your personal path to holistic health today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button asChild size="lg" className="bg-[#f2d29b] hover:bg-[#e6c18a] text-green-950 font-bold px-10 shadow-xl transition-all">
                <Link href="/products">Shop Formulations</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-green-100/30 text-white hover:bg-white/10 px-10">
                <Link href="/contact">Consult a Vaidya</Link>
              </Button>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}

function AboutLinkCard({ title, description, href, icon }: { title: string; description: string; href: string; icon: React.ReactNode }) {
  return (
    <Link href={href} className="group block h-full">
      <Card className="h-full border-green-100/50 hover:border-green-300 hover:shadow-2xl hover:shadow-green-100 transition-all duration-500 transform group-hover:-translate-y-2 overflow-hidden bg-white">
        <CardHeader className="flex flex-col items-center text-center pt-10">
          <div className="mb-6 p-5 bg-[#f3f6f3] rounded-3xl group-hover:bg-green-100 group-hover:scale-110 transition-all duration-500 transform group-hover:rotate-6">
            {icon}
          </div>
          <CardTitle className="text-2xl font-bold text-green-950 group-hover:text-[#3f6b4c] transition-colors mb-3">
            {title}
          </CardTitle>
          <CardDescription className="text-green-800/60 leading-relaxed px-4">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center pb-10 pt-4">
          <div className="inline-flex items-center text-[#3f6b4c] font-bold group-hover:tracking-wider transition-all duration-300">
            <span className="text-sm uppercase tracking-wide">Explore</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
