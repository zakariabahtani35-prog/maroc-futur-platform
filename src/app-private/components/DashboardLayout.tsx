import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { DashboardNavbar } from '../components/DashboardNavbar';
import { AIChatWidget } from './AIChatWidget';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-[#FAFAFA] overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardNavbar />
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
      <AIChatWidget />
    </div>
  );
};
