import React, { useState } from 'react';
import { useAuth } from '../../contexts/AdminAuthContext';
import { Lock, LogIn, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      toast.success('Login successful!');
    } else {
      setError(true);
      toast.error('Invalid password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 mix-blend-multiply" />
      <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-50 mix-blend-multiply" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-md bg-white p-10 rounded-[32px] shadow-2xl border border-slate-100"
      >
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center border border-blue-100">
            <Lock className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-center text-slate-900 mb-2">Admin Portal</h1>
        <p className="text-center text-slate-500 mb-8 font-medium">Enter your password to access the dashboard</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                className={`w-full pl-4 pr-10 py-4 bg-slate-50 border ${error ? 'border-red-300 focus:ring-red-500' : 'border-slate-200 focus:ring-blue-500'} rounded-2xl text-slate-900 focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
                placeholder="Admin Password"
              />
              {error && (
                <AlertCircle className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500 w-5 h-5" />
              )}
            </div>
            {error && <p className="text-red-500 text-sm mt-2 font-medium">Incorrect password. Please try again.</p>}
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all shadow-lg shadow-blue-200 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
          >
            <LogIn className="w-5 h-5" />
            Access Dashboard
          </button>
        </form>
      </motion.div>
    </div>
  );
}
