import React from 'react';
import { ArrowUpRight, MessageSquare, Phone } from 'lucide-react';

const Partners = () => {
  const partners = [
    { name: 'Ministry of Culture, Youth and Sports', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Emblem_of_Morocco.svg/1200px-Emblem_of_Morocco.svg.png' },
    { name: 'Regional Directorate for Youth and Sports', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Emblem_of_Morocco.svg/1200px-Emblem_of_Morocco.svg.png' },
    { name: 'Regional Vocational Training Center', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Emblem_of_Morocco.svg/1200px-Emblem_of_Morocco.svg.png' },
    { name: 'Club Tamkeen', logo: 'https://picsum.photos/seed/tamkeen/300' },
    { name: 'Dar Al-Shabab Al-Zalaqa', logo: 'https://picsum.photos/seed/zalaqa/300' },
    { name: 'Association Al-Mustaqbal', logo: 'https://picsum.photos/seed/mustaqbal/300' },
    { name: 'Beni Mellal-Khenifra Regional Council', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Emblem_of_Morocco.svg/1200px-Emblem_of_Morocco.svg.png' },
    { name: 'High Commission for Former Resistance Members', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Emblem_of_Morocco.svg/1200px-Emblem_of_Morocco.svg.png' },
  ];

  return (
    <div className="bg-white text-black font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
          <div className="max-w-2xl">
            <nav className="flex items-center gap-2 text-sm mb-6 opacity-60">
              <span>Home</span>
              <span>/</span>
              <span className="font-medium text-black">Partners</span>
            </nav>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              Building the Future <br />
              Through Strategic Alliances
            </h1>
          </div>
          <div className="md:max-w-xs pt-12">
            <p className="text-lg opacity-70 leading-relaxed">
              We collaborate with national institutions and civil society networks to empower youth and drive sustainable regional development.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[500px]">
          <div className="md:col-span-7 relative group overflow-hidden rounded-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
              alt="Team collaboration" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-6 left-6 flex gap-3">
              <button className="bg-brand-red text-white px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 shadow-sm hover:bg-brand-green transition-colors">
                Become a Partner
                <ArrowUpRight size={16} />
              </button>
              <button className="bg-white text-brand-text-primary px-6 py-3 rounded-full font-bold text-sm shadow-sm hover:bg-brand-bg-secondary transition-colors">
                View Network
              </button>
            </div>
          </div>
          <div className="md:col-span-5 relative group overflow-hidden rounded-2xl">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
              alt="Modern office" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-brand-text-primary/5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6 text-brand-text-primary">Our Institutional Impact</h2>
            <p className="text-lg text-brand-text-secondary leading-relaxed mb-8">
              We are more than just an association — we are a trusted partner in civil development. By bridging the gap between youth and institutions, we foster a culture of participatory democracy and social innovation.
            </p>
            <button className="text-brand-text-primary font-bold border-b-2 border-brand-red pb-1 hover:border-brand-green transition-colors">
              Our Mission
            </button>
          </div>
          <div className="bg-brand-bg-secondary p-10 rounded-2xl flex flex-col justify-center border border-brand-text-primary/5">
            <span className="text-5xl font-bold mb-2 text-brand-text-primary">10+</span>
            <span className="text-sm text-brand-text-secondary uppercase tracking-widest">Strategic Partners</span>
          </div>
          <div className="bg-brand-text-primary text-white p-10 rounded-2xl flex flex-col justify-center">
            <span className="text-5xl font-bold mb-2">10+ years</span>
            <span className="text-sm opacity-60 uppercase tracking-widest">Civic Impact</span>
          </div>
        </div>
      </section>

      {/* Partners Grid Section */}
      <section className="py-32 bg-brand-bg-secondary/50 border-y border-brand-text-primary/5">
        <div className="max-w-7xl mx-auto px-6 text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-text-primary">Our Institutional Partners</h2>
          <p className="text-brand-text-secondary max-w-xl mx-auto">
            Collaborating with government bodies and civil society organizations to deliver impactful programs for the youth of Khouribga.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 border-l border-t border-brand-text-primary/10">
          {partners.map((partner, idx) => (
            <div 
              key={idx} 
              className="h-40 flex items-center justify-center p-8 border-r border-b border-brand-text-primary/10 hover:bg-white transition-colors group"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-h-12 w-auto grayscale opacity-40 group-hover:opacity-100 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
              Your Next <br />
              Success Starts Here
            </h2>
            <p className="text-lg opacity-70 mb-12">
              Have questions or ready to take the next step? Our team is here to guide you through every stage of your journey.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 p-4 bg-brand-bg-secondary rounded-xl border border-brand-text-primary/5">
                <div className="w-12 h-12 bg-brand-red text-white rounded-full flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-brand-text-secondary uppercase font-bold tracking-wider">Call Us</p>
                  <p className="font-bold text-brand-text-primary">+212 610-424958</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-brand-bg-secondary rounded-xl border border-brand-text-primary/5">
                <div className="w-12 h-12 bg-brand-green text-white rounded-full flex items-center justify-center">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <p className="text-xs text-brand-text-secondary uppercase font-bold tracking-wider">Email Us</p>
                  <p className="font-bold text-brand-text-primary">ama.khouribgha@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative bg-white p-10 rounded-2xl shadow-sm border border-brand-text-primary/5">
              <h3 className="text-2xl font-bold mb-8 text-center text-brand-text-primary">Inquiry Form</h3>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-brand-text-secondary">Full Name</label>
                  <input type="text" className="w-full bg-brand-bg-secondary border-none rounded-xl p-4 focus:ring-2 ring-brand-red text-brand-text-primary" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-brand-text-secondary">Email Address</label>
                  <input type="email" className="w-full bg-brand-bg-secondary border-none rounded-xl p-4 focus:ring-2 ring-brand-red text-brand-text-primary" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-brand-text-secondary">Message</label>
                  <textarea className="w-full bg-brand-bg-secondary border-none rounded-xl p-4 focus:ring-2 ring-brand-red h-32 text-brand-text-primary" placeholder="How can we help?"></textarea>
                </div>
                <button className="w-full bg-brand-text-primary text-white py-5 rounded-full font-bold hover:bg-brand-green transition-colors shadow-sm">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="bg-brand-red py-20 px-6 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-12 text-white">
            Build the Future <span className="mx-4 text-white/50">→</span> Together
          </h2>
          <button className="bg-white text-brand-red px-12 py-5 rounded-full font-bold text-lg transition-transform shadow-sm hover:bg-brand-green hover:text-white">
            Join Our Network
          </button>
        </div>
      </section>
    </div>
  );
};

export default Partners;
