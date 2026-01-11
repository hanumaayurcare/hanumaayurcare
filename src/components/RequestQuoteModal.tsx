"use client";

import { useState, useEffect } from 'react';
import { X, Loader2, Send } from 'lucide-react';
import { supabase } from '@/src/lib/supabaseClient';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { Label } from '@/src/components/ui/label';
import { Textarea } from '@/src/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/src/components/ui/select';

interface RequestQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function RequestQuoteModal({ isOpen, onClose, defaultService }: RequestQuoteModalProps) {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    serviceType: defaultService || '',
    quantity: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (defaultService) {
      setFormData(prev => ({ ...prev, serviceType: defaultService }));
    }
  }, [defaultService]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, serviceType: value });
  };

  const handleQuantityChange = (value: string) => {
    setFormData({ ...formData, quantity: value });
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
            first_name: formData.contactName.split(' ')[0], // Simple split for now
            last_name: formData.contactName.split(' ').slice(1).join(' ') || '',
            email: formData.email,
            enquiry_type: `Quote Request - ${formData.serviceType}`,
            message: `Company: ${formData.companyName}\nPhone: ${formData.phone}\nQuantity: ${formData.quantity}\n\nMessage: ${formData.message}`,
            status: 'new'
          }
        ]);

      if (error) throw error;

      setSubmitStatus('success');
      setTimeout(() => {
        onClose();
        setSubmitStatus('idle');
        setFormData({
            companyName: '',
            contactName: '',
            email: '',
            phone: '',
            serviceType: '',
            quantity: '',
            message: ''
        })
      }, 2000);
      
    } catch (error) {
      console.error('Error submitting quote request:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl relative">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        <div className="p-8">
          <h2 className="text-2xl font-bold text-green-950 mb-2">Request a Quote</h2>
          <p className="text-gray-600 mb-6 text-sm">Fill in the details below and our sales team will get back to you with a custom proposal.</p>

          {submitStatus === 'success' ? (
            <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-8 rounded-xl text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-6 h-6 text-green-700" />
              </div>
              <strong className="block text-lg font-bold mb-2">Quote Requested!</strong>
              <p>Thank you. We will contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="companyName">Company Name</Label>
                <Input id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} required placeholder="Your Company Ltd." />
              </div>

              <div>
                <Label htmlFor="contactName">Contact Person</Label>
                <Input id="contactName" name="contactName" value={formData.contactName} onChange={handleChange} required placeholder="John Doe" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="john@company.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required placeholder="+91 98765..." />
                  </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Service Interest</Label>
                    <Select onValueChange={handleSelectChange} value={formData.serviceType}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select Service" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Third-Party Manufacturing">Contract Mfg</SelectItem>
                            <SelectItem value="Private Label">Private Label</SelectItem>
                            <SelectItem value="Export OEM">Export / OEM</SelectItem>
                            <SelectItem value="Raw Materials">Raw Materials</SelectItem>
                        </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Est. Quantity</Label>
                     <Select onValueChange={handleQuantityChange} value={formData.quantity}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select Qty" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="< 1000 Units">&lt; 1,000 Units</SelectItem>
                            <SelectItem value="1000 - 5000">1,000 - 5,000</SelectItem>
                            <SelectItem value="5000 - 10000">5,000 - 10,000</SelectItem>
                            <SelectItem value="10000+">10,000+</SelectItem>
                        </SelectContent>
                    </Select>
                  </div>
              </div>

              <div>
                <Label htmlFor="message">Additional Details</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Tell us about the product, dosage form, and timeline..." 
                  className="h-24"
                />
              </div>
              
              {submitStatus === 'error' && (
                <div className="text-red-500 text-sm">Failed to submit. Please try again.</div>
              )}

              <Button type="submit" disabled={isSubmitting} className="w-full bg-green-900 hover:bg-green-800 h-12 text-lg">
                {isSubmitting ? <Loader2 className="animate-spin w-5 h-5 mr-2" /> : null}
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
