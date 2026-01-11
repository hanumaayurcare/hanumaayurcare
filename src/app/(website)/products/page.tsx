import Link from 'next/link';
import { dosageForms, therapeuticCategories, type Category } from '@/src/lib/productCategories';

export default function ProductsPage() {
  return (
    <div className="bg-[#fcfdfc] min-h-screen">
      <div className="bg-[#3f6b4c] py-16 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
           <h1 className="text-4xl font-bold mb-4">Our Product Portfolio</h1>
           <p className="text-green-100 max-w-2xl mx-auto">Explore our extensive range of classical and proprietary Ayurvedic formulations. <br/> <span className="text-[#f2d29b] font-medium mt-2 block text-sm">Note: This is an information catalog. For purchases, please visit our Pharmacy.</span></p>
           
           <a href="https://pharmacy.hanumaayurcare.com" target="_blank" rel="noopener noreferrer" className="inline-block mt-6 bg-[#f2d29b] text-green-900 font-bold px-8 py-3 rounded-full hover:bg-[#e6c18a] transition-colors">
              Go to Online Store
           </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        
        {/* Dosage Forms Section */}
        <div className="mb-20">
           <h2 className="text-2xl font-bold text-primary mb-8 pb-4 border-b border-border">By Dosage Form</h2>
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {dosageForms.map((form: Category) => (
                <Link key={form.slug} href={`/products/${form.slug}`} className="block h-full">
                    <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all cursor-pointer group h-full flex flex-col items-center justify-center">
                    <div className="w-12 h-12 mb-4 text-green-700 bg-green-50 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                        <form.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-card-foreground mb-1">{form.name}</h3>
                    <p className="text-xs text-muted-foreground">{form.desc}</p>
                    </div>
                </Link>
              ))}
           </div>
        </div>

        {/* Therapeutic Categories Section */}
        <div>
           <h2 className="text-2xl font-bold text-green-950 mb-8 pb-4 border-b border-gray-100">By Therapeutic Category</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {therapeuticCategories.map((cat: Category) => (
                 <Link key={cat.slug} href={`/products/${cat.slug}`} className="block">
                    <div className="flex items-center p-4 bg-white border border-gray-100 rounded-lg hover:bg-green-50 transition-colors cursor-pointer hover:shadow-sm">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        <span className="text-gray-700 font-medium">{cat.name}</span>
                    </div>
                 </Link>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}
