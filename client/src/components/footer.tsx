import { Instagram, Facebook, Phone, MapPin, Mail } from "lucide-react";
import logoImage from "@assets/444492753_1007221770758862_3225863585255241508_n_1756924805834.jpg";

export default function Footer() {
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
              Estúdio premium de tatuagem em Lisboa, criando arte única com paixão e profissionalismo.
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
            <h4 className="neon-text text-lg font-bold mb-6 uppercase tracking-wide">Links Rápidos</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="hover:text-accent transition-colors duration-300"
                  data-testid="footer-link-inicio"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="hover:text-accent transition-colors duration-300"
                  data-testid="footer-link-portfolio"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="hover:text-accent transition-colors duration-300"
                  data-testid="footer-link-sobre"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="hover:text-accent transition-colors duration-300"
                  data-testid="footer-link-servicos"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="hover:text-accent transition-colors duration-300"
                  data-testid="footer-link-contato"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>
          
          <div data-testid="footer-services">
            <h4 className="neon-text text-lg font-bold mb-6 uppercase tracking-wide">Serviços</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-colors duration-300">Design Personalizado</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300">Tatuagem Tradicional</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300">Fine Line</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300">Realismo</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300">Cover-Up</a></li>
            </ul>
          </div>
          
          <div data-testid="footer-contact">
            <h4 className="neon-text text-lg font-bold mb-6 uppercase tracking-wide">Contato</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center">
                <MapPin className="text-accent mr-3 w-4 h-4" />
                Lisboa, Portugal
              </li>
              <li className="flex items-center">
                <Phone className="text-accent mr-3 w-4 h-4" />
                +351 912 345 678
              </li>
              <li className="flex items-center">
                <Mail className="text-accent mr-3 w-4 h-4" />
                info@queenofheartslisboa.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground" data-testid="footer-copyright">
          <p>&copy; 2024 Queen of Hearts Tattoos Lisboa. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
