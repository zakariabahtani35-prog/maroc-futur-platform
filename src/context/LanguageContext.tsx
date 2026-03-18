import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'fr' | 'am';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Programs',
    'nav.projects': 'Projects',
    'nav.impact': 'Impact',
    'nav.news': 'News',
    'nav.events': 'Events',
    'nav.members': 'Members',
    'nav.partners': 'Partners',
    'nav.gallery': 'Gallery',
    'nav.reports': 'Reports',
    'nav.assocnet': 'AssocNet',
    'nav.getinvolved': 'Get Involved',
    'nav.contact': 'Contact',
    'nav.more': 'More',
    'nav.donate': 'Donate',
    'nav.login': 'Login',
    'assocnet.creation.title': '03. How to Create',
    'assocnet.creation.subtitle': 'A step-by-step guide to the administrative registration process in Morocco.',
    'assocnet.creation.step1.title': 'Founding Assembly',
    'assocnet.creation.step1.desc': 'Gather founding members to approve the statutes and elect the executive board.',
    'assocnet.creation.step2.title': 'Declaration File',
    'assocnet.creation.step2.desc': 'Prepare and submit the file (statutes, board list, IDs, minutes) to the local authority.',
    'assocnet.creation.step3.title': 'Provisional Receipt',
    'assocnet.creation.step3.desc': 'Obtain a provisional receipt immediately upon submitting the file to the Pacha or Caid.',
    'assocnet.creation.step4.title': 'Definitive Receipt',
    'assocnet.creation.step4.desc': 'Receive the definitive receipt within 60 days if no legal objections are raised.',
    'assocnet.creation.step': 'Step',
    'lang.selector.title': 'Choose Your Language',
    'lang.selector.desc': 'Select your preferred language to continue exploring AssocNet.',
    'lang.en': 'English',
    'lang.fr': 'Français',
    'lang.am': 'Amazigh (ⵜⴰⵎⴰⵣⵉⵖⵜ)',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.services': 'Programmes',
    'nav.projects': 'Projets',
    'nav.impact': 'Impact',
    'nav.news': 'Actualités',
    'nav.events': 'Événements',
    'nav.members': 'Membres',
    'nav.partners': 'Partenaires',
    'nav.gallery': 'Galerie',
    'nav.reports': 'Rapports',
    'nav.assocnet': 'AssocNet',
    'nav.getinvolved': 'S\'impliquer',
    'nav.contact': 'Contact',
    'nav.more': 'Plus',
    'nav.donate': 'Faire un don',
    'nav.login': 'Connexion',
    'assocnet.creation.title': '03. Comment Créer',
    'assocnet.creation.subtitle': 'Un guide étape par étape du processus d\'enregistrement administratif au Maroc.',
    'assocnet.creation.step1.title': 'Assemblée Constitutive',
    'assocnet.creation.step1.desc': 'Réunir les membres fondateurs pour approuver les statuts et élire le bureau exécutif.',
    'assocnet.creation.step2.title': 'Dossier de Déclaration',
    'assocnet.creation.step2.desc': 'Préparer et déposer le dossier (statuts, liste du bureau, CIN, procès-verbal) auprès de l\'autorité locale.',
    'assocnet.creation.step3.title': 'Récépissé Provisoire',
    'assocnet.creation.step3.desc': 'Obtenir un récépissé provisoire immédiatement après le dépôt du dossier chez le Pacha ou le Caïd.',
    'assocnet.creation.step4.title': 'Récépissé Définitif',
    'assocnet.creation.step4.desc': 'Recevoir le récépissé définitif dans un délai de 60 jours si aucune objection légale n\'est soulevée.',
    'assocnet.creation.step': 'Étape',
    'lang.selector.title': 'Choisissez votre langue',
    'lang.selector.desc': 'Sélectionnez votre langue préférée pour continuer à explorer AssocNet.',
    'lang.en': 'English',
    'lang.fr': 'Français',
    'lang.am': 'Amazigh (ⵜⴰⵎⴰⵣⵉⵖⵜ)',
  },
  am: {
    'nav.home': 'Amsawa (ⴰⵎⵙⴰⵡⴰ)',
    'nav.about': 'F tmazirt (ⴼ ⵜⵎⴰⵣⵉⵔⵜ)',
    'nav.services': 'Isntayn (ⵉⵙⵏⵜⴰⵢⵏ)',
    'nav.projects': 'Isuraf (ⵉⵙⵓⵔⴰⴼ)',
    'nav.impact': 'Asmussu (ⴰⵙⵎⵓⵙⵙⵓ)',
    'nav.news': 'Isalan (ⵉⵙⴰⵍⴰⵏ)',
    'nav.events': 'Imussutn (ⵉⵎⵓⵙⵙⵓⵜⵏ)',
    'nav.members': 'Imasladn (ⵉⵎⴰⵙⵍⴰⴷⵏ)',
    'nav.partners': 'Imddukkal (ⵉⵎⴷⴷⵓⴽⴽⴰⵍ)',
    'nav.gallery': 'Asfsr (ⴰⵙⴼⵙⵔ)',
    'nav.reports': 'Inqqisn (ⵉⵏⵇⵇⵉⵙⵏ)',
    'nav.assocnet': 'AssocNet',
    'nav.getinvolved': 'Ad ntek (ⴰⴷ ⵏⵜⴻⴽ)',
    'nav.contact': 'Anmaga (ⴰⵏⵎⴰⴳⴰ)',
    'nav.more': 'Uggar (ⵓⴳⴳⴰⵔ)',
    'nav.donate': 'Tiwisi (ⵜⵉⵡⵉⵙⵉ)',
    'nav.login': 'Anuḍ (ⴰⵏⵓⴹ)',
    'assocnet.creation.title': '03. Mamnk ad tskrt (ⵎⴰⵎⵏⴽ ⴰⴷ ⵜⵙⴽⵔⵜ)',
    'assocnet.creation.subtitle': 'Amnid n usurf n uselkm n ukaram g Lmɣrib.',
    'assocnet.creation.step1.title': 'Agraw n usenti (ⴰⴳraw ⵏ ⵓⵙⴻⵏⵜⵉ)',
    'assocnet.creation.step1.desc': 'Munen imasladn n usenti afad ad rzun isudaf d usit n usqqimu n uselway.',
    'assocnet.creation.step2.title': 'Akaram n uselkm (ⴰⴽⴰⵔⴰⵎ ⵏ ⵓⵙⴻⵍⴽⵎ)',
    'assocnet.creation.step2.desc': 'Hejjet d uselkm n ukaram (isudaf, talgamt n usqqimu, tinitin, ammas) dar tamsalt n tmazirt.',
    'assocnet.creation.step3.title': 'Arra n uraj (ⴰⵔⵔⴰ ⵏ ⵓⵔⴰⵊ)',
    'assocnet.creation.step3.desc': 'Amz arra n uraj s tazzla dffir uselkm n ukaram dar Ubaca nɣ Lqayd.',
    'assocnet.creation.step4.title': 'Arra n tgzirt (ⴰⵔⵔⴰ ⵏ ⵜⴳⵣⵉⵔⵜ)',
    'assocnet.creation.step4.desc': 'Amz arra n tgzirt g 60 n wass iɣ ur llin imzrayen n usadif.',
    'assocnet.creation.step': 'Asurif (ⴰⵙⵓⵔⵉⴼ)',
    'lang.selector.title': 'Sti tutlayt nnk (ⵙⵜⵉ ⵜⵓⵜⵍⴰⵢⵜ ⵏⵏⴽ)',
    'lang.selector.desc': 'Sti tutlayt nna tra dffir uselkm n AssocNet.',
    'lang.en': 'English',
    'lang.fr': 'Français',
    'lang.am': 'Amazigh (ⵜⴰⵎⴰⵣⵉⵖⵜ)',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('user_language');
    return (saved as Language) || 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('user_language', lang);
  };

  const t = (key: string): string => {
    return (translations[language] as any)[key] || (translations['en'] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
