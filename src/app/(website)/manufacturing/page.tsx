import Image from 'next/image';
import Link from 'next/link';

export default function ManufacturingPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-[#0d3b1f] py-24 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <Image 
                src="/hero/manufacturing-bg.jpg" // Placeholder for plant image
                alt="Manufacturing Plant"
                fill
                className="object-cover"
            />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Manufacturing & Quality</h1>
            <p className="text-xl max-w-2xl mx-auto text-green-100">State-of-the-art facilities blending traditional Ayurvedic wisdom with modern Good Manufacturing Practices.</p>
        </div>
      </div>

      {/* Facility Overview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                <div>
                   <h2 className="text-3xl font-bold text-green-950 mb-6">Facility Overview</h2>
                   <div className="w-20 h-1 bg-[#c58f51] mb-8"></div>
                   <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                       Our manufacturing plant is designed to handle high-volume production while maintaining the purity and sanctity of Ayurvedic preparations. The layout emphasizes cross-contamination prevention and efficient material flow.
                   </p>
                   <ul className="space-y-4">
                       {[
                           "Dedicated Production Blocks (Solid, Liquid, Semi-solid)",
                           "Advanced HVAC Systems for Environmental Control",
                           "Automated Material Handling Systems",
                           "Industry 4.0 Integration for Real-time Monitoring"
                       ].map((item, i) => (
                           <li key={i} className="flex items-center text-green-900 font-medium">
                               <span className="w-2 h-2 bg-[#c58f51] rounded-full mr-3"></span>
                               {item}
                           </li>
                       ))}
                   </ul>
                </div>
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                    {/* Placeholder for Facility Image */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        <span className="text-sm">Facility Photo</span>
                    </div>
                </div>
            </div>

            {/* Equipment List */}
            <div className="mb-20">
                <h3 className="text-2xl font-bold text-center text-green-950 mb-10">Advanced Equipment</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {['High Shear Mixers', 'Fluid Bed Processors', 'Automatic Capsule Fillers', 'Blister Packing Lines', 'Herbal Extractors', 'Vacuum Tray Dryers', 'Bhasma Furnaces', 'Bottle Filling Lines'].map((eq) => (
                        <div key={eq} className="bg-[#f3f6f3] p-6 rounded-lg text-center hover:bg-[#e8f1ea] transition-colors border border-green-50 hover:border-green-200">
                            <p className="font-semibold text-green-900">{eq}</p>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* QA/QC Section */}
            <div className="bg-green-50 rounded-3xl p-8 md:p-12">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-green-950 mb-4">Quality Assurance & Control</h2>
                    <p className="max-w-2xl mx-auto text-gray-600">Our commitment to quality is validated by our rigorous testing protocols and state-of-the-art laboratory.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h4 className="font-bold text-lg text-green-800 mb-4 border-b pb-2">QC Laboratory</h4>
                        <ul className="text-sm space-y-2 text-gray-700">
                            <li>• HPLC & GC Analysis</li>
                            <li>• HPTLC Fingerprinting</li>
                            <li>• UV Spectrophotometry</li>
                            <li>• Heavy Metal Testing (AAS/ICP-MS)</li>
                             <li>• Microbial Load Testing</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h4 className="font-bold text-lg text-green-800 mb-4 border-b pb-2">Process Control</h4>
                        <ul className="text-sm space-y-2 text-gray-700">
                            <li>• Raw Material Authentication</li>
                            <li>• In-Process Quality Checks (IPQC)</li>
                            <li>• Batch Manufacturing Records (BMR)</li>
                            <li>• Standard Operating Procedures (SOPs)</li>
                             <li>• Stability Studies</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h4 className="font-bold text-lg text-green-800 mb-4 border-b pb-2">Certifications</h4>
                        <ul className="text-sm space-y-2 text-gray-700">
                            <li>• GMP & WHO-GMP Compliant</li>
                            <li>• AYUSH Manufacturing License</li>
                            <li>• ISO 9001:2015</li>
                            <li>• FSSAI License</li>
                             <li>• GLP (Good Lab Practices)</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
      </section>
      
      {/* Process Highlights CTA */}
      <section className="bg-[#1a4a2e] text-white py-16 text-center">
         <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Partner with a Manufacturer You Can Trust</h2>
            <p className="mb-8 max-w-2xl mx-auto text-green-100">From concept to commercialization, we ensure every product reflects the highest standards of safety and efficacy.</p>
            <div className="flex justify-center gap-4">
                <Link href="/contact" className="bg-[#f2d29b] text-green-950 font-bold px-8 py-3 rounded-full hover:bg-[#e6c18a] transition-colors">
                    Schedule a Plant Visit
                </Link>
                <Link href="/services" className="border border-green-300 text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                    View Services
                </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
