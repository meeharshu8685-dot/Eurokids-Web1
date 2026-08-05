import React, { useState, useEffect } from 'react';
import { enquiryService, Enquiry } from '../../services/enquiryService';
import { Search, Download, FileText, Trash2, Mail, Phone } from 'lucide-react';
import toast from 'react-hot-toast';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { saveAs } from 'file-saver';

export default function EnquiryManager() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filterClass, setFilterClass] = useState('All');

  const fetchEnquiries = async () => {
    setLoading(true);
    try {
      const data = await enquiryService.getAll();
      setEnquiries(data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
    } catch (error) {
      toast.error('Failed to load enquiries');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this enquiry?')) return;
    try {
      await enquiryService.delete(id);
      toast.success('Enquiry deleted');
      setEnquiries(enquiries.filter(e => e.id !== id));
    } catch (error) {
      toast.error('Failed to delete enquiry');
    }
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text('EuroKids Admission Enquiries', 14, 22);
    doc.setFontSize(11);
    doc.text(`Exported on: ${new Date().toLocaleDateString()}`, 14, 30);

    const tableData = filteredEnquiries.map(e => [
      e.parentName,
      e.studentName,
      e.className,
      e.phone,
      new Date(e.date).toLocaleDateString()
    ]);

    autoTable(doc, {
      startY: 36,
      head: [['Parent Name', 'Student Name', 'Class', 'Phone', 'Date']],
      body: tableData,
      theme: 'grid',
      styles: { fontSize: 9 },
      headStyles: { fillColor: [14, 165, 233] }
    });

    doc.save('eurokids-enquiries.pdf');
    toast.success('PDF Exported');
  };

  const exportCSV = () => {
    const headers = ['Parent Name', 'Student Name', 'Class', 'Phone', 'Email', 'Message', 'Date'];
    const rows = filteredEnquiries.map(e => [
      `"${e.parentName}"`,
      `"${e.studentName}"`,
      `"${e.className}"`,
      `"${e.phone}"`,
      `"${e.email}"`,
      `"${e.message.replace(/"/g, '""')}"`,
      `"${new Date(e.date).toLocaleDateString()}"`
    ]);
    
    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'eurokids-enquiries.csv');
    toast.success('CSV Exported');
  };

  const classes = ['All', 'Playgroup', 'Nursery', 'Junior KG', 'Senior KG'];

  const filteredEnquiries = enquiries.filter(e => 
    (filterClass === 'All' || e.className.includes(filterClass)) &&
    (e.parentName.toLowerCase().includes(search.toLowerCase()) ||
     e.studentName.toLowerCase().includes(search.toLowerCase()) ||
     e.phone.includes(search))
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <h1 className="text-2xl font-bold text-slate-900">Admission Enquiries</h1>
        
        <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
          <select 
            value={filterClass}
            onChange={(e) => setFilterClass(e.target.value)}
            className="px-4 py-2 border border-slate-200 rounded-lg bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {classes.map(c => (
              <option key={c} value={c}>{c === 'All' ? 'All Classes' : c}</option>
            ))}
          </select>

          <div className="relative flex-1 lg:flex-none">
            <input
              type="text"
              placeholder="Search enquiries..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-64 bg-white"
            />
            <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
          
          <div className="flex items-center gap-2">
            <button onClick={exportPDF} className="p-2 border border-slate-200 bg-white text-slate-600 rounded-lg hover:bg-slate-50 transition-colors" title="Export PDF">
              <FileText className="w-5 h-5" />
            </button>
            <button onClick={exportCSV} className="p-2 border border-slate-200 bg-white text-slate-600 rounded-lg hover:bg-slate-50 transition-colors" title="Export CSV">
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-6 py-4 font-semibold text-slate-700">Family Info</th>
                <th className="px-6 py-4 font-semibold text-slate-700">Class</th>
                <th className="px-6 py-4 font-semibold text-slate-700">Contact</th>
                <th className="px-6 py-4 font-semibold text-slate-700">Message</th>
                <th className="px-6 py-4 font-semibold text-slate-700">Date</th>
                <th className="px-6 py-4 font-semibold text-slate-700 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                [1, 2, 3].map(i => (
                  <tr key={i} className="border-b border-slate-100">
                    <td className="px-6 py-4"><div className="h-10 bg-slate-100 rounded animate-pulse" /></td>
                    <td className="px-6 py-4"><div className="h-6 w-16 bg-slate-100 rounded animate-pulse" /></td>
                    <td className="px-6 py-4"><div className="h-10 bg-slate-100 rounded animate-pulse" /></td>
                    <td className="px-6 py-4"><div className="h-6 w-32 bg-slate-100 rounded animate-pulse" /></td>
                    <td className="px-6 py-4"><div className="h-6 w-24 bg-slate-100 rounded animate-pulse" /></td>
                    <td className="px-6 py-4"><div className="h-8 w-8 bg-slate-100 rounded animate-pulse ml-auto" /></td>
                  </tr>
                ))
              ) : filteredEnquiries.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                    No admission enquiries found.
                  </td>
                </tr>
              ) : (
                filteredEnquiries.map((item) => (
                  <tr key={item.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 align-top">
                      <p className="font-bold text-slate-900">Parent: {item.parentName}</p>
                      <p className="text-sm text-slate-600 mt-1">Child: <span className="font-medium text-slate-800">{item.studentName}</span></p>
                    </td>
                    <td className="px-6 py-4 align-top">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {item.className}
                      </span>
                    </td>
                    <td className="px-6 py-4 align-top space-y-1">
                      <a href={`tel:${item.phone}`} className="flex items-center gap-1.5 text-sm text-blue-600 hover:underline">
                        <Phone className="w-3.5 h-3.5" /> {item.phone}
                      </a>
                      <a href={`mailto:${item.email}`} className="flex items-center gap-1.5 text-sm text-blue-600 hover:underline">
                        <Mail className="w-3.5 h-3.5" /> {item.email}
                      </a>
                    </td>
                    <td className="px-6 py-4 align-top max-w-xs">
                      <p className="text-sm text-slate-700 line-clamp-2" title={item.message}>{item.message}</p>
                    </td>
                    <td className="px-6 py-4 align-top text-slate-500 text-sm whitespace-nowrap">
                      {new Date(item.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 align-top text-right">
                      <button 
                        onClick={() => handleDelete(item.id)}
                        className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
