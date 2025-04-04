
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <section id="diensten">
        <Services />
      </section>
      <section id="werkwijze">
        <Process />
      </section>
      <section id="cases">
        <Testimonials />
      </section>
      <section id="over-ons">
        <div className="py-20 bg-accent/30">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Over Ons</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg mb-8">
                Bij Savy zijn we gespecialiseerd in het stroomlijnen van bedrijfsprocessen door slimme automatiseringsoplossingen. 
                Onze expertise ligt in het ontwikkelen van systemen voor klantenservice en marketing die uw bedrijf helpen efficiënter te werken en betere resultaten te behalen.
              </p>
              <p className="text-lg mb-8">
                Met meer dan 12 jaar ervaring hebben we al meer dan 200 bedrijven geholpen om hun operationele processen te optimaliseren 
                en hun klantervaring te verbeteren. Onze aanpak is altijd praktisch, resultaatgericht en op maat gemaakt voor de specifieke behoeften van uw organisatie.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="blog">
        <div className="py-20">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Blog</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop" alt="Blog post" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">5 manieren om uw klantenservice te automatiseren</h3>
                  <p className="text-muted-foreground mb-4">Ontdek hoe u tijd kunt besparen en de klanttevredenheid kunt verhogen met deze automatiseringstips.</p>
                  <a href="#" className="text-primary font-medium">Lees meer</a>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <img src="https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=500&auto=format&fit=crop" alt="Blog post" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">De toekomst van marketing automatisering</h3>
                  <p className="text-muted-foreground mb-4">Hoe AI en machine learning de marketingstrategieën van morgen vormgeven.</p>
                  <a href="#" className="text-primary font-medium">Lees meer</a>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=500&auto=format&fit=crop" alt="Blog post" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">Waarom bedrijven kiezen voor procesautomatisering</h3>
                  <p className="text-muted-foreground mb-4">Een diepgaande analyse van de voordelen en ROI van procesautomatisering voor middelgrote bedrijven.</p>
                  <a href="#" className="text-primary font-medium">Lees meer</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="py-20 bg-accent/30">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Contact</h2>
            <div className="max-w-2xl mx-auto">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">Naam</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Uw naam"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="uw@email.nl"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium">Onderwerp</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Hoe kunnen we u helpen?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">Bericht</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Uw bericht..."
                  ></textarea>
                </div>
                <Button className="btn-primary w-full">Verstuur bericht</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
