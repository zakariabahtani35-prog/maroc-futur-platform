import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Star, Mail, ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative group overflow-hidden rounded-[2rem] h-[300px] md:h-[400px] shadow-xl">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </AnimatePresence>
      
      <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <button 
          onClick={(e) => { e.preventDefault(); prev(); }} 
          className="p-3 bg-black/30 backdrop-blur-md rounded-full text-white hover:bg-black/50 transition-all transform hover:scale-110"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={(e) => { e.preventDefault(); next(); }} 
          className="p-3 bg-black/30 backdrop-blur-md rounded-full text-white hover:bg-black/50 transition-all transform hover:scale-110"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurrentIndex(i)}
            className={`h-1.5 rounded-full transition-all ${i === currentIndex ? 'bg-white w-8' : 'bg-white/40 w-4'}`}
          />
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  const programHighlights = [
    {
      title: "Young Leaders Program",
      description: "A transformative journey for youth, focusing on leadership, social entrepreneurship, and cooperative management to build a resilient local economy.",
      images: [
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80"
      ]
    },
    {
      title: "Regional Audiovisual Institute",
      description: "Our flagship advocacy project aiming to turn Khouribga into a national hub for creative industries and digital storytelling.",
      images: [
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80"
      ]
    },
    {
      title: "Environmental Action",
      description: "Leading local initiatives for waste management and climate awareness, bridging the gap between global policy and community action.",
      images: [
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1536697246747-e2169b3867be?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80"
      ]
    }
  ];
  return (
    <div className="pt-24 bg-white min-h-screen font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-6">
            Our <br />
            <span className="text-brand-green">Programs</span>
          </h1>
          <p className="text-brand-text-secondary text-lg max-w-md mb-8 leading-relaxed">
            From the Young Leaders Program to regional advocacy for territorial justice, AMA drives sustainable change through structured civic and educational initiatives.
          </p>
              <button className="bg-brand-red text-white px-8 py-4 rounded-full font-bold hover:bg-brand-green transition-all shadow-lg shadow-brand-red/20 flex items-center gap-2">
                View All Projects <ArrowRight size={20} />
              </button>
        </motion.div>

        <div className="relative h-[500px] md:h-[600px]">
          {/* Circular Image Grid - Inspired by the image */}
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-4">
            <motion.div 
              initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }}
              className="bg-brand-red rounded-full overflow-hidden flex items-center justify-center"
            >
              <img src="https://picsum.photos/seed/p1/300" alt="project" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div 
              initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }}
              className="bg-brand-green rounded-full overflow-hidden col-span-2 row-span-2"
            >
              <img src="https://picsum.photos/seed/p2/600" alt="project" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div 
              initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4 }}
              className="bg-brand-text-primary rounded-full overflow-hidden"
            >
              <img src="https://picsum.photos/seed/p3/300" alt="project" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div 
              initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }}
              className="bg-brand-bg-secondary rounded-full overflow-hidden"
            >
              <img src="https://picsum.photos/seed/p4/300" alt="project" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div 
              initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6 }}
              className="bg-brand-red rounded-full overflow-hidden"
            >
              <img src="https://picsum.photos/seed/p5/300" alt="project" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
          {/* Decorative floating circles */}
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-brand-red rounded-full blur-2xl opacity-50"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-green rounded-full blur-3xl opacity-20"></div>
        </div>
      </section>

      {/* Program Highlights Section */}
      <section className="py-24 px-6 bg-brand-bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Program Highlights</h2>
            <p className="text-brand-text-secondary max-w-2xl mx-auto">
              A visual journey through our most impactful initiatives and the communities we serve.
            </p>
          </div>
          
          <div className="space-y-32">
            {programHighlights.map((program, idx) => (
              <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                <div className="flex-1 space-y-6">
                  <div className="inline-block px-4 py-1 bg-brand-red/10 text-brand-red rounded-full text-sm font-bold uppercase tracking-widest">
                    Project 0{idx + 1}
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-text-primary">
                    {program.title}
                  </h3>
                  <p className="text-brand-text-secondary text-lg leading-relaxed">
                    {program.description}
                  </p>
                  <button className="text-brand-accent font-bold flex items-center gap-2 group hover:gap-4 transition-all">
                    Learn More <ArrowRight size={20} />
                  </button>
                </div>
                <div className="flex-1 w-full">
                  <ImageCarousel images={program.images} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Youth Development", color: "bg-brand-red", icon: "🚀", desc: "The Young Leaders Program develops leadership, entrepreneurial, and cooperative skills among youth." },
            { title: "Education", color: "bg-brand-green", icon: "📚", dark: true, desc: "Advocating for the Regional Audiovisual Institute to create a creative education hub in Khouribga." },
            { title: "Environment", color: "bg-brand-text-primary", icon: "🌍", dark: true, desc: "Promoting environmental awareness and participating in global climate initiatives like COP22." },
            { title: "Culture & Arts", color: "bg-brand-bg-secondary", icon: "🎨", desc: "Cultivating national memory and civic identity through roundtables on historical milestones." }
          ].map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className={`${service.color} ${service.dark ? 'text-white' : 'text-brand-text-primary'} p-10 rounded-[2.5rem] shadow-sm flex flex-col gap-4`}
            >
              <div className="text-4xl">{service.icon}</div>
              <h3 className="text-2xl font-bold">{service.title}</h3>
              <p className={`text-sm ${service.dark ? 'opacity-60' : 'text-brand-text-secondary'} leading-relaxed`}>
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          {/* Collage Layout */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-64 rounded-3xl overflow-hidden bg-brand-red">
                <img src="https://picsum.photos/seed/exp1/400" alt="exp" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="h-40 rounded-full overflow-hidden bg-brand-green">
                <img src="https://picsum.photos/seed/exp2/400" alt="exp" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="pt-12 space-y-4">
              <div className="h-40 rounded-full overflow-hidden bg-brand-text-primary">
                <img src="https://picsum.photos/seed/exp3/400" alt="exp" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
              </div>
              <div className="h-64 rounded-3xl overflow-hidden bg-brand-bg-secondary">
                <img src="https://picsum.photos/seed/exp4/400" alt="exp" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
          {/* Floating element */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-brand-red rounded-full flex items-center justify-center shadow-xl">
             <Star className="text-white fill-white" size={32} />
          </div>
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight text-brand-text-primary">
            Young Leaders Program: <br />
            Empowering The Next <br />
            Generation Of Leaders
          </h2>
          <p className="text-brand-text-secondary text-lg mb-10 leading-relaxed">
            A multi-module training cycle focused on leadership, entrepreneurship, and cooperative models, with a special emphasis on young women's economic autonomy.
          </p>
          <button className="bg-brand-red text-white px-8 py-4 rounded-full font-bold hover:bg-brand-green transition-colors">
            Program Details
          </button>
        </div>
      </section>

      {/* Marketing Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight text-brand-text-primary">
            Startup & SME Incubator: <br />
            Driving Economic <br />
            Diversification.
          </h2>
          <p className="text-brand-text-secondary text-lg mb-10 leading-relaxed">
            Our landmark advocacy project to establish a publicly funded incubator in Khouribga, aimed at stimulating local entrepreneurship and reducing youth unemployment.
          </p>
          <button className="bg-brand-red text-white px-8 py-4 rounded-full font-bold hover:bg-brand-green transition-colors">
            View Advocacy Status
          </button>
        </div>

        <div className="order-1 lg:order-2 relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="h-80 rounded-[3rem] overflow-hidden bg-brand-green">
               <img src="https://picsum.photos/seed/m1/500" alt="marketing" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="space-y-4">
               <div className="h-36 rounded-full overflow-hidden bg-brand-red">
                  <img src="https://picsum.photos/seed/m2/500" alt="marketing" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
               </div>
               <div className="h-40 rounded-3xl overflow-hidden bg-brand-text-primary">
                  <img src="https://picsum.photos/seed/m3/500" alt="marketing" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-brand-bg-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-brand-text-primary">Community Voices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Ahmed R.", role: "Student Member", text: "The training in digital journalism completely changed my perspective on media and its role in our community." },
              { name: "Sara K.", role: "Volunteer", text: "Participating in the environmental workshops opened my eyes to the local impact of global climate issues." },
              { name: "Youssef M.", role: "Program Alumnus", text: "AMA provided the support I needed to return to my studies after a difficult period. I am forever grateful." }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-brand-border text-left">
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} className="fill-brand-red text-brand-red" />)}
                </div>
                <p className="text-brand-text-secondary mb-8 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-brand-bg-secondary">
                    <img src={`https://picsum.photos/seed/member${i}/100`} alt="member" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-text-primary">{testimonial.name}</h4>
                    <p className="text-xs text-brand-text-secondary opacity-60">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Partners */}
          <div className="mt-20 flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale">
             <span className="text-2xl font-bold">Province of Khouribga</span>
             <span className="text-2xl font-bold">Regional Council</span>
             <span className="text-2xl font-bold">National Fitness Federation</span>
             <span className="text-2xl font-bold">Zallaka Youth Center</span>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-brand-green rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Join Our Newsletter</h2>
            <p className="opacity-70 mb-10 max-w-lg mx-auto">
              Stay updated with our latest news and offers. We promise not to spam you.
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-4 outline-none focus:bg-white/20 transition-all"
              />
              <button className="bg-brand-red text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-brand-red transition-all">
                Subscribe
              </button>
            </div>
          </div>
          {/* Decorative shapes */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
