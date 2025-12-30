"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Users2, 
  Stethoscope, 
  Briefcase, 
  Beaker, 
  ShieldCheck, 
  Mail, 
  Linkedin,
  Sparkles,
  Leaf
} from "lucide-react";

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Dr. Rajesh Verma",
      title: "Founder & Chief Formulator",
      bio: "With over 40 years of experience in Ayurveda, Dr. Verma trained under renowned Vaidyas in Kerala and holds a PhD in Ayurvedic Pharmacology.",
      image: "/images/team/dr-verma.jpg",
      icon: <Stethoscope className="w-4 h-4" />
    },
    {
      name: "Ananya Verma",
      title: "CEO & Visionary",
      bio: "Ananya combines modern business education with deep Ayurvedic knowledge to guide the company's global strategic direction.",
      image: "/images/team/ananya-verma.jpg",
      icon: <Briefcase className="w-4 h-4" />
    },
    {
      name: "Dr. Lakshmi Nair",
      title: "Head of Research",
      bio: "Leads our product development team with expertise in both classical Ayurvedic texts and modern pharmaceutical sciences.",
      image: "/images/team/dr-nair.jpg",
      icon: <Beaker className="w-4 h-4" />
    },
    {
      name: "Arjun Menon",
      title: "Head of Quality",
      bio: "Ensures all products meet our rigorous standards with 20 years of experience in herbal quality control and GMP compliance.",
      image: "/images/team/arjun-menon.jpg",
      icon: <ShieldCheck className="w-4 h-4" />
    }
  ];

  return (
    <div className="bg-[#fcfdfc] min-h-screen">
      {/* Unified Hero Section */}
      <section className="relative bg-[#f3f6f3] py-24 overflow-hidden border-b border-green-100">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#e8f1ea] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
            <Users2 className="w-4 h-4" />
            <span>Dedicated to Your Wellbeing</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-green-950 mb-8 tracking-tight">
            Our Visionary <span className="text-[#3f6b4c]">Leadership</span>
          </h1>
          <p className="text-xl text-green-900/70 max-w-3xl mx-auto leading-relaxed">
            A collective of experts bridging traditional Vedic wisdom with modern scientific rigor 
            to deliver authentic Ayurvedic solutions worldwide.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-32">
        {/* Intro */}
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="inline-flex items-center justify-center p-4 bg-green-50 rounded-[2rem] shadow-sm border border-green-100">
            <Sparkles className="w-10 h-10 text-[#3f6b4c]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-green-950 leading-tight">Authenticity Driven by Expertise</h2>
          <p className="text-2xl text-green-800/60 leading-relaxed italic font-medium">
            "Our leadership team brings together decades of experience in Ayurveda, 
            modern medicine, and ethical business practices to deliver purity 
            and effectiveness to the global community."
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-green-100 hover:border-green-300 shadow-sm hover:shadow-2xl transition-all duration-500 group rounded-[3rem] overflow-hidden bg-white">
              <CardHeader className="flex flex-col items-center pt-12 pb-8 space-y-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-green-100 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                  <Avatar className="w-40 h-40 border-8 border-white shadow-2xl group-hover:scale-105 transition-transform duration-500 relative z-10">
                    <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                    <AvatarFallback className="bg-green-50 text-[#3f6b4c] text-3xl font-bold">
                      {member.name.substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-2 -right-2 p-3 bg-[#3f6b4c] rounded-2xl text-white shadow-xl border-4 border-white z-20 transform group-hover:rotate-12 transition-transform">
                    {member.icon}
                  </div>
                </div>
                <div className="text-center">
                  <CardTitle className="text-2xl font-bold text-green-950 mb-2">{member.name}</CardTitle>
                  <Badge variant="secondary" className="bg-green-50 text-[#3f6b4c] hover:bg-green-100 border-none px-4 py-1">
                    {member.title}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="px-8 pb-12">
                <p className="text-green-800/70 text-center leading-relaxed mb-8 font-medium">
                  {member.bio}
                </p>
                <div className="flex justify-center gap-6 pt-6 border-t border-green-50">
                  <Button variant="ghost" size="icon" className="rounded-2xl text-[#3f6b4c] hover:bg-green-50 hover:text-green-900 transition-all">
                    <Linkedin className="w-6 h-6" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-2xl text-[#3f6b4c] hover:bg-green-50 hover:text-green-900 transition-all">
                    <Mail className="w-6 h-6" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Advisory Board Section */}
        <section className="bg-green-900 rounded-[4rem] p-12 md:p-24 shadow-2xl text-center space-y-12 relative overflow-hidden">
          <Leaf className="absolute -top-10 -left-10 w-96 h-96 text-white/5 pointer-events-none" />
          <Sparkles className="absolute -bottom-20 -right-20 w-80 h-80 text-white/5 pointer-events-none" />
          
          <div className="max-w-4xl mx-auto space-y-8 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Grand Advisory Board</h2>
            <Separator className="w-32 h-2 bg-[#f2d29b] rounded-full mx-auto" />
            <p className="text-xl md:text-2xl text-green-50/80 leading-relaxed font-medium">
              We are guided by a panel of respected Ayurvedic physicians and researchers who ensure our 
              formulations meet the highest clinical and ethical benchmarks.
            </p>
            <div className="pt-8">
              <Button size="lg" className="bg-[#f2d29b] hover:bg-[#e6c18a] text-green-950 font-bold rounded-2xl px-12 py-8 text-xl shadow-2xl transition-all hover:scale-105">
                Consult Our Experts
              </Button>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
