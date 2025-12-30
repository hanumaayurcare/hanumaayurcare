"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
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
  Sparkles
} from "lucide-react";

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Dr. A",
      title: "Founder & Chief Formulator",
      bio: "With over 40 years of experience in Ayurveda, Dr. Verma trained under renowned Vaidyas in Kerala and holds a PhD in Ayurvedic Pharmacology.",
      image: "/images/team/dr-verma.jpg",
      icon: <Stethoscope className="w-4 h-4" />
    },
    {
      name: "B",
      title: "CEO",
      bio: "Combines modern business education with deep Ayurvedic knowledge to guide the company's strategic direction.",
      image: "/images/team/ananya-verma.jpg",
      icon: <Briefcase className="w-4 h-4" />
    },
    {
      name: "C",
      title: "Head of Research",
      bio: "Leads our product development team with expertise in both Ayurvedic and modern pharmacology.",
      image: "/images/team/dr-nair.jpg",
      icon: <Beaker className="w-4 h-4" />
    },
    {
      name: "D",
      title: "Head of Quality",
      bio: "Ensures all products meet our rigorous standards with 20 years of experience in herbal quality control.",
      image: "/images/team/arjun-menon.jpg",
      icon: <ShieldCheck className="w-4 h-4" />
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[24rem] md:h-[32rem] overflow-hidden bg-amber-950">
        <Image
          src="/images/team-hero.jpg"
          alt="Our Team"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <Badge variant="outline" className="mb-6 border-white/20 text-white bg-white/10 backdrop-blur-sm px-4 py-1">
              MEET THE VISIONARIES
            </Badge>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
              Our Leadership <span className="text-amber-400">Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-amber-50 font-medium leading-relaxed max-w-2xl mx-auto">
              A collective of experts bridging traditional Vedic wisdom with modern scientific rigor.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-24">
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center justify-center p-3 bg-amber-50 rounded-2xl mb-4">
            <Users2 className="w-8 h-8 text-amber-700" />
          </div>
          <h2 className="text-4xl font-bold text-amber-950">Authenticity Driven by Experience</h2>
          <p className="text-xl text-amber-900/70 leading-relaxed italic">
            "Our leadership team brings together decades of experience in Ayurveda, 
            modern medicine, and ethical business practices to deliver authentic, 
            effective wellness solutions for the global community."
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-amber-100 hover:border-lime-300 shadow-sm hover:shadow-2xl transition-all duration-500 group rounded-[2.5rem] overflow-hidden">
              <CardHeader className="flex flex-col items-center pt-10 pb-6 space-y-4">
                <div className="relative">
                  <Avatar className="w-32 h-32 border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-500">
                    <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                    <AvatarFallback className="bg-amber-100 text-amber-700 text-2xl font-bold">
                      {member.name.substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-2 -right-2 p-2 bg-lime-600 rounded-full text-white shadow-lg border-2 border-white">
                    {member.icon}
                  </div>
                </div>
                <div className="text-center group-hover:translate-y-[-4px] transition-transform duration-300">
                  <CardTitle className="text-2xl font-bold text-amber-900">{member.name}</CardTitle>
                  <Badge variant="secondary" className="mt-2 bg-amber-50 text-amber-700 hover:bg-amber-100 border-none">
                    {member.title}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="px-8 pb-10">
                <p className="text-amber-800/70 text-center leading-relaxed mb-6 font-medium">
                  {member.bio}
                </p>
                <div className="flex justify-center gap-4 pt-4 border-t border-amber-50">
                  <Button variant="ghost" size="icon" className="rounded-full text-amber-700 hover:bg-amber-50">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full text-amber-700 hover:bg-amber-50">
                    <Mail className="w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Advisory Board Section */}
        <section className="bg-gradient-to-br from-amber-50 to-lime-50 rounded-[3rem] p-12 md:p-20 shadow-inner text-center space-y-10 relative overflow-hidden">
          <Sparkles className="absolute -top-10 -left-10 w-64 h-64 text-lime-200/50 pointer-events-none" />
          <div className="max-w-4xl mx-auto space-y-6 relative z-10">
            <h2 className="text-4xl font-bold text-amber-950">Grand Advisory Board</h2>
            <Separator className="w-24 h-1.5 bg-lime-500 rounded-full mx-auto" />
            <p className="text-xl text-amber-900/70 leading-relaxed font-medium">
              We are guided by a panel of respected Ayurvedic physicians, modern medical doctors, 
              and wellness experts who review our formulations and practices to ensure they meet 
              the highest clinical and ethical benchmarks.
            </p>
            <div className="pt-8">
              <Button size="lg" className="bg-lime-700 hover:bg-lime-800 text-white rounded-full px-10 py-7 text-lg shadow-xl shadow-lime-700/20">
                Consult Our Experts
              </Button>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
