"use client";
import { Mail, Phone, MapPin, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '@/src/lib/supabaseClient';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { Textarea } from '@/src/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/src/components/ui/select';
import { Label } from '@/src/components/ui/label';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    enquiryType: 'Third-Party Manufacturing',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, enquiryType: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('leads')
        .insert([
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            enquiry_type: formData.enquiryType,
            message: formData.message,
            status: 'new'
          }
        ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', enquiryType: 'Third-Party Manufacturing', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background min-h-screen">
      <div className="bg-primary py-20 text-primary-foreground">
         <div className="container mx-auto px-4 text-center">
             <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
             <p className="text-primary-foreground/80">We'd love to hear from you. Reach out for manufacturing enquiries or general questions.</p>
         </div>
      </div>

      <div className="container mx-auto px-4 py-20">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
             {/* Contact Info */}
             <div>
                 <h2 className="text-2xl font-bold text-primary mb-8">Get in Touch</h2>
                 
                 <div className="space-y-8 mb-12">
                     <div className="flex items-start">
                         <div className="bg-secondary p-3 rounded-lg mr-4">
                             <MapPin className="w-6 h-6 text-primary" />
                         </div>
                         <div>
                             <h4 className="font-bold text-foreground mb-1">Factory & Office</h4>
                             <p className="text-muted-foreground">
                                 Hanuma Ayur Care Pvt Ltd.<br/>
                                 Plot No. 123, Industrial Area Phase II,<br/>
                                 Kerala, India - 682001
                             </p>
                         </div>
                     </div>
                     
                     <div className="flex items-start">
                         <div className="bg-secondary p-3 rounded-lg mr-4">
                             <Phone className="w-6 h-6 text-primary" />
                         </div>
                         <div>
                             <h4 className="font-bold text-foreground mb-1">Phone</h4>
                             <p className="text-muted-foreground">
                                 +91 98765 43210 (B2B Enquiries)<br/>
                                 +91 484 1234567 (Office)
                             </p>
                         </div>
                     </div>

                     <div className="flex items-start">
                         <div className="bg-secondary p-3 rounded-lg mr-4">
                             <Mail className="w-6 h-6 text-primary" />
                         </div>
                         <div>
                             <h4 className="font-bold text-foreground mb-1">Email</h4>
                             <p className="text-muted-foreground">
                                 sales@hanumaayurcare.com<br/>
                                 info@hanumaayurcare.com
                             </p>
                         </div>
                     </div>
                 </div>

                 {/* Map Placeholder */}
                 <div className="w-full h-64 bg-muted rounded-xl overflow-hidden shadow-inner flex items-center justify-center text-muted-foreground">
                     <span className="flex items-center gap-2"><MapPin className="w-5 h-5"/> Google Map Integration</span>
                 </div>
             </div>

             {/* Enquiry Form */}
             <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
                 <h2 className="text-2xl font-bold text-primary mb-6">Send an Enquiry</h2>
                 {submitStatus === 'success' ? (
                    <div className="bg-secondary border border-primary/20 text-primary px-4 py-3 rounded relative" role="alert">
                      <strong className="font-bold">Success!</strong>
                      <span className="block sm:inline"> Your enquiry has been sent. We will get back to you shortly.</span>
                      <Button variant="link" onClick={() => setSubmitStatus('idle')} className="mt-2 p-0 h-auto">Send another</Button>
                    </div>
                 ) : (
                   <form onSubmit={handleSubmit} className="space-y-6">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="space-y-2">
                               <Label htmlFor="firstName">First Name</Label>
                               <Input 
                                 id="firstName"
                                 name="firstName"
                                 value={formData.firstName}
                                 onChange={handleChange}
                                 required
                                 placeholder="John" 
                               />
                           </div>
                           <div className="space-y-2">
                               <Label htmlFor="lastName">Last Name</Label>
                               <Input 
                                 id="lastName"
                                 name="lastName"
                                 value={formData.lastName}
                                 onChange={handleChange}
                                 required
                                 placeholder="Doe" 
                               />
                           </div>
                       </div>

                       <div className="space-y-2">
                           <Label htmlFor="email">Email Address</Label>
                           <Input 
                             id="email"
                             type="email" 
                             name="email"
                             value={formData.email}
                             onChange={handleChange}
                             required
                             placeholder="john@company.com" 
                           />
                       </div>
                       
                       <div className="space-y-2">
                           <Label htmlFor="enquiryType">Enquiry Type</Label>
                           <Select onValueChange={handleSelectChange} defaultValue={formData.enquiryType}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select Enquiry Type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Third-Party Manufacturing">Third-Party Manufacturing</SelectItem>
                                <SelectItem value="Private Label">Private Label</SelectItem>
                                <SelectItem value="Export / OEM">Export / OEM</SelectItem>
                                <SelectItem value="General Enquiry">General Enquiry</SelectItem>
                              </SelectContent>
                           </Select>
                       </div>

                       <div className="space-y-2">
                           <Label htmlFor="message">Message</Label>
                           <Textarea 
                             id="message"
                             name="message"
                             value={formData.message}
                             onChange={handleChange}
                             required
                             placeholder="Tell us about your requirements..."
                             className="h-32"
                           />
                       </div>

                       {submitStatus === 'error' && (
                          <div className="text-destructive text-sm">Something went wrong. Please try again.</div>
                       )}

                       <Button 
                         type="submit" 
                         disabled={isSubmitting}
                         className="w-full h-12 text-lg"
                       >
                           {isSubmitting ? <Loader2 className="animate-spin w-5 h-5 mr-2" /> : null}
                           {isSubmitting ? 'Sending...' : 'Send Message'}
                       </Button>
                   </form>
                 )}
             </div>
         </div>
      </div>
    </div>
  );
}

