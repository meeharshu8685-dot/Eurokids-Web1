import React, { useState, useEffect } from 'react';
import { feedbackService, Feedback } from '../../services/feedbackService';
import { Search, Download, Printer, Copy, Trash2, FileText, ChevronDown } from 'lucide-react';
import toast from 'react-hot-toast';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { saveAs } from 'file-saver';

export default function FeedbackManager() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const fetchFeedbacks = async () => {
    setLoading(true);
    try {
      const data = await feedbackService.getAll();
      setFeedbacks(data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
    } catch (error) {
      toast.error('Failed to load feedback');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this feedback?')) return;
    try {
      await feedbackService.delete(id);
      toast.success('Feedback deleted');
      setFeedbacks(feedbacks.filter(f => f.id !== id));
    } catch (error) {
      toast.error('Failed to delete feedback');
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard');
  };

  const copyAll = () => {
    const text = filteredFeedbacks.map(f => 
      `Name: ${f.parentName}\nPhone: ${f.phone}\nEmail: ${f.email}\nRating: ${f.rating}\nFeedback: ${f.feedback}\nDate: ${new Date(f.date).toLocaleDateString()}`
    ).join('\n\n---\n\n');
    copyToClipboard(text);
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text('EuroKids Parent Feedback', 14, 22);
    doc.setFontSize(11);
    doc.text(`Exported on: ${new Date().toLocaleDateString()}`, 14, 30);

    const tableData = filteredFeedbacks.map(f => [
      f.parentName,
      f.phone,
      f.rating.toString(),
      f.feedback,
      new Date(f.date).toLocaleDateString()
    ]);

    autoTable(doc, {
      startY: 36,
      head: [['Parent Name', 'Phone', 'Rating', 'Feedback', 'Date']],
      body: tableData,
      theme: 'grid',
      styles: { fontSize: 9 },
      headStyles: { fillColor: [14, 165, 233] }
    });

    doc.save('eurokids-feedback.pdf');
    toast.success('PDF Exported');
  };

  const exportCSV = () => {
    const headers = ['Parent Name', 'Phone', 'Email', 'Rating', 'Feedback', 'Date'];
    const rows = filteredFeedbacks.map(f => [
      `"${f.parentName}"`,
      `"${f.phone}"`,
      `"${f.email}"`,
      f.rating,
      `"${f.feedback.replace(/"/g, '""')}"`,
      `"${new Date(f.date).toLocaleDateString()}"`
    ]);
    
    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'eurokids-feedback.csv');
    toast.success('CSV Exported');
  };

  const handlePrint = () => {
    window.print();
  };

  const filteredFeedbacks = feedbacks.filter(f => 
    f.parentName.toLowerCase().includes(search.toLowerCase()) ||
    f.feedback.toLowerCase().includes(search.toLowerCase()) ||
    f.phone.includes(search)
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <h1 className="text-2xl font-bold text-slate-900">Parent Feedback</h1>
        
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search feedback..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-64 bg-white"
            />
            <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
          
          <div className="flex items-center gap-2">
            <button onClick={exportPDF} className="p-2 border border-slate-200 bg-white text-slate-600 rounded-lg hover:bg-slate-50 transition-colors tooltip-trigger" title="Export PDF">
              <FileText className="w-5 h-5" />
            </button>
            <button onClick={exportCSV} className="p-2 border border-slate-200 bg-white text-slate-600 rounded-lg hover:bg-slate-50 transition-colors" title="Export CSV">
              <Download className="w-5 h-5" />
            </button>
            <button onClick={handlePrint} className="p-2 border border-slate-200 bg-white text-slate-600 rounded-lg hover:bg-slate-50 transition-colors" title="Print">
              <Printer className="w-5 h-5" />
            </button>
            <button onClick={copyAll} className="p-2 border border-slate-200 bg-white text-slate-600 rounded-lg hover:bg-slate-50 transition-colors" title="Copy All">
              <Copy className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-6 py-4 font-semibold text-slate-700">Parent Details</th>
                <th className="px-6 py-4 font-semibold text-slate-700">Rating</th>
                <th className="px-6 py-4 font-semibold text-slate-700">Feedback</th>
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
                    <td className="px-6 py-4"><div className="h-6 w-24 bg-slate-100 rounded animate-pulse" /></td>
                    <td className="px-6 py-4"><div className="h-8 w-16 bg-slate-100 rounded animate-pulse ml-auto" /></td>
                  </tr>
                ))
              ) : filteredFeedbacks.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                    No feedback entries found.
                  </td>
                </tr>
              ) : (
                filteredFeedbacks.map((item) => (
                  <tr key={item.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 align-top">
                      <p className="font-bold text-slate-900">{item.parentName}</p>
                      <p className="text-sm text-slate-500">{item.phone}</p>
                      <p className="text-sm text-slate-500">{item.email}</p>
                    </td>
                    <td className="px-6 py-4 align-top">
                      <div className="flex items-center text-amber-500">
                        <span className="font-bold mr-1">{item.rating}</span>/5
                      </div>
                    </td>
                    <td className="px-6 py-4 align-top max-w-md">
                      <p className="text-slate-700 line-clamp-3" title={item.feedback}>{item.feedback}</p>
                    </td>
                    <td className="px-6 py-4 align-top text-slate-500 whitespace-nowrap">
                      {new Date(item.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 align-top text-right">
                      <div className="flex justify-end gap-2">
                        <button 
                          onClick={() => copyToClipboard(`Feedback from ${item.parentName}: "${item.feedback}"`)}
                          className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                          title="Copy text"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDelete(item.id)}
                          className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
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
