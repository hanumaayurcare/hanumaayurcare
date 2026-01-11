import { supabase } from '@/src/lib/supabaseClient';
import { getCategoryBySlug } from '@/src/lib/productCategories';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/src/components/ui/card';
import { Button } from '@/src/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ShoppingBag, Leaf, Star } from 'lucide-react';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Define Product Interface
interface Product {
  id: string;
  name: string;
  slug: string;
  dosage_form: string;
  therapeutic_categories: string[];
  description: string;
  benefits: string[];
  image_url: string | null;
  purchase_link: string | null;
}

export const revalidate = 0; // Dynamic fetch

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: slug } = await params;
  
  // 1. Fetch products as before
  const staticCategoryData = getCategoryBySlug(slug);
  
  // 2. Fetch rich category details from DB
  const { data: dbCategory, error: catError } = await supabase
    .from('categories')
    .select('*')
    .eq('slug', slug)
    .single();

  const categoryName = dbCategory?.name || staticCategoryData?.name;
  const categoryDetails = dbCategory?.details || staticCategoryData?.details;
  const categoryType = dbCategory?.type || staticCategoryData?.type;

  if (!categoryName) {
    notFound();
  }

  let productsQuery = supabase.from('products').select('*');

  if (categoryType === 'dosage') {
    productsQuery = productsQuery.eq('dosage_form', categoryName);
  } else {
    productsQuery = productsQuery.contains('therapeutic_categories', [categoryName]);
  }

  const { data, error } = await productsQuery;
  const products = data as Product[] | null;

  if (error) {
    console.error('Error fetching products:', error);
  }

  return (
    <div className="bg-[#fcfdfc] min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[#1a3c2f] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
            <Link href="/products" className="inline-flex items-center text-green-200 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Categories
            </Link>
            <h1 className="text-4xl font-bold mb-2">{categoryName}</h1>
            <p className="text-green-100/80 text-lg">
                {categoryType === 'dosage' ? 'Dosage Form' : 'Therapeutic Category'}
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {categoryDetails && (
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-green-50 mb-12">
                <div className="prose prose-green max-w-none prose-headings:text-green-900 prose-a:text-green-700 hover:prose-a:text-green-900 prose-table:border-collapse prose-th:bg-green-50 prose-th:p-3 prose-td:p-3 prose-tr:border-b prose-tr:border-green-100">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {categoryDetails}
                    </ReactMarkdown>
                </div>
            </div>
        )}

        {!products || products.length === 0 ? (
            <div className="text-center bg-gray-50 rounded-xl border border-dashed border-gray-200">
                <p className="text-xl text-gray-500 mb-4">No products found in this category yet.</p>
                <Button asChild variant="outline">
                    <Link href="/products">Browse all Categories</Link>
                </Button>
            </div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <Card key={product.id} className="group flex flex-col h-full bg-white border border-gray-100 border-t-4 border-t-[#1a3c2f] shadow-sm hover:shadow-md transition-all duration-300 rounded-lg">
                        <CardHeader className="p-5 pb-2">
                             <div className="flex justify-between items-start mb-3">
                                <span className="bg-gray-50 text-gray-600 border border-gray-200 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                                   {product.dosage_form}
                                </span>
                             </div>
                            
                            <CardTitle className="text-xl font-bold text-gray-900 font-serif leading-tight group-hover:text-[#1a3c2f] transition-colors">{product.name}</CardTitle>
                             
                             <div className="flex flex-wrap gap-1 mt-3">
                                {product.therapeutic_categories?.slice(0, 3).map((cat: string) => (
                                    <span key={cat} className="text-[10px] uppercase font-medium text-green-700 bg-green-50 px-2 py-1 rounded">
                                        {cat}
                                    </span>
                                ))}
                             </div>
                        </CardHeader>

                        <CardContent className="p-5 pt-2 flex-grow">
                             <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed">
                                {product.description}
                            </p>
                        </CardContent>

                        <CardFooter className="p-5 pt-0">
                            <Button asChild className="w-full bg-white text-[#1a3c2f] border border-[#1a3c2f] hover:bg-[#1a3c2f] hover:text-white transition-all h-10 text-sm font-medium tracking-wide">
                                <a href={product.purchase_link || `https://pharmacy.hanumaayurcare.com/product/${product.slug}`} target="_blank" rel="noopener noreferrer">
                                   {product.purchase_link ? 'Buy Now' : 'View Details'}
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        )}
      </div>
    </div>
  );
}