import React from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Settings, 
  TrendingUp, 
  Calendar, 
  MessageSquare, 
  Bell,
  ArrowRight,
  Star,
  CheckCircle2
} from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();

  const stats = [
    { label: 'Total Members', value: '1,248', icon: <Users size={20} />, color: 'bg-brand-red' },
    { label: 'Active Projects', value: '12', icon: <LayoutDashboard size={20} />, color: 'bg-brand-green' },
    { label: 'Reports Filed', value: '48', icon: <FileText size={20} />, color: 'bg-brand-text-primary' },
    { label: 'Upcoming Events', value: '4', icon: <Calendar size={20} />, color: 'bg-brand-accent' },
  ];

  const recentActivities = [
    { title: 'New member joined', time: '2 hours ago', user: 'Ahmed R.', type: 'Member' },
    { title: 'Project report submitted', time: '5 hours ago', user: 'Sara K.', type: 'Report' },
    { title: 'Event registration open', time: 'Yesterday', user: 'Youssef M.', type: 'Event' },
    { title: 'New document uploaded', time: '2 days ago', user: 'Admin', type: 'File' },
  ];

  return (
    <div className="pt-32 pb-24 px-4 md:px-6 bg-brand-bg-primary min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-green/10 text-brand-green rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              <Star size={14} className="fill-brand-green" />
              Member Dashboard
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-text-primary mb-4">
              Welcome Back, <span className="text-brand-red">{user?.email?.split('@')[0]}</span>
            </h1>
            <p className="text-brand-text-secondary text-lg max-w-2xl font-medium">
              Manage your projects, view member-only content, and track our collective impact.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-3 bg-white border border-black/5 rounded-2xl text-brand-text-secondary hover:text-brand-red transition-all shadow-sm">
              <Bell size={20} />
            </button>
            <button className="p-3 bg-white border border-black/5 rounded-2xl text-brand-text-secondary hover:text-brand-red transition-all shadow-sm">
              <Settings size={20} />
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-sm border border-black/5 group hover:shadow-md transition-all"
            >
              <div className={`${stat.color} w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-black/5 transition-transform`}>
                {stat.icon}
              </div>
              <p className="text-sm font-bold text-brand-text-secondary uppercase tracking-widest mb-1">
                {stat.label}
              </p>
              <h3 className="text-3xl font-serif font-bold text-brand-text-primary">
                {stat.value}
              </h3>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Featured Widget */}
            <div className="bg-brand-green p-10 rounded-2xl text-white relative overflow-hidden group">
              <div className="relative z-10 max-w-md">
                <h2 className="text-3xl font-serif font-bold mb-4">
                  Sharpen Your Skills with Professional Workshops
                </h2>
                <p className="text-white/70 font-medium mb-8 leading-relaxed">
                  Join our upcoming leadership module this weekend. Limited spots available for active members.
                </p>
                <button className="bg-white text-brand-green px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-brand-red hover:text-white transition-all shadow-md">
                  Register Now <ArrowRight size={18} />
                </button>
              </div>
            </div>

            {/* Recent Projects */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-black/5">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-serif font-bold text-brand-text-primary">Active Programs</h3>
                <button className="text-brand-red font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  View All <ArrowRight size={16} />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: 'Young Leaders 2026', progress: 75, color: 'bg-brand-red', img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80' },
                  { title: 'Digital Advocacy', progress: 40, color: 'bg-brand-green', img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80' },
                ].map((project, idx) => (
                  <div key={idx} className="bg-brand-bg-secondary rounded-2xl p-6 group hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-black/5">
                    <div className="h-40 rounded-2xl overflow-hidden mb-6">
                      <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700" referrerPolicy="no-referrer" />
                    </div>
                    <h4 className="font-bold text-brand-text-primary mb-4">{project.title}</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-bold text-brand-text-secondary uppercase tracking-widest">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="h-2 bg-black/5 rounded-full overflow-hidden">
                        <div 
                          style={{ width: `${project.progress}%` }}
                          className={`h-full ${project.color}`}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="space-y-8">
            
            {/* Recent Activity */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-black/5">
              <h3 className="text-2xl font-serif font-bold text-brand-text-primary mb-8">Recent Activity</h3>
              <div className="space-y-8">
                {recentActivities.map((activity, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-brand-bg-secondary flex items-center justify-center text-brand-text-secondary group-hover:bg-brand-red group-hover:text-white transition-all">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-text-primary text-sm mb-1">{activity.title}</h4>
                      <p className="text-xs font-bold text-brand-text-secondary uppercase tracking-widest opacity-60">
                        {activity.user} • {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-10 py-4 bg-brand-bg-secondary text-brand-text-primary rounded-2xl font-bold text-sm hover:bg-brand-red hover:text-white transition-all">
                View All Activity
              </button>
            </div>

            {/* Quick Actions */}
            <div className="bg-brand-text-primary p-10 rounded-2xl text-white">
              <h3 className="text-2xl font-serif font-bold mb-8">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'New Post', icon: <MessageSquare size={18} /> },
                  { label: 'Reports', icon: <FileText size={18} /> },
                  { label: 'Members', icon: <Users size={18} /> },
                  { label: 'Support', icon: <Settings size={18} /> },
                ].map((action, idx) => (
                  <button key={idx} className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-all border border-white/5">
                    <div className="mb-3 text-brand-red">{action.icon}</div>
                    <span className="text-xs font-bold uppercase tracking-widest opacity-70">{action.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
