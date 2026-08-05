import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '../../contexts/AdminAuthContext';
import AdminLogin from './AdminLogin';
import AdminLayout from './AdminLayout';
import AdminDashboard from './AdminDashboard';
import GalleryManager from './GalleryManager';
import FeedbackManager from './FeedbackManager';
import EnquiryManager from './EnquiryManager';
import SettingsManager from './SettingsManager';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <AdminLogin />;
  }

  return <>{children}</>;
};

export default function AdminPortal() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }>
          <Route index element={<AdminDashboard />} />
          <Route path="gallery" element={<GalleryManager />} />
          <Route path="feedback" element={<FeedbackManager />} />
          <Route path="enquiries" element={<EnquiryManager />} />
          <Route path="settings" element={<SettingsManager />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}
