import React from 'react';
import { Bell, HelpCircle, Plus } from 'lucide-react';

export const DashboardNavbar = () => {
  return (
    <header className="h-20 bg-[#F8F9FA] border-b border-black/5 flex items-center justify-between px-8 sticky top-0 z-40">
      <div className="flex-1"></div>

      <div className="flex items-center gap-4">
        <button className="w-10 h-10 flex items-center justify-center text-brand-text-secondary hover:text-brand-text-primary hover:bg-black/5 rounded-full transition-all relative">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-brand-red rounded-full border-2 border-[#F8F9FA]"></span>
        </button>
        <button className="w-10 h-10 flex items-center justify-center text-brand-text-secondary hover:text-brand-text-primary hover:bg-black/5 rounded-full transition-all">
          <HelpCircle size={20} />
        </button>
        <button className="w-10 h-10 flex items-center justify-center bg-brand-green text-white shadow-lg shadow-brand-green/20 hover:bg-brand-green/90 rounded-lg transition-all ml-2">
          <Plus size={20} />
        </button>
      </div>
    </header>
  );
};
