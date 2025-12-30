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
  BookOpen
} from "lucide-react";

export default function HeritagePage() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[24rem] md:h-[32rem] overflow-hidden">
        <Image
          src="/images/ayurveda-heritage.jpg"
          alt="Ayurvedic Heritage"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/40 via-transparent to-white" />
        
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <Badge variant="outline" className="mb-4 border-amber-700/30 text-amber-900 bg-amber-50/50 backdrop-blur-sm px-4 py-1">
              5,000 YEARS OF WISDOM
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold text-amber-950 mb-6 tracking-tight drop-shadow-sm">
              Our Ayurvedic <span className="text-amber-700">Heritage</span>
            </h1>
            <p className="text-lg md:text-2xl text-amber-900/80 font-medium leading-relaxed max-w-2xl mx-auto">
              Connecting ancient Vedic sciences with the rhythms of modern wellness and longevity.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-20">
            <HeritageSection 
              icon={<ScrollText className="w-8 h-8 text-amber-700" />}
              title="The Roots of Ayurveda"
              description='Ayurveda, the "science of life," originated in India over 5,000 years ago. Our formulations are based on sacred classical texts like the Charaka Samhita and Sushruta Samhita, preserving the authentic preparation methods that have stood the test of centuries.'
            />

            <HeritageSection 
              icon={<Library className="w-8 h-8 text-amber-700" />}
              title="Connection to Tradition"
              description="Our founders trained under the most respected traditional Vaidyas in Kerala. We honor these lineages by maintaining authentic preparation methods—like slow-cooking in copper vessels—while integrating modern precision for safety and dosage."
            />

            <HeritageSection 
              icon={<Moon className="w-8 h-8 text-amber-700" />}
              title="Seasonal Harvesting"
              description="True to Ayurvedic principles, we harvest our herbs at peak biological potency according to precise seasonal and lunar cycles. This respect for nature's clock ensures the maximum 'Prana' (life-force) remains in every extract."
            />
          </div>

          {/* Sidebar Callouts */}
          <div className="lg:col-span-4 space-y-8">
            <Card className="border-none bg-amber-50 shadow-inner p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-amber-700" />
                <CardTitle className="text-xl font-bold text-amber-950">Classical Scripts</CardTitle>
              </div>
              <p className="text-amber-900/70 text-sm leading-relaxed mb-6">
                Over 60% of our products use unchanged classical formulations from Ayurvedic texts, 
                prepared with the same meticulous processes described centuries ago.
              </p>
              <Separator className="bg-amber-200 mb-6" />
              <div className="space-y-3">
                <Badge variant="secondary" className="bg-amber-200/50 text-amber-900">Charaka Samhita</Badge>
                <Badge variant="secondary" className="bg-amber-200/50 text-amber-900">Sushruta Samhita</Badge>
                <Badge variant="secondary" className="bg-amber-200/50 text-amber-900">Ashtanga Hridaya</Badge>
              </div>
            </Card>

            <Card className="border-none bg-lime-900 text-lime-50 p-8 rounded-3xl shadow-2xl relative overflow-hidden group">
              <Sparkles className="absolute -top-10 -right-10 w-40 h-40 opacity-10 group-hover:scale-125 transition-transform duration-700" />
              <CardTitle className="text-2xl font-bold mb-4">Modern Adaptation</CardTitle>
              <p className="text-lime-100/70 text-sm leading-relaxed">
                We carefully adapt traditional remedies for modern lifestyles without compromising 
                fundamental principles. Our research team works with scholars to ensure every 
                innovation respects the original intent.
              </p>
            </Card>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-24">
          <HeritageFeatureCard 
            icon={<Leaf className="w-6 h-6 text-amber-600" />}
            title="Classical Formulations"
            description="Time-tested recipes that have served humanity for millennia, brought to you with modern purity."
            bgColor="bg-amber-50"
          />
          <HeritageFeatureCard 
            icon={<Zap className="w-6 h-6 text-lime-600" />}
            title="Bio-Available Extracts"
            description="Our advanced extraction methods preserve the full-spectrum of the plant's medicinal properties."
            bgColor="bg-lime-50"
          />
        </div>
      </section>
    </div>
  );
}

function HeritageSection({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="space-y-6 group">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-amber-50 rounded-2xl group-hover:bg-amber-100 transition-colors">
          {icon}
        </div>
        <h2 className="text-3xl font-bold text-amber-950 tracking-tight">
          {title}
        </h2>
      </div>
      <p className="text-xl text-amber-900/70 leading-relaxed font-medium">
        {description}
      </p>
      <Separator className="bg-amber-100" />
    </div>
  );
}

function HeritageFeatureCard({ icon, title, description, bgColor }: { icon: React.ReactNode; title: string; description: string; bgColor: string }) {
  return (
    <Card className={`${bgColor} border-none shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-8 rounded-[2rem]`}>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
          {icon}
        </div>
        <CardTitle className="text-2xl font-bold text-amber-950">{title}</CardTitle>
      </div>
      <CardContent className="p-0">
        <p className="text-lg text-amber-900/60 leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}