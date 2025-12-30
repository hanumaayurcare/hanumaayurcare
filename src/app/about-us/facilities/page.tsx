import Image from "next/image";

export default function FacilitiesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[28rem] md:h-[32rem] bg-gradient-to-br from-lime-100 via-amber-100 to-white overflow-hidden border border-gray-200 shadow-lg">
  <Image
    src="/images/manufacturing-facility.jpg"
    alt="Modern Ayurvedic manufacturing facility with stainless steel equipment and traditional herbs"
    fill
    className="object-cover opacity-50 mix-blend-luminosity"
    priority
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
  />
  {/* Soft white to transparent overlay for text clarity */}
  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/40 to-transparent" />

  <div className="absolute inset-0 flex items-center justify-center text-center px-4">
    <div className="max-w-4xl px-6">
      <h1 className="text-3xl sm:text-5xl font-serif font-bold text-amber-900 mb-4 drop-shadow-sm">
        Our <span className="text-lime-700">Manufacturing</span> Facilities
      </h1>
      <p className="text-lg sm:text-xl text-amber-800 leading-relaxed max-w-3xl mx-auto">
        Where 5,000 years of Ayurvedic tradition meets cutting-edge pharmaceutical technology
      </p>
      <div className="mt-6">
        <button className="px-6 py-3 bg-lime-600 hover:bg-lime-700 text-white font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
          Take a Virtual Tour
        </button>
      </div>
    </div>
  </div>
</div>



      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* GMP Certified Section */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="inline-block mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-amber-600 relative">
                  GMP Certified Facilities
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-amber-200 transform translate-y-1"></span>
                </h2>
              </div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Our 50,000 sq ft manufacturing unit in Kerala is WHO-GMP certified, combining 
                traditional Ayurvedic preparation methods with modern pharmaceutical standards.
                We maintain the purity of ancient formulations while ensuring consistency and 
                safety through rigorous quality controls.
              </p>
              <div className="flex items-center space-x-4">
                <Image 
                  src="/images/gmp-certified-badge.png" 
                  alt="GMP Certified Badge"
                  width={80}
                  height={80}
                  className="w-16 h-16"
                />
                <span className="text-sm text-gray-500">WHO-GMP Certified Since 2010</span>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/facility-interior.jpg"
                  alt="Clean, modern facility interior with stainless steel equipment"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="my-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-600 inline-block relative">
              World-Class <span className="text-amber-700">Facility</span> Features
              <span className="absolute bottom-0 left-0 w-full h-1 bg-amber-200 transform translate-y-1"></span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                ),
                title: "Dedicated Production Zones",
                description: "Separate areas for each preparation type with specialized equipment"
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                  </svg>
                ),
                title: "Climate-Controlled Storage",
                description: "Preserves herb potency with optimal temperature and humidity"
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                  </svg>
                ),
                title: "Advanced Laboratories",
                description: "In-house testing for purity, potency, and heavy metal screening"
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                  </svg>
                ),
                title: "Automated Packaging",
                description: "High-speed lines ensure efficiency and hygiene"
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                ),
                title: "Solar-Powered Operations",
                description: "Sustainable energy for 60% of our power needs"
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                ),
                title: "Quality Assurance",
                description: "200+ quality checkpoints throughout production"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-amber-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-amber-700 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Production Capabilities */}
        <section className="my-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-600 inline-block relative">
              Production <span className="text-amber-700">Capabilities</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-amber-200 transform translate-y-1"></span>
            </h2>
            <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
              We bridge ancient wisdom with modern delivery systems for maximum efficacy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Classical Preparations",
                items: ["Asavas", "Arishtas", "Lehyams", "Churnas", "Ghritas", "Tailams"],
                bg: "bg-amber-50",
                border: "border-amber-200"
              },
              {
                title: "Modern Formats",
                items: ["Tablets", "Capsules", "Softgels", "Syrups", "Granules", "Lozenges"],
                bg: "bg-lime-50",
                border: "border-lime-200"
              },
              {
                title: "Topical Applications",
                items: ["Medicated Oils", "Creams", "Balms", "Gels", "Pastes", "Ubtans"],
                bg: "bg-orange-50",
                border: "border-orange-200"
              }
            ].map((category, index) => (
              <div key={index} className={`border ${category.border} ${category.bg} p-6 rounded-xl hover:shadow-md transition-all`}>
                <h3 className="text-xl font-semibold text-amber-700 mb-4 pb-2 border-b border-amber-100">{category.title}</h3>
                <ul className="grid grid-cols-2 gap-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center py-2">
                      <svg className="w-4 h-4 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}