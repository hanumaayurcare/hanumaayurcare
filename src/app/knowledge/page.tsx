import { FileText, Download, HelpCircle, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function KnowledgePage() {
  return (
    <div className="bg-[#fcfdfc] min-h-screen">
      <div className="bg-green-50 py-20 border-b border-green-100">
         <div className="container mx-auto px-4 text-center">
             <h1 className="text-4xl font-bold text-green-950 mb-4">Knowledge Center</h1>
             <p className="text-lg text-gray-600 max-w-2xl mx-auto">A hub for Ayurvedic wisdom, manufacturing insights, and regulatory guidance for brand owners.</p>
         </div>
      </div>

      <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              
              {/* Articles Section */}
              <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-8">
                     <BookOpen className="w-6 h-6 text-[#c58f51]" />
                     <h2 className="text-2xl font-bold text-green-900">Latest Articles</h2>
                  </div>
                  
                  <div className="space-y-8">
                      {/* Sample Article 1 */}
                      <article className="bg-white p-6 rounded-xl shadow-sm border border-green-50 hover:shadow-md transition-shadow">
                          <span className="text-xs font-bold text-[#c58f51] uppercase tracking-wider">Manufacturing</span>
                          <h3 className="text-xl font-bold text-green-900 mt-2 mb-3">Understanding the Importance of Standardization in Herbo-mineral Formulations</h3>
                          <p className="text-gray-600 mb-4 text-sm line-clamp-3">Standardization ensures consistency, safety, and efficacy in Ayurvedic medicines. Learn how modern analytical techniques like HPLC differ from traditional parikshas.</p>
                          <Link href="#" className="text-green-700 font-semibold text-sm hover:underline">Read More →</Link>
                      </article>

                       {/* Sample Article 2 */}
                       <article className="bg-white p-6 rounded-xl shadow-sm border border-green-50 hover:shadow-md transition-shadow">
                          <span className="text-xs font-bold text-[#c58f51] uppercase tracking-wider">Ayurveda</span>
                          <h3 className="text-xl font-bold text-green-900 mt-2 mb-3">Seasonal Regimens (Ritucharya) for Immunity</h3>
                          <p className="text-gray-600 mb-4 text-sm line-clamp-3">A guide to adapting your product portfolio according to seasonal changes to meet consumer demand for immunity boosters.</p>
                          <Link href="#" className="text-green-700 font-semibold text-sm hover:underline">Read More →</Link>
                      </article>
                  </div>
              </div>

              {/* Sidebar Resources */}
              <div className="space-y-8">
                  {/* Downloads */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <div className="flex items-center gap-3 mb-4">
                          <Download className="w-5 h-5 text-green-700" />
                          <h3 className="font-bold text-lg text-green-900">Downloads</h3>
                      </div>
                      <ul className="space-y-3">
                          <li>
                              <a href="#" className="flex items-center text-sm text-gray-700 hover:text-green-700 group">
                                  <span className="bg-green-100 p-2 rounded-md mr-3 group-hover:bg-green-200"><FileText className="w-4 h-4"/></span>
                                  Product Catalog (PDF)
                              </a>
                          </li>
                          <li>
                              <a href="#" className="flex items-center text-sm text-gray-700 hover:text-green-700 group">
                                  <span className="bg-green-100 p-2 rounded-md mr-3 group-hover:bg-green-200"><FileText className="w-4 h-4"/></span>
                                  B2B Brochure
                              </a>
                          </li>
                          <li>
                              <a href="#" className="flex items-center text-sm text-gray-700 hover:text-green-700 group">
                                  <span className="bg-green-100 p-2 rounded-md mr-3 group-hover:bg-green-200"><FileText className="w-4 h-4"/></span>
                                  Ayurvedic Brand Checklist
                              </a>
                          </li>
                      </ul>
                  </div>

                  {/* FAQs */}
                  <div className="bg-[#f3f6f3] p-6 rounded-xl">
                      <div className="flex items-center gap-3 mb-4">
                          <HelpCircle className="w-5 h-5 text-green-700" />
                          <h3 className="font-bold text-lg text-green-900">B2B FAQs</h3>
                      </div>
                      <div className="space-y-4 text-sm">
                          <div>
                              <p className="font-semibold text-green-800">What is the MOQ for Private Label?</p>
                              <p className="text-gray-600 mt-1">Our MOQs for private label start as low as 500 units per SKU depending on the formulation.</p>
                          </div>
                          <div>
                              <p className="font-semibold text-green-800">Do you help with FSSAI?</p>
                              <p className="text-gray-600 mt-1">Yes, our regulatory team provides full documentation support for license applications.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}
