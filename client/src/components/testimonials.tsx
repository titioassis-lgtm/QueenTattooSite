import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();
  
  const testimonials = [
    {
      id: 1,
      name: t('testimonials.1.name'),
      initials: "MC",
      rating: 5,
      text: t('testimonials.1.text')
    },
    {
      id: 2,
      name: t('testimonials.2.name'),
      initials: "JS",
      rating: 5,
      text: t('testimonials.2.text')
    },
    {
      id: 3,
      name: t('testimonials.3.name'),
      initials: "AS",
      rating: 5,
      text: t('testimonials.3.text')
    }
  ];

  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" data-testid="testimonials-title">
            {t('testimonials.title')} <span className="text-accent">{t('testimonials.titleAccent')}</span>
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="testimonials-subtitle">
            {t('testimonials.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="glass-card rounded-lg p-8 relative"
              data-testid={`testimonial-${testimonial.id}`}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                  <span className="text-accent-foreground font-semibold" data-testid={`testimonial-initials-${testimonial.id}`}>
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold" data-testid={`testimonial-name-${testimonial.id}`}>
                    {testimonial.name}
                  </h4>
                  <div className="flex text-accent text-sm" data-testid={`testimonial-rating-${testimonial.id}`}>
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 italic" data-testid={`testimonial-text-${testimonial.id}`}>
                "{testimonial.text}"
              </p>
              <div className="text-accent text-4xl absolute top-4 right-6 opacity-20">
                <Quote className="w-8 h-8" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
