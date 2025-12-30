import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { 
  History, 
  Sparkles, 
  Building2, 
  Users2, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 via-lime-50 to-white py-24 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-lime-200/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-amber-950 mb-6 tracking-tight">
            Our Ayurvedic <span className="text-lime-700">Heritage</span>
          </h1>
          <p className="text-xl text-amber-900/80 max-w-2xl mx-auto leading-relaxed">
            Discover our journey, traditions, and unwavering commitment to bringing 
            the 5,000-year-old wisdom of Ayurveda to the modern world.
          </p>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AboutLinkCard 
            title="Our Story" 
            description="The evolution from a humble pharmacy in Kerala to a trusted name in Ayurvedic wellness."
            href="/about-us/company-story"
            icon={<History className="w-8 h-8 text-amber-600" />}
          />
          
          <AboutLinkCard 
            title="Our Heritage" 
            description="Rooted in deep traditional knowledge and centuries of ancestral wisdom."
            href="/about-us/heritage"
            icon={<Sparkles className="w-8 h-8 text-lime-600" />}
          />
          
          <AboutLinkCard 
            title="Our Facilities" 
            description="Our state-of-the-art, GMP-certified manufacturing unit ensuring purity in every drop."
            href="/about-us/facilities"
            icon={<Building2 className="w-8 h-8 text-amber-600" />}
          />
          
          <AboutLinkCard 
            title="Our Team" 
            description="Dedicated Ayurvedic practitioners and scientists crafting your wellness journey."
            href="/about-us/team"
            icon={<Users2 className="w-8 h-8 text-lime-600" />}
          />
          
          <AboutLinkCard 
            title="Our Standards" 
            description="Rigorous quality control and international certifications for ultimate trust."
            href="/about-us/standards"
            icon={<ShieldCheck className="w-8 h-8 text-amber-600" />}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <Card className="bg-gradient-to-r from-amber-600/5 to-lime-600/5 border-none shadow-xl overflow-hidden">
          <div className="px-8 py-16 text-center">
            <h2 className="text-4xl font-bold text-amber-950 mb-6">Experience Authentic Ayurveda</h2>
            <p className="text-lg text-amber-900/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              Our commitment to purity and traditional wisdom makes our products truly restoration. 
              Discover the transformative power of genuine Ayurvedic formulations today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-lime-700 hover:bg-lime-800 text-white shadow-lg shadow-lime-700/20">
                <Link href="/products">Explore Our Products</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-amber-600 text-amber-700 hover:bg-amber-50 shadow-md">
                <Link href="/contact">Consult Our Experts</Link>
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
      <Card className="h-full border-amber-100/50 hover:border-lime-300 hover:shadow-2xl hover:shadow-lime-100 transition-all duration-300 transform group-hover:-translate-y-1 overflow-hidden">
        <CardHeader className="flex flex-col items-center text-center pt-8">
          <div className="mb-4 p-4 bg-amber-50 rounded-2xl group-hover:bg-lime-50 group-hover:scale-110 transition-all duration-300">
            {icon}
          </div>
          <CardTitle className="text-2xl font-bold text-amber-900 group-hover:text-lime-700 transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="text-amber-800/60 mt-2 leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center pb-8 pt-0">
          <div className="inline-flex items-center text-lime-700 font-semibold group-hover:gap-2 transition-all">
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
