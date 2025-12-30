"use client";
import Image from "next/image";
import { useState } from "react";

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Dr. A",
      title: "Founder & Chief Formulator",
      bio: "With over 40 years of experience in Ayurveda, Dr. Verma trained under renowned Vaidyas in Kerala and holds a PhD in Ayurvedic Pharmacology.",
      image: "/images/team/dr-verma.jpg"
    },
    {
      name: "B",
      title: "CEO",
      bio: "Combines modern business education with deep Ayurvedic knowledge to guide the company's strategic direction.",
      image: "/images/team/ananya-verma.jpg"
    },
    {
      name: "C",
      title: "Head of Research",
      bio: "Leads our product development team with expertise in both Ayurvedic and modern pharmacology.",
      image: "/images/team/dr-nair.jpg"
    },
    {
      name: "D",
      title: "Head of Quality",
      bio: "Ensures all products meet our rigorous standards with 20 years of experience in herbal quality control.",
      image: "/images/team/arjun-menon.jpg"
    }
  ];

  const [showContactModal, setShowContactModal] = useState(false);

  const handleContactButtonClick = () => {
    setShowContactModal(!showContactModal);
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative h-[28rem] bg-gradient-to-br from-amber-100 via-lime-100 to-white overflow-hidden">
        <Image
          src="/images/team-hero.jpg"
          alt="Our Team"
          fill
          className="object-cover opacity-50 mix-blend-multiply"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-amber-900 drop-shadow-sm mb-4">
              Our Leadership Team
            </h1>
            <p className="text-lg sm:text-xl text-amber-700 font-light leading-relaxed">
              Experts combining traditional wisdom with modern science
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Intro */}
        <div className="prose prose-lg max-w-4xl text-gray-800 mx-auto text-center">
          <h2 className="text-3xl font-bold text-amber-700">Meet Our Experts</h2>
          <p>
            Our leadership team brings together decades of experience in Ayurveda,
            modern medicine, and ethical business practices to deliver authentic,
            effective wellness solutions.
          </p>
        </div>

        {/* Team Members in Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-amber-50 hover:bg-amber-100 transition p-6 rounded-xl shadow-sm flex flex-col items-center gap-6"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className="rounded-full object-cover border-4 border-amber-200"
              />
              <div>
                <h3 className="text-xl font-semibold text-amber-800">{member.name}</h3>
                <p className="text-sm text-lime-700 mb-2">{member.title}</p>
                <p className="text-gray-700 text-base leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Board */}
        <div className="prose prose-lg max-w-4xl text-gray-800 mx-auto text-center">
          <h2 className="text-3xl font-bold text-amber-700">Our Advisory Board</h2>
          <p>
            We're guided by a panel of respected Ayurvedic physicians, modern medical doctors,
            and wellness experts who review our formulations and practices.
          </p>
        </div>
      </section>

      {/* Floating Contact Button */}
      <div
        className="fixed bottom-8 right-8 bg-amber-600 text-white py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-110"
        onClick={handleContactButtonClick}
      >
        <span className="font-medium">Contact Us</span>
      </div>

      {/* Optional Modal for Contact Form (if needed) */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl w-full sm:w-96 max-w-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
            {/* Contact form or content */}
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Your Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Message</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your message"
                  rows={4}
                ></textarea>
              </div>
              <button className="bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg w-full">
                Send Message
              </button>
            </form>
            <div
              className="absolute top-2 right-2 text-gray-500 cursor-pointer"
              onClick={handleContactButtonClick}
            >
              X
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
