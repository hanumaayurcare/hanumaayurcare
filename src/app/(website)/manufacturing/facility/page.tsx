import { Factory, Cog, Layers, Box } from 'lucide-react';

export default function FacilityOverview() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-sm font-medium mb-6">
            <Factory className="w-4 h-4" />
            <span>Infrastructure</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-green-950 mb-6">Facility & Capacity</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A harmonious blend of traditional preparation methods and modern automated engineering.
          </p>
        </div>

        {/* Layout & Segregation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 bg-[#f9f9f9] p-8 md:p-12 rounded-3xl border border-gray-100">
           <div>
              <h2 className="text-3xl font-bold text-green-950 mb-6">Intelligent Plant Layout</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                 Our facility follows a unidirectional flow for men and materials to eliminate cross-contamination. Dedicated air handling units (AHUs) ensure specific temperature and humidity controls for sensitive hygroscopic herbs.
              </p>
              <ul className="space-y-4">
                 <li className="flex items-start gap-3">
                    <Box className="w-6 h-6 text-orange-600 mt-1" />
                    <div>
                       <span className="font-bold text-gray-900 block">Class 100,000 Clean Rooms</span>
                       <span className="text-sm text-gray-600">For secondary packaging and sterile areas.</span>
                    </div>
                 </li>
                 <li className="flex items-start gap-3">
                    <Layers className="w-6 h-6 text-orange-600 mt-1" />
                    <div>
                       <span className="font-bold text-gray-900 block">Segregated Blocks</span>
                       <span className="text-sm text-gray-600">Separate wings for poisonous herbs (Visha dravyas), heavy metals (Bhasmas), and general manufacturing.</span>
                    </div>
                 </li>
              </ul>
           </div>
           <div className="h-80 bg-white rounded-2xl shadow-lg border border-gray-200 flex items-center justify-center">
               <span className="text-gray-400 font-bold">Image: Floor Plan / Clean Room</span>
           </div>
        </div>

        {/* Equipment List */}
        <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-green-950 mb-12">Machinery & Equipment</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {/* Processing */}
               <div className="bg-white border border-gray-200 p-8 rounded-2xl hover:shadow-lg transition-shadow">
                  <Cog className="w-10 h-10 text-green-600 mb-6" />
                  <h3 className="text-xl font-bold text-green-900 mb-4">Processing</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                     <li>• High Shear Mixers (RMG)</li>
                     <li>• Fluid Bed Dryers (FBD)</li>
                     <li>• Planetary Mixers (for Avaleha)</li>
                     <li>• Pulverizers & Micro-pulverizers</li>
                     <li>• Decoction Vessels (Kwath)</li>
                  </ul>
               </div>

               {/* Finishing */}
               <div className="bg-white border border-gray-200 p-8 rounded-2xl hover:shadow-lg transition-shadow">
                  <Factory className="w-10 h-10 text-blue-600 mb-6" />
                  <h3 className="text-xl font-bold text-green-900 mb-4">Finishing</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                     <li>• Automatic Capsule Filling Machines</li>
                     <li>• High-Speed Rotary Tablet Press</li>
                     <li>• Coating Pans (Film & Sugar)</li>
                     <li>• Liquid Filling & Capping Lines</li>
                  </ul>
               </div>

               {/* Packaging */}
               <div className="bg-white border border-gray-200 p-8 rounded-2xl hover:shadow-lg transition-shadow">
                  <Box className="w-10 h-10 text-orange-600 mb-6" />
                  <h3 className="text-xl font-bold text-green-900 mb-4">Packaging</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                     <li>• Blister Packing (Alu-Alu / Alu-PVC)</li>
                     <li>• Strip Packing Machines</li>
                     <li>• Induction Sealing</li>
                     <li>• Automatic Labeling & Cartoning</li>
                  </ul>
               </div>
            </div>
        </div>

      </div>
    </div>
  );
}
