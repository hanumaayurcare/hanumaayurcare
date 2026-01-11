import { Users2, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

export default function TeamPage() {
  const team = [
    {
      name: "Kumara Srinivas Chowdary",
      role: "Managing Director",
      experience: "36+ Years Exp",
      bio: "Has exemplary knowledge of Ayurvedic formulations & medicines.",
      image: "/team/placeholder-1.jpg" 
    },
    {
      name: "CMA N S Subramanyam",
      role: "Chief Financial Officer (CFO)",
      experience: "30+ Years Exp",
      bio: "A qualified Cost Accountant, CIMA, UK, with extensive experience in Finance.",
      image: "/team/placeholder-2.jpg"
    },
    {
      name: "Sarath Modali",
      role: "Director of Operations",
      experience: "38+ Years Exp",
      bio: "Management Graduate with industry experience spanning Government, Manufacturing, and IT Services.",
      image: "/team/placeholder-3.jpg"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-[#0d3b1f] py-24 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/hero/team-bg.jpg')] bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 z-10 text-center">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6 backdrop-blur-sm">
               <Users2 className="w-4 h-4" />
               <span>Leadership</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Meet Our Team</h1>
            <p className="text-xl max-w-2xl mx-auto text-green-100/90 leading-relaxed">
               The visionaries and experts driving our mission to globalize Ayurveda.
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {team.map((member, index) => (
                  <div key={index} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                      <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                          {/* Placeholder for actual image */}
                          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
                              <Users2 className="w-16 h-16 opacity-20" />
                          </div>
                          {/* <Image src={member.image} alt={member.name} fill className="object-cover" /> */}
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                              <div className="flex gap-4">
                                  <a href="#" className="text-white hover:text-blue-400"><Linkedin className="w-5 h-5" /></a>
                                  <a href="#" className="text-white hover:text-green-400"><Mail className="w-5 h-5" /></a>
                              </div>
                          </div>
                      </div>
                      <div className="p-8">
                          <div className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full mb-4">
                              {member.experience}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                          <p className="text-green-700 font-medium text-sm mb-4">{member.role}</p>
                          <p className="text-gray-600 leading-relaxed text-sm">
                              {member.bio}
                          </p>
                      </div>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
}
