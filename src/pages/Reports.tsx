import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, 
  Download, 
  ArrowUpRight, 
  Calendar,
  BarChart3,
  ShieldCheck,
  Users,
  Search,
  Filter,
  Eye,
  TrendingUp,
  FileCheck,
  X
} from 'lucide-react';

const Reports = () => {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const reports = [
    {
      id: 1,
      title: 'Annual Activity Report 2024',
      date: 'January 2025',
      size: '2.4 MB',
      type: 'PDF',
      category: 'Annual Report',
      featured: true,
      description: 'A comprehensive overview of our achievements, challenges, and growth throughout the year 2024.'
    },
    {
      id: 2,
      title: 'Financial Statement 2024',
      date: 'February 2025',
      size: '1.8 MB',
      type: 'PDF',
      category: 'Financial',
      description: 'Detailed financial audit and transparency report for the fiscal year 2024.'
    },
    {
      id: 3,
      title: 'Strategic Plan 2024-2027',
      date: 'March 2024',
      size: '3.1 MB',
      type: 'PDF',
      category: 'Strategy',
      description: 'Our roadmap for the next three years, focusing on youth empowerment and regional development.'
    },
    {
      id: 4,
      title: 'Impact Assessment: Young Leaders',
      date: 'December 2024',
      size: '4.2 MB',
      type: 'PDF',
      category: 'Impact',
      description: 'A deep dive into the outcomes of our flagship Young Leaders Program and its community impact.'
    },
    {
      id: 5,
      title: 'Regional Development Study',
      date: 'November 2024',
      size: '5.6 MB',
      type: 'PDF',
      category: 'Strategy',
      description: 'An analytical study on the socio-economic potential of the Khouribga region.'
    },
    {
      id: 6,
      title: 'Youth Engagement Survey 2024',
      date: 'October 2024',
      size: '1.2 MB',
      type: 'PDF',
      category: 'Impact',
      description: 'Insights from over 1,000 local youth on their needs and aspirations.'
    }
  ];

  const categories = ['All', 'Annual Report', 'Financial', 'Strategy', 'Impact'];

  const filteredReports = reports.filter(report => {
    const matchesFilter = filter === 'All' || report.category === filter;
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = 
      report.title.toLowerCase().includes(searchLower) || 
      report.description.toLowerCase().includes(searchLower);
    return matchesFilter && matchesSearch;
  });

  const featuredReport = reports.find(r => r.featured);

  const stats = [
    { label: 'Transparency Score', value: '100%', icon: <ShieldCheck size={24} />, color: 'bg-brand-green/10 text-brand-green' },
    { label: 'Projects Audited', value: '12', icon: <BarChart3 size={24} />, color: 'bg-brand-red/10 text-brand-red' },
    { label: 'Growth Rate', value: '+24%', icon: <TrendingUp size={24} />, color: 'bg-brand-accent/10 text-brand-accent' },
  ];

  return (
    <div className="bg-brand-bg-primary text-brand-text-primary font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-brand-red font-bold text-xs uppercase tracking-[0.2em] mb-6"
            >
              <FileCheck size={16} />
              Accountability Matters
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-serif leading-[0.9] mb-8"
            >
              Transparency <br />
              <span className="text-brand-red italic">Reports</span>
            </motion.h1>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-md text-brand-text-secondary"
          >
            <p className="text-lg leading-relaxed">
              We maintain the highest standards of transparency. Explore our detailed publications to understand our impact and financial stewardship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-brand-text-primary/5 bg-brand-bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-6 p-6 bg-brand-bg-primary rounded-3xl shadow-sm"
              >
                <div className={`w-14 h-14 ${stat.color} rounded-2xl flex items-center justify-center`}>
                  {stat.icon}
                </div>
                <div>
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-50">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Report */}
      {featuredReport && (
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="bg-brand-text-primary text-brand-bg-primary rounded-[3.5rem] p-8 md:p-16 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <span className="inline-block px-4 py-1.5 bg-brand-red text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-8">
                  Featured Publication
                </span>
                <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
                  {featuredReport.title}
                </h2>
                <p className="text-brand-bg-primary/70 text-lg mb-10 leading-relaxed">
                  {featuredReport.description}
                </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="bg-brand-green text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-brand-red transition-all shadow-lg">
                      <Download size={20} />
                      Download PDF ({featuredReport.size})
                    </button>
                    <button className="border border-brand-bg-primary/20 text-brand-bg-primary px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-white/10 transition-all">
                      <Eye size={20} />
                      View Online
                    </button>
                  </div>
              </div>
              <div className="hidden lg:flex justify-center">
                <div className="relative">
                  <div className="w-72 h-96 bg-brand-bg-secondary rounded-2xl shadow-2xl overflow-hidden transform rotate-6 hover:rotate-0 transition-transform duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-red/20 to-transparent"></div>
                    <div className="p-8">
                      <FileText size={48} className="text-brand-red mb-6" />
                      <div className="w-12 h-1 bg-brand-red mb-4"></div>
                      <h4 className="text-brand-text-primary text-xl font-bold mb-2">{featuredReport.title}</h4>
                      <p className="text-brand-text-secondary text-xs">{featuredReport.date}</p>
                    </div>
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-brand-red rounded-full blur-3xl opacity-30"></div>
                </div>
              </div>
            </div>
            {/* Background patterns */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-red/10 to-transparent pointer-events-none"></div>
          </div>
        </section>
      )}

      {/* Filter & Search */}
      <section className="pt-12 pb-8 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-brand-bg-secondary p-4 rounded-[2.5rem] mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                  filter === cat 
                    ? 'bg-brand-text-primary text-brand-bg-primary shadow-lg' 
                    : 'bg-brand-bg-primary text-brand-text-secondary hover:bg-brand-text-primary/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-text-secondary" size={18} />
            <input 
              type="text" 
              placeholder="Search reports..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-brand-bg-primary border-none rounded-full py-3 pl-12 pr-12 text-sm focus:ring-2 ring-brand-red transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-text-secondary hover:text-brand-red transition-colors"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        <div className="flex justify-between items-center px-4 mb-8">
          <p className="text-sm font-medium text-brand-text-secondary">
            Showing <span className="text-brand-text-primary font-bold">{filteredReports.length}</span> reports
            {filter !== 'All' && <span> in <span className="text-brand-red">{filter}</span></span>}
          </p>
          {(filter !== 'All' || searchQuery) && (
            <button 
              onClick={() => { setFilter('All'); setSearchQuery(''); }}
              className="text-xs font-bold text-brand-red uppercase tracking-widest hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>
      </section>

      {/* Reports Grid */}
      <section className="pb-32 px-6 max-w-7xl mx-auto min-h-[400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredReports.map((report, idx) => (
              <motion.div 
                layout
                key={report.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-brand-bg-primary p-8 rounded-[2.5rem] border border-brand-text-primary/5 hover:border-brand-red/20 hover:shadow-2xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-14 h-14 ${report.category === 'Financial' ? 'bg-brand-green/10 text-brand-green' : 'bg-brand-red/10 text-brand-red'} rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform`}>
                      <FileText size={28} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">
                      {report.type} • {report.size}
                    </span>
                  </div>
                  <span className="inline-block px-3 py-1 bg-brand-bg-secondary text-brand-text-secondary text-[10px] font-bold uppercase rounded-full mb-4">
                    {report.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-4 leading-tight group-hover:text-brand-red transition-colors">
                    {report.title}
                  </h3>
                  <p className="text-brand-text-secondary text-sm mb-8 line-clamp-2">
                    {report.description}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-brand-text-primary/5">
                  <div className="flex items-center gap-2 text-xs font-bold opacity-40">
                    <Calendar size={14} />
                    {report.date}
                  </div>
                  <button className="w-10 h-10 bg-brand-bg-secondary text-brand-text-primary rounded-full flex items-center justify-center hover:bg-brand-green hover:text-white transition-all">
                    <Download size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {filteredReports.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-brand-bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <Search size={32} className="text-brand-text-secondary opacity-20" />
            </div>
            <h3 className="text-xl font-bold mb-2">No reports found</h3>
            <p className="text-brand-text-secondary">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </section>

      {/* Newsletter / Contact Section */}
      <section className="pb-32 px-6 max-w-7xl mx-auto">
        <div className="bg-brand-red rounded-[3.5rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
              Stay Informed on <br />
              <span className="italic">Our Progress</span>
            </h2>
            <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto">
              Subscribe to receive our latest publications and impact reports directly in your inbox. We respect your privacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-white/10 border border-white/20 rounded-full px-8 py-4 outline-none focus:ring-2 ring-white/50 transition-all placeholder:text-white/40"
              />
              <button className="bg-white text-brand-red px-10 py-4 rounded-full font-bold hover:bg-brand-bg-secondary transition-all shadow-2xl">
                Subscribe
              </button>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-black/20 rounded-full blur-3xl"></div>
        </div>
      </section>
    </div>
  );
};

export default Reports;
