import Image from "next/image";

export default function HeritagePage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[22rem] md:h-[28rem] bg-gradient-to-br from-amber-100 via-amber-200 to-lime-100 overflow-hidden">
        <Image
          src="/images/ayurveda-heritage.jpg"
          alt="Ayurvedic Heritage background showing traditional herbs and texts"
          fill
          className="object-cover opacity-60 mix-blend-multiply"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="max-w-4xl px-4">
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-amber-900 drop-shadow-sm mb-4">
              Our Ayurvedic Heritage
            </h1>
            <p className="text-base md:text-xl text-amber-800 font-light leading-relaxed">
              Connecting 5000 years of ancient wisdom with the rhythms of modern wellness
            </p>
          </div>
        </div>
      </section>
      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-16">
        <div className="space-y-8">
          <div className="inline-block">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-600 relative">
              The Roots of Ayurveda
              <span className="absolute bottom-0 left-0 w-full h-1 bg-amber-200 transform translate-y-1"></span>
            </h2>
          </div>
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl">
            Ayurveda, the "science of life," originated in India over 5000 years ago. Our formulations are based
            on classical texts like <em className="font-semibold text-amber-700">Charaka Samhita</em> and <em className="font-semibold text-amber-700">Sushruta Samhita</em>, preserving the
            authentic methods of preparation and combination that have stood the test of time.
          </p>
        </div>

        <div className="space-y-8">
          <div className="inline-block">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-600 relative">
              Our Connection to Tradition
              <span className="absolute bottom-0 left-0 w-full h-1 bg-amber-200 transform translate-y-1"></span>
            </h2>
          </div>
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl">
            Our founders trained under traditional Vaidyas (Ayurvedic physicians) in Kerala, learning the authentic
            methods of herb preparation, combination, and application. We maintain these traditions while
            implementing modern quality controls to ensure purity and potency.
          </p>
        </div>

        <div className="space-y-8">
          <div className="inline-block">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-600 relative">
              Seasonal Harvesting
              <span className="absolute bottom-0 left-0 w-full h-1 bg-amber-200 transform translate-y-1"></span>
            </h2>
          </div>
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl">
            Following Ayurvedic principles, we harvest ingredients at their peak potency according to seasonal and
            lunar cycles, just as ancient practitioners did. This ensures maximum therapeutic benefits in every
            formulation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 pt-12">
          <div className="bg-amber-50 p-8 rounded-2xl shadow-sm transition-all hover:shadow-md hover:transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-amber-700">Classical Formulations</h3>
            </div>
            <p className="text-lg">
              Over 60% of our products use unchanged classical formulations from Ayurvedic texts, prepared with the
              same meticulous processes described centuries ago. We honor these time-tested recipes while ensuring
              they meet contemporary quality standards.
            </p>
          </div>
          
          <div className="bg-lime-50 p-8 rounded-2xl shadow-sm transition-all hover:shadow-md hover:transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-lime-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-lime-700">Modern Adaptations</h3>
            </div>
            <p className="text-lg">
              Where appropriate, we've carefully adapted traditional remedies to suit modern lifestyles while
              maintaining their fundamental principles and efficacy. Our research team works with Ayurvedic scholars
              to ensure any modifications respect the original intent.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}