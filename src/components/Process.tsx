
import React from 'react';
import { ArrowRight, CheckCircle, Search, Cog, Zap, BarChart, Calendar, Inbox } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';

const Process = () => {
  const navigate = useNavigate();

  const steps = [
    {
      icon: <Search className="h-6 w-6 text-white" />,
      title: "Analyse & Ontdekking",
      description: "We beginnen met een grondige analyse van uw huidige processen en identificeren waar automatisering de meeste waarde kan toevoegen."
    },
    {
      icon: <Cog className="h-6 w-6 text-white" />,
      title: "Oplossing Ontwerp",
      description: "We ontwikkelen op maat gemaakte automatiseringsoplossingen die perfect aansluiten bij uw zakelijke behoeften en doelstellingen."
    },
    {
      icon: <Zap className="h-6 w-6 text-white" />,
      title: "Implementatie & Training",
      description: "We zorgen voor een soepele implementatie en trainen uw team om het maximale uit de nieuwe systemen te halen."
    },
    {
      icon: <BarChart className="h-6 w-6 text-white" />,
      title: "Monitoring & Optimalisatie",
      description: "We blijven uw systemen monitoren en optimaliseren om ervoor te zorgen dat ze blijven presteren en meegroeien met uw bedrijf."
    }
  ];

  const handleDemoRequest = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      toast({
        title: "Plan een demonstratie",
        description: "Vul het contactformulier in en we nemen binnen 24 uur contact met u op voor een demo.",
      });
    }
  };

  const handleSolutions = () => {
    const element = document.getElementById('diensten');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      toast({
        title: "Onze oplossingen",
        description: "Bekijk onze diensten en ontdek wat wij voor u kunnen betekenen.",
      });
    }
  };

  return (
    <section id="werkwijze" className="section">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hoe Wij Werken</h2>
          <p className="text-muted-foreground text-lg">
            Onze bewezen methodologie zorgt voor succesvolle implementatie van automatisering en verbetering van uw bedrijfsprocessen.
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
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Klaar om uw bedrijfsprocessen te automatiseren?</h3>
              <p className="text-muted-foreground mb-6">
                Wij helpen u bij elke stap om uw bedrijfsprocessen te stroomlijnen en efficiënter te maken.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Maatwerk automatisering afgestemd op uw specifieke behoeften",
                  "Verbeterde klantenservice door slimme systemen",
                  "Datagestuurde marketing voor optimale resultaten",
                  "Doorlopende ondersteuning en optimalisatie"
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
              <form className="space-y-4">
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
                <div className="space-y-4">
                  <Button 
                    type="submit" 
                    className="w-full"
                  >
                    Verstuur Aanvraag
                  </Button>
                  <Button 
                    type="button"
                    variant="outline"
                    className="w-full"
                    onClick={() => navigate('/aanvragen')}
                  >
                    <Inbox className="mr-2 h-4 w-4" />
                    Bekijk verzonden aanvragen
                  </Button>
                  <Button 
                    type="button"
                    variant="outline"
                    className="w-full"
                    onClick={handleDemoRequest}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Plan een demonstratie
                  </Button>
                  <Button 
                    type="button"
                    variant="outline"
                    className="w-full"
                    onClick={handleSolutions}
                  >
                    <Search className="mr-2 h-4 w-4" />
                    Ontdek onze oplossingen
                  </Button>
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
