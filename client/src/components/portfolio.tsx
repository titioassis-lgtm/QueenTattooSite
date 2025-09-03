export default function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1565058379802-bbe93b2a46c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
      title: "Realismo Preto & Cinza",
      description: "Técnica avançada de sombreamento"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1590246814883-57c511ad2d05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
      title: "Estilo Tradicional",
      description: "Cores vibrantes e traços marcantes"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
      title: "Fine Line",
      description: "Delicadeza e precisão em cada traço"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
      title: "Geometria Sagrada",
      description: "Padrões complexos e simétricos"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
      title: "Estilo Japonês",
      description: "Tradição milenar oriental"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1594736797933-d0c86ba40665?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
      title: "Aquarela",
      description: "Efeitos artísticos únicos"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" data-testid="portfolio-title">
            Nosso <span className="text-accent">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="portfolio-description">
            Cada tatuagem é uma obra de arte única. Explore nossa coleção de trabalhos realizados com dedicação e técnica excepcional.
          </p>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="portfolio-grid">
          {portfolioItems.map((item) => (
            <div 
              key={item.id}
              className="glass-card rounded-lg overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:red-glow"
              data-testid={`portfolio-item-${item.id}`}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-testid={`portfolio-image-${item.id}`}
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2" data-testid={`portfolio-title-${item.id}`}>
                  {item.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`portfolio-description-${item.id}`}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="border border-accent text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300" data-testid="button-ver-mais">
            Ver Mais Trabalhos
          </button>
        </div>
      </div>
    </section>
  );
}
