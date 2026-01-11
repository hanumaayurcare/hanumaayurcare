"use client";

import { useEffect, useState } from 'react';
import { supabase } from '@/src/lib/supabaseClient';
import Link from 'next/link';
import { Loader2, Plus, Edit2, Trash2, Search } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';

interface Product {
  id: string;
  name: string;
  slug: string;
  dosage_form: string;
  description: string;
}

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    const { data } = await supabase
      .from('products')
      .select('id, name, slug, dosage_form, description')
      .order('name');
    
    if (data) setProducts(data);
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return;
    
    const { error } = await supabase.from('products').delete().eq('id', id);

    if (!error) {
      setProducts(products.filter(p => p.id !== id));
    } else {
      alert('Error deleting product');
    }
  };

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.dosage_form.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Products</h1>
          <p className="text-gray-500">Manage your entire product catalog.</p>
        </div>
        <Button asChild className="bg-green-700 hover:bg-green-800">
          <Link href="/admin/products/new">
            <Plus className="w-4 h-4 mr-2" /> Add Product
          </Link>
        </Button>
      </div>

      <div className="flex items-center space-x-2 bg-white p-2 rounded-lg border max-w-md">
         <Search className="w-5 h-5 text-gray-400" />
         <Input 
            className="border-none shadow-none focus-visible:ring-0" 
            placeholder="Search products..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
         />
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
                <th className="p-4">Dosage Form</th>
                <th className="p-4">Description</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-900">
                    {product.name}
                    <div className="text-xs text-gray-400 font-mono">{product.slug}</div>
                  </td>
                  <td className="p-4 text-sm text-gray-600">
                    <span className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs border border-green-100">
                        {product.dosage_form}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-gray-500 max-w-xs truncate">{product.description}</td>
                  <td className="p-4 text-right space-x-2">
                    <Link href={`/admin/products/${product.id}`} className="inline-block p-2 text-green-700 hover:bg-green-50 rounded">
                        <Edit2 className="w-4 h-4" />
                    </Link>
                    <button 
                        onClick={() => handleDelete(product.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded"
                    >
                        <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {filteredProducts.length === 0 && (
              <div className="p-12 text-center text-gray-400">
                  No products found.
              </div>
          )}
        </div>
      )}
    </div>
  );
}
