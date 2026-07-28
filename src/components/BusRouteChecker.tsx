import React, { useState } from 'react';
import { Bus, MapPin, Clock, Phone, Search, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { BUS_ROUTES_GWALIOR } from '../data/schoolData';

export const BusRouteChecker: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRoutes = BUS_ROUTES_GWALIOR.filter((route) => {
    const term = searchTerm.toLowerCase();
    return (
      route.areaName.toLowerCase().includes(term) ||
      route.stops.some((stop) => stop.toLowerCase().includes(term))
    );
  });

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-6">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 pb-4">
        <div>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            GPS Tracked AC Mini-Buses
          </span>
          <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 mt-2">
            Gwalior School Bus Route & Pickup Finder
          </h3>
          <p className="text-slate-600 text-xs mt-1">
            Search your neighborhood in Gwalior (e.g. City Centre, Thatipur, Lashkar, Morar, CP Colony, DD Nagar) to check pickup stops.
          </p>
        </div>

        <div className="relative w-full sm:w-64 shrink-0">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Search locality or stop..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-300 bg-slate-50 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
          />
        </div>
      </div>

      {/* Routes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredRoutes.length > 0 ? (
          filteredRoutes.map((route, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3 hover:border-slate-300 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-lg border border-amber-200">
                  {route.routeNumber}
                </span>
                <span className="text-[10px] text-slate-500 font-medium flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Female Attendant
                </span>
              </div>

              <h4 className="text-sm font-bold text-slate-900">{route.areaName}</h4>

              <div className="space-y-1 text-xs text-slate-600">
                <p className="flex items-center gap-1.5 font-medium text-slate-700">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  <span>Morning Pickup: {route.pickupTime}</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  <span>Afternoon Drop: {route.dropTime}</span>
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200/80">
                <span className="text-[11px] font-bold text-slate-700 block mb-1.5">Designated Bus Stops:</span>
                <div className="flex flex-wrap gap-1">
                  {route.stops.map((stop, sIdx) => (
                    <span 
                      key={sIdx}
                      className="text-[10px] bg-white text-slate-700 px-2 py-1 rounded-md border border-slate-200 flex items-center gap-1"
                    >
                      <MapPin className="w-2.5 h-2.5 text-emerald-600" /> {stop}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500">
                <span>Transport Helpline:</span>
                <a href={`tel:${route.supervisorPhone}`} className="font-bold text-slate-900 hover:underline flex items-center gap-1">
                  <Phone className="w-3 h-3 text-amber-500" /> {route.supervisorPhone}
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center py-8 text-slate-500 text-xs">
            No specific stop found for "{searchTerm}". Please call our transport desk at <strong className="text-slate-800">+91 75512 88900</strong> for customized doorstep pickup inquiries.
          </div>
        )}
      </div>

      <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-200/80 flex items-center gap-3 text-xs text-emerald-900">
        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
        <p>
          <strong>Parent Live App Tracking:</strong> Parents receive real-time bus location notifications, driver photo credentials, speed alerts, and automated SMS 5 minutes prior to bus arrival.
        </p>
      </div>

    </div>
  );
};
