import React from 'react';
import { Globe, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/ama.khouribga' },
    { icon: Twitter, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Instagram, href: '#' },
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Impact', href: '/impact' },
    { name: 'Latest News', href: '/news' },
    { name: 'Directory', href: '/directory' },
  ];

  const resources = [
    { name: 'Member Dashboard', href: '/dashboard' },
    { name: 'Join AMA', href: '/get-involved' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ];

  return (
    <footer className="bg-brand-text-primary text-white pt-32 pb-16 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          <div className="space-y-10">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-brand-red rounded-2xl flex items-center justify-center shadow-xl shadow-brand-red/20 group-hover:scale-110 transition-transform duration-500">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold text-white tracking-tight leading-none">
                  AssocNet
                </span>
                <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-brand-red mt-1">
                  Khouribga Region
                </span>
              </div>
            </Link>
            <p className="text-white/40 leading-relaxed text-sm font-medium max-w-xs">
              Empowering the youth of Khouribga and the Beni Mellal-Khenifra region through civic education, leadership, and regional advocacy since 2014.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white/40 hover:text-white hover:bg-brand-red transition-all border border-white/5 hover:border-brand-red shadow-sm"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-red mb-10">Quick Links</h3>
            <ul className="space-y-5">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-white/60 hover:text-white transition-all text-sm font-bold flex items-center gap-2 group">
                    {item.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 group-hover:translate-y-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-red mb-10">Resources</h3>
            <ul className="space-y-5">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-white/60 hover:text-white transition-all text-sm font-bold flex items-center gap-2 group">
                    {item.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 group-hover:translate-y-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-red mb-10">Contact Us</h3>
            <ul className="space-y-8">
              <li className="flex items-start gap-5 text-white/60 group">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all border border-white/5">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold leading-relaxed pt-1">Khouribga, Morocco<br />Beni Mellal-Khenifra Region</span>
              </li>
              <li className="flex items-center gap-5 text-white/60 group">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all border border-white/5">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold">0657262102 / 0610424958</span>
              </li>
              <li className="flex items-center gap-5 text-white/60 group">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all border border-white/5">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold">ama.khouribga@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
            <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.2em]">© 2026 AssocNet. All rights reserved.</p>
            <div className="h-4 w-px bg-white/10 hidden md:block" />
            <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.2em]">Developed by AMA Tech Team</p>
          </div>
          <div className="flex gap-12 text-[10px] font-bold uppercase tracking-[0.2em]">
            <a href="#" className="text-white/20 hover:text-brand-red transition-colors">Privacy</a>
            <a href="#" className="text-white/20 hover:text-brand-red transition-colors">Terms</a>
            <a href="#" className="text-white/20 hover:text-brand-red transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
