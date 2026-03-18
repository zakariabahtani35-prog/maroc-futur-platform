/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { MembershipModal } from '../components/MembershipModal';
import { 
  ChevronRight, 
  ArrowRight, 
  Zap, 
  Layers, 
  Palette, 
  MousePointer2,
  Image as ImageIcon,
  BarChart3,
  Play
} from 'lucide-react';

const Hero = () => {
  const { t } = useTranslation();
  const [isMembershipModalOpen, setIsMembershipModalOpen] = useState(false);

  return (
    <section className="pt-32 pb-20 px-6 overflow-hidden relative">
      <div className="max-w-4xl mx-auto text-center relative">
        {/* Floating Avatars */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-12 top-20 hidden lg:flex flex-col items-center"
        >
          <div className="w-12 h-12 rounded-full border-2 border-white shadow-lg overflow-hidden bg-brand-bg-secondary">
             <img src="https://wa9tna.wordpress.com/wp-content/uploads/2026/03/593266173_1294027592767983_7455172353346236964_n.jpg" alt="Daniel" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
          </div>
          <div className="bg-brand-green text-white text-[10px] px-2 py-0.5 rounded-full mt-1 font-bold">AMA</div>
          <div className="w-px h-12 bg-brand-green/30 mt-1"></div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-12 top-40 hidden lg:flex flex-col items-center"
        >
          <div className="w-12 h-12 rounded-full border-2 border-white shadow-lg overflow-hidden bg-brand-bg-secondary">
             <img src="https://wa9tna.wordpress.com/wp-content/uploads/2026/03/589128710_1289249413245801_5622754473928739901_n.jpg" alt="AMA" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
          </div>
          <div className="bg-brand-red text-white text-[10px] px-2 py-0.5 rounded-full mt-1 font-bold">AMA</div>
          <div className="w-px h-12 bg-brand-red/30 mt-1"></div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8"
        >
          <span dangerouslySetInnerHTML={{ __html: t('home.heroTitle') }} />
          <span className="inline-flex items-center gap-2">
            {t('home.heroHighlight')}
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-brand-bg-secondary">
                  <img src={`https://picsum.photos/seed/avatar${i}/100`} alt="avatar" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-brand-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t('home.heroDesc')}
        </motion.p>

        <motion.button 
          onClick={() => setIsMembershipModalOpen(true)}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-brand-red text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-brand-red/20 hover:bg-brand-green transition-all"
        >
          {t('home.heroCta')}
        </motion.button>
      </div>

      {/* Bento Grid */}
      <motion.div 
        className="max-w-6xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-12 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
        }}
      >
        <motion.div 
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          whileHover={{ y: -5 }}
          className="md:col-span-3 bg-brand-red text-white rounded-3xl p-8 flex flex-col justify-between min-h-[300px]"
        >
          <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white/20">
            <img src="https://picsum.photos/seed/user1/200" alt="user" className="w-full h-full object-cover" loading="lazy" referrerPolicy="no-referrer" />
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">{t('home.bento_stat1_num')}</div>
            <p className="text-sm font-medium opacity-80">{t('home.bento_stat1_desc')}</p>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-5 bg-brand-text-primary text-white rounded-3xl p-8 flex flex-col justify-between min-h-[300px] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-20">
            <Zap size={120} className="text-brand-red" />
          </div>
          <div className="w-16 h-16 bg-brand-red rounded-2xl flex items-center justify-center">
            <div className="w-8 h-8 bg-brand-text-primary rotate-45"></div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">{t('home.bento_stat2_num')}</div>
            <p className="text-sm font-medium opacity-60">{t('home.bento_stat2_desc')}</p>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-4 bg-brand-green text-white rounded-3xl p-8 flex flex-col justify-between min-h-[300px]"
        >
          <div className="flex justify-between items-start">
            <div className="text-4xl font-bold">{t('home.bento_regional_title')}</div>
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
              <Layers size={24} />
            </div>
          </div>
          <div>
            <p className="text-sm font-medium opacity-80 mb-6">{t('home.bento_regional_desc')}</p>
            <div className="bg-white text-brand-text-primary px-4 py-3 rounded-2xl flex items-center justify-between text-sm font-bold hover:bg-brand-red hover:text-white transition-colors cursor-pointer">
              {t('home.bento_explore')}
              <ArrowRight size={18} />
            </div>
          </div>
        </motion.div>
      </motion.div>
      <MembershipModal isOpen={isMembershipModalOpen} onClose={() => setIsMembershipModalOpen(false)} />
    </section>
  );
};

