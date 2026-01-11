"use client";

import { useEffect, useState } from 'react';
import { supabase } from '@/src/lib/supabaseClient';
import { Loader2 } from 'lucide-react';

interface Lead {
  id: string;
  created_at: string;
  first_name: string;
  last_name: string;
  email: string;
  enquiry_type: string;
  message: string;
  status: string;
}

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setLeads(data);
    }
    setLoading(false);
  };

  const updateStatus = async (id: string, newStatus: string) => {
    const { error } = await supabase
      .from('leads')
      .update({ status: newStatus })
      .eq('id', id);
    
    if (!error) {
      fetchLeads(); // Refresh list
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Leads & Enquiries</h1>
        <button onClick={fetchLeads} className="bg-white border p-2 rounded hover:bg-gray-100">
          Refresh
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center p-12">
           <Loader2 className="w-8 h-8 animate-spin text-green-700" />
        </div>
      ) : leads.length === 0 ? (
        <div className="bg-white p-8 rounded-lg shadow text-center text-gray-500">
           No leads found.
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
              <tr>
                <th className="p-4">Date</th>
                <th className="p-4">Name</th>
                <th className="p-4">Type</th>
                <th className="p-4">Status</th>
                <th className="p-4">Message</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-gray-50">
                  <td className="p-4 text-sm text-gray-500">
                    {new Date(lead.created_at).toLocaleDateString()}
                  </td>
                  <td className="p-4 font-medium text-gray-900">
                    {lead.first_name} {lead.last_name}
                    <div className="text-xs text-gray-500">{lead.email}</div>
                  </td>
                  <td className="p-4">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {lead.enquiry_type}
                    </span>
                  </td>
                  <td className="p-4">
                     <span className={`text-xs px-2 py-1 rounded-full ${
                       lead.status === 'new' ? 'bg-green-100 text-green-800' : 
                       lead.status === 'closed' ? 'bg-gray-100 text-gray-800' :
                       'bg-yellow-100 text-yellow-800'
                     }`}>
                       {lead.status.toUpperCase()}
                     </span>
                  </td>
                  <td className="p-4 text-sm text-gray-600 max-w-xs truncate">
                    {lead.message}
                  </td>
                  <td className="p-4">
                     <select 
                       value={lead.status}
                       onChange={(e) => updateStatus(lead.id, e.target.value)}
                       className="border rounded px-2 py-1 text-sm outline-none"
                     >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="closed">Closed</option>
                     </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      </div>
    </div>
  );
}
