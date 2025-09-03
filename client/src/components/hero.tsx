import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/444492753_1007221770758862_3225863585255241508_n_1756924805834.jpg";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dark artistic background with texture */}
      <div className="absolute inset-0 hero-bg" />
      
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6" data-testid="hero-content">
        <div className="mb-8 animate-fade-in">
          <div className="mb-8 flex justify-center" data-testid="hero-logo-container">
            <div className="vintage-border rounded-lg p-4 bg-black/50 backdrop-blur-sm">
              <img 
                src={logoImage}
                alt="Queen of Hearts Tattoos Logo"
                className="h-40 w-auto drop-shadow-2xl"
                data-testid="hero-logo"
              />
            </div>
          </div>
          <h2 className="font-serif text-2xl md:text-3xl text-muted-foreground mb-8 tattoo-shadow" data-testid="hero-subtitle">
            ⚜ Tattoos Lisboa ⚜
          </h2>
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed animate-fade-in" data-testid="hero-description">
          Onde a arte encontra a pele. Estúdio premium de tatuagem no coração de Lisboa,<br />
          criando obras únicas com paixão e profissionalismo.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in">
          <Button 
            className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:red-glow transition-all duration-300 transform hover:scale-105"
            onClick={() => scrollToSection('portfolio')}
            data-testid="button-ver-portfolio"
          >
            Ver Portfolio
          </Button>
          <Button 
            variant="outline"
            className="border border-accent text-accent px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            onClick={() => scrollToSection('contato')}
            data-testid="button-agendar-consulta"
          >
            Agendar Consulta
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" data-testid="scroll-indicator">
        <ChevronDown className="text-accent text-2xl" />
      </div>
    </section>
  );
}
