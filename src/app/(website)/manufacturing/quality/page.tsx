import { Microscope, ShieldCheck, FileCheck, FlaskConical } from 'lucide-react';

export default function QualitySystems() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span>Quality Assurance</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-green-950 mb-6">Rigorous Quality Control</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ensuring safety from soil to shelf. Our internal standards often exceed regulatory requirements.
          </p>
        </div>

        {/* Lab Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1 h-96 bg-gray-100 rounded-3xl flex items-center justify-center">
                <span className="text-gray-400 font-bold">Image: Scientist at HPLC Machine</span>
            </div>
            <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-green-950 mb-6">In-House Quality Control Lab</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                    Our GLP-certified laboratory operates 24/7 to test every single raw material and finished batch. We utilize advanced chromatography and spectroscopy to identify active markers and screen for contaminants.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                        <Microscope className="w-6 h-6 text-blue-700 mb-2" />
                        <h4 className="font-bold text-blue-900">Instrumentation</h4>
                        <p className="text-xs text-blue-800/80">HPLC, GC, UV-Spectrophotometer, HPTLC</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                        <FlaskConical className="w-6 h-6 text-green-700 mb-2" />
                        <h4 className="font-bold text-green-900">Microbiology</h4>
                        <p className="text-xs text-green-800/80">Laminar Air Flow, Incubators, Autoclaves</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Testing Parameters */}
        <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-green-950 mb-12">What We Test For</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { title: "Identity & Purity", desc: "Verifying plant species and active marker content." },
                    { title: "Heavy Metals", desc: "AAS/ICP-MS analysis for Lead, Mercury, Arsenic, Cadmium." },
                    { title: "Microbial Load", desc: "Testing for pathogens like Salmonella, E. Coli, S. Aureus." },
                    { title: "Pesticide Residues", desc: "Screening for over 50+ common pesticide traces." }
                ].map((item, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-300 transition-colors shadow-sm">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-700 font-bold">{i+1}</div>
                        <h3 className="font-bold text-green-950 mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Documentation */}
        <div className="bg-gradient-to-br from-gray-900 to-slate-800 text-white rounded-3xl p-10 md:p-16 text-center">
            <FileCheck className="w-16 h-16 mx-auto mb-6 text-green-400" />
            <h2 className="text-3xl font-bold mb-6">Traceability & Documentation</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
                Every product creates a digital footprint. From the farmer's invoice to the final dispatch note, our Batch Manufacturing Records (BMR) ensure complete backward and forward traceability.
            </p>
        </div>

      </div>
    </div>
  );
}
