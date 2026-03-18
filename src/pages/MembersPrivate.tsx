import React from 'react';
import { Users, Mail, Phone, MapPin, Search, Filter, Plus, MoreVertical } from 'lucide-react';

const MembersPrivate = () => {
  const members = [
    { name: "Ahmed R.", role: "Admin", email: "ahmed.r@ama.ma", phone: "+212 600-000000", status: "Active", img: "https://picsum.photos/seed/m1/100" },
    { name: "Sara K.", role: "Coordinator", email: "sara.k@ama.ma", phone: "+212 600-111111", status: "Active", img: "https://picsum.photos/seed/m2/100" },
    { name: "Youssef M.", role: "Member", email: "youssef.m@ama.ma", phone: "+212 600-222222", status: "Away", img: "https://picsum.photos/seed/m3/100" },
    { name: "Fatima Z.", role: "Volunteer", email: "fatima.z@ama.ma", phone: "+212 600-333333", status: "Active", img: "https://picsum.photos/seed/m4/100" },
    { name: "Omar H.", role: "Member", email: "omar.h@ama.ma", phone: "+212 600-444444", status: "Offline", img: "https://picsum.photos/seed/m5/100" },
  ];

  return (
    <div className="pt-32 pb-24 px-4 md:px-6 bg-brand-bg-primary min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-text-primary mb-4">
              Member Directory
            </h1>
            <p className="text-brand-text-secondary text-lg max-w-2xl font-medium">
              Manage and connect with our community of dedicated leaders and volunteers.
            </p>
          </div>
          <button className="bg-brand-red text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-brand-green transition-all shadow-md">
            <Plus size={20} />
            Add New Member
          </button>
        </div>

        {/* Filters & Search */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-black/5 mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-text-secondary group-focus-within:text-brand-green transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Search members by name, email or role..." 
              className="w-full bg-brand-bg-secondary border border-transparent focus:border-brand-green/30 focus:bg-white rounded-2xl py-4 pl-14 pr-6 outline-none transition-all font-medium"
            />
          </div>
          <button className="px-8 py-4 bg-brand-bg-secondary text-brand-text-primary rounded-2xl font-bold flex items-center gap-2 hover:bg-brand-red hover:text-white transition-all">
            <Filter size={18} />
            Filters
          </button>
        </div>

        {/* Members Table/Grid */}
        <div className="bg-white rounded-2xl shadow-sm border border-black/5 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-brand-bg-secondary/50 border-b border-black/5">
                  <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-brand-text-secondary">Member</th>
                  <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-brand-text-secondary">Role</th>
                  <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-brand-text-secondary">Contact</th>
                  <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-brand-text-secondary">Status</th>
                  <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-brand-text-secondary text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {members.map((member, idx) => (
                  <tr 
                    key={idx}
                    className="hover:bg-brand-bg-secondary/30 transition-colors group"
                  >
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl overflow-hidden bg-brand-bg-secondary border border-black/5">
                          <img src={member.img} alt={member.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <span className="font-bold text-brand-text-primary">{member.name}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className="px-4 py-1.5 bg-brand-green/10 text-brand-green rounded-full text-xs font-bold uppercase tracking-widest">
                        {member.role}
                      </span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm font-medium text-brand-text-secondary">
                          <Mail size={14} className="text-brand-red" />
                          {member.email}
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium text-brand-text-secondary">
                          <Phone size={14} className="text-brand-red" />
                          {member.phone}
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${
                          member.status === 'Active' ? 'bg-brand-green' : 
                          member.status === 'Away' ? 'bg-brand-red' : 'bg-brand-text-secondary'
                        }`}></div>
                        <span className="text-sm font-bold text-brand-text-primary">{member.status}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <button className="p-2 text-brand-text-secondary hover:text-brand-red transition-colors">
                        <MoreVertical size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="p-8 bg-brand-bg-secondary/50 border-t border-black/5 flex items-center justify-between">
            <p className="text-sm font-bold text-brand-text-secondary">Showing 5 of 1,248 members</p>
            <div className="flex gap-2">
              <button className="px-6 py-2 bg-white border border-black/5 rounded-xl text-sm font-bold text-brand-text-secondary hover:bg-brand-red hover:text-white transition-all">Previous</button>
              <button className="px-6 py-2 bg-brand-red text-white rounded-xl text-sm font-bold hover:bg-brand-green transition-all">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersPrivate;
