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
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Interior moderno do estúdio de tatuagem"
                className="w-full h-64 object-cover"
                data-testid="about-main-image"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {/* Tattoo equipment and hygiene standards */}
              <div className="glass-card rounded-lg overflow-hidden">
                <img 
                  src="https://pixabay.com/get/g7ca4351bd57e30495f92551e09d79b84f4eecbf10f3fe4c09672f402a66e79fcdea34f6fc3540a307dbf4a7be22234ab393450807bbeba162af3b1696e9f975a_1280.jpg"
                  alt="Equipamentos profissionais de tatuagem"
                  className="w-full h-32 object-cover"
                  data-testid="about-equipment-image"
                />
              </div>
              {/* Professional tattoo artist at work */}
              <div className="glass-card rounded-lg overflow-hidden">
                <img 
                  src="https://pixabay.com/get/g7e65ab49edc030836d4418e648313ceb0e2a6d562a280a1deede9d942e3c510d4d62a5ed7dde8def759305c94471ef9dc94939dfd3b099d5f3eb1795cbb9c8e4_1280.jpg"
                  alt="Artista profissional criando tatuagem"
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
