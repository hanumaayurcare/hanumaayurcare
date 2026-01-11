import { Building2, Factory, Zap, MapPin } from 'lucide-react';

export default function Facilities() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
            <Building2 className="w-4 h-4" />
            <span>Infrastructure</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-green-950 mb-6">World-Class Manufacturing</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our manufacturing ecosystem is designed to scale without compromising the intricate traditional processes of Ayurveda.
          </p>
        </div>

        {/* Location & Land */}
        <div className="bg-[#f0f9ff] rounded-3xl p-8 md:p-12 mb-20">
            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                    <h2 className="text-3xl font-bold text-blue-950 mb-4 flex items-center gap-3">
                        <MapPin className="text-blue-600" /> Location & Scale
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Spread across <span className="font-bold">5 Agreas</span> of lush green land in the biodiversity-rich region of [Location Name], our facility is strategically located away from industrial pollution yet accessible for logistics.
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-center text-blue-900 font-medium">✨ Eco-friendly construction</li>
                        <li className="flex items-center text-blue-900 font-medium">✨ Dedicated storage for raw herbs in controlled conditions</li>
                        <li className="flex items-center text-blue-900 font-medium">✨ Clean room classification ISO Class 7/8</li>
                    </ul>
                </div>
                <div className="flex-1 h-64 bg-white rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-gray-400 font-bold">Image: Aerial View of Plant</span>
                </div>
            </div>
        </div>

        {/* Production Blocks */}
        <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-green-950 mb-12">Dedicated Production Blocks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Block 1 */}
                <div className="border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-shadow bg-white">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-4">
                        <Factory className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-green-900 mb-3">Solid Orals</h3>
                    <p className="text-gray-600 text-sm">
                        High-speed tableting and encapsulation lines.
                        <br/><br/>
                        <span className="font-semibold">Capacity:</span> 10M Tablets/Year
                    </p>
                </div>
                 {/* Block 2 */}
                <div className="border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-shadow bg-white">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                        <Factory className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-green-900 mb-3">Liquids</h3>
                    <p className="text-gray-600 text-sm">
                        Automated bottle filling and sealing for syrups & oils.
                        <br/><br/>
                        <span className="font-semibold">Capacity:</span> 5M Bottles/Year
                    </p>
                </div>
                 {/* Block 3 */}
                <div className="border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-shadow bg-white">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600 mb-4">
                        <Factory className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-green-900 mb-3">Semi-Solids</h3>
                    <p className="text-gray-600 text-sm">
                        Planetary mixers for Avalehas and ointments.
                        <br/><br/>
                        <span className="font-semibold">Capacity:</span> 200 Tons/Year
                    </p>
                </div>
                 {/* Block 4 */}
                <div className="border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-shadow bg-white">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4">
                        <Factory className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-green-900 mb-3">Extracts</h3>
                    <p className="text-gray-600 text-sm">
                        Advanced solvent extraction and spray drying units.
                        <br/><br/>
                        <span className="font-semibold">Capacity:</span> 50 Tons/Year
                    </p>
                </div>
            </div>
        </div>

        {/* Industry 4.0 */}
        <div className="bg-gradient-to-r from-gray-900 to-green-900 rounded-3xl p-8 md:p-16 text-white text-center">
            <Zap className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            <h2 className="text-3xl font-bold mb-6">Industry 4.0 Integration</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                We have embraced the future of manufacturing with SCADA-controlled systems, real-time IoT monitoring of environment parameters (Temp/RH), and automated packaging lines for zero-defect production.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-white/10 px-4 py-2 rounded-full border border-white/20">IoT Sensors</span>
                <span className="bg-white/10 px-4 py-2 rounded-full border border-white/20">SCADA Control</span>
                <span className="bg-white/10 px-4 py-2 rounded-full border border-white/20">Automated Labeling</span>
            </div>
        </div>
      </div>
    </div>
  );
}
