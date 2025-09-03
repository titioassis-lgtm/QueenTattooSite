import { Instagram, Facebook, Phone, MapPin, Mail } from "lucide-react";
import logoImage from "@assets/queen_of_hearts_no_bg_v2_1756927539558.png";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border py-12 px-6" data-testid="footer">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div data-testid="footer-brand">
            <div className="flex items-center space-x-3 mb-6">
              <div className="cyber-border rounded-lg p-2 bg-gradient-to-r from-black to-red-900/20">
                <img 
                  src={logoImage}
                  alt="Queen of Hearts Tattoos Logo"
                  className="h-8 w-auto"
                  data-testid="footer-logo"
                />
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/queenofheartstattooslisbon/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:red-glow transition-all duration-300"
                data-testid="footer-instagram"
              >
                <Instagram className="text-accent-foreground" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                data-testid="footer-facebook"
              >
                <Facebook className="text-foreground" />
              </a>
            </div>
          </div>
          
          <div data-testid="footer-navigation">
            <h4 className="neon-text text-lg font-bold mb-6 uppercase tracking-wide">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="hover:text-accent transition-colors duration-300"
                  data-testid="footer-link-inicio"
                >
                  {t('nav.inicio')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="hover:text-accent transition-colors duration-300"
                  data-testid="footer-link-portfolio"
                >
                  {t('nav.portfolio')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="hover:text-accent transition-colors duration-300"
                  data-testid="footer-link-sobre"
                >
                  {t('nav.sobre')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="hover:text-accent transition-colors duration-300"
                  data-testid="footer-link-servicos"
                >
                  {t('nav.servicos')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="hover:text-accent transition-colors duration-300"
                  data-testid="footer-link-contato"
                >
                  {t('nav.contato')}
                </button>
              </li>
            </ul>
          </div>
          
          <div data-testid="footer-services">
            <h4 className="neon-text text-lg font-bold mb-6 uppercase tracking-wide">{t('footer.services')}</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-colors duration-300">{t('services.design')}</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300">{t('services.traditional')}</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300">{t('services.fineline')}</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300">{t('services.realism')}</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300">{t('services.coverup')}</a></li>
            </ul>
          </div>
          
          <div data-testid="footer-contact">
            <h4 className="neon-text text-lg font-bold mb-6 uppercase tracking-wide">{t('footer.contact')}</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center">
                <MapPin className="text-accent mr-3 w-4 h-4" />
                {t('footer.address')}
              </li>
              <li className="flex items-center">
                <Phone className="text-accent mr-3 w-4 h-4" />
                {t('footer.phone')}
              </li>
              <li className="flex items-center">
                <Mail className="text-accent mr-3 w-4 h-4" />
                {t('footer.email')}
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground" data-testid="footer-copyright">
          <p>&copy; 2024 Queen of Hearts Tattoos Lisboa. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
