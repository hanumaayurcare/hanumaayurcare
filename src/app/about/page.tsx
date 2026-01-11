import { Button } from '@/src/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card';
import { 
  History, 
  Sparkles, 
  Building2, 
  Users2, 
  ShieldCheck, 
  Leaf,
  Target,
  Heart
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

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
              Our Journey of <span className="text-[#3f6b4c]">Wellbeing</span>
            </h1>
            <p className="text-xl text-green-900/70 max-w-3xl mx-auto leading-relaxed mb-10">
              Hanuman Ayurcare combines 5,000 years of Vedic tradition with modern scientific standards to bring you pure, effective, and authentic Ayurvedic solutions.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="bg-primary/5 border-primary/20">
               <CardContent className="p-10">
                 <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                   <Target className="w-6 h-6 text-primary" />
                 </div>
                 <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                 <p className="text-foreground/80 leading-relaxed">
                   To be the global torchbearer of authentic Ayurveda, making holistic wellness accessible to every home while preserving the sanctity of ancient formulations.
                 </p>
               </CardContent>
            </Card>
            <Card className="bg-secondary/50 border-secondary">
               <CardContent className="p-10">
                 <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-6">
                   <Heart className="w-6 h-6 text-primary" />
                 </div>
                 <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                 <p className="text-foreground/80 leading-relaxed">
                   To manufacture superior quality Ayurvedic products through sustainable practices, innovation, and strict adherence to GMP standards, ensuring valid health outcomes for our community.
                 </p>
               </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ... (Heritage section remains mostly semantic HTML, maybe add Badge) ... */}

      {/* Facilities & Standards */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Infrastructure & Quality</h2>
              <p className="text-lg text-muted-foreground">
                Where ancient wisdom meets cutting-edge technology. Our manufacturing units are designed to handle large-scale production without compromising on the delicate processes of Ayurveda.
              </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-all border-border/50">
                 <CardContent className="p-8">
                   <Building2 className="w-10 h-10 text-primary mb-6" />
                   <h3 className="text-xl font-bold text-foreground mb-3">Modern Factories</h3>
                   <p className="text-muted-foreground">Equipped with automated processing lines for tablets, capsules, and liquids, complying with WHO-GMP norms.</p>
                 </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-all border-border/50">
                 <CardContent className="p-8">
                   <ShieldCheck className="w-10 h-10 text-primary mb-6" />
                   <h3 className="text-xl font-bold text-foreground mb-3">Quality Control</h3>
                   <p className="text-muted-foreground">In-house labs for testing raw materials and finished products for heavy metals, microbial load, and potency.</p>
                 </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-all border-border/50">
                 <CardContent className="p-8">
                   <Users2 className="w-10 h-10 text-primary mb-6" />
                   <h3 className="text-xl font-bold text-foreground mb-3">Expert Team</h3>
                   <p className="text-muted-foreground">Led by experienced Ayurvedic physicians and modern pharmaceutical technologists working in harmony.</p>
                 </CardContent>
              </Card>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner with Us</h2>
           <p className="text-xl text-primary-foreground/90 mb-10">
             Whether you are looking for third-party manufacturing or authentic wellness products, we are your trusted partner.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="text-primary font-bold">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/services">Our Services</Link>
              </Button>
           </div>
        </div>
      </section>
    </div>
  );
}
