import { useLanguage } from "@/contexts/LanguageContext";

export default function Portfolio() {
  const { t } = useLanguage();
  const portfolioItems = [
    {
      id: 1,
      image: "https://d1kq2dqeox7x40.cloudfront.net/images/posts/20210417_06Aiv59YwWyOTnV.jpg",
      title: t('portfolio.item1.title'),
      description: t('portfolio.item1.desc')
    },
    {
      id: 2,
      image: "https://d1kq2dqeox7x40.cloudfront.net/images/posts/20210417_j6gKFkbdt0UR5HX.jpg",
      title: t('portfolio.item2.title'),
      description: t('portfolio.item2.desc')
    },
    {
      id: 3,
      image: "https://d1kq2dqeox7x40.cloudfront.net/images/posts/20210405_efWks9BIzhXlB37.jpg",
      title: t('portfolio.item3.title'),
      description: t('portfolio.item3.desc')
    },
    {
      id: 4,
      image: "https://d1kq2dqeox7x40.cloudfront.net/images/posts/20210405_YwkFRM5tWlTeybV.jpg",
      title: t('portfolio.item4.title'),
      description: t('portfolio.item4.desc')
    },
    {
      id: 5,
      image: "https://d1kq2dqeox7x40.cloudfront.net/images/posts/20210405_VonDv39scuUe1EG.jpg",
      title: t('portfolio.item5.title'),
      description: t('portfolio.item5.desc')
    },
    {
      id: 6,
      image: "https://d1kq2dqeox7x40.cloudfront.net/images/posts/20191012_ybsBXdwxCaFJoFz.png",
      title: t('portfolio.item6.title'),
      description: t('portfolio.item6.desc')
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" data-testid="portfolio-title">
            {t('portfolio.title')} <span className="text-accent">{t('portfolio.titleAccent')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="portfolio-description">
            {t('portfolio.description')}
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
            {t('portfolio.btnMore')}
          </a>
        </div>
      </div>
    </section>
  );
}
