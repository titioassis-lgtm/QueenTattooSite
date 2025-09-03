import { useState, useEffect } from "react";
import { Crown, Menu, X, Instagram } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        className={`fixed top-0 left-0 right-0 z-50 glass-card transition-all duration-300 ${
          isScrolled ? 'bg-opacity-95' : ''
        }`}
        data-testid="navigation"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection('inicio')}
              className="flex items-center space-x-2 hover:text-accent transition-colors duration-300"
              data-testid="logo-button"
            >
              <Crown className="text-accent text-2xl" />
              <span className="font-serif text-xl font-bold">Queen of Hearts</span>
            </button>
            
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('inicio')}
                className="hover:text-accent transition-colors duration-300"
                data-testid="nav-inicio"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="hover:text-accent transition-colors duration-300"
                data-testid="nav-portfolio"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="hover:text-accent transition-colors duration-300"
                data-testid="nav-sobre"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="hover:text-accent transition-colors duration-300"
                data-testid="nav-servicos"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="hover:text-accent transition-colors duration-300"
                data-testid="nav-contato"
              >
                Contato
              </button>
            </div>
            
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.instagram.com/queenofheartstattooslisbon/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-300"
                data-testid="instagram-link"
              >
                <Instagram className="text-xl" />
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
