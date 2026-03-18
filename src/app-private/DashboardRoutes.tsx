import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DashboardLayout } from './components/DashboardLayout';
import { DashboardHome } from './dashboard/DashboardHome';
import { 
  Task, Calendar, Leads, Opportunities, Contacts, Companies, Analytics, 
  Forms, Emails, SocialMediaAds, HelpAndSupport 
} from './dashboard/Placeholders';
import { Settings } from './dashboard/Settings';
import { ProtectedRoute } from './components/ProtectedRoute';

export const DashboardRoutes = () => {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/task" element={<Task />} />
          <Route path="/calendar" element={<Calendar />} />
          
          {/* Sales */}
          <Route path="/leads" element={<Leads />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/analytics" element={<Analytics />} />

          {/* Marketing */}
          <Route path="/forms" element={<Forms />} />
          <Route path="/emails" element={<Emails />} />
          <Route path="/social-media-ads" element={<SocialMediaAds />} />

          {/* Footer Items */}
          <Route path="/help" element={<HelpAndSupport />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </DashboardLayout>
    </ProtectedRoute>
  );
};
