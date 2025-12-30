"use client";
import Image from "next/image";

export default function StandardsPage() {
  const certifications = [
    {
      name: "WHO-GMP Certified",
      description: "Meeting World Health Organization Good Manufacturing Practices standards",
      icon: "🌐",
    },
    {
      name: "ISO 9001:2015",
      description: "International quality management system certification",
      icon: "🏅",
    },
    {
      name: "USDA Organic",
      description: "Selected products certified organic by USDA standards",
      icon: "🌱",
    },
    {
      name: "Ayush Premium Mark",
      description: "Indian government certification for authentic Ayurvedic products",
      icon: "🇮🇳",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative h-[28rem] bg-gradient-to-br from-yellow-100 via-orange-100 to-white overflow-hidden">
        <Image
          src="/images/quality-lab.jpg"
          alt="Quality Laboratory"
          fill
          className="object-cover opacity-50 mix-blend-multiply"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brown-900 drop-shadow-sm mb-4">
              Our Quality Standards
            </h1>
            <p className="text-lg sm:text-xl text-amber-600 font-light leading-relaxed">
              Committed to purity, safety, and efficacy in every product
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Intro */}
        <div className="prose prose-lg max-w-4xl text-gray-800 mx-auto text-center">
          <h2 className="text-3xl font-bold text-amber-600">Our Quality Promise</h2>
          <p className="text-gray-700">
            We hold ourselves to the highest standards in the Ayurvedic industry, combining ancient
            wisdom with modern testing protocols to ensure every product meets our rigorous requirements
            for purity and potency.
          </p>
        </div>

        {/* Certifications */}
        <h2 className="text-3xl font-bold text-brown-800 text-center">Certifications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-yellow-50 hover:bg-yellow-100 transition p-6 rounded-xl shadow-lg flex flex-col items-center gap-6"
            >
              <div className="text-4xl mb-4 text-brown-700">{cert.icon}</div>
              <h3 className="text-xl font-semibold text-brown-800">{cert.name}</h3>
              <p className="text-amber-600">{cert.description}</p>
            </div>
          ))}
        </div>

        {/* Testing Procedures */}
        <div className="prose prose-lg text-gray-800 mx-auto">
          <h2 className="text-3xl font-bold text-brown-800">Testing Procedures</h2>
          <ul className="space-y-3 text-gray-700">
            <li>Raw herb authentication using HPTLC and microscopy</li>
            <li>Heavy metal testing for arsenic, lead, mercury, and cadmium</li>
            <li>Microbiological testing for yeast, mold, and pathogens</li>
            <li>Pesticide residue analysis</li>
            <li>Stability testing under various conditions</li>
          </ul>
        </div>

        {/* GMP Compliance Section */}
        <div className="bg-yellow-50 p-8 rounded-xl shadow-lg my-16">
          <h3 className="text-3xl font-bold text-brown-800">GMP Compliance</h3>
          <p className="text-gray-700 mt-4">
            Our manufacturing processes strictly follow Good Manufacturing Practices including:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>Documented standard operating procedures for all processes</li>
            <li>Comprehensive employee training programs</li>
            <li>Regular facility audits and equipment calibration</li>
            <li>Complete batch records and traceability</li>
            <li>Environmental monitoring programs</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
