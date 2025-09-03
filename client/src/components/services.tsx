import { Palette, Brush, PenTool, Image, Shapes, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Services() {
  const { t } = useLanguage();
  
  const services = [
    {
      id: 1,
      icon: Palette,
      title: t('services.design'),
      description: t('services.design.desc'),
      price: t('services.design.price')
    },
    {
      id: 2,
      icon: Brush,
      title: t('services.traditional'),
      description: t('services.traditional.desc'),
      price: t('services.traditional.price')
    },
    {
      id: 3,
      icon: PenTool,
      title: t('services.fineline'),
      description: t('services.fineline.desc'),
      price: t('services.fineline.price')
    },
    {
      id: 4,
      icon: Image,
      title: t('services.realism'),
      description: t('services.realism.desc'),
      price: t('services.realism.price')
    },
    {
      id: 5,
      icon: Shapes,
      title: t('services.geometric'),
      description: t('services.geometric.desc'),
      price: t('services.geometric.price')
    },
    {
      id: 6,
      icon: Heart,
      title: t('services.coverup'),
      description: t('services.coverup.desc'),
      price: t('services.coverup.price')
    }
  ];

  return (
    <section id="servicos" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="cyber-title text-5xl md:text-7xl font-bold mb-8 animate-[fade-in_0.6s_ease-out]" data-testid="services-title">
            {t('services.title')}
          </h2>
          <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto leading-relaxed animate-[fade-in_0.6s_ease-out_0.2s_both]" data-testid="services-description">
            <span className="neon-text font-bold">{t('services.subtitle')}</span><br />
            <span className="text-muted-foreground">{t('services.description')}</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="services-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id}
                className="holographic rounded-xl p-8 text-center group hover:neon-glow transition-all duration-300 ease-out transform hover:scale-[1.02] hover:translate-y-[-4px] animate-[slide-up_0.5s_ease-out] hover:shadow-2xl hover:shadow-accent/20"
                style={{animationDelay: `${service.id * 0.08}s`}}
                data-testid={`service-${service.id}`}
              >
                <div className="cyber-border w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:neon-glow transition-all duration-200 ease-out bg-gradient-to-br from-accent to-red-700 group-hover:rotate-12">
                  <Icon className="text-3xl text-white" />
                </div>
                <h3 className="neon-text text-2xl font-bold mb-6 uppercase tracking-wider" data-testid={`service-title-${service.id}`}>
                  {service.title}
                </h3>
                <p className="text-foreground mb-8 leading-relaxed font-medium" data-testid={`service-description-${service.id}`}>
                  {service.description}
                </p>
                <div className="cyber-border inline-block px-6 py-3 rounded-lg">
                  <div className="text-accent font-bold text-lg uppercase tracking-wide" data-testid={`service-price-${service.id}`}>
                    {service.price}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
