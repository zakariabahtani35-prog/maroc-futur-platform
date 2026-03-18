import React from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Impact', href: '/impact' },
    { name: 'News', href: '/news' },
    { name: 'Directory', href: '/directory' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-brand-red rounded-2xl flex items-center justify-center shadow-xl shadow-brand-red/20 group-hover:scale-110 transition-transform duration-500">
              <Globe className="w-7 h-7 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold text-brand-text-primary tracking-tight leading-none">
                AssocNet
              </span>
              <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-brand-red mt-1">
                Khouribga Region
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-[11px] font-bold uppercase tracking-[0.15em] transition-all relative py-2 group ${
                  isActive(item.href) ? 'text-brand-red' : 'text-brand-text-secondary hover:text-brand-red'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-brand-red transform origin-left transition-transform duration-300 ${
                  isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            ))}
            <Link to="/dashboard" className="px-8 py-3.5 bg-brand-text-primary text-white rounded-2xl font-bold text-[11px] uppercase tracking-widest hover:bg-brand-red transition-all shadow-xl shadow-black/10 hover:-translate-y-0.5 active:translate-y-0">
              Dashboard
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 rounded-2xl bg-brand-bg-secondary hover:bg-brand-red hover:text-white transition-all text-brand-text-primary shadow-sm"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-black/5 overflow-hidden shadow-2xl"
          >
            <div className="px-6 pt-4 pb-10 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-6 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all ${
                    isActive(item.href) 
                      ? 'bg-brand-red text-white' 
                      : 'text-brand-text-primary hover:bg-brand-bg-secondary hover:text-brand-red'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/dashboard"
                className="block px-6 py-5 rounded-2xl bg-brand-text-primary text-white font-bold text-sm uppercase tracking-widest text-center mt-6 shadow-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
