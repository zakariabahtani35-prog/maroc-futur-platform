import React from 'react';
import { 
  Users, 
  Heart, 
  Calendar, 
  ArrowUpRight, 
  CheckCircle2,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const GetInvolved = () => {
  const opportunities = [
    {
      title: 'Become a Member',
      desc: 'Join our core community and play an active role in the association\'s democratic governance and strategic planning.',
      icon: <Users className="text-brand-green" size={24} />,
      benefits: ['Voting rights in assemblies', 'Leadership opportunities', 'Exclusive member network']
    },
    {
      title: 'Volunteer Your Time',
      desc: 'Share your skills and passion by supporting our local initiatives, from educational workshops to environmental campaigns.',
      icon: <Heart className="text-brand-red" size={24} />,
      benefits: ['Hands-on community impact', 'Skill development', 'Certificate of recognition']
    },
    {
      title: 'Participate in Programs',
      desc: 'Enroll in our Young Leaders Program, digital literacy workshops, or cultural events designed for youth development.',
      icon: <Calendar className="text-brand-green" size={24} />,
      benefits: ['Professional training', 'Networking with experts', 'Personal growth']
    }
  ];

  return (
    <div className="bg-white text-black font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80" 
            alt="Community engagement" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
              Join the Movement <br />
              for a <span className="italic text-brand-red">Better Future</span>
            </h1>
            <p className="text-lg md:text-xl opacity-80 mb-10 leading-relaxed">
              Your energy, skills, and commitment can transform the lives of youth in Khouribga. 
              Explore how you can contribute to our mission.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-brand-red text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-transform shadow-md">
                Join as Member
                <ArrowUpRight size={20} />
              </button>
              <button className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-colors">
                Volunteer Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-xs font-bold uppercase tracking-widest opacity-40 mb-4">How to help</p>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight">Ways to Get Involved</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {opportunities.map((opp, idx) => (
            <div 
              key={idx}
              className="bg-brand-bg-secondary p-10 rounded-2xl border border-brand-text-primary/5 flex flex-col h-full"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8">
                {opp.icon}
              </div>
              <h3 className="text-2xl font-serif mb-4 text-brand-text-primary">{opp.title}</h3>
              <p className="text-brand-text-secondary text-sm leading-relaxed mb-8 flex-1">
                {opp.desc}
              </p>
              <ul className="space-y-3 mb-8">
                {opp.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-medium text-brand-text-secondary">
                    <CheckCircle2 size={16} className="text-brand-green" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-2xl border border-brand-text-primary/10 font-bold text-sm hover:bg-brand-red hover:text-white transition-all text-brand-text-primary">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Support Mission Section */}
      <section className="py-32 bg-brand-green text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
              Support Our Mission <br />
              <span className="text-brand-red italic">Beyond Participation</span>
            </h2>
            <p className="text-lg opacity-70 mb-12 leading-relaxed">
              Even if you can't join us in person, you can still support our work. 
              Help us reach more youth and create lasting impact in the region.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <ArrowUpRight size={20} className="text-brand-red" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Spread the Word</h4>
                  <p className="text-sm opacity-60">Follow us on social media and share our projects with your network.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <ArrowUpRight size={20} className="text-brand-red" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Make a Donation</h4>
                  <p className="text-sm opacity-60">Your financial support helps fund our workshops and community initiatives.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/10 p-10 rounded-2xl border border-white/20">
            <h3 className="text-2xl font-serif mb-8 text-center">Contact Our Team</h3>
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-brand-red text-white rounded-full flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs opacity-50 uppercase font-bold tracking-wider">Email Us</p>
                  <p className="font-bold">ama.khouribga@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-brand-red text-white rounded-full flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs opacity-50 uppercase font-bold tracking-wider">Call Us</p>
                  <p className="font-bold">0657262102 / 0610424958</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-brand-red text-white rounded-full flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs opacity-50 uppercase font-bold tracking-wider">Visit Us</p>
                  <p className="font-bold">Khouribga, Morocco</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}


      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight text-brand-text-primary">
          Ready to make an impact?
        </h2>
        <p className="text-lg text-brand-text-secondary mb-12">
          Whether you have an hour a week or can commit to a long-term project, 
          there's a place for you at AMA. Let's build the future together.
        </p>
        <button className="bg-brand-red text-white px-12 py-5 rounded-full font-bold text-lg transition-transform shadow-lg hover:bg-brand-green">
          Get Started Today
        </button>
      </section>
    </div>
  );
};

export default GetInvolved;
