import { History } from 'lucide-react';

export default function Heritage() {
  return (
    <div className="bg-background min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-6">
          <History className="w-4 h-4" />
          <span>Since 1920</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-green-950 mb-8">Our Heritage</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Preserving the ancient wisdom of Ayurveda through generations. Content coming soon...
        </p>
      </div>
    </div>
  );
}
