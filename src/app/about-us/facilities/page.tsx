import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
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
  Video,
  Leaf,
  History
} from "lucide-react";

export default function FacilitiesPage() {
  return (
    <div className="bg-[#fcfdfc] min-h-screen">
      {/* Unified Hero Section */}
      <section className="relative bg-[#f3f6f3] py-24 overflow-hidden border-b border-green-100">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#e8f1ea] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span>WHO-GMP Certified Facility</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-green-950 mb-8 tracking-tight">
            Manufacturing <span className="text-[#3f6b4c]">Excellence</span>
          </h1>
          <p className="text-xl text-green-900/70 max-w-3xl mx-auto leading-relaxed mb-10">
            Where 5,000 years of Ayurvedic tradition meets cutting-edge pharmaceutical 
            technology and rigorous quality standards.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-[#3f6b4c] hover:bg-[#2d4d37] text-white rounded-2xl px-10 py-7 shadow-xl">
              <Video className="w-6 h-6 mr-3" />
              Take Virtual Tour
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Certification Section */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-green-950 leading-tight">
                  WHO-GMP Certified <br />
                  <span className="text-[#3f6b4c]">Kerala Hub</span>
                </h2>
                <Separator className="w-24 h-2 bg-green-500 rounded-full" />
              </div>
              
              <p className="text-xl text-green-900/70 leading-relaxed">
                Our 50,000 sq ft manufacturing unit in Kerala is a testament to our commitment 
                to quality. We combine traditional preparation methods with modern pharmaceutical 
                standardization to ensure every product is pure, potent, and safe.
              </p>

              <div className="flex items-center gap-8 p-8 bg-white border border-green-100 rounded-3xl shadow-xl shadow-green-900/5">
                <div className="p-4 bg-green-50 rounded-2xl">
                  <History className="w-12 h-12 text-[#3f6b4c]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-green-950">Excellence in Standards</h4>
                  <p className="text-green-800/60 font-medium">WHO-GMP Certified Excellence Since 2010</p>
                </div>
              </div>
            </div>
            
            <Card className="border-8 border-white shadow-2xl overflow-hidden rounded-[3rem] transform rotate-2">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/facility-interior.jpg"
                  alt="Modern facility interior"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-950/40 to-transparent" />
              </div>
            </Card>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="mb-32">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-green-950">Facility Highlights</h2>
            <p className="text-xl text-green-800/60 max-w-2xl mx-auto">
              Precision-engineered environments designed to maximize herbal extracts and ensure complete purity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <FacilityFeature 
              icon={<Building2 className="w-8 h-8 text-[#3f6b4c]" />}
              title="Production Zones"
              description="Dedicated zones for specific preparation types with isolated air filtration systems."
            />
            <FacilityFeature 
              icon={<Warehouse className="w-8 h-8 text-[#6b4f29]" />}
              title="Climate Storage"
              description="Advanced humidity and temperature control to preserve herb active principles."
            />
            <FacilityFeature 
              icon={<FlaskConical className="w-8 h-8 text-[#3f6b4c]" />}
              title="Analytical Labs"
              description="In-house analytical testing for chemical and microbiological purity."
            />
            <FacilityFeature 
              icon={<PackageCheck className="w-8 h-8 text-[#6b4f29]" />}
              title="Automated Lines"
              description="Precision packaging systems to maintain complete hygiene and batch consistency."
            />
            <FacilityFeature 
              icon={<Sun className="w-8 h-8 text-[#3f6b4c]" />}
              title="Renewable Power"
              description="Driven by 60% solar energy, minimizing our carbon footprint and respecting nature."
            />
            <FacilityFeature 
              icon={<ShieldCheck className="w-8 h-8 text-[#6b4f29]" />}
              title="Quality Control"
              description="Over 200 rigorous quality checkpoints from raw material to finished product."
            />
          </div>
        </section>

        {/* Capabilities Section */}
        <section>
          <div className="bg-[#064e3b] rounded-[4rem] px-8 py-24 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none invisible lg:visible">
              <Leaf className="w-96 h-96" />
            </div>
            
            <div className="text-center mb-20 relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Production Capabilities</h2>
              <p className="text-green-100/70 text-xl max-w-2xl mx-auto leading-relaxed">
                Comprehensive manufacturing across all traditional and modern Ayurvedic formats at scale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10 max-w-6xl mx-auto">
              <CapabilityCard 
                title="Classical"
                items={["Asavas & Arishtas", "Lehyams & Churnas", "Ghritas & Tailams"]}
                color="border-white/10 bg-white/5"
                bulletColor="bg-[#f2d29b]"
              />
              <CapabilityCard 
                title="Modern"
                items={["Tablets & Capsules", "Syrups & Granules", "Softgels & Lozenges"]}
                color="border-white/10 bg-white/5"
                bulletColor="bg-green-400"
              />
              <CapabilityCard 
                title="Topical"
                items={["Medicated Oils", "Creams & Balms", "Ubtans & Pastes"]}
                color="border-white/10 bg-white/5"
                bulletColor="bg-orange-400"
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
    <Card className="border-green-100 hover:border-green-300 shadow-sm hover:shadow-2xl transition-all duration-500 group rounded-[2.5rem] p-10 bg-white">
      <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-green-100 group-hover:scale-110 transition-all duration-500 group-hover:shadow-lg">
        {icon}
      </div>
      <CardHeader className="p-0 mb-4">
        <CardTitle className="text-2xl font-bold text-green-950 tracking-tight group-hover:text-[#3f6b4c] transition-colors leading-tight">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <p className="text-lg text-green-800/60 leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}

function CapabilityCard({ title, items, color, bulletColor }: { title: string; items: string[]; color: string; bulletColor: string }) {
  return (
    <Card className={`border ${color} backdrop-blur-md shadow-2xl p-10 rounded-3xl hover:bg-white/10 transition-all duration-500 group`}>
      <CardTitle className="text-2xl font-bold mb-8 flex items-center gap-3">
        <div className={`w-3 h-3 rounded-full ${bulletColor} shadow-lg shadow-current`} />
        {title} Preparations
      </CardTitle>
      <ul className="space-y-5">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-4 text-green-50/80 group-hover:text-white transition-colors">
            <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0" />
            <span className="text-lg font-medium tracking-wide">{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}