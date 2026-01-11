"use client";

import { useState, useEffect } from 'react';
import { supabase } from '@/src/lib/supabaseClient';
import { useRouter } from 'next/navigation';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { Label } from '@/src/components/ui/label';
import { Textarea } from '@/src/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/src/components/ui/select';
import { Loader2, X, Plus } from 'lucide-react';

interface Category {
  name: string;
  slug: string;
}

interface ProductFormProps {
  initialData?: any;
}

export default function ProductForm({ initialData }: ProductFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [dosageForms, setDosageForms] = useState<Category[]>([]);
  const [therapeuticCats, setTherapeuticCats] = useState<Category[]>([]);
  
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    slug: initialData?.slug || '',
    dosage_form: initialData?.dosage_form || '',
    therapeutic_categories: initialData?.therapeutic_categories || [],
    description: initialData?.description || '',
    benefits: initialData?.benefits || [],
    image_url: initialData?.image_url || '',
    purchase_link: initialData?.purchase_link || '',
  });

  const [newBenefit, setNewBenefit] = useState('');

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const { data } = await supabase.from('categories').select('*');
    if (data) {
        setDosageForms(data.filter((c: any) => c.type === 'dosage'));
        setTherapeuticCats(data.filter((c: any) => c.type === 'therapeutic'));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSlugGen = () => {
    const slug = formData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    setFormData({ ...formData, slug });
  };

  const toggleCategory = (catName: string) => {
    const current = formData.therapeutic_categories;
    if (current.includes(catName)) {
        setFormData({ ...formData, therapeutic_categories: current.filter((c: string) => c !== catName) });
    } else {
        setFormData({ ...formData, therapeutic_categories: [...current, catName] });
    }
  };

  const addBenefit = () => {
    if (newBenefit.trim()) {
        setFormData({ ...formData, benefits: [...formData.benefits, newBenefit.trim()] });
        setNewBenefit('');
    }
  };

  const removeBenefit = (index: number) => {
    const newBenefits = [...formData.benefits];
    newBenefits.splice(index, 1);
    setFormData({ ...formData, benefits: newBenefits });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
        name: formData.name,
        slug: formData.slug,
        dosage_form: formData.dosage_form,
        therapeutic_categories: formData.therapeutic_categories,
        description: formData.description,
        benefits: formData.benefits,
        image_url: formData.image_url || null,
        purchase_link: formData.purchase_link || null,
    };

    let error;

    if (initialData?.id) {
        const { error: updateError } = await supabase
            .from('products')
            .update(payload)
            .eq('id', initialData.id);
        error = updateError;
    } else {
        const { error: insertError } = await supabase
            .from('products')
            .insert([payload]);
        error = insertError;
    }

    setLoading(false);

    if (error) {
        alert('Error saving product: ' + error.message);
    } else {
        router.push('/admin/products');
        router.refresh();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl">
        {/* Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
                <Label htmlFor="name">Product Name</Label>
                <Input 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    onBlur={() => !formData.slug && handleSlugGen()}
                    placeholder="e.g. Abhayarishta" 
                    required 
                />
            </div>
            
            <div className="space-y-2">
                <Label htmlFor="slug">Slug (URL)</Label>
                <div className="flex gap-2">
                    <Input 
                        id="slug" 
                        name="slug" 
                        value={formData.slug} 
                        onChange={handleChange} 
                        placeholder="e.g. abhayarishta" 
                        required 
                    />
                    <Button type="button" variant="outline" onClick={handleSlugGen}>Generate</Button>
                </div>
            </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="space-y-2">
                <Label htmlFor="dosage_form">Dosage Form</Label>
                <Select 
                    value={formData.dosage_form} 
                    onValueChange={(val) => setFormData({...formData, dosage_form: val})}
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Select Dosage Form" />
                    </SelectTrigger>
                    <SelectContent>
                        {dosageForms.map(d => (
                            <SelectItem key={d.slug} value={d.name}>{d.name}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className="space-y-2">
                <Label>Therapeutic Categories</Label>
                <div className="flex flex-wrap gap-2 p-3 border rounded-md bg-gray-50 max-h-40 overflow-y-auto">
                    {therapeuticCats.map(cat => (
                        <button
                            key={cat.slug}
                            type="button"
                            onClick={() => toggleCategory(cat.name)}
                            className={`text-xs px-2 py-1 rounded-full border transition-colors ${
                                formData.therapeutic_categories.includes(cat.name)
                                ? 'bg-green-600 text-white border-green-600'
                                : 'bg-white text-gray-600 border-gray-200 hover:border-green-400'
                            }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>

        {/* Details */}
        <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea 
                id="description" 
                name="description" 
                value={formData.description} 
                onChange={handleChange} 
                className="h-32"
                placeholder="Product description..." 
                required
            />
        </div>

        {/* Benefits Array */}
        <div className="space-y-2">
            <Label>Benefits / Key Features</Label>
            <div className="flex gap-2">
                <Input 
                    value={newBenefit} 
                    onChange={(e) => setNewBenefit(e.target.value)}
                    placeholder="Add a benefit (e.g. Relieves constipation)"
                    onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addBenefit())}
                />
                <Button type="button" onClick={addBenefit} variant="secondary">Add</Button>
            </div>
            <div className="space-y-2 mt-2">
                {formData.benefits.map((benefit: string, index: number) => (
                    <div key={index} className="flex items-center justify-between bg-white p-2 border rounded text-sm">
                        <span>{benefit}</span>
                        <button type="button" onClick={() => removeBenefit(index)} className="text-red-500 hover:text-red-700">
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                ))}
            </div>
        </div>

        {/* Image */}
        <div className="space-y-2">
            <Label htmlFor="image_url">Image URL</Label>
            <Input 
                id="image_url" 
                name="image_url" 
                value={formData.image_url} 
                onChange={handleChange} 
                placeholder="https://..." 
            />
            <p className="text-xs text-gray-500">Upload feature coming soon. Use external URL for now.</p>
        </div>

        {/* Purchase Link */}
        <div className="space-y-2">
            <Label htmlFor="purchase_link">Purchase Link (Buy Now URL)</Label>
            <Input 
                id="purchase_link" 
                name="purchase_link" 
                value={formData.purchase_link} 
                onChange={handleChange} 
                placeholder="https://pharmacy.hanumaayurcare.com/product/..." 
            />
            <p className="text-xs text-gray-500">If left empty, the button will link to a "Contact Us" page or default fallback.</p>
        </div>

        {/* Actions */}
        <div className="pt-6 flex gap-4">
            <Button type="submit" className="bg-green-700 hover:bg-green-800" disabled={loading}>
                {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                {initialData ? 'Update Product' : 'Create Product'}
            </Button>
            <Button type="button" variant="outline" onClick={() => router.back()}>
                Cancel
            </Button>
        </div>
    </form>
  );
}
