import React from 'react';
import { motion } from 'motion/react';
import { 
  Play, 
  Clock, 
  MoreHorizontal, 
  ChevronLeft, 
  ChevronRight, 
  Plus,
  ArrowUpRight,
  Monitor,
  Palette,
  Code,
  Users
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie
} from 'recharts';
import { useAppAuth } from '../services/AuthContext';

export const DashboardHome = () => {
  const { user, userData, profileData } = useAppAuth();
  const userName = userData?.name || user?.email?.split('@')[0] || 'User';
  const userAvatar = profileData?.avatar || `https://ui-avatars.com/api/?name=${userName}&background=C1121F&color=fff`;

  const chartData = [
    { name: '1-10 Aug', value: 25 },
    { name: '11-20 Aug', value: 45 },
    { name: '21-30 Aug', value: 65 },
  ];

  const pieData = [
    { name: 'Completed', value: 32 },
    { name: 'Remaining', value: 68 },
  ];

  const courses = [
    { 
      id: 1, 
      title: 'Beginner\'s Guide to Becoming a Professional Front-End Developer', 
      category: 'Front End', 
      instructor: 'Leonardo samsul', 
      instructorImg: 'https://i.pravatar.cc/150?u=leo',
      img: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80',
      color: 'text-brand-green bg-brand-green/10'
    },
    { 
      id: 2, 
      title: 'Optimizing User Experience with the Best UI/UX Design', 
      category: 'UI/UX Design', 
      instructor: 'Bayu Salto', 
      instructorImg: 'https://i.pravatar.cc/150?u=bayu',
      img: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80',
      color: 'text-brand-red bg-brand-red/10'
    },
    { 
      id: 3, 
      title: 'Reviving and Refreshing Company Image', 
      category: 'Branding', 
      instructor: 'Padhang Satrio', 
      instructorImg: 'https://i.pravatar.cc/150?u=padhang',
      img: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80',
      color: 'text-brand-accent bg-brand-accent/10'
    },
  ];

  const mentors = [
    { name: 'Padhang Satrio', role: 'Mentor', img: 'https://i.pravatar.cc/150?u=p1' },
    { name: 'Zakir Horizontal', role: 'Mentor', img: 'https://i.pravatar.cc/150?u=p2' },
    { name: 'Leonardo Samsul', role: 'Mentor', img: 'https://i.pravatar.cc/150?u=p3' },
  ];

  return (
    <div className="p-8 grid grid-cols-1 xl:grid-cols-3 gap-8">
      {/* Main Content Area */}
      <div className="xl:col-span-2 space-y-8">
        
        {/* Banner */}
        <div className="bg-brand-red p-10 rounded-[2.5rem] text-white relative overflow-hidden group">
          <div className="relative z-10 max-w-md">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 opacity-70">Online Course</p>
            <h2 className="text-4xl font-serif font-bold mb-6 leading-tight">
              Sharpen Your Skills with Professional Online Courses
            </h2>
            <button className="bg-white text-brand-red px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-brand-green hover:text-white transition-all shadow-xl group/btn">
              Join Now 
              <div className="w-6 h-6 bg-brand-red text-white rounded-full flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-brand-green transition-colors">
                <ChevronRight size={14} />
              </div>
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-20">
            <Monitor size={200} />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'UI/UX Design', watched: '2/8 watched', icon: <Palette size={20} />, color: 'text-brand-red bg-brand-red/10' },
            { label: 'Branding', watched: '3/8 watched', icon: <Monitor size={20} />, color: 'text-brand-accent bg-brand-accent/10' },
            { label: 'Front End', watched: '6/12 watched', icon: <Code size={20} />, color: 'text-brand-green bg-brand-green/10' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-[2rem] flex items-center gap-4 border border-brand-border hover:shadow-lg transition-all cursor-pointer group">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${stat.color} group-hover:scale-110 transition-transform`}>
                {stat.icon}
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-bold text-brand-text-secondary uppercase tracking-widest mb-1 opacity-60">{stat.watched}</p>
                <h4 className="font-bold text-brand-text-primary text-sm">{stat.label}</h4>
              </div>
              <button className="text-brand-text-secondary opacity-40 hover:opacity-100">
                <MoreHorizontal size={18} />
              </button>
            </div>
          ))}
        </div>

        {/* Continue Watching */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-brand-text-primary">Continue Watching</h3>
            <div className="flex gap-2">
              <button className="p-2 bg-white rounded-full border border-brand-border text-brand-text-secondary hover:text-brand-red transition-all">
                <ChevronLeft size={18} />
              </button>
              <button className="p-2 bg-brand-red rounded-full text-white shadow-lg shadow-brand-red/20">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-[2rem] overflow-hidden border border-brand-border group hover:shadow-xl transition-all">
                <div className="h-40 relative">
                  <img src={course.img} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-red shadow-xl">
                      <Play size={20} fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white cursor-pointer hover:bg-white/40 transition-all">
                    <Clock size={14} />
                  </div>
                </div>
                <div className="p-6">
                  <div className={`inline-block px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest mb-4 ${course.color}`}>
                    {course.category}
                  </div>
                  <h4 className="font-bold text-brand-text-primary text-sm mb-6 line-clamp-2 min-h-[2.5rem]">
                    {course.title}
                  </h4>
                  <div className="flex items-center justify-between pt-4 border-t border-brand-border">
                    <div className="flex items-center gap-2">
                      <img src={course.instructorImg} alt={course.instructor} className="w-6 h-6 rounded-full" />
                      <div className="text-[10px]">
                        <p className="font-bold text-brand-text-primary">{course.instructor}</p>
                        <p className="text-brand-text-secondary opacity-60">Mentor</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Your Lesson Table */}
        <div className="bg-white p-8 rounded-[2.5rem] border border-brand-border overflow-hidden">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-brand-text-primary">Your Lesson</h3>
            <button className="text-brand-red font-bold text-xs hover:underline">See all</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] font-bold text-brand-text-secondary uppercase tracking-[0.2em] border-b border-brand-border">
                  <th className="pb-4 px-4">Mentor</th>
                  <th className="pb-4 px-4">Type</th>
                  <th className="pb-4 px-4">Desc</th>
                  <th className="pb-4 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border">
                {[1, 2].map((_, i) => (
                  <tr key={i} className="group hover:bg-brand-bg-secondary transition-all">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <img src="https://i.pravatar.cc/150?u=mentor" className="w-8 h-8 rounded-full" alt="" />
                        <div>
                          <p className="text-xs font-bold text-brand-text-primary">Padhang Satrio</p>
                          <p className="text-[10px] text-brand-text-secondary opacity-60">2/16/2024</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="px-3 py-1 bg-brand-red/10 text-brand-red rounded-lg text-[10px] font-bold uppercase tracking-widest">
                        UI/UX Design
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <p className="text-xs text-brand-text-secondary font-medium">Understand Of UI/UX Design</p>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button className="p-2 bg-brand-bg-secondary rounded-full text-brand-text-secondary hover:bg-brand-red hover:text-white transition-all group-hover:scale-110">
                        <ArrowUpRight size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="space-y-8">
        
        {/* Statistic Chart */}
        <div className="bg-white p-8 rounded-[2.5rem] border border-brand-border">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-brand-text-primary">Statistic</h3>
            <button className="text-brand-text-secondary opacity-40 hover:opacity-100">
              <MoreHorizontal size={18} />
            </button>
          </div>

          <div className="relative h-48 flex items-center justify-center mb-8">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  startAngle={90}
                  endAngle={450}
                >
                  <Cell fill="#C1121F" />
                  <Cell fill="#F5F5F5" />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img src={userAvatar} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/2 bg-brand-red text-white text-[10px] font-bold px-2 py-1 rounded-full border-2 border-white shadow-lg">
                32%
              </div>
            </div>
          </div>

          <div className="text-center mb-8">
            <h4 className="font-bold text-brand-text-primary mb-2 capitalize">Good Morning {userName} 🔥</h4>
            <p className="text-xs text-brand-text-secondary opacity-60">Continue your learning to achieve your target!</p>
          </div>

          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <Bar dataKey="value" radius={[4, 4, 4, 4]}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 2 ? '#C1121F' : '#F5F5F5'} />
                  ))}
                </Bar>
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 8, fill: '#666666', opacity: 0.6 }} 
                  dy={10}
                />
                <Tooltip cursor={{ fill: 'transparent' }} content={() => null} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Your Mentor */}
        <div className="bg-white p-8 rounded-[2.5rem] border border-brand-border">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-brand-text-primary">Your mentor</h3>
            <button className="p-2 bg-brand-bg-secondary rounded-full text-brand-text-secondary hover:bg-brand-red hover:text-white transition-all">
              <Plus size={18} />
            </button>
          </div>

          <div className="space-y-6 mb-8">
            {mentors.map((mentor, idx) => (
              <div key={idx} className="flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img src={mentor.img} alt={mentor.name} className="w-10 h-10 rounded-xl object-cover" />
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-brand-green rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-text-primary group-hover:text-brand-red transition-colors">{mentor.name}</p>
                    <p className="text-[10px] text-brand-text-secondary opacity-60">{mentor.role}</p>
                  </div>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-brand-bg-secondary rounded-xl text-[10px] font-bold text-brand-text-secondary hover:bg-brand-red hover:text-white transition-all">
                  <Users size={12} />
                  Follow
                </button>
              </div>
            ))}
          </div>

          <button className="w-full py-4 bg-brand-bg-secondary text-brand-text-primary rounded-2xl font-bold text-sm hover:bg-brand-red hover:text-white transition-all">
            See All
          </button>
        </div>
      </div>
    </div>
  );
};
