import { ClipboardCheck, ArrowRight, Shield, Award } from 'lucide-react';

export default function ProcessCompliance() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-6">
            <ClipboardCheck className="w-4 h-4" />
            <span>Process & Compliance</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-green-950 mb-6">Standard Operating Procedures</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Consistency is key. Our validated processes ensure that every batch performs exactly like the first one.
          </p>
        </div>

        {/* Manufacturing Flow */}
        <div className="mb-24">
             <h2 className="text-3xl font-bold text-center text-green-950 mb-12">The Manufacturing Process</h2>
             <div className="relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                    {[
                        { step: "01", title: "Procurement", desc: "Sourcing verified raw herbs", color: "bg-green-100 text-green-700" },
                        { step: "02", title: "Processing", desc: "Extraction & Formulation", color: "bg-blue-100 text-blue-700" },
                        { step: "03", title: "Quality Check", desc: "IPQC & Lab Testing", color: "bg-orange-100 text-orange-700" },
                        { step: "04", title: "Release", desc: "Final Packaging & Dispatch", color: "bg-purple-100 text-purple-700" }
                    ].map((s, i) => (
                        <div key={i} className="bg-white border-2 border-gray-100 p-6 rounded-2xl text-center hover:border-green-200 transition-colors">
                             <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center font-bold text-lg mb-4 ${s.color}`}>
                                {s.step}
                             </div>
                             <h3 className="font-bold text-lg text-gray-900 mb-2">{s.title}</h3>
                             <p className="text-sm text-gray-500">{s.desc}</p>
                        </div>
                    ))}
                </div>
             </div>
        </div>

        {/* Compliance & Certifications */}
        <div className="bg-[#f0fdf4] rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-green-950 mb-4">Certifications & Standards</h2>
               <p className="text-gray-600">We comply with both domestic and international regulatory frameworks.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm flex items-start gap-4">
                    <Award className="w-10 h-10 text-green-600 flex-shrink-0" />
                    <div>
                        <h3 className="text-xl font-bold text-green-950 mb-2">Ayush Premium Mark</h3>
                        <p className="text-gray-600 text-sm">
                            Voluntary certification ensuring compliance with WHO-GMP guidelines for Ayurvedic products, facilitating international exports.
                        </p>
                    </div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm flex items-start gap-4">
                    <Shield className="w-10 h-10 text-green-600 flex-shrink-0" />
                    <div>
                        <h3 className="text-xl font-bold text-green-950 mb-2">GMP Certified (State Board)</h3>
                        <p className="text-gray-600 text-sm">
                            Mandatory Good Manufacturing Practices certification from the State Licensing Authority.
                        </p>
                    </div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm flex items-start gap-4">
                    <Award className="w-10 h-10 text-green-600 flex-shrink-0" />
                    <div>
                        <h3 className="text-xl font-bold text-green-950 mb-2">ISO 9001:2015</h3>
                        <p className="text-gray-600 text-sm">
                            International standard for Quality Management Systems (QMS).
                        </p>
                    </div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm flex items-start gap-4">
                    <Shield className="w-10 h-10 text-green-600 flex-shrink-0" />
                    <div>
                        <h3 className="text-xl font-bold text-green-950 mb-2">FSSAI License</h3>
                        <p className="text-gray-600 text-sm">
                            Food Safety and Standards Authority of India license for nutraceuticals and food supplements.
                        </p>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}
