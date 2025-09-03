import { useState, useEffect } from "react";
import { Menu, X, Instagram, Globe } from "lucide-react";
import logoImage from "@assets/queen_of_hearts_no_bg_v2_1756927539558.png";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'glass-card border-b-2 border-accent neon-glow' 
            : 'bg-gradient-to-r from-black/80 via-red-900/20 to-black/80 border-b border-accent/50 backdrop-blur-sm'
        }`}
        data-testid="navigation"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection('inicio')}
              className="hover:scale-105 transition-all duration-300 will-change-transform"
              data-testid="logo-button"
            >
              <img 
                src={logoImage}
                alt="Queen of Hearts Tattoos Logo"
                className="h-16 w-auto"
              />
            </button>
            
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-white hover:text-accent transition-all duration-300 font-semibold uppercase tracking-wide text-sm hover:text-shadow-neon relative group"
                data-testid="nav-inicio"
              >
                <span className="relative z-10">{t('nav.inicio')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded"></div>
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-white hover:text-accent transition-all duration-300 font-semibold uppercase tracking-wide text-sm hover:text-shadow-neon relative group"
                data-testid="nav-portfolio"
              >
                <span className="relative z-10">{t('nav.portfolio')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded"></div>
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="text-white hover:text-accent transition-all duration-300 font-semibold uppercase tracking-wide text-sm hover:text-shadow-neon relative group"
                data-testid="nav-sobre"
              >
                <span className="relative z-10">{t('nav.sobre')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded"></div>
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="text-white hover:text-accent transition-all duration-300 font-semibold uppercase tracking-wide text-sm hover:text-shadow-neon relative group"
                data-testid="nav-servicos"
              >
                <span className="relative z-10">{t('nav.servicos')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded"></div>
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="text-white hover:text-accent transition-all duration-300 font-semibold uppercase tracking-wide text-sm hover:text-shadow-neon relative group"
                data-testid="nav-contato"
              >
                <span className="relative z-10">{t('nav.contato')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded"></div>
              </button>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
                className="p-2 rounded-lg hover:neon-glow transition-all duration-300 hover:scale-105 group flex items-center space-x-1"
                data-testid="language-toggle"
              >
                <Globe className="text-lg text-accent group-hover:text-white transition-colors" />
                <span className="text-sm font-semibold text-accent group-hover:text-white transition-colors">
                  {language.toUpperCase()}
                </span>
              </button>
              <a 
                href="https://www.instagram.com/queenofheartstattooslisbon/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:neon-glow transition-all duration-500 hover:scale-110 group"
                data-testid="instagram-link"
              >
                <Instagram className="text-xl text-accent group-hover:text-white transition-colors" />
              </a>
              <button 
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                data-testid="mobile-menu-toggle"
              >
                {isMobileMenuOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 glass-card md:hidden" data-testid="mobile-menu">
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
            <button
              onClick={() => scrollToSection('inicio')}
              className="hover:text-accent transition-colors duration-300"
              data-testid="mobile-nav-inicio"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="hover:text-accent transition-colors duration-300"
              data-testid="mobile-nav-portfolio"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="hover:text-accent transition-colors duration-300"
              data-testid="mobile-nav-sobre"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="hover:text-accent transition-colors duration-300"
              data-testid="mobile-nav-servicos"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="hover:text-accent transition-colors duration-300"
              data-testid="mobile-nav-contato"
            >
              Contato
            </button>
          </div>
        </div>
      )}
    </>
  );
}
