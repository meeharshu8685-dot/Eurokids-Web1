import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Public App
import MainApp from './MainApp';

// Admin Portal
import AdminPortal from './pages/admin/AdminPortal';

export default function App() {
  return (
    <Router>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/admin/*" element={<AdminPortal />} />
        <Route path="*" element={<MainApp />} />
      </Routes>
    </Router>
  );
}
