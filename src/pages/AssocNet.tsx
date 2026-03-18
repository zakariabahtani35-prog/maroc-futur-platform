import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  ShieldCheck, 
  PlusCircle, 
  Layers, 
  Coins, 
  Cpu, 
  BookOpen, 
  BarChart3, 
  AlertTriangle, 
  FastForward,
  Languages,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

type Language = 'en' | 'zgh' | 'fr';

interface ContentSection {
  id: string;
  icon: React.ReactNode;
  en: {
    title: string;
    description: string;
    details: string[];
  };
  zgh: {
    title: string;
    description: string;
    details: string[];
  };
  fr: {
    title: string;
    description: string;
    details: string[];
  };
}

const LanguageSelectorModal = ({ onSelect }: { onSelect: (lang: Language) => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-text-primary/60 backdrop-blur-2xl p-6"
    >
      <motion.div 
        initial={{ scale: 0.9, y: 40, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="bg-white rounded-[3.5rem] p-10 md:p-16 max-w-2xl w-full shadow-[0_40px_100px_rgba(0,0,0,0.2)] text-center relative overflow-hidden"
      >
        {/* Decorative background elements */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <div className="w-24 h-24 bg-brand-bg-secondary text-brand-red rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-inner">
            <Languages size={48} />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-text-primary mb-6 leading-tight">
            Select Your <br />
            <span className="text-brand-red italic">Preferred Language</span>
          </h2>
          
          <p className="text-brand-text-secondary font-medium mb-12 max-w-md mx-auto">
            Choose a language to explore the Association Network guide and resources.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { id: 'en', label: 'English', sub: 'International' },
              { id: 'fr', label: 'Français', sub: 'Régional' },
              { id: 'zgh', label: 'Tamaziɣt', sub: 'Amezwar' }
            ].map((l) => (
              <button
                key={l.id}
                onClick={() => onSelect(l.id as Language)}
                className="group flex flex-col items-center gap-4 p-8 rounded-[2.5rem] border border-brand-text-primary/5 hover:border-brand-red/20 hover:bg-brand-red/5 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-brand-bg-primary flex items-center justify-center text-brand-text-secondary group-hover:bg-brand-red group-hover:text-white transition-all shadow-sm">
                  <span className="text-xs font-black uppercase tracking-widest">{l.id}</span>
                </div>
                <div>
                  <div className="font-bold text-lg text-brand-text-primary group-hover:text-brand-red transition-colors">{l.label}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-brand-text-secondary opacity-40">{l.sub}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const PageHeader = ({ currentLang, onLangChange }: { currentLang: Language, onLangChange: (lang: Language) => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-28 z-40 max-w-7xl mx-auto px-6 mb-12 pointer-events-none"
    >
      <div className="flex justify-end pointer-events-auto">
        <div className="bg-white/80 backdrop-blur-2xl border border-black/5 rounded-full p-1.5 shadow-2xl flex items-center gap-1">
          <div className="flex items-center gap-2 px-4 py-2 border-r border-black/5 mr-1">
            <Languages size={14} className="text-brand-red" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-text-secondary opacity-60">Language</span>
          </div>
          {[
            { id: 'en', label: 'EN' },
            { id: 'fr', label: 'FR' },
            { id: 'zgh', label: 'ZGH' }
          ].map((l) => (
            <button
              key={l.id}
              onClick={() => onLangChange(l.id as Language)}
              className={`px-5 py-2 rounded-full text-[10px] font-black tracking-widest transition-all ${
                currentLang === l.id 
                  ? 'bg-brand-red text-white shadow-lg shadow-brand-red/20' 
                  : 'text-brand-text-secondary hover:text-brand-red hover:bg-brand-red/5'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const AssocNet = () => {
  const [lang, setLang] = React.useState<Language>(() => {
    const saved = localStorage.getItem('assocnet_lang');
    return (saved as Language) || 'en';
  });
  
  const [showModal, setShowModal] = React.useState(() => {
    return !localStorage.getItem('assocnet_lang_selected');
  });

  const handleLangSelect = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('assocnet_lang', newLang);
    localStorage.setItem('assocnet_lang_selected', 'true');
    setShowModal(false);
  };

  const sections: ContentSection[] = [
    {
      id: 'overview',
      icon: <Globe size={24} />,
      en: {
        title: 'Overview',
        description: 'A comprehensive look at the association landscape in Morocco, focusing on youth-led initiatives and regional development.',
        details: [
          'Historical context of civil society',
          'Current trends in youth engagement',
          'Impact of associations on local governance'
        ]
      },
      zgh: {
        title: 'Aglam amatu',
        description: 'Aglam amatu n tmsmunin di Lmerruk, s umezwer n isenfaren n yilmezyen d unegmu n tmiwa.',
        details: [
          'Amezruy n tmetti taɣrimt',
          'Ideggan n tura n yilmezyen',
          'Askar n tmsmunin deg udabbu n tmiwa'
        ]
      },
      fr: {
        title: 'Aperçu',
        description: 'Un regard complet sur le paysage associatif au Maroc, axé sur les initiatives menées par les jeunes et le développement régional.',
        details: [
          'Contexte historique de la société civile',
          'Tendances actuelles de l\'engagement des jeunes',
          'Impact des associations sur la gouvernance locale'
        ]
      }
    },
    {
      id: 'legal',
      icon: <ShieldCheck size={24} />,
      en: {
        title: 'Legal Framework',
        description: 'Understanding the laws and regulations governing associations in Morocco, including the 1958 Dahir and constitutional reforms.',
        details: [
          'Dahir of 1958 and its amendments',
          '2011 Constitutional rights for civil society',
          'Compliance and reporting requirements'
        ]
      },
      zgh: {
        title: 'Asati azrfan',
        description: 'Gzu n isadufen d ilugan i d-yessawalen ɣef tmsmunin di Lmerruk, gar-asen Daher n 1958 d ibeddilen n udustur.',
        details: [
          'Daher n 1958 d ibeddilen-is',
          'Izerfan n udustur n 2011 i tmetti taɣrimt',
          'Ibeddilen n uselmed d usenfar'
        ]
      },
      fr: {
        title: 'Cadre Juridique',
        description: 'Comprendre les lois et règlements régissant les associations au Maroc, y compris le Dahir de 1958 et les réformes constitutionnelles.',
        details: [
          'Dahir de 1958 et ses amendements',
          'Droits constitutionnels de 2011 pour la société civile',
          'Exigences de conformité et de reporting'
        ]
      }
    },
    {
      id: 'create',
      icon: <PlusCircle size={24} />,
      en: {
        title: 'How to Create',
        description: 'A step-by-step guide to establishing a legal association, from the founding assembly to administrative filing.',
        details: [
          'Drafting the statutes and internal regulations',
          'Holding the constitutive general assembly',
          'Filing the legal deposit with local authorities'
        ]
      },
      zgh: {
        title: 'Mamek ara t-tesnulfud',
        description: 'Amnir n ubrid s ubrid i usbeddi n tmsmunt tazrfant, seg uswir n usbeddi ɣer ukaram n udabbu.',
        details: [
          'Asenfar n isadufen d ilugan n daxel',
          'Asbeddi n uswir amatu n usbeddi',
          'Asers n ukaram azrfan ɣer udabbu n tmiwa'
        ]
      },
      fr: {
        title: 'Comment Créer',
        description: 'Un guide étape par étape pour établir une association légale, de l\'assemblée fondatrice au dépôt administratif.',
        details: [
          'Rédaction des statuts et du règlement intérieur',
          'Tenue de l\'assemblée générale constitutive',
          'Dépôt du dossier légal auprès des autorités locales'
        ]
      }
    },
    {
      id: 'types',
      icon: <Layers size={24} />,
      en: {
        title: 'Types of Associations',
        description: 'Exploring the different categories of non-profit organizations and their specific missions.',
        details: [
          'Local and regional associations',
          'National interest organizations',
          'Thematic networks and federations'
        ]
      },
      zgh: {
        title: 'Anawen n tmsmunin',
        description: 'Anadi n tmiwa n tmsmunin ur nelli n rrbeḥ d isenfaren-nsent.',
        details: [
          'Timsmunin n tmiwa d tmiwa',
          'Timsmunin n unamek anamur',
          'Izeḍwan d tfederasiyin'
        ]
      },
      fr: {
        title: 'Types d\'Associations',
        description: 'Explorer les différentes catégories d\'organisations à but non lucratif et leurs missions spécifiques.',
        details: [
          'Associations locales et régionales',
          'Organisations d\'intérêt national',
          'Réseaux thématiques et fédérations'
        ]
      }
    },
    {
      id: 'funding',
      icon: <Coins size={24} />,
      en: {
        title: 'Funding',
        description: 'Strategies for financial sustainability, including public grants, private partnerships, and international cooperation.',
        details: [
          'Public funding and state subsidies',
          'Corporate social responsibility (CSR) partnerships',
          'International grants and crowdfunding'
        ]
      },
      zgh: {
        title: 'Asfari n tdrimt',
        description: 'Tifratin n tdrimt i tmsmunin, gar-asent tallelt n ddula, tallelt n tmiwa d tallelt tagraɣlant.',
        details: [
          'Asfari n ddula d tallelt n ddula',
          'Tallelt n tmiwa n tmetti (CSR)',
          'Tallelt tagraɣlant d usfari n tmetti'
        ]
      },
      fr: {
        title: 'Financement',
        description: 'Stratégies pour la durabilité financière, y compris les subventions publiques, les partenariats privés et la coopération internationale.',
        details: [
          'Financement public et subventions de l\'État',
          'Partenariats de responsabilité sociale des entreprises (RSE)',
          'Subventions internationales et financement participatif'
        ]
      }
    },
    {
      id: 'digital',
      icon: <Cpu size={24} />,
      en: {
        title: 'Digital Tools',
        description: 'Leveraging technology for association management, communication, and impact measurement.',
        details: [
          'Project management and collaboration platforms',
          'Social media and digital advocacy strategies',
          'Data collection and analysis tools'
        ]
      },
      zgh: {
        title: 'Imassen n udigiti',
        description: 'Askar n tteknulujit deg uselmed n tmsmunt, asiwel d uskar n usenfar.',
        details: [
          'Imassen n uselmed n isenfaren d ubrid n tallelt',
          'Izeḍwan imettiyen d ubrid n udigiti',
          'Imassen n ugem d uskar n isfka'
        ]
      },
      fr: {
        title: 'Outils Numériques',
        description: 'Tirer parti de la technologie pour la gestion associative, la communication et la mesure de l\'impact.',
        details: [
          'Plateformes de gestion de projet et de collaboration',
          'Médias sociaux et stratégies de plaidoyer numérique',
          'Outils de collecte et d\'analyse de données'
        ]
      }
    },
    {
      id: 'directory',
      icon: <BookOpen size={24} />,
      en: {
        title: 'Directory',
        description: 'A database of active associations in the Khouribga region and across Morocco.',
        details: [
          'Searchable database by sector and region',
          'Contact information for key stakeholders',
          'Partnership opportunity listings'
        ]
      },
      zgh: {
        title: 'Akaram n tmsmunin',
        description: 'Akaram n tmsmunin iqeddcen di tmiwa n Xuribga d Lmerruk amatu.',
        details: [
          'Akaram n unadi s uḥric d tmiwa',
          'Isfka n usiwel i wid iqeddcen',
          'Ikaramen n tallelt d ubrid n tallelt'
        ]
      },
      fr: {
        title: 'Annuaire',
        description: 'Une base de données des associations actives dans la région de Khouribga et à travers le Maroc.',
        details: [
          'Base de données consultable par secteur et région',
          'Informations de contact pour les parties prenantes clés',
          'Listes d\'opportunités de partenariat'
        ]
      }
    },
    {
      id: 'statistics',
      icon: <BarChart3 size={24} />,
      en: {
        title: 'Statistics',
        description: 'Key data points on the growth, reach, and impact of the association sector.',
        details: [
          'Number of active associations by region',
          'Youth participation rates in civil society',
          'Economic contribution of the non-profit sector'
        ]
      },
      zgh: {
        title: 'Tisnattayin',
        description: 'Isfka n unamek ɣef unegmu, asiwel d uskar n uḥric n tmsmunin.',
        details: [
          'Amḍan n tmsmunin iqeddcen s tmiwa',
          'Aswir n uqeddec n yilmezyen deg tmetti taɣrimt',
          'Askar n tdrimt n uḥric ur nelli n rrbeḥ'
        ]
      },
      fr: {
        title: 'Statistiques',
        description: 'Points de données clés sur la croissance, la portée et l\'impact du secteur associatif.',
        details: [
          'Nombre d\'associations actives par région',
          'Taux de participation des jeunes dans la société civile',
          'Contribution économique du secteur à but non lucratif'
        ]
      }
    },
    {
      id: 'challenges',
      icon: <AlertTriangle size={24} />,
      en: {
        title: 'Challenges',
        description: 'Identifying the obstacles faced by associations, from bureaucratic hurdles to resource scarcity.',
        details: [
          'Administrative and bureaucratic constraints',
          'Limited access to sustainable funding',
          'Capacity building and professionalization needs'
        ]
      },
      zgh: {
        title: 'Uguren',
        description: 'Anadi n uguren i d-ttmagarent tmsmunin, seg uguren n udabbu ɣer uguren n tdrimt.',
        details: [
          'Uguren n udabbu d ukaram',
          'Asfari n tdrimt ur nelli d amezray',
          'Asnerni n tzemmar d ubrid n uselmed'
        ]
      },
      fr: {
        title: 'Défis',
        description: 'Identifier les obstacles rencontrés par les associations, des entraves bureaucratiques à la rareté des ressources.',
        details: [
          'Contraintes administratives et bureaucratiques',
          'Accès limité à un financement durable',
          'Besoins en renforcement des capacités et professionnalisation'
        ]
      }
    },
    {
      id: 'future',
      icon: <FastForward size={24} />,
      en: {
        title: 'Future',
        description: 'The roadmap for the next generation of civil society in Morocco.',
        details: [
          'Digital transformation of the sector',
          'Strengthening participatory democracy',
          'Global networking and regional integration'
        ]
      },
      zgh: {
        title: 'Imal',
        description: 'Abrid n ubrid i tsuta i d-iteddun n tmetti taɣrimt di Lmerruk.',
        details: [
          'Abeddil n udigiti n uḥric',
          'Asnerni n tmetti n uqeddec',
          'Asiwel agraɣlan d ubrid n tmiwa'
        ]
      },
      fr: {
        title: 'Futur',
        description: 'La feuille de route pour la prochaine génération de la société civile au Maroc.',
        details: [
          'Transformation numérique du secteur',
          'Renforcement de la démocratie participative',
          'Mise en réseau mondiale et intégration régionale'
        ]
      }
    }
  ];

  const getTranslation = (key: 'network' | 'assoc' | 'net' | 'guide' | 'contribute' | 'knowledge' | 'help' | 'submit' | 'explore') => {
    const translations = {
      network: { en: 'Association Network', zgh: 'Azeṭṭa n tmsmunin', fr: 'Réseau Associatif' },
      assoc: { en: 'Assoc', zgh: 'Timsmunin', fr: 'Réseau' },
      net: { en: 'Network', zgh: 'Azeṭṭa', fr: 'Associatif' },
      guide: { en: 'A comprehensive guide and resource hub for associations in the Khouribga region and throughout Morocco.', zgh: 'Amnir amatu d uḥric n isfka i tmsmunin di tmiwa n Xuribga d Lmerruk amatu.', fr: 'Un guide complet et un centre de ressources pour les associations de la région de Khouribga et de tout le Maroc.' },
      contribute: { en: 'Contribute to the', zgh: 'Ttekki deg', fr: 'Contribuer à la' },
      knowledge: { en: 'Knowledge Base', zgh: 'Isfka n tmusni', fr: 'Base de Connaissances' },
      help: { en: 'Help us keep this directory and resource hub up to date. Share your association\'s data or suggest new resources.', zgh: 'Ejj-aɣ ad nerr akaram-agi d uḥric-agi n isfka d amezray. Bḍu isfka n tmsmunt-ik neɣ efk-d isenfaren imaynuten.', fr: 'Aidez-nous à maintenir cet annuaire et ce centre de ressources à jour. Partagez les données de votre association ou suggérez de nouvelles ressources.' },
      submit: { en: 'Submit Data', zgh: 'Azen isfka', fr: 'Envoyer des Données' },
      explore: { en: 'Explore Section', zgh: 'Anadi n uḥric', fr: 'Explorer la Section' }
    };
    return translations[key][lang];
  };

  return (
    <div className="bg-brand-bg-primary text-brand-text-primary font-sans min-h-screen pt-32 pb-20">
      <AnimatePresence>
        {showModal && <LanguageSelectorModal onSelect={handleLangSelect} />}
      </AnimatePresence>

      <PageHeader currentLang={lang} onLangChange={handleLangSelect} />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-brand-text-primary/10 pb-12">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-brand-red font-bold text-xs uppercase tracking-[0.2em] mb-6"
            >
              <Globe size={16} />
              {getTranslation('network')}
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-serif leading-[0.9] mb-8"
            >
              {getTranslation('assoc')} <br />
              <span className="text-brand-red italic">{getTranslation('net')}</span>
            </motion.h1>
          </div>
          
          <div className="flex flex-col items-end gap-6">
            <p className="text-brand-text-secondary text-right max-w-xs text-sm leading-relaxed">
              {getTranslation('guide')}
            </p>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {sections.map((section, idx) => (
              <motion.div
                key={section.id + lang}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="group bg-brand-bg-secondary p-10 rounded-[2.5rem] border border-brand-text-primary/5 hover:border-brand-red/20 hover:shadow-2xl transition-all flex flex-col"
              >
                <div className="w-14 h-14 bg-brand-bg-primary text-brand-red rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform shadow-sm">
                  {section.icon}
                </div>
                
                <h3 className="text-2xl font-serif mb-4 text-brand-text-primary group-hover:text-brand-red transition-colors">
                  {section[lang].title}
                </h3>
                
                <p className="text-brand-text-secondary text-sm leading-relaxed mb-8 flex-1">
                  {section[lang].description}
                </p>
                
                <div className="space-y-3 mb-8">
                  {section[lang].details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-medium text-brand-text-secondary opacity-70">
                      <ChevronRight size={14} className="text-brand-red" />
                      {detail}
                    </div>
                  ))}
                </div>
                
                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-accent group-hover:text-brand-green transition-colors">
                  {getTranslation('explore')}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="bg-brand-red rounded-[3.5rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
              {getTranslation('contribute')} <br />
              <span className="italic">{getTranslation('knowledge')}</span>
            </h2>
            <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto">
              {getTranslation('help')}
            </p>
            <button className="bg-white text-brand-red px-10 py-4 rounded-full font-bold hover:bg-brand-bg-secondary transition-all shadow-2xl">
              {getTranslation('submit')}
            </button>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-black/20 rounded-full blur-3xl"></div>
        </div>
      </section>
    </div>
  );
};

export default AssocNet;
