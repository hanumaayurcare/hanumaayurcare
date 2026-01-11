import { Award, ShieldCheck, FileCheck, CheckCircle2, Download, ClipboardCheck, Scale } from 'lucide-react';
import Image from 'next/image';

export default function CertificationsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-[#0d3b1f] py-24 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/hero/cert-bg.jpg')] bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 z-10 text-center">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/20 border border-yellow-400/30 text-yellow-100 text-sm font-medium mb-6 backdrop-blur-sm">
               <ShieldCheck className="w-4 h-4" />
               <span>Regulatory Compliance</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Certifications & Approvals</h1>
            <p className="text-xl max-w-2xl mx-auto text-green-100/90 leading-relaxed">
               Uncompromising adherence to global quality standards. We are fully licensed, certified, and regularly audited to ensure peace of mind for our partners.
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
          
          {/* Licenses Section */}
          <div className="mb-24">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-green-950 mb-4">Manufacturing Licenses</h2>
                  <p className="text-gray-600">Authorized by State and Central regulatory bodies.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-green-50 rounded-2xl p-8 border border-green-100 flex items-start gap-6">
                      <div className="bg-white p-4 rounded-xl shadow-sm">
                          <Scale className="w-10 h-10 text-green-700" />
                      </div>
                      <div>
                          <h3 className="text-xl font-bold text-green-900 mb-2">AYUSH Manufacturing License</h3>
                          <p className="text-gray-600 mb-4 text-sm">Valid for Classical and Proprietary Ayurvedic medicines. Issued by the State Licensing Authority, Ayush Department.</p>
                          <div className="flex items-center gap-2 text-sm font-medium text-green-800">
                              <CheckCircle2 className="w-4 h-4" /> License No: MP/25D/13/298
                          </div>
                      </div>
                  </div>

                  <div className="bg-orange-50 rounded-2xl p-8 border border-orange-100 flex items-start gap-6">
                      <div className="bg-white p-4 rounded-xl shadow-sm">
                          <FileCheck className="w-10 h-10 text-orange-600" />
                      </div>
                      <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">FSSAI License</h3>
                          <p className="text-gray-600 mb-4 text-sm">Central License for manufacturing Nutraceuticals, Health Supplements, and Food products.</p>
                          <div className="flex items-center gap-2 text-sm font-medium text-orange-800">
                              <CheckCircle2 className="w-4 h-4" /> Lic No: 10019026001569
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* Quality Certifications */}
          <div className="mb-24">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-green-950 mb-4">Quality Certifications</h2>
                  <p className="text-gray-600">Internationally recognized standards for process excellence.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform">
                      <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                          <Award className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-center text-gray-900 mb-2">GMP Certified</h3>
                      <p className="text-center text-gray-500 text-sm mb-6">Good Manufacturing Practices compliance ensuring consistent production standards.</p>
                      <div className="w-full bg-gray-100 h-px mb-4"></div>
                      <p className="text-xs text-center text-gray-400">Issued by: SGS</p>
                  </div>

                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform">
                      <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                          <Award className="w-8 h-8 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-bold text-center text-gray-900 mb-2">WHO-GMP Compliant</h3>
                      <p className="text-center text-gray-500 text-sm mb-6">Facility designed and operated as per World Health Organization guidelines.</p>
                      <div className="w-full bg-gray-100 h-px mb-4"></div>
                      <p className="text-xs text-center text-gray-400">Compliance Audit: Q1 2024</p>
                  </div>

                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform">
                      <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                          <Award className="w-8 h-8 text-teal-600" />
                      </div>
                      <h3 className="text-xl font-bold text-center text-gray-900 mb-2">ISO 9001:2015</h3>
                      <p className="text-center text-gray-500 text-sm mb-6">Quality Management System certification for end-to-end manufacturing processes.</p>
                      <div className="w-full bg-gray-100 h-px mb-4"></div>
                      <p className="text-xs text-center text-gray-400">Certified Since: 2018</p>
                  </div>
              </div>
          </div>

          {/* Audits & Approvals */}
          <div className="bg-gray-900 rounded-3xl p-10 md:p-16 text-white mb-24 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
               <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                   <div>
                       <h2 className="text-3xl font-bold mb-6">External Audits</h2>
                       <p className="text-gray-300 leading-relaxed mb-8">
                           We believe in transparency. Our facility is regularly audited by independent third-party agencies and our B2B partners' quality teams.
                       </p>
                       <ul className="space-y-4">
                           <li className="flex items-start gap-3">
                               <ClipboardCheck className="w-6 h-6 text-green-400 mt-0.5" />
                               <div>
                                   <strong className="block text-white">Third-Party Audits</strong>
                                   <span className="text-gray-400 text-sm">Regular surveillance audits by certification bodies.</span>
                               </div>
                           </li>
                           <li className="flex items-start gap-3">
                               <ClipboardCheck className="w-6 h-6 text-green-400 mt-0.5" />
                               <div>
                                   <strong className="block text-white">Client Audits</strong>
                                   <span className="text-gray-400 text-sm">Open-door policy for prospective B2B partners to audit our facility (by appointment).</span>
                               </div>
                           </li>
                       </ul>
                   </div>
                   <div className="bg-white/10 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                       <h3 className="text-xl font-bold mb-6 border-b border-white/20 pb-4">Our Commitment</h3>
                       <div className="space-y-6">
                           <div className="flex justify-between items-center text-sm">
                               <span className="text-gray-300">Regulatory Compliance</span>
                               <span className="text-green-400 font-bold">100%</span>
                           </div>
                           <div className="w-full bg-white/20 rounded-full h-2">
                               <div className="bg-green-400 h-2 rounded-full w-full"></div>
                           </div>
                           
                           <div className="flex justify-between items-center text-sm">
                               <span className="text-gray-300">Audit Success Rate</span>
                               <span className="text-green-400 font-bold">98%</span>
                           </div>
                           <div className="w-full bg-white/20 rounded-full h-2">
                               <div className="bg-green-400 h-2 rounded-full w-[98%]"></div>
                           </div>
                       </div>
                   </div>
               </div>
          </div>

          {/* Downloads Section */}
          <div className="text-center">
              <h2 className="text-3xl font-bold text-green-950 mb-10">Downloads</h2>
              <div className="inline-flex flex-col md:flex-row gap-4">
                  <button className="flex items-center gap-3 px-8 py-4 bg-white border border-green-200 rounded-xl hover:shadow-md transition-shadow group">
                      <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-700 group-hover:scale-110 transition-transform">
                          <FileCheck className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                          <div className="text-sm font-bold text-gray-900">GMP Certificate</div>
                          <div className="text-xs text-gray-500">PDF • 1.2 MB</div>
                      </div>
                      <Download className="w-4 h-4 text-gray-400 ml-2" />
                  </button>

                  <button className="flex items-center gap-3 px-8 py-4 bg-white border border-green-200 rounded-xl hover:shadow-md transition-shadow group">
                      <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-700 group-hover:scale-110 transition-transform">
                          <FileCheck className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                          <div className="text-sm font-bold text-gray-900">FSSAI License</div>
                          <div className="text-xs text-gray-500">PDF • 0.8 MB</div>
                      </div>
                      <Download className="w-4 h-4 text-gray-400 ml-2" />
                  </button>

                  <button className="flex items-center gap-3 px-8 py-4 bg-white border border-green-200 rounded-xl hover:shadow-md transition-shadow group">
                      <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-700 group-hover:scale-110 transition-transform">
                          <FileCheck className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                          <div className="text-sm font-bold text-gray-900">HSE Policy</div>
                          <div className="text-xs text-gray-500">PDF • 2.5 MB</div>
                      </div>
                      <Download className="w-4 h-4 text-gray-400 ml-2" />
                  </button>
              </div>
          </div>
      </div>
    </div>
  );
}
