import React from 'react';
import { motion } from 'motion/react';
import { Star, Heart, Zap, Smile, Users, ShieldCheck } from 'lucide-react';

const Members = () => {
  const members = [
    {
      name: "Abdelhadi Hanine",
      role: "President",
      active: ["Leadership", "Advocacy"],
      desc: "Leading the association's strategic vision and constitutional advocacy.",
      img: "https://wa9tna.wordpress.com/wp-content/uploads/2026/03/484085437_2225721241178977_89532859213910321_n.jpg"
    },
    {
      name: "Executive Board",
      role: "5 Members",
      active: ["Management", "Strategy"],
      desc: "Responsible for the daily operations and implementation of board decisions.",
      img: "https://wa9tna.wordpress.com/wp-content/uploads/2026/03/image_2026-03-18_130230435.png"
    },
    {
      name: "Founding Body",
      role: "3 Members",
      active: ["Vision", "Governance"],
      desc: "Ensuring the association remains true to its founding principles.",
      img: "https://wa9tna.wordpress.com/wp-content/uploads/2026/03/480041440_10234119777834273_3589518926948982873_n.jpg"
    },
    {
      name: "General Secretary",
      role: "Executive Officer",
      active: ["Administration", "Legal"],
      desc: "Managing official documentation and legal compliance of the association.",
      img: "https://wa9tna.wordpress.com/wp-content/uploads/2025/12/generated_image_c521a3db-1595-4d49-810c-669e0d16b301.png"
    },
    {
      name: "Treasurer",
      role: "Financial Officer",
      active: ["Finance", "Audit"],
      desc: "Overseeing the association's budget, funding, and financial reporting.",
      img: "https://wa9tna.wordpress.com/wp-content/uploads/2025/12/generated_image_6bf83e9b-82c7-47d9-81f4-5f1c5fe17686.png"
    },
    {
      name: "Regional Coordinator",
      role: "Field Officer",
      active: ["Outreach", "Coordination"],
      desc: "Connecting regional branches and coordinating local initiatives.",
      img: "https://wa9tna.wordpress.com/wp-content/uploads/2025/12/image_1765399488359651.png"
    },
    {
      name: "Cultural Committee",
      role: "Committee Head",
      active: ["Arts", "Heritage"],
      desc: "Promoting local culture and organizing artistic workshops.",
      img: "https://wa9tna.wordpress.com/wp-content/uploads/2025/12/image_1765399886304573.png"
    },
    {
      name: "Media & Comms",
      role: "Department Head",
      active: ["Digital", "Press"],
      desc: "Managing the association's public image and digital presence.",
      img: "https://wa9tna.wordpress.com/wp-content/uploads/2025/10/generated-image-2-1.png"
    }
  ];

  return (
    <div className="pt-24 bg-white min-h-screen font-sans overflow-hidden">
      {/* Hero Section - Geometric Grid */}
      <section className="bg-brand-red px-6 py-20 wavy-border-bottom relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="grid grid-cols-3 gap-4">
            {/* Geometric Shapes & Photos Grid like the image */}
            <div className="aspect-square bg-brand-green/20 rounded-2xl flex items-center justify-center">
               <div className="grid grid-cols-3 gap-1">
                  {[...Array(9)].map((_, i) => <div key={i} className="w-2 h-2 bg-brand-green rounded-full"></div>)}
               </div>
            </div>
            <div className="aspect-square bg-white rounded-full overflow-hidden">
               <img src="https://picsum.photos/seed/m-hero1/300" alt="member" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-square bg-brand-text-primary rounded-2xl flex items-center justify-center overflow-hidden">
               <div className="w-12 h-12 bg-brand-red rotate-45"></div>
            </div>
            
            <div className="aspect-square bg-brand-green rounded-full overflow-hidden">
               <img src="https://picsum.photos/seed/m-hero2/300" alt="member" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-square bg-white/10 rounded-full flex items-center justify-center">
               <Zap className="text-white" size={40} />
            </div>
            <div className="aspect-square bg-brand-text-primary/10 rounded-2xl"></div>

            <div className="aspect-square bg-white rounded-2xl overflow-hidden">
               <img src="https://picsum.photos/seed/m-hero3/300" alt="member" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-square bg-brand-green/10 rounded-full"></div>
            <div className="aspect-square bg-brand-text-primary rounded-full flex items-center justify-center">
               <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
          </div>

          <div className="lg:pl-12">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-6 italic text-white">
              Our <br />
              <span className="text-brand-green">Structure</span>
            </h1>
            <div className="inline-block bg-white px-4 py-2 rounded-full text-sm font-bold shadow-sm text-brand-red">
              Governance & Leadership
            </div>
          </div>
        </div>
        
        {/* Large decorative circle */}
        <div className="absolute top-1/2 right-0 w-64 h-64 border-[20px] border-white/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
      </section>

      {/* Introduction */}
      <section className="py-24 px-6 text-center relative">
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold text-brand-green mb-6">Organizational Overview</h2>
          <p className="text-brand-text-secondary text-lg leading-relaxed">
            AMA operates under a democratic governance model consistent with Moroccan civil society norms. Our structure ensures transparency and participatory decision-making across all levels of the organization.
          </p>
        </div>
        
        {/* Floating geometric shapes */}
        <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute left-20 top-20 w-16 h-16 bg-brand-red/20 rounded-full"></motion.div>
        <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute right-20 bottom-20 w-24 h-24 bg-brand-green/20 rounded-2xl rotate-12"></motion.div>
      </section>

      {/* Members Grid */}
      <section className="py-24 px-6 bg-brand-bg-secondary/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {members.map((member, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-full aspect-square rounded-[2rem] overflow-hidden mb-8 shadow-xl border-8 border-white">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-brand-text-primary">{member.name}</h3>
              <p className="text-brand-green font-bold text-sm mb-4 uppercase tracking-widest">{member.role}</p>
              <div className="space-y-1 text-brand-text-secondary text-sm mb-4">
                <p>Mainly active on:</p>
                <div className="flex justify-center gap-2">
                  {member.active.map(a => <span key={a} className="bg-white px-3 py-1 rounded-full border border-brand-text-primary/5 shadow-sm text-brand-text-primary">{a}</span>)}
                </div>
              </div>
              <p className="text-brand-text-secondary italic text-sm">{member.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Brand Identity Section */}
      <section className="bg-brand-text-primary text-white py-24 px-6 wavy-border-top">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-5xl font-bold mb-4 italic">Governing Bodies</h2>
              <p className="text-brand-red font-medium italic">The pillars of our decision-making process.</p>
            </div>
            <p className="opacity-60 text-lg leading-relaxed">
              Our association is built on a multi-tiered governance system that includes specialized committees and representative councils to ensure every voice is heard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Administrative Council", icon: <ShieldCheck size={48} className="text-brand-red" />, desc: "Composed of 12 to 15 members, overseeing the general direction of the association." },
              { title: "Advisory Committee", icon: <Users size={48} className="text-brand-green" />, desc: "A consultative body of 21 members providing expert guidance on regional development." },
              { title: "Internal Committees", icon: <Zap size={48} className="text-brand-red" />, desc: "Specialized units for Culture, Advocacy, Training, Media, and Finance." }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                <p className="opacity-50 text-sm leading-relaxed max-w-[200px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Members;
