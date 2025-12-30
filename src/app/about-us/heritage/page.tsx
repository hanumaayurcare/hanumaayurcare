import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Library, 
  ScrollText, 
  Leaf, 
  Moon, 
  Sparkles, 
  Zap,
  BookOpen,
  History
} from "lucide-react";

export default function HeritagePage() {
  return (
    <div className="bg-[#fcfdfc] text-gray-800 min-h-screen">
      {/* Unified Hero Section */}
      <section className="relative bg-[#f3f6f3] py-24 overflow-hidden border-b border-green-100">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#e8f1ea] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>5,000 Years of Wisdom</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-green-950 mb-8 tracking-tight">
            Our Ayurvedic <span className="text-[#3f6b4c]">Heritage</span>
          </h1>
          <p className="text-xl text-green-900/70 max-w-3xl mx-auto leading-relaxed">
            Connecting ancient Vedic sciences with the rhythms of modern wellness and longevity. 
            Rooted in tradition, powered by nature.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-20">
            <HeritageSection 
              icon={<ScrollText className="w-8 h-8 text-[#3f6b4c]" />}
              title="The Roots of Ayurveda"
              description='Ayurveda, the "science of life," originated in India over 5,000 years ago. Our formulations are based on sacred classical texts like the Charaka Samhita and Sushruta Samhita, preserving the authentic preparation methods that have stood the test of centuries.'
            />

            <HeritageSection 
              icon={<Library className="w-8 h-8 text-[#6b4f29]" />}
              title="Connection to Tradition"
              description="Our founders trained under the most respected traditional Vaidyas in Kerala. We honor these lineages by maintaining authentic preparation methods—like slow-cooking in copper vessels—while integrating modern precision for safety and dosage."
            />

            <HeritageSection 
              icon={<Moon className="w-8 h-8 text-[#3f6b4c]" />}
              title="Seasonal Harvesting"
              description="True to Ayurvedic principles, we harvest our herbs at peak biological potency according to precise seasonal and lunar cycles. This respect for nature's clock ensures the maximum 'Prana' (life-force) remains in every extract."
            />
          </div>

          {/* Sidebar Callouts */}
          <div className="lg:col-span-4 space-y-10">
            <Card className="border-green-100 bg-white shadow-xl shadow-green-900/5 p-10 rounded-[2.5rem] relative overflow-hidden">
               <div className="absolute top-0 right-0 p-6 opacity-5">
                 <History className="w-24 h-24 text-green-900" />
               </div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-green-50 rounded-2xl">
                  <BookOpen className="w-8 h-8 text-[#3f6b4c]" />
                </div>
                <CardTitle className="text-2xl font-bold text-green-950">Classical Scripts</CardTitle>
              </div>
              <p className="text-green-800/70 text-lg leading-relaxed mb-8">
                Over 60% of our products use unchanged classical formulations from Ayurvedic texts, 
                prepared with the same meticulous processes described centuries ago.
              </p>
              <Separator className="bg-green-100 mb-8" />
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-[#f3f6f3] text-green-900 border-green-100">Charaka Samhita</Badge>
                <Badge variant="secondary" className="bg-[#f3f6f3] text-green-900 border-green-100">Sushruta Samhita</Badge>
                <Badge variant="secondary" className="bg-[#f3f6f3] text-green-900 border-green-100">Ashtanga Hridaya</Badge>
              </div>
            </Card>

            <Card className="border-none bg-[#3f6b4c] text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
              <Sparkles className="absolute -top-10 -right-10 w-40 h-40 opacity-10 group-hover:scale-125 transition-transform duration-700" />
              <CardTitle className="text-3xl font-bold mb-6">Modern Adaptation</CardTitle>
              <p className="text-green-50/70 text-lg leading-relaxed">
                We carefully adapt traditional remedies for modern lifestyles without compromising 
                fundamental principles. Our research team works with scholars to ensure every 
                innovation respects the original intent.
              </p>
            </Card>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-32">
          <HeritageFeatureCard 
            icon={<Leaf className="w-8 h-8 text-[#3f6b4c]" />}
            title="Classical Formulations"
            description="Time-tested recipes that have served humanity for millennia, brought to you with modern purity and verified efficacy."
            themeColor="text-[#3f6b4c]"
            bgColor="bg-white"
          />
          <HeritageFeatureCard 
            icon={<Zap className="w-8 h-8 text-[#6b4f29]" />}
            title="Bio-Available Extracts"
            description="Our advanced extraction methods preserve the full-spectrum of the plant's medicinal properties for faster, deeper healing."
            themeColor="text-[#6b4f29]"
            bgColor="bg-white"
          />
        </div>
      </section>
    </div>
  );
}

function HeritageSection({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="space-y-8 group">
      <div className="flex items-center gap-6">
        <div className="p-4 bg-green-50 rounded-3xl group-hover:bg-green-100 transition-all duration-500 shadow-sm border border-green-100">
          {icon}
        </div>
        <h2 className="text-4xl font-bold text-green-950 tracking-tight">
          {title}
        </h2>
      </div>
      <p className="text-2xl text-green-900/70 leading-relaxed font-medium pl-2 border-l-4 border-green-100">
        {description}
      </p>
      <Separator className="bg-green-100/50" />
    </div>
  );
}

function HeritageFeatureCard({ icon, title, description, themeColor, bgColor }: { icon: React.ReactNode; title: string; description: string; themeColor: string; bgColor: string }) {
  return (
    <Card className={`${bgColor} border-green-100 border shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-10 rounded-[3rem]`}>
      <div className="flex items-center gap-6 mb-8">
        <div className={`w-16 h-16 ${bgColor} rounded-2xl shadow-inner border border-green-50 flex items-center justify-center`}>
          {icon}
        </div>
        <CardTitle className={`text-3xl font-bold text-green-950`}>{title}</CardTitle>
      </div>
      <CardContent className="p-0">
        <p className="text-xl text-green-800/60 leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}