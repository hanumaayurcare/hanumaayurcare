
import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome, Admin</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/admin/leads" className="block p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
           <h3 className="text-xl font-bold text-green-800 mb-2">Leads & Enquiries</h3>
           <p className="text-gray-600">View and manage contact form submissions.</p>
        </Link>
        
        <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 opacity-70">
           <h3 className="text-xl font-bold text-gray-400 mb-2">Settings</h3>
           <p className="text-gray-500">System configuration (Coming Soon).</p>
        </div>
      </div>
    </div>
  );
}
