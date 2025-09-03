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
        <div className="text-center mb-20">
          <h2 className="cyber-title text-5xl md:text-7xl font-bold mb-8 animate-[fade-in_1s_ease-out]" data-testid="services-title">
            NOSSOS SERVIÇOS
          </h2>
          <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto leading-relaxed animate-[fade-in_1s_ease-out_0.3s_both]" data-testid="services-description">
            <span className="neon-text font-bold">GAMA COMPLETA DE SERVIÇOS PROFISSIONAIS</span><br />
            <span className="text-muted-foreground">Desde consultorias personalizadas até workshops especializados</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="services-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id}
                className="holographic rounded-xl p-8 text-center group hover:neon-glow transition-all duration-700 transform hover:scale-105 hover:-rotate-1 animate-[fade-in_1s_ease-out]"
                style={{animationDelay: `${service.id * 0.15}s`}}
                data-testid={`service-${service.id}`}
              >
                <div className="cyber-border w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:neon-glow transition-all duration-500 bg-gradient-to-br from-accent to-red-700">
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
