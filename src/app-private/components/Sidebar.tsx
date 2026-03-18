import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  CheckSquare, 
  Calendar, 
  Trophy, 
  Target, 
  Users, 
  Building, 
  BarChart2, 
  FileText, 
  Mail, 
  Heart, 
  HelpCircle, 
  Settings as SettingsIcon,
  Search,
  Plus,
  ChevronRight
} from 'lucide-react';
import { cn } from '../styles/theme';
import { useAppAuth } from '../services/AuthContext';

const mainItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: CheckSquare, label: 'Task', path: '/dashboard/task', badge: '1' },
  { icon: Calendar, label: 'Calendar', path: '/dashboard/calendar' },
];

const salesItems = [
  { icon: Trophy, label: 'Leads', path: '/dashboard/leads' },
  { icon: Target, label: 'Opportunities', path: '/dashboard/opportunities' },
  { icon: Users, label: 'Contacts', path: '/dashboard/contacts' },
  { icon: Building, label: 'Companies', path: '/dashboard/companies' },
  { icon: BarChart2, label: 'Analytics', path: '/dashboard/analytics' },
];

const marketingItems = [
  { icon: FileText, label: 'Forms', path: '/dashboard/forms' },
  { icon: Mail, label: 'Emails', path: '/dashboard/emails' },
  { icon: Heart, label: 'Social Media Ads', path: '/dashboard/social-media-ads' },
];

const footerItems = [
  { icon: HelpCircle, label: 'Help and Support', path: '/dashboard/help' },
  { icon: SettingsIcon, label: 'Settings', path: '/dashboard/settings' },
];

export const Sidebar = () => {
  const { userData, profileData, user } = useAppAuth();
  const userName = userData?.name || user?.email?.split('@')[0] || 'User';
  const userAvatar = profileData?.avatar || `https://ui-avatars.com/api/?name=${userName}&background=C1121F&color=fff`;

  const NavGroup = ({ title, items, rightAction }: any) => (
    <div className="mb-6">
      <div className="flex items-center justify-between px-6 mb-2">
        <p className="text-xs font-semibold text-white/50">{title}</p>
        {rightAction && rightAction}
      </div>
      <nav className="space-y-1 px-4">
        {items.map((item: any) => (
          <NavLink
            key={item.label}
            to={item.path}
            end={item.path === '/dashboard'}
            className={({ isActive }) => cn(
              "flex items-center justify-between px-4 py-2.5 rounded-xl transition-all duration-200 text-sm font-medium",
              isActive 
                ? "bg-white/10 text-white" 
                : "text-white/60 hover:bg-white/5 hover:text-white"
            )}
          >
            <div className="flex items-center gap-3">
              <item.icon size={18} className="opacity-80" />
              <span>{item.label}</span>
            </div>
            {item.badge && (
              <span className="w-5 h-5 flex items-center justify-center rounded-full bg-brand-red text-white text-[10px] font-bold">
                {item.badge}
              </span>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );

  return (
    <aside className="w-72 h-screen bg-brand-text-primary text-white flex flex-col sticky top-0 border-r border-white/5 shadow-2xl z-50">
      
      {/* Brand Header */}
      <div className="flex items-center gap-3 px-8 py-8 mb-4">
        <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center relative overflow-hidden">
          <img src="https://wa9tna.wordpress.com/wp-content/uploads/2026/02/d8aad8b5d985d98ad985-d8a8d8afd988d986-d8b9d986d988d8a7d986-8.png" className="w-6 h-6 object-cover rounded-full" alt="Local Logo" referrerPolicy="no-referrer" />
        </div>
        <span className="text-xl font-bold tracking-wide">Nexus</span>
        <ChevronRight size={16} className="ml-auto text-white/40" />
      </div>

      {/* Navigation Areas */}
      <div className="flex-1 overflow-y-auto custom-scrollbar-dark pb-8">
        <nav className="space-y-1 px-4 mb-8">
          {mainItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              end={item.path === '/dashboard'}
              className={({ isActive }) => cn(
                "flex items-center justify-between px-4 py-2.5 rounded-xl transition-all duration-200 text-sm font-medium",
                isActive 
                  ? "bg-white/10 text-white" 
                  : "text-white/60 hover:bg-white/5 hover:text-white"
              )}
            >
              <div className="flex items-center gap-3">
                <item.icon size={18} className="opacity-80" />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-brand-red text-white text-[10px] font-bold">
                  {item.badge}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <NavGroup 
          title="Sales" 
          items={salesItems} 
          rightAction={
            <div className="flex gap-2 text-white/40">
              <Search size={14} className="hover:text-white cursor-pointer transition-colors" />
              <Plus size={14} className="hover:text-white cursor-pointer transition-colors" />
            </div>
          } 
        />
        <NavGroup title="Marketing" items={marketingItems} />
      </div>

      {/* Footer Settings & Profile */}
      <div className="mt-auto px-4 py-4 space-y-1 border-t border-white/5 bg-brand-text-primary relative z-10">
        {footerItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) => cn(
              "flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 text-sm font-medium",
              isActive 
                ? "bg-white/10 text-white" 
                : "text-white/60 hover:bg-white/5 hover:text-white"
            )}
          >
            <item.icon size={18} className="opacity-80" />
            <span>{item.label}</span>
          </NavLink>
        ))}

        <div className="mt-4 pt-4 border-t border-white/5 px-2 flex items-center gap-3 group cursor-pointer hover:bg-white/5 p-2 rounded-xl transition-colors">
          <img src={userAvatar} alt={userName} className="w-10 h-10 rounded-full object-cover border-2 border-transparent group-hover:border-white/20 transition-all" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-white truncate">{userName}</p>
            <p className="text-xs text-white/50 truncate">{user?.email}</p>
          </div>
          <ChevronRight size={16} className="text-white/30 group-hover:text-white/80 transition-colors" />
        </div>
      </div>
    </aside>
  );
};
