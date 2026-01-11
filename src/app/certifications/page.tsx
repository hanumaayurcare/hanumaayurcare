import { Award, ShieldCheck, CheckCircle, FileText } from 'lucide-react';

export default function CertificationsPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-[#f3f6f3] py-20 text-center">
         <div className="container mx-auto px-4">
             <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-bold mb-6 uppercase tracking-wider">
                 <ShieldCheck className="w-4 h-4"/>
                 Compliance First
             </div>
             <h1 className="text-4xl font-bold text-green-950 mb-4">Certifications & Compliance</h1>
             <p className="text-lg text-gray-600 max-w-2xl mx-auto">We adhere to the highest global standards to ensure our products are safe, effective, and compliant.</p>
         </div>
      </div>

      <div className="container mx-auto px-4 py-20">
         
         {/* Key Licenses */}
         <div className="mb-20">
             <h2 className="text-2xl font-bold text-green-950 mb-10 text-center">Manufacturing Licenses</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 <div className="border border-green-100 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
                     <div className="w-16 h-16 mx-auto bg-green-50 rounded-full flex items-center justify-center mb-6">
                        <Award className="w-8 h-8 text-green-700" />
                     </div>
                     <h3 className="text-xl font-bold text-green-900 mb-2">AYUSH License</h3>
                     <p className="text-gray-600 text-sm">Approved by Ministry of AYUSH, Govt of India for manufacturing Ayurvedic medicines.</p>
                 </div>
                 <div className="border border-green-100 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
                     <div className="w-16 h-16 mx-auto bg-green-50 rounded-full flex items-center justify-center mb-6">
                        <Award className="w-8 h-8 text-green-700" />
                     </div>
                     <h3 className="text-xl font-bold text-green-900 mb-2">GMP Certified</h3>
                     <p className="text-gray-600 text-sm">Good Manufacturing Practices certification ensuring consistent production standards.</p>
                 </div>
                 <div className="border border-green-100 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
                     <div className="w-16 h-16 mx-auto bg-green-50 rounded-full flex items-center justify-center mb-6">
                        <Award className="w-8 h-8 text-green-700" />
                     </div>
                     <h3 className="text-xl font-bold text-green-900 mb-2">FSSAI</h3>
                     <p className="text-gray-600 text-sm">Food Safety and Standards Authority of India license for nutraceuticals and food supplements.</p>
                 </div>
             </div>
         </div>

         {/* Compliance Checklist */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
             <div>
                 <h2 className="text-2xl font-bold text-green-950 mb-6">Quality Standards</h2>
                 <p className="text-gray-600 mb-6">Our commitment to quality goes beyond mandatory licenses. We voluntarily adhere to ISO and international safety norms.</p>
                 <ul className="space-y-4">
                     {[
                         "ISO 9001:2015 (Quality Management System)",
                         "ISO 22000:2018 (Food Safety Management)",
                         "Heavy Metal Testing for every batch",
                         "Microbial Limit Tests (MLT)",
                         "Pesticide Residue Analysis"
                     ].map((item, i) => (
                         <li key={i} className="flex items-center text-green-900">
                             <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                             {item}
                         </li>
                     ))}
                 </ul>
             </div>
             <div className="bg-gray-100 rounded-2xl flex items-center justify-center min-h-[300px]">
                 <span className="text-gray-400">Certificates Gallery / Slider</span>
             </div>
         </div>

         {/* Downloads */}
         <div className="bg-[#f0f4f0] rounded-2xl p-8 md:p-12 text-center">
             <h2 className="text-2xl font-bold text-green-950 mb-8">Download Certificates</h2>
             <div className="flex flex-wrap justify-center gap-4">
                 <button className="flex items-center bg-white border border-green-200 px-6 py-3 rounded-lg text-green-800 font-medium hover:bg-green-50 transition-colors">
                     <FileText className="w-5 h-5 mr-2" />
                     Download GMP Certificate
                 </button>
                 <button className="flex items-center bg-white border border-green-200 px-6 py-3 rounded-lg text-green-800 font-medium hover:bg-green-50 transition-colors">
                     <FileText className="w-5 h-5 mr-2" />
                     Download ISO 9001
                 </button>
             </div>
         </div>
      </div>
    </div>
  );
}
