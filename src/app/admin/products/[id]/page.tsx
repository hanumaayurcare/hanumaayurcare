
import { supabase } from '@/src/lib/supabaseClient';
import ProductForm from '@/src/components/admin/ProductForm';
import { notFound } from 'next/navigation';

export const revalidate = 0;

export default async function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const { data: product } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single();

  if (!product) {
    notFound();
  }

  return (
    <div>
       <h1 className="text-3xl font-bold text-gray-800 mb-6">Edit Product: <span className="text-green-700">{product.name}</span></h1>
       <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
         <ProductForm initialData={product} />
       </div>
    </div>
  );
}
