
import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-green-950 text-white flex-shrink-0">
        <div className="p-6 border-b border-green-800">
          <h2 className="text-xl font-bold">Admin Console</h2>
        </div>
        <nav className="p-4 space-y-2">
           <Link href="/admin/leads" className="block px-4 py-2 hover:bg-green-900 rounded transition-colors">
              Leads & Enquiries
           </Link>
           <Link href="/admin/settings" className="block px-4 py-2 hover:bg-green-900 rounded transition-colors opacity-50 cursor-not-allowed">
              Settings (Coming Soon)
           </Link>
           <Link href="/" className="block px-4 py-2 mt-8 text-green-400 hover:text-white transition-colors">
              ← Back to Website
           </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
