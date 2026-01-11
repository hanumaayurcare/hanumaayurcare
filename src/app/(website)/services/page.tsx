import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="bg-[#fcfdfc] min-h-screen">
      {/* Services Hero */}
      <div className="bg-[#0f4c28] py-20 text-white">
         <div className="max-w-7xl mx-auto px-4 text-center">
             <h1 className="text-4xl md:text-5xl font-bold mb-4">B2B Services</h1>
             <p className="text-lg text-green-100 max-w-2xl mx-auto">Comprehensive manufacturing solutions for Ayurvedic brands, startups, and international partners.</p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
         {/* Third Party Manufacturing */}
         <div className="flex flex-col md:flex-row gap-12 mb-24 items-start">
             <div className="flex-1 bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#c58f51]">
                 <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">Contract Manufacturing</span>
                 <h2 className="text-3xl font-bold text-green-950 mb-6">Third-Party Manufacturing</h2>
                 <p className="text-gray-600 mb-6 leading-relaxed">
                     We offer end-to-end manufacturing services for established brands looking to scale. Leverage our GMP-certified facility to produce your proprietary formulations with guaranteed quality and timely delivery.
                 </p>
                 <h4 className="font-bold text-green-900 mb-3">Key Features:</h4>
                 <ul className="space-y-2 mb-8">
                     <li className="flex items-center text-gray-700">
                         <span className="w-1.5 h-1.5 bg-[#c58f51] rounded-full mr-3"></span>
                         Scalable Batch Sizes
                     </li>
                     <li className="flex items-center text-gray-700">
                         <span className="w-1.5 h-1.5 bg-[#c58f51] rounded-full mr-3"></span>
                         Raw Material Sourcing & Testing
                     </li>
                     <li className="flex items-center text-gray-700">
                         <span className="w-1.5 h-1.5 bg-[#c58f51] rounded-full mr-3"></span>
                         FSSAI & AYUSH Compliance Support
                     </li>
                     <li className="flex items-center text-gray-700">
                         <span className="w-1.5 h-1.5 bg-[#c58f51] rounded-full mr-3"></span>
                         Packaging Development Assistance
                     </li>
                 </ul>
                 <Link href="/contact?service=contract_mfg" className="bg-green-900 text-white font-medium px-6 py-3 rounded-lg hover:bg-green-800 transition-colors inline-block w-full text-center">
                     Request Quote
                 </Link>
             </div>

             <div className="flex-1 bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#3f6b4c]">
                 <span className="bg-[#e8f1ea] text-[#3f6b4c] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">White Label</span>
                 <h2 className="text-3xl font-bold text-green-950 mb-6">Private Label Solutions</h2>
                 <p className="text-gray-600 mb-6 leading-relaxed">
                     Enter the market quickly with our ready-to-launch product library. Choose from over 50+ standardized formulations, add your branding, and start selling. Ideal for D2C brands, wellness centers, and doctors.
                 </p>
                 <h4 className="font-bold text-green-900 mb-3">Why Choose Private Label:</h4>
                 <ul className="space-y-2 mb-8">
                     <li className="flex items-center text-gray-700">
                         <span className="w-1.5 h-1.5 bg-[#3f6b4c] rounded-full mr-3"></span>
                         Low Minimum Order Quantities (MOQs)
                     </li>
                     <li className="flex items-center text-gray-700">
                         <span className="w-1.5 h-1.5 bg-[#3f6b4c] rounded-full mr-3"></span>
                         Proven Market-Ready Formulas
                     </li>
                     <li className="flex items-center text-gray-700">
                         <span className="w-1.5 h-1.5 bg-[#3f6b4c] rounded-full mr-3"></span>
                         Faster Go-to-Market Time
                     </li>
                     <li className="flex items-center text-gray-700">
                         <span className="w-1.5 h-1.5 bg-[#3f6b4c] rounded-full mr-3"></span>
                         Marketing & Technical Support
                     </li>
                 </ul>
                 <Link href="/contact?service=private_label" className="border-2 border-green-900 text-green-900 font-medium px-6 py-3 rounded-lg hover:bg-green-50 transition-colors inline-block w-full text-center">
                     View Product Catalog
                 </Link>
             </div>
         </div>

         {/* Export / OEM Section */}
         <div className="bg-[#f0f4f0] rounded-3xl p-8 md:p-16 mb-20">
             <div className="max-w-3xl mx-auto text-center">
                 <h2 className="text-3xl font-bold text-green-950 mb-6">Exports & OEM Services</h2>
                 <p className="text-lg text-gray-700 mb-8">
                     We are geared for the global market. Our export division assists international partners with regulatory dossiers, product registration, and compliant labeling for markets in Europe, USA, UAE, and Southeast Asia.
                 </p>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-8">
                     <div className="bg-white p-5 rounded-lg border border-green-100">
                         <h5 className="font-bold text-green-900 mb-2">Documentation</h5>
                         <p className="text-sm text-gray-600">COA, MSDS, GMP Certificates, Free Sale Certificates.</p>
                     </div>
                     <div className="bg-white p-5 rounded-lg border border-green-100">
                         <h5 className="font-bold text-green-900 mb-2">Formulation</h5>
                         <p className="text-sm text-gray-600">Developing products compliant with target country regulations.</p>
                     </div>
                     <div className="bg-white p-5 rounded-lg border border-green-100">
                         <h5 className="font-bold text-green-900 mb-2">Logistics</h5>
                         <p className="text-sm text-gray-600">Secure packing and shipping coordination.</p>
                     </div>
                 </div>
             </div>
         </div>

         {/* Service Workflow */}
         <div className="text-center">
             <h2 className="text-2xl font-bold text-green-950 mb-12">Our Partner Onboarding Workflow</h2>
             <div className="hidden md:flex justify-between items-center relative px-10">
                 {/* Connecting Line */}
                 <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10 translate-y-[-50%]"></div>
                 
                 {['Enquiry', 'NDA & Discussion', 'Product Finalization', 'Trial Batch', 'Commercial Production', 'Dispatch'].map((step, i) => (
                    <div key={i} className="flex flex-col items-center bg-white p-2">
                        <div className="w-10 h-10 bg-green-900 text-white rounded-full flex items-center justify-center font-bold mb-3 z-10 border-4 border-white shadow-sm">
                            {i + 1}
                        </div>
                        <span className="text-sm font-medium text-gray-800 max-w-[100px]">{step}</span>
                    </div>
                 ))}
             </div>
             {/* Mobile Workflow List */}
             <div className="md:hidden space-y-4">
                {['Enquiry', 'NDA & Discussion', 'Product Finalization', 'Trial Batch', 'Commercial Production', 'Dispatch'].map((step, i) => (
                    <div key={i} className="flex items-center bg-gray-50 p-3 rounded-lg">
                        <span className="w-8 h-8 bg-green-900 text-white rounded-full flex items-center justify-center font-bold mr-3 text-sm">{i + 1}</span>
                        <span className="text-gray-800 font-medium">{step}</span>
                    </div>
                ))}
             </div>
         </div>
      </div>
    </div>
  );
}
