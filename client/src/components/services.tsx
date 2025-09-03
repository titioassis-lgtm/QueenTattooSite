import { Palette, Brush, PenTool, Image, Shapes, Heart } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: 1,
      icon: Palette,
      title: "Design Personalizado",
      description: "Criamos designs únicos adaptados ao seu estilo e personalidade. Cada tatuagem é uma obra exclusiva.",
      price: "A partir de €80"
    },
    {
      id: 2,
      icon: Brush,
      title: "Tatuagem Tradicional",
      description: "Estilo clássico com cores vibrantes e traços marcantes. Honramos a tradição da tatuagem old school.",
      price: "A partir de €120"
    },
    {
      id: 3,
      icon: PenTool,
      title: "Fine Line",
      description: "Técnica delicada com linhas finas e detalhes precisos. Perfeito para designs minimalistas e elegantes.",
      price: "A partir de €100"
    },
    {
      id: 4,
      icon: Image,
      title: "Realismo",
      description: "Técnica avançada que recria imagens com detalhes fotográficos. Especialidade em retratos e natureza.",
      price: "A partir de €200"
    },
    {
      id: 5,
      icon: Shapes,
      title: "Geométrico",
      description: "Padrões geométricos complexos e mandalas. Precisão matemática transformada em arte corporal.",
      price: "A partir de €150"
    },
    {
      id: 6,
      icon: Heart,
      title: "Cover-Up",
      description: "Transformamos tatuagens antigas em novas obras de arte. Consultoria especializada em cobertura.",
      price: "Consulta Gratuita"
    }
  ];

  return (
    <section id="servicos" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" data-testid="services-title">
            Nossos <span className="text-accent">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="services-description">
            Oferecemos uma gama completa de serviços de tatuagem, desde consultorias personalizadas até workshops especializados.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="services-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id}
                className="glass-card rounded-lg p-8 text-center group hover:golden-glow transition-all duration-300"
                data-testid={`service-${service.id}`}
              >
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-2xl text-accent-foreground" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-4" data-testid={`service-title-${service.id}`}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed" data-testid={`service-description-${service.id}`}>
                  {service.description}
                </p>
                <div className="text-accent font-semibold" data-testid={`service-price-${service.id}`}>
                  {service.price}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
