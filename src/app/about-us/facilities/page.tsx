import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Building2, 
  Warehouse, 
  FlaskConical, 
  PackageCheck, 
  Sun, 
  ShieldCheck, 
  CheckCircle2,
  Video
} from "lucide-react";

export default function FacilitiesPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[28rem] md:h-[36rem] overflow-hidden">
        <Image
          src="/images/manufacturing-facility.jpg"
          alt="Modern Ayurvedic manufacturing facility"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-950/90 via-amber-950/40 to-transparent" />
        
        <div className="absolute inset-0 flex items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge variant="secondary" className="mb-6 bg-lime-100 text-lime-800 hover:bg-lime-200 border-none px-4 py-1 text-sm font-semibold">
              WHO-GMP CERTIFIED
            </Badge>
            <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-none">
              Modern <span className="text-amber-400">Manufacturing</span> Excellence
            </h1>
            <p className="text-xl md:text-2xl text-amber-50 font-medium leading-relaxed max-w-2xl mb-10">
              Where 5,000 years of Ayurvedic tradition meets cutting-edge pharmaceutical technology and rigorous quality standards.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-lime-700 hover:bg-lime-800 text-white rounded-full px-8 py-6 text-lg">
                <Video className="w-5 h-5 mr-2" />
                Take Virtual Tour
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* GMP Certified Section */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-amber-950 leading-tight">
                  WHO-GMP Certified <br />
                  <span className="text-amber-600">Kerala Facility</span>
                </h2>
                <Separator className="w-24 h-1.5 bg-amber-500 rounded-full" />
              </div>
              
              <p className="text-lg text-amber-900/70 leading-relaxed">
                Our 50,000 sq ft manufacturing unit in Kerala is a testament to our commitment 
                to quality. We combine traditional preparation methods with modern pharmaceutical 
                standardization to ensure every product is pure, potent, and safe.
              </p>

              <div className="flex items-center gap-6 p-6 bg-amber-50 rounded-2xl border border-amber-100 shadow-sm">
                <div className="w-20 h-20 relative bg-white rounded-xl p-2 shadow-sm shrink-0">
                  <Image 
                    src="/images/gmp-certified-badge.png" 
                    alt="GMP Certified Badge"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-amber-950">Excellence in Standards</h4>
                  <p className="text-sm text-amber-900/60">WHO-GMP Certified Excellence Since 2010</p>
                </div>
              </div>
            </div>
            
            <Card className="border-none shadow-2xl overflow-hidden rounded-3xl">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/facility-interior.jpg"
                  alt="Modern facility interior"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </Card>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="mb-32">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-amber-950">Facility Highlights</h2>
            <p className="text-lg text-amber-900/60 max-w-2xl mx-auto">
              Precision engineered environments designed to maximize herbal extracts and ensure complete purity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FacilityFeature 
              icon={<Building2 className="w-8 h-8 text-amber-600" />}
              title="Production Zones"
              description="Dedicated zones for specific preparation types with isolated air filtration systems."
            />
            <FacilityFeature 
              icon={<Warehouse className="w-8 h-8 text-amber-600" />}
              title="Climate Storage"
              description="Advanced humidity and temperature control to preserve herb active principles."
            />
            <FacilityFeature 
              icon={<FlaskConical className="w-8 h-8 text-amber-600" />}
              title="State-of-the-Art Labs"
              description="In-house analytical testing for chemical and microbiological purity."
            />
            <FacilityFeature 
              icon={<PackageCheck className="w-8 h-8 text-amber-600" />}
              title="Automated Lines"
              description="Precision packaging systems to maintain complete hygiene and batch consistency."
            />
            <FacilityFeature 
              icon={<Sun className="w-8 h-8 text-amber-600" />}
              title="Renewable Power"
              description="Driven by 60% solar energy, minimizing our carbon footprint and respecting nature."
            />
            <FacilityFeature 
              icon={<ShieldCheck className="w-8 h-8 text-amber-600" />}
              title="Quality Control"
              description="Over 200 rigorous quality checkpoints from raw material to finished product."
            />
          </div>
        </section>

        {/* Categories Section */}
        <section>
          <div className="bg-amber-950 rounded-[3rem] px-8 py-20 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
              <Building2 className="w-64 h-64" />
            </div>
            
            <div className="text-center mb-16 relative z-10">
              <h2 className="text-4xl font-bold mb-4">Production Capabilities</h2>
              <p className="text-amber-200/70 text-lg max-w-2xl mx-auto">
                Comprehensive manufacturing across all traditional and modern Ayurvedic formats.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              <CapabilityCard 
                title="Classical"
                items={["Asavas & Arishtas", "Lehyams & Churnas", "Ghritas & Tailams"]}
                color="border-amber-500/30 bg-amber-900/40"
              />
              <CapabilityCard 
                title="Modern"
                items={["Tablets & Capsules", "Syrups & Granules", "Softgels & Lozenges"]}
                color="border-lime-500/30 bg-lime-900/20"
              />
              <CapabilityCard 
                title="Topical"
                items={["Medicated Oils", "Creams & Balms", "Ubtans & Pastes"]}
                color="border-orange-500/30 bg-orange-900/20"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function FacilityFeature({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="border-amber-100 hover:border-lime-300 shadow-sm hover:shadow-xl transition-all duration-300 group rounded-2xl p-8">
      <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-lime-50 group-hover:scale-110 transition-all duration-300">
        {icon}
      </div>
      <CardHeader className="p-0 mb-3">
        <CardTitle className="text-2xl font-bold text-amber-950 tracking-tight group-hover:text-lime-700 transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <p className="text-amber-900/60 leading-relaxed italic">
          "{description}"
        </p>
      </CardContent>
    </Card>
  );
}

function CapabilityCard({ title, items, color }: { title: string; items: string[]; color: string }) {
  return (
    <Card className={`border ${color} backdrop-blur-sm shadow-xl p-8 rounded-2xl`}>
      <CardTitle className="text-2xl font-bold mb-6 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-amber-400" />
        {title} Preparations
      </CardTitle>
      <ul className="space-y-4">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-3 text-amber-100/80">
            <CheckCircle2 className="w-5 h-5 text-lime-400 shrink-0" />
            <span className="font-medium">{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}