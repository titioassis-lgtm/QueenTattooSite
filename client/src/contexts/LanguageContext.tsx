import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Traduções
const translations = {
  pt: {
    // Navigation
    'nav.inicio': 'INÍCIO',
    'nav.portfolio': 'PORTFOLIO',
    'nav.sobre': 'SOBRE',
    'nav.servicos': 'SERVIÇOS',
    'nav.contato': 'CONTATO',
    
    // Hero Section
    'hero.title': 'QUEEN OF HEARTS',
    'hero.subtitle': '◆ TATTOOS LISBOA ◆',
    'hero.description1': 'ONDE A ARTE ENCONTRA A PELE',
    'hero.description2': 'Estúdio premium de tatuagem no coração de Lisboa',
    'hero.description3': 'Criando obras únicas com paixão e profissionalismo',
    'hero.btnPortfolio': '◆ VER PORTFOLIO ◆',
    'hero.btnContact': '◇ FALE CONOSCO ◇',
    
    // Portfolio Section
    'portfolio.title': 'Nosso',
    'portfolio.titleAccent': 'Portfolio',
    'portfolio.description': 'Cada tatuagem é uma obra de arte única. Explore nossa coleção de trabalhos realizados com dedicação e técnica excepcional.',
    'portfolio.btnMore': 'Ver Mais Trabalhos',
    
    // Portfolio Items
    'portfolio.item1.title': 'Trabalho de Ann d\'Cor',
    'portfolio.item1.desc': 'Arte detalhada da nossa artista residente',
    'portfolio.item2.title': 'Estilo Tradicional',
    'portfolio.item2.desc': 'Cores vibrantes e traços marcantes',
    'portfolio.item3.title': 'Fine Line',
    'portfolio.item3.desc': 'Delicadeza e precisão em cada traço',
    'portfolio.item4.title': 'Arte Personalizada',
    'portfolio.item4.desc': 'Design exclusivo Queen of Hearts',
    'portfolio.item5.title': 'Trabalho Profissional',
    'portfolio.item5.desc': 'Qualidade excepcional em cada detalhe',
    'portfolio.item6.title': 'Maksym Yakubchyk',
    'portfolio.item6.desc': 'Obras do nosso artista especializado',
    
    // About Section
    'about.title': 'Sobre o',
    'about.titleAccent': 'Estúdio',
    'about.description1': 'O Queen of Hearts Tattoos nasceu da paixão pela arte e pelo desejo de criar experiências únicas. Localizado no coração de Lisboa, nosso estúdio combina tradição e inovação para oferecer tatuagens excepcionais.',
    'about.description2': 'Com anos de experiência e técnicas aperfeiçoadas, nossos artistas transformam suas ideias em obras-primas permanentes, sempre respeitando os mais altos padrões de segurança e higiene.',
    'about.stat1': 'Tatuagens Realizadas',
    'about.stat2': 'Anos de Experiência',
    'about.btnTeam': 'Conhecer a Equipe',
    
    // Footer
    'footer.description': 'Estúdio premium de tatuagem em Lisboa, criando arte única com paixão e profissionalismo.',
    'footer.quickLinks': 'Links Rápidos',
    'footer.services': 'Serviços',
    'footer.contact': 'Contato',
    'footer.copyright': 'Todos os direitos reservados.',
    
    // Services
    'services.design': 'Design Personalizado',
    'services.traditional': 'Tatuagem Tradicional',
    'services.fineline': 'Fine Line',
    'services.realism': 'Realismo',
    'services.coverup': 'Cover-Up',
  },
  
  en: {
    // Navigation
    'nav.inicio': 'HOME',
    'nav.portfolio': 'PORTFOLIO',
    'nav.sobre': 'ABOUT',
    'nav.servicos': 'SERVICES',
    'nav.contato': 'CONTACT',
    
    // Hero Section
    'hero.title': 'QUEEN OF HEARTS',
    'hero.subtitle': '◆ TATTOOS LISBON ◆',
    'hero.description1': 'WHERE ART MEETS SKIN',
    'hero.description2': 'Premium tattoo studio in the heart of Lisbon',
    'hero.description3': 'Creating unique artwork with passion and professionalism',
    'hero.btnPortfolio': '◆ VIEW PORTFOLIO ◆',
    'hero.btnContact': '◇ CONTACT US ◇',
    
    // Portfolio Section
    'portfolio.title': 'Our',
    'portfolio.titleAccent': 'Portfolio',
    'portfolio.description': 'Every tattoo is a unique work of art. Explore our collection of work done with dedication and exceptional technique.',
    'portfolio.btnMore': 'View More Work',
    
    // Portfolio Items
    'portfolio.item1.title': 'Ann d\'Cor\'s Work',
    'portfolio.item1.desc': 'Detailed art from our resident artist',
    'portfolio.item2.title': 'Traditional Style',
    'portfolio.item2.desc': 'Vibrant colors and striking lines',
    'portfolio.item3.title': 'Fine Line',
    'portfolio.item3.desc': 'Delicacy and precision in every line',
    'portfolio.item4.title': 'Custom Art',
    'portfolio.item4.desc': 'Exclusive Queen of Hearts design',
    'portfolio.item5.title': 'Professional Work',
    'portfolio.item5.desc': 'Exceptional quality in every detail',
    'portfolio.item6.title': 'Maksym Yakubchyk',
    'portfolio.item6.desc': 'Works from our specialized artist',
    
    // About Section
    'about.title': 'About the',
    'about.titleAccent': 'Studio',
    'about.description1': 'Queen of Hearts Tattoos was born from a passion for art and the desire to create unique experiences. Located in the heart of Lisbon, our studio combines tradition and innovation to offer exceptional tattoos.',
    'about.description2': 'With years of experience and refined techniques, our artists transform your ideas into permanent masterpieces, always respecting the highest safety and hygiene standards.',
    'about.stat1': 'Tattoos Completed',
    'about.stat2': 'Years of Experience',
    'about.btnTeam': 'Meet the Team',
    
    // Footer
    'footer.description': 'Premium tattoo studio in Lisbon, creating unique art with passion and professionalism.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.copyright': 'All rights reserved.',
    
    // Services
    'services.design': 'Custom Design',
    'services.traditional': 'Traditional Tattoo',
    'services.fineline': 'Fine Line',
    'services.realism': 'Realism',
    'services.coverup': 'Cover-Up',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'pt';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
  }, [language]);

  const t = (key: string): string => {
    return (translations[language] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}