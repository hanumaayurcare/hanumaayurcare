
import { supabase } from '@/src/lib/supabaseClient';
import CategoryForm from '@/src/components/admin/CategoryForm';
import { notFound } from 'next/navigation';

export const revalidate = 0;

export default async function EditCategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const { data: category } = await supabase
    .from('categories')
    .select('*')
    .eq('id', id)
    .single();

  if (!category) {
    notFound();
  }

  return (
    <div>
       <h1 className="text-3xl font-bold text-gray-800 mb-6">Edit Category: <span className="text-green-700">{category.name}</span></h1>
       <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
         <CategoryForm initialData={category} />
       </div>
    </div>
  );
}
