import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Play, 
  Users, 
  MessageSquare, 
  Globe, 
  ArrowUpRight, 
  Calendar,
  Video,
  Zap,
  Heart,
  Share2,
  X,
  CheckCircle2,
  Copy,
  Facebook as FacebookIcon,
  Twitter,
  Send
} from 'lucide-react';
import { AnimatePresence } from 'motion/react';

const Events = () => {
  const [isRegistering, setIsRegistering] = React.useState<number | null>(null);
  const [formData, setFormData] = React.useState({ name: '', email: '' });
  const [registrationStep, setRegistrationStep] = React.useState<'form' | 'confirming' | 'success' | 'thankyou'>('form');
  const [sharingEvent, setSharingEvent] = React.useState<number | null>(null);
  const [copied, setCopied] = React.useState(false);

  const upcomingEvents = [
    { id: 1, title: 'Youth Leadership Summit', date: 'March 25, 2026', location: 'Khouribga Center', img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80' },
    { id: 2, title: 'Digital Literacy Workshop', date: 'April 02, 2026', location: 'Regional Hub', img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80' },
    { id: 3, title: 'Civic Engagement Forum', date: 'April 15, 2026', location: 'City Hall', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80' },
  ];

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistrationStep('confirming');
    
    // Step 1: Processing
    setTimeout(() => {
      setRegistrationStep('success');
      
      // Step 2: Confirmation Animation/Message
      setTimeout(() => {
        setRegistrationStep('thankyou');
      }, 1500);
    }, 1500);
  };

  const closeRegistration = () => {
    setIsRegistering(null);
    setTimeout(() => {
      setRegistrationStep('form');
      setFormData({ name: '', email: '' });
    }, 300);
  };

  const selectedEvent = upcomingEvents.find(e => e.id === isRegistering);
  const eventToShare = upcomingEvents.find(e => e.id === sharingEvent);

  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white min-h-screen pt-24 font-sans overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-bg-secondary text-xs font-bold uppercase tracking-wider mb-8 text-brand-text-primary">
            <Calendar size={14} className="text-brand-green" />
            <span>Upcoming Events & Workshops</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 max-w-4xl mx-auto text-brand-text-primary">
            Experience Our Mission <br />
            <span className="text-brand-green italic font-serif">In Khouribga</span> At Once
          </h1>
          
          <p className="text-brand-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Join our workshops, conferences, and community gatherings designed to foster 
            civic engagement and drive meaningful impact in our region.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/login" className="bg-brand-text-primary text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-brand-green transition-all shadow-lg active:scale-95">
              Get Started — For Free!
            </Link>
            <Link to="/contact" className="bg-white text-brand-text-primary border border-brand-text-primary/10 px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-brand-bg-secondary transition-all active:scale-95">
              Book A Demo
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Main Mockup Section */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-black rounded-[3rem] aspect-video overflow-hidden shadow-2xl border-8 border-white"
        >
          <img 
            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80" 
            alt="Live Event Mockup"
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          
          {/* Mockup UI Elements */}
          <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none">
            <div className="flex justify-between items-start">
              <div className="bg-red-600 text-white px-3 py-1 rounded-md text-xs font-bold flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                LIVE 3.5K
              </div>
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md" />
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md" />
              </div>
            </div>
            
            <div className="flex justify-between items-end">
              <div className="max-w-xs">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full border-2 border-brand-red overflow-hidden">
                    <img src="https://i.pravatar.cc/150?u=1" alt="Host" />
                  </div>
                  <div className="text-white">
                    <p className="font-bold text-sm">Sarah Jenkins</p>
                    <p className="text-[10px] opacity-70">Community Lead</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20">
                  <p className="text-white text-xs leading-relaxed">
                    "We're so excited to have everyone here today for our annual fundraising workshop!"
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                {[Heart, MessageSquare, Share2].map((Icon, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/10">
                    <Icon size={18} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Feature Section 1: Invite Multiple Hosts (Green) */}
      <section className="bg-brand-green/5 py-24 mb-12 rounded-[4rem] mx-4">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative bg-white p-6 rounded-[2.5rem] shadow-xl">
              <div className="flex gap-4 mb-6">
                <div className="w-1/2 aspect-[4/5] rounded-2xl overflow-hidden bg-brand-bg-secondary">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" alt="Host 1" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="w-1/2 aspect-[4/5] rounded-2xl overflow-hidden bg-brand-bg-secondary">
                  <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80" alt="Host 2" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="bg-brand-bg-secondary p-4 rounded-2xl flex items-center justify-between">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${i+10}`} alt="User" />
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full bg-brand-red text-white flex items-center justify-center text-[10px] font-bold border-2 border-white">
                    +12
                  </div>
                </div>
                <Link to="/contact" className="bg-brand-text-primary text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-brand-green transition-colors">Add Hosts</Link>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-block px-4 py-1 rounded-full border border-brand-text-primary/10 text-[10px] font-bold uppercase tracking-widest mb-6 text-brand-text-primary">Step 1</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-brand-text-primary">
              Workshops & <br /> Training Sessions
            </h2>
            <p className="text-brand-text-secondary text-lg leading-relaxed mb-8">
              Our Young Leaders Program provides intensive training in entrepreneurship, 
              cooperative models, and economic autonomy. We empower young women and 
              men to lead sustainable initiatives in Khouribga.
            </p>
            <Link to="/about" className="flex items-center gap-4 text-sm font-bold text-brand-text-primary cursor-pointer group">
              <span>Learn More</span>
              <div className="w-10 h-10 bg-brand-text-primary text-white rounded-full flex items-center justify-center group-hover:bg-brand-green transition-colors">
                <ArrowUpRight size={18} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Section 2: AI Chat (Yellow) */}
      <section className="bg-brand-red/5 py-24 mb-12 rounded-[4rem] mx-4">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1 rounded-full border border-brand-text-primary/10 text-[10px] font-bold uppercase tracking-widest mb-6 text-brand-text-primary">Step 2</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-brand-text-primary">
              Community Meetings <br /> & Roundtables
            </h2>
            <p className="text-brand-text-secondary text-lg leading-relaxed mb-8">
              We organize roundtables and meetings with regional leaders to discuss 
              territorial justice and civic education. These sessions foster 
              dialogue between citizens and decision-makers.
            </p>
            <Link to="/services" className="flex items-center gap-4 text-sm font-bold text-brand-text-primary cursor-pointer group">
              <span>Explore Features</span>
              <div className="w-10 h-10 bg-brand-text-primary text-white rounded-full flex items-center justify-center group-hover:bg-brand-green transition-colors">
                <ArrowUpRight size={18} />
              </div>
            </Link>
          </div>
          <div className="relative">
            <div className="bg-white p-6 rounded-[2.5rem] shadow-xl max-w-sm mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
                  <MessageSquare size={20} />
                </div>
                <h4 className="font-bold text-brand-text-primary">Live Chat</h4>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-bg-secondary flex-shrink-0" />
                  <div className="bg-brand-bg-secondary p-3 rounded-2xl rounded-tl-none text-[11px] text-brand-text-primary">
                    How can I volunteer for the next event?
                  </div>
                </div>
                <div className="flex gap-3 flex-row-reverse">
                  <div className="w-8 h-8 rounded-full bg-brand-red flex-shrink-0" />
                  <div className="bg-brand-red/20 p-3 rounded-2xl rounded-tr-none text-[11px] text-brand-text-primary">
                    You can sign up right here in the chat!
                  </div>
                </div>
              </div>
              <div className="relative">
                <input type="text" placeholder="Type a message..." className="w-full bg-brand-bg-secondary border-none rounded-xl p-3 text-xs pr-10 text-brand-text-primary" />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-green">
                  <Play size={14} fill="currentColor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 3: Go Live Everywhere (Purple) */}
      <section className="bg-brand-bg-secondary py-24 mb-24 rounded-[4rem] mx-4">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl">
              <div className="flex items-center justify-between mb-8">
                <h4 className="font-bold text-brand-text-primary">Streaming Platforms</h4>
                <div className="text-[10px] text-brand-text-secondary font-bold uppercase">Select All</div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { name: 'YouTube', icon: Video, iconColor: 'text-brand-red' },
                  { name: 'Facebook', icon: Share2, iconColor: 'text-brand-green' },
                  { name: 'Instagram', icon: Heart, iconColor: 'text-brand-red' },
                  { name: 'Website', icon: Globe, iconColor: 'text-brand-green' }
                ].map((p, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-brand-bg-secondary rounded-xl border border-brand-text-primary/5">
                    <div className="flex items-center gap-2">
                      <p.icon size={16} className={p.iconColor} />
                      <span className="text-xs font-bold text-brand-text-primary">{p.name}</span>
                    </div>
                    <div className="w-4 h-4 rounded-full border-2 border-brand-green flex items-center justify-center">
                      <div className="w-2 h-2 bg-brand-green rounded-full" />
                    </div>
                  </div>
                ))}
              </div>
              <a href="https://web.facebook.com/profile.php?id=100064822625294" target="_blank" rel="noopener noreferrer" className="w-full bg-brand-red text-white py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-brand-green transition-colors">
                GO LIVE NOW <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-block px-4 py-1 rounded-full border border-brand-text-primary/10 text-[10px] font-bold uppercase tracking-widest mb-6 text-brand-text-primary">Step 3</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-brand-text-primary">
              Advocacy & <br /> Public Events
            </h2>
            <p className="text-brand-text-secondary text-lg leading-relaxed mb-8">
              From submitting citizen petitions to issuing press statements, 
              we mobilize the community to advocate for regional development 
              and social justice in the Khouribga province.
            </p>
            <a href="https://www.instagram.com/ama.khouribga1/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-sm font-bold text-brand-text-primary cursor-pointer group">
              <span>View Platforms</span>
              <div className="w-10 h-10 bg-brand-text-primary text-white rounded-full flex items-center justify-center group-hover:bg-brand-green transition-colors">
                <ArrowUpRight size={18} />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-brand-bg-secondary text-[10px] font-bold uppercase tracking-widest mb-6 text-brand-text-primary">Proven Impact</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-text-primary">Superior Industry Marks</h2>
          <p className="text-brand-text-secondary max-w-xl mx-auto">Our events consistently deliver high engagement and measurable results for our community.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Increased Engagement', value: '392%', icon: Users, color: 'bg-brand-red/10 text-brand-red' },
            { label: 'Videos Watch Time', value: '11.17 mins', icon: Play, color: 'bg-brand-green/10 text-brand-green' },
            { label: 'Product Discovery', value: '20X', icon: Zap, color: 'bg-brand-red/10 text-brand-red' },
            { label: 'Uplift Conversions', value: '288%', icon: Heart, color: 'bg-brand-green/10 text-brand-green' }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-[2.5rem] border border-brand-text-primary/5 shadow-sm flex flex-col items-center text-center"
            >
              <div className={`w-12 h-12 ${stat.color} rounded-2xl flex items-center justify-center mb-6`}>
                <stat.icon size={24} />
              </div>
              <h3 className="text-3xl font-bold mb-2 text-brand-text-primary">{stat.value}</h3>
              <p className="text-brand-text-secondary text-xs font-medium uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Feature Tags Section (Pink) */}
      <section className="bg-brand-red/5 py-24 mb-24 rounded-[4rem] mx-4 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 leading-tight text-brand-text-primary">
            Drive Higher Engagement With <br /> Awesome Features
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {['Workshops', 'Live Polls', 'Q&A Sessions', 'Networking', 'Resource Sharing', 'Live Chat'].map((tag, i) => (
              <div key={i} className="px-6 py-3 bg-white rounded-full text-sm font-bold border border-brand-text-primary/5 shadow-sm text-brand-text-primary">
                {tag}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left">
            <div className="bg-white p-8 rounded-[3rem] shadow-xl">
              <div className="aspect-video bg-brand-bg-secondary rounded-2xl mb-6 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80" alt="Feature" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center text-white">
                  <Zap size={20} />
                </div>
                <p className="text-sm font-bold text-brand-text-primary">Interactive Learning Modules</p>
              </div>
            </div>
            <div>
              <p className="text-brand-text-secondary text-lg leading-relaxed mb-8">
                Let participants dive deep into our mission with interactive 
                modules. Ideal for educational workshops, training sessions, 
                and community briefings.
              </p>
              <div className="flex gap-4">
                <Link to="/projects" className="bg-brand-text-primary text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-brand-green transition-colors">View Demo</Link>
                <Link to="/about" className="bg-white text-brand-text-primary border border-brand-text-primary/10 px-6 py-3 rounded-full text-sm font-bold hover:bg-brand-bg-secondary transition-colors">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-brand-bg-secondary text-[10px] font-bold uppercase tracking-widest mb-6 text-brand-text-primary">Join Us</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-text-primary">Upcoming Events</h2>
          <p className="text-brand-text-secondary max-w-xl mx-auto">Be part of our next community gathering or workshop. Register today to secure your spot.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <motion.div 
              key={event.id}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2.5rem] border border-brand-text-primary/5 shadow-sm overflow-hidden group"
            >
              <div className="aspect-video overflow-hidden">
                <img src={event.img} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-red mb-3">
                  <Calendar size={12} />
                  <span>{event.date}</span>
                </div>
                <h3 className="text-xl font-bold leading-tight mb-2 text-brand-text-primary">{event.title}</h3>
                <p className="text-brand-text-secondary text-sm mb-6">{event.location}</p>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setIsRegistering(event.id)}
                    className="flex-1 bg-brand-text-primary text-white py-3 rounded-xl font-bold text-sm hover:bg-brand-green transition-colors"
                  >
                    Register Now
                  </button>
                  <button 
                    onClick={() => setSharingEvent(event.id)}
                    className="w-12 h-12 bg-brand-bg-secondary text-brand-text-primary rounded-xl flex items-center justify-center hover:bg-brand-red hover:text-white transition-all duration-300"
                    title="Share Event"
                  >
                    <Share2 size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-brand-bg-secondary text-[10px] font-bold uppercase tracking-widest mb-6 text-brand-text-primary">Our Blog</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-text-primary">The Latest Story From Our Events</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Young Leaders Program: Empowering the Next Generation', category: 'Workshops', img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80' },
            { title: 'Citizen Petition: A Milestone for Khouribga\'s Entrepreneurs', category: 'Advocacy', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80' },
            { title: 'Territorial Justice: Our Vision for Regional Development', category: 'Mission', img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80' }
          ].map((post, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-6">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-green mb-3">
                <span>{post.category}</span>
                <span className="w-1 h-1 bg-brand-text-primary/10 rounded-full" />
                <span className="text-brand-text-secondary">March 2026</span>
              </div>
              <h3 className="text-xl font-bold leading-tight group-hover:text-brand-green transition-colors text-brand-text-primary">{post.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Share Modal */}
      <AnimatePresence>
        {sharingEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSharingEvent(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-sm bg-white rounded-[2.5rem] p-8 shadow-2xl z-10"
            >
              <button 
                className="absolute top-6 right-6 w-8 h-8 bg-brand-bg-secondary rounded-full flex items-center justify-center text-brand-text-primary hover:bg-brand-red hover:text-white transition-colors"
                onClick={() => setSharingEvent(null)}
              >
                <X size={18} />
              </button>
              
              <h3 className="text-2xl font-bold mb-2 text-brand-text-primary">Share Event</h3>
              <p className="text-brand-text-secondary text-sm mb-8">Spread the word about <span className="text-brand-red font-bold">{eventToShare?.title}</span></p>
              
              <div className="grid grid-cols-4 gap-4 mb-8">
                {[
                  { name: 'Facebook', icon: FacebookIcon, color: 'bg-[#1877F2]', url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}` },
                  { name: 'Twitter', icon: Twitter, color: 'bg-[#1DA1F2]', url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(`Join me at ${eventToShare?.title}!`)}` },
                  { name: 'WhatsApp', icon: MessageSquare, color: 'bg-[#25D366]', url: `https://wa.me/?text=${encodeURIComponent(`Check out this event: ${eventToShare?.title} ${window.location.href}`)}` },
                  { name: 'Email', icon: Send, color: 'bg-brand-text-primary', url: `mailto:?subject=${encodeURIComponent(eventToShare?.title || '')}&body=${encodeURIComponent(`Check out this event: ${window.location.href}`)}` }
                ].map((platform) => (
                  <a 
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className={`w-12 h-12 ${platform.color} text-white rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110`}>
                      <platform.icon size={20} />
                    </div>
                    <span className="text-[10px] font-bold text-brand-text-secondary uppercase">{platform.name}</span>
                  </a>
                ))}
              </div>
              
              <div className="relative">
                <input 
                  readOnly
                  type="text" 
                  value={window.location.href}
                  className="w-full bg-brand-bg-secondary border-none rounded-xl p-4 text-xs text-brand-text-primary pr-24"
                />
                <button 
                  onClick={handleCopyLink}
                  className={`absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 rounded-lg text-[10px] font-bold uppercase transition-all ${
                    copied ? 'bg-brand-green text-white' : 'bg-brand-text-primary text-white hover:bg-brand-green'
                  }`}
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isRegistering && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => registrationStep === 'form' && setIsRegistering(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl z-10 overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {registrationStep === 'form' && (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <button 
                      className="absolute top-0 right-0 w-8 h-8 bg-brand-bg-secondary rounded-full flex items-center justify-center text-brand-text-primary hover:bg-brand-red hover:text-white transition-colors"
                      onClick={() => setIsRegistering(null)}
                    >
                      <X size={18} />
                    </button>
                    <h3 className="text-3xl font-bold mb-2 text-brand-text-primary">Register</h3>
                    <p className="text-brand-text-secondary text-sm mb-8">
                      Join us for <span className="text-brand-red font-bold">{selectedEvent?.title}</span>
                    </p>
                    
                    <form onSubmit={handleRegister} className="space-y-4">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-text-secondary mb-2">Full Name</label>
                        <input 
                          required
                          type="text" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Enter your name" 
                          className="w-full bg-brand-bg-secondary border-none rounded-xl p-4 text-sm text-brand-text-primary focus:ring-2 focus:ring-brand-green" 
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-text-secondary mb-2">Email Address</label>
                        <input 
                          required
                          type="email" 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="Enter your email" 
                          className="w-full bg-brand-bg-secondary border-none rounded-xl p-4 text-sm text-brand-text-primary focus:ring-2 focus:ring-brand-green" 
                        />
                      </div>
                      <button 
                        type="submit"
                        className="w-full bg-brand-red text-white py-4 rounded-xl font-bold text-sm hover:bg-brand-green transition-colors mt-4"
                      >
                        Confirm Registration
                      </button>
                    </form>
                  </motion.div>
                )}

                {registrationStep === 'confirming' && (
                  <motion.div
                    key="confirming"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.2 }}
                    className="text-center py-12"
                  >
                    <div className="relative w-24 h-24 mx-auto mb-8">
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        className="absolute inset-0 border-4 border-brand-green/20 border-t-brand-green rounded-full"
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-brand-green">
                        <Zap size={32} className="animate-pulse" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-brand-text-primary">Securing Your Spot...</h3>
                    <p className="text-brand-text-secondary text-sm">Processing your registration for {selectedEvent?.title}</p>
                  </motion.div>
                )}

                {registrationStep === 'success' && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    className="text-center py-12"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', damping: 12, stiffness: 200 }}
                      className="w-24 h-24 bg-brand-green text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-brand-green/20"
                    >
                      <CheckCircle2 size={48} />
                    </motion.div>
                    <h3 className="text-3xl font-bold mb-2 text-brand-text-primary">Registration Confirmed!</h3>
                    <p className="text-brand-text-secondary text-sm">Your spot has been successfully secured.</p>
                  </motion.div>
                )}

                {registrationStep === 'thankyou' && (
                  <motion.div
                    key="thankyou"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-center py-4"
                  >
                    <div className="mb-8">
                      <div className="w-16 h-16 bg-brand-bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Heart size={32} className="text-brand-red" />
                      </div>
                      <h3 className="text-3xl font-bold mb-4 text-brand-text-primary">Thank You, {formData.name.split(' ')[0]}!</h3>
                      <p className="text-brand-text-secondary leading-relaxed mb-8">
                        We're thrilled to have you join us for <span className="font-bold text-brand-text-primary">{selectedEvent?.title}</span>. 
                        A confirmation email with all the details has been sent to <span className="text-brand-green font-medium underline">{formData.email}</span>.
                      </p>
                      
                      <div className="bg-brand-bg-secondary/50 rounded-3xl p-6 mb-8 border border-brand-text-primary/5">
                        <div className="flex items-center gap-4 text-left">
                          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                            <Calendar size={20} className="text-brand-red" />
                          </div>
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-brand-text-secondary">Event Date</p>
                            <p className="text-sm font-bold text-brand-text-primary">{selectedEvent?.date}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button 
                      onClick={closeRegistration}
                      className="w-full bg-brand-text-primary text-white py-4 rounded-2xl font-bold text-sm hover:bg-brand-green transition-all active:scale-95 shadow-lg"
                    >
                      Done
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Events;
