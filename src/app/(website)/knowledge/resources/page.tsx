import { Download, FileText, CheckSquare, File, ArrowRight } from 'lucide-react';

export default function ResourcesPage() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
            <Download className="w-4 h-4" />
            <span>Download Center</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-green-950 mb-6">Resources & Downloads</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
             Access our product catalogs, corporate brochures, and regulatory checklists.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            
            {/* Product Catalog */}
            <div className="bg-[#f8fafc] border border-blue-100 rounded-2xl p-8 flex items-start gap-6 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 p-4 rounded-xl">
                    <FileText className="w-8 h-8 text-blue-700" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Product Catalog 2024</h3>
                    <p className="text-gray-600 text-sm mb-4">Complete list of our Classical and Proprietary formulations with dosage forms and indications.</p>
                    <button className="text-blue-700 font-bold text-sm inline-flex items-center hover:underline">
                        Download PDF (5.2 MB) <Download className="w-4 h-4 ml-2" />
                    </button>
                </div>
            </div>

            {/* Corporate Brochure */}
            <div className="bg-[#fcfaf7] border border-orange-100 rounded-2xl p-8 flex items-start gap-6 hover:shadow-lg transition-shadow">
                <div className="bg-orange-100 p-4 rounded-xl">
                    <File className="w-8 h-8 text-orange-700" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Corporate Profile</h3>
                    <p className="text-gray-600 text-sm mb-4">Overview of our infrastructure, capabilities, and company history.</p>
                    <button className="text-orange-700 font-bold text-sm inline-flex items-center hover:underline">
                        Download PDF (2.8 MB) <Download className="w-4 h-4 ml-2" />
                    </button>
                </div>
            </div>

            {/* Regulatory Checklist */}
            <div className="bg-[#f0fdf4] border border-green-100 rounded-2xl p-8 flex items-start gap-6 hover:shadow-lg transition-shadow">
                <div className="bg-green-100 p-4 rounded-xl">
                    <CheckSquare className="w-8 h-8 text-green-700" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Ayurvedic Brand Checklist</h3>
                    <p className="text-gray-600 text-sm mb-4">Essential regulatory requirements for launching a new Ayurvedic brand in India.</p>
                    <button className="text-green-700 font-bold text-sm inline-flex items-center hover:underline">
                        Download Checklist <Download className="w-4 h-4 ml-2" />
                    </button>
                </div>
            </div>

             {/* Contract Mfg Guide */}
            <div className="bg-[#faf5ff] border border-purple-100 rounded-2xl p-8 flex items-start gap-6 hover:shadow-lg transition-shadow">
                <div className="bg-purple-100 p-4 rounded-xl">
                    <FileText className="w-8 h-8 text-purple-700" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Contract Manufacturing Guide</h3>
                    <p className="text-gray-600 text-sm mb-4">Timelines, MOQ structures, and onboarding process for B2B partners.</p>
                    <button className="text-purple-700 font-bold text-sm inline-flex items-center hover:underline">
                        Download Guide <Download className="w-4 h-4 ml-2" />
                    </button>
                </div>
            </div>
            
        </div>

      </div>
    </div>
  );
}
