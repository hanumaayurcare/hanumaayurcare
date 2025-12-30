"use client";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ShieldCheck, 
  Globe, 
  Award, 
  Leaf, 
  FlaskConical, 
  FileCheck2, 
  TestTube2,
  ListChecks,
  History
} from "lucide-react";

export default function StandardsPage() {
  const certifications = [
    {
      name: "WHO-GMP Certified",
      description: "Meeting World Health Organization Good Manufacturing Practices standards.",
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      badge: "Global Standard"
    },
    {
      name: "ISO 9001:2015",
      description: "International quality management system certification for consistent excellence.",
      icon: <Award className="w-8 h-8 text-amber-600" />,
      badge: "Quality Focus"
    },
    {
      name: "USDA Organic",
      description: "Selected products certified organic by the highest USDA standards.",
      icon: <Leaf className="w-8 h-8 text-lime-600" />,
      badge: "Organic"
    },
    {
      name: "Ayush Premium Mark",
      description: "Indian government certification for authentic and high-quality Ayurvedic products.",
      icon: <ShieldCheck className="w-8 h-8 text-amber-700" />,
      badge: "Premium"
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[28rem] overflow-hidden">
        <Image
          src="/images/quality-lab.jpg"
          alt="Quality Laboratory"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl transform transition-all duration-700">
            <h1 className="text-5xl md:text-7xl font-extrabold text-amber-950 mb-6 tracking-tight">
              Quality <span className="text-amber-600">Standards</span>
            </h1>
            <p className="text-xl md:text-2xl text-amber-900/80 font-medium leading-relaxed">
              Committed to purity, safety, and efficacy in every formulation we create.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-24">
        {/* Intro */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Badge variant="outline" className="text-amber-700 border-amber-200 bg-amber-50 px-4 py-1">
            OUR QUALITY PROMISE
          </Badge>
          <h2 className="text-4xl font-bold text-amber-950">Integrity in Every Drop</h2>
          <p className="text-xl text-amber-900/70 leading-relaxed italic">
            "We hold ourselves to the highest standards in the Ayurvedic industry, combining 
            ancient wisdom with modern testing protocols to ensure every product exceeds 
            expectations for purity and potency."
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="space-y-12">
          <div className="flex items-center gap-4">
            <FileCheck2 className="w-8 h-8 text-amber-600" />
            <h2 className="text-3xl font-bold text-amber-950 tracking-tight">Global Certifications</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-amber-100 hover:border-amber-300 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    {cert.icon}
                  </div>
                  <Badge variant="secondary" className="text-[10px] uppercase tracking-wider">{cert.badge}</Badge>
                  <CardTitle className="text-xl font-bold text-amber-900">{cert.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-amber-800/60 leading-relaxed">
                    {cert.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pt-12">
          {/* Testing Procedures */}
          <Card className="border-none bg-amber-50 shadow-inner p-10 rounded-[3rem]">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-white rounded-2xl shadow-sm">
                <TestTube2 className="w-8 h-8 text-amber-700" />
              </div>
              <h2 className="text-3xl font-bold text-amber-950">Testing Procedures</h2>
            </div>
            <ul className="space-y-6">
              {[
                { title: "Authentication", desc: "Raw herb authentication using HPTLC and microscopy." },
                { title: "Heavy Metal Screening", desc: "Rigorous testing for arsenic, lead, mercury, and cadmium." },
                { title: "Microbiological Controls", desc: "Advanced testing for yeast, mold, and pathogens." },
                { title: "Purity Analysis", desc: "Complete pesticide residue analysis and shelf-life stability." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs shrink-0 mt-1">
                    {i+1}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-amber-900">{item.title}</h4>
                    <p className="text-amber-800/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Card>

          {/* GMP Compliance Section */}
          <div className="space-y-10">
            <div className="space-y-4">
              <Badge variant="outline" className="text-lime-700 border-lime-200 bg-lime-50 px-3 py-0.5">
                GMP COMPLIANCE
              </Badge>
              <h2 className="text-4xl font-bold text-amber-950">Our Operational Integrity</h2>
              <Separator className="w-24 h-1.5 bg-lime-500 rounded-full" />
            </div>
            
            <p className="text-lg text-amber-900/70 leading-relaxed">
              Our manufacturing processes strictly follow international Good Manufacturing Practices to guarantee consistency in every batch.
            </p>

            <div className="grid grid-cols-1 gap-6">
              {[
                { icon: <ListChecks className="w-5 h-5" />, text: "Documented Standard Operating Procedures (SOPs)" },
                { icon: <History className="w-5 h-5" />, text: "Comprehensive employee training & safety programs" },
                { icon: <ShieldCheck className="w-5 h-5" />, text: "Regular facility audits and equipment calibration" },
                { icon: <Globe className="w-5 h-5" />, text: "Complete batch records and total traceability" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-lime-50 rounded-2xl border border-lime-100 hover:shadow-md transition-all group">
                  <div className="text-lime-700 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <span className="font-medium text-amber-900/80">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
