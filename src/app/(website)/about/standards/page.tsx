import { ShieldCheck } from 'lucide-react';

export default function Standards() {
  return (
    <div className="bg-background min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-800 text-sm font-medium mb-6">
          <ShieldCheck className="w-4 h-4" />
          <span>Quality Assurance</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-green-950 mb-8">Quality Standards</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Uncompromising commitment to quality, purity, and safety. Content coming soon...
        </p>
      </div>
    </div>
  );
}
