import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  
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
      
      {/* Animated particles background */}
      <div className="floating-particles">
        <div className="particle" style={{left: '10%', animationDelay: '0s'}}></div>
        <div className="particle" style={{left: '20%', animationDelay: '2s'}}></div>
        <div className="particle" style={{left: '30%', animationDelay: '4s'}}></div>
        <div className="particle" style={{left: '40%', animationDelay: '1s'}}></div>
        <div className="particle" style={{left: '50%', animationDelay: '3s'}}></div>
        <div className="particle" style={{left: '60%', animationDelay: '5s'}}></div>
        <div className="particle" style={{left: '70%', animationDelay: '2.5s'}}></div>
        <div className="particle" style={{left: '80%', animationDelay: '4.5s'}}></div>
        <div className="particle" style={{left: '90%', animationDelay: '1.5s'}}></div>
      </div>
      
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6" data-testid="hero-content">
        <div className="mb-12 animate-[optimized-fade_0.6s_ease-out]">
          <h1 className="cyber-title text-4xl md:text-6xl lg:text-8xl font-bold mb-4 animate-[fade-in_1s_ease-out_0.5s_both]" data-testid="hero-title">
            {t('hero.title')}
          </h1>
          <h2 className="neon-text text-2xl md:text-4xl mb-8 animate-[fade-in_1s_ease-out_1s_both]" data-testid="hero-subtitle">
            {t('hero.subtitle')}
          </h2>
        </div>
        
        <p className="text-xl md:text-2xl text-foreground mb-16 leading-relaxed animate-[fade-in_1s_ease-out_1.5s_both] font-medium tracking-wide" data-testid="hero-description">
          <span className="text-shadow-neon">{t('hero.description1')}</span><br />
          <span className="text-accent">{t('hero.description2')}</span><br />
          <span className="text-muted-foreground">{t('hero.description3')}</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-8 justify-center animate-[fade-in_1s_ease-out_2s_both]">
          <Button 
            className="cyber-border neon-glow px-12 py-6 text-xl font-bold uppercase tracking-wider text-white bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 transition-all duration-500 transform hover:scale-110 animate-[glow-pulse_3s_ease-in-out_infinite_alternate]"
            onClick={() => scrollToSection('portfolio')}
            data-testid="button-ver-portfolio"
          >
            {t('hero.btnPortfolio')}
          </Button>
          <Button 
            className="px-12 py-6 text-xl font-bold uppercase tracking-wider text-white border-2 border-white bg-transparent hover:bg-white hover:text-black transition-all duration-500 transform hover:scale-110"
            onClick={() => scrollToSection('contato')}
            data-testid="button-fale-conosco"
          >
            {t('hero.btnContact')}
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
