import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Portfolio from "@/components/portfolio";
import About from "@/components/about";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Portfolio />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
