import Link from 'next/link';
import Image from 'next/image';

export default function ProductsPage() {
  const dosageForms = [
    { name: "Asava & Arishta", desc: "Fermented liquid preparations", icon: "🏺" },
    { name: "Churna", desc: "Powdered herb mixtures", icon: "🌿" },
    { name: "Kwath", desc: "Herbal decoctions", icon: "☕" },
    { name: "Guggulu", desc: "Resin-based formulations", icon: "🏵️" },
    { name: "Vati & Gutika", desc: "Tablets and pills", icon: "💊" },
    { name: "Bhasma", desc: "Calcined mineral preparations", icon: "🔥" },
    { name: "Taila", desc: "Medicated oils", icon: "💧" },
    { name: "Ghrita", desc: "Medicated ghee preparations", icon: "🧈" },
    { name: "Lepa", desc: "Pastes for external application", icon: "🧖" },
    { name: "Avaleha", desc: "Semi-solid jams", icon: "🍯" }
  ];

  const categories = [
    "Allergy", "Autoimmune", "Blood Disorders", "Bone, Muscle & Joint", "Cold & Cough", "Digestion & Gut",
    "Eye Health", "Female Health", "General Wellness", "Heart Care", "Immunity", "Kidney Health",
    "Kids Health", "Liver Health", "Men's Health", "Mental Health", "Skin Health", "Weight Management"
  ];

  return (
    <div className="bg-[#fcfdfc] min-h-screen">
      <div className="bg-[#3f6b4c] py-16 text-white text-center">
        <div className="container mx-auto px-4">
           <h1 className="text-4xl font-bold mb-4">Our Product Portfolio</h1>
           <p className="text-green-100 max-w-2xl mx-auto">Explore our extensive range of classical and proprietary Ayurvedic formulations. <br/> <span className="text-[#f2d29b] font-medium mt-2 block text-sm">Note: This is an information catalog. For purchases, please visit our Pharmacy.</span></p>
           
           <a href="https://pharmacy.hanumaayurcare.com" target="_blank" rel="noopener noreferrer" className="inline-block mt-6 bg-[#f2d29b] text-green-900 font-bold px-8 py-3 rounded-full hover:bg-[#e6c18a] transition-colors">
              Go to Online Store
           </a>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        
        {/* Dosage Forms Section */}
        <div className="mb-20">
           <h2 className="text-2xl font-bold text-primary mb-8 pb-4 border-b border-border">By Dosage Form</h2>
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {dosageForms.map((form) => (
                <div key={form.name} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all cursor-pointer group">
                   <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">{form.icon}</div>
                   <h3 className="font-bold text-card-foreground mb-1">{form.name}</h3>
                   <p className="text-xs text-muted-foreground">{form.desc}</p>
                </div>
              ))}
           </div>
        </div>

        {/* Therapeutic Categories Section */}
        <div>
           <h2 className="text-2xl font-bold text-green-950 mb-8 pb-4 border-b border-gray-100">By Therapeutic Category</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((cat) => (
                 <div key={cat} className="flex items-center p-4 bg-white border border-gray-100 rounded-lg hover:bg-green-50 transition-colors cursor-pointer">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <span className="text-gray-700 font-medium">{cat}</span>
                 </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}
