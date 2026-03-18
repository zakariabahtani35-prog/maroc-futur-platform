import React, { useState } from 'react';
import { useAppAuth } from '../services/AuthContext';
import { Camera, Calendar as CalendarIcon, ChevronDown } from 'lucide-react';

const tabs = [
  'Apps Settings',
  'Account',
  'Notifications',
  'Language & Region',
  'Workspace Reference',
  'Member',
  'Billing'
];

export const Settings = () => {
  const { userData, profileData, user } = useAppAuth();
  const userName = userData?.name || user?.email?.split('@')[0] || 'John Marpaung';
  const userEmail = user?.email || 'john@gmail.com';
  const userAvatar = profileData?.avatar || `https://ui-avatars.com/api/?name=${userName}&background=C1121F&color=fff`;

  const [activeTab, setActiveTab] = useState('Account');

  return (
    <div className="flex 1 h-full min-h-[calc(100vh-80px)] bg-[#F8F9FA]">
      {/* Settings Inner Sidebar */}
      <div className="w-64 border-r border-black/5 bg-white p-6">
        <h2 className="text-xl font-bold text-brand-text-primary flex items-center gap-2 mb-8">
          Settings <span className="text-black/30 tracking-widest leading-none translate-y-[-2px]">...</span>
        </h2>
        <nav className="space-y-1">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full text-left px-5 py-3 rounded-xl text-sm font-medium transition-all ${
                activeTab === tab 
                  ? 'bg-brand-bg-secondary text-brand-text-primary shadow-sm' 
                  : 'text-brand-text-secondary hover:bg-black/5'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Settings Content Area */}
      <div className="flex-1 p-8 md:p-12 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          {/* Header Row */}
          <div className="flex items-start justify-between mb-10 pb-6 border-b border-black/5">
            <div>
              <h1 className="text-2xl font-bold text-brand-text-primary mb-2">Personal Info</h1>
              <p className="text-sm text-brand-text-secondary">Update your personal details</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-6 py-2.5 rounded-full text-sm font-bold text-brand-text-secondary border border-black/10 hover:bg-black/5 transition-all">
                Cancel
              </button>
              <button className="px-6 py-2.5 rounded-full text-sm font-bold bg-brand-green text-white shadow-lg shadow-brand-green/20 hover:bg-brand-green/90 transition-all">
                Save
              </button>
            </div>
          </div>

          {/* Form */}
          <div className="space-y-8">
            
            {/* Photo */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-6 pb-8 border-b border-black/5">
              <label className="text-sm font-medium text-brand-text-secondary">Your photo</label>
              <div className="flex items-center gap-6">
                <img src={userAvatar} alt="Profile" className="w-16 h-16 rounded-full object-cover border border-black/5 shadow-sm" />
                <button className="px-5 py-2.5 rounded-full text-sm font-bold border border-black/10 text-brand-text-primary hover:bg-black/5 transition-colors">
                  Upload Image
                </button>
                <span className="text-xs text-brand-text-secondary">JPG or PNG, 1MB max</span>
              </div>
            </div>

            {/* Full Name */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-6 pb-8 border-b border-black/5">
              <label className="text-sm font-medium text-brand-text-secondary">Full name</label>
              <input 
                type="text" 
                defaultValue={userName}
                className="w-full bg-white border border-brand-border focus:border-brand-green/40 focus:ring-4 focus:ring-brand-green/10 rounded-2xl px-5 py-3.5 text-brand-text-primary font-medium outline-none transition-all shadow-sm"
              />
            </div>

            {/* Email */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-6 pb-8 border-b border-black/5">
              <label className="text-sm font-medium text-brand-text-secondary">Email</label>
              <input 
                type="email" 
                defaultValue={userEmail}
                className="w-full bg-white border border-brand-border focus:border-brand-green/40 focus:ring-4 focus:ring-brand-green/10 rounded-2xl px-5 py-3.5 text-brand-text-primary font-medium outline-none transition-all shadow-sm"
              />
            </div>

            {/* Phone Number */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-6 pb-8 border-b border-black/5">
              <label className="text-sm font-medium text-brand-text-secondary">Phone number</label>
              <div className="flex items-center gap-3">
                <div className="relative w-24">
                  <select className="w-full appearance-none bg-white border border-brand-border rounded-2xl pl-5 pr-10 py-3.5 text-brand-text-primary font-medium outline-none shadow-sm focus:border-brand-green/40 cursor-pointer">
                    <option>+1</option>
                    <option>+212</option>
                    <option>+33</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-text-secondary pointer-events-none" />
                </div>
                <input 
                  type="text" 
                  defaultValue="(684) 555-0102"
                  className="flex-1 bg-white border border-brand-border focus:border-brand-green/40 focus:ring-4 focus:ring-brand-green/10 rounded-2xl px-5 py-3.5 text-brand-text-primary font-medium outline-none transition-all shadow-sm"
                />
              </div>
            </div>

            {/* Date of Birth */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-6 pb-8 border-b border-black/5">
              <label className="text-sm font-medium text-brand-text-secondary">Date of birth</label>
              <div className="relative">
                <input 
                  type="text" 
                  defaultValue="1999/04/12"
                  className="w-full bg-white border border-brand-border focus:border-brand-green/40 focus:ring-4 focus:ring-brand-green/10 rounded-2xl pl-5 pr-12 py-3.5 text-brand-text-primary font-medium outline-none transition-all shadow-sm"
                />
                <CalendarIcon size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-brand-text-secondary cursor-pointer hover:text-brand-text-primary transition-colors" />
              </div>
            </div>

            {/* Country */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-6">
              <label className="text-sm font-medium text-brand-text-secondary">Country</label>
              <div className="relative">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-lg leading-none pointer-events-none">🇺🇸</div>
                <select className="w-full appearance-none bg-white border border-brand-border rounded-2xl pl-12 pr-12 py-3.5 text-brand-text-primary font-medium outline-none shadow-sm focus:border-brand-green/40 focus:ring-4 focus:ring-brand-green/10 transition-all cursor-pointer">
                  <option>United States</option>
                  <option>Morocco</option>
                  <option>France</option>
                  <option>Canada</option>
                </select>
                <ChevronDown size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-brand-text-secondary pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
