import { Users2, Award, Stethoscope, Microscope } from 'lucide-react';

export default function Team() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-6">
            <Users2 className="w-4 h-4" />
            <span>Leadership</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-green-950 mb-6">Our People</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A diverse team of Vaidyas, Scientists, and Engineers driven by the common goal of global wellness.
          </p>
        </div>

        {/* Promoters */}
        <div className="mb-24">
            <h2 className="text-3xl font-bold text-center text-green-900 mb-12">Promoters & Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                <div className="bg-[#fff9f9] p-8 rounded-3xl border border-red-50 text-center">
                    <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 grayscale overflow-hidden">
                        {/* Image Placeholder */}
                    </div>
                    <h3 className="text-2xl font-bold text-green-950 mb-2">Dr. [Promoter Name]</h3>
                    <p className="text-red-800 font-medium mb-4">Founder & Chief Physician</p>
                    <p className="text-gray-600 text-sm">
                        With over 40 years of clinical experience, Dr. [Name] is the visionary behind our classical formulations. His deep understanding of the scriptures guides our R&D.
                    </p>
                </div>
                <div className="bg-[#fff9f9] p-8 rounded-3xl border border-red-50 text-center">
                    <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 grayscale overflow-hidden">
                        {/* Image Placeholder */}
                    </div>
                     <h3 className="text-2xl font-bold text-green-950 mb-2">Mr. [Co-Founder Name]</h3>
                     <p className="text-red-800 font-medium mb-4">Managing Director</p>
                     <p className="text-gray-600 text-sm">
                        Bringing modern management practices to Ayurveda, ensuring operational excellence and global expansion.
                     </p>
                </div>
            </div>
        </div>

        {/* Team Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Physicians */}
            <div className="bg-green-50 rounded-2xl p-8 hover:shadow-lg transition-all">
                <Stethoscope className="w-10 h-10 text-green-700 mb-6" />
                <h3 className="text-xl font-bold text-green-900 mb-4">Ayurvedic Physicians Panel</h3>
                <p className="text-gray-600 text-sm mb-6">
                    A dedicated team of BAMS and MD (Ayurveda) doctors who oversee formulation accuracy and provide tele-consultations.
                </p>
                <div className="space-y-2">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-200"></div>
                        <span className="font-medium text-sm">Dr. [Name] - Kaya Chikitsa</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-200"></div>
                         <span className="font-medium text-sm">Dr. [Name] - Dravya Guna</span>
                    </div>
                </div>
            </div>

            {/* QA/QC */}
            <div className="bg-blue-50 rounded-2xl p-8 hover:shadow-lg transition-all">
                <Microscope className="w-10 h-10 text-blue-700 mb-6" />
                <h3 className="text-xl font-bold text-blue-900 mb-4">QA & QC Experts</h3>
                <p className="text-gray-600 text-sm mb-6">
                    Chemists and microbiologists ensuring every batch meets rigorous purity standards.
                </p>
                 <div className="space-y-2">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-200"></div>
                        <span className="font-medium text-sm">Head of Quality</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-200"></div>
                         <span className="font-medium text-sm">Sr. Microbiologist</span>
                    </div>
                </div>
            </div>

            {/* Regulatory */}
            <div className="bg-orange-50 rounded-2xl p-8 hover:shadow-lg transition-all">
                <Award className="w-10 h-10 text-orange-700 mb-6" />
                <h3 className="text-xl font-bold text-orange-900 mb-4">Regulatory & Production</h3>
                <p className="text-gray-600 text-sm mb-6">
                    Experts in GMP compliance, documentation, and managing large-scale manufacturing operations.
                </p>
                 <div className="space-y-2">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-orange-200"></div>
                        <span className="font-medium text-sm">Plant Manager</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-orange-200"></div>
                         <span className="font-medium text-sm">Regulatory Affairs Lead</span>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}
