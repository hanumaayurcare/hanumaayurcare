
import { supabase } from '@/src/lib/supabaseClient';
import { getCategoryBySlug } from '@/src/lib/productCategories';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/src/components/ui/card';
import { Button } from '@/src/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ShoppingBag, Leaf } from 'lucide-react';
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
            <div className="text-center py-20 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                <p className="text-xl text-gray-500 mb-4">No products found in this category yet.</p>
                <Button asChild variant="outline">
                    <Link href="/products">Browse all Categories</Link>
                </Button>
            </div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <Card key={product.id} className="group flex flex-col h-full border-0 shadow-sm hover:shadow-xl transition-all duration-500 bg-white overflow-hidden rounded-xl">
                        {/* Image Section - Clean & Immersive */}
                        <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden">
                           {product.image_url ? (
                               <Image 
                                 src={product.image_url} 
                                 alt={product.name}
                                 fill
                                 className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                               />
                           ) : (
                               <div className="w-full h-full flex items-center justify-center bg-green-50/30">
                                   <Leaf className="w-12 h-12 text-green-100" />
                               </div>
                           )}
                           {/* Badge - Floating & Minimal */}
                           <div className="absolute top-3 left-3">
                               <span className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-green-900 shadow-sm border border-green-100 uppercase">
                                   {product.dosage_form}
                               </span>
                           </div>
                        </div>

                        <CardHeader className="p-6 pb-2">
                             {/* Primary Tag Only */}
                             <div className="mb-2">
                                {product.therapeutic_categories?.[0] && (
                                    <span className="text-[10px] font-bold tracking-widest text-green-600 uppercase">
                                        {product.therapeutic_categories[0]}
                                    </span>
                                )}
                             </div>
                            <CardTitle className="text-xl font-bold text-green-950 font-serif leading-tight group-hover:text-amber-600 transition-colors">
                                {product.name}
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="p-6 pt-2 flex-grow">
                            <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed font-light">
                                {product.description}
                            </p>
                        </CardContent>

                        <CardFooter className="p-6 pt-0 mt-auto">
                            <Button asChild className="w-full bg-[#1a3c2f] text-white hover:bg-[#2c5e4a] h-12 rounded-lg text-sm font-medium tracking-wide shadow-none hover:shadow-md transition-all">
                                <a href={product.purchase_link || `https://pharmacy.hanumaayurcare.com/product/${product.slug}`} target="_blank" rel="noopener noreferrer">
                                   <ShoppingBag className="w-4 h-4 mr-2" /> 
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
