import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowRight, Heart, Star, Quote, Mail } from 'lucide-react';

const Impact = () => {
  return (
    <div className="pt-24 bg-brand-bg-secondary min-h-screen font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-white border border-brand-text-primary/10 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 text-brand-text-primary">
              Impact in Khouribga
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.9] mb-8 text-brand-text-primary">
              Youth <br /> empowerment <br /> is <span className="text-brand-green italic">wealth</span>
            </h1>
            <div className="flex items-start gap-6 max-w-md">
              <div className="w-12 h-12 rounded-full border border-brand-text-primary/10 flex items-center justify-center flex-shrink-0 text-brand-text-primary">
                <ArrowDown size={20} />
              </div>
              <p className="text-brand-text-secondary text-lg leading-relaxed">
                Empowering the next generation through civic education, leadership training, and economic inclusion.
              </p>
            </div>
          </div>

          <div className="relative h-[500px]">
            {/* Floating Avatars with Labels */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-0 right-20 flex flex-col items-center"
            >
              <div className="w-24 h-24 rounded-3xl overflow-hidden bg-brand-red border-4 border-white shadow-xl">
                <img src="https://picsum.photos/seed/h1/200" alt="person" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="bg-brand-red text-white text-[10px] px-3 py-1 rounded-full mt-2 font-bold shadow-sm">Leaders</div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-40 left-0 flex flex-col items-center"
            >
              <div className="w-32 h-32 rounded-3xl overflow-hidden bg-brand-green border-4 border-white shadow-xl">
                <img src="https://picsum.photos/seed/h2/200" alt="person" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="bg-brand-green text-white text-[10px] px-3 py-1 rounded-full mt-2 font-bold shadow-sm">Empowered</div>
            </motion.div>

            <motion.div 
              animate={{ x: [0, 10, 0] }} 
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute bottom-10 right-0 flex flex-col items-center"
            >
              <div className="w-28 h-28 rounded-3xl overflow-hidden bg-brand-text-primary border-4 border-white shadow-xl">
                <img src="https://picsum.photos/seed/h3/200" alt="person" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
              </div>
              <div className="bg-brand-text-primary text-white text-[10px] px-3 py-1 rounded-full mt-2 font-bold shadow-sm">Active</div>
            </motion.div>
            
            {/* Decorative icons */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10">
               <Heart size={200} className="text-brand-green" />
            </div>
          </div>
        </div>
      </section>

      {/* How can we help section */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="bg-brand-red rounded-[3rem] p-12 aspect-square flex items-center justify-center overflow-hidden">
             <img src="https://picsum.photos/seed/help/600" alt="help" className="w-full h-full object-cover rounded-2xl" referrerPolicy="no-referrer" />
          </div>
          <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-brand-text-primary/5">
             <div className="text-brand-green font-bold text-xs uppercase tracking-widest mb-1">Doctor</div>
             <div className="w-12 h-1 bg-brand-green rounded-full"></div>
          </div>
        </div>

        <div>
          <h2 className="text-5xl font-bold mb-8 leading-tight text-brand-text-primary">
            How do we <br /> make impact? 🚀
          </h2>
          <p className="text-brand-text-secondary text-lg mb-6 leading-relaxed">
            We leverage constitutional mechanisms like citizen petitions to demand equitable development and infrastructure for our province.
          </p>
          <p className="text-brand-text-secondary text-lg mb-10 leading-relaxed">
            Our programs are data-driven and community-focused, ensuring every initiative meets the real needs of our youth.
          </p>
          <button className="bg-brand-red text-white px-10 py-4 rounded-full font-bold hover:bg-brand-green transition-colors">
            Our Initiatives
          </button>
        </div>
      </section>

      {/* Grow Confidence Section */}
      <section className="bg-brand-text-primary text-white py-24 px-6 wavy-border-top wavy-border-bottom">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="text-brand-red text-[10px] font-bold uppercase tracking-widest mb-6">Empowerment is key</div>
            <h2 className="text-5xl font-bold mb-8 leading-tight underline decoration-brand-red decoration-4 underline-offset-8">
              We help youth to <br /> grow confidence <br /> and leadership
            </h2>
            <p className="opacity-60 text-lg leading-relaxed max-w-md">
              Through the Young Leaders Program, we provide multi-module training in entrepreneurship and cooperative models.
            </p>
          </div>

          <div className="bg-white text-brand-text-primary p-8 rounded-[2.5rem] relative group cursor-pointer">
            <div className="aspect-video rounded-2xl overflow-hidden mb-6">
               <img src="https://picsum.photos/seed/leaders/600/400" alt="leaders" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold">Empowering Young Women</h3>
              <div className="w-12 h-12 bg-brand-red text-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform">
                <ArrowRight size={24} />
              </div>
            </div>
            <p className="text-brand-text-secondary mt-4">Dedicated training modules for women's economic inclusion and autonomy.</p>
          </div>
        </div>
      </section>

      {/* Inner Peace Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <div className="text-brand-green text-[10px] font-bold uppercase tracking-widest mb-6">Our Core Pillars</div>
        <h2 className="text-5xl font-bold mb-20 italic text-brand-text-primary">Our Pillars of <span className="text-brand-green border-2 border-brand-green px-6 py-1 rounded-full not-italic">Impact</span></h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { title: "Civic Education", desc: "Cultivating national memory and civic identity.", img: "https://picsum.photos/seed/i1/200" },
            { title: "Economic Inclusion", desc: "Training in cooperative and SME models.", img: "https://picsum.photos/seed/i2/200" },
            { title: "Territorial Justice", desc: "Advocating for equitable regional resources.", img: "https://picsum.photos/seed/i3/200" },
            { title: "Youth Leadership", desc: "Developing the next generation of civil actors.", img: "https://picsum.photos/seed/i4/200" }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg bg-brand-bg-secondary">
                <img src={item.img} alt="avatar" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <h4 className="font-bold text-lg mb-2 text-brand-text-primary">{item.title}</h4>
              <p className="text-brand-text-secondary text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-sm border border-brand-text-primary/5 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="bg-brand-red rounded-3xl p-8 aspect-[4/5] flex items-center justify-center overflow-hidden">
               <img src="https://wa9tna.wordpress.com/wp-content/uploads/2026/03/484085437_2225721241178977_89532859213910321_n.jpg" alt="president" className="w-full h-full object-cover rounded-2xl shadow-2xl" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute bottom-8 left-8 right-8 bg-brand-text-primary/80 backdrop-blur-md text-white p-6 rounded-2xl flex justify-between items-center">
               <div>
                  <div className="font-bold">Abdelhadi Hanine</div>
                  <div className="text-xs opacity-60">President of AMA</div>
               </div>
               <ArrowRight size={20} className="text-brand-red" />
            </div>
          </div>

          <div>
            <Quote size={60} className="text-brand-green opacity-20 mb-8" />
            <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight text-brand-text-primary">
              "A landmark for <span className="text-brand-green italic underline decoration-brand-green decoration-2 underline-offset-8">local civil society</span>"
            </h2>
            <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-12 rounded-full overflow-hidden bg-brand-bg-secondary">
                  <img src="https://picsum.photos/seed/member/100" alt="member" referrerPolicy="no-referrer" />
               </div>
               <div>
                  <div className="font-bold text-brand-text-primary">Active Member</div>
                  <div className="text-xs text-brand-text-secondary">Khouribga Province</div>
               </div>
            </div>
            <p className="text-brand-text-secondary text-lg italic leading-relaxed">
              "Successfully leveraging Morocco's constitutional citizen petition mechanism to compel regional councils to adopt development projects is a constitutional milestone for our association."
            </p>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl font-bold text-brand-text-primary">The latest from AMA</h2>
          <button className="flex items-center gap-2 text-brand-green font-bold group">
            Read All News <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { date: "01 July 2024", title: "Decision No. 136/2024: A Constitutional Milestone", color: "bg-brand-red/5" },
            { date: "06 May 2021", title: "Young Leaders Program: 2nd Edition Success", color: "bg-brand-green/5" },
            { date: "13 Aug 2025", title: "Advocating for the Regional Audiovisual Institute", color: "bg-brand-red/10" }
          ].map((post, idx) => (
            <div key={idx} className={`${post.color} p-10 rounded-[2.5rem] flex flex-col justify-between h-[400px] group cursor-pointer border border-brand-text-primary/5`}>
              <div>
                <div className="text-xs font-bold opacity-40 mb-4 text-brand-text-primary">{post.date}</div>
                <h3 className="text-2xl font-bold leading-tight text-brand-text-primary group-hover:text-brand-green transition-colors">{post.title}</h3>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-brand-text-primary">Read More +</span>
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white bg-brand-bg-secondary">
                   <img src={`https://picsum.photos/seed/blog${idx}/100`} alt="blog" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Stats Footer */}
      <section className="bg-brand-text-primary text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex gap-20">
            <div>
              <div className="text-6xl font-bold mb-2">4.2 <span className="text-brand-red">k</span></div>
              <p className="text-sm opacity-60">Facebook Reach</p>
            </div>
            <div>
              <div className="text-6xl font-bold mb-2">100 <span className="text-brand-green">%</span></div>
              <p className="text-sm opacity-60">Commitment to Khouribga</p>
            </div>
          </div>
          
          <div className="bg-white/5 p-10 rounded-[2.5rem] border border-white/10">
            <h3 className="text-2xl font-bold mb-6 italic">Subscribe to our newsletter !</h3>
            <div className="flex gap-4">
              <input type="email" placeholder="Email address" className="flex-1 bg-transparent border-b border-white/20 py-2 outline-none focus:border-brand-red transition-colors" />
              <button className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center text-white hover:bg-brand-green transition-colors">
                <Mail size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
