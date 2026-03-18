/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Menu, X, ChevronDown, ArrowRight, Instagram, Facebook, LogOut, LayoutDashboard, ShieldCheck, Users as UsersIcon, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Toaster } from 'react-hot-toast';
import { AuthProvider, useAuth } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const Members = lazy(() => import('./pages/Members'));
const News = lazy(() => import('./pages/News'));
const Impact = lazy(() => import('./pages/Impact'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Events = lazy(() => import('./pages/Events'));
const Partners = lazy(() => import('./pages/Partners'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Reports = lazy(() => import('./pages/Reports'));
const GetInvolved = lazy(() => import('./pages/GetInvolved'));
const Donate = lazy(() => import('./pages/Donate'));
const Contact = lazy(() => import('./pages/Contact'));
const Login = lazy(() => import('./pages/Login'));
const MembersPrivate = lazy(() => import('./pages/MembersPrivate'));
const PrivateContent = lazy(() => import('./pages/PrivateContent'));
const AssocNet = lazy(() => import('./pages/AssocNet'));
import { AuthProvider as AppAuthProvider } from './app-private/services/AuthContext';
import { DashboardRoutes } from './app-private/DashboardRoutes';

const PageLoader = () => {
  const { t } = useTranslation();
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-brand-bg-secondary/50 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center gap-6 p-8 rounded-[2rem] bg-white shadow-2xl border border-black/5 animate-in fade-in zoom-in duration-300">
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 border-4 border-brand-red/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-brand-red rounded-full border-t-transparent animate-spin"></div>
          <div className="w-6 h-6 bg-brand-green rounded-full animate-pulse"></div>
        </div>
        <p className="text-brand-text-primary text-sm font-bold tracking-widest uppercase animate-pulse">
          {t('auth.loading') || 'Chargement...'}
        </p>
      </div>
    </div>
  );
};

// --- Global Page Transition Wrapper ---
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const shouldReduceMotion = useReducedMotion();
  
  if (shouldReduceMotion) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.05, rotateX: -5, filter: 'blur(10px)' }}
      animate={{ opacity: 1, scale: 1, rotateX: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 0.92, rotateX: 8, filter: 'blur(12px)' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full origin-top"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </motion.div>
  );
};

// --- Shared Components ---

// --- Language Switcher ---
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  
  const languages = [
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'amz', label: 'Tamazight', flag: 'ⵣ' }
  ];

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  return (
    <div className="relative group z-[100] pointer-events-auto">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-2 rounded-full hover:bg-black/5 transition-colors font-bold text-sm"
        aria-label="Changer de langue"
      >
         <span className="text-lg md:text-xl leading-none">{currentLang.flag}</span>
         <span className="hidden md:inline uppercase text-brand-text-primary">{currentLang.code}</span>
         <ChevronDown size={14} className={`text-brand-text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
           <motion.div 
             initial={{ opacity: 0, y: 10, scale: 0.95 }} 
             animate={{ opacity: 1, y: 0, scale: 1 }} 
             exit={{ opacity: 0, y: 10, scale: 0.95 }}
             className="absolute right-0 top-full mt-2 w-36 bg-white/95 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] rounded-2xl p-2 border border-black/5"
           >
             {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => { i18n.changeLanguage(l.code); setIsOpen(false); }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold transition-all ${
                    i18n.language === l.code ? 'bg-brand-red/10 text-brand-red' : 'hover:bg-black/5 text-brand-text-primary'
                  }`}
                >
                  <span className="text-lg leading-none">{l.flag}</span>
                  {l.label}
                </button>
             ))}
           </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const { user, signOut } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setShowMore(false);
  }, [location]);

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  const { t } = useTranslation();

  const mainLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.projects'), path: '/projects' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const moreLinks = [
    { name: t('nav.impact'), path: '/impact' },
    { name: t('nav.news'), path: '/news' },
    { name: t('nav.events'), path: '/events' },
    { name: t('nav.members'), path: '/members' },
    { name: t('nav.partners'), path: '/partners' },
    { name: t('nav.gallery'), path: '/gallery' },
    { name: t('nav.assocNet'), path: '/assoc-net' },
    { name: t('nav.reports'), path: '/reports' },
    { name: t('nav.getInvolved'), path: '/get-involved' },
  ];

  const privateLinks = [
    { name: t('nav.dashboard'), path: '/dashboard', icon: <LayoutDashboard size={14} /> },
    { name: 'Member Directory', path: '/members-private', icon: <UsersIcon size={14} /> },
    { name: 'Private Content', path: '/private-content', icon: <ShieldCheck size={14} /> },
  ];

  const allLinks = [...mainLinks, ...moreLinks, { name: t('nav.donate'), path: '/donate' }];

  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out pointer-events-none ${
        scrolled ? 'py-2' : 'py-4 md:py-5'
      } px-4 md:px-6`}
    >
      {/* Scroll Progress Indicator */}
      <motion.div 
        className="absolute top-0 left-0 h-[2px] bg-brand-red z-[60]"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav 
        className={`max-w-7xl mx-auto pointer-events-auto transition-all duration-700 ease-in-out ${
          scrolled 
            ? 'bg-white/85 backdrop-blur-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-white/20 py-1.5 px-4 md:px-6 rounded-full' 
            : 'bg-transparent border-transparent py-2.5 px-2 md:px-6 rounded-[2rem]'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group pointer-events-auto relative z-10">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={`relative flex items-center justify-center overflow-hidden rounded-full shadow-md bg-white border border-black/5 transition-all duration-700 ease-out ${
                scrolled ? 'w-10 h-10 p-[2px]' : 'w-14 h-14 p-[3px]'
              }`}
            >
              <img 
                src="https://wa9tna.wordpress.com/wp-content/uploads/2026/02/d8aad8b5d985d98ad985-d8a8d8afd988d986-d8b9d986d988d8a7d986-8.png" 
                alt="AMA Logo" 
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/logo/200/200';
                }}
              />
            </motion.div>
            <span className={`font-black tracking-widest text-brand-text-primary transition-all duration-700 ${
              scrolled ? 'text-base opacity-100' : 'text-xl opacity-0 w-0 overflow-hidden md:opacity-100 md:w-auto'
            }`}>
              AMA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 relative z-1">
            {mainLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className={`relative px-4 py-2 text-[13px] font-bold transition-colors duration-300 group z-10 ${isActive ? 'text-brand-text-primary' : 'text-brand-text-secondary hover:text-brand-text-primary'}`}
                >
                  <span className="relative z-20">
                    {link.name}
                  </span>
                  {isActive && (
                    <motion.div 
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-brand-green/10 rounded-full -z-10"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              );
            })}
            
            {/* More Dropdown */}
            <div className="relative">
              <button 
                onMouseEnter={() => setShowMore(true)}
                onClick={() => setShowMore(!showMore)}
                className="flex items-center gap-1 px-4 py-3 text-[13px] font-bold text-brand-text-primary hover:text-brand-green transition-all duration-300 min-h-[44px]"
                aria-label="Plus d'options"
              >
                Plus <ChevronDown size={14} className={`transition-transform duration-300 ${showMore ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {showMore && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    onMouseLeave={() => setShowMore(false)}
                    className="absolute top-full right-0 mt-4 w-64 bg-white/90 backdrop-blur-2xl border border-black/5 rounded-[2rem] shadow-2xl p-3 overflow-hidden"
                  >
                    <div className="grid grid-cols-1 gap-1">
                      {moreLinks.map((link) => (
                        <Link 
                          key={link.name} 
                          to={link.path} 
                          className="block px-5 py-3 text-[13px] font-bold text-brand-text-primary hover:text-brand-green hover:bg-brand-green/5 rounded-2xl transition-all duration-200"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex items-center gap-1 md:gap-3">
            <LanguageSwitcher />

            {!user ? (
              <Link 
                to="/login"
                className="hidden md:block px-4 py-2 text-[13px] font-bold text-brand-text-primary hover:text-brand-green transition-colors"
              >
                {t('nav.login')}
              </Link>
            ) : (
              <Link 
                to="/dashboard"
                className="hidden md:flex bg-brand-bg-secondary text-brand-text-primary px-4 py-2 rounded-full text-[13px] font-bold hover:bg-brand-green hover:text-white transition-all items-center gap-2 shadow-sm border border-black/5"
              >
                <LayoutDashboard size={16} />
                Dashboard
              </Link>
            )}
            <Link 
              to="/donate"
              className={`hidden sm:flex bg-brand-red text-white transition-all duration-700 active:scale-95 items-center gap-2 group shadow-xl shadow-brand-red/20 ${
                scrolled ? 'px-5 py-2 text-[12px]' : 'px-7 py-3 text-[13px]'
              } rounded-full font-bold hover:bg-brand-green`}
            >
              {t('nav.donate')}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Mobile Toggle */}
            <button 
              className="lg:hidden p-3 hover:bg-black/5 rounded-full transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 top-0 left-0 w-full h-screen bg-white z-[100] lg:hidden"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-center mb-12">
                  <span className="text-2xl font-black tracking-widest">AMA</span>
                  <button onClick={() => setIsOpen(false)} className="p-2 bg-brand-bg-secondary rounded-full">
                    <X size={24} />
                  </button>
                </div>
                
                <div className="flex flex-col gap-2 overflow-y-auto flex-1">
                  {[...mainLinks, ...moreLinks].map((link, idx) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Link 
                        to={link.path} 
                        className={`block py-5 px-6 rounded-3xl text-[22px] md:text-2xl font-bold transition-all ${
                          location.pathname === link.path 
                            ? 'bg-brand-green/5 text-brand-green' 
                            : 'text-brand-text-primary hover:bg-brand-bg-secondary hover:text-brand-green'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-auto pt-8 border-t border-black/5 flex flex-col gap-4">
                  <Link 
                    to="/donate"
                    onClick={() => setIsOpen(false)}
                    className="w-full bg-brand-red text-white py-5 rounded-3xl font-bold text-xl text-center shadow-xl shadow-brand-red/20"
                  >
                    {t('nav.donate')}
                  </Link>
                  {!user ? (
                    <Link 
                      to="/login"
                      onClick={() => setIsOpen(false)}
                      className="w-full bg-brand-bg-secondary text-brand-text-primary py-5 rounded-3xl font-bold text-xl text-center"
                    >
                      {t('nav.login')}
                    </Link>
                  ) : (
                    <Link 
                      to="/dashboard"
                      onClick={() => setIsOpen(false)}
                      className="w-full bg-brand-bg-secondary text-brand-text-primary py-5 rounded-3xl font-bold text-xl flex items-center justify-center gap-3"
                    >
                      <LayoutDashboard size={24} />
                      Dashboard
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.div>
  );
};

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-brand-text-primary text-white pt-32 pb-20 wavy-border-top relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 
          className="text-5xl md:text-7xl font-bold tracking-tight mb-12 text-white"
          dangerouslySetInnerHTML={{ __html: t('footer.title') }}
        />
        <Link to="/get-involved" className="inline-block bg-brand-red text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-brand-green transition-all shadow-2xl">
          {t('footer.cta')}
        </Link>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-4 gap-12 text-left border-t border-white/10 pt-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-8 group">
              <motion.div 
                whileHover={{ scale: 1.05, rotate: [0, 5, -5, 0] }}
                transition={{ duration: 0.5 }}
                className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-red via-brand-green to-brand-red opacity-10 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
                <img 
                  src="https://wa9tna.wordpress.com/wp-content/uploads/2026/02/d8aad8b5d985d98ad985-d8a8d8afd988d986-d8b9d986d988d8a7d986-8.png" 
                  alt="Association Maroc de l'Avenir Logo" 
                  className="w-full h-full object-contain relative z-10 drop-shadow-2xl"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/logo/200/200';
                  }}
                />
              </motion.div>
            </Link>
            <p className="text-sm font-medium text-white/60 leading-relaxed mb-6">
              {t('footer.desc')}
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://web.facebook.com/profile.php?id=100064822625294" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-brand-red hover:text-white transition-all duration-300 hover:scale-110 active:scale-95"
                title="Facebook"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/ama.khouribga1/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-brand-red hover:text-white transition-all duration-300 hover:scale-110 active:scale-95"
                title="Instagram"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-white">{t('footer.org')}</h4>
            <ul className="space-y-4 text-sm font-medium text-white/60">
              <li><Link to="/about" className="hover:text-brand-red">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-brand-red">Projects</Link></li>
              <li><Link to="/impact" className="hover:text-brand-red">Our Impact</Link></li>
              <li><Link to="/members" className="hover:text-brand-red">Structure</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">{t('footer.community')}</h4>
            <ul className="space-y-4 text-sm font-medium text-white/60">
              <li><Link to="/news" className="hover:text-brand-red">News</Link></li>
              <li><Link to="/events" className="hover:text-brand-red">Events</Link></li>
              <li><Link to="/gallery" className="hover:text-brand-red">Gallery</Link></li>
              <li><Link to="/partners" className="hover:text-brand-red">Partners</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">{t('nav.resources')}</h4>
            <ul className="space-y-4 text-sm font-medium text-white/60">
              <li><Link to="/assoc-net" className="hover:text-brand-red">AssocNet Guide</Link></li>
              <li><Link to="/reports" className="hover:text-brand-red">Reports</Link></li>
              <li><Link to="/get-involved" className="hover:text-brand-red">Get Involved</Link></li>
              <li><Link to="/contact" className="hover:text-brand-red">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-20 text-sm font-medium text-white/40">
          © {new Date().getFullYear()} {t('footer.rights')}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl"></div>
    </footer>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Toaster 
          position="top-center" 
          toastOptions={{
            duration: 4000,
            className: 'text-sm font-medium shadow-xl rounded-2xl',
            style: { padding: '16px 24px', backgroundColor: '#fff', color: '#1A1A1A' },
            success: { iconTheme: { primary: '#0B7A3B', secondary: '#fff' } },
            error: { iconTheme: { primary: '#C1121F', secondary: '#fff' } }
          }} 
        />
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

function AppContent() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <div className="min-h-screen font-sans flex flex-col">
      {!isDashboard && <Navbar />}
      <main className="flex-1 flex flex-col relative w-full overflow-hidden" style={{ perspective: '1200px' }}>
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              {/* Wrapped all Route elements in PageTransition inside the Route element directly to trigger mounting correctly */}
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/about" element={<PageTransition><About /></PageTransition>} />
              <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
              <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
              <Route path="/impact" element={<PageTransition><Impact /></PageTransition>} />
              <Route path="/news" element={<PageTransition><News /></PageTransition>} />
              <Route path="/events" element={<PageTransition><Events /></PageTransition>} />
              <Route path="/members" element={<PageTransition><Members /></PageTransition>} />
              <Route path="/partners" element={<PageTransition><Partners /></PageTransition>} />
              <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
              <Route path="/reports" element={<PageTransition><Reports /></PageTransition>} />
              <Route path="/assoc-net" element={<PageTransition><AssocNet /></PageTransition>} />
              <Route path="/get-involved" element={<PageTransition><GetInvolved /></PageTransition>} />
              <Route path="/donate" element={<PageTransition><Donate /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
              
              {/* Auth Routes */}
              <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
              
              {/* Private Routes */}
              <Route path="/dashboard/*" element={
                <PageTransition>
                  <AppAuthProvider>
                    <DashboardRoutes />
                  </AppAuthProvider>
                </PageTransition>
              } />
              <Route path="/members-private" element={
                <PageTransition>
                  <ProtectedRoute>
                    <MembersPrivate />
                  </ProtectedRoute>
                </PageTransition>
              } />
              <Route path="/private-content" element={
                <PageTransition>
                  <ProtectedRoute>
                    <PrivateContent />
                  </ProtectedRoute>
                </PageTransition>
              } />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      {!isDashboard && <Footer />}
    </div>
  );
}
