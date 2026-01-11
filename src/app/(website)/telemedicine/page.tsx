import { Video, Phone, MessageCircle, Calendar, ArrowRight, Activity, Stethoscope, ShieldCheck, HeartPulse, CreditCard } from 'lucide-react';
import Link from 'next/link';

export default function TelemedicinePage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-r from-[#1a4a2e] to-[#2d5036] py-24 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-sm border border-white/20">
                  <Video className="w-10 h-10 text-green-100" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Ayurvedic Tele-Medicine</h1>
              <p className="text-xl text-green-100/90 max-w-2xl mx-auto mb-10 leading-relaxed">
                  Experience the healing touch of Ayurveda from anywhere. Connect with senior Vaidyas for personalized diagnosis, diet plans, and holistic treatment.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a href="https://hospital.hanumaayurcare.com/book" target="_blank" rel="noopener noreferrer" className="bg-[#f2d29b] text-green-950 font-bold px-8 py-4 rounded-full hover:bg-[#e6c18a] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                      Book Video Consultation
                  </a>
                  <div className="flex items-center justify-center gap-2 text-green-200 text-sm font-medium px-4">
                    <ShieldCheck className="w-4 h-4" /> 100% Private & Secure
                  </div>
              </div>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
          
          {/* Consultation Types */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
             <div className="border border-green-100 bg-green-50/50 p-6 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700">
                   <Video className="w-6 h-6" />
                </div>
                <div>
                   <h3 className="font-bold text-green-900">Video Consult</h3>
                   <p className="text-sm text-gray-600">Face-to-face diagnosis & Nadi Pariksha verification.</p>
                </div>
             </div>
             <div className="border border-green-100 bg-green-50/50 p-6 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700">
                   <Phone className="w-6 h-6" />
                </div>
                <div>
                   <h3 className="font-bold text-green-900">Audio Call</h3>
                   <p className="text-sm text-gray-600">Detailed discussion about symptoms and history.</p>
                </div>
             </div>
             <div className="border border-green-100 bg-green-50/50 p-6 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700">
                   <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                   <h3 className="font-bold text-green-900">Chat Support</h3>
                   <p className="text-sm text-gray-600">Quick follow-ups and diet plan clarifications.</p>
                </div>
             </div>
          </div>

          {/* How it Works */}
          <div className="text-center mb-24">
              <h2 className="text-3xl font-bold text-green-950 mb-4">Seamless Care Process</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-16">Healing is just four steps away. We have simplified the process to ensure you get professional care without the hassle.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                  {/* Connecting Line */}
                  <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-green-100 -z-10"></div>

                  {[
                      { step: 1, title: "Book Slot", desc: "Select doctor & time", icon: Calendar },
                      { step: 2, title: "Consultation", desc: "Detailed video/audio call", icon: Stethoscope },
                      { step: 3, title: "e-Prescription", desc: "Rx & Diet Plan via Email", icon: Activity },
                      { step: 4, title: "Delivery", desc: "Medicines at your door", icon: ShieldCheck }
                  ].map((item, i) => (
                      <div key={i} className="relative bg-white pt-4">
                          <div className="w-24 h-24 bg-white border-4 border-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 shadow-sm relative z-10">
                              <item.icon className="w-10 h-10" />
                              <div className="absolute top-0 right-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">
                                  {item.step}
                              </div>
                          </div>
                          <h4 className="font-bold text-xl text-green-900 mb-2">{item.title}</h4>
                          <p className="text-gray-600 text-sm px-4">{item.desc}</p>
                      </div>
                  ))}
              </div>
          </div>

          {/* Special Features Grid */}
          <div className="bg-[#f0fdf4] rounded-3xl p-8 md:p-16 mb-20">
               <div className="text-center mb-12">
                   <h2 className="text-3xl font-bold text-green-950 mb-4">Why Choose Our Tele-Medicine?</h2>
                   <p className="text-green-800/70">More than just a video call. It is a complete wellness ecosystem.</p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                   <div className="flex gap-4">
                       <HeartPulse className="w-12 h-12 text-green-600 shrink-0" />
                       <div>
                           <h3 className="font-bold text-lg text-green-900 mb-2">Video Pulse Diagnosis</h3>
                           <p className="text-gray-600 leading-relaxed">
                               Our senior Vaidyas use visual assessment (Darshana) and detailed questioning (Prashna) to infer your Pulse (Nadi) condition and body constitution validation via video.
                           </p>
                       </div>
                   </div>
                   <div className="flex gap-4">
                       <Activity className="w-12 h-12 text-green-600 shrink-0" />
                       <div>
                           <h3 className="font-bold text-lg text-green-900 mb-2">Diet & Lifestyle Plans</h3>
                           <p className="text-gray-600 leading-relaxed">
                               Receive a personalized Dinacharya (Daily Regimen) and Pathya-Apathya (Dietary Do's & Don'ts) chart customized for your condition.
                           </p>
                       </div>
                   </div>
                   <div className="flex gap-4">
                       <ShieldCheck className="w-12 h-12 text-green-600 shrink-0" />
                       <div>
                           <h3 className="font-bold text-lg text-green-900 mb-2">Hospital Integration</h3>
                           <p className="text-gray-600 leading-relaxed">
                               Seamless record sharing with our physical hospital. If Panchakarma is needed, your online doctor can directly book your admission.
                           </p>
                       </div>
                   </div>
                   <div className="flex gap-4">
                       <CreditCard className="w-12 h-12 text-green-600 shrink-0" />
                       <div>
                           <h3 className="font-bold text-lg text-green-900 mb-2">Insurance Support</h3>
                           <p className="text-gray-600 leading-relaxed">
                               We support major insurance providers for reimbursement claims on consultations and prescribed medicines (subject to policy terms).
                           </p>
                       </div>
                   </div>
               </div>
          </div>

          {/* Pricing & Eligibility */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-green-900 text-white rounded-2xl p-8 flex flex-col justify-between">
                   <div>
                       <h3 className="text-2xl font-bold mb-2">Eligibility</h3>
                       <p className="text-green-200 mb-6">Available across India & Select International Locations.</p>
                       <ul className="space-y-3">
                           <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div> Suitable for Chronic alignmenets</li>
                           <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div> Skin, Joint, & Gut Health</li>
                           <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div> Stress & Lifestyle Disorders</li>
                       </ul>
                   </div>
                   <div className="mt-8 pt-8 border-t border-green-800">
                       <p className="text-sm text-green-300">Note: Emergency cases require physical hospitalization.</p>
                   </div>
               </div>

               <div className="bg-orange-50 text-orange-950 rounded-2xl p-8 border border-orange-100 flex flex-col justify-between">
                   <div>
                       <h3 className="text-2xl font-bold mb-2">Transparent Pricing</h3>
                       <p className="text-orange-800/80 mb-6">Affordable healthcare for everyone.</p>
                       
                       <div className="flex items-center justify-between mb-4 pb-4 border-b border-orange-200/60">
                           <span className="font-medium">First Consultation</span>
                           <span className="font-bold text-xl">FREE / ₹200 <span className="text-xs font-normal text-gray-500">(depends on doctor)</span></span>
                       </div>
                       <div className="flex items-center justify-between">
                           <span className="font-medium">Follow-up (within 15 days)</span>
                           <span className="font-bold text-xl">₹300 - ₹500</span>
                       </div>
                   </div>
                   <div className="mt-8">
                        <a href="https://hospital.hanumaayurcare.com/book" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-green-900 text-white font-bold py-3 rounded-xl hover:bg-green-800 transition-colors">
                            Check Availability
                        </a>
                   </div>
               </div>
           </div>
      </div>
    </div>
  );
}
