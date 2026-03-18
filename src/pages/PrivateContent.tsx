import React from 'react';
import { FileText, Download, Lock, Eye, Star, ArrowRight, BookOpen, ShieldCheck } from 'lucide-react';

const PrivateContent = () => {
  const resources = [
    { title: "Young Leaders Training Module 1", type: "PDF Guide", size: "4.2 MB", date: "Mar 12, 2026", category: "Education" },
    { title: "Regional Advocacy Strategy 2026", type: "Strategy Doc", size: "1.8 MB", date: "Feb 28, 2026", category: "Advocacy" },
    { title: "Community Impact Report Q1", type: "Report", size: "12.5 MB", date: "Mar 05, 2026", category: "Impact" },
    { title: "Digital Journalism Workshop Material", type: "Zip Archive", size: "45.2 MB", date: "Jan 15, 2026", category: "Media" },
    { title: "Member Code of Conduct", type: "PDF", size: "0.5 MB", date: "Jan 01, 2026", category: "Policy" },
    { title: "Grant Application Template", type: "Word Doc", size: "1.2 MB", date: "Feb 10, 2026", category: "Resources" },
  ];

  return (
    <div className="pt-32 pb-24 px-4 md:px-6 bg-brand-bg-primary min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-brand-red/10 text-brand-red rounded-full text-sm font-bold uppercase tracking-widest mb-8">
            <ShieldCheck size={18} />
            Exclusive Member Resources
          </div>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-brand-text-primary mb-8 tracking-tighter">
            Private <span className="text-brand-green italic">Content</span>
          </h1>
          <p className="text-brand-text-secondary text-xl max-w-3xl mx-auto font-medium leading-relaxed">
            Access our internal training materials, strategic documents, and community reports. 
            These resources are strictly for AMA members.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {['All Resources', 'Education', 'Advocacy', 'Impact', 'Media', 'Policy'].map((cat, i) => (
            <button 
              key={i}
              className={`px-8 py-3 rounded-full font-bold text-sm transition-all ${
                i === 0 ? 'bg-brand-red text-white shadow-md' : 'bg-white text-brand-text-secondary hover:bg-brand-bg-secondary border border-black/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((res, idx) => (
            <div
              key={idx}
              className="bg-white p-10 rounded-2xl shadow-sm border border-black/5 group hover:shadow-md transition-all flex flex-col h-full"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-bg-secondary flex items-center justify-center text-brand-red mb-8 group-hover:bg-brand-red group-hover:text-white transition-all duration-500">
                <FileText size={32} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-brand-green/10 text-brand-green rounded-full text-[10px] font-bold uppercase tracking-widest">
                    {res.category}
                  </span>
                  <span className="text-[10px] font-bold text-brand-text-secondary uppercase tracking-widest opacity-40">
                    {res.date}
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-brand-text-primary mb-4 leading-tight group-hover:text-brand-red transition-colors">
                  {res.title}
                </h3>
                <p className="text-sm font-medium text-brand-text-secondary mb-8">
                  Format: <span className="text-brand-text-primary">{res.type}</span> • Size: <span className="text-brand-text-primary">{res.size}</span>
                </p>
              </div>
              <div className="flex items-center gap-4 pt-8 border-t border-black/5">
                <button className="flex-1 bg-brand-bg-secondary text-brand-text-primary py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-brand-green hover:text-white transition-all">
                  <Eye size={18} />
                  Preview
                </button>
                <button className="flex-1 bg-brand-red text-white py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-brand-green transition-all shadow-lg shadow-brand-red/10">
                  <Download size={18} />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Security Notice */}
        <div className="mt-24 p-12 bg-brand-text-primary rounded-2xl text-white relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center text-brand-red flex-shrink-0">
              <Lock size={48} />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-serif font-bold mb-4">Confidentiality Notice</h2>
              <p className="text-white/60 font-medium leading-relaxed">
                All materials in this section are proprietary to Association Maroc de l'Avenir (AMA). 
                Unauthorized distribution, copying, or sharing of these resources with non-members is strictly prohibited 
                and may result in membership termination.
              </p>
            </div>
            <button className="bg-white text-brand-text-primary px-10 py-5 rounded-full font-bold hover:bg-brand-red hover:text-white transition-all shadow-lg">
              Report Misuse
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateContent;
