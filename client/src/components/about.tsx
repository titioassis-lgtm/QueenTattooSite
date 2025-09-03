import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  return (
    <section id="sobre" className="py-20 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" data-testid="about-title">
              {t('about.title')} <span className="text-accent">{t('about.titleAccent')}</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid="about-description-1">
              {t('about.description1')}
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed" data-testid="about-description-2">
              {t('about.description2')}
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center" data-testid="stat-tattoos">
                <div className="text-3xl font-bold text-accent mb-2">500+</div>
                <div className="text-muted-foreground">{t('about.stat1')}</div>
              </div>
              <div className="text-center" data-testid="stat-experience">
                <div className="text-3xl font-bold text-accent mb-2">5</div>
                <div className="text-muted-foreground">{t('about.stat2')}</div>
              </div>
            </div>
            
            <Button className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:red-glow transition-all duration-300" data-testid="button-conhecer-equipe">
              {t('about.btnTeam')}
            </Button>
          </div>
          
          <div className="space-y-6" data-testid="about-images">
            {/* Professional tattoo studio interior */}
            <div className="glass-card rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                alt="Interior moderno do Queen of Hearts Tattoos"
                className="w-full h-64 object-cover"
                loading="lazy"
                decoding="async"
                data-testid="about-main-image"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {/* Tattoo equipment and hygiene standards */}
              <div className="glass-card rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80"
                  alt="Equipamentos profissionais Queen of Hearts"
                  className="w-full h-32 object-cover"
                  loading="lazy"
                  decoding="async"
                  data-testid="about-equipment-image"
                />
              </div>
              {/* Professional tattoo artist at work */}
              <div className="glass-card rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1594736797933-d0c86ba40665?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80"
                  alt="Artista Queen of Hearts trabalhando"
                  className="w-full h-32 object-cover"
                  loading="lazy"
                  decoding="async"
                  data-testid="about-artist-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
