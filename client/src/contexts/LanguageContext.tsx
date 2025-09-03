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
    'services.title': 'NOSSOS SERVIÇOS',
    'services.subtitle': 'GAMA COMPLETA DE SERVIÇOS PROFISSIONAIS',
    'services.description': 'Desde consultorias personalizadas até workshops especializados',
    'services.design': 'Design Personalizado',
    'services.design.desc': 'Criamos designs únicos adaptados ao seu estilo e personalidade. Cada tatuagem é uma obra exclusiva.',
    'services.design.price': 'A partir de €80',
    'services.traditional': 'Tatuagem Tradicional',
    'services.traditional.desc': 'Estilo clássico com cores vibrantes e traços marcantes. Honramos a tradição da tatuagem old school.',
    'services.traditional.price': 'A partir de €120',
    'services.fineline': 'Fine Line',
    'services.fineline.desc': 'Técnica delicada com linhas finas e detalhes precisos. Perfeito para designs minimalistas e elegantes.',
    'services.fineline.price': 'A partir de €100',
    'services.realism': 'Realismo',
    'services.realism.desc': 'Técnica avançada que recria imagens com detalhes fotográficos. Especialidade em retratos e natureza.',
    'services.realism.price': 'A partir de €200',
    'services.geometric': 'Geométrico',
    'services.geometric.desc': 'Padrões geométricos complexos e mandalas. Precisão matemática transformada em arte corporal.',
    'services.geometric.price': 'A partir de €150',
    'services.coverup': 'Cover-Up',
    'services.coverup.desc': 'Transformamos tatuagens antigas em novas obras de arte. Consultoria especializada em cobertura.',
    'services.coverup.price': 'Consulta Gratuita',
    
    // Contact
    'contact.title': 'Entre em',
    'contact.titleAccent': 'Contato',
    'contact.description': 'Pronto para criar sua próxima obra de arte? Entre em contato conosco para agendar uma consulta.',
    'contact.formTitle': 'Envie uma Mensagem',
    'contact.infoTitle': 'Informações de Contato',
    'contact.name': 'Nome',
    'contact.email': 'Email',
    'contact.phone': 'Telefone',
    'contact.tattooType': 'Tipo de Tatuagem',
    'contact.message': 'Mensagem',
    'contact.namePlaceholder': 'Seu nome',
    'contact.emailPlaceholder': 'seu@email.com',
    'contact.phonePlaceholder': '+351 xxx xxx xxx',
    'contact.messagePlaceholder': 'Descreva sua ideia de tatuagem...',
    'contact.selectStyle': 'Selecione o estilo',
    'contact.submitBtn': 'Enviar Mensagem',
    'contact.submitting': 'Enviando...',
    'contact.success.title': 'Mensagem enviada!',
    'contact.success.desc': 'Entraremos em contato em breve.',
    'contact.error.title': 'Erro ao enviar mensagem',
    'contact.error.desc': 'Tente novamente mais tarde.',
    'contact.required.title': 'Campos obrigatórios',
    'contact.required.desc': 'Por favor, preencha nome, email e mensagem.',
    'contact.mapTitle': 'Mapa Interativo',
    'contact.mapDesc': 'Google Maps será integrado aqui',
    
    // Contact detailed info
    'contact.locationLabel': 'Localização',
    'contact.phoneLabel': 'Telefone', 
    'contact.emailLabel': 'Email',
    'contact.hoursLabel': 'Horário',
    'contact.address': 'Rua do Norte, 123\n1200-289 Lisboa, Portugal',
    'contact.hours': 'Segunda a Sexta: 10:00 - 20:00\nSábado: 10:00 - 18:00\nDomingo: Fechado',
    
    // Testimonials
    'testimonials.title': 'O Que Nossos',
    'testimonials.titleAccent': 'Clientes Dizem',
    'testimonials.subtitle': 'Histórias reais de quem confiou na nossa arte',
    'testimonials.1.name': 'Maria Costa',
    'testimonials.1.text': 'Experiência incrível! O ambiente é super profissional e o resultado superou todas as minhas expectativas. Recomendo totalmente!',
    'testimonials.2.name': 'João Silva', 
    'testimonials.2.text': 'A qualidade do trabalho é excepcional. Fiz uma tatuagem realista e ficou perfeita. A equipe é muito atenciosa e profissional.',
    'testimonials.3.name': 'Ana Santos',
    'testimonials.3.text': 'Desde a consulta até o resultado final, tudo foi perfeito. O estúdio tem um ambiente acolhedor e o artista é muito talentoso.',
    
    // Footer additional
    'footer.address': 'Lisboa, Portugal',
    'footer.phone': '+351 912 345 678',
    'footer.email': 'info@queenofheartslisboa.com',
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
    'services.title': 'OUR SERVICES',
    'services.subtitle': 'COMPLETE RANGE OF PROFESSIONAL SERVICES',
    'services.description': 'From personalized consultations to specialized workshops',
    'services.design': 'Custom Design',
    'services.design.desc': 'We create unique designs adapted to your style and personality. Each tattoo is an exclusive work.',
    'services.design.price': 'Starting at €80',
    'services.traditional': 'Traditional Tattoo',
    'services.traditional.desc': 'Classic style with vibrant colors and striking lines. We honor the old school tattoo tradition.',
    'services.traditional.price': 'Starting at €120',
    'services.fineline': 'Fine Line',
    'services.fineline.desc': 'Delicate technique with fine lines and precise details. Perfect for minimalist and elegant designs.',
    'services.fineline.price': 'Starting at €100',
    'services.realism': 'Realism',
    'services.realism.desc': 'Advanced technique that recreates images with photographic detail. Specializing in portraits and nature.',
    'services.realism.price': 'Starting at €200',
    'services.geometric': 'Geometric',
    'services.geometric.desc': 'Complex geometric patterns and mandalas. Mathematical precision transformed into body art.',
    'services.geometric.price': 'Starting at €150',
    'services.coverup': 'Cover-Up',
    'services.coverup.desc': 'We transform old tattoos into new works of art. Specialized coverage consulting.',
    'services.coverup.price': 'Free Consultation',
    
    // Contact
    'contact.title': 'Get in',
    'contact.titleAccent': 'Touch',
    'contact.description': 'Ready to create your next work of art? Contact us to schedule a consultation.',
    'contact.formTitle': 'Send a Message',
    'contact.infoTitle': 'Contact Information',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.tattooType': 'Tattoo Type',
    'contact.message': 'Message',
    'contact.namePlaceholder': 'Your name',
    'contact.emailPlaceholder': 'your@email.com',
    'contact.phonePlaceholder': '+351 xxx xxx xxx',
    'contact.messagePlaceholder': 'Describe your tattoo idea...',
    'contact.selectStyle': 'Select style',
    'contact.submitBtn': 'Send Message',
    'contact.submitting': 'Sending...',
    'contact.success.title': 'Message sent!',
    'contact.success.desc': 'We will contact you soon.',
    'contact.error.title': 'Error sending message',
    'contact.error.desc': 'Please try again later.',
    'contact.required.title': 'Required fields',
    'contact.required.desc': 'Please fill in name, email and message.',
    'contact.mapTitle': 'Interactive Map',
    'contact.mapDesc': 'Google Maps will be integrated here',
    
    // Contact detailed info
    'contact.locationLabel': 'Location',
    'contact.phoneLabel': 'Phone',
    'contact.emailLabel': 'Email', 
    'contact.hoursLabel': 'Hours',
    'contact.address': 'Rua do Norte, 123\n1200-289 Lisbon, Portugal',
    'contact.hours': 'Monday to Friday: 10:00 - 20:00\nSaturday: 10:00 - 18:00\nSunday: Closed',
    
    // Testimonials
    'testimonials.title': 'What Our',
    'testimonials.titleAccent': 'Clients Say',
    'testimonials.subtitle': 'Real stories from those who trusted our art', 
    'testimonials.1.name': 'Maria Costa',
    'testimonials.1.text': 'Incredible experience! The environment is super professional and the result exceeded all my expectations. I totally recommend it!',
    'testimonials.2.name': 'João Silva',
    'testimonials.2.text': 'The quality of the work is exceptional. I got a realistic tattoo and it turned out perfect. The team is very attentive and professional.',
    'testimonials.3.name': 'Ana Santos',
    'testimonials.3.text': 'From consultation to final result, everything was perfect. The studio has a welcoming atmosphere and the artist is very talented.',
    
    // Footer additional
    'footer.address': 'Lisbon, Portugal',
    'footer.phone': '+351 912 345 678',
    'footer.email': 'info@queenofheartslisboa.com',
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