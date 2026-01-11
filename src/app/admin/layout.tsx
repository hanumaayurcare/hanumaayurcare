
import Link from 'next/link';
import { 
  LayoutDashboard, 
  MessageSquare, 
  Package, 
  Tags, 
  Settings, 
  LogOut,
  ArrowLeft
} from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1a3c2f] text-white flex-shrink-0 flex flex-col shadow-xl z-10">
        <div className="p-6 border-b border-green-800/50">
          <div className="flex items-center gap-2">
             <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-green-950 font-bold">A</div>
             <h2 className="text-xl font-bold tracking-tight">Admin Console</h2>
          </div>
        </div>
        
        <nav className="p-4 space-y-1 flex-1 overflow-y-auto">
           <div className="text-xs font-semibold text-green-400 uppercase tracking-wider mb-2 px-4 mt-2">Overview</div>
           
           <Link href="/admin" className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg hover:bg-green-800/50 hover:text-white transition-all text-green-100">
              <LayoutDashboard className="w-5 h-5" />
              Dashboard
           </Link>
           
           <Link href="/admin/leads" className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg hover:bg-green-800/50 hover:text-white transition-all text-green-100">
              <MessageSquare className="w-5 h-5" />
              Leads & Enquiries
           </Link>

           <div className="text-xs font-semibold text-green-400 uppercase tracking-wider mb-2 px-4 mt-6">Catalog</div>
           
           <Link href="/admin/products" className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg hover:bg-green-800/50 hover:text-white transition-all text-green-100">
              <Package className="w-5 h-5" />
              Products
           </Link>
           
           <Link href="/admin/categories" className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg hover:bg-green-800/50 hover:text-white transition-all text-green-100">
              <Tags className="w-5 h-5" />
              Categories
           </Link>

           <div className="text-xs font-semibold text-green-400 uppercase tracking-wider mb-2 px-4 mt-6">System</div>
           
           <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg hover:bg-green-800/50 hover:text-white transition-all text-green-100 opacity-50 cursor-not-allowed">
              <Settings className="w-5 h-5" />
              Settings
           </Link>
        </nav>

        <div className="p-4 border-t border-green-800/50">
           <Link href="/" className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg text-green-300 hover:text-white hover:bg-green-800/50 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back to Website
           </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto bg-gray-50 relative">
        <header className="bg-white shadow-sm border-b sticky top-0 z-10 px-8 py-4 flex justify-between items-center">
            <h1 className="text-lg font-semibold text-gray-700">Admin Workspace</h1>
            <div className="flex items-center gap-4">
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold border border-green-200">
                    AD
                </div>
            </div>
        </header>
        <div className="p-8">
            {children}
        </div>
      </main>
    </div>
  );
}
