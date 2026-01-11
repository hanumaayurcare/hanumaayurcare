
import ProductForm from '@/src/components/admin/ProductForm';

export default function NewProductPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Add New Product</h1>
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <ProductForm />
      </div>
    </div>
  );
}
