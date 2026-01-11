import { Leaf, Recycle, HeartHandshake, Sprout } from 'lucide-react';

export default function Sustainability() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
                <Leaf className="w-4 h-4" />
                <span>Green Initiatives</span>
             </div>
             <h1 className="text-4xl md:text-5xl font-bold text-green-950 mb-6">CSR & Sustainability</h1>
             <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
               We believe that true wellness encompasses the health of our planet and our community. Our commitment to sustainability is woven into every aspect of our operations.
             </p>
          </div>

          {/* Ethical Sourcing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20 bg-[#f3f6f3] p-8 md:p-12 rounded-3xl">
             <div>
                <div className="w-12 h-12 bg-green-200 rounded-lg flex items-center justify-center text-green-800 mb-6">
                   <Sprout className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-green-950 mb-4">Ethical Sourcing of Herbs</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                   We partner directly with farmers and tribal communities to source our raw herbs. This not only ensures the highest potency and purity but also provides fair livelihoods to the cultivators.
                </p>
                <ul className="space-y-3">
                   <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Traceability from farm to factory.
                   </li>
                   <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Support for organic and sustainable farming practices.
                   </li>
                   <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Protection of endangered species through cultivation programs.
                   </li>
                </ul>
             </div>
             <div className="h-80 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                 <span className="text-gray-400 font-medium">Image: Herb Sourcing / Farming</span>
             </div>
          </div>

          {/* Waste Management */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
             <div className="order-2 md:order-1 h-80 bg-gray-100 rounded-2xl flex items-center justify-center">
                 <span className="text-gray-400 font-medium">Image: Treatment Plant / Recycling</span>
             </div>
             <div className="order-1 md:order-2">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-800 mb-6">
                   <Recycle className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-green-950 mb-4">Waste Management & Green Practices</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                   Our manufacturing footprint is designed to be minimal. We employ advanced waste management systems to ensure Zero Liquid Discharge (ZLD) and responsible disposal of solid waste.
                </p>
                <ul className="space-y-3">
                   <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Effluent Treatment Plants (ETP) for water recycling.
                   </li>
                   <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Solar power integration for energy efficiency.
                   </li>
                   <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      Biodegradable packaging initiatives.
                   </li>
                </ul>
             </div>
          </div>

          {/* CSR */}
          <div className="text-center bg-green-900 text-white rounded-3xl p-12">
             <HeartHandshake className="w-16 h-16 mx-auto mb-6 text-green-300" />
             <h2 className="text-3xl font-bold mb-6">Giving Back to the Community</h2>
             <p className="text-xl text-green-100 max-w-2xl mx-auto mb-8">
                A portion of our proceeds goes towards free Ayurvedic medical camps in rural areas and educational scholarships for students of Ayurveda.
             </p>
          </div>
       </div>
    </div>
  );
}
