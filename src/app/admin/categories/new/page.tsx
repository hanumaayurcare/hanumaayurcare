
import CategoryForm from '@/src/components/admin/CategoryForm';

export default function NewCategoryPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Add New Category</h1>
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <CategoryForm />
      </div>
    </div>
  );
}
