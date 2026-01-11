import { Video, Calendar, ArrowRight, Activity, Stethoscope } from 'lucide-react';
import Link from 'next/link';

export default function TelemedicinePage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-r from-[#1a4a2e] to-[#2d5036] py-24 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                  <Video className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Ayurvedic Tele-Medicine</h1>
              <p className="text-lg text-green-100 max-w-2xl mx-auto mb-10">
                  Connect with experienced Ayurvedic physicians from the comfort of your home. Get personalized diet, lifestyle, and medicinal advice.
              </p>
              <a href="https://hospital.hanumaayurcare.com/book" target="_blank" rel="noopener noreferrer" className="bg-[#f2d29b] text-green-950 font-bold px-8 py-3 rounded-full hover:bg-[#e6c18a] transition-colors inline-block">
                  Book Online Consultation
              </a>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
          {/* How it Works */}
          <div className="text-center mb-20">
              <h2 className="text-3xl font-bold text-green-950 mb-12">How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                  <div className="relative z-10">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-700 font-bold text-xl">1</div>
                      <h4 className="font-bold text-lg mb-2">Book Slot</h4>
                      <p className="text-gray-600 text-sm">Choose a doctor and convenient time slot.</p>
                  </div>
                  <div className="relative z-10">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-700 font-bold text-xl">2</div>
                      <h4 className="font-bold text-lg mb-2">Consult</h4>
                      <p className="text-gray-600 text-sm">Video/Audio call with the physician.</p>
                  </div>
                  <div className="relative z-10">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-700 font-bold text-xl">3</div>
                      <h4 className="font-bold text-lg mb-2">Prescription</h4>
                      <p className="text-gray-600 text-sm">Receive digital prescription & diet plan.</p>
                  </div>
                   <div className="relative z-10">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-700 font-bold text-xl">4</div>
                      <h4 className="font-bold text-lg mb-2">Delivery</h4>
                      <p className="text-gray-600 text-sm">Medicines delivered to your doorstep.</p>
                  </div>
              </div>
          </div>

          {/* Features */}
          <div className="bg-[#f3f6f3] rounded-3xl p-8 md:p-12 mb-20">
               <h2 className="text-3xl font-bold text-green-950 mb-10 text-center">Consultation Features</h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center">
                       <Activity className="w-10 h-10 text-green-600 mb-4" />
                       <h3 className="font-bold text-lg text-green-900 mb-2">Pulse Diagnosis</h3>
                       <p className="text-gray-600 text-sm">Expert analysis of symptoms and constitution (Prakriti) assessment.</p>
                   </div>
                   <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center">
                       <Stethoscope className="w-10 h-10 text-green-600 mb-4" />
                       <h3 className="font-bold text-lg text-green-900 mb-2">Chronic Care</h3>
                       <p className="text-gray-600 text-sm">Specialized management for diabetes, arthritis, and skin disorders.</p>
                   </div>
                   <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center">
                       <Calendar className="w-10 h-10 text-green-600 mb-4" />
                       <h3 className="font-bold text-lg text-green-900 mb-2">Follow-ups</h3>
                       <p className="text-gray-600 text-sm">Regular tracking of progress and dosage adjustments.</p>
                   </div>
               </div>
          </div>

          {/* Pricing / Integration Note */}
           <div className="text-center max-w-2xl mx-auto border border-green-200 bg-green-50 rounded-xl p-8">
               <h3 className="font-bold text-xl text-green-900 mb-4">Pricing & Eligibility</h3>
               <p className="text-gray-700 mb-6">
                   First Consultation is often free or available at a nominal fee of ₹200. Follow-ups are charged based on the duration and seniority of the doctor.
               </p>
               <a href="https://hospital.hanumaayurcare.com" target="_blank" rel="noopener noreferrer" className="text-green-800 font-bold hover:underline inline-flex items-center">
                   Visit Hospital Website for Details <ArrowRight className="w-4 h-4 ml-2"/>
               </a>
           </div>
      </div>
    </div>
  );
}
