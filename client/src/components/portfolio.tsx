export default function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      image: "https://d1kq2dqeox7x40.cloudfront.net/images/posts/20210417_06Aiv59YwWyOTnV.jpg",
      title: "Trabalho de Ann d'Cor",
      description: "Arte detalhada da nossa artista residente"
    },
    {
      id: 2,
      image: "https://d1kq2dqeox7x40.cloudfront.net/images/posts/20210417_j6gKFkbdt0UR5HX.jpg",
      title: "Estilo Tradicional",
      description: "Cores vibrantes e traços marcantes"
    },
    {
      id: 3,
      image: "https://d1kq2dqeox7x40.cloudfront.net/images/posts/20210405_efWks9BIzhXlB37.jpg",
      title: "Fine Line",
      description: "Delicadeza e precisão em cada traço"
    },
    {
      id: 4,
      image: "https://d1kq2dqeox7x40.cloudfront.net/images/posts/20210405_YwkFRM5tWlTeybV.jpg",
      title: "Arte Personalizada",
      description: "Design exclusivo Queen of Hearts"
    },
    {
      id: 5,
      image: "https://d1kq2dqeox7x40.cloudfront.net/images/posts/20210405_VonDv39scuUe1EG.jpg",
      title: "Trabalho Profissional",
      description: "Qualidade excepcional em cada detalhe"
    },
    {
      id: 6,
      image: "https://d1kq2dqeox7x40.cloudfront.net/images/posts/20191012_ybsBXdwxCaFJoFz.png",
      title: "Maksym Yakubchyk",
      description: "Obras do nosso artista especializado"
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
              className="glass-card rounded-lg overflow-hidden group cursor-pointer transform transition-all duration-300 hover:scale-102 will-change-transform"
              data-testid={`portfolio-item-${item.id}`}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 will-change-transform"
                  loading="lazy"
                  decoding="async"
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
          <a 
            href="https://www.instagram.com/queenofheartstattooslisbon/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-accent text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300" 
            data-testid="button-ver-mais"
          >
            Ver Mais Trabalhos
          </a>
        </div>
      </div>
    </section>
  );
}
