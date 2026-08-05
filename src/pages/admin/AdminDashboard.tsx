import React, { useEffect, useState } from 'react';
import { Users, MessageSquare, ImageIcon, TrendingUp } from 'lucide-react';
import { feedbackService } from '../../services/feedbackService';
import { enquiryService } from '../../services/enquiryService';
import { galleryService } from '../../services/galleryService';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    enquiries: 0,
    feedbacks: 0,
    images: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [enquiries, feedbacks, images] = await Promise.all([
          enquiryService.getAll(),
          feedbackService.getAll(),
          galleryService.getImages(),
        ]);
        
        setStats({
          enquiries: enquiries.length,
          feedbacks: feedbacks.length,
          images: images.length,
        });
      } catch (error) {
        console.error('Failed to load stats', error);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  const cards = [
    { name: 'Total Enquiries', value: stats.enquiries, icon: Users, color: 'text-blue-600', bg: 'bg-blue-100' },
    { name: 'Total Feedbacks', value: stats.feedbacks, icon: MessageSquare, color: 'text-emerald-600', bg: 'bg-emerald-100' },
    { name: 'Gallery Images', value: stats.images, icon: ImageIcon, color: 'text-purple-600', bg: 'bg-purple-100' },
  ];

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="h-8 w-48 bg-slate-200 rounded animate-pulse" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-32 bg-white rounded-2xl shadow-sm border border-slate-100 p-6 animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div key={card.name} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className={`w-14 h-14 rounded-xl ${card.bg} flex items-center justify-center flex-shrink-0`}>
              <card.icon className={`w-7 h-7 ${card.color}`} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">{card.name}</p>
              <p className="text-3xl font-bold text-slate-900">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 mt-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-amber-600" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Welcome to Admin Portal</h2>
            <p className="text-slate-500">Manage your preschool website content securely.</p>
          </div>
        </div>
        <p className="text-slate-600 leading-relaxed max-w-3xl">
          Use the sidebar navigation to manage photo galleries, view parent feedback, check new admission enquiries, and update general school settings. All changes are currently saved to local storage and structured to be easily migrated to Firebase in the future.
        </p>
      </div>
    </div>
  );
}
