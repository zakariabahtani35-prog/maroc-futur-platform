import React, { useState } from 'react';
import { MembershipModal } from '../components/MembershipModal';
import { motion } from 'motion/react';
import { 
  ArrowUpRight, 
  ChevronRight, 
  Users, 
  Target, 
  Lightbulb, 
  ShieldCheck,
  Search,
  ArrowRight
} from 'lucide-react';

const About = () => {
  const [isMembershipModalOpen, setIsMembershipModalOpen] = useState(false);
  const stats = [
    { label: 'Active Members', value: '150' },
    { label: 'Youth Participation', value: '80%' },
    { label: 'Years of Impact', value: '10+' },
    { label: 'Regional Reach', value: 'B-M-K' },
  ];

  const services = [
    { title: 'Youth Training', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80', icon: <Users size={20} /> },
    { title: 'Civic Advocacy', image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e778?auto=format&fit=crop&q=80', icon: <ShieldCheck size={20} /> },
    { title: 'Cultural Events', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80', icon: <Target size={20} /> },
    { title: 'Digital Literacy', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80', icon: <Lightbulb size={20} /> },
  ];

  const philosophies = [
    { title: 'Internal Democracy', desc: 'Ensuring transparent decision-making and equal participation for all members.' },
    { title: 'Good Governance', desc: 'Adopting best practices in management and accountability for sustainable growth.' },
    { title: 'Dialogue', desc: 'Fostering open communication and understanding between youth and decision-makers.' },
    { title: 'Participatory Democracy', desc: 'Engaging youth directly in the development and implementation of community projects.' },
  ];

  return (
    <div className="bg-brand-bg-primary text-brand-text-primary font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://wa9tna.wordpress.com/wp-content/uploads/2026/03/605635944_1315152090655533_6474707120962843706_n.jpg" 
            alt="Consulting team" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
              Empowering Youth <br />
              Since 2014
            </h1>
            <button onClick={() => setIsMembershipModalOpen(true)} className="bg-brand-red text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-brand-green transition-all shadow-xl">
              Join Our Community
              <ArrowUpRight size={20} />
            </button>
          </motion.div>
        </div>

        {/* Floating Search/Filter Bar */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full max-w-5xl px-6 z-20">
          <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-black/5 flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-brand-bg-secondary rounded-xl">
              <Search size={18} className="opacity-40" />
              <input type="text" placeholder="Khouribga, Morocco" className="bg-transparent border-none focus:ring-0 w-full text-sm" />
            </div>
            <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-brand-bg-secondary rounded-xl">
              <input type="text" placeholder="Beni Mellal-Khenifra" className="bg-transparent border-none focus:ring-0 w-full text-sm" />
              <ChevronRight size={18} className="opacity-40 rotate-90" />
            </div>
            <button className="bg-brand-red text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-brand-green transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Intro Cards Section */}
      <section className="pt-40 pb-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-brand-bg-secondary p-10 rounded-3xl border border-brand-text-primary/5 flex flex-col justify-between group">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-4">Who we are</p>
              <h2 className="text-3xl font-serif mb-6 leading-tight">Association Maroc de l'Avenir (AMA)</h2>
              <p className="text-sm text-brand-text-secondary leading-relaxed">
                Founded on September 20, 2014, in Khouribga, AMA is a voluntary and independent civil organization dedicated to the development of youth through education, culture, and civic engagement.
              </p>
            </div>
            <div className="relative h-48 rounded-2xl overflow-hidden mt-8">
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80" 
                alt="Office" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="bg-brand-red p-10 rounded-3xl flex flex-col justify-between relative overflow-hidden text-white">
            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-4">Our Vision</p>
              <h2 className="text-3xl font-serif mb-6 leading-tight">Fostering a Conscious and Responsible Youth</h2>
              <p className="text-sm opacity-80 leading-relaxed">
                For a conscious and responsible youth who knows their rights and duties within a mature, modern, and democratic society.
              </p>
            </div>
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="relative z-10 h-48 flex items-end">
              <div className="w-12 h-12 bg-white text-brand-red rounded-full flex items-center justify-center shadow-lg">
                <ArrowUpRight size={24} />
              </div>
            </div>
          </div>

          <div className="bg-brand-bg-secondary p-10 rounded-3xl border border-brand-text-primary/5 flex flex-col justify-between group">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-4">Our Mission</p>
              <h2 className="text-3xl font-serif mb-6 leading-tight">Contributing to Civil Development</h2>
              <p className="text-sm text-brand-text-secondary leading-relaxed">
                To contribute to the civil development of youth through educational, cultural, artistic, and scientific training, promoting noble human values and sustainable development.
              </p>
            </div>
            <div className="relative h-48 rounded-2xl overflow-hidden mt-8">
              <img 
                src="https://wa9tna.wordpress.com/wp-content/uploads/2026/02/615359350_18085158647515312_252616531448348988_n.jpg" 
                alt="Our Mission" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Champion Section - Developed */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-4">Our Commitment</p>
            <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight text-brand-text-primary">
              We Champion the Bold to Achieve the Extraordinary
            </h2>
            <p className="text-lg text-brand-text-secondary leading-relaxed mb-8">
              At AMA, we believe that the youth of Khouribga and the Beni Mellal-Khenifra region possess untapped potential. We don't just provide training; we build a platform for the courageous to lead, the creative to innovate, and the visionary to transform their communities.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-brand-bg-secondary px-6 py-3 rounded-2xl border border-black/5">
                <div className="w-2 h-2 rounded-full bg-brand-red" />
                <span className="font-bold text-sm">10+ Years of Advocacy</span>
              </div>
              <div className="flex items-center gap-3 bg-brand-bg-secondary px-6 py-3 rounded-2xl border border-black/5">
                <div className="w-2 h-2 rounded-full bg-brand-green" />
                <span className="font-bold text-sm">Community-Led Projects</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://wa9tna.wordpress.com/wp-content/uploads/2026/02/612303057_1324750646362344_640332652105744531_n.jpg" 
                alt="Youth Impact" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-brand-green text-white p-8 rounded-3xl shadow-xl max-w-[280px] hidden md:block">
              <p className="text-3xl font-serif mb-2">"AMA changed my perspective on civic duty."</p>
              <p className="text-sm font-bold opacity-60">— Youth Member, 2024</p>
            </div>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="relative h-[450px] rounded-[2rem] overflow-hidden group cursor-pointer"
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-6 left-6 w-10 h-10 bg-brand-red text-white rounded-full flex items-center justify-center">
                {service.icon}
              </div>
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center text-white">
                <span className="text-xl font-bold">{service.title}</span>
                <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-brand-red group-hover:text-white transition-colors">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 bg-brand-bg-secondary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-serif mb-8 text-brand-text-primary">Ready to make an impact?</h3>
            <p className="text-brand-text-secondary max-w-2xl mx-auto mb-12 text-lg">
              Whether you are a student, a professional, or a community leader, there is a place for you at AMA. Join us in building a better future for the youth of Morocco.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-brand-red text-white px-10 py-4 rounded-full font-bold hover:bg-brand-green transition-all shadow-lg">Become a Member</button>
              <button className="bg-brand-green text-white px-10 py-4 rounded-full font-bold hover:bg-brand-red transition-all shadow-lg">Support Our Work</button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-brand-green text-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Our Philosophy</p>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              Empowering Youth Through Dialogue, Governance, and Active Participation
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {philosophies.map((item, idx) => (
              <div key={idx} className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 bg-brand-accent/20 text-brand-accent rounded-full flex items-center justify-center mb-6">
                  <Target size={20} />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Decorative Shape */}
        <div className="absolute bottom-0 left-10 w-20 h-20 bg-brand-green rotate-45 translate-y-1/2" />
      </section>

              {/* Stats Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <p className="text-5xl font-serif mb-2 text-brand-red">{stat.value}</p>
              <p className="text-xs uppercase tracking-widest text-brand-text-secondary font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-brand-text-primary/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8 text-brand-text-primary">
              Our Core Objectives & Areas of Focus
            </h2>
            <div className="space-y-6 text-brand-text-secondary">
              <p><span className="text-brand-green mr-2">•</span> Training youth in artistic, cultural, and scientific fields.</p>
              <p><span className="text-brand-green mr-2">•</span> Promoting human rights and legislative awareness.</p>
              <p><span className="text-brand-green mr-2">•</span> Supporting students and reintegrating dropouts.</p>
              <p><span className="text-brand-green mr-2">•</span> Fostering environmental awareness and climate action.</p>
              <p><span className="text-brand-green mr-2">•</span> Creating income-generating activities for emerging talent.</p>
            </div>
          </div>
          <div className="space-y-4">
            {[
              'Youth Leadership',
              'Cultural Heritage',
              'Digital Innovation',
              'Social Integration',
              'Environmental Advocacy',
              'Civic Education'
            ].map((industry, idx) => (
              <div key={idx} className="flex items-center justify-between p-6 bg-brand-bg-secondary rounded-2xl group hover:bg-brand-red hover:text-white transition-colors cursor-pointer">
                <span className="font-bold">{industry}</span>
                <ArrowRight size={20} className="opacity-40 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <section className="py-24 bg-brand-bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest opacity-40 mb-4">Our Latest Insights</p>
              <h2 className="text-4xl font-serif text-brand-text-primary">Thought Leadership</h2>
            </div>
            <button className="text-brand-accent font-bold border-b-2 border-brand-accent pb-1 hover:text-brand-green hover:border-brand-green transition-colors">
              View All Insights
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
              <div className="h-56 overflow-hidden">
                <img 
                  src="https://wa9tna.wordpress.com/wp-content/uploads/2026/03/484085437_2225721241178977_89532859213910321_n.jpg" 
                  alt="Abdelhadi Hanine" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <p className="text-xs font-bold text-brand-red uppercase mb-4">Leadership</p>
                <h3 className="text-xl font-bold mb-4 leading-tight">Led by President Abdelhadi Hanine and a dedicated executive board.</h3>
                <div className="text-sm opacity-60 space-y-1">
                  <p>Email: ama.khouribga@gmail.com</p>
                  <p>Phone: 0657262102 / 0610424958</p>
                  <p>Location: Khouribga, Morocco</p>
                </div>
              </div>
            </div>
            {[2, 3].map((i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
                <div className="h-56 overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&sig=${i}`} 
                    alt="Insight" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <p className="text-xs font-bold text-brand-red uppercase mb-4">Leadership</p>
                  <h3 className="text-xl font-bold mb-4 leading-tight">Led by President Abdelhadi Hanine and a dedicated executive board.</h3>
                  <div className="text-sm opacity-60 space-y-1">
                    <p>Email: ama.khouribga@gmail.com</p>
                    <p>Phone: 0657262102 / 0610424958</p>
                    <p>Location: Khouribga, Morocco</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MembershipModal isOpen={isMembershipModalOpen} onClose={() => setIsMembershipModalOpen(false)} />
    </div>
  );
};

export default About;
