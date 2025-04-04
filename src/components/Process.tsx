
import React from 'react';
import { ArrowRight, CheckCircle, Coffee, Search, Settings, Zap } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <Search className="h-6 w-6 text-white" />,
      title: "Onderzoek & Strategie",
      description: "We beginnen met een grondige analyse van uw bedrijf, markt en concurrentie om de beste strategie te ontwikkelen."
    },
    {
      icon: <Settings className="h-6 w-6 text-white" />,
      title: "Planning & Ontwerp",
      description: "We creëren gedetailleerde actieplannen en ontwerpen die aansluiten bij uw doelen en merkidentiteit."
    },
    {
      icon: <Zap className="h-6 w-6 text-white" />,
      title: "Uitvoering & Lancering",
      description: "We brengen onze strategieën tot leven met professionele ontwikkeling en implementatie van marketingcampagnes."
    },
    {
      icon: <Coffee className="h-6 w-6 text-white" />,
      title: "Analyse & Verbetering",
      description: "We monitoren voortdurend de resultaten en optimaliseren onze aanpak voor het beste rendement."
    }
  ];

  return (
    <section id="werkwijze" className="section">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Onze Werkwijze</h2>
          <p className="text-muted-foreground text-lg">
            Een beproefde methode die resultaten oplevert. Zo pakken we elk project aan om uw succes te garanderen.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-32 left-[11%] right-[11%] h-1 bg-primary/20 z-0"></div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-6">
                  {step.icon}
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] transform">
                    <ArrowRight className="text-primary/30 h-6 w-6" />
                  </div>
                )}
                
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 bg-accent rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Klaar om uw online aanwezigheid te verbeteren?</h3>
              <p className="text-muted-foreground mb-6">
                Wij helpen u bij elke stap van het proces om uw digitale marketingdoelen te bereiken.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Aangepaste strategieën voor uw specifieke behoeften",
                  "Transparante communicatie gedurende het hele project",
                  "Data-gedreven besluitvorming voor optimale resultaten",
                  "Voortdurende ondersteuning na lancering"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="text-xl font-bold mb-4">Plan een gratis consultatie</h4>
              <form>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Naam</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Uw naam"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">E-mail</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="uw@email.nl"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Bericht</label>
                    <textarea 
                      id="message" 
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Hoe kunnen we u helpen?"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full btn-primary"
                  >
                    Verstuur Aanvraag
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
