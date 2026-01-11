"use client";

import { useEffect, useState } from 'react';
import { supabase } from '@/src/lib/supabaseClient';
import Link from 'next/link';
import { Loader2, Plus, Edit2, Trash2 } from 'lucide-react';
import { Button } from '@/src/components/ui/button';

interface Category {
  id: string;
  name: string;
  slug: string;
  type: string;
  description: string;
}

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('name');
    
    if (data) setCategories(data);
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this category?')) return;
    
    const { error } = await supabase
      .from('categories')
      .delete()
      .eq('id', id);

    if (!error) {
      fetchCategories();
    } else {
      alert('Error deleting category');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Categories</h1>
          <p className="text-gray-500">Manage product categories and their rich descriptions.</p>
        </div>
        <Button asChild className="bg-green-700 hover:bg-green-800">
          <Link href="/admin/categories/new">
            <Plus className="w-4 h-4 mr-2" /> Add Category
          </Link>
        </Button>
      </div>

      {loading ? (
        <div className="flex justify-center p-12">
            <Loader2 className="w-8 h-8 animate-spin text-green-700" />
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Slug</th>
                <th className="p-4">Type</th>
                <th className="p-4">Description</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {categories.map((cat) => (
                <tr key={cat.id} className="hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-900">{cat.name}</td>
                  <td className="p-4 text-sm text-gray-500 font-mono">{cat.slug}</td>
                  <td className="p-4">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                        cat.type === 'dosage' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                    }`}>
                        {cat.type}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-gray-600 max-w-xs truncate">{cat.description}</td>
                  <td className="p-4 text-right space-x-2">
                    <Link href={`/admin/categories/${cat.id}`} className="inline-block p-2 text-green-700 hover:bg-green-50 rounded">
                        <Edit2 className="w-4 h-4" />
                    </Link>
                    <button 
                        onClick={() => handleDelete(cat.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded"
                    >
                        <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {categories.length === 0 && (
              <div className="p-8 text-center text-gray-500">
                  No categories found. Create one to get started.
              </div>
          )}
        </div>
      )}
    </div>
  );
}
