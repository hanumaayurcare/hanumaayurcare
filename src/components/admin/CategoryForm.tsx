"use client";

import { useState } from 'react';
import { supabase } from '@/src/lib/supabaseClient';
import { useRouter } from 'next/navigation';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { Label } from '@/src/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/src/components/ui/select';
import RichTextEditor from '@/src/components/admin/RichTextEditor';
import { Loader2 } from 'lucide-react';

interface CategoryFormProps {
  initialData?: any;
}

export default function CategoryForm({ initialData }: CategoryFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    slug: initialData?.slug || '',
    type: initialData?.type || 'dosage',
    description: initialData?.description || '',
    details: initialData?.details || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSlugGen = () => {
    const slug = formData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    setFormData({ ...formData, slug });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
        name: formData.name,
        slug: formData.slug,
        type: formData.type,
        description: formData.description,
        details: formData.details
    };

    let error;

    if (initialData?.id) {
        const { error: updateError } = await supabase
            .from('categories')
            .update(payload)
            .eq('id', initialData.id);
        error = updateError;
    } else {
        const { error: insertError } = await supabase
            .from('categories')
            .insert([payload]);
        error = insertError;
    }

    setLoading(false);

    if (error) {
        alert('Error saving category: ' + error.message);
    } else {
        router.push('/admin/categories');
        router.refresh();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
        <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
                <Label htmlFor="name">Category Name</Label>
                <Input 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    onBlur={() => !formData.slug && handleSlugGen()}
                    placeholder="e.g. Asava & Arishta" 
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
                        placeholder="e.g. asava-arishta" 
                        required 
                    />
                    <Button type="button" variant="outline" onClick={handleSlugGen}>Generate</Button>
                </div>
            </div>
        </div>

        <div className="space-y-2">
            <Label htmlFor="type">Type</Label>
            <Select 
                value={formData.type} 
                onValueChange={(val) => setFormData({...formData, type: val})}
            >
                <SelectTrigger>
                    <SelectValue placeholder="Select Type" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="dosage">Dosage Form</SelectItem>
                    <SelectItem value="therapeutic">Therapeutic Category</SelectItem>
                </SelectContent>
            </Select>
        </div>

        <div className="space-y-2">
            <Label htmlFor="description">Short Description (for cards)</Label>
            <Input 
                id="description" 
                name="description" 
                value={formData.description} 
                onChange={handleChange} 
                placeholder="Brief summary..." 
            />
        </div>

        <div className="space-y-2">
            <Label>Detailed Description (Rich Text)</Label>
            <div className="border rounded-md">
                <RichTextEditor 
                    value={formData.details} 
                    onChange={(val) => setFormData({...formData, details: val})} 
                />
            </div>
            <p className="text-sm text-gray-500 pt-2">
                Use the editor above to add tables, lists, and formatted text. 
                This content will appear at the top of the category page.
            </p>
        </div>

        <div className="pt-4 flex gap-4">
            <Button type="submit" className="bg-green-700 hover:bg-green-800" disabled={loading}>
                {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                {initialData ? 'Update Category' : 'Create Category'}
            </Button>
            <Button type="button" variant="outline" onClick={() => router.back()}>
                Cancel
            </Button>
        </div>
    </form>
  );
}