const HowItWorks = () => {
  const { t } = useTranslation();
  
  const steps = [
    {
      icon: <Zap className="text-brand-green" />,
      title: t('home.hiw_step1_title'),
      desc: t('home.hiw_step1_desc'),
      color: "bg-brand-green/5"
    },
    {
      icon: <Layers className="text-brand-red" />,
      title: t('home.hiw_step2_title'),
      desc: t('home.hiw_step2_desc'),
      color: "bg-brand-red/5"
    },
    {
      icon: <Palette className="text-brand-green" />,
      title: t('home.hiw_step3_title'),
      desc: t('home.hiw_step3_desc'),
      color: "bg-brand-green/5"
    },
    {
      icon: <MousePointer2 className="text-brand-red" />,
      title: t('home.hiw_step4_title'),
      desc: t('home.hiw_step4_desc'),
      color: "bg-brand-red/5"
    }
  ];

  return (
    <section className="py-24 px-6 bg-brand-bg-secondary">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 
            className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6 text-brand-text-primary"
            dangerouslySetInnerHTML={{ __html: t('home.hiw_title') }}
          />
          <p className="text-brand-text-secondary text-lg mb-8 max-w-md">
            {t('home.hiw_desc')}
          </p>
          <Link to="/about" className="inline-block bg-brand-red text-white w-max px-8 py-3 rounded-full font-bold hover:bg-brand-green transition-colors mt-4">
            {t('home.hiw_btn')}
          </Link>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
        >
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-brand-text-primary/10"
            >
              <div className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center mb-6`}>
                {step.icon}
              </div>
              <h3 className="font-bold text-lg mb-3 leading-snug text-brand-text-primary">{step.title}</h3>
              <p className="text-brand-text-secondary text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Process = () => {
  const { t } = useTranslation();
  const items = [
    {
      num: "1",
      title: t('home.process_step1_title'),
      desc: t('home.process_step1_desc')
    },
    {
      num: "2",
      title: t('home.process_step2_title'),
      desc: t('home.process_step2_desc')
    },
    {
      num: "3",
      title: t('home.process_step3_title'),
      desc: t('home.process_step3_desc')
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 max-w-3xl mx-auto leading-tight">
          {t('home.process_title')}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 rounded-3xl overflow-hidden h-80 relative bg-black flex items-center justify-center">
              <iframe 
                src="https://www.youtube.com/embed/kt_dL7nsYO0?autoplay=1&mute=1&loop=1&playlist=kt_dL7nsYO0" 
                width="100%" 
                height="100%" 
                style={{ border: 'none' }} 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                title="YouTube Video AutoPlay"
              ></iframe>
            </div>
            <div className="rounded-3xl overflow-hidden h-48 bg-brand-red p-6 flex flex-col justify-end text-white">
               <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-auto">
                  <ImageIcon size={20} />
               </div>
               <p className="font-bold text-sm">{t('home.process_media')}</p>
            </div>
            <div className="rounded-3xl overflow-hidden h-48 bg-brand-green p-6 flex flex-col justify-end text-white">
               <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-auto">
                  <BarChart3 size={20} />
               </div>
               <p className="font-bold text-sm">{t('home.process_sync')}</p>
            </div>
          </div>

          <motion.div 
            className="space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
          >
            {items.map((item, idx) => (
              <motion.div key={idx} variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }} className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-brand-text-primary/10 flex items-center justify-center font-bold text-sm text-brand-text-primary">
                  {item.num}
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3 text-brand-text-primary">{item.title}</h3>
                  <p className="text-brand-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const WavyBanner = ({ text, dark = false }: { text: string, dark?: boolean }) => {
  return (
    <div className={`${dark ? 'bg-brand-text-primary text-white' : 'bg-brand-red text-white'} py-20 wavy-border-top wavy-border-bottom overflow-hidden`}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          {text}
        </h2>
        {!dark && (
           <div className="flex justify-center gap-4 mt-8">
              <div className="w-10 h-1 bg-white rounded-full"></div>
              <div className="w-4 h-1 bg-white/20 rounded-full"></div>
           </div>
        )}
      </div>
    </div>
  );
};

const Templates = () => {
  const { t } = useTranslation();
  const templates = [
    { title: t('home.templates_card1'), color: "bg-brand-red", img: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&q=80" },
    { title: t('home.templates_card2'), color: "bg-brand-green", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80" },
    { title: t('home.templates_card3'), color: "bg-brand-green", img: "https://images.unsplash.com/photo-1539109132382-381bb3f1c2b3?auto=format&fit=crop&q=80" },
    { title: t('home.templates_card4'), color: "bg-brand-red", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80" }
  ];

  return (
    <section className="py-24 px-6 bg-brand-bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <h2 
            className="text-4xl md:text-5xl font-bold leading-tight text-brand-text-primary"
            dangerouslySetInnerHTML={{ __html: t('home.templates_title') }}
          />
          <Link to="/projects" className="flex items-center gap-2 text-brand-accent font-bold group">
            {t('home.templates_explore')}
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
        >
          {templates.map((template, idx) => (
            <motion.div 
              key={idx}
              variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className={`aspect-[4/5] rounded-[2rem] overflow-hidden relative ${template.color}`}>
                <img src={template.img} alt={template.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" loading="lazy" referrerPolicy="no-referrer" />
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-brand-text-primary/60 to-transparent text-white">
                  <h3 className="text-2xl font-bold">{template.title}</h3>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between px-2">
                <span className="text-sm text-brand-text-secondary font-medium">{t('home.templates_subtext')}</span>
                <Link to="/projects" className="text-brand-accent">
                  <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Hero />
      <HowItWorks />
      <WavyBanner text={t('home.wavy_banner_text')} />
      <Process />
      <Templates />
    </>
  );
};

export default Home;
