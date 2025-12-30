"use client";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
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
  History,
  Sparkles
} from "lucide-react";

export default function StandardsPage() {
  const certifications = [
    {
      name: "WHO-GMP Certified",
      description: "Meeting World Health Organization Good Manufacturing Practices standards.",
      icon: <Globe className="w-8 h-8 text-[#3f6b4c]" />,
      badge: "Global Standard"
    },
    {
      name: "ISO 9001:2015",
      description: "International quality management system certification for consistent excellence.",
      icon: <Award className="w-8 h-8 text-[#6b4f29]" />,
      badge: "Quality Focus"
    },
    {
      name: "USDA Organic",
      description: "Selected products certified organic by the highest USDA standards.",
      icon: <Leaf className="w-8 h-8 text-[#3f6b4c]" />,
      badge: "Organic"
    },
    {
      name: "Ayush Premium Mark",
      description: "Indian government certification for authentic and high-quality Ayurvedic products.",
      icon: <ShieldCheck className="w-8 h-8 text-[#6b4f29]" />,
      badge: "Premium"
    },
  ];

  return (
    <div className="bg-[#fcfdfc] min-h-screen">
      {/* Unified Hero Section */}
      <section className="relative bg-[#f3f6f3] py-24 overflow-hidden border-b border-green-100">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#e8f1ea] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span>Uncompromising Quality Control</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-green-950 mb-8 tracking-tight">
            Our Quality <span className="text-[#3f6b4c]">Standards</span>
          </h1>
          <p className="text-xl text-green-900/70 max-w-3xl mx-auto leading-relaxed">
            Committed to purity, safety, and efficacy in every formulation. 
            We maintain the highest global benchmarks for authentic Ayurveda.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-32">
        {/* Intro */}
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="inline-flex items-center justify-center p-4 bg-green-50 rounded-[2rem] shadow-sm border border-green-100">
            <Sparkles className="w-10 h-10 text-[#3f6b4c]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-green-950 leading-tight">Integrity in Every Drop</h2>
          <p className="text-2xl text-green-800/60 leading-relaxed italic font-medium">
            "We hold ourselves to the highest standards in the Ayurvedic industry, combining 
            ancient wisdom with modern laboratory testing to ensure purity and potency."
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="space-y-16">
          <div className="flex items-center gap-4 px-4 py-2 bg-green-50 w-fit rounded-2xl border border-green-100 shadow-sm">
            <FileCheck2 className="w-8 h-8 text-[#3f6b4c]" />
            <h2 className="text-3xl font-bold text-green-950 tracking-tight">Global Certifications</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-green-100 hover:border-green-300 shadow-sm hover:shadow-2xl transition-all duration-500 group rounded-[3rem] bg-white overflow-hidden">
                <CardHeader className="flex flex-col items-center text-center space-y-6 pt-12">
                  <div className="w-20 h-20 bg-green-50 rounded-3xl flex items-center justify-center group-hover:bg-green-100 group-hover:scale-110 transition-all duration-500 transform group-hover:rotate-6">
                    {cert.icon}
                  </div>
                  <div className="space-y-2">
                    <Badge variant="secondary" className="bg-green-50 text-[#3f6b4c] text-[10px] uppercase tracking-widest px-3">{cert.badge}</Badge>
                    <CardTitle className="text-2xl font-bold text-green-950">{cert.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="px-8 pb-12">
                  <p className="text-center text-green-800/60 leading-relaxed font-medium">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pt-12 items-start">
          {/* Testing Procedures */}
          <Card className="border-green-100 bg-white shadow-2xl shadow-green-900/5 p-12 rounded-[3.5rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5">
              <FlaskConical className="w-32 h-32 text-green-900" />
            </div>
            <div className="flex items-center gap-6 mb-12">
              <div className="p-4 bg-green-50 rounded-2xl shadow-sm border border-green-100">
                <TestTube2 className="w-10 h-10 text-[#3f6b4c]" />
              </div>
              <h2 className="text-4xl font-bold text-green-950">Laboratory Testing</h2>
            </div>
            <ul className="space-y-8">
              {[
                { title: "Authentication", desc: "Raw herb identity verified using HPTLC and advanced microscopy." },
                { title: "Contaminant Screening", desc: "Rigorous testing for heavy metals: arsenic, lead, mercury, and cadmium." },
                { title: "Microbiological Controls", desc: "Ensuring zero pathogens using advanced bacterial and fungal screening." },
                { title: "Stability Analysis", desc: "Full-spectrum purity analysis and long-term shelf-life validation." }
              ].map((item, i) => (
                <li key={i} className="flex gap-6 group">
                  <div className="w-10 h-10 rounded-2xl bg-[#3f6b4c] text-white flex items-center justify-center text-lg font-bold shrink-0 mt-1 shadow-lg transform group-hover:rotate-12 transition-transform">
                    {i+1}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-green-950">{item.title}</h4>
                    <p className="text-green-800/70 text-lg leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Card>

          {/* GMP Compliance Section */}
          <div className="space-y-12">
            <div className="space-y-6">
              <Badge variant="outline" className="text-green-700 border-green-200 bg-green-50 px-4 py-1 text-sm font-semibold">
                GMP COMPLIANCE
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-green-950 leading-tight">Operational <span className="text-[#3f6b4c]">Integrity</span></h2>
              <Separator className="w-32 h-2 bg-green-500 rounded-full" />
            </div>
            
            <p className="text-xl text-green-900/70 leading-relaxed font-medium">
              Our manufacturing protocols strictly follow international Good Manufacturing Practices to guarantee consistency and purity in every single batch.
            </p>

            <div className="grid grid-cols-1 gap-6">
              {[
                { icon: <ListChecks className="w-6 h-6" />, text: "Standard Operating Procedures (SOPs)" },
                { icon: <History className="w-6 h-6" />, text: "Rigorous employee training & validation" },
                { icon: <ShieldCheck className="w-6 h-6" />, text: "Regular facility and equipment audits" },
                { icon: <Globe className="w-6 h-6" />, text: "Total batch traceability & transparency" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 p-6 bg-white rounded-3xl border border-green-100 shadow-sm hover:shadow-xl hover:border-green-300 transition-all duration-500 group">
                  <div className="p-3 bg-green-50 rounded-xl text-[#3f6b4c] group-hover:scale-110 transition-transform">{item.icon}</div>
                  <span className="text-lg font-bold text-green-900/80">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
