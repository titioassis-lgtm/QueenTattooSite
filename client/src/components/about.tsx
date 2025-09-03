import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section id="sobre" className="py-20 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" data-testid="about-title">
              Sobre o <span className="text-accent">Estúdio</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid="about-description-1">
              O Queen of Hearts Tattoos nasceu da paixão pela arte e pelo desejo de criar experiências únicas. Localizado no coração de Lisboa, nosso estúdio combina tradição e inovação para oferecer tatuagens excepcionais.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed" data-testid="about-description-2">
              Com anos de experiência e técnicas aperfeiçoadas, nossos artistas transformam suas ideias em obras-primas permanentes, sempre respeitando os mais altos padrões de segurança e higiene.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center" data-testid="stat-tattoos">
                <div className="text-3xl font-bold text-accent mb-2">500+</div>
                <div className="text-muted-foreground">Tatuagens Realizadas</div>
              </div>
              <div className="text-center" data-testid="stat-experience">
                <div className="text-3xl font-bold text-accent mb-2">5</div>
                <div className="text-muted-foreground">Anos de Experiência</div>
              </div>
            </div>
            
            <Button className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:red-glow transition-all duration-300" data-testid="button-conhecer-equipe">
              Conhecer a Equipe
            </Button>
          </div>
          
          <div className="space-y-6" data-testid="about-images">
            {/* Professional tattoo studio interior */}
            <div className="glass-card rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1565058379802-bbe93b2a46c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Interior moderno do Queen of Hearts Tattoos"
                className="w-full h-64 object-cover"
                data-testid="about-main-image"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {/* Tattoo equipment and hygiene standards */}
              <div className="glass-card rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                  alt="Equipamentos profissionais Queen of Hearts"
                  className="w-full h-32 object-cover"
                  data-testid="about-equipment-image"
                />
              </div>
              {/* Professional tattoo artist at work */}
              <div className="glass-card rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1590246814883-57c511ad2d05?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                  alt="Artista Queen of Hearts trabalhando"
                  className="w-full h-32 object-cover"
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
