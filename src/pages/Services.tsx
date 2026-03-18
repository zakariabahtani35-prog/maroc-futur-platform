import React, { useState } from 'react';
import { 
  ArrowRight, 
  Play, 
  Users, 
  MessageSquare, 
  Globe, 
  TrendingUp, 
  Clock, 
  MousePointer2, 
  Zap,
  CheckCircle2,
  Heart
} from 'lucide-react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('Workshops');

  const tabs = ['Workshops', 'Training', 'Events', 'Advocacy', 'Environment', 'Culture'];

  const stats = [
    { value: '150+', label: 'Active Youth Members', icon: <Users className="text-brand-red" /> },
    { value: '12+', label: 'Annual Community Projects', icon: <Clock className="text-brand-green" /> },
    { value: '2500+', label: 'Beneficiaries Reached', icon: <Globe className="text-brand-accent" /> },
    { value: '85%', label: 'Youth Employment Rate', icon: <TrendingUp className="text-brand-red" /> },
  ];

  return (
    <div className="bg-white pt-32 pb-20 font-sans">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 max-w-4xl mx-auto leading-[1.1]">
          Empowering the Next Generation of Leaders
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          We provide the tools, training, and community support needed for young people to thrive and lead in a changing world.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-brand-red text-white px-10 py-4 rounded-full font-bold hover:bg-brand-green transition-all shadow-lg">
            Join a Program
          </button>
          <button className="bg-white text-black border border-gray-200 px-10 py-4 rounded-full font-bold hover:bg-gray-50 transition-colors">
            View Schedule
          </button>
        </div>
      </section>

      {/* Main Image Section */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" 
            alt="Youth Workshop" 
            className="w-full h-auto aspect-video object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Action Areas Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <h2 className="text-4xl font-bold text-center mb-16">Our Core Action Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100">
            <h3 className="text-2xl font-bold mb-4">Youth Leadership</h3>
            <p className="text-gray-600 leading-relaxed">
              Developing the next generation of civic leaders through intensive training, mentorship, and real-world project management.
            </p>
          </div>
          <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100">
            <h3 className="text-2xl font-bold mb-4">Economic Inclusion</h3>
            <p className="text-gray-600 leading-relaxed">
              Bridging the gap between education and employment through digital skills training and entrepreneurship support.
            </p>
          </div>
          <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100">
            <h3 className="text-2xl font-bold mb-4">Territorial Justice</h3>
            <p className="text-gray-600 leading-relaxed">
              Advocating for equitable development and access to resources across the Khouribga region.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="bg-gray-900 rounded-2xl p-12 md:p-24 text-center text-white">
          <h2 className="text-4xl font-bold mb-16">Measurable Change in Our Community</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <p className="text-5xl font-bold mb-2 text-brand-red">{stat.value}</p>
                <p className="text-sm opacity-60 font-medium uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Tabs Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <h2 className="text-4xl font-bold text-center mb-12">Diverse Programs for Diverse Needs</h2>
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
                activeTab === tab 
                  ? 'bg-brand-red text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="bg-gray-50 rounded-2xl p-12 md:p-20 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80" 
              alt="Program Preview" 
              className="rounded-2xl shadow-md w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-3xl font-bold mb-6">Hands-on learning and community engagement at the core.</h3>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Our programs are designed to be interactive, inclusive, and impactful. Whether it's a weekend workshop or a year-long leadership track, we focus on practical skills and social responsibility.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-brand-red text-white px-8 py-4 rounded-full font-bold hover:bg-brand-green transition-colors">View Programs</button>
              <button className="bg-white text-black border border-gray-200 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-colors">Get Involved</button>
            </div>
          </div>
        </div>
      </section>
      {/* Simple CTA Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32 text-center">
        <div className="bg-brand-red text-white rounded-2xl p-12 md:p-20">
          <h2 className="text-4xl font-bold mb-6">Help Us Shape the Future of Our Youth</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Your contribution directly supports our workshops, training programs, and community initiatives.
          </p>
          <button 
            onClick={() => window.location.href = '/donate'}
            className="bg-white text-brand-red px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-green hover:text-white transition-all shadow-lg"
          >
            Donate Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
