import { HelpCircle, Briefcase, User, ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";

export default function FAQPage() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            <span>Frequently Asked Questions</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-green-950 mb-6">How can we help?</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
             Answers to common questions about our services, products, and processes.
          </p>
        </div>

        {/* B2B Section */}
        <div className="mb-16">
            <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
               <Briefcase className="w-6 h-6 text-green-700" />
               <h2 className="text-2xl font-bold text-green-900">For B2B Partners</h2>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>What are your Minimum Order Quantities (MOQs)?</AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                        For Private Label, our standard MOQ is 1,000 units per SKU for most dosage forms. For tablets and capsules, batch sizes typically start at 100,000 units.
                    </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="item-2">
                    <AccordionTrigger>What is the typical timeline for product development?</AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                        New product development typically takes 4-6 weeks for formulation and pilot batch, followed by licensing which varies by state (approx 30-45 days). Repeat orders are dispatched within 21 days.
                    </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="item-3">
                    <AccordionTrigger>Do you assist with label design and regulatory compliance?</AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                        Yes, our regulatory team reviews your artwork to ensure compliance with Drugs and Cosmetics Act labeling rules. We can also connect you with partner designers.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>

        {/* Consumer Section */}
        <div>
            <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
               <User className="w-6 h-6 text-blue-700" />
               <h2 className="text-2xl font-bold text-green-900">For Consumers</h2>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="c-1">
                    <AccordionTrigger>Are your products safe?</AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                        Absolutely. All our products are tested for heavy metals, pesticides, and microbial contaminants in our GLP-certified lab before release.
                    </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="c-2">
                    <AccordionTrigger>How can I consult a doctor?</AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                        You can book an online consultation via our Telemedicine page or visit our hospital directly. We offer both video and audio consultation options.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>

      </div>
    </div>
  );
}
