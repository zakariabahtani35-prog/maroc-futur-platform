import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  ArrowUpRight, 
  MapPin, 
  Mail, 
  Phone, 
  Clock,
  Send,
  ChevronDown
} from 'lucide-react';

const Contact = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "How can I join Association Maroc de l'Avenir (AMA)?",
      answer: "You can join by visiting our 'Get Involved' page and filling out the membership application. We welcome all youth in Khouribga who share our vision for a conscious and responsible future."
    },
    {
      question: "What kind of workshops do you offer?",
      answer: "We offer a wide range of training sessions, including the Young Leaders Program, digital literacy, artistic workshops, and civic education seminars."
    },
    {
      question: "How can I support AMA's mission?",
      answer: "You can support us by volunteering your time, participating in our programs, or making a donation to help fund our community initiatives."
    },
    {
      question: "Where is AMA located?",
      answer: "Our main office is located in Khouribga, Morocco. You can find our exact address and contact details on this page."
    }
  ];

  return (
    <div className="bg-brand-bg-secondary min-h-screen pt-32 pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Hero Section */}
        <section className="bg-white rounded-[2.5rem] p-12 md:p-20 mb-12 relative overflow-hidden shadow-sm border border-brand-text-primary/5">
          <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
            <div className="grid grid-cols-3 gap-2 p-4">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-brand-red rounded-full" />
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
                <span className="bg-brand-red text-white px-4 py-1 rounded-2xl inline-block mb-2">We Would Love</span>
                <br />
                to Hear from You
              </h1>
            </div>
            <div>
              <p className="text-brand-text-secondary text-lg mb-8 leading-relaxed">
                Thank you for your interest in our mission to empower the youth of Khouribga and foster regional development. We value your thoughts, questions, and feedback on our programs. Please don't hesitate to reach out to us. Our dedicated team is here to assist you.
              </p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.1, backgroundColor: 'var(--color-brand-accent)' }}
                    className="w-12 h-12 bg-brand-bg-secondary rounded-full flex items-center justify-center transition-colors"
                  >
                    <Icon size={20} className="text-brand-text-primary" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Address', value: 'Khouribga, Morocco', Icon: MapPin },
            { label: 'Email Address', value: 'ama.khouribga@gmail.com', Icon: Mail },
            { label: 'Phone Numbers', value: '+212 657 262 102 / +212 610 424 958', Icon: Phone },
            { label: 'Working Hours', value: '9:00 AM - 6:00 PM', Icon: Clock },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-brand-text-primary/5 flex flex-col justify-between group hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <span className="text-sm font-medium text-brand-text-secondary uppercase tracking-wider">{item.label}</span>
                <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center text-white group-hover:bg-brand-green transition-colors">
                  <ArrowUpRight size={18} />
                </div>
              </div>
              <p className="text-lg font-bold text-brand-text-primary">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Main Contact Section */}
        <section className="bg-white rounded-[3rem] p-8 md:p-12 mb-12 shadow-sm border border-black/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Side: Image & Extra Info */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80" 
                  alt="Helping hands"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-red/10 mix-blend-multiply" />
              </div>
              
              <div className="bg-brand-bg-secondary p-8 rounded-[2rem] flex justify-between items-center group cursor-pointer hover:bg-brand-red/10 transition-colors">
                <div>
                  <p className="text-sm text-brand-text-secondary mb-1">Partnerships and Collaborations</p>
                  <p className="text-lg font-bold text-brand-text-primary">ama.khouribga@gmail.com</p>
                </div>
                <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center text-white group-hover:bg-brand-green transition-colors">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="lg:col-span-7">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold ml-2 text-brand-text-primary">First Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter First Name"
                      className="w-full bg-brand-bg-secondary border-none rounded-2xl p-5 focus:ring-2 ring-brand-red transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold ml-2 text-brand-text-primary">Last Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter Last Name"
                      className="w-full bg-brand-bg-secondary border-none rounded-2xl p-5 focus:ring-2 ring-brand-red transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold ml-2 text-brand-text-primary">Email</label>
                    <input 
                      type="email" 
                      placeholder="Enter your Email"
                      className="w-full bg-brand-bg-secondary border-none rounded-2xl p-5 focus:ring-2 ring-brand-red transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold ml-2 text-brand-text-primary">Phone</label>
                    <input 
                      type="tel" 
                      placeholder="Enter Phone Number"
                      className="w-full bg-brand-bg-secondary border-none rounded-2xl p-5 focus:ring-2 ring-brand-red transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold ml-2 text-brand-text-primary">Message</label>
                  <textarea 
                    placeholder="Enter your Message"
                    rows={5}
                    className="w-full bg-brand-bg-secondary border-none rounded-[2rem] p-6 focus:ring-2 ring-brand-red transition-all resize-none"
                  />
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 rounded border-brand-text-primary/10 text-brand-red focus:ring-brand-red" />
                    <span className="text-sm text-brand-text-secondary group-hover:text-brand-text-primary transition-colors">I agree with Terms of Use and Privacy Policy</span>
                  </label>
                  <button className="bg-brand-red text-white px-10 py-5 rounded-full font-bold flex items-center gap-3 hover:bg-brand-green transition-all shadow-lg active:scale-95">
                    Send your Message
                    <Send size={18} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-brand-text-secondary max-w-2xl mx-auto">
              Find quick answers to common questions about our services and how you can get involved.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-[2rem] shadow-sm border border-black/5 overflow-hidden"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-brand-bg-secondary transition-colors"
                >
                  <span className="text-lg font-bold text-brand-text-primary">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-10 h-10 bg-brand-bg-secondary rounded-full flex items-center justify-center text-brand-text-primary"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-8 pb-8 text-brand-text-secondary leading-relaxed border-t border-brand-text-primary/10 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* Secondary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-brand-text-primary/5">
            <h3 className="text-2xl font-bold mb-4 text-brand-text-primary">Volunteer Opportunities</h3>
            <p className="text-brand-text-secondary mb-8 leading-relaxed">
              Interested in becoming a volunteer and making a hands-on difference? Please visit our Volunteer page for more information and to fill out an application.
            </p>
            <button className="bg-brand-red text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-brand-green transition-all">
              Visit Page
              <ArrowUpRight size={18} />
            </button>
          </div>
          <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-brand-text-primary/5">
            <h3 className="text-2xl font-bold mb-4 text-brand-text-primary">Donation Information</h3>
            <p className="text-brand-text-secondary mb-8 leading-relaxed">
              To make a donation or learn more about our various giving options, visit our Donation page.
            </p>
            <button className="bg-brand-red text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-brand-green transition-all">
              Donation Page
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>

        {/* CTA Banner */}
        <section className="bg-brand-red rounded-[3.5rem] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-40 h-40 border-8 border-white rounded-full" />
            <div className="absolute bottom-10 right-10 w-60 h-60 border-8 border-white rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex flex-wrap gap-4 p-10">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="w-1 h-10 bg-white rotate-45 rounded-full" />
              ))}
            </div>
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-white">
              Support Our Mission and Help Empower the Youth of Khouribga
            </h2>
            <p className="text-white/80 text-lg mb-12">
              Your support will help provide essential training, cultural programs, and civic education to young people in our region.
            </p>
            
            <div className="bg-white/90 backdrop-blur-md p-4 rounded-full flex flex-col md:flex-row items-center justify-between gap-4 max-w-2xl mx-auto border border-white/20 shadow-xl">
              <p className="text-sm font-bold px-6 text-brand-text-primary">Join us today and help build a conscious and responsible future for our youth.</p>
              <button className="bg-brand-red text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-brand-green transition-all w-full md:w-auto justify-center">
                Join Us Now
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Contact;
